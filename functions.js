

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	
	// var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	// var days = Math.floor(seconds / (3600 * 24));
	// seconds = seconds % (3600 * 24);
	// var hours = Math.floor(seconds / 3600);
	// if (hours < 10) {
	// 	hours = "0" + hours;
	// }
	// seconds = seconds % 3600;
	// var minutes = Math.floor(seconds / 60);
	// if (minutes < 10) {
	// 	minutes = "0" + minutes;
	// }
	// seconds = seconds % 60;
	// if (seconds < 10) {
	// 	seconds = "0" + seconds;
	// }
	let currentDate = new Date();
	let previousDate= new Date('2003-10-1');
	let currentMillisecond=currentDate-previousDate;
	let currentSecond= Math.floor(currentMillisecond/1000);
	let currentMinute= Math.floor(currentSecond/60);
	let currentHour= new Date().getHours();
	let currentDays= Math.floor(currentMinute/(60*24))-1;

	let exactMinute= new Date().getMinutes();

	var result = "Days <span class=\"digit\">" + currentDays + "</span> Hours <span class=\"digit\">" + currentHour + "</span> Minutes <span class=\"digit\">" + exactMinute; 
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);

}
