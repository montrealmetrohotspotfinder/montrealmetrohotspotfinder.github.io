function init()
{
	hnames = [ "Petit Maghreb", "Parc Fran&ccedil;ois-Perrault", "Biblioth&egrave;que de Saint-Michel", "&Eacute;cole Secondaire John F. Kennedy", "Parc Sandro-Pertini", "&Eacute;cole Saint-Mathieu",
	"&Eacute;cole Joseph-Fran&ccedil;ois-Perrault", "Parc Shaughnessy", "Parc Joseph-Robin", "Parc Michel-Ange" ];
	
	htypes = [ "District", "Parc", "Biblioth&egrave;que", "&Eacute;cole", "Parc", "&Eacute;cole", "&Eacute;cole", "Parc", "Parc", "Parc" ];
	
	haddresses = [ "", "7525 Rue Fran&ccedil;ois-Perrault", "7601 Rue Fran&ccedil;ois-Perrault", "3030 Rue Villeray", "", "7230 8e Avenue", "7450 Rue Fran&ccedil;ois-Perrault", "7634 17e Avenue", "", "3615 Rue Michel-Ange" ];
	
	hsites = [ "#", "https://montreal.ca/lieux/parc-francois-perrault", "https://montreal.ca/lieux/bibliotheque-de-saint-michel", "http://jfkhighschoolemsb.com/",
	"https://montreal.ca/en/places/parc-sandro-pertini", "https://st-mathieu.csdm.ca/", "https://joseph-francois-perrault.csdm.ca/", "https://montreal.ca/lieux/parc-shaughnessy", "https://montreal.ca/lieux/parc-joseph-robin", "#" ];
	
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