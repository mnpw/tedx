function animatespeakers(number, sw) {
	var id = "#speaker" + number;
	if (sw) {
		var newsrc = "img/speakers/animated" + number + ".gif";
		$(id).attr('src', newsrc);
	}
	else {
		var newsrc = "img/speakers/speaker" + number + ".jpg";
		$(id).attr('src', newsrc);
	}

}