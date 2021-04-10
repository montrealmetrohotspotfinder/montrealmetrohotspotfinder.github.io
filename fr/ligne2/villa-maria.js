function init()
{
	hnames = [ "&Eacute;cole Villa-Maria", "C&eacute;gep Marianopolis", "Acad&eacute;mie Marymount", "Village Monkland" ];
	
	htypes = [ "&Eacute;cole", "Coll&egrave;ge", "&Eacute;cole", "District" ];
	
	haddresses = [ "4245 Boulevard D&eacute;carie", "4873 Avenue Westmount", "5100 Chemin de la C&ocirc;te Saint-Luc", "" ];
	
	hsites = [ "https://www.villamaria.qc.ca", "https://www.marianopolis.edu/", "http://marymount.emsb.qc.ca/", "#" ];
	
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