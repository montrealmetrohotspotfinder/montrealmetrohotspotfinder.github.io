function init()
{
	spots = [{name: "Bell Centre", type: "Sports", address: "1909 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.centrebell.ca/en"},
	{name: "Tour Deloitte", type: "Office", address: "1115 Rue Saint-Antoine Ouest", site: "https://www.cfoffice.ca/property/home/cf-deloitte-tower"},
	{name: "Tour des Canadiens", type: "Residence", address: "750 Rue Peel", site: "http://tourdescanadiens.com/en/"},
	{name: "&Eacute;cole de Technologie Sup&eacute;rieure", type: "College", address: "1100 Rue Notre-Dame Ouest", site: "http://www.etsmtl.ca/en/home"},
	{name: "Gare Windsor", type: "Office", address: "1100 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.cfoffice.ca/property/home/cf-the-windsor-station-office"},
	{name: "WeWork L&#39;Avenue", type: "Office", address: "1275 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.wework.com/buildings/l-avenue--montreal--QC"},
	{name: "Coll&egrave;ge Herzing", type: "College", address: "1616 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.herzing.ca/locations/montreal/"},
	{name: "Holiday Inn & Suites Montr&eacute;al Centre-Ville Ouest", type: "Hotel", address: "1390 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.ihg.com/holidayinn/hotels/us/en/montreal/yulcc/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-CA-_-YULCC"},
	{name: "Le Centre Sheraton Montr&eacute;al", type: "Hotel", address: "1201 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.marriott.com/hotels/travel/yulsi-le-centre-sheraton-montreal-hotel/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTcxNDk2Mi03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"},
	{name: "Novotel Montr&eacute;al Centre", type: "Hotel", address: "1180 Rue de la Montagne", site: "https://www.novotelmontreal.com/"},
	{name: "H&ocirc;tel Le Crystal", type: "Hotel", address: "1100 Rue de la Montagne", site: "https://www.hotellecrystal.com/"},
	{name: "Le Nouvel H&ocirc;tel & Spa", type: "Hotel", address: "1740 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.lenouvelhotel.com/"},
	{name: "Coll&egrave;ge O&#39;Sullivan", type: "College", address: "1191 Rue de la Montagne", site: "http://www.osullivan.edu/en"},
	{name: "Tribunal Administratif du Logement du Qu&eacute;bec, Montreal offices", type: "Agency", address: "1425 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.tal.gouv.qc.ca/en"},
	{name: "1350-1360 Ren&eacute;-L&eacute;vesque Ouest", type: "Office", address: "1360 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.1350rene-levesque.com/"},
	{name: "Best Western Plus Montr&eacute;al Centre-Ville H&ocirc;tel Europa", type: "Hotel", address: "1240 Rue Drummond", site: "https://www.bestwestern.com/en_US/book/hotel-rooms.67013.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67013"},
	{name: "1250 Ren&eacute;-L&eacute;vesque via Underground City", type: "Office", address: "1250 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://imtl.org/montreal/building/IBM-Marathon.php"},
	{name: "Parc Julia-Drummond", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-julia-drummond"},
	{name: "Auberge Les Bons Matins", type: "Hotel", address: "1401 Avenue Argyle", site: "https://www.bonsmatins.com/en"},
	{name: "Roccabella", type: "Residence", address: "1059 Rue de la Montagne", site: "https://roccabella.ca/en/"},
	{name: "CGI, Montreal offices", type: "Office", address: "1350 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.cgi.com/en"}];
	
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
