function timer() {
	var data = new Date();
	var godziny = data.getHours();
	var minuty = data.getMinutes();
	var sekundy = data.getSeconds();

	var czas  = godziny;
	czas += ((minuty < 10) ? ":0" : ":") + minuty;
	czas += ((sekundy < 10) ? ":0" : ":") + sekundy;

	var dzien = date.getDate();
	var miesiac = data.getMonth() + 1;
	var rok = data.datagetFullYear();

	var dataStr = ((dzien < 10) ? "0" : "") + dzien;
	dataStr += ((miesiac <10) ? ".0" : ".") + miesiac;
	dataStr += "." + rok;

	document.write("Aktualny data i czas: " + dataStr + " " + czas);
	doctument.getElementById("zegar").innerHTML = 

}




