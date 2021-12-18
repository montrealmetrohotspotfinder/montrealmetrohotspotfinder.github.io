function init()
{
	hnames = [ "Centre de Soins Prolong&eacute;s Grace Dart via Bus 32", "Plaza Antique", "H&ocirc;tel Chablis Cadillac", "Parc de l&#39;Ancienne-P&eacute;pini&egrave;re", "Parc Jean-Amyot",
	"&Eacute;cole Rosalie-Jett&eacute;", "&Eacute;cole Notre-Dame-des-Victoires", "Sanctuaire Marie-Reine-des-Coeurs", "Parc Bossuet", "Association Pulmonaire du Qu&eacute;bec" ];
	
	htypes = [ "R&eacute;sidence", "Salle de R&eacute;ception", "H&ocirc;tel", "Parc", "Parc", "&Eacute;cole", "&Eacute;cole", "&Eacute;glise", "Parc", "Agence" ];
	
	haddresses = [ "5155 Rue Sainte-Catherine Est", "6086 Rue Sherbrooke Est", "5800 Rue Sherbrooke Est", "5220 Rue du Quesne", "6110 Rue de Marseille", "5100 Rue Bossuet", "2720 Rue Bossuet",
	"5875 Rue Sherbrooke Est", "", "6070 Rue Sherbrooke Est" ];
	
	hsites = [ "https://ciusss-ouestmtl.gouv.qc.ca/contact-localisation/centres-dhebergement-et-de-soins-de-longue-duree-chsld/centre-de-soins-prolonges-grace-dart/", 
	"https://plazapmg.com/plaza-antique/", "https://www.chabliscadillac.com/", "https://montreal.ca/lieux/parc-de-lancienne-pepiniere", "https://montreal.ca/lieux/parc-jean-amyot",
	"https://rosalie-jette.csdm.ca/", "https://notre-dame-des-victoires.csdm.ca/", "https://smrdc.org/", "https://montreal.ca/lieux/parc-bossuet", "https://poumonquebec.ca/" ];
	
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
