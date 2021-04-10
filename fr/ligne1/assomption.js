function init()
{
	hnames = [ "Centre de Quilles Moderne", "Village Olympique", "H&ocirc;pital Maisonneuve-Rosemont", "Produits Scientific Games", 
	"&Eacute;cole des M&eacute;tiers de l&#39;A&eacute;rospatiale de Montr&eacute;al", "Elogia", "LUX Gouverneur Montr&eacute;al", "&Eacute;cole Marguerite-de-Lajemmerais",
	"&Eacute;glise MCI Canada" ];
	
	htypes = [ "Sports", "District", "H&ocirc;pital", "Bureau", "&Eacute;cole de M&eacute;tiers", "R&eacute;sidence", "R&eacute;sidence", "&Eacute;cole", "&Eacute;glise" ];
	
	haddresses = [ "3115 Boulevard de l&#39;Assomption", "5199 Rue Sherbrooke Est", "5415 Boulevard de l&#39;Assomption",
	"3000 Boulevard de l&#39;Assomption", "5300 Rue Chauveau", "5440 Rue Sherbrooke Est", "5500 Rue Sherbrooke Est", "5555 Rue Sherbrooke Est",
	"5685 Rue Chauveau" ];
	
	hsites = [ "https://www.quillesjgnc.com/centre-de-quilles-moderne/", "https://www.caprent.com/fr/appartements-a-louer/montreal-qc/village-olympic/", 
	"https://ciusss-estmtl.gouv.qc.ca/etablissement/hopital-maisonneuve-rosemont", "https://www.scientificgames.com/", "https://ecole-metiers-aerospatiale.cssdm.gouv.qc.ca/", 
	"https://www.legroupemaurice.com/residences-pour-personnes-agees/elogia/", "https://www.luxgouverneur.ca/residences/lux-montreal/", "https://marguerite-de-lajemmerais.cssdm.gouv.qc.ca/",
	"https://mcigc.ca/" ];
	
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