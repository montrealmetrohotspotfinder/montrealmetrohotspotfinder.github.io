function init()
{
	hnames = [ "Parc Mont-Royal", "L&#39;Avenue du Mont-Royal", "Th&eacute;&acirc;tre du Rideau Vert", "Biblioth&egrave;que du Plateau-Mont-Royal", "Sanctuaire du Saint-Sacrement", "Parc Albert-Saint-Martin" ];
	
	htypes = [ "Parc", "District", "Th&eacute;&acirc;tre", "Biblioth&egrave;que", "&Eacute;glise", "Parc" ];
	
	haddresses = [ "1260 Chemin Remembrance", "1012 Avenue du Mont-Royal Est", "4664 Rue Saint-Denis", "465 Avenue du Mont-Royal Est", "500 Avenue du Mont-Royal Est", "" ];
	
	hsites = [ "https://montreal.ca/lieux/parc-du-mont-royal", "https://www.mont-royal.net/", "https://www.rideauvert.qc.ca/", "https://montreal.ca/lieux/bibliotheque-du-plateau-mont-royal",
	"http://www.fraternites-jerusalem.ca/", "https://montreal.ca/lieux/parc-albert-saint-martin" ];
	
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