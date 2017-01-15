$(document).ready(function(){
		for (var u = 0; u < 2025; u++){
			$("<div class='unit'></div>").appendTo('#container');	
		}


$('.unit').hover(function(){
	$(this).css("background-color", "yellow");
});
});