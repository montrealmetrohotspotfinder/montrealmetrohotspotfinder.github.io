function init()
{
	spots = [{name: "Centre de Quilles Moderne", type: "Sports", address: "3115 Boulevard de l&#39;Assomption", site: "https://www.quillesjgnc.com/centre-de-quilles-moderne/?lang=en"},
	{name: "Olympic Village", type: "District", address: "5199 Rue Sherbrooke Est", site: "https://www.caprent.com/apartments-for-rent/montreal-qc/olympic-village/"},
	{name: "H&ocirc;pital Maisonneuve-Rosemont", type: "Hospital", address: "5415 Boulevard de l&#39;Assomption", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/hopital-maisonneuve-rosemont"},
	{name: "Produits Scientific Games", type: "Office", address: "3000 Boulevard de l&#39;Assomption", site: "https://www.scientificgames.com/"},
	{name: "&Eacute;cole des M&eacute;tiers de l&#39;A&eacute;rospatiale de Montr&eacute;al", type: "Trade School", address: "5300 Rue Chauveau", site: "https://ecole-metiers-aerospatiale.cssdm.gouv.qc.ca/"},
	{name: "Elogia", type: "Residence", address: "5440 Rue Sherbrooke Est", site: "https://www.legroupemaurice.com/en/retirement-homes/elogia/"},
	{name: "LUX Gouverneur Montr&eacute;al", type: "Residence", address: "5500 Rue Sherbrooke Est", site: "https://www.luxgouverneur.ca/residences/lux-montreal/"},
	{name: "&Eacute;cole Marguerite-de-Lajemmerais", type: "School", address: "5555 Rue Sherbrooke Est", site: "https://marguerite-de-lajemmerais.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;glise MCI Canada", type: "Church", address: "5685 Rue Chauveau", site: "https://mcigc.ca/"}];
	
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