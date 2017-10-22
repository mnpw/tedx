function animatespeakers(number, sw) {
	var id = "speaker" + number;
	if (sw) {
		var newsrc = "img/speakers/animated" + number + ".gif";
		document.getElementById(id).src = newsrc;
	}
	else {
		var newsrc = "img/speakers/speaker" + number + ".jpg";
		document.getElementById(id).src = newsrc;
	}

}