function init()
{
	hnames = [ "Institut de Tourisme et d&#39;H&ocirc;tellerie du Qu&eacute;bec", "H&ocirc;tel de l&#39;ITHQ", "Parc La Fontaine", "Square Saint-Louis", "Auberge du Carr&eacute; Saint-Louis", 
	"Th&eacute;&acirc;tre d&#39;Aujourd&#39;hui", "Th&eacute;&acirc;tre de Quat&#39;Sous", "Th&eacute;&acirc;tre La Chapelle", "Les R&eacute;sidences Soleil Manoir Plaza",
	"Gare d&#39;Autocars de Montr&eacute;al", "Quartier Latin", "Champlain College (Vermont), campus Montr&eacute;al", "Parc Jehane-Beno&icirc;t", "Parc J.-Z.-L&eacute;on-Patenaude", "C&eacute;gep du Vieux Montr&eacute;al", "Loft Hotel Montr&eacute;al",
	"Parc Simonne-Monet-Chartrand", "Parc Claude-Melan&ccedil;on", "H&ocirc;tel Ch&acirc;teau de l&#39;Argoat", "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, D&eacute;partement de Danse", "&Eacute;cole Espace-Jeunesse", "Parc Th&eacute;r&egrave;se-Daviau (anciennement Parc Roy-Rivard)",
	"Auberge de la Fontaine", "&Eacute;cole Le Plateau", "&Eacute;cole Lanaudi&egrave;re", "&Eacute;cole Nationale de l&#39;Humour", "&Eacute;cole &Eacute;lan", "Parc Monseigneur-Lartigue", "&Eacute;cole Marguerite-Bourgeoys", "H&ocirc;pital Notre-Dame", "Parc Persillier-Lachapelle", "Place Charles-de-Gaulle",
	"&Eacute;cole au Pied-de-la-Montagne", "Les Fusiliers Mont-Royal", "H&ocirc;tel Manoir Sherbrooke", "H&ocirc;tel Espace Confort", "H&ocirc;tel St-Thomas", "La Fabrique", "L&#39;&Eacute;vidence", "H&ocirc;tel de Paris", "Caf&eacute; Cherrier" ];
	
	htypes = [ "Universit&eacute;", "H&ocirc;tel", "Parc", "Place de la Ville", "H&ocirc;tel", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre", "R&eacute;sidence", "Terminus d&#39;Autobus", "District", "Coll&egrave;ge", "Parc", "Parc", "Coll&egrave;ge", "H&ocirc;tel",
	"Parc", "Parc", "H&ocirc;tel", "Universit&eacute;", "&Eacute;cole", "Parc",
	"H&ocirc;tel", "&Eacute;cole", "&Eacute;cole", "&Eacute;cole", "&Eacute;cole", "Parc", "&Eacute;cole", "H&ocirc;pital", "Parc", "Parc", "&Eacute;cole", "Mus&eacute;e", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Restaurant", "Restaurant", "H&ocirc;tel", "Restaurant" ];
	
	haddresses = [ "3535 Rue Saint-Denis", "3535 Rue Saint-Denis", "3819 Avenue Calixa-Lavall&eacute;e", "", "3466 Rue Saint-Denis", "3900 Rue Saint-Denis", "100 Avenue des Pins Est", "3700 Rue Saint-Dominique",
	"505 Rue Sherbrooke Est", "1717 Rue Berri", "", "525 Rue Sherbrooke Est", "", "", "255 Rue Ontario Est", "334 Terrasse Saint Denis", "2121 Rue Saint-Christophe", "", "524 Rue Sherbrooke Est",
	"840 Rue Cherrier", "3655 Rue Saint-Hubert", "",
	"1301 Rue Rachel Est", "3700 Avenue Calixa-Lavall&eacute;e", "4300 Rue de Lanaudi&egrave;re", "2120 Rue Sherbrooke Est", "3450 Avenue de Lorimier", "2250 Rue Panet", "2070 Rue Plessis", "1560 Rue Sherbrooke Est", "2040 Rue Alexandre-DeS&egrave;ve", "",
	"311 Avenue des Pins Est", "3721 Avenue Henri-Julien", "157 Rue Sherbrooke Est", "2050 Rue Saint-Denis", "430 Rue Sherbrooke Est", "3619 Rue Saint-Denis", "3817 Rue Saint-Denis", "901 Rue Sherbrooke Est", "3635 Rue Saint-Denis" ];
	
	hsites = [ "https://www.ithq.qc.ca/institut/", "http://www.ithq.qc.ca/hotel/", "https://montreal.ca/lieux/parc-la-fontaine", "https://montreal.ca/lieux/square-saint-louis", "https://aubergecarrestlouis.com/Accueil",
	"https://www.theatredaujourdhui.qc.ca/", "https://www.quatsous.com/", "https://lachapelle.org/fr", "https://residencessoleil.ca/liste-des-residences-soleil/manoir-plaza", "http://www.gamtl.com/fr/bienvenue/default.aspx", 
	"http://www.quartierlatin.ca/fr/", "https://montreal.champlain.edu/", "https://montreal.ca/lieux/parc-jehane-benoit", "https://montreal.ca/lieux/parc-j-z-leon-patenaude", "http://www.cvm.qc.ca/Pages/index.aspx",
	"https://lofthotel.guestybookings.com/", "https://montreal.ca/lieux/parc-simonne-monet-chartrand", "https://montreal.ca/lieux/parc-claude-melancon", "https://www.hotel-chateau-argoat.com/",
	"https://danse.uqam.ca/", "https://espace-jeunesse.cssdm.gouv.qc.ca/", "https://montreal.ca/lieux/parc-therese-daviau",
	"http://www.aubergedelafontaine.com/",
	"https://le-plateau.cssdm.gouv.qc.ca/",
	"https://lanaudiere.cssdm.gouv.qc.ca/",
	"https://enh.qc.ca/",
	"https://elan.cssdm.gouv.qc.ca/",
	"https://montreal.ca/lieux/parc-monseigneur-lartigue",
	"https://marguerite-bourgeoys.cssdm.gouv.qc.ca/",
	"https://www.ciusss-centresudmtl.gouv.qc.ca/etablissement/hopital-notre-dame",
	"https://montreal.ca/lieux/parc-persillier-lachapelle",
	"https://montreal.ca/lieux/place-charles-de-gaulle",
	"https://au-pied-de-la-montagne.cssdm.gouv.qc.ca/ecole/pavillon-jjolier/",
	"http://lesfusiliersmont-royal.com/",
	"https://manoirsherbrooke.ca/?lang=fr",
	"https://montrealespaceconfort.com/fr/",
	"https://hotelst-thomas.com/fr/",
	"https://bistrotlafabrique.com/", 
	"https://www.bistrolevidence.com/",
	"https://hoteldeparis.ca",
	"http://cafecherrier.ca" ];
	
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
