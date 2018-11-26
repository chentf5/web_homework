
window.onload = function()	{
	document.getElementById("clear").onclick = function()	{
		document.getElementById("pa").value = "";
	}
	document.getElementById("one").onclick = function()	{
		var char = document.getElementById("one").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("two").onclick = function()	{
		var char = document.getElementById("two").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("three").onclick = function()	{
		var char = document.getElementById("three").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("four").onclick = function()	{
		var char = document.getElementById("four").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("five").onclick = function()	{
		var char = document.getElementById("five").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("six").onclick = function()	{
		var char = document.getElementById("six").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("seven").onclick = function()	{
		var char = document.getElementById("seven").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("eight").onclick = function()	{
		var char = document.getElementById("eight").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("nine").onclick = function()	{
		var char = document.getElementById("nine").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("zero").onclick = function()	{
		var char = document.getElementById("zero").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("add").onclick = function()	{
		var char = document.getElementById("add").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("sub").onclick = function()	{
		var char = document.getElementById("sub").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("mul").onclick = function()	{
		var char = document.getElementById("mul").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("div").onclick = function()	{
		var char = document.getElementById("div").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("point").onclick = function()	{
		var char = document.getElementById("point").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("front").onclick = function()	{
		var char = document.getElementById("front").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("back").onclick = function()	{
		var char = document.getElementById("back").value;
		document.getElementById("pa").value += char;
	}
	document.getElementById("del").onclick = function() {
		var x = document.getElementById("pa").value;
		x = x.substr(0,x.length-1);
		document.getElementById("pa").value=x;
	}
	document.getElementById("get").onclick = function () {
		var shizhi = document.getElementById("pa").value;
		var test = shizhi;
		var t= 0;
		for (var i = 0; i<test.length-1; i++) {
			if(test[i] == '/' ) {
				if(test[i+1] == '/')	{
					t=1;
					break;
				}
			}
		}
		try {
			if(t) {document.getElementById("pa").value="";alert("表达式错误");}
			else {
				if(shizhi!== "")	{
				var r = eval(shizhi);
				if (r == Infinity || r== undefined) {document.getElementById("pa").value="";alert("表达式错误");}
				else document.getElementById("pa").value=r;
				} 
			}
			
		}
		catch(SyntaxError) {
			document.getElementById("pa").value="";
			alert("表达式错误");
		}
		
	}
}


