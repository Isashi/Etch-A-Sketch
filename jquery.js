$(document).ready(function(){
var squares = 20;
$(".colorInner").css("background-color","black");
GenGrid(squares);
Hover();

function Hover(){
	$('.normal').hover(function(){
		var color = $('.colorInner').css("background-color");
		$(this).css("background-color", color);
		$(this).css("opacity", "+=1");
	});
}


function HoverShade(){
	
	$('.normal').hover(function(){
		var color = $('.colorInner').css("background-color");
		$(this).css("background-color", color);
		$(this).css("opacity", "+=0.05");
	});
}

function Eraser(){
	$('.normal').hover(function(){
		$(this).css("background-color", "white");
		$(this).css("opacity", "+=0");	
	});
}

function GenGrid(res){
	$('#container').empty();
	for (var u = 0; u < (res*res); u++){
			$("<div class='unit normal'></div>").appendTo('#container');	
		}
	varheight = Math.floor((540/res));
	varwidth = Math.floor((540/res));
	$('.normal').css("height", varheight);
	$('.normal').css('width', varwidth);
}

function RandomColor(){
	$('.normal').mouseenter(function(){
		var	letters= '789ABCDEF';
		var randomcolor='#';
		for (var i=0; i<6; i++){
			randomcolor += letters[Math.floor(Math.random()*7)];
		} 
		$(this).css("background-color",randomcolor);
	});
};

function TrailEffect(){
	var color = $('.colorInner').css("background-color");
	$(".normal").mouseenter(function(){
    $(this).css('transition', 'all 0s')
    $(this).css('background', color)
  })
  	$(".normal").mouseleave(function(){
    $(this).css('transition', 'all 1s')
    $(this).css('background', 'white')
  })
  
};


$('.special').click(function(){
	$(".unit").toggleClass("circle");
});

$('#pen').click(function(){
	GenGrid(squares);
	Hover();
});

$('#rainbow').click(function(){
	GenGrid(squares);
	RandomColor();
});

$('#clean').click(function(){
	GenGrid(squares);
});

$('#eraser').click(function(){
	Eraser();
});

$('#trail').click(function(){
	GenGrid(squares);
	TrailEffect();
});

$('#shade').click(function(){
	GenGrid(squares);
	$(".normal").css("opacity","0");
	HoverShade();
});

$('#resize').on('click', function(){
	squares = +prompt('Square par side?');
	if (squares >0){
			GenGrid(squares);
			Hover()
	};
});

$('button').on('click', function(){
	$('button').css("background-color","white");
	$('button').css("color","black");
	$(this).css("background-color","red");
});

$('button').mouseenter(function(){
	$(this).css("background-color","#4CAF50");
	$(this).css("color","white");
});

$('button').mouseleave(function(){
	$(this).css("background-color","white");
	$(this).css("color","black");
});



});
