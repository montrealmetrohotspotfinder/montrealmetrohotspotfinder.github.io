function init()
{
	hnames = [ "Parc Sir-Georges-&Eacute;tienne-Cartier", "Parc Louis-Cyr", "Institut Technique Aviron", "Parc Saint-Henri", "Piscine Saint-Henri", "CLSC Saint-Henri", 
	"&Eacute;cole des M&eacute;tiers du Sud-Ouest-de-Montr&eacute;al", "Parc &Eacute;mile-Berliner", "&Eacute;cole Ludger-Duvernay" ];
	
	htypes = [ "Parc", "Parc", "&Eacute;cole de M&eacute;tiers", "Parc", "Piscine", "Agence", "&Eacute;cole de M&eacute;tiers", "Parc", "&Eacute;cole" ];
	
	haddresses = [ "127 Rue du Square-Sir-George-&Eacute;tienne-Cartier", "167 Rue Saint-Ferdinand", "5460 Avenue Royalmount", "753 Rue Agn&egrave;s", "4055 Rue Saint-Jacques", 
	"3833 Rue Notre-Dame Ouest", "717 Rue Saint-Ferdinand", "", "770 Rue du Couvent" ];
	
	hsites = [ "https://montreal.ca/lieux/square-sir-george-etienne-cartier", "https://montreal.ca/lieux/parc-louis-cyr", "http://www.avirontech.com/fr", 
	"https://montreal.ca/lieux/parc-saint-henri", "https://montreal.ca/lieux/piscine-saint-henri", "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/clsc-de-saint-henri",
	"https://ecole-metiers-sud-ouest.csdm.ca/", "https://montreal.ca/lieux/parc-emile-berliner", "https://ludger-duvernay.cssdm.gouv.qc.ca/" ];
	
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