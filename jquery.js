$(document).ready(function(){
GenGrid(20);
Hover();

function Hover(){
	$('.unit').hover(function(){
		$(this).css("background-color", "yellow");
	});
}

function HoverShade(){
	$('.unit').hover(function(){
		$(this).css("opacity", "+=0.1")
		$(this).css("background-color", "yellow");
	});
}

function Eraser(){
	$('.unit').hover(function(){
		$(this).css("background-color", "#DDDDDD");
	});
}

function GenGrid(res){
	$('#container').empty();
	for (var u = 0; u < (res*res); u++){
			$("<div class='unit'></div>").appendTo('#container');	
		}
	varheight = Math.floor((540/res)-2);
	varwidth = Math.floor((540/res)-2);
	$('.unit').css("height", varheight);
	$('.unit').css('width', varwidth);
}

$('#clean').click(function(){
	$(".unit").css("background-color","#DDDDDD");
});

$('#eraser').click(function(){
	Eraser();
});

$('#shade').click(function(){
	squares = +prompt('Square par side?');
	if (squares >0){
			GenGrid(squares);
	};
	$(".unit").css("opacity","0");
	HoverShade();
});

$('#resize').on('click', function(){
	squares = +prompt('Square par side?');
	if (squares >0){
			GenGrid(squares);
			Hover()
	};
});

});
