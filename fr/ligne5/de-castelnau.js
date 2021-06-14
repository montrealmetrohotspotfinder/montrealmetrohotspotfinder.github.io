function init()
{
	hnames = [ "Petite Italie", "March&eacute; Jean-Talon", "Parc Jarry", "Stade IGA", "&Eacute;cole Sainte-C&eacute;cile", "&Eacute;glise Orthodoxe Saint-Nicolas d&#39;Antioche", "&Eacute;glise Sainte-C&eacute;cile",
	"Parc Victorien-Pesant", "Parc de la Petite-Italie", "Parc Guglielmo-Marconi", "Fruiterie Milano", "Place Shamrock" ];
	
	htypes = [ "District", "March&eacute;", "Parc", "Sports", "&Eacute;cole", "&Eacute;glise", "&Eacute;glise", "Parc", "Parc", "Parc", "Magasinage", "Parc" ];
	
	haddresses = [ "", "7070 Avenue Henri-Julien", "285 Rue Gary-Carter", "285 Rue Gary-Carter", "7230 Avenue de Gasp&eacute;", "80 Rue de Castelnau Est", "7390 Avenue Henri-Julien",
	"7345 Avenue de Gasp&eacute;", "6634 Rue Clark", "", "6862 Boulevard Saint-Laurent", "70 Avenue Shamrock" ];
	
	hsites = [ "https://www.mtl.org/fr/experience/bienvenue-petite-italie-montreal", "https://www.marchespublics-mtl.com/marches/jean-talon/", 
	"https://montreal.ca/lieux/parc-jarry", "http://stadeiga.com/", "https://ste-cecile.csdm.ca/", "http://stnicholasmtl.com/", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/sainte-cecile",
	"https://montreal.ca/lieux/parc-victorien-pesant", "https://montreal.ca/lieux/parc-de-la-petite-italie", "https://montreal.ca/lieux/parc-guglielmo-marconi", "https://milanofruiterie.ca/fr/", "https://montreal.ca/lieux/place-shamrock" ];
	
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
