$(document).ready(function(){
GenGrid(20);
//Hover();

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
	varheight = Math.floor((540/res));
	varwidth = Math.floor((540/res));
	$('.unit').css("height", varheight);
	$('.unit').css('width', varwidth);
}

function RandomColor(){
	$('.unit').mouseenter(function(){
		var	letters= '789ABCDEF';
		var color='#';
		for (var i=0; i<6; i++){
			color += letters[Math.floor(Math.random()*7)];
		} 
		$(this).css("background-color",color);
	});
};

$('#rainbow').click(function(){
	squares = +prompt('Square par side?');
	if (squares >0){
			GenGrid(squares);
	};
	RandomColor();
});

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
