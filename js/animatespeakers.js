function animatespeakers(number, sw) {
	var id = "#speaker" + number;
	if (sw) {
		var newsrc = "img/speakers/animated" + number + ".gif";
		$(id).closest(".column").children()[0].style.backgroundColor = "transparent";
		$(id).attr('src', newsrc);
	}
	else {
		var newsrc = "img/speakers/speaker" + number + ".jpg";
		$(id).closest(".column").children()[0].style.backgroundColor = "rgba(63, 173, 168, 0.3)";
		$(id).attr('src', newsrc);
	}

}