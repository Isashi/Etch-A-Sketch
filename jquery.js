$(document).ready(function(){
var squares = 20;
$(".colorInner").css("background-color","black");
GenGrid(squares);
//Hover();

function CheckShape(){
	if ($('.special').hasClass('circle') ) {
  		$('.normal').addClass('circle');
	} else {
  		$('.normal').removeClass('circle');
}
}

function Hover(){
	$('.normal').unbind();
	$('.normal').hover(function(){
		var color = $('.colorInner').css("background-color");
		$(this).css("background-color", color);
		$(this).css("opacity", "+=1");
	});
}


function HoverShade(){
	$('.normal').unbind();
	$('.normal').hover(function(){
		var color = $('.colorInner').css("background-color");
		$(this).css("opacity", "+=0.05");
		$(this).css("background-color", color);
	});
}

function Eraser(){
	$('.normal').unbind();
	$('.normal').hover(function(){
		$(this).css("background-color", "white");
		$(this).css("opacity", 0);	
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
	//$('.normal').css("opacity",0);
	CheckShape();
}

function RandomColor(){
	$('.normal').unbind();
	$('.normal').mouseenter(function(){
		var	letters= '789ABCDEF';
		var randomcolor='#';
		for (var i=0; i<6; i++){
			randomcolor += letters[Math.floor(Math.random()*7)];
		} 
		$(this).css("background-color",randomcolor);
		$(this).css("opacity", "+=1");
		$(this).css('transition', 'all 0s');
	});
	$(".normal").mouseleave(function(){
    	$(this).css('transition', 'all 0s');
    });
};

function TrailEffect(){
	$('.normal').unbind();
	$('.normal').hover(function(){
	var color = $('.colorInner').css("background-color");	
    $(this).css('transition', '0s')
    $(this).css('background', color)
    $(this).css("opacity", "+=1");
  })
  	$('.normal').mouseleave(function(){
    $(this).css('transition', '1s')
    $(this).css('opacity', 0)
  })
  
};


$('.special').click(function(){
	$(".unit").toggleClass("circle");
});

$('#pen').click(function(){
	//GenGrid(squares);
	$(".normal").css("transition","all 0s");
	$(".normal").unbind("hover");
	$(".normal").unbind("mouseleave");
	Hover();
});

$('#rainbow').click(function(){
	//GenGrid(squares);
	$(".normal").css("transition","all 0s");
	RandomColor();
});

$('#clean').click(function(){
	$(".normal").css("background-color","white");
	$(".normal").css("opacity","0");
	$(".normal").css('transition', '0s')
});

$('#eraser').click(function(){
	$(".normal").css("transition","all 0s");
	$(".normal").unbind("hover");
	Eraser();
});

$('#trail').click(function(){
	//GenGrid(squares);
	$(".normal").unbind("hover");
	TrailEffect();
});

$('#shade').click(function(){
	//GenGrid(squares);
	$(".normal").unbind("hover");
	$(".normal").css("transition","all 0s");
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
