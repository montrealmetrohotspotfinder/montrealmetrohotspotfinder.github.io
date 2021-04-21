function init()
{
	hnames = [ "Altasciences", "March&eacute; Central via Bus 179", "Parc Hamilton", "Universit&eacute; de Montr&eacute;al, campus MIL" ];
	
	htypes = [ "Pharmacie", "Centre Commercial", "Parc", "Universit&eacute;" ];
	
	haddresses = [ "1100 Avenue Beaumont", "9187 Boulevard de l&#39;Acadie", "", "1375 Avenue Th&eacute;r&egrave;se-Lavoie-Roux" ];
	
	hsites = [ "https://www.altasciences.ca/", "https://www.marchecentral.com/", "#", "https://campusmil.umontreal.ca/" ];
	
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
