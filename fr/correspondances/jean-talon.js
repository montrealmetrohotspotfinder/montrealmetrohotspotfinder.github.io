function init()
{
	hnames = [ "Tour Jean-Talon", "March&eacute; Jean-Talon", "Plaza Saint-Hubert", "R&eacute;sidence Alfredo-Gagliardi", "Casa D&#39;Italia", "&Eacute;glise Orthodoxe Antiochienne Saint-Georges", "Parc Le Pr&eacute;vost", "Patro Villeray",
	"&Eacute;cole Saint-Ars&egrave;ne", "&Eacute;glise Saint-Ars&egrave;ne" ];
	
	htypes = [ "Bureau", "March&eacute;", "Magasinage", "R&eacute;sidence", "Centre Culturel", "&Eacute;glise", "Parc", "Centre Culturel", "&Eacute;cole", "&Eacute;glise" ];
	
	haddresses = [ "600 Rue Jean-Talon Est", "7070 Avenue Henri-Julien", "6841 Rue Saint-Hubert", "7170 Rue Berri", "505 Rue Jean-Talon Est", "575 Rue Jean-Talon Est", "7275 Avenue Christophe-Colomb", "7355 Avenue Christophe-Colomb",
	"6972 Avenue Christophe-Colomb", "1015 Rue B&eacute;langer" ];
	
	hsites = [ "https://montrealsouterrain.ca/tour/tour-jean-talon/", "https://www.marchespublics-mtl.com/marches/jean-talon/", "https://www.plazasthubert.com/fr/", "https://www.residencesenharmonie.qc.ca/residences/residence-alfredo-gagliardi", "https://www.casaditalia.org/t-fr-ca",
	"https://saintgeorgemontreal.org/", "https://montreal.ca/lieux/parc-le-prevost", "https://patrovilleray.ca/", "https://st-arsene.cssdm.gouv.qc.ca/", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-arsene" ];
	
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
