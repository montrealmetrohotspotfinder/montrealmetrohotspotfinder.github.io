function init()
{
	spots = [{name: "The Village", type: "District", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/village-montreal"},
	{name: "Maison Radio-Canada", type: "Office", address: "1400 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "http://archives.radio-canada.ca/societe/histoire/topics/1069-5953/"},
	{name: "Cabaret Mado", type: "Restaurant", address: "1115 Rue Sainte-Catherine Est", site: "http://www.mado.qc.ca/"},
	{name: "L&#39;Olympia", type: "Theatre", address: "1004 Rue Sainte-Catherine Est", site: "https://www.olympiamontreal.com/en/"},
	{name: "Parc de l&#39;Espoir", type: "Park", address: "1336 Rue Sainte-Catherine Est", site: "https://montreal.ca/en/places/parc-de-lespoir"},
	{name: "Parc Serge-Garant", type: "Park", address: "", site: "https://www.lavitrine.com/place/Parc_Serge_Garant"},
	{name: "Le National", type: "Theatre", address: "1220 Rue Sainte-Catherine Est", site: "http://www.latulipe.ca/"},
	{name: "Le Pass&eacute; Compos&eacute;", type: "Restaurant", address: "1310 Boulevard de Maisonneuve Est", site: "https://bistropassecompose.com/?lang=en"},
	{name: "Parc Fran&ccedil;ois-Martineau", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-francois-martineau"},
	{name: "Parc Hector-Charland", type: "Park", address: "1662 Rue de la Visitation", site: "https://montreal.ca/en/places/parc-hector-charland"},
	{name: "Centre St-Pierre", type: "School", address: "1212 Rue Panet", site: "https://www.centrestpierre.org/"},
	{name: "Parc des Joyeux-Vikings", type: "Park", address: "1763 Rue Beaudry", site: "https://montreal.ca/en/places/parc-des-joyeux-vikings"},
	{name: "Parc Jean-Charbonneau", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-jean-charbonneau"},
	{name: "Ar&eacute;na Camillien-Houde", type: "Sports", address: "1696 Rue Montcalm", site: "https://montreal.ca/en/places/arena-camillien-houde"},
	{name: "Parc Miville-Couture", type: "Park", address: "1215 Rue Atateken", site: "https://montreal.ca/en/places/parc-miville-couture"},
	{name: "Le Rubic", type: "Residence", address: "1117 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://rubic.ca/en/"},
	{name: "&Eacute;glise Saint-Pierre-Ap&ocirc;tre", type: "Church", address: "1201 Rue de la Visitation", site: "http://www.saintpierreapotre.ca/"}];
	
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
