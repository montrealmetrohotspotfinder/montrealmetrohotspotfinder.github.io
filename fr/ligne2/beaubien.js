function init()
{
	hnames = [ "Plaza Saint-Hubert", "&Eacute;glise Notre-Dame-de-la-D&eacute;fense", "&Eacute;glise Saint-&Eacute;douard", "&Eacute;cole La Mennais", "Chambre de la Jeunesse",
		 "Th&eacute;&acirc;tre Plaza", "Beaubien Bagel", "Parc Dante" ];
	
	htypes = [ "Magasinage", "&Eacute;glise", "&Eacute;glise", "&Eacute;cole", "Tribunal", "Th&eacute;&acirc;tre", "Restaurant", "Parc" ];
	
	haddresses = [ "6841 Rue Saint-Hubert", "6800 Avenue Henri-Julien", "6500 Rue de Saint-Vallier", "6521 Rue Saint-Denis", "410 Rue de Bellechasse", "6505 Rue Saint-Hubert", "828 Rue Beaubien Est", "" ];
	
	hsites = [ "https://www.plazasthubert.com/fr/", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/dame-defense-italiens", "#", "https://la-mennais.csdm.ca/",
	"https://www.justice.gouv.qc.ca/systeme-judiciaire/tribunaux-du-quebec/cour-du-quebec/chambre-de-la-jeunesse", "https://www.theatreplaza.ca/", "#", "https://montreal.ca/lieux/parc-dante" ];
	
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
