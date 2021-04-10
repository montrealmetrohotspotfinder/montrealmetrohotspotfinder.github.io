function init()
{
	spots = [{name: "Centre Commercial Van Horne", type: "Shopping", address: "4861 Avenue Van Horne", site: "https://fcr.ca/properties/quebec/montreal/centre-commercial-van-horne-2/"},
	{name: "Shadd Health & Business Centre", type: "Trade School", address: "1000 Avenue Old Orchard", site: "http://www.shadd.com/"},
	{name: "Little Manila", type: "District", address: "", site: "#"},
	{name: "Ar&eacute;na Bill-Durnan", type: "Sports", address: "4988 Rue V&eacute;zina", site: "https://montreal.ca/en/places/arena-bill-durnan"},
	{name: "Centre Sportif C&ocirc;te-des-Neiges", type: "Sports", address: "4880 Avenue Van Horne", site: "https://www.loisirssportifscdn-ndg.com/en/cote-des-neiges-sports-center/"},
	{name: "&Eacute;cole Primaire Coronation", type: "School", address: "4810 Avenue Van Horne", site: "https://coronation.emsb.qc.ca/coronation"},
	{name: "Ramada Plaza Montr&eacute;al", type: "Hotel", address: "6445 Boulevard D&eacute;carie", site: "https://www.ramadaplazamontreal.com/en-us"},
	{name: "Parc Van Horne", type: "Park", address: "4900 Avenue Van Horne", site: "https://montreal.ca/en/places/parc-van-horne"},
	{name: "&Eacute;cole du Petit-Chapiteau", type: "School", address: "4890 Avenue Carlton", site: "https://petit-chapiteau.csdm.ca/"}];
	
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