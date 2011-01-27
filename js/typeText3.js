/*
 * 
 */

$(document).ready(function() {
	var conveyorBand = new Array();
	conveyorBand[0] = new Array('tag','show','#green1',0);
	conveyorBand[1] = new Array('typedText','logged as: ','#box',1000);
	conveyorBand[2] = new Array('typingText','alexander','#box1',1000,true);
	conveyorBand[3] = new Array('tag','hide','#green1',1500);
	conveyorBand[4] = new Array('tag','show','#green2',0);
	conveyorBand[5] = new Array('typedText','alexander@leonov.se\'s password: ','#box2',500);
	conveyorBand[6] = new Array('typingText','*********','#box3',1000,true);
	conveyorBand[7] = new Array('tag','hide','#green2',1500);
	conveyorBand[8] = new Array("typingText","oooo\n\`888\n 888   .ooooo.   .ooooo.  ooo. .oo.    .ooooo.  oooo    ooo      .oooo.o  .ooooo. \n 888  d88\' \`88b d88\' \`88b \`888P\"Y88b  d88\' \`88b  \`88.  .8\'      d88\(  \"8 d88\' \`88b\n 888  888ooo888 888   888  888   888  888   888   \`88..8\'       \`\"Y88b.  888ooo888\n 888  888    .o 888   888  888   888  888   888    \`888\'   .o.  o.  \)88b 888    .o\no888o \`Y8bod8P\' \`Y8bod8P\' o888o o888o \`Y8bod8P\'     \`8\'    Y8P  8\"\"888P\' \`Y8bod8P\'","#box4 pre",500,false);
	conveyorBand[9] = new Array('tag','show','#green3',1000);
	
	
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