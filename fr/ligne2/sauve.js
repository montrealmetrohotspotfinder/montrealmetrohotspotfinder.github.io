function init()
{
	hnames = [ "Parc Henri-Julien", "Parc d&#39;Auteuil", "R&ecirc;vanous", "&Eacute;cole Christ-Roi", "&Eacute;cole Marie-Anne" ];
	
	htypes = [ "Parc", "Parc", "R&eacute;sidence", "&Eacute;cole", "&Eacute;cole" ];
	
	haddresses = [ "9300 Rue Saint-Denis", "350 Rue Sauv&eacute; Est", "9870 Rue Laverdure", "525 Rue de Louvain Est", "100 Rue Sauv&eacute; Est" ];
	
	hsites = [ "https://montreal.ca/lieux/parc-henri-julien", "https://montreal.ca/lieux/parc-dauteuil", "https://www.revanous.org/", "https://christ-roi.csdm.ca/", "https://marie-anne.csdm.ca/" ];
	
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