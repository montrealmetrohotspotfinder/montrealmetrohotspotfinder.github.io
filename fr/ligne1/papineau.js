function init()
{
	hnames = [ "Le Village", "Conf&eacute;d&eacute;ration des Syndicats Nationaux", "Parc des Faubourgs", "Prison du Pied-du-Courant", "Parc des V&eacute;t&eacute;rans", "Place Emmett-Johns (anciennement Parc Maisonneuve-Cartier)", "Appartements Urbains FARO",
	"&Eacute;ditions MD" ];
	
	htypes = [ "District", "Agence", "Parc", "Mus&eacute;e", "Parc", "Parc", "R&eacute;sidence", "Bureau" ];
	
	haddresses = [ "", "1400 Boulevard Ren&eacute;-L&eacute;vesque Est", "1872 Rue Dorion", "903 Avenue de Lorimier", "1655 Avenue Papineau", "1449 Rue Dorion", "1825 Rue Sainte-Rose", "1815 Avenue de Lorimier" ];
	
	hsites = [ "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/le-village-montreal", "https://www.csn.qc.ca/", 
	"https://montreal.ca/lieux/parc-des-faubourgs", "http://museesmontreal.org/fr/musees/centre-d-exposition-la-prison-des-patriotes", "https://montreal.ca/lieux/parc-des-veterans",
	"https://montreal.ca/lieux/place-emmett-johns", "http://www.appartementsfaro.ca/", "https://editionsmd.com/" ];
	
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