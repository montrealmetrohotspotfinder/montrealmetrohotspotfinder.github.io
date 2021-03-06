function init()
{
	hnames = [ "Spectrum Productions", "Parc Sir-Wilfrid-Laurier", "&Eacute;cole Nationale de Th&eacute;&acirc;tre", "&Eacute;cole Sup&eacute;rieure de Ballet du Qu&eacute;bec",
	"&Eacute;glise Catholique Saint-Denis", "&Eacute;cole Laurier", "Centre Champagnat", "Parc Berri-Saint-Joseph", "Parc Lahaie", "Parc Saint-Michel", "&Eacute;cole Saint-Enfant-J&eacute;sus", "Faberg&eacute;",
	"Fairmount Bagel" ];
	
	htypes = [ "Studio", "Parc", "&Eacute;cole", "&Eacute;cole", "&Eacute;glise", "&Eacute;cole", "&Eacute;cole", "Parc", "Parc", "Parc", "&Eacute;cole", "Restaurant", "Restaurant" ];
	
	haddresses = [ "5445 Avenue de Gasp&eacute;", "1115 Avenue Laurier Est", "5030 Rue Saint-Denis", "4816 Rue Rivard", "454 Avenue Laurier Est", "505 Avenue Laurier Est", 
		      "5017 Rue Saint-Hubert", "", "4921 Boulevard Saint-Laurent", "", "75 Rue Villeneuve Est", "25 Avenue Fairmount Ouest", "74 Avenue Fairmount Ouest" ];
	
	hsites = [ "https://www.productionsspectrum.com/home-fr", "https://montreal.ca/lieux/parc-sir-wilfrid-laurier", "https://ent-nts.ca/fr", "https://www.esbq.ca/fr", 
	"https://sites.google.com/view/eglisesaintdenismontreal/accueil", "https://laurier.cssdm.gouv.qc.ca/", "https://centre-champagnat.cssdm.gouv.qc.ca/", "https://montreal.ca/lieux/parc-berri-saint-joseph",
	"https://montreal.ca/lieux/parc-lahaie", "https://montreal.ca/lieux/parc-saint-michel", "https://st-enfant-jesus.cssdm.gouv.qc.ca/", "https://www.faberge514.com/accueil", "https://fairmountbagel.com/?lang=fr" ];
	
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
