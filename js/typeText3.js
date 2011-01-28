/*
 * 
 */

$(document).ready(function() {
	var n = 0;
	var conveyorBand = Array();
	conveyorBand[0] = Array();
	
	function conveyor(conveyorBand,n) {
		if(conveyorBand[n] == "tag"){
			
			n++;
		}else if(conveyorBand[n] == "typedText"){
			
			n++;
		}else if(conveyorBand[n] == "typingText"){
			
			n++;
		}else{
			
			n++;
		}
	}
	
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