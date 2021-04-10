function init()
{
	hnames = [ "Th&eacute;&acirc;tre Outremont", "Parc Pratt", "Parc Raoul-Dandurand", "Parc John-F.-Kennedy", "Coll&egrave;ge Stanislas", "Ar&eacute;na d&#39;Outremont",
	"&Eacute;cole Internationale Guy-Drummond", "&Eacute;cole Primaire Lajoie" ];
	
	htypes = [ "Th&eacute;&acirc;tre", "Parc", "Parc", "Parc", "&Eacute;cole", "Sports", "&Eacute;cole", "&Eacute;cole" ];
	
	haddresses = [ "1248 Avenue Bernard Ouest", "795 Avenue Dunlop", "", "", "780 Boulevard Dollard", "999 Avenue McEachran", "1475 Avenue Lajoie", "1276 Avenue Lajoie" ];
	
	hsites = [ "http://www.theatreoutremont.ca/fr/accueil/", "https://montreal.ca/lieux/parc-pratt", 
	"https://montreal.ca/lieux/parc-raoul-dandurand", "https://montreal.ca/lieux/parc-john-f-kennedy", "http://www.stanislas.qc.ca/montreal/", "https://montreal.ca/lieux/arena-doutremont",
	"https://guydrummond.ecoleoutremont.com/", "https://lajoie.ecoleoutremont.com/" ];
	
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