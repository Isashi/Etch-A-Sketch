$(document).ready(function(){
GenGrid(20);

function Hover(){
	$('.unit').hover(function(){
		var color = $('.colorInner').css("background-color");
		$(this).css("background-color", color);
		$(this).css("opacity", "+=1");
	});
}


function HoverShade(){
	$('.unit').hover(function(){
		var color = $('.colorInner').css("background-color");
		$(this).css("background-color", color);
		var currentOpacity = $(this).css("opacity");
		$(this).css("opacity",  (currentOpacity + 0.1));
	});
}

function Eraser(){
	$('.unit').hover(function(){
		$(this).css("background-color", "white");
		$(this).css("opacity", "+=0");	
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
		var randomcolor='#';
		for (var i=0; i<6; i++){
			randomcolor += letters[Math.floor(Math.random()*7)];
		} 
		$(this).css("background-color",randomcolor);
	});
};

$('#pen').click(function(){
	Hover();
});

$('#rainbow').click(function(){
	squares = +prompt('Square par side?');
	if (squares >0){
			GenGrid(squares);
	};
	RandomColor();
});

$('#clean').click(function(){
	$(".unit").css("background-color","white");
});

$('#eraser').click(function(){
	Eraser();
});

$('#shade').click(function(){
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

//TinyColorPicker

