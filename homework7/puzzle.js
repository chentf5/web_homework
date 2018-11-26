
var judge = 1;
var array = new Array();
window.onload = function()	{
	creat();
	random_num_array();
	$("#reset").click(function()	{
		judge = 1;
		$("#display").text("playing");
		random_num_array();
	});
	$("#see").mousedown(	function()	{
		if(judge == 1)	{
			for(var i = 0;i < 16;++i)	{
				$("#panda_"+i).attr("class","pandaclass cpanda_"+i);
			}
		}
		
	});
	$("#see").mouseup(	function()	{
		if(judge == 1)	{
			for(var i = 0;i < 16;++i)	{
				var classname = array[i];
				$("#panda_"+i).attr("class",classname);
			}
		}
		
	});

}

function creat()	{
	for(var i = 0;i < 4;i++)	{
		for(var j = 0;j < 4;j++)	{
			var index = i*4+j;
			//creat
			var tar = $("<div></div>");
			//var position_left = j*91;
			//var position_top = i*91; 
			//tar.css("top",position_top+"px");
			//tar.css("left",position_left+"px");
			//add click listen
			if(index != 15)
			tar.click(reaction);
			tar.addClass("pandaclass cpanda_"+index);//bu bian
			$("#panda").append(tar);
			tar.attr("id","panda_"+index);//sui zhe dianji gaibian 

		}
	}
}
function check()	{
	tip = 1;
	for(var i = 0;i < 4;++i)	{
		for(var j = 0;j < 4;++j)	{
			var index = i*4+j;
			var classname = $("#panda_"+index).attr("class");
			var test = "pandaclass cpanda_"+index;
			if( classname != test)	{
				$("#display").text("playing");
				return;
			}
		}
	}
	
	$("#display").text("WIN!!!!");
	judge = 0;
	return;
}


function reaction()	{
	if(judge)	{
		var blanck_position_x = parseInt($("#panda_15").css("left"));
	var blanck_position_y = parseInt($("#panda_15").css("top"));
	//alert(blanck_position_x);
	var target_position_x = parseInt($(this).css("left"));
	var target_position_y = parseInt($(this).css("top"));
	//alert(target_position_x+" "+target_position_y);
	var judge1 = target_position_x - blanck_position_x;
	var judge2 = target_position_y - blanck_position_y;
	var c1;
	if(judge1 == 91 && judge2 == 0){	
		//c1 = target_position_x- 91;
		//$(this).animate({left: c1+'px'});
		//var c = blanck_position_x +91;
		//$("#panda_15").css("left", c+"px");
		//$(this).css("left",c1+"px");

		var classname = $(this).attr("class");
		//alert(classname);
		var blank_classname = $("#panda_15").attr("class");
		$("#panda_15").attr("class",classname);
		$(this).attr("class",blank_classname);

		var idindex = $(this).attr("id");
		var x = idindex.length;
		//alert(x);
		var index = parseInt(idindex.substring(idindex.lastIndexOf('_')+1,x));
		//alert(index);
		array[15] = classname;
		array[index] = blank_classname;
	}else if(judge1 == -91 && judge2 == 0)	{
		/*c1 = target_position_x+ 91;
		$(this).animate({left: c1+'px'});
		var c = blanck_position_x -91;
		$("#panda_15").css("left", c+"px");
		$(this).css("left",c1+"px");*/

		var classname = $(this).attr("class");
		//alert(classname);
		var blank_classname = $("#panda_15").attr("class");
		$("#panda_15").attr("class",classname);
		$(this).attr("class",blank_classname);
		var idindex = $(this).attr("id");
		var x = idindex.length;
		//alert(x);
		var index = parseInt(idindex.substring(idindex.lastIndexOf('_')+1,x));
		//alert(index);
		array[15] = classname;
		array[index] = blank_classname;
	}else if(judge1 == 0 &&judge2 == 91)	{
		//c1 = target_position_y - 91;
		//$(this).animate({top: c1+'px'});
		//var c = blanck_position_y +91;
		//$("#panda_15").css("top", c+"px");
		//$(this).css("top",c1+"px");
		var classname = $(this).attr("class");
		//alert(classname);
		var blank_classname = $("#panda_15").attr("class");
		$("#panda_15").attr("class",classname);
		$(this).attr("class",blank_classname);
		var idindex = $(this).attr("id");
		var x = idindex.length;
		//alert(x);
		var index = parseInt(idindex.substring(idindex.lastIndexOf('_')+1,x));
		//alert(index);
		array[15] = classname;
		array[index] = blank_classname;
	}else if(judge1 == 0 && judge2 == -91)	{
		//c1 = target_position_y + 91;
		//$(this).animate({top: c1+'px'});
		//var c = blanck_position_y -91;
		//$("#panda_15").css("top", c+"px");
		//$(this).css("top",c1+"px");
		//
		//
		var classname = $(this).attr("class");
		//alert(classname);
		var blank_classname = $("#panda_15").attr("class");
		$("#panda_15").attr("class",classname);
		$(this).attr("class",blank_classname);
		var idindex = $(this).attr("id");
		var x = idindex.length;
		//alert(x);
		var index = parseInt(idindex.substring(idindex.lastIndexOf('_')+1,x));
		//alert(index);
		array[15] = classname;
		array[index] = blank_classname;
	}else {
		// do nothing
	}
	check();
	}
	
}

function random_num_array()	{
/*
	var arr=[]; 
	for(var i=0;i<15;i++){ 
		arr[i]=i; 
	}	 
	arr.sort(function(){ return 0.5 - Math.random() }) 
	for(var i = 0;i < 15;++i)	{
		$("#panda_"+i).attr("class","pandaclass cpanda_"+arr[i]);
	}*/

	for(var i = 0;i < 16;++i)	{
		$("#panda_"+i).attr("class","pandaclass cpanda_"+i);
	}
	var level = parseInt($("input[name='lev']:checked").val() );
	for(var i = 0;i< level ;i++)	{
		var random_num = parseInt( Math.random()*15);
		var target_position_x = parseInt($("#panda_"+random_num).css("top"));
		var target_position_y = parseInt($("#panda_"+random_num).css("left"));
		var blanck_position_x = parseInt($("#panda_15").css("top"));
		var blanck_position_y = parseInt($("#panda_15").css("left"));
		
		var judge1 = target_position_x - blanck_position_x;
		var judge2 = target_position_y - blanck_position_y;

		if( (judge1 == 91 && judge2 == 0) || (judge1 == -91 && judge2 == 0)
			|| (judge1 == 0 && judge2 == 91) || (judge1 == 0 && judge2 == -91) )	{
			var classname = $("#panda_"+random_num).attr("class");
		//alert(classname);
			var blank_classname = $("#panda_15").attr("class");
			$("#panda_15").attr("class",classname);
			$("#panda_"+random_num).attr("class",blank_classname);
		}
	}
	for(var i = 0;i < 16;++i)	{
		var temp = $("#panda_"+i).attr("class");
		array[i] = temp;
	}
}

