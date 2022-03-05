function init()
{
	hnames = [ "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al",
	"Grande Biblioth&egrave;que de Montr&eacute;al",
	"Gare d&#39;Autocars de Montr&eacute;al",
	"Th&eacute;&acirc;tre Saint-Denis",
	"Place Dupuis",
	"H&ocirc;tel Place Dupuis Montr&eacute;al",
	"Warner Brothers Montr&eacute;al",
	"(d&eacute;funt) DaGiovanni",
	"Place &Eacute;milie-Gamelin",
	"Le Village",
	"Quartier Latin",
	"H&ocirc;tel Labelle",
	"H&ocirc;tel Le Roberval",
	"H&ocirc;tel St-Denis",
	"C&eacute;gep du Vieux Montr&eacute;al",
	"Parc Toussaint-Louverture",
	"Chapelle Notre-Dame-de-Lourdes",
	"Corporation d&#39;Habitation Jeanne-Mance",
	"La Cin&eacute;math&egrave;que Qu&eacute;b&eacute;coise", 
	"Institut National de l&#39;Image et du Son",
	"Centre Pierre-P&eacute;ladeau",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, &Eacute;cole de Design",
	"Parc Saint-Jacques",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Judith-Jasmin",
	"H&ocirc;tel Le Relais Lyonnais",
	"Auberge Le Pomerol",
	"Empire Suites",
	"H&ocirc;tel Lelux",
	"Mairie de Ville-Marie",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, D&eacute;partement de Musique",
	"Place Pasteur",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Hubert-Aquin",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Th&eacute;r&egrave;se-Casgrain",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Paul-G&eacute;rin-Lajoie",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon des Sciences de la Gestion",
	"Fairfield Inn by Marriott Montreal Downtown",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Centre Sportif",
	"Biblioth&egrave;que Saint-Sulpice",
	"Boxotel",
	"H&eacute;ritage Victorien",
	"Cath&eacute;drale Saint-Jacques",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Biblioth&egrave;que Centrale",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon J.-A.-DeS&egrave;ve",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Saint-Denis",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Facult&eacute; de Science Politique et de Droit" ];
	
	htypes = [ "Universit&eacute;", "Biblioth&egrave;que", "Terminus d&#39;Autobus", "Th&eacute;&acirc;tre", "Centre Commercial", "H&ocirc;tel", "Bureau", "Restaurant", "Parc", "District", "District", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Coll&egrave;ge", "Parc", "&Eacute;glise", "R&eacute;sidence", "Mus&eacute;e", "&Eacute;cole", "Th&eacute;&acirc;tre", "Universit&eacute;", "Parc", "Universit&eacute;", "H&ocirc;tel",
		 "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Gouvernement", "Universit&eacute;", "Parc", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "H&ocirc;tel", "Sports", "Biblioth&egrave;que", "H&ocirc;tel", "H&ocirc;tel", "&Eacute;glise", "Biblioth&egrave;que", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;" ];
	
	haddresses = [ "405 Rue Sainte-Catherine Est",
	"475 Boulevard de Maisonneuve Est",
	"1717 Rue Berri",
	"1594 Rue Saint-Denis",
	"845 Rue Sainte-Catherine Est",
	"1415 Rue Saint-Hubert",
	"888 Boulevard de Maisonneuve Est",
	"572 Rue Sainte-Catherine Est",
	"1500 Rue Berri",
	"",
	"",
	"1205 Rue Labelle",
	"505 Boulevard Ren&eacute;-L&eacute;vesque Est",
	"1254 Rue Saint-Denis",
	"255 Rue Ontario Est",
	"127 Boulevard de Maisonneuve Est",
	"430 Rue Sainte-Catherine Est",
	"150 Rue Ontario Est",
	"335 Boulevard de Maisonneuve Est",
	"301 Boulevard de Maisonneuve Est",
	"300 Boulevard de Maisonneuve Est",
	"1440 Rue Sanguinet",
	"",
	"1564 Rue Saint-Denis",
	"1595 Rue Saint-Denis",
	"819 Boulevard de Maisonneuve Est",
	"1606 Rue Saint-Hubert",
	"1600 Rue Saint-Hubert",
	"800 Boulevard de Maisonneuve Est",
	"1440 Rue Saint-Denis",
	"",
	"400 Rue Sainte-Catherine Est",
	"455 Boulevard Ren&eacute;-L&eacute;vesque Est",
	"1205 Rue Saint-Denis",
	"315 Rue Sainte-Catherine Est",
	"1199 Rue Berri",
	"1212 Rue Sanguinet",
	"1700 Rue Saint-Denis",
	"175 Rue Ontario Est",
	"305 Rue Ontario Est",
	"1455 Rue Saint-Denis",
	"400 Rue Sainte-Catherine Est",
	"320 Rue Sainte-Catherine Est",
	"1290 Rue Saint-Denis",
	"400 Rue Sainte-Catherine Est" ];
	
	hsites = [ "http://www.uqam.ca/", 
	"http://www.banq.qc.ca/accueil/", 
	"http://www.gamtl.com/fr/bienvenue/default.aspx",
	"https://theatrestdenis.com/fr/",
	"https://busac.com/project/place-dupuis-montreal-qc/", 
	"https://www.choicehotels.com/fr-ca/quebec/montreal/ascend-hotels/cnb60?mc=llyxcncnnbl&pmf=canada",
	"http://wbgamesmontreal.com/fr",
	"http://www.dagiovanni.ca/",
	"https://www.quartierdesspectacles.com/fr/lieu/29/place-emilie-gamelin/", 
	"https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/le-village-montreal",
	"http://www.quartierlatin.ca/fr",
	"https://www.hotellabelle.com/", 
	"https://www.leroberval.com/", 
	"https://www.hotel-st-denis.com/",
	"http://www.cvm.qc.ca/Pages/index.aspx",
	"https://montreal.ca/lieux/parc-toussaint-louverture",
	"https://cndlm.org/",
	"http://www.chjm.ca/fr/",
	"https://www.cinematheque.qc.ca/fr",
	"https://www.inis.qc.ca/",
	"http://www.centrepierrepeladeau.uqam.ca/",
	"https://design.uqam.ca/",
	"https://montreal.ca/lieux/parc-saint-jacques",
	"http://carte.uqam.ca/pavillon-je",
	"http://lerelaislyonnais.com/fr/",
	"https://www.aubergelepomerol.com/",
	"#",
	"https://lelux-hotel-montreal.at-hotels.com/fr/",
	"https://montreal.ca/lieux/mairie-darrondissement-de-ville-marie",
	"https://musique.uqam.ca/",
	"https://montreal.ca/lieux/place-pasteur",
	"https://carte.uqam.ca/pavillon-a",
	"https://carte.uqam.ca/pavillon-w",
	"https://carte.uqam.ca/pavillon-n",
	"https://carte.uqam.ca/pavillon-r",
	"https://www.marriott.fr/hotels/travel/yulfd-fairfield-montreal-downtown",
	"https://carte.uqam.ca/pavillon-cs",
	"https://banq-saint-sulpice.business.site/",
	"https://www.boxotel.com/fr/",
	"http://www.montrealbedandbreakfast.ca/index.html",
	"#",
	"https://bibliotheques.uqam.ca/bibliotheque/centrale/",
	"https://carte.uqam.ca/pavillon-ds",
	"https://carte.uqam.ca/pavillon-ab",
	"https://fspd.uqam.ca/" ];
	
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
	
	/*document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + "A&eacute;roport Montr&eacute;al-Trudeau et la station <a href=\"lionel-groulx.html\">Lionel-Groulx</a><br/> via l&#39;autobus navette 747" +
	"</td><td>" + "A&eacute;roport<br/>Station" + "</td><td>" + "975 Boulevard Rom&eacute;o-Vachon Nord<br/>620 Avenue Atwater" + "</td><td>" + "<a href=\"https://www.admtl.com/fr\">Site Web</a><br/><a href=\"http://www.stm.info/fr/infos/reseaux/metro/lionel-groulx\">Site Web</a></td></tr></li>";*/

}

window.onload = init;
var hnames, htypes, haddresses, hsites;
