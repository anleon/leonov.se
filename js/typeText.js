/*
 * 
 */

$(document).ready(function() {
	var text = "";
	var i = 0;
	var delay = 0;
	var boxNumber = "";
	$("#green1").show();
//	setInterval(function() {
//		$(".green").attr('class','black');
//	},100);
//	setInterval(function() {
//		$(".black").attr('class','green');
//	},100);
	setTimeout(function() {
		$("#box").html("logged as: ");
		setTimeout(function() {
			text = "alexander";
			boxNumber = "#box1";
			typingText(text,boxNumber);
			setTimeout(function() {
				$("#green1").hide();
				$("#green2").show();
				setTimeout(function() {
					$("#box2").html("alexander@leonov.se\'s password: ");
					pwd = "blablabla";
					boxNumber = "#box3";
					setTimeout(function() {
						console.log(pwd);
						typingText(pwd,boxNumber);
					}, 500);
				}, 500);
			}, 1000);
		}, 500);
	}, 1000);
	
	function typingText(text,boxNumber) {
		if (i < text.length) {
			delay = Math.floor(Math.random() * 150);
			console.log(text.charAt(i));
			$(boxNumber).append(text.charAt(i));
			i++;
			setTimeout(function() {
				typingText(text,boxNumber);
			}, delay);
		}
	}
	
//	function typedText(text) {
//		setTimeout(function() {
//			$("#box").html(text);
//		}, 1000);
//	}
});