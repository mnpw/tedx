function movelistup(number) {
	$("#speakerslist").fadeOut();
	$("#speakerdetails").fadeIn();
	$("#speakerdetails").css("display", "block");
	document.getElementById("speakerdetailsimage").src = "img/speakers/speaker" + number + ".jpg";
	var id = "#speaker" + number;
	document.getElementById("speakerdetailsname").innerHTML = $(id).closest(".column").children()[2].innerHTML;
	var bios  = {
		1 : "Gabriel Sayegh is co-founder and co-executive director of the Katal Center for Health, Equity, and Justice. For nearly 20 years, sayegh has worked on campaigns to end mass incarceration the war on drugs, promote fair economies and racial equity, and more. He is a core leader and strategist in the campaign to close Rikers Island Jail Complex (#CLOSErikers). He co-facilitated the development and launch of the Law Enforcement Assisted Diversion (LEAD) program in Albany, NY, and is a co-founder of the LEAD National Support Bureau. Prior to co-founding Katal, sayegh worked for 12 years at the Drug Policy Alliance, serving many roles, including as Managing Director of Policy and Campaigns.",
		2 : "Chip Conley (born October 31, 1960, in Orange, California) is an American hotelier, hospitality entrepreneur, author, and speaker. Conley is the founder of Joie de Vivre Hospitality, which he began in 1987 at age 26 and held the position of CEO for nearly 24 years. In 2010, after having created and managed 50 boutique hotels mostly in California, Conley sold his company to Geolo Capital. The last hotel concept he created for the company is The Epiphany in Palo Alto. Conley remains a private owner in many hotel properties and no longer has an operating role in the company.",
		3 : "Kailash Satyarthi (born 'Kailash Sharma'; 11 January 1954) is an Indian children's rights and education advocate and an activist against child labour. He founded the Bachpan Bachao Andolan (lit. Save the Childhood Movement) in 1980 and has acted to protect the rights of more than 83,000 children from 144 countries. It is largely because of Satyarthi's work and activism that the International Labour Organization adopted Convention No. 182 on the worst forms of child labour, which is now a principal guideline for governments around the world. His work is recognized through various national and international honours and awards including the Nobel Peace Prize of 2014, which he shared with Malala Yousafzai of Pakistan.",
		4 : "Salman Amin Khan (born October 11, 1976) is an American educator who founded the Khan Academy, a free online education platform and an organization with which he has produced over 6,500 video lessons teaching a wide spectrum of academic subjects, originally focusing on mathematics and sciences. He is also the founder of Khan Lab School, a brick-and-mortar school associated with Khan Academy. As of December 2016, the Khan Academy channel on YouTube has more than 3 million subscribers and the Khan Academy videos have been viewed more than 1 billion times. In 2012, Time named Salman Khan in its annual list of the 100 most influential people in the world. Forbes magazine featured Khan on its cover with the story \"$1 Trillion Opportunity\".",
		5 : "Raghuram Govind Rajan(born 3 February 1963) is an Indian economist who is the Katherine Dusak Miller Distinguished Service Professor of Finance at the University of Chicago Booth School of Business. He was the 23rd Governor of the Reserve Bank of India between September 2013 and September 2016. Between 2003 and 2006, Rajan was the Chief Economist and Director of Research at the International Monetary Fund. In 2015, during his tenure at the Indian Reserve Bank he also became Vice-Chairman of the Bank for International Settlements.",
		6 : "Shashi Tharoor (born 9 March 1956) is an Indian politician and a former diplomat who is currently serving as Member of Parliament, Lok Sabha from Thiruvananthapuram, Kerala since 2009. He also currently serves as Chairman of the Parliamentary Standing Committee on External Affairs and All India Professionals Congress of the Indian National Congress. Tharoor is a globally recognised speaker on India's economics and politics, as well as on freedom of the press, human rights, Indian culture, and international affairs."
	}

	document.getElementById("speakerdetailsbio").innerHTML = bios[number];

	var profs = {
		1 : "Co-founder, Katal Center for Health<br>United States of America",
		2 : "Hospitality Entrepreneur<br>United States of America",
		3 : "Children's rights and education activist<br>Nobel Laureate<br>India",
		4 : "Educator<br>Founder, Khan Academy<br>United States of America",
		5 : "Economist<br>Former Governor, RBI<br>India",
		6 : "Former Diplomat<br>Politician<br>India"
	}

	document.getElementById("speakerdetailsprof").innerHTML = profs[number];
}


function movelistdown() {
	$("#speakerdetails").fadeOut();
	$("#speakerslist").fadeIn();
}