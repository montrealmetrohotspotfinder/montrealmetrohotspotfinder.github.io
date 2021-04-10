function init()
{
	spots = [{name: "Olympic Stadium", type: "Sports", address: "4545 Avenue Pierre-de-Coubertin", site: "https://parcolympique.qc.ca/en/"},
	{name: "Saputo Stadium", type: "Sports", address: "4750 Rue Sherbrooke Est", site: "https://www.impactmontreal.com/en/stadium/stade-saputo"},
	{name: "Biod&ocirc;me de Montr&eacute;al", type: "Museum", address: "4777 Avenue Pierre-de-Coubertin", site: "https://espacepourlavie.ca/en/biodome"},
	{name: "Jardin Botanique de Montr&eacute;al", type: "Nature", address: "4101 Rue Sherbrooke Est", site: "https://espacepourlavie.ca/en/botanical-garden"},
	{name: "Insectarium de Montr&eacute;al", type: "Nature", address: "4581 Rue Sherbrooke Est", site: "https://m.espacepourlavie.ca/en/mobile/insectarium"},
	{name: "Ar&eacute;na Maurice-Richard", type: "Sports", address: "2800 Rue Viau", site: "https://montreal.ca/en/places/arena-maurice-richard"},
	{name: "Cineplex Starcit&eacute;", type: "Cinema", address: "4825 Avenue Pierre-de-Coubertin", site: "https://www.cineplex.com/Theatre/cinema-starcite-montreal"},
	{name: "Planetarium Rio Tinto Alcan", type: "Museum", address: "4801 Avenue Pierre-de-Coubertin", site: "https://espacepourlavie.ca/en/rio-tinto-alcan-planetarium-1"},
	{name: "H&ocirc;tel Universel Montr&eacute;al", type: "Hotel", address: "5000 Rue Sherbrooke Est", site: "https://www.hoteluniverselmontreal.com/en"},
	{name: "Centre Pierre-Charbonneau", type: "Fitness", address: "3000 Rue Viau", site: "http://www.centrepierrecharbonneau.com/"},
	{name: "Habitations Pierre-de-Coubertin", type: "Residence", address: "2600 Avenue Aird", site: "https://www.omhm.qc.ca/en/tenant-services/habitations-pierre-de-coubertin/"}];
	
	if(spots.length == 1){
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><b>"+spots.length+ " hotspot is near this station.</b></span><br/><br/>";
	}
	else {
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><b>"+spots.length+ " hotspots are near this station.</b></span><br/><br/>";
	}
	
	for (var i=0; i<spots.length; i++)
	{
		if (spots[i].site == "#")
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + spots[i].name 
			+ "</td><td>" + spots[i].type 
			+ "</td><td>" + spots[i].address 
			+ "</td><td>" + "No website available</td></tr></li>";
		}
		else
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + spots[i].name 
			+ "</td><td>" + spots[i].type 
			+ "</td><td>" + spots[i].address 
			+ "</td><td>" + "<a href=\"" + spots[i].site + "\">Website</a></td></tr></li>";
		} 	
	}
}

window.onload = init; 
var spots;