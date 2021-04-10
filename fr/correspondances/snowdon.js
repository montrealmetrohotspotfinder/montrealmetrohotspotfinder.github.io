function init()
{
	hnames = [ "Oratoire Saint-Joseph", "Mairie de C&ocirc;te-des-Neiges / N.D.G.", "&Eacute;cole Iona", "Deli Snowdon" ];
	
	htypes = [ "&Eacute;glise", "Gouvernement", "&Eacute;cole", "Restaurant" ];
	
	haddresses = [ "3800 Chemin Queen-Mary", "5160 Boulevard D&eacute;carie", "5000 Avenue Iona", "5265 Boulevard D&eacute;carie" ];
	
	hsites = [ "https://www.saint-joseph.org/fr" , "https://montreal.ca/cote-des-neiges-notre-dame-de-grace", "https://iona.cssdm.gouv.qc.ca/", "http://www.snowdondeli.com/" ];
	
	if(hnames.length == 1){
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><em lang=\"fr\"><b>"+hnames.length+ " point d&#39;int&eacute;r&ecirc;t est &agrave; proximit&eacute; de cette station.</b></em></span><br/><br/>";
	}
	else {
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><em lang=\"fr\"><b>"+hnames.length+ " points d&#39;int&eacute;r&ecirc;t sont &agrave; proximit&eacute; de cette station.</b></em></span><br/><br/>";
	}
	
	for (var i=0; i<hnames.length; i++)
	{
		if (hsites[i] == "#")
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + hnames[i] 
			+ "</td><td>" + htypes[i] 
			+ "</td><td>" + haddresses[i] 
			+ "</td><td>" + "Aucun site Web disponible</td></tr></li>";
		}
		else
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + hnames[i] 
			+ "</td><td>" + htypes[i] 
			+ "</td><td>" + haddresses[i] 
			+ "</td><td>" + "<a href=\"" + hsites[i] + "\">Site Web</a></td></tr></li>";
		} 	
	}
}

window.onload = init;
var hnames, htypes, haddresses, hsites;