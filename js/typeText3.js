/*
 * 
 */

$(document).ready(function() {
	var n = 0;
	var conveyorBand = Array();
	conveyorBand[0] = Array();
	
	conveyor(conveyorBand,n);
	
	function conveyor(conveyorBand,n) {
		if(conveyorBand[n] == "tag"){
			if(conveyorBand[n][2] == "show"){
				$(conveyorBand[n][1]).show();
			}else{
				$(conveyorBand[n][1]).hide();
			}
			n++;
			conveyor(conveyorBand,n);
		}else if(conveyorBand[n] == "typedText"){
			typedText(conveyorBand[n][1],conveyorBand[n][2]);
			n++;
			conveyor(conveyorBand,n);
		}else if(conveyorBand[n] == "typingText"){
			typingText(conveyorBand[n][1],conveyorBand[n][2],conveyorBand[n][3]);
			n++;
			conveyor(conveyorBand,n);
		}else{
			setTimeout(function() {
				if(navigator.appName == "Microsoft Internet Explorer"){
					delayIndex = 1.5;
					height = document.documentElement.clientHeight;
					width = document.documentElement.clientWidth;
				}else{
					delayIndex = 1.1;
					height = window.innerHeight;
					width = window.innerWidth;
				}
				if(height >= 440 && height <= 885){
//					console.log($(".image #text_foto").height());
					imgHeight = height - 255;
					imgWidth = imgHeight * (494/668);
					$(".image, .image #text_foto").height(imgHeight).width(imgWidth);
					$(".image").fadeIn("slow");
				}else if(height > 885){
					$(".image").fadeIn("slow");
				}
				$(".div_links").hide().css("visibility", "visible").fadeIn("slow");
				blinker($("#green3"));
			}, 3000);
			n++;
			conveyor(conveyorBand,n);
		}
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