var http = require('http');
var urltool = require('url');
var querystring = require('querystring');
var jade = require('jade');
var fs = require('fs');
var validator = require('./validator');

var users = {} //储存用户
http.createServer(function(req, res) {
    //req require res ---
    res.writeHead(200, { 'host': 'localhost' });
    switch (req.url) {
        case '/validator.js':
            sendFile(res, 'validator.js', 'text/javascript');
            break;
        case '/signup.js':
            sendFile(res, 'signup.js', 'text/javascript');
            break;
        case '/style.css':
            sendFile(res, 'style.css', 'text/css');
            break;
        default:
            req.method === 'POST' ? registerUser(req, res) : sendHtml(req, res);
    } //如果收到post ，注册 否则 仍得到原页面？？？？
}).listen(8000);

console.log("sign up server is listening at 8000");

function sendFile(res, filepath, mime) {
    res.writeHead(200, { "Content-Type": mime });
    res.end(fs.readFileSync(filepath));
}

function registerUser(req, res) {
    req.on('data', function(chunk) {
        try {
            var user = parseUser(chunk.toString());
            checkUser(user);
            users[user.username] = user;
            res.writeHead(301, { Location: '?username=' + user.username });
            res.end();
        } catch (error) {
            console.warn("regist error: ", error);
            showSignup(res, user, error.message);
        }
    });
}

function checkUser(user) {
    var errorMessages = []
    for (var key in user) {
        if (!validator.isFieldValid(key, user[key])) errorMessages.push(validator.form[key].errorMessages);
        if (!validator.isAttrValueUnique(users, user, key)) errorMessages.push(
            "key: " + key + " is not unique by value: " + user[key]
        );
    }
    if (errorMessages.length > 0) throw new Error(errorMessages.join('<br />'));
}

function parseUser(message) {
    params = message.match(/username=(.+)&sid=(.+)&phone=(.+)&email=(.+)/);
    var user = { username: params[1], sid: params[2], phone: params[3], email: decodeURIComponent(params[4]) };
    console.log("user parsed is ", user);
    return user;
}

function sendHtml(req, res) {
    var username = parseUsername(req);
    if (!username || !isRegisterUser(username)) {
        showSignup(res, { username: username }, null);
    } else {
        showDetail(res, users[username]); // 显示用户信息，page2
    }
}

function parseUsername(req) {
    return querystring.parse(urltool.parse(req.url).query).username;
}

function isRegisterUser(username) {
    if (users[username]) return true;
    return false;
}

function showSignup(res, user, error) {
    showHtml(res, 'signup.jade', { user: user, error: error });
}

function showDetail(res, user) {
    showHtml(res, 'detial.jade', user);
}

function showHtml(res, template, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(jade.renderFile(template, data));
}