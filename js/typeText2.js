/*
 * 
 */

$(document).ready(function() {
//	console.log($(".image #text_foto").height());
//	console.log(window);
//	console.log(document.documentElement.clientHeight);
//	console.log(document.documentElement.clientWidth);
	var text = "";
	var boxNumber = "";
	var i = 0;
	var delay = 0;
	var delayIndex = 0;
	var delayOn = true;
	var height = 0;
	var width = 0;
	var imgHeight = 0;
	var imgWidth = 0;
	if(navigator.appName == "Microsoft Internet Explorer"){
		delayIndex = 1.5;
		height = document.documentElement.clientHeight;
		width = document.documentElement.clientWidth;
	}else{
		delayIndex = 1.1;
		height = window.innerHeight;
		width = window.innerWidth;
	}
	$("#green1").queue(
			function(next){
				$("#green1").show();
//				console.log(next());
				next();
			}
		);
	$("#box").delay(1000).queue(
		function(next){
			typedText("#box","logged as: ");
//			console.log($("#box").queue());
			next();
		}
	);
	$("#box1").delay(2000).queue(
			function(next){
				typingText("alexander","#box1",true);
				next();
			}
		);
	$("#green1, #green2").delay(2000).queue(
			function(next){
				$("#green1").hide();
				$("#green2").show();
				next();
			}
		);
	$("#box2").delay(2000).queue(
			function(next){
				typedText("#box2","alexander@leonov.se\'s password: ");
				next();
			}
		);
	$("#box3").delay(2000).queue(
			function(next){
				typingText("*********","#box3",true);
				next();
			}
		);
	$("#green2").delay(2000).queue(
			function(next){
				$("#green2").hide();
				next();
			}
		);
	$("#box4 pre").delay(2000).queue(
			function(next){
				typingText("oooo\n\`888\n 888   .ooooo.   .ooooo.  ooo. .oo.    .ooooo.  oooo    ooo      .oooo.o  .ooooo. \n 888  d88\' \`88b d88\' \`88b \`888P\"Y88b  d88\' \`88b  \`88.  .8\'      d88\(  \"8 d88\' \`88b\n 888  888ooo888 888   888  888   888  888   888   \`88..8\'       \`\"Y88b.  888ooo888\n 888  888    .o 888   888  888   888  888   888    \`888\'   .o.  o.  \)88b 888    .o\no888o \`Y8bod8P\' \`Y8bod8P\' o888o o888o \`Y8bod8P\'     \`8\'    Y8P  8\"\"888P\' \`Y8bod8P\'","#box4 pre",false);
				next();
			}
		);
	$("#green3, #box5").delay(2000).queue(
			function(next){
				$("#green3").show();
				typingText("Welcome to my syberworld!","#box5",true);
				next();
			}
		);
	$(".image, .image #text_foto, .div_links").delay(2000).queue(
			function(next){
				if(height >= 440 && height <= 885){
//				console.log($(".image #text_foto").height());
				imgHeight = height - 255;
				imgWidth = imgHeight * (494/668);
				$(".image, .image #text_foto").height(imgHeight).width(imgWidth);
				$(".image").fadeIn("slow");
			}else if(height > 885){
				$(".image").fadeIn("slow");
			}
			$(".div_links").hide().css("visibility", "visible").fadeIn("slow");
				next();
			}
		);
//	
//-	setTimeout(function() {
//-		typedText("#box","logged as: ");
//-		setTimeout(function() {
//-			typingText("alexander","#box1",true);
//-			setTimeout(function() {
//				$("#green1").hide();
//				$("#green2").show();
//				setTimeout(function() {
//					typedText("#box2","alexander@leonov.se\'s password: ");
//					setTimeout(function() {
//						typingText("*********","#box3",true);
//						setTimeout(function() {
//							$("#green2").hide();
//							setTimeout(function() {
//									typingText("oooo\n\`888\n 888   .ooooo.   .ooooo.  ooo. .oo.    .ooooo.  oooo    ooo      .oooo.o  .ooooo. \n 888  d88\' \`88b d88\' \`88b \`888P\"Y88b  d88\' \`88b  \`88.  .8\'      d88\(  \"8 d88\' \`88b\n 888  888ooo888 888   888  888   888  888   888   \`88..8\'       \`\"Y88b.  888ooo888\n 888  888    .o 888   888  888   888  888   888    \`888\'   .o.  o.  \)88b 888    .o\no888o \`Y8bod8P\' \`Y8bod8P\' o888o o888o \`Y8bod8P\'     \`8\'    Y8P  8\"\"888P\' \`Y8bod8P\'","#box4 pre",false);
//								setTimeout(function() {
//									$("#green3").show();
//									typingText("Welcome to my syberworld!","#box5",true);
//									setTimeout(function() {
//										if(height >= 440 && height <= 885){
////											console.log($(".image #text_foto").height());
//											imgHeight = height - 255;
//											imgWidth = imgHeight * (494/668);
//											$(".image, .image #text_foto").height(imgHeight).width(imgWidth);
//											$(".image").fadeIn("slow");
//										}else if(height > 885){
//											$(".image").fadeIn("slow");
//										}
//										$(".div_links").hide().css("visibility", "visible").fadeIn("slow");
////										setTimeout(function() {
////											$(".div_links");
////											setTimeout(function() {
////												typingText("","#box8");
////												setTimeout(function() {
////													typingText("","#box9");
////													setTimeout(function() {
////														typingText("","#box10");
////														setTimeout(function() {
////															
////														}, 10000);
////													}, 10000);
////												}, 10000);
////											}, 10000);
////										}, 100);
//									}, 3000);
//								}, (5100 * delayIndex));
//							}, 500);
//						}, 1500);
//					}, 1000);
//				}, 500);
//			}, 1500);
//		}, 1000);
//	}, 1000);
	
	function typingText(text,boxNumber,delayOn) {
		if (i < text.length) {
			if(delayOn == true){
				delay = Math.floor(Math.random() * 200);
			}else{
				delay = 0;
			}
			//console.log(delayOn);
			$(boxNumber).append(text.charAt(i));
			i++;
			setTimeout(function() {
				typingText(text,boxNumber,delayOn);
			}, delay);
		} else {
			i = 0;
		}
	}
	
	function typedText(tag,text) {
		$(tag).html(text);
	}
});