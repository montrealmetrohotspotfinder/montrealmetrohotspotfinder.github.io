function init()
{
	hnames = [ "P&acirc;tisserie La Conca D&#39;Oro", "Parc Gabriel-Sagard", "&Eacute;cole Saint-Barth&eacute;lemy", "&Eacute;glise Biblique Pierre Angulaire",
	"Parc Molson", "Paroisse Saint-Mathieu" ];
	
	htypes = [ "Magasinage", "Parc", "&Eacute;cole", "&Eacute;glise", "Parc", "&Eacute;glise" ];
	
	haddresses = [ "2550 Rue Jean-Talon Est", "7069 Rue Sagard", "7081 Avenue des &Eacute;rables", "7137 Avenue des &Eacute;rables", "2473 Rue Beaubien Est",
	"2600 Rue Jean-Talon Est" ];
	
	hsites = [ "https://alexiaianniciello1.wixsite.com/fvlaconcadoro", "https://montreal.ca/lieux/parc-gabriel-sagard", "https://st-barthelemy.csdm.ca/", "#",
	"https://montreal.ca/lieux/parc-molson", "https://www.diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-mathieu" ];
	
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
