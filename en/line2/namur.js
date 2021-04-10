function init()
{
	spots = [{name: "Gibeau Orange Julep", type: "Restaurant", address: "7700 Boulevard D&eacute;carie", site: "https://orangejulep.ca/menu-english/"},
	{name: "Centre Commercial D&eacute;carie Square", type: "Mall", address: "6900 Boulevard D&eacute;carie", site: "#"},
	{name: "SmartCentres Montr&eacute;al D&eacute;carie", type: "Shopping", address: "5400 Rue Jean-Talon Ouest", site: "https://www.smartcentres.com/shop/property/smartcentres-montreal-decarie-qc/"},
	{name: "SPCA Montr&eacute;al", type: "Agency", address: "5215 Rue Jean-Talon Ouest", site: "https://www.spca.com/en/"},
	{name: "Parc Nelson-Mandela", type: "Park", address: "4920 Rue V&eacute;zina", site: "https://montreal.ca/en/places/parc-nelson-mandela"},
	{name: "&Eacute;cole des Nations", type: "School", address: "4860 Rue V&eacute;zina", site: "https://des-nations.csdm.ca/"},
	{name: "H&ocirc;tel Ruby Foo&#39;s", type: "Hotel", address: "7655 Boulevard D&eacute;carie", site: "https://www.hotelrubyfoos.com/"}];
	
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