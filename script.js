/* scripts for jquery demo */

$(document).ready(function(){

	$("img").hide();
	$(".special").fadeIn("slow");

	let imgCycle = 1;
	let imgTracker = true;

	$(".special").click(function(){
//		$(this).css("background-color");
//		$(this).attr("src", "pictures/dog.jpg");
		if(imgTracker  < 4){
			$(this).attr("src", "pictures/"+imgCycle+".jpg");
			imgCycle++;
		} else {
			$(this).attr("src", "pictures/"+imgCycle+".jpg");
			imgCycle = 1;
		}
	});
	
//	$(".special").hover(function(){
//		$(this).attr("src", "pictures/dog.jpg");
//	});
	
	$(".imgAdder").click(function(){
		$(".end").append("<img src='pictures/dog.jpg' class='special'>");
	});
	
})