function init()
{
	hnames = [ "&Eacute;glise Notre-Dame-de-la-Consolata", "H&ocirc;pital Jean-Talon", "Parc de Turin", "&Eacute;cole Saint-Gabriel-Lalemant", "&Eacute;cole Pierre Elliott Trudeau" ];
	
	htypes = [ "&Eacute;glise", "H&ocirc;pital", "Parc", "&Eacute;cole", "&Eacute;cole" ];
	
	haddresses = [ "1700 Rue Jean-Talon Est", "1385 Rue Jean-Talon Est", "7205 Rue Chambord", "7350 Rue Garnier", "6855 Rue Cartier" ];
	
	hsites = [ "https://www.paroisseconsolatamtl.ca/", "https://www.ciusssnordmtl.ca/installations/hopitaux/hopital-jean-talon/", "https://montreal.ca/lieux/parc-de-turin", "https://st-gabriel-lalemant.csdm.ca/",
	"https://www.emsb.qc.ca/trudeau" ];
	
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