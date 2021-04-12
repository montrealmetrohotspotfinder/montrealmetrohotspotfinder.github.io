function init(){
	//SET VALUES
	//TRANSFERS
	BerriUqamnames = [ "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al",
	"Grande Biblioth&egrave;que de Montr&eacute;al",
	"Gare d&#39;Autocars de Montr&eacute;al",
	"Th&eacute;&acirc;tre Saint-Denis",
	"Place Dupuis",
	"H&ocirc;tel Place Dupuis Montr&eacute;al",
	"Warner Brothers Montr&eacute;al",
	"DaGiovanni",
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
	"&Eacute;cole de Design de l&#39;UQAM" ];
	
	BerriUqamtypes = [ "Universit&eacute;", "Biblioth&egrave;que", "Terminus d&#39;Autobus", "Th&eacute;&acirc;tre", "Centre Commercial", "H&ocirc;tel", "Bureau", "Restaurant", "Parc", "District", "District", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Coll&egrave;ge", "Parc", "&Eacute;glise", "R&eacute;sidence", "Mus&eacute;e", "&Eacute;cole", "Th&eacute;&acirc;tre",
	"Universit&eacute;" ];
	
	BerriUqamaddresses = [ "405 Rue Sainte-Catherine Est",
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
	"1440 Rue Sanguinet" ];
	
	BerriUqamsites = [ "http://www.uqam.ca/", 
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
	"https://design.uqam.ca/" ];
	
	JeanTalonnames = [ "Tour Jean-Talon", "March&eacute; Jean-Talon", "Plaza Saint-Hubert", "R&eacute;sidence Alfredo-Gagliardi", "Casa D&#39;Italia", "&Eacute;glise Orthodoxe Antiochienne Saint-Georges" ];
	
	JeanTalontypes = [ "Bureau", "March&eacute;", "Magasinage", "R&eacute;sidence", "Centre Culturel", "&Eacute;glise" ];
	
	JeanTalonaddresses = [ "600 Rue Jean-Talon Est", "7070 Avenue Henri-Julien", "6841 Rue Saint-Hubert", "7170 Rue Berri", "505 Rue Jean-Talon Est", "575 Rue Jean-Talon Est" ];
	
	JeanTalonsites = [ "https://montrealsouterrain.ca/tour/tour-jean-talon/", "https://www.marchespublics-mtl.com/marches/jean-talon/", "https://www.plazasthubert.com/fr/", "https://www.residencesenharmonie.qc.ca/residences/residence-alfredo-gagliardi", "https://www.casaditalia.org/t-fr-ca",
	"https://saintgeorgemontreal.org/" ];
	
	LionelGroulxnames = [ "March&eacute; Atwater", "Parc Vinet", "Th&eacute;&acirc;tre Corona" ];
	
	LionelGroulxtypes = [ "March&eacute;", "Parc", "Th&eacute;&acirc;tre" ];
	
	LionelGroulxaddresses = [ "138 Avenue Atwater", "550 Rue Vinet", "2490 Rue Notre-Dame Ouest" ];
	
	LionelGroulxsites = [ "https://www.marchespublics-mtl.com/marches/atwater/", "https://montreal.ca/lieux/parc-vinet", "https://www.theatrecorona.ca/" ];
	
	Snowdonnames = [ "Oratoire Saint-Joseph", "Mairie de C&ocirc;te-des-Neiges / N.D.G.", "&Eacute;cole Iona", "Deli Snowdon" ];
	
	Snowdontypes = [ "&Eacute;glise", "Gouvernement", "&Eacute;cole", "Restaurant" ];
	
	Snowdonaddresses = [ "3800 Chemin Queen-Mary", "5160 Boulevard D&eacute;carie", "5000 Avenue Iona", "5265 Boulevard D&eacute;carie" ];
	
	Snowdonsites = [ "https://www.saint-joseph.org/fr" , "https://montreal.ca/cote-des-neiges-notre-dame-de-grace", "https://iona.cssdm.gouv.qc.ca/", "http://www.snowdondeli.com/" ];
	
	//YELLOW LINE
	JeanDrapeaunames = [ "La Ronde", 
	"Parc Jean-Drapeau", 
	"Casino de Montr&eacute;al", 
	"Circuit Gilles-Villeneuve", 
	"Biosph&egrave;re",
	"Plage Jean-Dor&eacute;",
	"&Icirc;le Notre-Dame" ];
	
	JeanDrapeautypes = [ "Parc d&#39;Attractions", "&Icirc;le", "Casino", "Sports", "Mus&eacute;e", "Plage", "&Icirc;le" ];
	
	JeanDrapeauaddresses = [ "22 Chemin Macdonald", 
	"1 Circuit Gilles-Villeneuve", 
	"1 Avenue du Casino", 
	"Parc Jean-Drapeau", 
	"160 Chemin du Tour de l&#39;Isle",
	"151 Circuit Gilles-Villeneuve",
	"" ];
	
	JeanDrapeausites = [ "https://www.laronde.com/fr/larondefr", 
	"http://www.parcjeandrapeau.com/", 
	"http://casinos.lotoquebec.com/fr/montreal/accueil", 
	"https://www.parcjeandrapeau.com/fr/circuit-gilles-villeneuve-montreal/",
	"http://www.canada.ca/la-biosphere", 
	"http://www.parcjeandrapeau.com/fr/plage-jean-dore-sable-baignade-soleil-montreal/",
	"#" ];
	
	Longueuilnames = [ "Terminus Longueuil", 
	"Universit&eacute; de Sherbrooke, campus Longueuil", 
	"Universit&eacute; de Montr&eacute;al, campus Longueuil", 
	"H&ocirc;tel Sandman Longueuil",
	"H&ocirc;tel Le Dauphin Montr&eacute;al-Longueuil",
	"Place Longueuil",
	"A&eacute;roport de Saint-Hubert",
	"Coll&egrave;ge CDI, campus Longueuil", 
	"Commission de Protection du Territoire Agricole du Qu&eacute;bec", 
	"Axc&egrave;s Saint-Charles",
	"L&#39;Estuaire III",
	"Le D&#39;Assigny",
	"Revenu Qu&eacute;bec, bureaux longueuillois" ];
	
	Longueuiltypes = [ "Terminus d&#39;Autobus", "Universit&eacute;", "Universit&eacute;", "H&ocirc;tel", "H&ocirc;tel", "Centre Commercial", "A&eacute;roport", "Coll&egrave;ge", "Agence", "R&eacute;sidence", "R&eacute;sidence", "R&eacute;sidence", "Agence" ];
	
	Longueuiladdresses = [ "120 Place Charles-Lemoyne", 
	"150 Place Charles-Lemoyne", 
	"101 Place Charles-Lemoyne", 
	"999 Rue de S&eacute;rigny",
	"1055 Rue Saint-Laurent Ouest",
	"825 Rue Saint-Laurent Ouest",
	"5700 Route de l&#39;A&eacute;roport",
	"1111 Rue Saint-Charles Ouest",
	"25 Boulevard La Fayette",
	"1155 Rue Saint-Charles Ouest",
	"70 Rue de la Barre",
	"110 Rue de la Barre",
	"825 Rue Saint-Laurent Ouest" ];
	
	Longueuilsites = [ "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-longueuil", 
	"http://www.usherbrooke.ca/longueuil/", 
	"https://www.umontreal.ca/nos-campus/longueuil/", 
	"https://www.sandmanhotels.com/fr/locations/quebec/montreal-longueuil/hotels/montreal-longueuil-mol",
	"https://www.hotelsdauphin.ca/hotels/montreal-longueuil/",
	"https://www.placelongueuil.com/", 
	"http://www.dashl.ca/",
	"https://www.collegecdi.ca/quebec/campus/longueuil/",
	"http://www.cptaq.gouv.qc.ca/",
	"https://habitationstrigone.com/dwellings/axces-saint-charles/",
	"http://estuaire3.ca/",
	"https://groupemercille.com/fr/residentiel/3-12",
	"https://www.revenuquebec.ca/fr/" ];
	
	//BLUE LINE
	SaintMichelnames = [ "Petit Maghreb", "Parc Fran&ccedil;ois-Perrault", "Biblioth&egrave;que de Saint-Michel", "&Eacute;cole Secondaire John F. Kennedy", "Parc Sandro-Pertini", "&Eacute;cole Saint-Mathieu",
	"&Eacute;cole Joseph-Fran&ccedil;ois-Perrault", "Parc Shaughnessy", "Parc Joseph-Robin", "Parc Michel-Ange" ];
	
	SaintMicheltypes = [ "District", "Parc", "Biblioth&egrave;que", "&Eacute;cole", "Parc", "&Eacute;cole", "&Eacute;cole", "Parc", "Parc", "Parc" ];
	
	SaintMicheladdresses = [ "", "7525 Rue Fran&ccedil;ois-Perrault", "7601 Rue Fran&ccedil;ois-Perrault", "3030 Rue Villeray", "", "7230 8e Avenue", "7450 Rue Fran&ccedil;ois-Perrault", "7634 17e Avenue", "", "3615 Rue Michel-Ange" ];
	
	SaintMichelsites = [ "#", "https://montreal.ca/lieux/parc-francois-perrault", "https://montreal.ca/lieux/bibliotheque-de-saint-michel", "http://jfkhighschoolemsb.com/",
	"https://montreal.ca/en/places/parc-sandro-pertini", "https://st-mathieu.csdm.ca/", "https://joseph-francois-perrault.csdm.ca/", "https://montreal.ca/lieux/parc-shaughnessy", "https://montreal.ca/lieux/parc-joseph-robin", "#" ];
	
	Ibervillenames = [ "Les Denturologistes Saint-Louis", "P&acirc;tisserie La Conca D&#39;Oro", "Parc Gabriel-Sagard", "&Eacute;cole Saint-Barth&eacute;lemy", "&Eacute;glise Biblique Pierre Angulaire",
	"Parc Molson", "Paroisse Saint-Mathieu" ];
	
	Ibervilletypes = [ "Dentiste", "Magasinage", "Parc", "&Eacute;cole", "&Eacute;glise", "Parc", "&Eacute;glise" ];
	
	Ibervilleaddresses = [ "2523 Rue Jean-Talon Est", "2550 Rue Jean-Talon Est", "7069 Rue Sagard", "7081 Avenue des &Eacute;rables", "7137 Avenue des &Eacute;rables", "2473 Rue Beaubien Est",
	"2600 Rue Jean-Talon Est" ];
	
	Ibervillesites = [ "https://www.centresdentairesstlouis.com/", "https://alexiaianniciello1.wixsite.com/fvlaconcadoro", "https://montreal.ca/lieux/parc-gabriel-sagard", "https://st-barthelemy.csdm.ca/", "#",
	"https://montreal.ca/lieux/parc-molson", "https://www.diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-mathieu" ];
	
	Fabrenames = [ "&Eacute;glise Notre-Dame-de-la-Consolata", "H&ocirc;pital Jean-Talon", "Parc de Turin", "&Eacute;cole Saint-Gabriel-Lalemant", "&Eacute;cole Pierre Elliott Trudeau" ];
	
	Fabretypes = [ "&Eacute;glise", "H&ocirc;pital", "Parc", "&Eacute;cole", "&Eacute;cole" ];
	
	Fabreaddresses = [ "1700 Rue Jean-Talon Est", "1385 Rue Jean-Talon Est", "7205 Rue Chambord", "7350 Rue Garnier", "6855 Rue Cartier" ];
	
	Fabresites = [ "https://www.paroisseconsolatamtl.ca/", "https://www.ciusssnordmtl.ca/installations/hopitaux/hopital-jean-talon/", "https://montreal.ca/lieux/parc-de-turin", "https://st-gabriel-lalemant.csdm.ca/",
	"https://www.emsb.qc.ca/trudeau" ];
	
	DeCastelnaunames = [ "Petite Italie", "March&eacute; Jean-Talon", "Parc Jarry", "Stade IGA", "&Eacute;cole Sainte-C&eacute;cile", "&Eacute;glise Orthodoxe Saint-Nicolas d&#39;Antioche", "&Eacute;glise Sainte-C&eacute;cile",
	"Parc Victorien-Pesant" ];
	
	DeCastelnautypes = [ "District", "March&eacute;", "Parc", "Sports", "&Eacute;cole", "&Eacute;glise", "&Eacute;glise", "Parc" ];
	
	DeCastelnauaddresses = [ "", "7070 Avenue Henri-Julien", "285 Rue Gary-Carter", "285 Rue Gary-Carter", "7230 Avenue de Gasp&eacute;", "80 Rue de Castelnau Est", "7390 Avenue Henri-Julien",
	"7345 Avenue de Gasp&eacute;" ];
	
	DeCastelnausites = [ "https://www.mtl.org/fr/experience/bienvenue-petite-italie-montreal", "https://www.marchespublics-mtl.com/marches/jean-talon/", 
	"https://montreal.ca/lieux/parc-jarry", "http://stadeiga.com/", "https://ste-cecile.csdm.ca/", "http://stnicholasmtl.com/", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/sainte-cecile",
	"https://montreal.ca/lieux/parc-victorien-pesant" ];
	
	Parcnames = [ "&Eacute;cole de Sant&eacute; Publique de l&#39;Universit&eacute; de Montr&eacute;al", "Centre William-Hingston" ];
	
	Parctypes = [ "Universit&eacute;", "&Eacute;cole" ];
	
	Parcaddresses = [ "7101 Avenue du Parc", "419 Rue Saint-Roch" ];
	
	Parcsites = [ "https://espum.umontreal.ca/accueil/", "https://centre-william-hingston.csdm.ca/" ];
	
	Acadienames = [ "Altasciences", "March&eacute; Central", "Parc Hamilton" ];
	
	Acadietypes = [ "Pharmacie", "Centre Commercial", "Parc" ];
	
	Acadieaddresses = [ "1100 Avenue Beaumont", "9187 Boulevard de l&#39;Acadie", "" ];
	
	Acadiesites = [ "https://www.altasciences.ca/", "https://www.marchecentral.com/", "#" ];
	
	Outremontnames = [ "Th&eacute;&acirc;tre Outremont", "Parc Pratt", "Parc Raoul-Dandurand", "Parc John-F.-Kennedy", "Coll&egrave;ge Stanislas", "Ar&eacute;na d&#39;Outremont",
	"&Eacute;cole Internationale Guy-Drummond", "&Eacute;cole Primaire Lajoie" ];
	
	Outremonttypes = [ "Th&eacute;&acirc;tre", "Parc", "Parc", "Parc", "&Eacute;cole", "Sports", "&Eacute;cole", "&Eacute;cole" ];
	
	Outremontaddresses = [ "1248 Avenue Bernard Ouest", "795 Avenue Dunlop", "", "", "780 Boulevard Dollard", "999 Avenue McEachran", "1475 Avenue Lajoie", "1276 Avenue Lajoie" ];
	
	Outremontsites = [ "http://www.theatreoutremont.ca/fr/accueil/", "https://montreal.ca/lieux/parc-pratt", 
	"https://montreal.ca/lieux/parc-raoul-dandurand", "https://montreal.ca/lieux/parc-john-f-kennedy", "http://www.stanislas.qc.ca/montreal/", "https://montreal.ca/lieux/arena-doutremont",
	"https://guydrummond.ecoleoutremont.com/", "https://lajoie.ecoleoutremont.com/" ];
	
	EdouardMontpetitnames = [ "CEPSUM", "&Eacute;cole de Musique Vincent-d&#39;Indy" ];
	
	EdouardMontpetittypes = [ "Sports", "Coll&egrave;ge" ];
	
	EdouardMontpetitaddresses = [ "2100 Boulevard &Eacute;douard-Montpetit", "628 Chemin de la C&ocirc;te-Sainte-Catherine" ];
	
	EdouardMontpetitsites = [ "https://www.cepsum.umontreal.ca/", "http://www.emvi.qc.ca/" ];
	
	UdeMnames = [ "Universit&eacute; de Montr&eacute;al", "Coll&egrave;ge Jean-de-Br&eacute;beuf", "CHU Sainte-Justine", "HEC Montr&eacute;al" ];
	
	UdeMtypes = [ "Universit&eacute;", "Coll&egrave;ge", "H&ocirc;pital", "&Eacute;cole" ];
	
	UdeMaddresses = [ "2900 Boulevard &Eacute;douard-Montpetit", "3200 Chemin de la C&ocirc;te-Sainte-Catherine", "3175 Chemin de la C&ocirc;te-Sainte-Catherine", "3000 Chemin de la C&ocirc;te-Sainte-Catherine" ];
	
	UdeMsites = [ "https://www.umontreal.ca/", "https://www.brebeuf.qc.ca/", "https://www.chusj.org/fr/accueil", "https://www.hec.ca/index.html" ];
	
	CoteDesNeigesnames = [ "Cimeti&egrave;re Notre-Dame-des-Neiges", "Oratoire Saint-Joseph", "H&ocirc;pital G&eacute;n&eacute;ral Juif", 
	"CHU Sainte-Justine", "Maison de la Culture C&ocirc;te-des-Neiges", "Centre Communautaire de Loisir de la C&ocirc;te-des-Neiges", "Parc Jean-Brillant",
	"&Eacute;cole de Th&eacute;ologie &Eacute;vang&eacute;lique du Qu&eacute;bec", "Centre Hospitalier de St. Mary" ];
	
	CoteDesNeigestypes = [ "Cimeti&egrave;re", "&Eacute;glise", "H&ocirc;pital", "H&ocirc;pital", "Th&eacute;&acirc;tre", "Centre Culturel", "Parc", "&Eacute;cole", "H&ocirc;pital" ];
	
	CoteDesNeigesaddresses = [ "4601 Chemin de la C&ocirc;te-des-Neiges", "3800 Chemin Queen-Mary", "3755 Chemin de la C&ocirc;te-Sainte-Catherine", "3175 Chemin de la C&ocirc;te-Sainte-Catherine",
	"5290 Chemin de la C&ocirc;te-des-Neiges", "5347 Chemin de la C&ocirc;te-des-Neiges", "5252 Avenue Decelles", "4824 Chemin de la C&ocirc;te-des-Neiges", "3830 Avenue Lacombe" ];
	
	CoteDesNeigessites = [ "https://www.cimetierenotredamedesneiges.ca/fr", "https://www.saint-joseph.org/fr", "https://www.hgj.ca/", 
	"https://www.chusj.org/fr/accueil", "http://ville.montreal.qc.ca/culture/maison-de-la-culture-de-cote-des-neiges", "https://celocdn.org/", 
	"https://montreal.ca/lieux/parc-jean-brillant-cote-des-neiges-notre-dame-de-grace", "https://www.eteq.ca/d8/", "http://www.smhc.qc.ca/fr/homepage" ];
	
	//GREEN LINE
	HonoreBeaugrandnames = [ "Village Champlain", "Place Versailles", "Terminus Honor&eacute;-Beaugrand", "Parc Li&eacute;bert", "&Eacute;cole Sainte-Louise-de-Marillac", "Parc Michel-Bourdon", "Manoir Claudette Barr&eacute;" ];
	
	HonoreBeaugrandtypes = [ "Magasinage", "Centre Commercial", "Terminus d&#39;Autobus", "Parc", "&Eacute;cole", "Parc", "R&eacute;sidence" ];
	
	HonoreBeaugrandaddresses = [ "7788 Rue Sherbrooke Est", "7275 Rue Sherbrooke Est", "4755 Rue Honor&eacute;-Beaugrand", "2848 Rue Li&eacute;bert", "8100 Rue de Marseille", "4507 Rue Joseph-A.-Rodier", "7979 Rue Sherbrooke Est" ];
	
	HonoreBeaugrandsites = [ "#", "https://www.placeversailles.com/fr", "https://exo.quebec/fr/planifier-trajet/station-honore-beaugrand", "https://montreal.ca/lieux/parc-liebert", "https://ste-louise-de-marillac.csdm.ca/", "https://montreal.ca/lieux/parc-michel-bourdon",
	"https://www.manoirclaudettebarre.ca/" ];
	
	Radissonnames = [ "Place Versailles", "Auberge Royal Versailles", "Mairie de Mercier&#8211;Hochelaga-Maisonneuve", "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise",
	"Terminus Radisson", "Galeries d&#39;Anjou", "Les Halles d&#39;Anjou", "Coll&egrave;ge d&#39;Anjou", "Parc du Vaisseau-d&#39;Or", "Parc Radisson",
	"C&eacute;gep Marie-Victorin", "Parc des Roseraies", "Les Terrasses Versailles" ];
	
	Radissontypes = [ "Centre Commercial", "H&ocirc;tel", "Gouvernement", "Cimeti&egrave;re", "Terminus d&#39;Autobus", "Centre Commercial", "Centre Commercial", "&Eacute;cole", "Parc", "Parc",
	"Coll&egrave;ge", "Parc", "R&eacute;sidence" ];
	
	Radissonaddresses = [ "7275 Rue Sherbrooke Est", "7200 Rue Sherbrooke Est", "6854 Rue Sherbrooke Est", "6893 Rue Sherbrooke Est", "7155 Rue Sherbrooke Est", 
	"7999 Boulevard des Galeries-d&#39;Anjou", "7500 Boulevard des Galeries-d&#39;Anjou", "11000 Rue Renaude-Lapointe", "3021 Rue du Trianon", "5321 Rue Radisson",
	"7000 Rue Marie-Victorin", "7070 Avenue de la Nantaise", "6923 Boulevard des Galeries-d&#39;Anjou" ];
	
	Radissonsites = [ "https://www.placeversailles.com/fr", "https://www.royalversailles.com", "https://montreal.ca/lieux/mairie-darrondissement-de-mercier-hochelaga-maisonneuve", "http://www.rsfa.ca/", 
	"https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-radisson", "https://www.cfshops.com/fr_CA/galeries-d-anjou.html", "https://www.hallesdanjou.com/fr/accueil.html", 
	"https://collegedanjou.qc.ca/", "https://montreal.ca/lieux/parc-du-vaisseau-dor", "https://montreal.ca/lieux/parc-radisson", "https://www.collegemv.qc.ca/", "https://montreal.ca/lieux/parc-des-roseraies",
	"https://www.residencesexcellence.com/residences/terrasses-versailles/accueil" ];
	
	Langeliernames = [ "Centre Domaine", "Salon de Quilles Centre Commercial Le Domaine", "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise", "Mairie de Mercier&#8211;Hochelaga-Maisonneuve",
	"Biblioth&egrave;que Langelier", "Carrefour Langelier", "Ar&eacute;na Saint-Donat", "Parc Saint-Donat", "Parc de Lotbini&egrave;re", "Parc Mignault",
	"Centre R&eacute;cr&eacute;atif et Communautaire Saint-Donat", "&Eacute;cole Saint-Donat", "&Eacute;glise Saint-Donat de Montr&eacute;al" ];
	
	Langeliertypes = [ "Centre Commercial", "Sports", "Cimeti&egrave;re", "Gouvernement", "Biblioth&egrave;que", "Centre Commercial", "Sports", "Parc", "Parc", "Parc", "Centre Culturel", "&Eacute;cole", "&Eacute;glise" ];
	
	Langelieraddresses = [ "3235 Avenue de Granby", "3275 Avenue de Granby", "6893 Rue Sherbrooke Est", "6854 Rue Sherbrooke Est", "6473 Rue Sherbrooke Est", "7373 Boulevard Langelier", 
	"6750 Rue de Marseille", "6800 Rue de Marseille", "1 Rue du Parc-de Lotbini&egrave;re", "", "6547 Rue de Marseille", "3155 Rue Desautels", "6805 Rue de Marseille" ];
	
	Langeliersites = [ "https://centredomaine.com/?language=fr", "https://www.quillesdomainemontreal.com/", "http://www.rsfa.ca/", "https://montreal.ca/lieux/mairie-darrondissement-de-mercier-hochelaga-maisonneuve", 
	"http://ville.montreal.qc.ca/culture/bibliotheque-langelier", "https://www.carrefourlangelier.com/fr/accueil.html", "https://montreal.ca/lieux/arena-saint-donat",
	"https://montreal.ca/lieux/parc-saint-donat", "https://montreal.ca/lieux/parc-de-lotbiniere", "https://montreal.ca/lieux/parc-mignault", "https://crcstdonat.org/",
	"https://st-donat.cssdm.gouv.qc.ca/", "https://www.eglisesaintdonatdemontreal.com/" ];
	
	Cadillacnames = [ "Centre de Soins Prolong&eacute;s Grace Dart", "Plaza Antique", "H&ocirc;tel Chablis Cadillac", "Parc de l&#39;Ancienne-P&eacute;pini&egrave;re", "Parc Jean-Amyot",
	"&Eacute;cole Rosalie-Jett&eacute;", "&Eacute;cole Notre-Dame-des-Victoires", "Sanctuaire Marie-Reine-des-Coeurs", "Parc Bossuet" ];
	
	Cadillactypes = [ "R&eacute;sidence", "Salle de R&eacute;ception", "H&ocirc;tel", "Parc", "Parc", "&Eacute;cole", "&Eacute;cole", "&Eacute;glise", "Parc" ];
	
	Cadillacaddresses = [ "5155 Rue Sainte-Catherine Est", "6086 Rue Sherbrooke Est", "5800 Rue Sherbrooke Est", "5220 Rue du Quesne", "6110 Rue de Marseille", "5100 Rue Bossuet", "2720 Rue Bossuet",
	"5875 Rue Sherbrooke Est", "" ];
	
	Cadillacsites = [ "https://ciusss-ouestmtl.gouv.qc.ca/contact-localisation/centres-dhebergement-et-de-soins-de-longue-duree-chsld/centre-de-soins-prolonges-grace-dart/", 
	"https://plazapmg.com/plaza-antique/", "https://www.chabliscadillac.com/", "https://montreal.ca/lieux/parc-de-lancienne-pepiniere", "https://montreal.ca/lieux/parc-jean-amyot",
	"https://rosalie-jette.csdm.ca/", "https://notre-dame-des-victoires.csdm.ca/", "https://smrdc.org/", "https://montreal.ca/lieux/parc-bossuet" ];
	
	Assomptionnames = [ "Centre de Quilles Moderne", "Village Olympique", "H&ocirc;pital Maisonneuve-Rosemont", "Produits Scientific Games", 
	"&Eacute;cole des M&eacute;tiers de l&#39;A&eacute;rospatiale de Montr&eacute;al", "Elogia", "LUX Gouverneur Montr&eacute;al", "&Eacute;cole Marguerite-de-Lajemmerais",
	"&Eacute;glise MCI Canada" ];
	
	Assomptiontypes = [ "Sports", "District", "H&ocirc;pital", "Bureau", "&Eacute;cole de M&eacute;tiers", "R&eacute;sidence", "R&eacute;sidence", "&Eacute;cole", "&Eacute;glise" ];
	
	Assomptionaddresses = [ "3115 Boulevard de l&#39;Assomption", "5199 Rue Sherbrooke Est", "5415 Boulevard de l&#39;Assomption",
	"3000 Boulevard de l&#39;Assomption", "5300 Rue Chauveau", "5440 Rue Sherbrooke Est", "5500 Rue Sherbrooke Est", "5555 Rue Sherbrooke Est", "5685 Rue Chauveau" ];
	
	Assomptionsites = [ "https://www.quillesjgnc.com/centre-de-quilles-moderne/", "https://www.caprent.com/fr/appartements-a-louer/montreal-qc/village-olympic/", 
	"https://ciusss-estmtl.gouv.qc.ca/etablissement/hopital-maisonneuve-rosemont", "https://www.scientificgames.com/", "https://ecole-metiers-aerospatiale.cssdm.gouv.qc.ca/", 
	"https://www.legroupemaurice.com/residences-pour-personnes-agees/elogia/", "https://www.luxgouverneur.ca/residences/lux-montreal/", "https://marguerite-de-lajemmerais.cssdm.gouv.qc.ca/",
	"https://mcigc.ca/" ];
	
	Viaunames = [ "Stade Olympique", "Stade Saputo", "Biod&ocirc;me de Montr&eacute;al", "Jardin Botanique de Montr&eacute;al", 
	"Insectarium de Montr&eacute;al", "Ar&eacute;na Maurice-Richard", "Cineplex Starcit&eacute;", "Planetarium Rio Tinto Alcan", "H&ocirc;tel Universel Montr&eacute;al",
	"Centre Pierre-Charbonneau", "Habitations Pierre-de-Coubertin" ];
	
	Viautypes = [ "Sports", "Sports", "Mus&eacute;e", "Nature", "Nature", "Sports", "Cin&eacute;ma", "Mus&eacute;e", "H&ocirc;tel", "Fitness", "R&eacute;sidence" ];
	
	Viauaddresses = [ "4545 Avenue Pierre-de-Coubertin", "4750 Rue Sherbrooke Est", "4777 Avenue Pierre-de-Coubertin", "4101 Rue Sherbrooke Est", "4581 Rue Sherbrooke Est", "2800 Rue Viau", 
	"4825 Avenue Pierre-de-Coubertin", "4801 Avenue Pierre-de-Coubertin", "5000 Rue Sherbrooke Est", "3000 Rue Viau", "2600 Avenue Aird" ];
	
	Viausites = [ "https://parcolympique.qc.ca/", "https://www.impactmontreal.com/fr/stadium/stade-saputo", "https://espacepourlavie.ca/biodome", "https://espacepourlavie.ca/jardin-botanique",
	"https://m.espacepourlavie.ca/mobile/insectarium", "https://montreal.ca/lieux/arena-maurice-richard", "https://www.cineplex.com/Cinemas/theatredetails2017?theatre_url=cinema-starcite-montreal",
	"https://espacepourlavie.ca/le-planetarium-une-realisation-architecturale", "https://www.hoteluniverselmontreal.com/", "http://www.centrepierrecharbonneau.com/",
	"https://www.omhm.qc.ca/fr/services-aux-locataires/habitations-pierre-de-coubertin/" ];
	
	PieIXnames = [ "Stade Olympique", "Stade Saputo", "Biod&ocirc;me de Montr&eacute;al", "Jardin Botanique de Montr&eacute;al", 
	"Insectarium de Montr&eacute;al", "Ar&eacute;na Maurice-Richard", "Cineplex Starcit&eacute;", "Planetarium Rio Tinto Alcan", "H&ocirc;tel Universel Montr&eacute;al",
	"Centre Pierre-Charbonneau",
	"&Eacute;cole Eulalie-Durocher", "&Eacute;cole Saint-Jean-Baptiste-de-la-Salle", "Ch&acirc;teau Dufresne",
	"&Eacute;glise de Saint-Jean-Baptiste-De-La Salle", "&Eacute;cole Ir&eacute;n&eacute;e-Lussier",
	"Parc L&eacute;on-Provancher" ];
	
	PieIXtypes = [ "Sports", "Sports", "Mus&eacute;e", "Nature", "Nature", "Sports", "Cin&eacute;ma", "Mus&eacute;e", "H&ocirc;tel", "Fitness", "&Eacute;cole", "&Eacute;cole", "Mus&eacute;e",
	"&Eacute;glise", "&Eacute;cole", "Parc" ];
	
	PieIXaddresses = [ "4545 Avenue Pierre-de-Coubertin", "4750 Rue Sherbrooke Est", "4777 Avenue Pierre-de-Coubertin", "4101 Rue Sherbrooke Est", "4581 Rue Sherbrooke Est", "2800 Rue Viau", 
	"4825 Avenue Pierre-de-Coubertin", "4801 Avenue Pierre-de-Coubertin", "5000 Rue Sherbrooke Est", "3000 Rue Viau", "2455 Rue L&eacute;tourneux", "2355 Boulevard Pie-IX",
	"2929 Avenue Jeanne-d&#39;Arc", "2585 Boulevard Pie-IX", "4100 Rue Hochelaga", "5576 Boulevard Pie-IX" ];
	
	PieIXsites = [ "https://parcolympique.qc.ca/", "https://www.impactmontreal.com/fr/stadium/stade-saputo", "https://espacepourlavie.ca/biodome", "https://espacepourlavie.ca/jardin-botanique",
	"https://m.espacepourlavie.ca/mobile/insectarium", "https://montreal.ca/lieux/arena-maurice-richard", "https://www.cineplex.com/Cinemas/theatredetails2017?theatre_url=cinema-starcite-montreal",
	"https://espacepourlavie.ca/le-planetarium-une-realisation-architecturale", "https://www.hoteluniverselmontreal.com/", "http://www.centrepierrecharbonneau.com/", "https://eulalie-durocher.csdm.ca/", "https://st-jean-baptiste-de-la-salle.csdm.ca/",
	"https://chateaudufresne.com/", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-jean-baptiste-salle", "https://irenee-lussier.cssdm.gouv.qc.ca/",
	"https://montreal.ca/lieux/parc-leon-provancher" ];
	
	Joliettenames = [ "Coll&egrave;ge de Maisonneuve", "CLSC de Maisonneuve", "Parc Lalancette", "&Eacute;cole Saint-&Eacute;mile", "Parc Saint-&Eacute;mile", "&Eacute;cole Sainte-Jeanne-d&#39;Arc",
	"Parc Victor-Bourgeau", "Manoir Louisiane", "Paroisse Sainte-Jeanne-d&#39;Arc" ];
	
	Joliettetypes = [ "Coll&egrave;ge", "Agence", "Parc", "&Eacute;cole", "Parc", "&Eacute;cole", "Parc", "R&eacute;sidence", "&Eacute;glise" ];
	
	Jolietteaddresses = [ "3800 Rue Sherbrooke Est", "4201 Rue Ontario Est", "2315 Rue Nicolet", "3450 Rue Davidson", "", "3700 Rue Sherbrooke Est", "67 Place Victor-Bourgeau", "3600 Rue Sherbrooke Est", "2295 Rue de Chambly" ];
	
	Joliettesites = [ "https://www.cmaisonneuve.qc.ca/", "https://ciusss-estmtl.gouv.qc.ca/etablissement/clsc-de-hochelaga-maisonneuve", "https://montreal.ca/lieux/parc-lalancette",
	"https://st-emile.csdm.ca/", "https://montreal.ca/lieux/parc-saint-emile", "https://ste-jeanne-darc.cssdm.gouv.qc.ca/", "https://montreal.ca/lieux/parc-victor-bourgeau", "https://manoir-louisiane.business.site/",
	"https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/sainte-jeanne-darc" ];
	
	Prefontainenames = [ "Ar&eacute;na Francis-Bouillon", "Parc Raymond-Pr&eacute;fontaine", "Institut Teccart", "Coll&egrave;ge Ville-Marie", "L&#39;&Eacute;glise &agrave; Montr&eacute;al", "&Eacute;cole Notre-Dame-de-l&#39;Assomption" ];
	
	Prefontainetypes = [ "Sports", "Parc", "Coll&egrave;ge", "&Eacute;cole", "&Eacute;glise", "&Eacute;cole" ];
	
	Prefontaineaddresses = [ "3175 Rue de Rouen", "3100 Rue Hochelaga", "3030 Rue Hochelaga", "2850 Rue Sherbrooke Est", "3201 Rue Hochelaga", "2430 Rue Darling" ];
	
	Prefontainesites = [ "https://montreal.ca/lieux/arena-francis-bouillon", "https://montreal.ca/lieux/parc-raymond-prefontaine", "https://www.teccart.qc.ca/index.php", "https://www.cvmarie.qc.ca/",
	"http://egliseamontreal.ca/", "https://notre-dame-de-lassomption.cssdm.gouv.qc.ca/" ];
	
	Frontenacnames = [ "Place Frontenac", "Maison de la Culture et Biblioth&egrave;que Frontenac", "Bar Metro Pub", "Parc M&eacute;d&eacute;ric-Martin", "Centre Jean-Claude-Mal&eacute;part", "Parc Walter-Stewart", "Parc Jos-Montferrand", "Centre G&eacute;d&eacute;on-Ouimet",
	"Mosqu&eacute;e Tawuba", "&Eacute;cole Jean-Baptiste-Meilleur", "&Eacute;cole Pierre-Dupuy", "&Eacute;cole des M&eacute;tiers des Faubourgs-de-Montr&eacute;al", "Parc Baldwin",
	"&Eacute;cole Saint-Louis-de-Gonzague", "Parc Guido-Nincheri", "Centre d&#39;H&eacute;bergement Armand-Lavergne", "Centre d&#39;H&eacute;bergement Paul-Bruch&eacute;si", "&Eacute;glise Presbyt&eacute;rienne Sarang Montr&eacute;al", "&Eacute;nergir", "Place Joseph-Venne",
	"Parc Coupal", "Parc Magnan" ];
	
	Frontenactypes = [ "Centre Commercial", "Th&eacute;&acirc;tre", "Restaurant", "Parc", "Centre Culturel", "Parc", "Parc", "&Eacute;cole", "Mosqu&eacute;e", "&Eacute;cole", "&Eacute;cole", "&Eacute;cole de M&eacute;tiers", "Parc", "&Eacute;cole", "Parc", "R&eacute;sidence", "R&eacute;sidence", "&Eacute;glise", "Bureau", "Parc", "Parc", "Parc" ];
	
	Frontenacaddresses = [ "2600 Rue Ontario Est", "2550 Rue Ontario Est", "2553 Rue Ontario Est", "2329 Avenue Gascon", "2633 Rue Ontario Est", "2455 Rue Larivi&egrave;re", "2560 Boulevard de Maisonneuve Est", "1960 Rue Poupart",
	"2315 Rue Ontario Est", "2237 Rue Fullum", "2000 Rue Parthenais", "2000 Rue Parthenais", "4355 Rue Fullum", "2430 Terrasse Mercure", "", "3500 Rue Chapleau", "2225 Rue Rachel Est", "2315 Rue Rachel Est", "1717 Rue du Havre", "",
	"2340 Rue Coupal", "2337 Rue Magnan" ];
	
	Frontenacsites = [ "#", "https://frontenac.tuxedobillet.com/", "#", "https://montreal.ca/lieux/parc-mederic-martin", "https://cjcm.ca/", "https://montreal.ca/lieux/parc-walter-stewart", "https://montreal.ca/lieux/parc-jos-montferrand", "https://centre-gedeon-ouimet.csdm.ca/",
	"#", "https://jean-baptiste-meilleur.csdm.ca/", "https://pierre-dupuy.csdm.ca/", "https://ecole-metiers-faubourgs.csdm.ca/", "https://montreal.ca/lieux/parc-baldwin", "https://st-louis-de-gonzague.cssdm.gouv.qc.ca/", "https://montreal.ca/lieux/parc-guido-nincheri", "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-armand-lavergne", 
	"https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-paul-bruchesi", "http://www.sarangchurch.ca/", "https://www.energir.com/", "https://montreal.ca/lieux/place-joseph-venne", "https://montreal.ca/lieux/parc-coupal", "https://montreal.ca/lieux/parc-magnan" ];
	
	Papineaunames = [ "Le Village", "Conf&eacute;d&eacute;ration des Syndicats Nationaux", "Parc des Faubourgs", "Prison du Pied-du-Courant", "Parc des V&eacute;t&eacute;rans", "Place Emmett-Johns", "Appartements Urbains FARO",
	"&Eacute;ditions MD" ];
	
	Papineautypes = [ "District", "Agence", "Parc", "Mus&eacute;e", "Parc", "Parc", "R&eacute;sidence", "Bureau" ];
	
	Papineauaddresses = [ "", "1400 Boulevard Ren&eacute;-L&eacute;vesque Est", "1872 Rue Dorion", "903 Avenue de Lorimier", "1655 Avenue Papineau", "1449 Rue Dorion", "1825 Rue Sainte-Rose", "1815 Avenue de Lorimier" ];
	
	Papineausites = [ "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/le-village-montreal", "https://www.csn.qc.ca/", 
	"https://montreal.ca/lieux/parc-des-faubourgs", "http://museesmontreal.org/fr/musees/centre-d-exposition-la-prison-des-patriotes", "https://montreal.ca/lieux/parc-des-veterans",
	"https://montreal.ca/lieux/place-emmett-johns", "http://www.appartementsfaro.ca/", "https://editionsmd.com/" ];
	
	Beaudrynames = [ "Le Village", "Maison Radio-Canada", "Cabaret Mado", "L&#39;Olympia", "Parc de l&#39;Espoir", "Parc Serge-Garant", "Le National", "Le Pass&eacute; Compos&eacute;", "Parc Fran&ccedil;ois-Martineau", "Parc Hector-Charland",
	"Centre St-Pierre", "Parc des Joyeux-Vikings", "Parc Jean-Charbonneau", "Ar&eacute;na Camillien-Houde" ];
	
	Beaudrytypes = [ "District", "Bureau", "Restaurant", "Th&eacute;&acirc;tre", "Parc", "Parc", "Th&eacute;&acirc;tre", "Restaurant", "Parc", "Parc", "&Eacute;cole", "Parc", "Parc", "Sports" ];
	
	Beaudryaddresses = [ "", "1400 Boulevard Ren&eacute;-L&eacute;vesque Est", "1115 Rue Sainte-Catherine Est", "1004 Rue Sainte-Catherine Est", "1336 Rue Sainte-Catherine Est", "", "1220 Rue Sainte-Catherine Est", "1310 Boulevard de Maisonneuve Est",
	"", "1662 Rue de la Visitation", "1212 Rue Panet", "1763 Rue Beaudry", "", "1696 Rue Montcalm" ];
	
	Beaudrysites = [ "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/le-village-montreal", "http://archives.radio-canada.ca/societe/histoire/topics/1069-5953/", 
	"http://www.mado.qc.ca/", "https://www.olympiamontreal.com/", "https://montreal.ca/lieux/parc-de-lespoir", "https://www.lavitrine.com/place/Parc_Serge_Garant", "http://www.latulipe.ca/", "https://www.bistropassecompose.com/",
	"https://montreal.ca/lieux/parc-francois-martineau", "https://montreal.ca/lieux/parc-hector-charland", "https://www.centrestpierre.org/", "https://montreal.ca/lieux/parc-des-joyeux-vikings", "https://montreal.ca/lieux/parc-jean-charbonneau",
	"https://montreal.ca/lieux/arena-camillien-houde" ];
	
	SaintLaurentnames = [ "Mus&eacute;e Juste Pour Rire", "Club Soda", "Best Western Plus H&ocirc;tel Montr&eacute;al", "Monument-National", "Laurent & Clark", "Appartements Le Myriade", "MTelus", "Place de la Paix" ];
	
	SaintLaurenttypes = [ "Mus&eacute;e", "Th&eacute;&acirc;tre", "H&ocirc;tel", "Th&eacute;atre", "R&eacute;sidence", "R&eacute;sidence", "Th&eacute;&acirc;tre", "Parc" ];
	
	SaintLaurentaddresses = [ "2095 Boulevard Saint-Laurent", "1225 Boulevard Saint-Laurent", "161 Rue Sainte-Catherine Est", "1182 Boulevard Saint-Laurent", "1593 Rue Clark", "1445 Rue Clark",
	"59 Rue Sainte-Catherine Est", "" ];
	
	SaintLaurentsites = [ "http://www.hahaha.com/fr", "https://clubsoda.ca/", "https://www.bestwestern.com/fr_FR/book/hotel-rooms.67029.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67029", "https://ent-nts.ca/fr/monument-national",
	"http://laurent-clark.com/fr", "https://www.mondev.ca/fr/appartements-a-louer-montreal/ville-marie/myriade", "https://mtelus.com/fr", "http://peacepark.com/" ];
	
	PlaceDesArtsnames = [ "Place des Arts", 
	"Quartier des Spectacles / Place des Festivals", 
	"Mus&eacute;e d&#39;Art Contemporain", 
	"Complexe Desjardins", 
	"Revenu Qu&eacute;bec, bureaux montr&eacute;alais", 
	"H&ocirc;tel Hilton Doubletree", 
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon des Sciences Biologiques", 
	"Th&eacute;&acirc;tre du Nouveau Monde",
	"Complexe Guy-Favreau / Services Canada",
	"Monument-National",
	"H&ocirc;tel Z&eacute;ro1",
	"Hydro-Qu&eacute;bec",
	"H&ocirc;tel Travelodge Montr&eacute;al Centre",
	"Hilton Garden Inn Montr&eacute;al Centre-Ville",
	"Campus1 MTL",
	"L&#39;Appartement H&ocirc;tel", 
	"H&ocirc;tel Delta Montr&eacute;al par Marriott",
	"R&eacute;gie de l&#39;Assurance Maladie du Qu&eacute;bec",
	"Loto-Qu&eacute;bec",
	"Cin&eacute;ma Imp&eacute;rial",
	"Office National du Film du Canada",
	"Coll&egrave;ge CDI, campus Montr&eacute;al",
	"Registraire des Entreprises du Qu&eacute;bec",
	"F&eacute;d&eacute;ration des M&eacute;decins Sp&eacute;cialistes du Qu&eacute;bec", 
	"FDP Intelligence Financi&egrave;re",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Pr&eacute;sident-Kennedy",
	"&Eacute;glise St. John the Evangelist",
	"Office Qu&eacute;b&eacute;cois de la Langue Fran&ccedil;aise",
	"Biblioth&egrave;que des Sciences de l&#39;UQAM",
	"&Eacute;cole des Arts Num&eacute;riques, de l&#39;Animation et du Design",
	"&Eacute;cole de Danse Contemporaine de Montr&eacute;al",
	"Directeur de l&#39;&Eacute;tat Civil du Qu&eacute;bec",
	"Domtar",
	"Conseil des Arts et des Lettres du Qu&eacute;bec, bureaux montr&eacute;alais",
	"L&#39;Astral",
	"La Maison Symphonique",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon de Chimie & Biochimie",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Sherbrooke",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Adrien-Pinard",
	"Place du Cardinal P.-&Eacute;. L&eacute;ger" ];
	
	PlaceDesArtstypes = [ "Th&eacute;&acirc;tre", "District", "Mus&eacute;e", "Centre Commercial", "Agence", "H&ocirc;tel", "Universit&eacute;", "Th&eacute;&acirc;tre", "Gouvernement",
	"Theatre", "H&ocirc;tel", "Agence", "H&ocirc;tel", "H&ocirc;tel", "R&eacute;sidence", "H&ocirc;tel", "H&ocirc;tel", "Agence", "Agence", "Th&eacute;&acirc;tre", "Bureau",
	"Coll&egrave;ge", "Agence", "Agence", "Agence", "Universit&eacute;", "&Eacute;glise", "Agence", "Biblioth&egrave;que", "Universit&eacute;", "&Eacute;cole", "Agence",
	"Bureau", "Agence", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "Parc" ];
	
	PlaceDesArtsaddresses = [ "175 Rue Sainte-Catherine Ouest", "", "185 Rue Sainte-Catherine Ouest", "150 Rue Sainte-Catherine Ouest", "150 Rue Sainte-Catherine Ouest", "1255 Rue Jeanne-Mance",
	"141 Avenue du Pr&eacute;sident-Kennedy", "84 Rue Sainte-Catherine Ouest", "200 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1182 Boulevard Saint-Laurent", "1 Boulevard Ren&eacute;-L&eacute;vesque Est", 
	"75 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "50 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "380 Rue Sherbrooke Ouest", "420 Rue Sherbrooke Ouest", "455 Rue Sherbrooke Ouest", 
	"475 Avenue du Pr&eacute;sident-Kennedy", "425 Boulevard de Maisonneuve Ouest", "500 Rue Sherbrooke Ouest", "1432 Rue de Bleury", "1501 Rue de Bleury", "416 Boulevard de Maisonneuve Ouest",
	"2050 Rue de Bleury", "150 Rue Sainte-Catherine Ouest", "150 Rue Sainte-Catherine Ouest", "201 Avenue du Pr&eacute;sident-Kennedy", "137 Avenue du Pr&eacute;sident-Kennedy", "125 Rue Sherbrooke Ouest",
	"145 Avenue du Pr&eacute;sident-Kennedy", "1501 Rue de Bleury", "1435 Rue de Bleury", "2050 Rue de Bleury", "395 Boulevard de Maisonneuve Ouest", "1435 Rue de Bleury", "305 Rue Sainte-Catherine Ouest",
	"1600 Rue Saint-Urbain", "2101 Rue Jeanne-Mance", "200 Rue Sherbrooke Ouest", "100 Rue Sherbrooke Ouest", "" ];
	
	PlaceDesArtssites = [ "https://placedesarts.com/fr", 
	"https://www.quartierdesspectacles.com/fr/", 
	"https://macm.org/", 
	"https://www.complexedesjardins.com/fr",
	"https://www.revenuquebec.ca/fr", 
	"https://www.hiltonhotels.com/fr_FR/canada/doubletree-by-hilton-montreal/",
	"http://carte.uqam.ca/pavillon-sb",
	"https://tnm.qc.ca/",
	"http://complexeguyfavreau.com/fr",
	"https://ent-nts.ca/fr/monument-national",
	"https://www.zero1-mtl.com/fr/", 
	"https://www.hydroquebec.com/residentiel/", 
	"https://www.wyndhamhotels.com/fr-ca/travelodge/montreal-quebec/travelodge-hotel-by-wyndham-montreal-centre/overview",
	"https://www.hiltonhotels.com/fr_FR/canada/hilton-garden-inn-montreal-centre-ville/?cultureKey=fr_FR",
	"https://www.campus1mtl.ca/montreal-student-housing/fr",
	"http://www.appartementhotel.com/",
	"https://www.marriott.fr/hotels/travel/yuldb-delta-hotels-montreal",
	"https://www.ramq.gouv.qc.ca/fr",
	"https://portail.lotoquebec.com/fr/accueil",
	"https://www.cinemaimperial.com/?refreshXL=8141755",
	"https://www.onf.ca/",
	"https://www.collegecdi.ca/quebec/campus/montreal/",
	"http://www.registreentreprises.gouv.qc.ca/fr/default.aspx",
	"https://fmsq.org/fr",
	"https://www.fprofessionnels.com/",
	"https://sciences.uqam.ca/",
	"https://www.redroof.ca/",
	"http://www.oqlf.gouv.qc.ca/accueil.aspx",
	"https://bibliotheques.uqam.ca/bibliotheque/sciences/",
	"https://www.nad.ca/fr",
	"https://www.edcm.ca/",
	"http://www.etatcivil.gouv.qc.ca/fr/default.html",
	"https://www.domtar.com/fr",
	"https://www.calq.gouv.qc.ca/", 
	"https://www.sallelastral.com/",
	"https://placedesarts.com/fr/salle/maison-symphonique",
	"https://chimie.uqam.ca/",
	"https://carte.uqam.ca/pavillon-sh",
	"http://carte.uqam.ca/pavillon-su",
	"#" ];
	
	McGillnames = [ "Universit&eacute; McGill",
		"Centre Eaton de Montr&eacute;al",
		"Place Montr&eacute;al Trust",
		"Place Ville Marie",
		"H&ocirc;tel Fairmont Reine Elizabeth",
		"Mus&eacute;e Gr&eacute;vin",
		"Mus&eacute;e McCord",
		"Mus&eacute;e Redpath",
		"Square Phillips",	
		"Square Dorchester",
		"Cath&eacute;drale Marie Reine du Monde",
		"&Eacute;difice Sun Life",
		"(d&eacute;funt) H&ocirc;pital Royal Victoria",
		"Stade M&eacute;morial Percival-Molson",
		"Carrefour Industrielle Alliance",
		"Th&eacute;&acirc;tre Banque Scotia",
		"Google, bureaux montr&eacute;alais",
		"Promenades Cath&eacute;drale",
		"Cat&eacute;hdrale Christ Church",
		"La Baie d&#39;Hudson",
		"1501 McGill College",
		"2001 McGill College",
		"2020 Robert-Bourassa", 
		"Tour KPMG",
		"Maison Manuvie",
		"BNP Paribas",
		"Tour Banque Laurentienne",
		"H&ocirc;tel Renaissance Centre-Ville Montr&eacute;al",
		"Transports Qu&eacute;bec, bureaux montr&eacute;alais",
		"H&ocirc;tel Birks Montr&eacute;al",
		"Alliance pour la Sant&eacute; &Eacute;tudiante au Qu&eacute;bec",
		"Institut Trebas",
		"Portail Roddick",
		"AXA Assistance Canada",
		"2001 Robert-Bourassa",
		"Coll&egrave;ge des Technologies de l&#39;Information de Montr&eacute;al",
		"Soci&eacute;t&eacute; d&#39;Habitation du Qu&eacute;bec",
		"Groupement des Assureurs Automobiles",
		"TOM Condos",
		"Universit&eacute; McGill, Facult&eacute; de M&eacute;decine Dentaire",
		"Universit&eacute; McGill, &Eacute;cole d&#39;&Eacute;ducation Permanente",
		"Ordre des Ing&eacute;nieurs du Qu&eacute;bec" ];
	
	McGilltypes = [ "Universit&eacute;", "Centre Commercial", "Centre Commercial", "Centre Commercial", "H&ocirc;tel", "Mus&eacute;e", "Mus&eacute;e", "Mus&eacute;e", "Place de la Ville", "Place de la Ville", "&Eacute;glise", 
	"Bureau", "H&ocirc;pital", "Sports", "Centre Commercial", "Cin&eacute;ma", "Bureau", "Centre Commercial", "&Eacute;glise", "Magasinage", "Bureau", "Bureau", "Bureau", "Bureau", "Bureau", "Bureau", "Bureau", "H&ocirc;tel", "Agence", "H&ocirc;tel",
	"Agence", "&Eacute;cole", "Site Historique", "Bureau", "Bureau", "Coll&egrave;ge", "Agence", "Bureau", "R&eacute;sidence", "Universit&eacute;", "Universit&eacute;", "Agence" ];
	
	McGilladdresses = [ "845 Rue Sherbrooke Ouest", "705 Rue Sainte-Catherine Ouest", "1500 Avenue McGill College", "1 Place Ville Marie", "900 Boulevard Ren&eacute;-L&eacute;vesque Ouest",
	"705 Rue Sainte-Catherine Ouest", "690 Rue Sherbrooke Ouest", "859 Rue Sherbrooke Ouest", "", "2903 Rue Peel", "1085 Rue de la Cath&eacute;drale", "1155 Rue Metcalfe", 
	"687 Avenue des Pins Ouest", "475 Avenue des Pins Ouest", "977 Rue Sainte-Catherine Ouest", "977 Rue Sainte-Catherine Ouest", "1253 Avenue McGill College", 
	"625 Rue Sainte-Catherine Ouest", "635 Rue Sainte-Catherine Ouest", "585 Rue Sainte-Catherine Ouest", "1501 Avenue McGill College", "2001 Avenue McGill College", 
	"2020 Boulevard Robert-Bourassa", "600 Boulevard de Maisonneuve Ouest", "900 Boulevard de Maisonneuve Ouest", "2001 Boulevard Robert-Bourassa", "1981 Avenue McGill College",
	"1250 Boulevard Robert-Bourassa", "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1240 Square Phillips", "1200 Avenue McGill College", "550 Rue Sherbrooke Ouest", "15a Rue Sherbrooke Ouest",
	"2001 Boulevard Robert-Bourassa", "2001 Boulevard Robert-Bourassa", "1255 Boulevard Robert-Bourassa", "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1981 Avenue McGill College",
	"1188 Avenue Union", "2001 Avenue McGill College", "688 Rue Sherbrooke Ouest", "1801 Avenue McGill College" ];
	
	McGillsites = [ "https://www.mcgill.ca/fr", "https://www.centreeatondemontreal.com/fr", "https://www.placemontrealtrust.com/fr", "https://placevillemarie.com/fr/accueil", "https://www.fairmont.fr/queen-elizabeth-montreal/",
	"https://www.grevin-montreal.com/", "https://www.musee-mccord.qc.ca/fr", "https://www.mcgill.ca/redpath/fr", "https://montreal.ca/lieux/square-phillips", 
	"https://montreal.ca/lieux/square-dorchester", "http://www.cathedralecatholiquedemontreal.org/", "https://www.edificesunlife.ca/", 
	"https://ville.montreal.qc.ca/siteofficieldumontroyal/batiment-institutionnel/pavillon-r-pavillon-ross-memorial-hopital-royal-victoria", "http://www.mcgillathletics.ca/", 
	"http://www.carrefourindustriellealliance.com/", "https://www.cineplex.com/Cinemas/theatredetails2017?theatre_url=cinema-banque-scotia-montreal", "https://careers.google.com/locations/montreal/", 
	"https://promenadescathedrale.com/accueil-centre-commercial-centre-ville-montreal", "http://www.montrealcathedral.ca/fr", "https://www.labaie.com/", 
	"http://www.polarisrealty.com/fr/proprietes/montr%C3%A9al/6_1501-avenue-mcgill-college/_realestate_property", "#", "http://le2020.com/", "https://home.kpmg/ca/fr/home/about/offices/montreal-1.html",
	"http://www.maisonmanuvie.com/fr", "https://www.bnpparibas.ca/fr", "https://www.laurentianbank.ca/fr", "https://www.marriott.fr/hotels/travel/yulmd-renaissance-montreal-downtown-hotel",
	"https://www.transports.gouv.qc.ca/fr/Pages/default.aspx", "https://hotelbirksmontreal.com/?lang=fr", "http://www.aseq.ca/", "https://www.trebas.com/fr", "#", "https://www.axa-assistance.ca/fr/",
	"https://gwlraleasing.com/building.php?building=4209522867010994813&lang=fr_CA", "https://www.montrealcollege.ca/fr/", "http://www.habitation.gouv.qc.ca/", "https://gaa.qc.ca/", "https://tomcondos.com/fr/", "https://www.mcgill.ca/dentistry/fr",
	"https://www.mcgill.ca/continuingstudies/fr", "http://www.oiq.qc.ca/Pages/accueil.aspx" ];
	
	Peelnames = [ "Les Cours Mont-Royal",
		"Carrefour Industrielle Alliance",
		"Th&eacute;&acirc;tre Banque Scotia",
		"Tour Scotia",
		"Tour CIBC",
		"Universit&eacute; McGill",
		"Place Montr&eacute;al Trust",
		"Le Demetrius",
		"YMCA Centre-Ville",	
		"FireGrill Restaurant & Bar",
		"Deville Diner Bar",
		"Square Dorchester",
		"Centre Bell",
		"Mus&eacute;e des Beaux-Arts de Montr&eacute;al",
		"Holt Renfrew Ogilvy",
		"&Eacute;difice Sun Life",
		"H&ocirc;tel Omni Mont-Royal",
		"Le Centre Sheraton Montr&eacute;al",
		"Ritz-Carlton Montr&eacute;al", 
		"Le Germain H&ocirc;tel Montr&eacute;al", 
		"Le Mount Stephen", 
		"Vogue Hotel Montreal Downtown", 
		"Le St-Martin H&ocirc;tel Particulier", 
		"Sofitel Montr&eacute;al Le Carr&eacute; Dor&eacute;",
		"Chambre des Notaires du Qu&eacute;bec",
		"&Eacute;difice Dominion Square",
		"H&ocirc;tel Le Cantlie Suites",
		"Residence Inn by Marriott Montr&eacute;al Centre-Ville",
		"Best Western Ville-Marie Montreal Hotel & Suites",
		"Universit&eacute; McGill, Facult&eacute; de Gestion Desautels",
		"Universit&eacute; McGill, Biblioth&egrave;que McLennan",
		"Reuben&#39;s Deli & Steakhouse",
		"Canada Goose",
		"Chambre de Commerce et d&#39;Industrie Fran&ccedil;aise au Canada",
		"Le 1200 Ouest",
		"Procom, bureaux montr&eacute;alais",
		"Office de Consultation Publique de Montr&eacute;al",
		"Communaut&eacute; M&eacute;tropolitaine de Montr&eacute;al",
		"Montreal Gazette",
		"Reflector Entertainment",
		"McLean&#39;s Pub",
		"Peel Pub",
		"Four Seasons H&ocirc;tel et R&eacute;sidences Montr&eacute;al",
		"Best Western Plus Montr&eacute;al Centre-Ville H&ocirc;tel Europa",
		"Stanley Tower",
		"Le Sommet 3475",
		"Universit&eacute; McGill, Facult&eacute; de M&eacute;decine et des Sciences de la Sant&eacute;",
		"Universit&eacute; McGill, Facult&eacute; de Droit",
		"Universit&eacute; McGill, Facult&eacute; des Sciences de l&#39;&Eacute;ducation",
		"LUNA Appartements Urbains",
		"Royal Penfield",
		"Le Drummond" ];
	
	Peeltypes = [ "Centre Commercial", "Centre Commercial", "Cin&eacute;ma", "Bureau", "Bureau", "Universit&eacute;", 
	"Centre Commercial", "R&eacute;sidence", "Fitness", "Restaurant", "Restaurant", 
	"Place de la Ville", "Sports", "Mus&eacute;e", "Magasinage", "Bureau", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Agence", "Bureau",
	"H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Universit&eacute;", "Biblioth&egrave;que", "Restaurant", "Magasinage", "Bureau", "R&eacute;sidence", "Bureau", "Bureau", "Bureau", "Bureau", "Studio",
	"Restaurant", "Restaurant", "H&ocirc;tel", "H&ocirc;tel", "R&eacute;sidence", "R&eacute;sidence", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "R&eacute;sidence", "R&eacute;sidence", "R&eacute;sidence" ];
	
	Peeladdresses = [ "1455 Rue Peel", 
	"977 Rue Sainte-Catherine Ouest",
	"977 Rue Sainte-Catherine Ouest",
	"1002 Rue Sherbrooke Ouest", 
	"1155 Boulevard Ren&eacute;-L&eacute;vesque Ouest",
	"845 Rue Sherbrooke Ouest",
	"1500 Avenue McGill College",
	"1445 Rue Stanley",
	"1440 Rue Stanley",
	"1490 Rue Stanley",
	"1425 Rue Stanley",
	"2903 Rue Peel",
	"1909 Avenue des Canadiens-de-Montr&eacute;al",
	"1380 Rue Sherbrooke Ouest",
	"1307 Rue Sainte-Catherine Ouest",
	"1155 Rue Metcalfe",
	"1050 Rue Sherbrooke Ouest",
	"1201 Boulevard Ren&eacute;-L&eacute;vesque Ouest",
	"1228 Rue Sherbrooke Ouest", 
	"2050 Rue Mansfield", 
	"1440 Rue Drummond", 
	"1425 Rue de la Montagne", 
	"980 Boulevard de Maisonneuve Ouest", 
	"1155 Rue Sherbrooke Ouest",
	"2045 Rue Stanley",
	"1010 Rue Sainte-Catherine Ouest",
	"1110 Rue Sherbrooke Ouest",
	"2045 Rue Peel",
	"3407 Rue Peel",
	"1001 Rue Sherbrooke Ouest",
	"3459 Rue McTavish",
	"1116 Rue Sainte-Catherine Ouest",
	"1020 Rue Sainte-Catherine Ouest",
	"1455 Rue Drummond",
	"1200 Boulevard de Maisonneuve Ouest",
	"2000 Rue Peel",
	"1550 Rue Metcalfe",
	"1002 Rue Sherbrooke Ouest",
	"2055 Rue Peel",
	"2200 Rue Stanley",
	"1210 Rue Peel",
	"1196 Rue Peel",
	"1440 Rue de la Montagne",
	"1240 Rue Drummond",
	"3470 Rue Stanley",
	"3475 Rue de la Montagne",
	"3605 Rue de la Montagne",
	"3644 Rue Peel",
	"3700 Rue McTavish",
	"1100 Avenue du Docteur-Penfield",
	"1230 Avenue du Docteur-Penfield",
	"1211 Rue Stanley" ];
	
	Peelsites = [ "https://lcmr.ca/fr/accueil/", "http://www.carrefourindustriellealliance.com/", "https://www.cineplex.com/Cinemas/theatredetails2017?theatre_url=cinema-banque-scotia-montreal", "#", "#", 
	"https://www.mcgill.ca/fr", "https://www.placemontrealtrust.com/fr", "https://www.gwlraresidential.com/apartments/qc/montreal/le-demetrius/index.aspx?_yTrackUser=OTQxNzA5NjYwIzE5MTk5NTcxODg%3d-DwVHUNDST0M%3d&_yTrackVisit=MTY5OTE0MzIwOSMyMDE4MTk4NTE2-%2fRw0D2%2biQPY%3d&_yTrackReqDT=08380320201210&lang=38", "https://www.ymcaquebec.org/fr/Trouver-un-Y/YMCA-Centre-ville", 
	"https://firegrill.com/french/", "http://devilledinerbar.com/fr", "https://montreal.ca/lieux/square-dorchester", 
	"https://www.centrebell.ca/fr", "https://www.mbam.qc.ca/fr", "https://www.holtrenfrew.com/fr/the-new-holt-renfrew-ogilvy", "https://www.edificesunlife.ca/", "https://www.omnihotels.com/fr-ca/hotels/montreal-mont-royal",
	"https://www.marriott.fr/hotels/travel/yulsi-le-centre-sheraton-montreal-hotel",
	"https://www.ritzcarlton.com/fr/hotels/canada/montreal", "https://www.germainhotels.com/fr/hotel-le-germain/montreal", "https://www.lemountstephen.com/fr/", "https://www.hiltonhotels.com/fr_FR/canada/vogue-hotel-montreal-downtown/?cultureKey=fr_FR", "https://lestmartinmontreal.com/fr/", "https://all.accor.com/hotel/3646/index.fr.shtml",
	"https://www.cnq.org/", "https://imtl.org/edifices/Dominion-Square-Building.php", "http://www.hotelcantlie.com/fr", "https://www.marriott.fr/hotels/travel/yulri-residence-inn-montreal-downtown", "https://www.bestwestern.com/fr_FR/book/hotel-rooms.67012.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67012",
	"http://virtualcampustour.mcgill.ca/fr/details/20/pavillon-bronfman", "https://www.mcgill.ca/library/", "http://reubensdeli.com/fr/", "https://www.canadagoose.com/ca/fr/montreal-store.html", "https://www.ccifcmtl.ca/", "http://downtowncondosmontreal.com/1200-de-maisonneuve/", "https://www.procomservices.com/fr-ca/", "https://ocpm.qc.ca/", "https://cmm.qc.ca/",
	"https://montrealgazette.com/", "https://www.reflectorentertainment.com/fr/", "https://mcleanspub.com/fr/", "#", "https://www.fourseasons.com/fr/montreal/?seo=google_local_mqu1_amer", "https://www.bestwestern.com/fr_FR/book/hotel-rooms.67013.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67013", "http://www.stanleytower.com/?lang=fr",
	"https://lesommet3475.com/fr/", "https://www.mcgill.ca/medhealthsci/fr", "https://www.mcgill.ca/law/fr", "https://www.mcgill.ca/education/fr", "http://www.appartementsluna.com/", "https://www.groupeaccueilres.ca/royal-penfield", "http://www.mcgillimmobilier.com/condos-drummond-au-centre-ville-de-montreal/" ];
	
	Guynames = [ "Universit&eacute; Concordia, campus Sir George Williams", 
	"&Eacute;cole de Gestion John-Molson", 
	"Coll&egrave;ge LaSalle", 
	"Mus&eacute;e des Beaux-Arts de Montr&eacute;al",  
	"Mille Carr&eacute; Dor&eacute;",
	"Faubourg Sainte-Catherine",
	"Kampai Garden",
	"H&ocirc;pital G&eacute;n&eacute;ral de Montr&eacute;al",
	"Le Chatel",
	"Muraille de Leonard Cohen",
	"L&#39;Institut de Recherche du Centre Universitaire de Sant&eacute; McGill",
	"Place du Fort",
	"Biblioth&egrave;que Webster",
	"Le 1444 Mackay",
	"Sir Winston Churchill Pub",
	"&Eacute;cole des M&eacute;tiers de la Restauration et du Tourisme de Montr&eacute;al",
	"Place Norman-Bethune",
	"Centre Canadien d&#39;Architecture",
	"Le 2250 Appartements",
	"Le M&eacute;ridien Versailles",
	"Ch&acirc;teau Versailles",
	"H&ocirc;tel Pierce",
	"H&ocirc;tel Espresso Montr&eacute;al Centre-Ville",
	"Coll&egrave;ge de Gestion, Technologie et Sant&eacute; Matrix",
	"1900 Lincoln",
	"Ch&acirc;teau Lincoln" ];
	
	Guytypes = [ "Universit&eacute;", "Universit&eacute;", "Coll&egrave;ge", "Mus&eacute;e", "District", "Centre Commercial", "Restaurant", "H&ocirc;pital", "R&eacute;sidence", "Site Historique", "Universit&eacute;", "R&eacute;sidence", "Biblioth&egrave;que", "R&eacute;sidence", "Restaurant", "&Eacute;cole de M&eacute;tiers", "Place de la Ville", "Mus&eacute;e", 
	"R&eacute;sidence", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Coll&egrave;ge", "R&eacute;sidence", "R&eacute;sidence" ];
	
	Guyaddresses = [ "1455 Boulevard de Maisonneuve Ouest", 
	"1450 Rue Guy", 
	"2000 Rue Sainte-Catherine Ouest", 
	"1380 Rue Sherbrooke Ouest", 
	"",
	"1616 Rue Sainte-Catherine Ouest",
	"1616 Rue Sainte-Catherine Ouest",
	"1650 Avenue Cedar",
	"1625 Boulevard de Maisonneuve Ouest",
	"1420 Rue Crescent",
	"2155 Rue Guy",
	"1411 Rue du Fort",
	"1455 Boulevard de Maisonneuve Ouest",
	"1444 Rue Mackay",
	"1455 Rue Crescent",
	"1822 Boulevard de Maisonneuve Ouest",
	"",
	"1920 Rue Baile",
	"2250 Rue Guy",
	"1808 Rue Sherbrooke Ouest",
	"1659 Rue Sherbrooke Ouest",
	"1650 Boulevard de Maisonneuve Ouest",
	"1005 Rue Guy",
	"1980 Rue Sherbrooke Ouest",
	"1900 Avenue Lincoln",
	"1950 Avenue Lincoln" ];
	
	Guysites = [ "https://www.concordia.ca/fr.html", 
	"http://www.concordia.ca/jmsb.html", 
	"https://www.collegelasalle.com/", 
	"https://www.mbam.qc.ca/fr", 
	"https://www.mtl.org/fr/experience/golden-square-mile",
	"#",
	"https://www.kampaigarden.com/",
	"http://cusm.ca/",
	"https://lechatel.net/fr/",
	"https://mumtl.org/projects/tower-of-song-el-mac-gene-pendon-2017/",
	"https://rimuhc.ca/fr/",
	"https://placedufort.com/fr/",
	"https://library.concordia.ca/",
	"https://www.hazelviewproperties.com/fr/residential/le-1444-mackay",
	"https://www.swcpc.com/SirWinston/?lang=fr",
	"https://ecole-metiers-restauration-tourisme.cssdm.gouv.qc.ca/ecole/",
	"https://montreal.ca/lieux/place-norman-bethune",
	"https://www.cca.qc.ca/fr/",
	"https://www.caprent.com/fr/appartements-a-louer/montreal-qc/le-2250-guy/",
	"https://www.marriott.fr/hotels/travel/yulmv-le-m%C3%A9ridien-versailles",
	"https://fr.chateauversaillesmontreal.com/",
	"https://www.simplissimmo.ca/fr/categories/lhotel-pierce-signe-simplissimmo",
	"https://www.hotelespresso.ca/accueil",
	"http://www.matrixcollege.ca/fr/accueil?",
	"https://www.montrealapartmentdowntown.com/index.html",
	"https://www.chateau-lincoln.com/" ];
	
	Atwaternames = [ "C&eacute;gep Dawson", 
	"Place Alexis-Nihon", 
	"&Eacute;cole Secondaire Westmount", 
	"Westmount Square", 
	"Forum de Montr&eacute;al", 
	"Cin&eacute;ma Cineplex Forum", 
	"H&ocirc;pital de Montr&eacute;al pour Enfants", 
	"Square Cabot",
	"H&ocirc;tel La Tour Belv&eacute;d&egrave;re",
	"F&eacute;d&eacute;ration des M&eacute;decins Omnipraticiens du Qu&eacute;bec",
	"Plaza Tower",
	"Residence Inn by Marriott Montr&eacute;al Westmount",
	"Place Henri-Dunant",
	"Manoir Charles Dutaud",
	"Parc Hector-Toe-Blake",
	"Alexander Appartements",
	"1100 Atwater" ];
	
	Atwatertypes = [ "Coll&egrave;ge", "Centre Commercial", "&Eacute;cole", "Centre Commercial", "Divertissement", "Cin&eacute;ma", "H&ocirc;pital", "Place de la Ville", "H&ocirc;tel", "Agence", "R&eacute;sidence", "H&ocirc;tel", "Parc",
	"R&eacute;sidence", "Parc", "R&eacute;sidence", "Bureau" ];
	
	Atwateraddresses = [ "3040 Rue Sherbrooke Ouest", 
	"1500 Avenue Atwater", 
	"4350 Rue Sainte-Catherine Ouest", 
	"1 Carr&eacute; Westmount", 
	"2313 Rue Sainte-Catherine Ouest",
	"2313 Rue Sainte-Catherine Ouest",
	"1040 Avenue Atwater",
	"",
	"2175 Boulevard de Maisonneuve Ouest",
	"3500 Boulevard de Maisonneuve Ouest",
	"4000 Boulevard de Maisonneuve Ouest",
	"2170 Avenue Lincoln",
	"",
	"2165 Rue Tupper",
	"",
	"1180 Rue du Sussex",
	"1100 Avenue Atwater" ];
	
	Atwatersites = [ "http://www.dawsoncollege.qc.ca/", 
	"https://www.alexisnihon.com/fr", 
	"http://www.duxvitaeratio.ca/", 
	"#",
	"http://www.forum-montreal.com/", 
	"https://www.cineplex.com/Cinemas/theatredetails2017?theatre_url=cinema-cineplex-forum&utm_source=google&utm_medium=organic&utm_campaign=local&utm_content=CPXMontrealForum",
	"http://www.hopitalpourenfants.com/services-et-personnel/services/service-medecine-de-ladolescence-et-gynecologie-19",
	"https://montreal.ca/lieux/square-cabot",
	"https://www.tourbelvedere.com/fr",
	"https://www.fmoq.org/",
	"https://alexisnihon.com/fr/plaza-tower",
	"https://www.marriott.fr/hotels/travel/yulmr-residence-inn-montreal-westmount",
	"https://montreal.ca/lieux/place-henri-dunant",
	"https://residences-quebec.ca/fr/residence/manoir-charles-dutaud/560",
	"https://montreal.ca/lieux/parc-hector-toe-blake",
	"https://devimco.com/appartements/montreal/shaughnessy/alexander",
	"https://1100atwater.ca/" ];
	
	Charlevoixnames = [ "Maison Saint-Gabriel", "Parc du Canal de Lachine", "Parc Saint-Gabriel", "Parc d&#39;Argenson", "Parc Atwater / Saint-Charles", "Ar&eacute;na Saint-Charles" ];
	
	Charlevoixtypes = [ "Mus&eacute;", "Parc", "Parc", "Parc", "Parc", "Sports" ];
	
	Charlevoixaddresses = [ "2146 Place Dublin", "", "2355 Rue Mullins", "2900 Rue Centre", "2880 Rue Saint-Charles", "1055 Rue d&#39;Hibernia" ];
	
	Charlevoixsites = [ "https://www.maisonsaintgabriel.ca/", "https://www.pc.gc.ca/fr/lhn-nhs/qc/canallachine", "https://montreal.ca/lieux/parc-saint-gabriel", "https://montreal.ca/lieux/parc-dargenson",
	"https://montreal.ca/lieux/parc-atwater-saint-charles", "https://montreal.ca/lieux/arena-saint-charles" ];
	
	LaSallenames = [ "&Icirc;le-des-Soeurs", "Parc Poirier", "&Eacute;cole Notre-Dame-de-la-Paix", "R&eacute;sidence Priv&eacute;e Notre-Dame-de-la-Paix", "Centre de Formation Professionnelle de Verdun", "&Eacute;cole Secondaire Monseigneur-Richard",
	"Parc Sutherland-Sackville-Bain" ];
	
	LaSalletypes = [ "&Icirc;le", "Parc", "&Eacute;cole", "R&eacute;sidence", "&Eacute;cole de M&eacute;tiers", "&Eacute;cole", "Parc" ];
	
	LaSalleaddresses = [ "", "3177 Boulevard LaSalle", "454 Avenue Caisse", "3501 Rue &Eacute;thel", "3010 Boulevard Ga&eacute;tan-Laberge", "3000 Boulevard Ga&eacute;tan-Laberge",
	"11 Rue Rh&eacute;aume" ];
	
	LaSallesites = [ "#", "https://montreal.ca/lieux/parc-poirier-verdun", "https://nddlp.ecoleverdun.com/", "https://bonjourresidences.com/residence/montreal-residence-privee-notre-dame-de-la-paix/",
	"https://verdun.centrecsmb.com/", "https://monseigneur-richard.ecoleverdun.com/", "https://montreal.ca/lieux/parc-sutherland-sackville-bain" ];
	
	DeLEglisenames = [ "Promenade Wellington", "Auditorium de Verdun", "Plage de Verdun", "Parc Arthur-Therrien", "Stade Ronald-Pich&eacute;", "H&ocirc;pital de Verdun", "Parc J.-Albert-Gari&eacute;py",
	"&Eacute;glise Notre-Dame-des-Sept-Douleurs de Montr&eacute;al" ];
	
	DeLEglisetypes = [ "Magasinage", "Sports", "Plage", "Parc", "Sports", "H&ocirc;pital", "Parc", "&Eacute;glise" ];
	
	DeLEgliseaddresses = [ "266 Rue Hickson", "4110 Boulevard LaSalle", "4110 Boulevard LaSalle", "3750 Boulevard Ga&eacute;tan-Laberge", "3750 Boulevard Ga&eacute;tan-Laberge",
	"4000 Boulevard LaSalle", "10 All&eacute;e des Brises-du-Fleuve", "4155 Rue Wellington" ];
	
	DeLEglisesites = [ "http://www.promenadewellington.com/fr", 
	"https://montreal.ca/lieux/auditorium-de-verdun", 
	"https://montreal.ca/lieux/plage-urbaine-de-verdun",
	"https://montreal.ca/lieux/parc-arthur-therrien",
	"#",
	"https://www.ciusss-centresudmtl.gouv.qc.ca/etablissement/hopital-de-verdun",
	"https://montreal.ca/lieux/parc-j-albert-gariepy",
	"http://nddt.org/" ];
	
	Verdunnames = [ "Centre Communautaire Marcel-Giroux", "Mairie de Verdun", "Parc Willibrord", "&Eacute;cole L&eacute;vis-Sauv&eacute;", "&Eacute;cole Chanoine-Joseph-Th&eacute;or&ecirc;t",
	"Parc du Souvenir", "&Eacute;glise de Notre-Dame-de-Lourdes", "&Eacute;cole Notre-Dame-de-Lourdes", "Grace Church" ];
	
	Verduntypes = [ "Centre Culturel", "Gouvernement", "Parc", "&Eacute;cole", "&Eacute;cole", "Parc", "&Eacute;glise", "&Eacute;cole", "&Eacute;glise" ];
	
	Verdunaddresses = [ "4501 Avenue Bannantyne", "4555 Rue de Verdun", "1018 Rue Willibrord", "655 Rue Willibrord", "990 5e Avenue",
	"4525 Rue de Verdun", "4949 Rue de Verdun", "504 5e Avenue", "501 5e Avenue" ];
	
	Verdunsites = [ "https://montreal.ca/lieux/centre-communautaire-marcel-giroux", "https://montreal.ca/lieux/mairie-darrondissement-de-verdun", 
	"https://montreal.ca/lieux/parc-willibrord", "https://levissauve.ecoleverdun.com/", "https://cjt.ecoleverdun.com/", "https://montreal.ca/lieux/parc-du-souvenir",
	"https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/dame-lourdes", "https://ndl.ecoleverdun.com/", "http://www.gracechurchverdun.com/" ];
	
	Jolicoeurnames = [ "Parc de la V&eacute;rendrye" ];
	
	Jolicoeurtypes = [ "Parc" ];
	
	Jolicoeuraddresses = [ "5900 Rue Drake" ];
	
	Jolicoeursites = [ "https://montreal.ca/lieux/parc-de-la-verendrye" ];
	
	Monknames = [ "Institut Douglas", "Centre Hospitalier Ville-&Eacute;mard", "&Eacute;cole Honor&eacute;-Mercier", 
	"&Eacute;cole Dollard-des-Ormeaux", "&Eacute;cole Saint-Jean-de-Matha", "Parc Clifford", "Parc D&#39;Arcy-McGee", "Parc Cur&eacute;-Albert-Arnold",
	"Paroisse Saint-Jean-de-Matha" ];
	
	Monktypes = [ "H&ocirc;pital", "H&ocirc;pital", "&Eacute;cole", "&Eacute;cole", "&Eacute;cole", "Parc", "Parc", "Parc", "&Eacute;glise" ];
	
	Monkaddresses = [ "6875 Boulevard LaSalle", "6935 Rue Hamilton", "1935 Boulevard Desmarchais",
	"6639 Rue d&#39;Aragon", "6970 Rue Dumas", "1820 Avenue Clifford", "1500 Avenue Egan", "6855 Rue Hamilton", "2700 Rue Allard" ];
	
	Monksites = [ "http://www.douglas.qc.ca/", 
				"https://ciusss-centresudmtl.gouv.qc.ca/etablissement/clsc-de-ville-emard", 
				"https://honore-mercier.csdm.ca/", 
				"http://dollard-des-ormeaux.csdm.ca/", 
				"https://st-jean-de-matha.csdm.ca/", 
				"https://montreal.ca/lieux/parc-clifford", 
				"https://montreal.ca/lieux/parc-darcy-mcgee",
				"https://montreal.ca/lieux/parc-cure-albert-arnold",
				"https://www.diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-jean-matha" ];
				
	Angrignonnames = [ "Terminus Angrignon", "Carrefour Angrignon", "Parc Angrignon", 
	"Place Newman", "Les Tours Angrignon", "Les Tours Serenity", "C&eacute;gep Andr&eacute;-Laurendeau", "Habitations Angrignon I et II", "Le Conrad" ];
	
	Angrignontypes = [ "Terminus d&#39;Autobus", "Centre Commercial", "Parc", "Centre Commercial", "R&eacute;sidence", "R&eacute;sidence", "Coll&egrave;ge", "R&eacute;sidence", "R&eacute;sidence" ];
	
	Angrignonaddresses = [ "3500 Boulevard des Trinitaires", "7077 Boulevard Newman", "3400 Boulevard des Trinitaires",
	"2101 Avenue Dollard", "1500 Boulevard Angrignon", "1700 Boulevard Angrignon", "1111 Rue Lapierre", "3055 Boulevard des Trinitaires", "1601 Boulevard Angrignon" ];
	
	Angrignonsites = [ "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-angrignon", 
				"http://www.carrefourangrignon.com", 
				"https://montreal.ca/lieux/parc-angrignon", 
				"http://www.croftonmoore.com/details-propriete.php?pid=48", 
				"https://www.selectionretraite.com/fr/residence/lasalle/selection-retraite-tours-angrignon", 
				"https://serenitytowers.ca/", 
				"https://www.claurendeau.qc.ca/",
				"https://www.omhm.qc.ca/fr/services-aux-locataires/habitations-angrignon-i-et-ii/",
				"https://www.leconrad.com/" ];
	
	//ORANGE LINE
	Montmorencynames = [ "Place Bell", "Universit&eacute; de Montr&eacute;al, campus Laval", "Terminus Montmorency", 
	"Coll&egrave;ge Montmorency", "Centre Laval", "Carrefour Laval", "Salle Andr&eacute;-Mathieu", "Maison des Arts de Laval",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, campus Laval", "Coll&egrave;ge Letendre" ];
	
	Montmorencytypes = [ "Sports", "Universit&eacute;", "Terminus d&#39;Autobus", "Coll&egrave;ge", "Centre Commercial", "Centre Commercial", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre",
	"Universit&eacute;", "&Eacute;cole" ];
	
	Montmorencyaddresses = [ "1950 Rue Claude-Gagn&eacute;", "1700 Rue Jacques-T&eacute;treault", "555 Rue Lucien-Paiement",
	"475 Boulevard de l&#39;Avenir", "1600 Boulevard le Corbusier", "3003 Boulevard le Carrefour", "475 Boulevard de l&#39;Avenir", "1395 Boulevard de la Concorde Ouest",
	"475 Boulevard de l&#39;Avenir", "1000 Boulevard de l&#39;Avenir" ];
	
	Montmorencysites = [ "https://www.placebell.ca/fr", "https://www.umontreal.ca/nos-campus/laval/", 
				"https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-montmorency", 
				"https://www.cmontmorency.qc.ca/", "https://duolaval.com", 
				"https://www.cfshops.com/fr_CA/carrefour-laval.html", "https://www.co-motion.ca/nos-salles-de-spectacles/salle-andre-mathieu/#", 
				"https://www.laval.ca/maisondesarts/Pages/Fr/accueil.aspx", "https://etudier.uqam.ca/campus/laval",
				"https://www.collegeletendre.qc.ca/" ];
	
	DeLaConcordenames = [ "Maison des Arts de Laval", "Coll&egrave;ge Montmorency" ];
	
	DeLaConcordetypes = [ "Th&eacute;&acirc;tre", "Coll&egrave;ge" ];
	
	DeLaConcordeaddresses = [ "1395 Boulevard de la Concorde Ouest", "475 Boulevard de l&#39;Avenir" ];
	
	DeLaConcordesites = [ "https://www.laval.ca/maisondesarts/Pages/Fr/accueil.aspx", "https://www.cmontmorency.qc.ca/" ];
	
	Cartiernames = [ "Pont Viau", "Terminus Cartier", "Ar&eacute;na Cartier", "Parc Cartier", "Cour Municipale de la Ville de Laval", "Parc &Eacute;mile" ];
	
	Cartiertypes = [ "Pont", "Terminus d&#39;Autobus", "Sports", "Parc", "Tribunal", "Parc" ];
	
	Cartieraddresses = [ "", "5 Boulevard Cartier Ouest", "100 Mont&eacute;e Major", "45 Boulevard Cartier Ouest", "55 Boulevard des Laurentides", "55 Boulevard Cartier Ouest" ];
	
	Cartiersites = [ "#", "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-cartier", 
	"https://www.laval.ca/lieux/Pages/Fr/arena-cartier.aspx", "https://www.laval.ca/lieux/Pages/Fr/parc-cartier.aspx", "https://www.laval.ca/lieux/Pages/Fr/cour-municipale.aspx", "#" ];
	
	HenriBourassanames = [ "Pont Viau", "Terminus Henri-Bourassa", "Ar&eacute;na Ahuntsic", "Biblioth&egrave;que d&#39;Ahuntsic", "Parc Nature de l&#39;&Icirc;le de la Visitation",
	"Parc Ahuntsic", "Stade Gary-Carter", "Coll&egrave;ge de Bois-de-Boulogne", "Maison de la Culture Ahuntsic-Cartierville", "Bagel Henri-Bourassa", 
	"Centre Communautaire Ahuntsic", "Parc Jeanne-Sauv&eacute;", "Parc du Pont Ahuntsic" ];
	
	HenriBourassatypes = [ "Pont", "Terminus d&#39;Autobus", "Sports", "Biblioth&egrave;que", "Parc", "Parc", "Sports", "Coll&egrave;ge", "Th&eacute;&acirc;tre", "Restaurant", "Centre Culturel", "Parc", "Parc" ];
	
	HenriBourassaaddresses = [ "", "590 Boulevard Henri-Bourassa Est", "10560 Rue Saint-Hubert", "10300 Rue Lajeunesse", "11062 Avenue Wilfrid-Saint-Louis", "10555 Rue Lajeunesse", 
	"10555 Rue Lajeunesse", "10555 Avenue de Bois-de-Boulogne", "10300 Rue Lajeunesse", "443 Boulevard Henri-Bourassa Est", "10780 Rue Laverdure", "451 Boulevard Gouin Est", "" ];
	
	HenriBourassasites = [ "#", "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-henri-bourassa-nord", "https://montreal.ca/lieux/arena-ahuntsic", 
	"https://montreal.ca/lieux/bibliotheque-dahuntsic", "https://parcs-nature.com/public/ile-de-la-visitation", "https://montreal.ca/lieux/parc-ahuntsic", 
	"#", "https://www.bdeb.qc.ca/", "http://ville.montreal.qc.ca/culture/maison-de-la-culture-ahuntsic-cartierville", "#", "https://www.solidariteahuntsic.org/", 
	"https://montreal.ca/lieux/parc-jeanne-sauve", "#" ];
	
	Sauvenames = [ "Parc Henri-Julien", "Parc d&#39;Auteuil", "R&ecirc;vanous", "&Eacute;cole Christ-Roi", "&Eacute;cole Marie-Anne" ];
	
	Sauvetypes = [ "Parc", "Parc", "R&eacute;sidence", "&Eacute;cole", "&Eacute;cole" ];
	
	Sauveaddresses = [ "9300 Rue Saint-Denis", "350 Rue Sauv&eacute; Est", "9870 Rue Laverdure", "525 Rue de Louvain Est", "100 Rue Sauv&eacute; Est" ];
	
	Sauvesites = [ "https://montreal.ca/lieux/parc-henri-julien", "https://montreal.ca/lieux/parc-dauteuil", "https://www.revanous.org/", "https://christ-roi.csdm.ca/", "https://marie-anne.csdm.ca/" ];
	
	Cremazienames = [ "Fonds de Solidarit&eacute; FTQ", "Coll&egrave;ge Ahuntsic", "Coll&egrave;ge Andr&eacute;-Grasset", "Complexe Sportif Claude-Robillard", "CRIQ", "&Eacute;cole Saint-G&eacute;rard", "R&eacute;gie du B&acirc;timent du Qu&eacute;bec",
	"Parc Saint-Alphonse", "Ar&eacute;na Michel-Normandin", "Institut SA" ];
	
	Cremazietypes = [ "Agence", "Coll&egrave;ge", "Coll&egrave;ge", "Sports", "Agence", "&Eacute;cole", "Agence", "Parc", "Sports", "Coll&egrave;ge" ];
	
	Cremazieaddresses = [ "545 Boulevard Cr&eacute;mazie Est", "9155 Rue Saint-Hubert", "1001 Boulevard Cr&eacute;mazie Est", "1000 Avenue &Eacute;mile-Journault", "1201 Boulevard Cr&eacute;mazie Est", "505 Rue de Li&egrave;ge Est", "255 Boulevard Cr&eacute;mazie Est",
	"8888 Avenue de Chateaubriand", "850 Avenue &Eacute;mile-Journault", "690 Boulevard Cr&eacute;mazie Est" ];
	
	Cremaziesites = [ "https://www.fondsftq.com/fr-ca/accueil.aspx", "https://www.collegeahuntsic.qc.ca/", "https://www.grasset.qc.ca/", "https://montreal.ca/lieux/complexe-sportif-claude-robillard", "https://www.criq.qc.ca/fr/", "https://st-gerard.csdm.ca/", "https://www.rbq.gouv.qc.ca/",
	"https://montreal.ca/lieux/parc-saint-alphonse", "https://montreal.ca/lieux/arena-michel-normandin", "https://sainstitute.ca/fr/accueil/" ];
	
	Jarrynames = [ "Parc Jarry", "Stade IGA", "Parc Saint-Vincent-Ferrier", "Parc G&eacute;rard-Lalonde" ];
	
	Jarrytypes = [ "Parc", "Sports", "Parc", "Parc" ];
	
	Jarryaddresses = [ "285 Rue Gary-Carter", "285 Rue Gary-Carter", "8172 Rue Drolet", "375 Rue Jarry Est" ];
	
	Jarrysites = [ "https://montreal.ca/lieux/parc-jarry", "http://stadeiga.com/", "https://montreal.ca/lieux/parc-saint-vincent-ferrier", "#" ];
	
	Beaubiennames = [ "Plaza Saint-Hubert", "&Eacute;glise Notre-Dame-de-la-D&eacute;fense", "&Eacute;glise Saint-&Eacute;douard", "&Eacute;cole La Mennais", "Chambre de la Jeunesse" ];
	
	Beaubientypes = [ "Magasinage", "&Eacute;glise", "&Eacute;glise", "&Eacute;cole", "Tribunal" ];
	
	Beaubienaddresses = [ "6841 Rue Saint-Hubert", "6800 Avenue Henri-Julien", "6500 Rue de Saint-Vallier", "6521 Rue Saint-Denis", "410 Rue de Bellechasse" ];
	
	Beaubiensites = [ "https://www.plazasthubert.com/fr/", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/dame-defense-italiens", "#", "https://la-mennais.csdm.ca/",
	"https://www.justice.gouv.qc.ca/systeme-judiciaire/tribunaux-du-quebec/cour-du-quebec/chambre-de-la-jeunesse" ];
	
	Rosemontnames = [ "Biblioth&egrave;que Marc-Favreau", "Parc des Carri&egrave;res", "Parc Luc-Durand", "Habitations Saint-Vallier" ];
	
	Rosemonttypes = [ "Biblioth&egrave;que", "Parc", "Parc", "R&eacute;sidence" ];
	
	Rosemontaddresses = [ "500 Boulevard Rosemont", "", "600 Rue des Ateliers", "401 Rue des Carri&egrave;res" ];
	
	Rosemontsites = [ "https://montreal.ca/lieux/bibliotheque-marc-favreau", "https://montreal.ca/lieux/parc-des-carrieres", "https://montreal.ca/lieux/parc-luc-durand", "https://www.omhm.qc.ca/fr/repertoire-des-habitations/habitations-saint-vallier" ];
	
	Lauriernames = [ "Spectrum Productions", "Parc Sir-Wilfrid-Laurier", "&Eacute;cole Nationale de Th&eacute;&acirc;tre", "&Eacute;cole Sup&eacute;rieure de Ballet du Qu&eacute;bec",
	"&Eacute;glise Catholique Saint-Denis", "&Eacute;cole Laurier", "Centre Champagnat", "Parc Berri-Saint-Joseph" ];
	
	Lauriertypes = [ "Studio", "Parc", "&Eacute;cole", "&Eacute;cole", "&Eacute;glise", "&Eacute;cole", "&Eacute;cole", "Parc" ];
	
	Laurieraddresses = [ "5445 Avenue de Gasp&eacute;", "1115 Avenue Laurier Est", "5030 Rue Saint-Denis", "4816 Rue Rivard", "454 Avenue Laurier Est", "505 Avenue Laurier Est", 
		      "5017 Rue Saint-Hubert", "" ];
	
	Lauriersites = [ "https://www.productionsspectrum.com/home-fr", "https://montreal.ca/lieux/parc-sir-wilfrid-laurier", "https://ent-nts.ca/fr", "https://www.esbq.ca/fr", 
	"https://sites.google.com/view/eglisesaintdenismontreal/accueil", "https://laurier.cssdm.gouv.qc.ca/", "https://centre-champagnat.cssdm.gouv.qc.ca/", "https://montreal.ca/lieux/parc-berri-saint-joseph" ];
	
	MontRoyalnames = [ "Parc Mont-Royal", "L&#39;Avenue du Mont-Royal", "Th&eacute;&acirc;tre du Rideau Vert", "Biblioth&egrave;que du Plateau-Mont-Royal", "Sanctuaire du Saint-Sacrement", "Parc Albert-Saint-Martin" ];
	
	MontRoyaltypes = [ "Parc", "District", "Th&eacute;&acirc;tre", "Biblioth&egrave;que", "&Eacute;glise", "Parc" ];
	
	MontRoyaladdresses = [ "1260 Chemin Remembrance", "1012 Avenue du Mont-Royal Est", "4664 Rue Saint-Denis", "465 Avenue du Mont-Royal Est", "500 Avenue du Mont-Royal Est", "" ];
	
	MontRoyalsites = [ "https://montreal.ca/lieux/parc-du-mont-royal", "https://www.mont-royal.net/", "https://www.rideauvert.qc.ca/", "https://montreal.ca/lieux/bibliotheque-du-plateau-mont-royal",
	"http://www.fraternites-jerusalem.ca/", "https://montreal.ca/lieux/parc-albert-saint-martin" ];
	
	Sherbrookenames = [ "Institut de Tourisme et d&#39;H&ocirc;tellerie du Qu&eacute;bec", "H&ocirc;tel de l&#39;ITHQ", "Parc La Fontaine", "Square Saint-Louis", "Auberge du Carr&eacute; Saint-Louis", 
	"Th&eacute;&acirc;tre d&#39;Aujourd&#39;hui", "Th&eacute;&acirc;tre de Quat&#39;Sous", "Th&eacute;&acirc;tre La Chappelle", "Les R&eacute;sidences Soleil Manoir Plaza",
	"Gare d&#39;Autocars de Montr&eacute;al", "Quartier Latin", "Champlain College (Vermont), campus Montr&eacute;al", "Parc Jehane-Beno&icirc;t", "Parc J.-Z.-L&eacute;on-Patenaude", "C&eacute;gep du Vieux Montr&eacute;al" ];
	
	Sherbrooketypes = [ "Universit&eacute;", "H&ocirc;tel", "Parc", "Place de la Ville", "H&ocirc;tel", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre", "R&eacute;sidence", "Terminus d&#39;Autobus", "District", "Coll&egrave;ge", "Parc", "Parc", "Coll&egrave;ge" ];
	
	Sherbrookeaddresses = [ "3535 Rue Saint-Denis", "3535 Rue Saint-Denis", "3819 Avenue Calixa-Lavall&eacute;e", "", "3466 Rue Saint-Denis", "3900 Rue Saint-Denis", "100 Avenue des Pins Est", "3700 Rue Saint-Dominique",
	"505 Rue Sherbrooke Est", "1717 Rue Berri", "", "525 Rue Sherbrooke Est", "", "", "255 Rue Ontario Est" ];
	
	Sherbrookesites = [ "https://www.ithq.qc.ca/institut/", "http://www.ithq.qc.ca/hotel/", "https://montreal.ca/lieux/parc-la-fontaine", "https://montreal.ca/lieux/square-saint-louis", "https://aubergecarrestlouis.com/Accueil",
	"https://www.theatredaujourdhui.qc.ca/", "https://www.quatsous.com/", "https://lachapelle.org/fr", "https://residencessoleil.ca/liste-des-residences-soleil/manoir-plaza", "http://www.gamtl.com/fr/bienvenue/default.aspx", 
	"http://www.quartierlatin.ca/fr/", "https://montreal.champlain.edu/", "https://montreal.ca/lieux/parc-jehane-benoit", "https://montreal.ca/lieux/parc-j-z-leon-patenaude", "http://www.cvm.qc.ca/Pages/index.aspx" ];
	
	ChampDeMarsnames = [ "Vieux Montr&eacute;al", "Vieux Port de Montr&eacute;al", "CHUM Saint-Luc", "Quartier Chinois", "Place Vauquelin", "Champ de Mars", "H&ocirc;tel de Ville de Montr&eacute;al", "&Eacute;difice Lucien-Saulnier", "Ch&acirc;teau Ramezay",
	"March&eacute; Bonsecours", "Terrasses Bonsecours", "Chappelle Notre-Dame-de-Bon-Secours", "Place Jacques-Cartier", "Quai Jacques-Cartier", "Quai de l&#39;Horloge", "Bassin Bonsecours", 
	"H&ocirc;tel William Gray", "Maggie Oakes", "BEVO Bar + Pizzeria", "Vieux-Port Steakhouse", "Auberge Saint-Gabriel", "Jardin Nelson", "Rue Saint-Amable", "Place de la Dauversi&egrave;re",
	"Parc Fleury-Mesplet", "Le Solano", "Parc de la Chasse-Galerie" ];
	
	ChampDeMarstypes = [ "District", "Port", "H&ocirc;pital", "District", "Place de la Ville", "Site Historique", "Gouvernement", "Gouvernement", "Site Historique", "Magasinage", "Restaurant", "&Eacute;glise", "District", "Port", "Port", "Lac",
	"H&ocirc;tel", "Restaurant", "Restaurant", "Restaurant", "Restaurant", "Restaurant", "Site Historique", "Parc", "Parc", "R&eacute;sidence", "Parc" ];
	
	ChampDeMarsaddresses = [ "", "333 Rue de la Commune Ouest", "1051 Rue Sanguinet", "", "275 Rue Notre-Dame Est", "158 Rue Saint-Antoine Est", "275 Rue Notre-Dame Est", "155 Rue Notre-Dame Est", "280 Rue Notre-Dame Est",
	"350 Rue Saint-Paul Est", "364 Rue de la Commune Est", "400 Rue Saint-Paul Est", "", "", "", "", "421 Rue Saint-Vincent", "426 Place Jacques-Cartier", "410 Rue Saint-Vincent", "39 Rue Saint-Paul Est",
	"426 Rue Saint-Gabriel", "407 Place Jacques-Cartier", "", "", "", "901 Rue de la Commune Est", "" ];
	
	ChampDeMarssites = [ "https://vieuxmontreal.ca/", "https://www.vieuxportdemontreal.com/", "https://www.chumontreal.qc.ca/", "https://www.mtl.org/fr/experience/quartier-chinois-montreal", 
	"https://montreal.ca/lieux/place-vauquelin", "https://montreal.ca/lieux/le-champ-de-mars", "https://montreal.ca/lieux/hotel-de-ville", "https://montreal.ca/lieux/edifice-lucien-saulnier", "https://www.chateauramezay.qc.ca/fr/", 
	"https://www.marchebonsecours.qc.ca/fr/index.html", "https://terrassesbonsecours.com/fr/accueil/", "https://margueritebourgeoys.org/", "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-jacques-cartier-et-place-de-la-dauversiere", 
	"http://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=115163&type=bien#.X390DtVKiM8", "http://www.patrimoine-culturel.gouv.qc.ca/detail.do?methode=consulter&id=115167&type=bien#.X390UtVKiM8",
	"https://www.societeduvieuxport.com/activite/bassin-bonsecours", "https://hotelwilliamgray.com/fr", "https://maggieoakes.com", "https://bevopizza.com", "https://vieuxportsteakhouse.com",
	"http://aubergesaint-gabriel.com", "https://jardinnelson.com/", "https://vieuxmontreal.ca/publications/il-etait-une-fois-la-rue-saint-amable", "https://vieuxmontreal.ca/commerces/place-de-la-dauversiere", "https://montreal.ca/lieux/parc-fleury-mesplet",
	"https://www.lesolano.com/", "https://montreal.ca/lieux/parc-de-la-chasse-galerie" ];
	
	PlaceDArmesnames = [ "Vieux Montr&eacute;al", "Vieux Port de Montr&eacute;al", "Centre des Sciences de Montr&eacute;al", "Mus&eacute;e Pointe-&agrave;-Calli&egrave;re", "Douanes de Montr&eacute;al", "Place d&#39;Youville",
	"Gibby&#39;s", "SeaSalt Ceviche & Bar", "Quartier Chinois", "La Presse", "Mission Old Brewery", "Palais des Congr&egrave;s", "Palais de Justice de Montr&eacute;al", "Basilique Notre-Dame", 
	"Place d&#39;Armes", "BMO, si&egrave;ge social", "&Eacute;difice New York Life Insurance", "H&ocirc;tel Saint-Sulpice", "Complexe Guy-Favreau / Services Canada", "Complexe Desjardins", "H&ocirc;tel Place d&#39;Armes",
	"Terrasse Place d&#39;Armes", "Kyo Bar Japonais", "Holiday Inn Montr&eacute;al Centre-Ville Downtown", "H&ocirc;tel St-Paul", "H&ocirc;tel Uville", "Auberge de la Place Royale", "Embassy Suites by Hilton Montr&eacute;al",
	"Auberge du Vieux-Port", "Verses Bistro", "H&ocirc;tel Nelligan", "Terrasse Nelligan", "Taverne Gaspar", "Restaurant M&eacute;chant Boeuf", "Caisse de D&eacute;p&ocirc;t et Placement du Qu&eacute;bec", "Place Jean-Paul-Riopelle",
	"&Eacute;difice Jacques-Parizeau", "&Eacute;glise de la Mission-Catholique-Chinoise-du-Saint-Esprit", "H&ocirc;tel &Eacute;pik Montr&eacute;al", "Le Petit H&ocirc;tel", "Coll&egrave;ge Sup&eacute;rieur de Montr&eacute;al", "Ogilvy, bureaux montr&eacute;alais",
	"Vieux S&eacute;minaire de Saint-Sulpice", "500 Place d&#39;Armes", "Th&eacute;&acirc;tre Centaur", "H&ocirc;tel Bonaparte", "Centre de Commerce Mondial de Montr&eacute;al", "Place Sun-Yat-Sen", "H&ocirc;tel Monville", "SNC-Lavalin", "H&ocirc;tel Le Dauphin Montr&eacute;al Centre-Ville" ];
	
	PlaceDArmestypes = [ "District", "Port", "Mus&eacute;e", "Mus&eacute;e", "Mus&eacute;e", "Place de la Ville", "Restaurant", "Restaurant", "District", "Bureau", "Site Historique", "Centre de Convention", "Tribunal", "&Eacute;glise",
	"Site Historique", "Bureau", "Bureau", "H&ocirc;tel", "Gouvernement", "Centre Commercial", "H&ocirc;tel", "Restaurant", "Restaurant", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Restaurant", "H&ocirc;tel", "Restaurant", "Restaurant", "Restaurant",
	"Agence", "Place de la Ville", "Bureau", "&Eacute;glise", "H&ocirc;tel", "H&ocirc;tel", "Coll&egrave;ge", "Bureau", "Site Historique", "Bureau", "Th&eacute;&acirc;tre", "H&ocirc;tel", "Centre Commercial", "Parc", "H&ocirc;tel", "Bureau", "H&ocirc;tel" ];
	
	PlaceDArmesaddresses = [ "", "333 Rue de la Commune Ouest", "2 Rue de la Commune Ouest", "350 Place Royale", "150 Rue Saint-Paul Ouest", "", "298 Place d&#39;Youville", "351 Place Royale", "", "40 Rue Saint-Antoine Ouest", "915 Rue Clark",
	"1001 Place Jean-Paul-Riopelle", "1 Rue Notre-Dame Est", "110 Rue Notre-Dame Ouest", "", "119 Rue Saint-Jacques", "511 Place d&#39;Armes", "414 Rue Saint-Sulpice", "200 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "150 Rue Sainte-Catherine Ouest", 
	"55 Rue Saint-Jacques", "55 Rue Saint-Jacques", "711 C&ocirc;te de la Place d&#39;Armes", "999 Rue Saint-Urbain", "355 Rue McGill", "204 Place d&#39;Youville", "115 Rue de la Commune Ouest", "208 Rue Saint-Antoine Ouest", "97 Rue de la Commune Est", "100 Rue Saint-Paul Ouest", "106 Rue Saint-Paul Ouest", "106 Rue Saint-Paul Ouest", "89 Rue de la Commune Est", "124 Rue Saint-Paul Ouest",
	"1000 Place Jean-Paul-Riopelle", "1000 Place Jean-Paul-Riopelle", "1000 Place Jean-Paul-Riopelle", "979 Rue C&ocirc;t&eacute;", "171 Rue Saint-Paul Ouest", "168 Rue Saint-Paul Ouest", "205 Avenue Viger Ouest", "215 Rue Saint-Jacques", "116 Rue Notre-Dame Ouest", "500 Place d&#39;Armes", "453 Rue Saint-Fran&ccedil;ois-Xavier", "447 Rue Saint-Fran&ccedil;ois-Xavier", "747 Rue du Square-Victoria",
	"1055 Rue Clark", "1041 Rue de Bleury", "455 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1025 Rue de Bleury" ];
	
	PlaceDArmessites = [ "https://vieuxmontreal.ca/", "https://www.vieuxportdemontreal.com/", "https://www.centredessciencesdemontreal.com/", "https://pacmusee.qc.ca/fr/", "https://pacmusee.qc.ca/fr/histoires-de-montreal/article/l-ancienne-douane-joyau-de-l-architecture-dici/",
	"https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-d-youville", "https://www.gibbys.com/?lang=fr", "https://www.seasaltmontreal.ca/?lang=fr", "https://www.mtl.org/fr/experience/quartier-chinois-montreal", "https://www.lapresse.ca/", "https://www.missionoldbrewery.ca/fr/", 
	"https://congresmtl.com/", "https://www.justice.gouv.qc.ca/nous-joindre/trouver-un-palais-de-justice/palais-de-justice-de-montreal", "https://www.basiliquenotredame.ca/fr/", "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-d-armes", "https://branches.bmo.com/qc/montreal/b0001/?templatename=Location%20Landing%20Page%20FR", "http://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=100143&type=bien#.X4YeGNVKiM8", 
	"https://www.lesaintsulpice.com/fr", "http://complexeguyfavreau.com/fr", "https://www.complexedesjardins.com/fr", "https://hotelplacedarmes.com/fr", "http://terrasseplacedarmes.com/", "https://kyobar.com", "https://www.ihg.com/holidayinn/hotels/fr/fr/montreal/yulca/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-CA-_-YULCA",
	"https://hotelstpaul.com/fr/", "https://uvillehotelmontreal.com/fr/", "http://auberge-de-la-place-royale.to-montreal-hotels.com/fr/", "https://www.hiltonhotels.com/fr_FR/canada/embassy-suites-by-hilton-montreal/?cultureKey=fr_FR", "http://aubergeduvieuxport.com/fr/", "https://versesrestaurant.com/fr/", "https://hotelnelligan.com/fr", "http://terrassenelligan.com/accueil/", "https://tavernegaspar.com/", "https://mechantboeuf.com/",
	"https://www.cdpq.com/fr", "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-jean-paul-riopelle", "http://edificejacques-parizeau.com/", "https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=92746&type=bien",
	"http://www.epikmontreal.com/fr/", "https://petithotelmontreal.com/fr/accueil/", "https://www.collegecsm.com/", "https://www.ogilvy.com/ca/fre", "https://universcultureldesaintsulpice.ca/vs_fr.html", "#", "https://centaurtheatre.com/fr/", "http://bonaparte.com/", "https://www.alliedreit.com/fr/property/__trashed/", "https://montreal.ca/lieux/place-sun-yat-sen", "https://www.hotelmonville.com/", "https://www.snclavalin.com/fr-FR", "https://www.hotelsdauphin.ca/hotels/montreal/" ];
	
	SquareVictorianames = [ "Vieux Montr&eacute;al", "Vieux Port de Montr&eacute;al", "Square Victoria", "Quebecor Media", "Tour de la Bourse", "Tour Banque Nationale", "Tour Viger", "Place Jean-Paul-Riopelle", "Quartier International",
	"&Eacute;difice de l&#39;OACI", "Centre de Commerce Mondial de Montr&eacute;al", "H&ocirc;tel Le Saint-James", "Raymond Chabot Grant Thornton", "Somwhr Liquor Lounge", "Le Westin Montr&eacute;al", "W Montr&eacute;al",
	"L H&ocirc;tel Montr&eacute;al", "H&ocirc;tel Intercontinental Montr&eacute;al", "Cit&eacute; du Multim&eacute;dia", "Palais des Congr&egrave;s", "Place Bonaventure", "evo Montr&eacute;al", "Portus 360", "Embassy Suites by Hilton Montr&eacute;al",
	"Caisse de D&eacute;p&ocirc;t et Placement du Qu&eacute;bec", "AON", "&Eacute;difice Jacques-Parizeau", "Soci&eacute;t&eacute; Qu&eacute;b&eacute;coise d&#39;Information Juridique", "Groupe CSL",
	"Maison des R&eacute;gions", "Place Victoria", "Agence Mondiale Antidopage", "Association Internationale du Transport A&eacute;rien", "Autorit&eacute; des March&eacute;s Financiers", "La Vo&ucirc;te", "Ivanho&eacute; Cambridge", "Atlific Hotels",
	"Th&eacute;&acirc;tre St-James", "CIMA+", "KoSc&egrave;ne", "Saint-M2", "Chambre de Commerce du Montr&eacute;al M&eacute;tropolitain", "H&ocirc;tel Gault", "Appartements-Boutique", "Square des Fr&egrave;res-Charon", "DOMO Appartements" ];
	
	SquareVictoriatypes = [ "District", "Port", "Place de la Ville", "Bureau", "Bureau", "Bureau", "Bureau", "Place de la Ville", "District", "Bureau", "Centre Commercial", "H&ocirc;tel", "Bureau", "Restaurant", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel",
	"District", "Centre de Convention", "Centre de Convention", "R&eacute;sidence", "Restaurant", "H&ocirc;tel", "Agence", "Bureau", "Bureau", "Agence", "Bureau", "Bureau", "Centre Commercial", "Bureau", "Bureau", "Agence", "Restaurant", "Bureau", "Bureau", "Salle de R&eacute;ception",
	"Bureau", "Bureau", "R&eacute;sidence", "Bureau", "H&ocirc;tel", "R&eacute;sidence", "Parc", "R&eacute;sidence" ];
	
	SquareVictoriaaddresses = [ "", "333 Rue de la Commune Ouest", "", "612 Rue Saint-Jacques", "800 Rue Gauvin", "600 Rue de la Gaucheti&egrave;re Ouest", "525 Avenue Viger Ouest", "1000 Place Jean-Paul-Riopelle", "",
	"999 Boulevard Robert-Bourassa", "747 Rue du Square-Victoria", "355 Rue Saint-Jacques", "600 Rue de la Gaucheti&egrave;re Ouest", "401 Rue Notre-Dame Ouest", "270 Rue Saint-Antoine Ouest", "901 Rue du Square-Victoria", 
	"262 Rue Saint-Jacques", "360 Rue Saint-Antoine Ouest", "", "1001 Place Jean-Paul-Riopelle", "800 Rue de la Gaucheti&egrave;re Ouest", "777 Boulevard Robert-Bourassa", "777 Boulevard Robert-Bourassa", "208 Rue Saint-Antoine Ouest",
	"1000 Place Jean-Paul-Riopelle", "700 Rue de la Gaucheti&egrave;re Ouest", "1000 Place Jean-Paul-Riopelle", "715 Rue du Square-Victoria", "759 Rue du Square-Victoria", "500 Rue Saint-Jacques", "800 Rue du Square-Victoria", "800 Rue du Square-Victoria",
	"800 Rue du Square-Victoria", "800 Rue du Square-Victoria", "360 Rue Saint-Jacques", "1001 Rue du Square-Victoria", "250 Rue Saint-Antoine Ouest", "265 Rue Saint-Jacques",
	"740 Rue Notre-Dame Ouest", "651 Rue Notre-Dame Ouest", "464 Rue Saint-Henri", "393 Rue Saint-Jacques", "449 Rue Sainte-H&eacute;l&egrave;ne", "715 Rue William", "", "650 Rue Wellington" ];
	
	SquareVictoriasites = [ "https://vieuxmontreal.ca/", "https://www.vieuxportdemontreal.com/", "https://montreal.ca/lieux/square-victoria", "https://www.quebecor.com/fr/accueil", "http://www.tourdelabourse.com/", "#", "https://www.touraimia.com/index.php",
	"https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-jean-paul-riopelle", "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/quartier-international-de-montreal", "https://www.icao.int/Pages/default.aspx", 
	"https://www.alliedreit.com/fr/property/__trashed/", "https://hotellestjames.com/fr", "https://www.rcgt.com/fr/bureaux/montreal/", "http://somwhr.com/", "https://www.marriott.fr/hotels/travel/yulle-le-westin-montreal", 
	"https://www.marriott.fr/hotels/travel/yulwh-w-montreal", "http://www.lhotelmontreal.com/default-fr.html", "https://montreal.intercontinental.com/fr/", "https://grandquebec.com/montreal-touristique/cite-multimedia/", "https://congresmtl.com/", "http://placebonaventure.com/fr/",
	"https://www.evomontreal.com/fr", "https://portus360.com/", "https://www.hiltonhotels.com/fr_FR/canada/embassy-suites-by-hilton-montreal/?cultureKey=fr_FR", "https://www.cdpq.com/fr", "https://www.aon.com/canada/fr/default.jsp",
	"http://edificejacques-parizeau.com/", "https://soquij.qc.ca/", "https://www.cslships.com/fr", "https://maisondesregions.com/", "http://www.groupepetra.com/fra/properties/view?id=41index2_fr.php", "https://www.wada-ama.org/fr", "https://www.iata.org/", "https://lautorite.qc.ca/",
	"https://lavoutemontreal.com/", "https://www.ivanhoecambridge.com/", "https://fr.atlific.com/", "https://www.stjamestheatre.ca/francais", "https://www.cima.ca/", "http://www.koscene.ca/", "https://www.saintm2.com/fr/", "https://www.ccmm.ca/", "https://hotelgault.com/fr/", "http://www.appartementsboutique.ca/",
	"https://montreal.ca/lieux/square-des-freres-charon", "https://www.mondev.ca/fr/appartements-a-louer-montreal/old-montreal/wellington-650" ];
	
	Bonaventurenames = [ "Gare Centrale", "Terminus Centre-Ville", "Les Halles de la Gare", "Place Bonaventure", "STM, si&egrave;ge social", "Centre Bell", "1000 De La Gaucheti&egrave;re", "Place Ville Marie",
	"H&ocirc;tel Fairmont Reine Elizabeth", "Marriott Ch&acirc;teau Champlain", "&Eacute;difice de l&#39;OACI", "Cath&eacute;drale Marie Reine du Monde", "Square Dorchester", "&Eacute;difice Sun Life", 
	"Time Supper Club", "Immigration, R&eacute;fugi&eacute;s et Citoyennet&eacute; Canada", "H&ocirc;tel Bonaventure", "Place du Canada" ];
	
	Bonaventuretypes = [ "Station de Train", "Terminus d&#39;Autobus", "Centre Commercial", "Centre de Convention", "Bureau", "Sports", "Bureau", "Centre Commercial", "H&ocirc;tel", "H&ocirc;tel", 
	"Bureau", "&Eacute;glise", "Place de la Ville", "Bureau", "Salle de R&eacute;ception", "Gouvernement", "H&ocirc;tel", "Place de la Ville" ];
	
	Bonaventureaddresses = [ "895 Rue de la Gaucheti&egrave;re Ouest", "1000 Rue de la Gaucheti&egrave;re Ouest", "895 Rue de la Gaucheti&egrave;re Ouest", "800 Rue de la Gaucheti&egrave;re Ouest", 
	"800 Rue de la Gaucheti&egrave;re Ouest", "1909 Avenue des Canadiens-de-Montr&eacute;al", "1000 Rue de la Gaucheti&egrave;re Ouest", "1 Place Ville Marie", "900 Boulevard Ren&eacute;-L&eacute;vesque Ouest", 
	"1050 Rue de la Gaucheti&egrave;re Ouest", "999 Boulevard Robert-Bourassa", "1085 Rue de la Cath&eacute;drale", "2903 Rue Peel", "1155 Rue Metcalfe", "997 Rue Saint-Jacques", "1010 Rue Saint-Antoine Ouest", "900 Rue de la Gaucheti&egrave;re Ouest",
	"1010 Rue de la Gaucheti&egrave;re Ouest" ];
	
	Bonaventuresites = [ "https://garecentrale.ca/fr/", "https://exo.quebec/planifier-trajet/installations-intermodales/terminus-centre", "https://garecentrale.ca/fr/halles-de-la-gare", "http://placebonaventure.com/fr/", 
	"http://stm.info/fr", "https://www.centrebell.ca/fr", "https://www.le1000.com/fr", "https://placevillemarie.com/fr", "https://www.fairmont.fr/queen-elizabeth-montreal/", "https://www.marriott.fr/hotels/travel/yulcc-montreal-marriott-chateau-champlain", 
	"https://www.icao.int/Pages/default.aspx", "http://www.cathedralecatholiquedemontreal.org/", "https://montreal.ca/lieux/square-dorchester", "https://www.edificesunlife.ca/", 
	"https://timesupperclub.com/fr", "https://www.canada.ca/fr/services/immigration-citoyennete.html", "https://hotelbonaventure.com/fr/", "https://montreal.ca/lieux/place-du-canada" ];
	
	LucienLAlliernames = [ "Centre Bell", "Tour Deloitte", "Tour des Canadiens", "&Eacute;cole de Technologie Sup&eacute;rieure", "Gare Windsor", "WeWork L&#39;Avenue", "Coll&egrave;ge Herzing", 
	"Holiday Inn & Suites Montr&eacute;al Centre-Ville Ouest", "Le Centre Sheraton Montr&eacute;al", "Novotel Montr&eacute;al Centre", "H&ocirc;tel Le Crystal", "Le Nouvel H&ocirc;tel & Spa", "Coll&egrave;ge O&#39;Sullivan",
	"Tribunal Administratif du Logement du Qu&eacute;bec", "1350-1360 Ren&eacute;-L&eacute;vesque Ouest", "Best Western Plus Montr&eacute;al Centre-Ville H&ocirc;tel Europa" ];
	
	LucienLAlliertypes = [ "Sports", "Bureau", "R&eacute;sidence", "Coll&egrave;ge", "Bureau", "Bureau", "Coll&egrave;ge", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Coll&egrave;ge", "Agence", "Bureau", "H&ocirc;tel" ];
	
	LucienLAllieraddresses = [ "1909 Avenue des Canadiens-de-Montr&eacute;al", "1115 Rue Saint-Antoine Ouest", "750 Rue Peel", "1100 Rue Notre-Dame Ouest", "1100 Avenue des Canadiens-de-Montr&eacute;al", 
	"1275 Avenue des Canadiens-de-Montr&eacute;al", "1616 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1390 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1201 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1180 Rue de la Montagne", 
	"1100 Rue de la Montagne", "1740 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1191 Rue de la Montagne", "1425 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1360 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1240 Rue Drummond" ];
	
	LucienLAlliersites = [ "https://www.centrebell.ca/fr", "https://www.cfoffice.ca/property/home/cf-deloitte-tower/fr/", "http://tourdescanadiens.com/", "http://www.etsmtl.ca/accueil", "https://www.cfoffice.ca/property/home/cf-the-windsor-station-office/fr/", 
	"https://www.wework.com/fr-CA/buildings/l-avenue--montreal--QC", "https://www.herzing.ca/fr/campus-et-emplacements-du-college-herzing/montreal/", "https://www.ihg.com/holidayinn/hotels/fr/fr/montreal/yulcc/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-CA-_-YULCC", 
	"https://www.marriott.fr/hotels/travel/yulsi-le-centre-sheraton-montreal-hotel", "https://www.novotelmontreal.com/index_fr.shtm", 
	"https://www.hotellecrystal.com/fr", "https://fr.lenouvelhotel.com/", "https://www.osullivan.edu/fr/", "https://www.tal.gouv.qc.ca/fr", "https://www.1350rene-levesque.com/index-fr.html", "https://www.bestwestern.com/fr_FR/book/hotel-rooms.67013.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67013" ];
	
	GeorgesVaniernames = [ "Parc Oscar-Peterson", "Paroisse Saint Anthony of Padua", "Parc de l&#39;Association-Eur&ecirc;ka", "Parc Herbert-Brown-Ames", "&Eacute;cole de la Petite-Bourgogne", 
	"Centre Sportif de la Petite-Bourgogne", "Parc des Meubliers", "Parc Herb-Trawick", "Habitations de l&#39;&Eacute;rabli&egrave;re", "Le SE7T" ];
	
	GeorgesVaniertypes = [ "Parc", "&Eacute;glise", "Parc", "Parc", "&Eacute;cole", "Centre Culturel", "Parc", "Parc", "R&eacute;sidence", "R&eacute;sidence" ];
	
	GeorgesVanieraddresses = [ "810 Rue Chatham", "1950 Rue Saint-Antoine Ouest", "576 Rue Chatham", "", "555 Rue des Seigneurs", "1825 Rue Notre-Dame Ouest", "1935 Rue Notre-Dame Ouest", "", "1745 Rue Notre-Dame Ouest", "400 Avenue Richmond" ];
	
	GeorgesVaniersites = [ "https://montreal.ca/lieux/parc-oscar-peterson", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-anthony-padua",
	"https://montreal.ca/lieux/parc-de-lassociation-eureka",
	"https://montreal.ca/lieux/parc-herbert-brown-ames",
	"https://petite-bourgogne.cssdm.gouv.qc.ca/",
	"http://www.centresportifdelapetitebourgogne.ca/",
	"https://montreal.ca/lieux/parc-des-meubliers",
	"https://montreal.ca/lieux/parc-herb-trawick",
	"https://www.omhm.qc.ca/fr/services-aux-locataires/habitations-de-lerabliere/",
	"https://se7t.ca/fr/" ];
	
	PlaceSaintHenrinames = [ "Parc Sir-Georges-&Eacute;tienne-Cartier", "Parc Louis-Cyr", "Institut Technique Aviron", "Parc Saint-Henri", "Piscine Saint-Henri", "CLSC Saint-Henri", 
	"&Eacute;cole des M&eacute;tiers du Sud-Ouest-de-Montr&eacute;al", "Parc &Eacute;mile-Berliner", "&Eacute;cole Ludger-Duvernay" ];
	
	PlaceSaintHenritypes = [ "Parc", "Parc", "&Eacute;cole de M&eacute;tiers", "Parc", "Piscine", "Agence", "&Eacute;cole de M&eacute;tiers", "Parc", "&Eacute;cole" ];
	
	PlaceSaintHenriaddresses = [ "127 Rue du Square-Sir-George-&Eacute;tienne-Cartier", "167 Rue Saint-Ferdinand", "5460 Avenue Royalmount", "753 Rue Agn&egrave;s", "4055 Rue Saint-Jacques", 
	"3833 Rue Notre-Dame Ouest", "717 Rue Saint-Ferdinand", "", "770 Rue du Couvent" ];
	
	PlaceSaintHenrisites = [ "https://montreal.ca/lieux/square-sir-george-etienne-cartier", "https://montreal.ca/lieux/parc-louis-cyr", "http://www.avirontech.com/fr", 
	"https://montreal.ca/lieux/parc-saint-henri", "https://montreal.ca/lieux/piscine-saint-henri", "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/clsc-de-saint-henri",
	"https://ecole-metiers-sud-ouest.csdm.ca/", "https://montreal.ca/lieux/parc-emile-berliner", "https://ludger-duvernay.cssdm.gouv.qc.ca/" ];
	
	Vendomenames = [ "Centre Universitaire de Sant&eacute; McGill", "Quilles G Plus Rose Bowl" ];
	
	Vendometypes = [ "H&ocirc;pital", "Sports" ];
	
	Vendomeaddresses = [ "1001 Boulevard D&eacute;carie", "6510 Rue Saint-Jacques" ];
	
	Vendomesites = [ "https://cusm.ca/", "https://quillesgplus.com/quilles-g-plus-rose-bowl/" ];
	
	VillaMarianames = [ "&Eacute;cole Villa-Maria", "C&eacute;gep Marianopolis", "Acad&eacute;mie Marymount", "Village Monkland" ];
	
	VillaMariatypes = [ "&Eacute;cole", "Coll&egrave;ge", "&Eacute;cole", "District" ];
	
	VillaMariaaddresses = [ "4245 Boulevard D&eacute;carie", "4873 Avenue Westmount", "5100 Chemin de la C&ocirc;te Saint-Luc", "" ];
	
	VillaMariasites = [ "https://www.villamaria.qc.ca", "https://www.marianopolis.edu/", "http://marymount.emsb.qc.ca/", "#" ];
	
	CoteSainteCatherinenames = [ "Mus&eacute;e de l&#39;Holocauste", "Centre Segal", "Centre Cummings", "Talmud Torahs Unis de Montr&eacute;al", "Centre Communautaire Juif", "Spanish & Portuguese Synagogue of Montreal", 
	"&Eacute;cole Internationale Marie de France", "Coll&egrave;ge International Marie de France", "Parc Mackenzie-King", "Institut Universitaire de G&eacute;riatrie de Montr&eacute;al, Pavillon Alfred-Desrochers" ];
	
	CoteSainteCatherinetypes = [ "Mus&eacute;e", "Th&eacute;&acirc;tre", "R&eacute;sidence", "&Eacute;cole", "Centre Culturel", "Synagogue", "&Eacute;cole", "&Eacute;cole", "Parc", "R&eacute;sidence" ];
	
	CoteSainteCatherineaddresses = [ "5151 Chemin de la C&ocirc;te-Sainte-Catherine", "5170 Chemin de la C&ocirc;te-Sainte-Catherine", "5700 Avenue de Westbury", "4840 Avenue Saint-Kevin", "5400 Avenue de Westbury", 
	"4894 Avenue Saint-Kevin", "4700 Rue Fulton", "4635 Chemin Queen-Mary", "4907 Avenue Saint-Kevin", "5325 Avenue Victoria" ];
	
	CoteSainteCatherinesites = [ "https://museeholocauste.ca/fr", "https://www.segalcentre.org/fr/home", "https://cummingscentre.org/fr/", "https://azrieli-tth.ca/fr/talmud-torah/bienvenue/", "https://www.ymywha.com/fr", 
	"https://www.thespanish.org/accueil", "https://www.cimf.ca/", "https://www.cimf.ca/", "https://montreal.ca/lieux/parc-mackenzie-king", 
	"https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-alfred-desrochers" ];
	
	Plamondonnames = [ "Centre Commercial Van Horne", "Shadd Health & Business Centre", "Petit Manille", "Ar&eacute;na Bill-Durnan", "Centre Sportif C&ocirc;te-des-Neiges", "&Eacute;cole Primaire Coronation",
	"Ramada Plaza Montr&eacute;al", "Parc Van Horne", "&Eacute;cole du Petit-Chapiteau" ];
	
	Plamondontypes = [ "Magasinage", "&Eacute;cole de M&eacute;tiers", "District", "Sports", "Sports", "&Eacute;cole", "H&ocirc;tel", "Parc", "&Eacute;cole" ];
	
	Plamondonaddresses = [ "4861 Avenue Van Horne", "1000 Avenue Old Orchard", "", "4988 Rue V&eacute;zina", "4880 Avenue Van Horne", "4810 Avenue Van Horne", "6445 Boulevard D&eacute;carie", "4900 Avenue Van Horne", "4890 Avenue Carlton" ];
	
	Plamondonsites = [ "https://fcr.ca/fr/properties/quebec/montreal-area/centre-commercial-van-horne/", "http://www.shadd.com/", "#", "https://montreal.ca/lieux/arena-bill-durnan", 
	"https://www.loisirssportifscdn-ndg.com/centre-sportif-cote-des-neiges/", 
	"https://coronation.emsb.qc.ca/coronation", "https://www.ramadaplazamontreal.com/fr-fr", "https://montreal.ca/lieux/parc-van-horne", "https://petit-chapiteau.csdm.ca/" ];
	
	Namurnames = [ "Gibeau Orange Julep", "Centre Commercial D&eacute;carie Square", "SmartCentres Montr&eacute;al D&eacute;carie", "SPCA Montr&eacute;al", "Parc Nelson-Mandela",
	"&Eacute;cole des Nations", "H&ocirc;tel Ruby Foo&#39;s" ];
	
	Namurtypes = [ "Restaurant", "Centre Commercial", "Magasinage", "Agence", "Parc", "&Eacute;cole", "H&ocirc;tel" ];
	
	Namuraddresses = [ "7700 Boulevard D&eacute;carie", "6900 Boulevard D&eacute;carie", "5400 Rue Jean-Talon Ouest", "5215 Rue Jean-Talon Ouest", "4920 Rue V&eacute;zina",
	"4860 Rue V&eacute;zina", "7655 Boulevard D&eacute;carie" ];
	
	Namursites = [ "https://orangejulep.ca", "#", "https://www.smartcentres.com/fr/property/smartcentres-montreal-decarie-qc/", "https://www.spca.com/",
	"https://montreal.ca/lieux/parc-nelson-mandela", "https://des-nations.csdm.ca/", "https://www.hotelrubyfoos.com/fr/" ];
	
	DeLaSavanenames = [ "Cimeti&egrave;re Baron de Hirsch", "Kart-O-Mania" ];
	
	DeLaSavanetypes = [ "Cimeti&egrave;re", "Sports" ];
	
	DeLaSavaneaddresses = [ "5015 Rue de la Savane", "5196 Rue de la Savane" ];
	
	DeLaSavanesites = [ "https://barondehirsch.com/fr/index.php", "http://www.kart-o-mania.ca/fr/" ];
	
	DuCollegenames = [ "C&eacute;gep Vanier", "C&eacute;gep de Saint-Laurent", "Parc Decelles", "Ar&eacute;na Ronald-Caron", "Parc Gohier", "Mairie de Saint-Laurent", "&Eacute;cole Primaire Laurentide",
	"Biblioth&egrave;que du Vieux-Saint-Laurent", "Parc Grou", "&Eacute;glise Saint-Laurent", "Biserica Sf&acirc;nta Cuvioas&abreve; Parascheva" ];
	
	DuCollegetypes = [ "Coll&egrave;ge", "Coll&egrave;ge", "Parc", "Sports", "Parc", "Gouvernement", "&Eacute;cole", "Biblioth&egrave;que", "Parc", "&Eacute;glise", "&Eacute;glise" ];
	
	DuCollegeaddresses = [ "821 Avenue Sainte-Croix", "625 Avenue Sainte-Croix", "845 Rue Roy", "625 Avenue Sainte-Croix", "730 Rue Buchanan", "777 Boulevard Marcel-Laurin", "465 Rue Cardinal",
	"1380 Rue de l&#39;&Eacute;glise", "", "805 Avenue Sainte-Croix", "807 Avenue Sainte-Croix" ];
	
	DuCollegesites = [ "https://www.vaniercollege.qc.ca/", "https://www.cegepsl.qc.ca/", "https://montreal.ca/lieux/parc-decelles", "https://athletics.dawsoncollege.qc.ca/hockey/venue/ronald-caron-arena/",
	"https://montreal.ca/lieux/parc-gohier", "https://montreal.ca/lieux/mairie-darrondissement-de-saint-laurent", "https://laurentide.ecolesaintlaurent.ca/", "https://montreal.ca/lieux/bibliotheque-du-vieux-saint-laurent",
	"https://montreal.ca/lieux/parc-grou", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-laurent", "http://www.cuvioasa-parascheva-montreal.com/" ];
	
	CoteVertunames = [ "Terminus C&ocirc;te-Vertu", "Les Galeries Norgate", "Place Vertu", "Sph&egrave;retech Saint-Laurent", "C&eacute;gep Vanier", "C&eacute;gep de Saint-Laurent", "Parc Decelles", "D&eacute;carie Hot Dogs", 
	"Centre des Loisirs de Saint-Laurent", "GSK", "&Eacute;cole Peter Hall", "&Eacute;glise Saint-Laurent", "Biserica Sf&acirc;nta Cuvioas&abreve; Parascheva", "Ar&eacute;na Ronald-Caron",
	"Parc B&eacute;langer" ];
	
	CoteVertutypes = [ "Terminus d&#39;Autobus", "Magasinage", "Centre Commercial", "Magasinage", "Coll&egrave;ge", "Coll&egrave;ge", "Parc", "Restaurant", "Th&eacute;&acirc;tre", "Pharmaceutique",
	"&Eacute;cole", "&Eacute;glise", "&Eacute;glise", "Sports", "Parc" ];
	
	CoteVertuaddresses = [ "1505 Boulevard de la C&ocirc;te-Vertu Ouest", "1179 Boulevard D&eacute;carie", "3131 Boulevard de la C&ocirc;te-Vertu Ouest", "3500 Boulevard de la C&ocirc;te-Vertu Ouest", 
	"821 Avenue Sainte-Croix", "625 Avenue Sainte-Croix", "845 Rue Roy", "953 Boulevard D&eacute;carie", "1375 Rue Grenet", "1765 Boulevard de la C&ocirc;te-Vertu Ouest", "840 Boulevard de la C&ocirc;te-Vertu Ouest",
	"805 Avenue Sainte-Croix", "807 Avenue Sainte-Croix", "625 Avenue Sainte-Croix", "" ];
	
	CoteVertusites = [ "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-cote-vertu", "#", "https://www.placevertu.com", "#", "https://www.vaniercollege.qc.ca/", 
	"https://www.cegepsl.qc.ca/", "https://montreal.ca/lieux/parc-decelles", "#", "https://montreal.ca/lieux/centre-des-loisirs-de-saint-laurent", "https://ca.gsk.com/fr-ca/",
	"https://peterhall.qc.ca/", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-laurent", "http://www.cuvioasa-parascheva-montreal.com/",
	"https://athletics.dawsoncollege.qc.ca/hockey/venue/ronald-caron-arena/", "https://montreal.ca/lieux/parc-belanger" ];
	
	allspots = BerriUqamnames.length + LionelGroulxnames.length + JeanTalonnames.length + Snowdonnames.length + JeanDrapeaunames.length + Longueuilnames.length + SaintMichelnames.length + Ibervillenames.length 
	+ Fabrenames.length + DeCastelnaunames.length + Parcnames.length + Acadienames.length + Outremontnames.length + EdouardMontpetitnames.length + UdeMnames.length + CoteDesNeigesnames.length + HonoreBeaugrandnames.length 
	+ Radissonnames.length + Langeliernames.length + Cadillacnames.length + Assomptionnames.length + Viaunames.length + PieIXnames.length + Joliettenames.length + Prefontainenames.length + Frontenacnames.length + Papineaunames.length 
	+ Beaudrynames.length + SaintLaurentnames.length + PlaceDesArtsnames.length + McGillnames.length + Peelnames.length + Guynames.length + Atwaternames.length + Charlevoixnames.length + LaSallenames.length + DeLEglisenames.length 
	+ Verdunnames.length + Jolicoeurnames.length + Monknames.length + Angrignonnames.length + Montmorencynames.length + DeLaConcordenames.length + Cartiernames.length + HenriBourassanames.length + Sauvenames.length 
	+ Cremazienames.length + Jarrynames.length + Beaubiennames.length + Rosemontnames.length + Lauriernames.length + MontRoyalnames.length + Sherbrookenames.length + ChampDeMarsnames.length + PlaceDArmesnames.length 
	+ SquareVictorianames.length + Bonaventurenames.length + LucienLAlliernames.length + GeorgesVaniernames.length + PlaceSaintHenrinames.length + Vendomenames.length + VillaMarianames.length 
	+ CoteSainteCatherinenames.length + Plamondonnames.length + Namurnames.length + DeLaSavanenames.length + DuCollegenames.length + CoteVertunames.length;
	document.getElementById("num-of-spots").innerHTML = "<p>Nombre maximal possible de r&eacute;sultats: "+allspots+".</p>";
	
	addEvent(document.getElementById("search-button"), "click", onClick);
}

function addEvent (obj, type, fn)
{
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function onClick(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	//display output below
	//search all 68 stations for results
	
	/*CLEAR ANY PREVIOUS OUTPUT FIRST*/
	document.getElementById("output").innerHTML = "";
	
	/*POPULAR REPLACEMENTS*/
	if(document.getElementById("search-box").value.toLowerCase() == "uqam" || document.getElementById("search-box").value.toLowerCase() == "uq&agrave;m" ||
	document.getElementById("search-box").value.toLowerCase() == "universite du quebec a montreal")
	{
		document.getElementById("search-box").value = "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "hgj" || document.getElementById("search-box").value.toLowerCase() == "hopital general juif")
	{
		document.getElementById("search-box").value = "H&ocirc;pital G&eacute;n&eacute;ral Juif";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "parc maisonneuve-cartier" || document.getElementById("search-box").value.toLowerCase() == "parc maisonneuve cartier" || 
	document.getElementById("search-box").value.toLowerCase() == "maisonneuve-cartier" || document.getElementById("search-box").value.toLowerCase() == "maisonneuve cartier")
	{
		document.getElementById("search-box").value = "Place Emmett-Johns";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "village gai" || document.getElementById("search-box").value.toLowerCase() == "le village gai" ||
	document.getElementById("search-box").value.toLowerCase() == "village gay" || document.getElementById("search-box").value.toLowerCase() == "le village gay")
	{
		document.getElementById("search-box").value = "Le Village";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "csn")
	{
		document.getElementById("search-box").value = "Conf&eacute;d&eacute;ration des Syndicats Nationaux";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "ramq")
	{
		document.getElementById("search-box").value = "R&eacute;gie de l&#39;Assurance Maladie du Qu&eacute;bec";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "centre eaton de montreal")
	{
		document.getElementById("search-box").value = "Centre Eaton de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "place montreal trust")
	{
		document.getElementById("search-box").value = "Place Montr&eacute;al Trust";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "edifice sun life")
	{
		document.getElementById("search-box").value = "&Eacute;difice Sun Life";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "hotel fairmont reine elizabeth")
	{
		document.getElementById("search-box").value = "H&ocirc;tel Fairmont Reine Elizabeth";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "carr&eacute; dorchester" ||
	document.getElementById("search-box").value.toLowerCase() == "carre dorchester")
	{
		document.getElementById("search-box").value = "Square Dorchester";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "carr&eacute; phillips" ||
	document.getElementById("search-box").value.toLowerCase() == "carre phillips")
	{
		document.getElementById("search-box").value = "Square Phillips";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "theatre banque scotia")
	{
		document.getElementById("search-box").value = "Th&eacute;&acirc;tre Banque Scotia";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "college lasalle")
	{
		document.getElementById("search-box").value = "Coll&egrave;ge LaSalle";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "mille carre dore" || document.getElementById("search-box").value.toLowerCase() == "mille carr&eacute; dore" || 
	document.getElementById("search-box").value.toLowerCase() == "mille carre dor&eacute;")
	{
		document.getElementById("search-box").value = "Mille Carr&eacute; Dor&eacute;";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "forum de montreal")
	{
		document.getElementById("search-box").value = "Forum de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "jardin botanique de montreal")
	{
		document.getElementById("search-box").value = "Jardin Botanique de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "biodome" ||
	document.getElementById("search-box").value.toLowerCase() == "biodome de montreal" || document.getElementById("search-box").value.toLowerCase() == "biod&ocirc;me de montreal" ||
	document.getElementById("search-box").value.toLowerCase() == "biodome de montr&eacute;al")
	{
		document.getElementById("search-box").value = "Biod&ocirc;me de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "ile des soeurs" || document.getElementById("search-box").value.toLowerCase() == "ile-des-soeurs" ||
	document.getElementById("search-box").value.toLowerCase() == "ids")
	{
		document.getElementById("search-box").value = "&Icirc;le-des-Soeurs";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "ritz carlton")
	{
		document.getElementById("search-box").value = "Ritz-Carlton";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "stade uniprix")
	{
		document.getElementById("search-box").value = "Stade IGA";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "parc lafontaine")
	{
		document.getElementById("search-box").value = "Parc La Fontaine";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "hotel de ville")
	{
		document.getElementById("search-box").value = "H&ocirc;tel de Ville de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "banque de montreal" || document.getElementById("search-box").value.toLowerCase() == "banque de montr&eacute;al")
	{
		document.getElementById("search-box").value = "BMO";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "basilique notre dame")
	{
		document.getElementById("search-box").value = "Basilique Notre-Dame";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "tour de la bourse de montreal" || document.getElementById("search-box").value.toLowerCase() == "tour de la bourse de montr&eacute;al")
	{
		document.getElementById("search-box").value = "Tour de la Bourse";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "ccmm")
	{
		document.getElementById("search-box").value = "Centre de Commerce Mondial de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "cathedrale marie reine du monde")
	{
		document.getElementById("search-box").value = "Cath&eacute;drale Marie Reine du Monde";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "cusm")
	{
		document.getElementById("search-box").value = "Centre Universitaire de Sant&eacute; McGill";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "musee de l&#39;holocauste")
	{
		document.getElementById("search-box").value = "Mus&eacute;e de l&#39;Holocauste";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "shadd business centre" || document.getElementById("search-box").value.toLowerCase() == "shadd business center" ||
	document.getElementById("search-box").value.toLowerCase() == "shadd health and business centre" || document.getElementById("search-box").value.toLowerCase() == "shadd health and business center" ||
	document.getElementById("search-box").value.toLowerCase() == "shadd health & business center" || document.getElementById("search-box").value.toLowerCase() == "sbc")
	{
		document.getElementById("search-box").value = "Shadd Health & Business Centre";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "hopital de montreal pour enfants")
	{
		document.getElementById("search-box").value = "H&ocirc;pital de Montr&eacute;al pour Enfants";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "hotel la tour belvedere" || document.getElementById("search-box").value.toLowerCase() == "h&ocirc;tel la tour belvedere" ||
	document.getElementById("search-box").value.toLowerCase() == "hotel la tour belv&eacute;d&egrave;re")
	{
		document.getElementById("search-box").value = "H&ocirc;tel La Tour Belv&eacute;d&egrave;re";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "hotel saint-denis" || document.getElementById("search-box").value.toLowerCase() == "hotel st-denis" ||
	document.getElementById("search-box").value.toLowerCase() == "h&ocirc;tel saint-denis" || document.getElementById("search-box").value.toLowerCase() == "hotel st denis" ||
	document.getElementById("search-box").value.toLowerCase() == "hotel saint denis" || document.getElementById("search-box").value.toLowerCase() == "h&ocirc;tel st denis" ||
	document.getElementById("search-box").value.toLowerCase() == "h&ocirc;tel saint denis")
	{
		document.getElementById("search-box").value = "H&ocirc;tel St-Denis";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "centaur theatre" || document.getElementById("search-box").value.toLowerCase() == "theatre centaur")
	{
		document.getElementById("search-box").value = "Th&eacute;&acirc;tre Centaur";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "th&eacute;&acirc;tre saint-james" || document.getElementById("search-box").value.toLowerCase() == "th&eacute;&acirc;tre st james" ||
	document.getElementById("search-box").value.toLowerCase() == "theatre saint-james" || document.getElementById("search-box").value.toLowerCase() == "theatre st-james" || document.getElementById("search-box").value.toLowerCase() == "th&eacute;&acirc;tre saint james" ||
	document.getElementById("search-box").value.toLowerCase() == "theatre saint james" || document.getElementById("search-box").value.toLowerCase() == "theatre st james" ||
	document.getElementById("search-box").value.toLowerCase() == "saint-james theatre" || document.getElementById("search-box").value.toLowerCase() == "st-james theatre" ||
	document.getElementById("search-box").value.toLowerCase() == "saint james theatre" || document.getElementById("search-box").value.toLowerCase() == "st james theatre")
	{
		document.getElementById("search-box").value = "Th&eacute;&acirc;tre St-James";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "college cdi")
	{
		document.getElementById("search-box").value = "Coll&egrave;ge CDI";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "roddick gates")
	{
		document.getElementById("search-box").value = "Portail Roddick";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "eglise au toit rouge" || document.getElementById("search-box").value.toLowerCase() == "&eacute;glise au toit rouge")
	{
		document.getElementById("search-box").value = "&Eacute;glise St. John the Evangelist";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "pavillon bronfman")
	{
		document.getElementById("search-box").value = "Facult&eacute; de Gestion Desautels";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "centre cdp capital")
	{
		document.getElementById("search-box").value = "&Eacute;difice Jacques-Parizeau";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "r&eacute;gie du logement" || document.getElementById("search-box").value.toLowerCase() == "regie du logement" ||
	document.getElementById("search-box").value.toLowerCase() == "r&eacute;gie du logement du qu&eacute;bec" || document.getElementById("search-box").value.toLowerCase() == "regie du logement du quebec" ||
	document.getElementById("search-box").value.toLowerCase() == "regie du logement du qu&eacute;bec" || document.getElementById("search-box").value.toLowerCase() == "r&eacute;gie du logement du quebec")
	{
		document.getElementById("search-box").value = "Tribunal Administratif du Logement du Qu&eacute;bec";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "centre st pierre" || document.getElementById("search-box").value.toLowerCase() == "centre saint-pierre" ||
	document.getElementById("search-box").value.toLowerCase() == "centre saint pierre")
	{
		document.getElementById("search-box").value = "Centre St-Pierre";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "wellington 650")
	{
		document.getElementById("search-box").value = "DOMO Appartements";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "petite bourgogne" || document.getElementById("search-box").value.toLowerCase() == "little burgundy")
	{
		document.getElementById("search-box").value = "Petite-Bourgogne";
	}
	
	/*TO TREAT STREETS AND CATEGORIES (FRENCH VERSION) WITH SPECIAL CHARACTERS*/
	var street = document.getElementById("streets").value;
	var category = document.getElementById("categories").value;
	
	switch (category){
		case "hotel":
		{
			category = "H&ocirc;tel";
			break;
		}
		case "park":
		{
			category = "Parc";
			break;
		}
		case "restaurant":
		{
			category = "Restaurant";
			break;
		}
		case "school":
		{
			category = "&Eacute;cole";
			break;
		}
		case "church":
		{
			category = "&Eacute;glise";
			break;
		}
		case "sports":
		{
			category = "Sports";
			break;
		}
		case "college":
		{
			category = "Coll&egrave;ge";
			break;
		}
		case "university":
		{
			category = "Universit&eacute;";
			break;
		}
		case "trade school":
		{
			category = "&Eacute;cole de M&eacute;tiers";
			break;
		}
		case "town square":
		{
			category = "Place de la Ville";
			break;
		}
		case "mall":
		{
			category = "Centre Commercial";
			break;
		}
		case "shopping":
		{
			category = "Magasinage";
			break;
		}
		case "district":
		{
			category = "District";
			break;
		}
		case "office":
		{
			category = "Bureau";
			break;
		}
		case "government":
		{
			category = "Gouvernement";
			break;
		}
		case "agency":
		{
			category = "Agence";
			break;
		}
		case "residence":
		{
			category = "R&eacute;sidence";
			break;
		}
		case "hospital":
		{
			category = "H&ocirc;pital";
			break;
		}
		case "market":
		{
			category = "March&eacute;";
			break;
		}
		case "cemetery":
		{
			category = "Cimeti&egrave;re";
			break;
		}
		case "theatre":
		{
			category = "Th&eacute;&acirc;tre";
			break;
		}
		case "museum":
		{
			category = "Mus&eacute;e";
			break;
		}
		case "beach":
		{
			category = "Plage";
			break;
		}
		case "library":
		{
			category = "Biblioth&egrave;que";
			break;
		}
		case "cultural centre":
		{
			category = "Centre Culturel";
			break;
		}
		case "historical site":
		{
			category = "Site Historique";
			break;
		}
		case "bus terminal":
		{
			category = "Terminus d&#39;Autobus";
			break;
		}
		case "convention centre":
		{
			category = "Centre de Convention";
			break;
		}
	}
	
	switch (street){
		case "00":
		{
			street = "Rue Saint-Fran&ccedil;ois-Xavier";
			break;
		}
		case "01":
		{
			street = "Place d&#39;Youville";
			break;
		}
		case "02":
		{
			street = "Boulevard Ren&eacute;-L&eacute;vesque";
			break;
		}
		case "03":
		{
			street = "Avenue du Pr&eacute;sident-Kennedy";
			break;
		}
		case "04":
		{
			street = "Rue de la Gaucheti&egrave;re";
			break;
		}
		case "05":
		{
			street = "Rue Fran&ccedil;ois-Perrault";
			break;
		}
		case "06":
		{
			street = "Avenue de Gasp&eacute;";
			break;
		}
		case "07":
		{
			street = "Boulevard de l&#39;Acadie";
			break;
		}
		case "08":
		{
			street = "Boulevard &Eacute;douard-Montpetit";
			break;
		}
		case "09":
		{
			street = "Chemin de la C&ocirc;te-Sainte-Catherine";
			break;
		}
		case "10":
		{
			street = "Chemin de la C&ocirc;te-des-Neiges";
			break;
		}
		case "11":
		{
			street = "Chemin de la C&ocirc;te Saint-Luc";
			break;
		}
		case "12":
		{
			street = "Boulevard de l&#39;Assomption";
			break;
		}
		case "13":
		{
			street = "Boulevard Ga&eacute;tan-Laberge";
			break;
		}
		case "14":
		{
			street = "Rue Sauv&eacute;";
			break;
		}
		case "15":
		{
			street = "Boulevard Cr&eacute;mazie";
			break;
		}
		case "16":
		{
			street = "Boulevard D&eacute;carie";
			break;
		}
		case "17":
		{
			street = "Boulevard de la C&ocirc;te-Vertu";
			break;
		}
		default:
		{
			street = street;
			break;
		}
	}
	
	for(var i=0; i<BerriUqamnames.length; i++)
	{
		if (BerriUqamnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && BerriUqamtypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && BerriUqamaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(BerriUqamsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+BerriUqamnames[i]+"</h3>"+"<p>"+BerriUqamaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+BerriUqamtypes[i]+"&nbsp;&nbsp; <a href=\""+BerriUqamsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b>Berri-UQAM</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+BerriUqamnames[i]+"</h3>"+"<p>"+BerriUqamaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+BerriUqamtypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b>Berri-UQAM</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<JeanTalonnames.length; i++)
	{
		if (JeanTalonnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && JeanTalontypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && JeanTalonaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(JeanTalonsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+JeanTalonnames[i]+"</h3>"+"<p>"+JeanTalonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+JeanTalontypes[i]+"&nbsp;&nbsp; <a href=\""+JeanTalonsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b>Jean-Talon</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+JeanTalonnames[i]+"</h3>"+"<p>"+JeanTalonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+JeanTalontypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b>Jean-Talon</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<LionelGroulxnames.length; i++)
	{
		if (LionelGroulxnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && LionelGroulxtypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && LionelGroulxaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(LionelGroulxsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+LionelGroulxnames[i]+"</h3>"+"<p>"+LionelGroulxaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+LionelGroulxtypes[i]+"&nbsp;&nbsp; <a href=\""+LionelGroulxsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b>Lionel-Groulx</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+LionelGroulxnames[i]+"</h3>"+"<p>"+LionelGroulxaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+LionelGroulxtypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b>Lionel-Groulx</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Snowdonnames.length; i++)
	{
		if (Snowdonnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Snowdontypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Snowdonaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Snowdonsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Snowdonnames[i]+"</h3>"+"<p>"+Snowdonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Snowdontypes[i]+"&nbsp;&nbsp; <a href=\""+Snowdonsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b>Snowdon</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Snowdonnames[i]+"</h3>"+"<p>"+Snowdonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Snowdontypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b>Snowdon</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<JeanDrapeaunames.length; i++)
	{
		if (JeanDrapeaunames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && JeanDrapeautypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && JeanDrapeauaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(JeanDrapeausites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+JeanDrapeaunames[i]+"</h3>"+"<p>"+JeanDrapeauaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+JeanDrapeautypes[i]+"&nbsp;&nbsp; <a href=\""+JeanDrapeausites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: yellow; color: black\">Jean-Drapeau</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+JeanDrapeaunames[i]+"</h3>"+"<p>"+JeanDrapeauaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+JeanDrapeautypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: yellow; color: black\">Jean-Drapeau</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Longueuilnames.length; i++)
	{
		if (Longueuilnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Longueuiltypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Longueuiladdresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Longueuilsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Longueuilnames[i]+"</h3>"+"<p>"+Longueuiladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Longueuiltypes[i]+"&nbsp;&nbsp; <a href=\""+Longueuilsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: yellow; color: black\">Longueuil&#8211;Universit&eacute;-de-Sherbrooke</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Longueuilnames[i]+"</h3>"+"<p>"+Longueuiladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Longueuiltypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: yellow; color: black\">Longueuil&#8211;Universit&eacute;-de-Sherbrooke</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<SaintMichelnames.length; i++)
	{
		if (SaintMichelnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && SaintMicheltypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && SaintMicheladdresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(SaintMichelsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+SaintMichelnames[i]+"</h3>"+"<p>"+SaintMicheladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+SaintMicheltypes[i]+"&nbsp;&nbsp; <a href=\""+SaintMichelsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Saint-Michel</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+SaintMichelnames[i]+"</h3>"+"<p>"+SaintMicheladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+SaintMicheltypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Saint-Michel</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Ibervillenames.length; i++)
	{
		if (Ibervillenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Ibervilletypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Ibervilleaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Ibervillesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Ibervillenames[i]+"</h3>"+"<p>"+Ibervilleaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Ibervilletypes[i]+"&nbsp;&nbsp; <a href=\""+Ibervillesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">D&#39;Iberville</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Ibervillenames[i]+"</h3>"+"<p>"+Ibervilleaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Ibervilletypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">D&#39;Iberville</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Fabrenames.length; i++)
	{
		if (Fabrenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Fabretypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Fabreaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Fabresites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Fabrenames[i]+"</h3>"+"<p>"+Fabreaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Fabretypes[i]+"&nbsp;&nbsp; <a href=\""+Fabresites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Fabre</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Fabrenames[i]+"</h3>"+"<p>"+Fabreaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Fabretypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Fabre</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DeCastelnaunames.length; i++)
	{
		if (DeCastelnaunames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DeCastelnautypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && DeCastelnauaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DeCastelnausites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DeCastelnaunames[i]+"</h3>"+"<p>"+DeCastelnauaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DeCastelnautypes[i]+"&nbsp;&nbsp; <a href=\""+DeCastelnausites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">De Castelnau</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DeCastelnaunames[i]+"</h3>"+"<p>"+DeCastelnauaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DeCastelnautypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">De Castelnau</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Parcnames.length; i++)
	{
		if (Parcnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Parctypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Parcaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Parcsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Parcnames[i]+"</h3>"+"<p>"+Parcaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Parctypes[i]+"&nbsp;&nbsp; <a href=\""+Parcsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Parc</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Parcnames[i]+"</h3>"+"<p>"+Parcaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Parctypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Parc</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Acadienames.length; i++)
	{
		if (Acadienames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Acadietypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Acadieaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Acadiesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Acadienames[i]+"</h3>"+"<p>"+Acadieaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Acadietypes[i]+"&nbsp;&nbsp; <a href=\""+Acadiesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Acadie</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Acadienames[i]+"</h3>"+"<p>"+Acadieaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Acadietypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Acadie</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Outremontnames.length; i++)
	{
		if (Outremontnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Outremonttypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Outremontaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Outremontsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Outremontnames[i]+"</h3>"+"<p>"+Outremontaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Outremonttypes[i]+"&nbsp;&nbsp; <a href=\""+Outremontsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Outremont</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Outremontnames[i]+"</h3>"+"<p>"+Outremontaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Outremonttypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Outremont</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<EdouardMontpetitnames.length; i++)
	{
		if (EdouardMontpetitnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && EdouardMontpetittypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && EdouardMontpetitaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(EdouardMontpetitsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+EdouardMontpetitnames[i]+"</h3>"+"<p>"+EdouardMontpetitaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+EdouardMontpetittypes[i]+"&nbsp;&nbsp; <a href=\""+EdouardMontpetitsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">&Eacute;douard-Montpetit</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+EdouardMontpetitnames[i]+"</h3>"+"<p>"+EdouardMontpetitaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+EdouardMontpetittypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">&Eacute;douard-Montpetit</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<UdeMnames.length; i++)
	{
		if (UdeMnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && UdeMtypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && UdeMaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(UdeMsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+UdeMnames[i]+"</h3>"+"<p>"+UdeMaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+UdeMtypes[i]+"&nbsp;&nbsp; <a href=\""+UdeMsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Universit&eacute;-de-Montr&eacute;al</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+UdeMnames[i]+"</h3>"+"<p>"+UdeMaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+UdeMtypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Universit&eacute;-de-Montr&eacute;al</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<CoteDesNeigesnames.length; i++)
	{
		if (CoteDesNeigesnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && CoteDesNeigestypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && CoteDesNeigesaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(CoteDesNeigessites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteDesNeigesnames[i]+"</h3>"+"<p>"+CoteDesNeigesaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+CoteDesNeigestypes[i]+"&nbsp;&nbsp; <a href=\""+CoteDesNeigessites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">C&ocirc;te-des-Neiges</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteDesNeigesnames[i]+"</h3>"+"<p>"+CoteDesNeigesaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+CoteDesNeigestypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">C&ocirc;te-des-Neiges</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<HonoreBeaugrandnames.length; i++)
	{
		if (HonoreBeaugrandnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && HonoreBeaugrandtypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && HonoreBeaugrandaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(HonoreBeaugrandsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+HonoreBeaugrandnames[i]+"</h3>"+"<p>"+HonoreBeaugrandaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+HonoreBeaugrandtypes[i]+"&nbsp;&nbsp; <a href=\""+HonoreBeaugrandsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Honor&eacute;-Beaugrand</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+HonoreBeaugrandnames[i]+"</h3>"+"<p>"+HonoreBeaugrandaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+HonoreBeaugrandtypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Honor&eacute;-Beaugrand</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Radissonnames.length; i++)
	{
		if (Radissonnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Radissontypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Radissonaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Radissonsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Radissonnames[i]+"</h3>"+"<p>"+Radissonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Radissontypes[i]+"&nbsp;&nbsp; <a href=\""+Radissonsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Radisson</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Radissonnames[i]+"</h3>"+"<p>"+Radissonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Radissontypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Radisson</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Langeliernames.length; i++)
	{
		if (Langeliernames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Langeliertypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Langelieraddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Langeliersites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Langeliernames[i]+"</h3>"+"<p>"+Langelieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Langeliertypes[i]+"&nbsp;&nbsp; <a href=\""+Langeliersites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Langelier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Langeliernames[i]+"</h3>"+"<p>"+Langelieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Langeliertypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Langelier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Cadillacnames.length; i++)
	{
		if (Cadillacnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Cadillactypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Cadillacaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Cadillacsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Cadillacnames[i]+"</h3>"+"<p>"+Cadillacaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Cadillactypes[i]+"&nbsp;&nbsp; <a href=\""+Cadillacsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Cadillac</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Cadillacnames[i]+"</h3>"+"<p>"+Cadillacaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Cadillactypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Cadillac</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Assomptionnames.length; i++)
	{
		if (Assomptionnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Assomptiontypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Assomptionaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Assomptionsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Assomptionnames[i]+"</h3>"+"<p>"+Assomptionaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Assomptiontypes[i]+"&nbsp;&nbsp; <a href=\""+Assomptionsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Assomption</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Assomptionnames[i]+"</h3>"+"<p>"+Assomptionaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Assomptiontypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Assomption</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Viaunames.length; i++)
	{
		if (Viaunames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Viautypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Viauaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Viausites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Viaunames[i]+"</h3>"+"<p>"+Viauaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Viautypes[i]+"&nbsp;&nbsp; <a href=\""+Viausites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Viau</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Viaunames[i]+"</h3>"+"<p>"+Viauaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Viautypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Viau</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<PieIXnames.length; i++)
	{
		if (PieIXnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && PieIXtypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && PieIXaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(PieIXsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+PieIXnames[i]+"</h3>"+"<p>"+PieIXaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+PieIXtypes[i]+"&nbsp;&nbsp; <a href=\""+PieIXsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Pie-IX</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+PieIXnames[i]+"</h3>"+"<p>"+PieIXaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+PieIXtypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Pie-IX</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Joliettenames.length; i++)
	{
		if (Joliettenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Joliettetypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Jolietteaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Joliettesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Joliettenames[i]+"</h3>"+"<p>"+Jolietteaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Joliettetypes[i]+"&nbsp;&nbsp; <a href=\""+Joliettesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Joliette</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Joliettenames[i]+"</h3>"+"<p>"+Jolietteaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Joliettetypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Joliette</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Prefontainenames.length; i++)
	{
		if (Prefontainenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Prefontainetypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Prefontaineaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Prefontainesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Prefontainenames[i]+"</h3>"+"<p>"+Prefontaineaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Prefontainetypes[i]+"&nbsp;&nbsp; <a href=\""+Prefontainesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Pr&eacute;fontaine</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Prefontainenames[i]+"</h3>"+"<p>"+Prefontaineaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Prefontainetypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Pr&eacute;fontaine</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Frontenacnames.length; i++)
	{
		if (Frontenacnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Frontenactypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Frontenacaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Frontenacsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Frontenacnames[i]+"</h3>"+"<p>"+Frontenacaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Frontenactypes[i]+"&nbsp;&nbsp; <a href=\""+Frontenacsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Frontenac</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Frontenacnames[i]+"</h3>"+"<p>"+Frontenacaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Frontenactypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Frontenac</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Papineaunames.length; i++)
	{
		if (Papineaunames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Papineautypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Papineauaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Papineausites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Papineaunames[i]+"</h3>"+"<p>"+Papineauaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Papineautypes[i]+"&nbsp;&nbsp; <a href=\""+Papineausites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Papineau</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Papineaunames[i]+"</h3>"+"<p>"+Papineauaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Papineautypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Papineau</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Beaudrynames.length; i++)
	{
		if (Beaudrynames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Beaudrytypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Beaudryaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Beaudrysites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Beaudrynames[i]+"</h3>"+"<p>"+Beaudryaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Beaudrytypes[i]+"&nbsp;&nbsp; <a href=\""+Beaudrysites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Beaudry</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Beaudrynames[i]+"</h3>"+"<p>"+Beaudryaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Beaudrytypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Beaudry</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<SaintLaurentnames.length; i++)
	{
		if (SaintLaurentnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && SaintLaurenttypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && SaintLaurentaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(SaintLaurentsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+SaintLaurentnames[i]+"</h3>"+"<p>"+SaintLaurentaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+SaintLaurenttypes[i]+"&nbsp;&nbsp; <a href=\""+SaintLaurentsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Saint-Laurent</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+SaintLaurentnames[i]+"</h3>"+"<p>"+SaintLaurentaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+SaintLaurenttypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Saint-Laurent</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<PlaceDesArtsnames.length; i++)
	{
		if (PlaceDesArtsnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && PlaceDesArtstypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && PlaceDesArtsaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(PlaceDesArtssites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceDesArtsnames[i]+"</h3>"+"<p>"+PlaceDesArtsaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+PlaceDesArtstypes[i]+"&nbsp;&nbsp; <a href=\""+PlaceDesArtssites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Place-des-Arts</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceDesArtsnames[i]+"</h3>"+"<p>"+PlaceDesArtsaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+PlaceDesArtstypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Place-des-Arts</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<McGillnames.length; i++)
	{
		if (McGillnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && McGilltypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && McGilladdresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(McGillsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+McGillnames[i]+"</h3>"+"<p>"+McGilladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+McGilltypes[i]+"&nbsp;&nbsp; <a href=\""+McGillsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">McGill</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+McGillnames[i]+"</h3>"+"<p>"+McGilladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+McGilltypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">McGill</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Peelnames.length; i++)
	{
		if (Peelnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Peeltypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Peeladdresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Peelsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Peelnames[i]+"</h3>"+"<p>"+Peeladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Peeltypes[i]+"&nbsp;&nbsp; <a href=\""+Peelsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Peel</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Peelnames[i]+"</h3>"+"<p>"+Peeladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Peeltypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Peel</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Guynames.length; i++)
	{
		if (Guynames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Guytypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Guyaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Guysites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Guynames[i]+"</h3>"+"<p>"+Guyaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Guytypes[i]+"&nbsp;&nbsp; <a href=\""+Guysites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Guy-Concordia</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Guynames[i]+"</h3>"+"<p>"+Guyaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Guytypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Guy-Concordia</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Atwaternames.length; i++)
	{
		if (Atwaternames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Atwatertypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Atwateraddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Atwatersites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Atwaternames[i]+"</h3>"+"<p>"+Atwateraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Atwatertypes[i]+"&nbsp;&nbsp; <a href=\""+Atwatersites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Atwater</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Atwaternames[i]+"</h3>"+"<p>"+Atwateraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Atwatertypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Atwater</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Charlevoixnames.length; i++)
	{
		if (Charlevoixnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Charlevoixtypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Charlevoixaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Charlevoixsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Charlevoixnames[i]+"</h3>"+"<p>"+Charlevoixaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Charlevoixtypes[i]+"&nbsp;&nbsp; <a href=\""+Charlevoixsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Charlevoix</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Charlevoixnames[i]+"</h3>"+"<p>"+Charlevoixaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Charlevoixtypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Charlevoix</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<LaSallenames.length; i++)
	{
		if (LaSallenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && LaSalletypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && LaSalleaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(LaSallesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+LaSallenames[i]+"</h3>"+"<p>"+LaSalleaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+LaSalletypes[i]+"&nbsp;&nbsp; <a href=\""+LaSallesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">LaSalle</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+LaSallenames[i]+"</h3>"+"<p>"+LaSalleaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+LaSalletypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">LaSalle</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DeLEglisenames.length; i++)
	{
		if (DeLEglisenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DeLEglisetypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && DeLEgliseaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DeLEglisesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLEglisenames[i]+"</h3>"+"<p>"+DeLEgliseaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DeLEglisetypes[i]+"&nbsp;&nbsp; <a href=\""+DeLEglisesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">De L&#39;&Eacute;glise</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLEglisenames[i]+"</h3>"+"<p>"+DeLEgliseaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DeLEglisetypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">De L&#39;&Eacute;glise</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Verdunnames.length; i++)
	{
		if (Verdunnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Verduntypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Verdunaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Verdunsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Verdunnames[i]+"</h3>"+"<p>"+Verdunaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Verduntypes[i]+"&nbsp;&nbsp; <a href=\""+Verdunsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Verdun</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Verdunnames[i]+"</h3>"+"<p>"+Verdunaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Verduntypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Verdun</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Jolicoeurnames.length; i++)
	{
		if (Jolicoeurnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Jolicoeurtypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Jolicoeuraddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Jolicoeursites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Jolicoeurnames[i]+"</h3>"+"<p>"+Jolicoeuraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Jolicoeurtypes[i]+"&nbsp;&nbsp; <a href=\""+Jolicoeursites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Jolicoeur</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Jolicoeurnames[i]+"</h3>"+"<p>"+Jolicoeuraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Jolicoeurtypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Jolicoeur</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Monknames.length; i++)
	{
		if (Monknames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Monktypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Monkaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Monksites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Monknames[i]+"</h3>"+"<p>"+Monkaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Monktypes[i]+"&nbsp;&nbsp; <a href=\""+Monksites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Monk</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Monknames[i]+"</h3>"+"<p>"+Monkaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Monktypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Monk</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Angrignonnames.length; i++)
	{
		if (Angrignonnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Angrignontypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Angrignonaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Angrignonsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Angrignonnames[i]+"</h3>"+"<p>"+Angrignonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Angrignontypes[i]+"&nbsp;&nbsp; <a href=\""+Angrignonsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Angrignon</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Angrignonnames[i]+"</h3>"+"<p>"+Angrignonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Angrignontypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Angrignon</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Montmorencynames.length; i++)
	{
		if (Montmorencynames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Montmorencytypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Montmorencyaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Montmorencysites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Montmorencynames[i]+"</h3>"+"<p>"+Montmorencyaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Montmorencytypes[i]+"&nbsp;&nbsp; <a href=\""+Montmorencysites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Montmorency</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Montmorencynames[i]+"</h3>"+"<p>"+Montmorencyaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Montmorencytypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Montmorency</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DeLaConcordenames.length; i++)
	{
		if (DeLaConcordenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DeLaConcordetypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && DeLaConcordeaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DeLaConcordesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLaConcordenames[i]+"</h3>"+"<p>"+DeLaConcordeaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DeLaConcordetypes[i]+"&nbsp;&nbsp; <a href=\""+DeLaConcordesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">De La Concorde</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLaConcordenames[i]+"</h3>"+"<p>"+DeLaConcordeaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DeLaConcordetypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">De La Concorde</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Cartiernames.length; i++)
	{
		if (Cartiernames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Cartiertypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Cartieraddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Cartiersites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Cartiernames[i]+"</h3>"+"<p>"+Cartieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Cartiertypes[i]+"&nbsp;&nbsp; <a href=\""+Cartiersites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Cartier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Cartiernames[i]+"</h3>"+"<p>"+Cartieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Cartiertypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Cartier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<HenriBourassanames.length; i++)
	{
		if (HenriBourassanames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && HenriBourassatypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && HenriBourassaaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(HenriBourassasites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+HenriBourassanames[i]+"</h3>"+"<p>"+HenriBourassaaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+HenriBourassatypes[i]+"&nbsp;&nbsp; <a href=\""+HenriBourassasites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Henri-Bourassa</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+HenriBourassanames[i]+"</h3>"+"<p>"+HenriBourassaaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+HenriBourassatypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Henri-Bourassa</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Sauvenames.length; i++)
	{
		if (Sauvenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Sauvetypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Sauveaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Sauvesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Sauvenames[i]+"</h3>"+"<p>"+Sauveaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Sauvetypes[i]+"&nbsp;&nbsp; <a href=\""+Sauvesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Sauv&eacute;</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Sauvenames[i]+"</h3>"+"<p>"+Sauveaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Sauvetypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Sauv&eacute;</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Cremazienames.length; i++)
	{
		if (Cremazienames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Cremazietypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Cremazieaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Cremaziesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Cremazienames[i]+"</h3>"+"<p>"+Cremazieaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Cremazietypes[i]+"&nbsp;&nbsp; <a href=\""+Cremaziesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Cr&eacute;mazie</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Cremazienames[i]+"</h3>"+"<p>"+Cremazieaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Cremazietypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Cr&eacute;mazie</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Jarrynames.length; i++)
	{
		if (Jarrynames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Jarrytypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Jarryaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Jarrysites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Jarrynames[i]+"</h3>"+"<p>"+Jarryaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Jarrytypes[i]+"&nbsp;&nbsp; <a href=\""+Jarrysites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Jarry</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Jarrynames[i]+"</h3>"+"<p>"+Jarryaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Jarrytypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Jarry</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Beaubiennames.length; i++)
	{
		if (Beaubiennames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Beaubientypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Beaubienaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Beaubiensites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Beaubiennames[i]+"</h3>"+"<p>"+Beaubienaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Beaubientypes[i]+"&nbsp;&nbsp; <a href=\""+Beaubiensites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Beaubien</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Beaubiennames[i]+"</h3>"+"<p>"+Beaubienaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Beaubientypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Beaubien</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Rosemontnames.length; i++)
	{
		if (Rosemontnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Rosemonttypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Rosemontaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Rosemontsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Rosemontnames[i]+"</h3>"+"<p>"+Rosemontaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Rosemonttypes[i]+"&nbsp;&nbsp; <a href=\""+Rosemontsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Rosemont</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Rosemontnames[i]+"</h3>"+"<p>"+Rosemontaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Rosemonttypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Rosemont</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Lauriernames.length; i++)
	{
		if (Lauriernames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Lauriertypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Laurieraddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Lauriersites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Lauriernames[i]+"</h3>"+"<p>"+Laurieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Lauriertypes[i]+"&nbsp;&nbsp; <a href=\""+Lauriersites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Laurier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Lauriernames[i]+"</h3>"+"<p>"+Laurieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Lauriertypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Laurier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<MontRoyalnames.length; i++)
	{
		if (MontRoyalnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && MontRoyaltypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && MontRoyaladdresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(MontRoyalsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+MontRoyalnames[i]+"</h3>"+"<p>"+MontRoyaladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+MontRoyaltypes[i]+"&nbsp;&nbsp; <a href=\""+MontRoyalsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Mont-Royal</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+MontRoyalnames[i]+"</h3>"+"<p>"+MontRoyaladdresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+MontRoyaltypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Mont-Royal</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Sherbrookenames.length; i++)
	{
		if (Sherbrookenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Sherbrooketypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Sherbrookeaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Sherbrookesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Sherbrookenames[i]+"</h3>"+"<p>"+Sherbrookeaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Sherbrooketypes[i]+"&nbsp;&nbsp; <a href=\""+Sherbrookesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Sherbrooke</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Sherbrookenames[i]+"</h3>"+"<p>"+Sherbrookeaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Sherbrooketypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Sherbrooke</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<ChampDeMarsnames.length; i++)
	{
		if (ChampDeMarsnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && ChampDeMarstypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && ChampDeMarsaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(ChampDeMarssites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+ChampDeMarsnames[i]+"</h3>"+"<p>"+ChampDeMarsaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+ChampDeMarstypes[i]+"&nbsp;&nbsp; <a href=\""+ChampDeMarssites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Champ-de-Mars</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+ChampDeMarsnames[i]+"</h3>"+"<p>"+ChampDeMarsaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+ChampDeMarstypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Champ-de-Mars</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<PlaceDArmesnames.length; i++)
	{
		if (PlaceDArmesnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && PlaceDArmestypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && PlaceDArmesaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(PlaceDArmessites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceDArmesnames[i]+"</h3>"+"<p>"+PlaceDArmesaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+PlaceDArmestypes[i]+"&nbsp;&nbsp; <a href=\""+PlaceDArmessites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Place-d&#39;Armes</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceDArmesnames[i]+"</h3>"+"<p>"+PlaceDArmesaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+PlaceDArmestypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Place-d&#39;Armes</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<SquareVictorianames.length; i++)
	{
		if (SquareVictorianames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && SquareVictoriatypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && SquareVictoriaaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(SquareVictoriasites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+SquareVictorianames[i]+"</h3>"+"<p>"+SquareVictoriaaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+SquareVictoriatypes[i]+"&nbsp;&nbsp; <a href=\""+SquareVictoriasites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Square-Victoria&#8211;OACI</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+SquareVictorianames[i]+"</h3>"+"<p>"+SquareVictoriaaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+SquareVictoriatypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Square-Victoria&#8211;OACI</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Bonaventurenames.length; i++)
	{
		if (Bonaventurenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Bonaventuretypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Bonaventureaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Bonaventuresites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Bonaventurenames[i]+"</h3>"+"<p>"+Bonaventureaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Bonaventuretypes[i]+"&nbsp;&nbsp; <a href=\""+Bonaventuresites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Bonaventure</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Bonaventurenames[i]+"</h3>"+"<p>"+Bonaventureaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Bonaventuretypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Bonaventure</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<LucienLAlliernames.length; i++)
	{
		if (LucienLAlliernames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && LucienLAlliertypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && LucienLAllieraddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(LucienLAlliersites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+LucienLAlliernames[i]+"</h3>"+"<p>"+LucienLAllieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+LucienLAlliertypes[i]+"&nbsp;&nbsp; <a href=\""+LucienLAlliersites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Lucien-L&#39;Allier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+LucienLAlliernames[i]+"</h3>"+"<p>"+LucienLAllieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+LucienLAlliertypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Lucien-L&#39;Allier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<GeorgesVaniernames.length; i++)
	{
		if (GeorgesVaniernames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && GeorgesVaniertypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && GeorgesVanieraddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(GeorgesVaniersites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+GeorgesVaniernames[i]+"</h3>"+"<p>"+GeorgesVanieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+GeorgesVaniertypes[i]+"&nbsp;&nbsp; <a href=\""+GeorgesVaniersites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Georges-Vanier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+GeorgesVaniernames[i]+"</h3>"+"<p>"+GeorgesVanieraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+GeorgesVaniertypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Georges-Vanier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<PlaceSaintHenrinames.length; i++)
	{
		if (PlaceSaintHenrinames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && PlaceSaintHenritypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && PlaceSaintHenriaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(PlaceSaintHenrisites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceSaintHenrinames[i]+"</h3>"+"<p>"+PlaceSaintHenriaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+PlaceSaintHenritypes[i]+"&nbsp;&nbsp; <a href=\""+PlaceSaintHenrisites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Place-Saint-Henri</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceSaintHenrinames[i]+"</h3>"+"<p>"+PlaceSaintHenriaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+PlaceSaintHenritypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Place-Saint-Henri</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Vendomenames.length; i++)
	{
		if (Vendomenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Vendometypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Vendomeaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Vendomesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Vendomenames[i]+"</h3>"+"<p>"+Vendomeaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Vendometypes[i]+"&nbsp;&nbsp; <a href=\""+Vendomesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Vend&ocirc;me</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Vendomenames[i]+"</h3>"+"<p>"+Vendomeaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Vendometypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Vend&ocirc;me</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<VillaMarianames.length; i++)
	{
		if (VillaMarianames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && VillaMariatypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && VillaMariaaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(VillaMariasites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+VillaMarianames[i]+"</h3>"+"<p>"+VillaMariaaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+VillaMariatypes[i]+"&nbsp;&nbsp; <a href=\""+VillaMariasites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Villa-Maria</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+VillaMarianames[i]+"</h3>"+"<p>"+VillaMariaaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+VillaMariatypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Villa-Maria</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<CoteSainteCatherinenames.length; i++)
	{
		if (CoteSainteCatherinenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && CoteSainteCatherinetypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && CoteSainteCatherineaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(CoteSainteCatherinesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteSainteCatherinenames[i]+"</h3>"+"<p>"+CoteSainteCatherineaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+CoteSainteCatherinetypes[i]+"&nbsp;&nbsp; <a href=\""+CoteSainteCatherinesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">C&ocirc;te-Sainte-Catherine</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteSainteCatherinenames[i]+"</h3>"+"<p>"+CoteSainteCatherineaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+CoteSainteCatherinetypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">C&ocirc;te-Sainte-Catherine</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Plamondonnames.length; i++)
	{
		if (Plamondonnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Plamondontypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Plamondonaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Plamondonsites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Plamondonnames[i]+"</h3>"+"<p>"+Plamondonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Plamondontypes[i]+"&nbsp;&nbsp; <a href=\""+Plamondonsites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Plamondon</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Plamondonnames[i]+"</h3>"+"<p>"+Plamondonaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Plamondontypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Plamondon</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Namurnames.length; i++)
	{
		if (Namurnames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Namurtypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && Namuraddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Namursites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Namurnames[i]+"</h3>"+"<p>"+Namuraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Namurtypes[i]+"&nbsp;&nbsp; <a href=\""+Namursites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Namur</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Namurnames[i]+"</h3>"+"<p>"+Namuraddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+Namurtypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Namur</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DeLaSavanenames.length; i++)
	{
		if (DeLaSavanenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DeLaSavanetypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && DeLaSavaneaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DeLaSavanesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLaSavanenames[i]+"</h3>"+"<p>"+DeLaSavaneaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DeLaSavanetypes[i]+"&nbsp;&nbsp; <a href=\""+DeLaSavanesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">De La Savane</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLaSavanenames[i]+"</h3>"+"<p>"+DeLaSavaneaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DeLaSavanetypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">De La Savane</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DuCollegenames.length; i++)
	{
		if (DuCollegenames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DuCollegetypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && DuCollegeaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DuCollegesites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DuCollegenames[i]+"</h3>"+"<p>"+DuCollegeaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DuCollegetypes[i]+"&nbsp;&nbsp; <a href=\""+DuCollegesites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Du Coll&egrave;ge</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DuCollegenames[i]+"</h3>"+"<p>"+DuCollegeaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+DuCollegetypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Du Coll&egrave;ge</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<CoteVertunames.length; i++)
	{
		if (CoteVertunames[i].toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && CoteVertutypes[i].toLowerCase().indexOf(category.toLowerCase()) != -1 && CoteVertuaddresses[i].toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(CoteVertusites[i] != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteVertunames[i]+"</h3>"+"<p>"+CoteVertuaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+CoteVertutypes[i]+"&nbsp;&nbsp; <a href=\""+CoteVertusites[i]+"\">Site Web</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">C&ocirc;te-Vertu</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteVertunames[i]+"</h3>"+"<p>"+CoteVertuaddresses[i]+"&nbsp;&nbsp; Cat&eacute;gorie: "+CoteVertutypes[i]+"&nbsp;&nbsp; Aucun site Web disponible &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">C&ocirc;te-Vertu</b><br/><br/>";
			}
		}
	}
	
	if(document.getElementById("output").innerHTML == "")
	{
		document.getElementById("output").innerHTML += "<p><em lang=\"fr\">Aucuns r&eacute;sultats correspondent &agrave; votre saisie de recherche.</em></p>";
	}
}

window.onload = init;

//ALL SPOTS FOR ALL STATIONS
//TRANSFERS
var BerriUqamaddresses, BerriUqamnames, BerriUqamsites, BerriUqamtypes, LionelGroulxaddresses, LionelGroulxnames, LionelGroulxsites, LionelGroulxtypes,
	JeanTalonaddresses, JeanTalonnames, JeanTalonsites, JeanTalontypes, Snowdonaddresses, Snowdonnames, Snowdonsites, Snowdontypes;

//YELLOW LINE
var JeanDrapeauaddresses, JeanDrapeaunames, JeanDrapeausites, JeanDrapeautypes, Longueuiladdresses, Longueuilnames, Longueuilsites, Longueuiltypes;

//BLUE LINE
var SaintMicheladdresses, SaintMichelnames, SaintMichelsites, SaintMicheltypes, Ibervilleaddresses, Ibervillenames, Ibervillesites, Ibervilletypes,
	Fabreaddresses, Fabrenames, Fabresites, Fabretypes, DeCastelnauaddresses, DeCastelnaunames, DeCastelnausites, DeCastelnautypes,
	Parcaddresses, Parcnames, Parcsites, Parctypes, Acadieaddresses, Acadienames, Acadiesites, Acadietypes, Outremontaddresses, Outremontnames, Outremontsites, Outremonttypes,
	EdouardMontpetitaddresses, EdouardMontpetitnames, EdouardMontpetitsites, EdouardMontpetittypes, UdeMaddresses, UdeMnames, UdeMsites, UdeMtypes,
	CoteDesNeigesaddresses, CoteDesNeigesnames, CoteDesNeigessites, CoteDesNeigestypes;

//GREEN LINE
var HonoreBeaugrandaddresses, HonoreBeaugrandnames, HonoreBeaugrandsites, HonoreBeaugrandtypes, Radissonaddresses, Radissonnames, Radissonsites, Radissontypes,
	Langelieraddresses, Langeliernames, Langeliersites, Langeliertypes, Cadillacaddresses, Cadillacnames, Cadillacsites, Cadillactypes,
	Assomptionaddresses, Assomptionnames, Assomptionsites, Assomptiontypes, Viauaddresses, Viaunames, Viausites, Viautypes, PieIXaddresses, PieIXnames, PieIXsites, PieIXtypes,
	Jolietteaddresses, Joliettenames, Joliettesites, Joliettetypes, Prefontaineaddresses, Prefontainenames, Prefontainesites, Prefontainetypes,
	Frontenacaddresses, Frontenacnames, Frontenacsites, Frontenactypes, Papineauaddresses, Papineaunames, Papineausites, Papineautypes,
	Beaudryaddresses, Beaudrynames, Beaudrysites, Beaudrytypes, SaintLaurentaddresses, SaintLaurentnames, SaintLaurentsites, SaintLaurenttypes,
	PlaceDesArtsaddresses, PlaceDesArtsnames, PlaceDesArtssites, PlaceDesArtstypes, McGilladdresses, McGillnames, McGillsites, McGilltypes,
	Peeladdresses, Peelnames, Peelsites, Peeltypes, Guyaddresses, Guynames, Guysites, Guytypes, Atwateraddresses, Atwaternames, Atwatersites, Atwatertypes,
	Charlevoixaddresses, Charlevoixnames, Charlevoixsites, Charlevoixtypes, LaSalleaddresses, LaSallenames, LaSallesites, LaSalletypes,
	DeLEgliseaddresses, DeLEglisenames, DeLEglisesites, DeLEglisetypes, Verdunaddresses, Verdunnames, Verdunsites, Verduntypes,
	Jolicoeuraddresses, Jolicoeurnames, Jolicoeursites, Jolicoeurtypes, Monkaddresses, Monknames, Monksites, Monktypes,
	Angrignonaddresses, Angrignonnames, Angrignonsites, Angrignontypes;

//ORANGE LINE
var Montmorencyaddresses, Montmorencynames, Montmorencysites, Montmorencytypes, DeLaConcordeaddresses, DeLaConcordenames, DeLaConcordesites, DeLaConcordetypes,
	Cartieraddresses, Cartiernames, Cartiersites, Cartiertypes, HenriBourassaaddresses, HenriBourassanames, HenriBourassasites, HenriBourassatypes,
	Sauveaddresses, Sauvenames, Sauvesites, Sauvetypes, Cremazieaddresses, Cremazienames, Cremaziesites, Cremazietypes, Jarryaddresses, Jarrynames, JarrySites, Jarrytypes,
	Beaubienaddresses, Beaubiennames, Beaubiensites, Beaubientypes, Rosemontaddresses, Rosemontnames, Rosemontsites, Rosemonttypes,
	Laurieraddresses, Lauriernames, Lauriersites, Lauriertypes, MontRoyaladdresses, MontRoyalnames, MontRoyalsites, MontRoyaltypes,
	Sherbrookeaddresses, Sherbrookenames, Sherbrookesites, Sherbrooketypes, ChampDeMarsaddresses, ChampDeMarsnames, ChampDeMarssites, ChampDeMarstypes,
	PlaceDArmesaddresses, PlaceDArmesnames, PlaceDArmessites, PlaceDArmestypes, SquareVictoriaaddresses, SquareVictorianames, SquareVictoriasites, SquareVictoriatypes,
	Bonaventureaddresses, Bonaventurenames, Bonaventuresites, Bonaventuretypes, LucienLAllieraddresses, LucienLAlliernames, LucienLAlliersites, LucienLAlliertypes,
	GeorgesVanieraddresses, GeorgesVaniernames, GeorgesVaniersites, GeorgesVaniertypes, PlaceSaintHenriaddresses, PlaceSaintHenrinames, PlaceSaintHenrisites, PlaceSaintHenritypes,
	Vendomeaddresses, Vendomenames, Vendomesites, Vendometypes, VillaMariaaddresses, VillaMarianames, VillaMariasites, VillaMariatypes,
	CoteSainteCatherineaddresses, CoteSainteCatherinenames, CoteSainteCatherinesites, CoteSainteCatherinetypes,
	Plamondonaddresses, Plamondonnames, Plamondonsites, Plamondontypes, Namuraddresses, Namurnames, Namursites, Namurtypes,
	DeLaSavaneaddresses, DeLaSavanenames, DeLaSavanesites, DeLaSavanetypes, DuCollegeaddresses, DuCollegenames, DuCollegesites, DuCollegetypes,
	CoteVertuaddresses, CoteVertunames, CoteVertusites, CoteVertutypes;

var allspots;
