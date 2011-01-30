/*
 * 
 */

$(document).ready(function() {
	
	var n = 0;
	var conveyorBand = new Array();
	conveyorBand[0] = new Array('tag','#green1',true,0);
//	conveyorBand[1] = new Array('typedText','#box','logged as: ',1000);
//	conveyorBand[2] = new Array('typingText','#box1','alexander',true,1000);
//	conveyorBand[3] = new Array('tag','#green1',false,1500);
//	conveyorBand[4] = new Array('tag','#green2',true,0);
//	conveyorBand[5] = new Array('typedText','#box2','alexander@leonov.se\'s password: ',500);
//	conveyorBand[6] = new Array('typingText','#box3','*********',true,1000);
//	conveyorBand[7] = new Array('tag','#green2',false,1500);
//	conveyorBand[8] = new Array("typingText","#box4 pre","oooo\n\`888\n 888   .ooooo.   .ooooo.  ooo. .oo.    .ooooo.  oooo    ooo      .oooo.o  .ooooo. \n 888  d88\' \`88b d88\' \`88b \`888P\"Y88b  d88\' \`88b  \`88.  .8\'      d88\(  \"8 d88\' \`88b\n 888  888ooo888 888   888  888   888  888   888   \`88..8\'       \`\"Y88b.  888ooo888\n 888  888    .o 888   888  888   888  888   888    \`888\'   .o.  o.  \)88b 888    .o\no888o \`Y8bod8P\' \`Y8bod8P\' o888o o888o \`Y8bod8P\'     \`8\'    Y8P  8\"\"888P\' \`Y8bod8P\'",false,500);
//	conveyorBand[9] = new Array('tag','#green3',true,5600);
//	conveyorBand[10] = new Array('typingText','#box5','Welcome to my cyberworld!',true,0);
	
	
	conveyor(conveyorBand,n);
	
	function conveyor(conveyorBand,n) {
		console.log(n);
		if(conveyorBand[n][0] == "tag"){
			setTimeout(function(conveyorBand,n) {
				if(conveyorBand[n][2] == true){
					$(conveyorBand[n][1]).show();
				}else{
					$(conveyorBand[n][1]).hide();
				}
			},conveyorBand[n][3]);
			n++;
			conveyor(conveyorBand,n);
		}else if(conveyorBand[n][0] == "typedText"){
			setTimeout(function(conveyorBand,n) {
				typedText(conveyorBand[n][1],conveyorBand[n][2]);
			},conveyorBand[n][3]);
			n++;
			conveyor(conveyorBand,n);
		}else if(conveyorBand[n][0] == "typingText"){
			setTimeout(function(conveyorBand,n) {
				typingText(conveyorBand[n][1],conveyorBand[n][2],conveyorBand[n][3]);
			},conveyorBand[n][4]);
			n++;
			conveyor(conveyorBand,n);
		}
//		else{
//			setTimeout(function() {
//				if(navigator.appName == "Microsoft Internet Explorer"){
//					delayIndex = 1.5;
//					height = document.documentElement.clientHeight;
//					width = document.documentElement.clientWidth;
//				}else{
//					delayIndex = 1.1;
//					height = window.innerHeight;
//					width = window.innerWidth;
//				}
//				if(height >= 440 && height <= 885){
////					console.log($(".image #text_foto").height());
//					imgHeight = height - 255;
//					imgWidth = imgHeight * (494/668);
//					$(".image, .image #text_foto").height(imgHeight).width(imgWidth);
//					$(".image").fadeIn("slow");
//				}else if(height > 885){
//					$(".image").fadeIn("slow");
//				}
//				$(".div_links").hide().css("visibility", "visible").fadeIn("slow");
//				blinker($("#green3"));
//			}, 3000);
//			n++;
//			conveyor(conveyorBand,n);
//		}
	}
	
	function typingText(boxNumber,text,delayOn) {
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
				typingText(boxNumber,text,delayOn);
			}, delay);
		} else {
			i = 0;
		}
	}
	
	function typedText(tag,text) {
		$(tag).html(text);
	}
});