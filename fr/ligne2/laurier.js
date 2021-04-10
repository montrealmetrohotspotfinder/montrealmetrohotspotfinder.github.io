function init()
{
	hnames = [ "Spectrum Productions", "Parc Sir-Wilfrid-Laurier", "&Eacute;cole Nationale de Th&eacute;&acirc;tre", "&Eacute;cole Sup&eacute;rieure de Ballet du Qu&eacute;bec",
	"&Eacute;glise Catholique Saint-Denis" ];
	
	htypes = [ "Studio", "Parc", "&Eacute;cole", "&Eacute;cole", "&Eacute;glise" ];
	
	haddresses = [ "5445 Avenue de Gasp&eacute;", "1115 Avenue Laurier Est", "5030 Rue Saint-Denis", "4816 Rue Rivard", "454 Avenue Laurier Est" ];
	
	hsites = [ "https://www.productionsspectrum.com/home-fr", "https://montreal.ca/lieux/parc-sir-wilfrid-laurier", "https://ent-nts.ca/fr", "https://www.esbq.ca/fr", 
	"https://sites.google.com/view/eglisesaintdenismontreal/accueil" ];
	
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