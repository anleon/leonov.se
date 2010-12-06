/*
 * 
 */

$(document).ready(function() {
	var conveyorBand = Array();
	conveyorBand[0] = Array();
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