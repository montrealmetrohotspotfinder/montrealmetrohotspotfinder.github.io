function init()
{
	hnames = [ "Centre Domaine", "Salon de Quilles Centre Commercial Le Domaine", "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise", "Mairie de Mercier&#8211;Hochelaga-Maisonneuve",
	"Biblioth&egrave;que Langelier", "Carrefour Langelier via Bus 33", "Ar&eacute;na Saint-Donat", "Parc Saint-Donat", "Parc de Lotbini&egrave;re", "Parc Mignault",
	"Centre R&eacute;cr&eacute;atif et Communautaire Saint-Donat", "&Eacute;cole Saint-Donat", "&Eacute;glise Saint-Donat de Montr&eacute;al" ];
	
	htypes = [ "Centre Commercial", "Sports", "Cimeti&egrave;re", "Gouvernement", "Biblioth&egrave;que", "Centre Commercial", "Sports", "Parc", "Parc", "Parc", "Centre Culturel", "&Eacute;cole", "&Eacute;glise" ];
	
	haddresses = [ "3235 Avenue de Granby", "3275 Avenue de Granby", "6893 Rue Sherbrooke Est", "6854 Rue Sherbrooke Est", "6473 Rue Sherbrooke Est", "7373 Boulevard Langelier", 
	"6750 Rue de Marseille", "6800 Rue de Marseille", "1 Rue du Parc-de Lotbini&egrave;re", "", "6547 Rue de Marseille", "3155 Rue Desautels", "6805 Rue de Marseille" ];
	
	hsites = [ "https://centredomaine.com/?language=fr", "https://www.quillesdomainemontreal.com/", "http://www.rsfa.ca/", "https://montreal.ca/lieux/mairie-darrondissement-de-mercier-hochelaga-maisonneuve", 
	"http://ville.montreal.qc.ca/culture/bibliotheque-langelier", "https://www.carrefourlangelier.com/fr/accueil.html", "https://montreal.ca/lieux/arena-saint-donat",
	"https://montreal.ca/lieux/parc-saint-donat", "https://montreal.ca/lieux/parc-de-lotbiniere", "https://montreal.ca/lieux/parc-mignault", "https://crcstdonat.org/",
	"https://st-donat.cssdm.gouv.qc.ca/", "https://www.eglisesaintdonatdemontreal.com/" ];
	
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