function init()
{
	hnames = [ "Le Village", "Maison Radio-Canada", "Cabaret Mado", "L&#39;Olympia", "Parc de l&#39;Espoir", "Parc Serge-Garant", "Le National", "Le Pass&eacute; Compos&eacute;", "Parc Fran&ccedil;ois-Martineau", "Parc Hector-Charland",
	"Centre St-Pierre", "Parc des Joyeux-Vikings", "Parc Jean-Charbonneau", "Ar&eacute;na Camillien-Houde", "Parc Miville-Couture", "Le Rubic", "&Eacute;glise Saint-Pierre-Ap&ocirc;tre" ];
	
	htypes = [ "District", "Bureau", "Restaurant", "Th&eacute;&acirc;tre", "Parc", "Parc", "Th&eacute;&acirc;tre", "Restaurant", "Parc", "Parc", "&Eacute;cole", "Parc", "Parc", "Sports", "Parc", "R&eacute;sidence", "&Eacute;glise" ];
	
	haddresses = [ "", "1400 Boulevard Ren&eacute;-L&eacute;vesque Est", "1115 Rue Sainte-Catherine Est", "1004 Rue Sainte-Catherine Est", "1336 Rue Sainte-Catherine Est", "", "1220 Rue Sainte-Catherine Est", "1310 Boulevard de Maisonneuve Est",
	"", "1662 Rue de la Visitation", "1212 Rue Panet", "1763 Rue Beaudry", "", "1696 Rue Montcalm", "1215 Rue Atateken", "1117 Boulevard Ren&eacute;-L&eacute;vesque Est", "1201 Rue de la Visitation" ];
	
	hsites = [ "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/le-village-montreal", "http://archives.radio-canada.ca/societe/histoire/topics/1069-5953/", 
	"http://www.mado.qc.ca/", "https://www.olympiamontreal.com/", "https://montreal.ca/lieux/parc-de-lespoir", "https://www.lavitrine.com/place/Parc_Serge_Garant", "http://www.latulipe.ca/", "https://www.bistropassecompose.com/",
	"https://montreal.ca/lieux/parc-francois-martineau", "https://montreal.ca/lieux/parc-hector-charland", "https://www.centrestpierre.org/", "https://montreal.ca/lieux/parc-des-joyeux-vikings", "https://montreal.ca/lieux/parc-jean-charbonneau",
	"https://montreal.ca/lieux/arena-camillien-houde", "https://montreal.ca/lieux/parc-miville-couture", "https://rubic.ca/", "http://www.saintpierreapotre.ca/" ];
	
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
