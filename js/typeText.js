/*
 * 
 */

$(document).ready(function() {
	var text = "";
	var i = 0;
	var delay = 0;
	var boxNumber = "";
	var delayOn = true;
	$("#green1").show();
//	setInterval(function() {
//		$(".green").attr('class','black');
//	},100);
//	setInterval(function() {
//		$(".black").attr('class','green');
//	},100);
	setTimeout(function() {
		typedText("#box","logged as: ");
		setTimeout(function() {
			typingText("alexander","#box1",true);
			setTimeout(function() {
				$("#green1").hide();
				$("#green2").show();
				setTimeout(function() {
					typedText("#box2","alexander@leonov.se\'s password: ");
					setTimeout(function() {
						typingText("*********","#box3",true);
						setTimeout(function() {
							$("#green2").hide();
							setTimeout(function() {
								typingText("oooo\n\`888\n 888   .ooooo.   .ooooo.  ooo. .oo.    .ooooo.  oooo    ooo      .oooo.o  .ooooo. \n 888  d88\' \`88b d88\' \`88b \`888P\"Y88b  d88\' \`88b  \`88.  .8\'      d88\(  \"8 d88\' \`88b\n 888  888ooo888 888   888  888   888  888   888   \`88..8\'       \`\"Y88b.  888ooo888\n 888  888    .o 888   888  888   888  888   888    \`888\'   .o.  o.  \)88b 888    .o\no888o \`Y8bod8P\' \`Y8bod8P\' o888o o888o \`Y8bod8P\'     \`8\'    Y8P  8\"\"888P\' \`Y8bod8P\'","#box4",false);
								setTimeout(function() {
									$("#green3").show();
									typingText("Welcome to my syberworld! \=\)","#box5",true);
									setTimeout(function() {
										$(".image").fadeIn(2000);
//										setTimeout(function() {
//											typingText(" 888  d88\' \`88b d88\' \`88b \`888P\"Y88b  d88\' \`88b  \`88.  .8\'      d88\(  \"8 d88\' \`88b","#box7");
//											setTimeout(function() {
//												typingText(" 888  888ooo888 888   888  888   888  888   888   \`88..8\'       \`\"Y88b.  888ooo888","#box8");
//												setTimeout(function() {
//													typingText(" 888  888    .o 888   888  888   888  888   888    \`888\'   .o.  o.  \)88b 888    .o","#box9");
//													setTimeout(function() {
//														typingText("o888o \`Y8bod8P\' \`Y8bod8P\' o888o o888o \`Y8bod8P\'     \`8\'    Y8P  8\"\"888P\' \`Y8bod8P\'","#box10");
//														setTimeout(function() {
//															
//														}, 10000);
//													}, 10000);
//												}, 10000);
//											}, 10000);
//										}, 10000);
									}, 1000);
								}, 5000);
							}, 500);
						}, 1500);
					}, 1000);
				}, 500);
			}, 1500);
		}, 1000);
	}, 1000);
	
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