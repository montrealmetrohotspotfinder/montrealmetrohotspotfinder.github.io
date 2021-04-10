function init()
{
	hnames = [ "Coll&egrave;ge de Maisonneuve", "CLSC de Maisonneuve", "Parc Lalancette", "&Eacute;cole Saint-&Eacute;mile", "Parc Saint-&Eacute;mile", "&Eacute;cole Sainte-Jeanne-d&#39;Arc",
	"Parc Victor-Bourgeau", "Manoir Louisiane", "Paroisse Sainte-Jeanne-d&#39;Arc" ];
	
	htypes = [ "Coll&egrave;ge", "Agence", "Parc", "&Eacute;cole", "Parc", "&Eacute;cole", "Parc", "R&eacute;sidence", "&Eacute;glise" ];
	
	haddresses = [ "3800 Rue Sherbrooke Est", "4201 Rue Ontario Est", "2315 Rue Nicolet", "3450 Rue Davidson", "", "3700 Rue Sherbrooke Est", "67 Place Victor-Bourgeau", "3600 Rue Sherbrooke Est", "2295 Rue de Chambly" ];
	
	hsites = [ "https://www.cmaisonneuve.qc.ca/", "https://ciusss-estmtl.gouv.qc.ca/etablissement/clsc-de-hochelaga-maisonneuve", "https://montreal.ca/lieux/parc-lalancette",
	"https://st-emile.csdm.ca/", "https://montreal.ca/lieux/parc-saint-emile", "https://ste-jeanne-darc.cssdm.gouv.qc.ca/", "https://montreal.ca/lieux/parc-victor-bourgeau", "https://manoir-louisiane.business.site/",
	"https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/sainte-jeanne-darc" ];
	
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