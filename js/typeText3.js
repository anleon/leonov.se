/*
 * 
 */

$(document).ready(function() {
	var text = "";
	var boxNumber = "";
	var i = 0;
	var j = 0;
	var delay = 0;
	var delayIndex = 0;
	var delayOn = true;
	var height = 0;
	var width = 0;
	var imgHeight = 0;
	var imgWidth = 0;
	var n = 0;
	var startTime = 0;
	var endTime = 0;
	var totalDelay = 0;
	var timeDifference = 0;
	var conveyorBand = new Array();
	conveyorBand[0] = ['tag','#green1',true,1000];
	conveyorBand[1] = ['typedText','#box','logged as: ',1000];
	conveyorBand[2] = new Array('typingText','#box1','alexander',true,1500);
	conveyorBand[3] = new Array('tag','#green1',false,0);
	conveyorBand[4] = new Array('tag','#green2',true,500);
	conveyorBand[5] = new Array('typedText','#box2','alexander@leonov.se\'s password: ',1000);
	conveyorBand[6] = new Array('typingText','#box3','*********',true,1500);
	conveyorBand[7] = new Array('tag','#green2',false,500);
	conveyorBand[8] = new Array("typingText","#box4 pre","oooo\n\`888\n 888   .ooooo.   .ooooo.  ooo. .oo.    .ooooo.  oooo    ooo      .oooo.o  .ooooo. \n 888  d88\' \`88b d88\' \`88b \`888P\"Y88b  d88\' \`88b  \`88.  .8\'      d88\(  \"8 d88\' \`88b\n 888  888ooo888 888   888  888   888  888   888   \`88..8\'       \`\"Y88b.  888ooo888\n 888  888    .o 888   888  888   888  888   888    \`888\'   .o.  o.  \)88b 888    .o\no888o \`Y8bod8P\' \`Y8bod8P\' o888o o888o \`Y8bod8P\'     \`8\'    Y8P  8\"\"888P\' \`Y8bod8P\'",false,5100);
	conveyorBand[9] = new Array('tag','#green3',true,1000);
	conveyorBand[10] = new Array('typingText','#box5','Welcome to my cyberworld!',true,0);
	
	if(navigator.appName == "Microsoft Internet Explorer"){
		delayIndex = 1.5;
		height = document.documentElement.clientHeight;
		width = document.documentElement.clientWidth;
	}else{
		delayIndex = 1.1;
		height = window.innerHeight;
		width = window.innerWidth;
	}
	
	function conveyor(conveyorBand,n) {
//		console.log(conveyorBand.length);
		if(n < conveyorBand.length){
			if(conveyorBand[n][0] == "tag"){
				
//				console.log(conveyorBand[n][0]);
				
				if(conveyorBand[n][2] == true){
					$(conveyorBand[n][1]).show();
				}else{
					
					$(conveyorBand[n][1]).hide();
				}
				setTimeout(function(){
					n++;
					conveyor(conveyorBand,n);
				},conveyorBand[n][3]);
			}else if(conveyorBand[n][0] == "typedText"){
//				console.log(conveyorBand[n][0]);
				typedText(conveyorBand[n][1],conveyorBand[n][2]);
				setTimeout(function(){
					n++;
					
					conveyor(conveyorBand,n);
				},conveyorBand[n][3]);
			}else if(conveyorBand[n][0] == "typingText"){
				if(j == 0){
//					var startTime = 0;
					startTime = new Date();
					j++;
				}
				typingText(conveyorBand[n][1],conveyorBand[n][2],conveyorBand[n][3]);
				
				setTimeout(function(){
					n++;
					conveyor(conveyorBand,n);
				},conveyorBand[n][4] * delayIndex);
			}
		}else{
			setTimeout(function(){
				if(height >= 440){
//					console.log($(".image #text_foto").height());
					imgHeight = height - 255;
					imgWidth = imgHeight * (494/668);
					$(".image, .image #text_foto").height(imgHeight).width(imgWidth);
					$(".image").fadeIn("slow");
				}
				$(".div_links").hide().css("visibility", "visible").fadeIn("slow");
				blinker("#green3");
			}, 3000);
		}
	}
	
	function typingText(boxNumber,text,delayOn) {
		if (i < text.length) {
			if(delayOn == true){
				delay = Math.floor(Math.random() * 200);
				totalDelay += delay;
//				console.log(totalDelay);
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
			if(j == 1 && i == text.length){
//				var endTime = 0;
				endTime = new Date();
				j++;
				console.log(totalDelay);
				console.log(endTime.getTime());
				console.log(startTime.getTime());
				console.log(endTime.getTime()-startTime.getTime());
				console.log((((endTime.getTime()-startTime.getTime())-totalDelay))*465);
			}
			i = 0;
		}
	}
	
	function typedText(tag,text) {
		$(tag).html(text);
	}
	
	function blinker(tag) {
		$(tag).show();
		setTimeout(function() {
			$(tag).hide();
			setTimeout(function() {
				blinker(tag);
			}, 1000);
		}, 1000);
	}
	
	conveyor(conveyorBand,n);
});