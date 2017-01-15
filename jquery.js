$(document).ready(function(){
GenGrid(45);
Hover();

function Hover(){
	$('.unit').hover(function(){
		$(this).css("background-color", "yellow");
});
}

function GenGrid(res){
	$('#container').empty();
	for (var u = 0; u < (res*res); u++){
			$("<div class='unit'></div>").appendTo('#container');	
		}
	varheight = (540/res)-2;
	varwidth = (540/res)-2;
	$('.unit').css("height", varheight);
	$('.unit').css('width', varwidth);
	$(".unit").css("background-color","#111111");
	Hover();
}

$('#clean').click(function(){
	$(".unit").css("background-color","#DDDDDD");
});

$('#resize').on('click', function(){
	squares = +prompt('Square par side?');
	if (squares >0){
			GenGrid(squares);
	};
});

});
