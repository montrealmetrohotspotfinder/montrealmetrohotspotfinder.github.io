function init()
{
	hnames = [ "Maison Saint-Gabriel", "Parc du Canal de Lachine", "Parc Saint-Gabriel", "Parc d&#39;Argenson", "Parc Atwater / Saint-Charles", "Ar&eacute;na Saint-Charles" ];
	
	htypes = [ "Mus&eacute;e", "Parc", "Parc", "Parc", "Parc", "Sports" ];
	
	haddresses = [ "2146 Place Dublin", "", "2355 Rue Mullins", "2900 Rue Centre", "2880 Rue Saint-Charles", "1055 Rue d&#39;Hibernia" ];
	
	hsites = [ "https://www.maisonsaintgabriel.ca/", "https://www.pc.gc.ca/fr/lhn-nhs/qc/canallachine", "https://montreal.ca/lieux/parc-saint-gabriel", "https://montreal.ca/lieux/parc-dargenson",
	"https://montreal.ca/lieux/parc-atwater-saint-charles", "https://montreal.ca/lieux/arena-saint-charles" ];
	
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