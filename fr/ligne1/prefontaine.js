function init()
{
	hnames = [ "Ar&eacute;na Francis-Bouillon", "Parc Raymond-Pr&eacute;fontaine", "Institut Teccart", "Coll&egrave;ge Ville-Marie", "L&#39;&Eacute;glise &agrave; Montr&eacute;al", "&Eacute;cole Notre-Dame-de-l&#39;Assomption" ];
	
	htypes = [ "Sports", "Parc", "Coll&egrave;ge", "&Eacute;cole", "&Eacute;glise", "&Eacute;cole" ];
	
	haddresses = [ "3175 Rue de Rouen", "3100 Rue Hochelaga", "3030 Rue Hochelaga", "2850 Rue Sherbrooke Est", "3201 Rue Hochelaga", "2430 Rue Darling" ];
	
	hsites = [ "https://montreal.ca/lieux/arena-francis-bouillon", "https://montreal.ca/lieux/parc-raymond-prefontaine", "https://www.teccart.qc.ca/index.php", "https://www.cvmarie.qc.ca/",
	"http://egliseamontreal.ca/", "https://notre-dame-de-lassomption.cssdm.gouv.qc.ca/" ];
	
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