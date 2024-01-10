function init(){
	//SET VALUES
	//TRANSFERS
	BerriUQAM = [{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al", type: "University", address: "405 Rue Sainte-Catherine Est", site: "http://www.uqam.ca/"},
	{name: "Grande Biblioth&egrave;que de Montr&eacute;al", type: "Library", address: "475 Boulevard de Maisonneuve Est", site: "https://www.banq.qc.ca/accueil/index.html?language_id=1"},
	{name: "Gare d&#39;Autocars de Montr&eacute;al", type: "Bus Terminal", address: "1717 Rue Berri", site: "http://www.gamtl.com/en/bienvenue/default.aspx"},
	{name: "Th&eacute;&acirc;tre Saint-Denis", type: "Theatre", address: "1594 Rue Saint-Denis", site: "https://theatrestdenis.com/en/"},
	{name: "Place Dupuis", type: "Mall", address: "845 Rue Sainte-Catherine Est", site: "https://busac.com/project/place-dupuis-montreal-qc/"},
	{name: "H&ocirc;tel Place Dupuis Montr&eacute;al", type: "Hotel", address: "1415 Rue Saint-Hubert", site: "https://www.choicehotels.com/quebec/montreal/ascend-hotels/cnb60?mc=llyxcncnnbl&pmf=canada"},
	{name: "Warner Brothers Montr&eacute;al", type: "Office", address: "888 Boulevard de Maisonneuve Est", site: "http://wbgamesmontreal.com/"},
	{name: "(defunct) DaGiovanni", type: "Restaurant", address: "572 Rue Sainte-Catherine Est", site: "http://www.dagiovanni.ca/"},
	{name: "Place &Eacute;milie-Gamelin", type: "Park", address: "1500 Rue Berri", site: "http://www.quartierdesspectacles.com/en/location/29/place-emilie-gamelin/page-1"},
	{name: "The Village", type: "District", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/village-montreal"},
	{name: "Latin Quarter", type: "District", address: "", site: "http://www.quartierlatin.ca/en/"},
	{name: "H&ocirc;tel Labelle", type: "Hotel", address: "1205 Rue Labelle", site: "https://www.hotellabelle.com/copie-de-accueil"},
	{name: "H&ocirc;tel Le Roberval", type: "Hotel", address: "505 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://www.leroberval.com/copie-de-accueil"},
	{name: "H&ocirc;tel St-Denis", type: "Hotel", address: "1254 Rue Saint-Denis", site: "https://en.hotel-st-denis.com/"},
	{name: "C&eacute;gep du Vieux Montr&eacute;al", type: "College", address: "255 Rue Ontario Est", site: "http://www.cvm.qc.ca/Pages/index.aspx"},
	{name: "Parc Toussaint-Louverture", type: "Park", address: "127 Boulevard de Maisonneuve Est", site: "https://montreal.ca/en/places/parc-toussaint-louverture"},
	{name: "Chapelle Notre-Dame-de-Lourdes", type: "Church", address: "430 Rue Sainte-Catherine Est", site: "https://cndlm.org/"},
	{name: "Corporation d&#39;Habitation Jeanne-Mance", type: "Residence", address: "150 Rue Ontario Est", site: "http://www.chjm.ca/fr/"},
	{name: "La Cin&eacute;math&egrave;que Qu&eacute;b&eacute;coise", type: "Museum", address: "335 Boulevard de Maisonneuve Est", site: "https://www.cinematheque.qc.ca/en"},
	{name: "Institut National de l&#39;Image et du Son", type: "School", address: "301 Boulevard de Maisonneuve Est", site: "https://www.inis.qc.ca/english"},
	{name: "Centre Pierre-P&eacute;ladeau", type: "Theatre", address: "300 Boulevard de Maisonneuve Est", site: "http://www.centrepierrepeladeau.uqam.ca/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, &Eacute;cole de Design", type: "University", address: "1440 Rue Sanguinet", site: "https://design.uqam.ca/"},
	{name: "Parc Saint-Jacques", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-saint-jacques"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Judith-Jasmin Pavilion", type: "University", address: "1564 Rue Saint-Denis", site: "http://carte.uqam.ca/pavillon-je"},
	{name: "H&ocirc;tel Le Relais Lyonnais", type: "Hotel", address: "1595 Rue Saint-Denis", site: "http://lerelaislyonnais.com/en/"},
	{name: "Auberge Le Pomerol", type: "Hotel", address: "819 Boulevard de Maisonneuve Est", site: "https://www.aubergelepomerol.com/en/"},
	{name: "Empire Suites", type: "Hotel", address: "1606 Rue Saint-Hubert", site: "#"},
	{name: "H&ocirc;tel Lelux", type: "Hotel", address: "1600 Rue Saint-Hubert", site: "https://lelux-hotel-montreal.at-hotels.com/en/"},
	{name: "Ville-Marie Borough Hall", type: "Government", address: "800 Boulevard de Maisonneuve Est", site: "https://montreal.ca/en/places/ville-marie-borough-hall"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Department of Music", type: "University", address: "1440 Rue Saint-Denis", site: "https://musique.uqam.ca/"},
	{name: "Place Pasteur", type: "Park", address: "", site: "https://montreal.ca/en/places/place-pasteur"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Hubert-Aquin Pavilion", type: "University", address: "400 Rue Sainte-Catherine Est", site: "https://carte.uqam.ca/pavillon-a"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Th&eacute;r&egrave;se-Casgrain Pavilion", type: "University", address: "455 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://carte.uqam.ca/pavillon-w"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Paul-G&eacute;rin-Lajoie Pavilion", type: "University", address: "1205 Rue Saint-Denis", site: "https://carte.uqam.ca/pavillon-n"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Management Science Pavilion", type: "University", address: "315 Rue Sainte-Catherine Est", site: "https://carte.uqam.ca/pavillon-r"},
	{name: "Fairfield Inn by Marriott Montreal Downtown", type: "Hotel", address: "1199 Rue Berri", site: "https://www.marriott.com/hotels/travel/yulfd-fairfield-montreal-downtown/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Sports Centre", type: "Sports", address: "1212 Rue Sanguinet", site: "https://carte.uqam.ca/pavillon-cs"},
	{name: "Biblioth&egrave;que Saint-Sulpice", type: "Library", address: "1700 Rue Saint-Denis", site: "https://banq-saint-sulpice.business.site/"},
	{name: "Boxotel", type: "Hotel", address: "175 Rue Ontario Est", site: "https://www.boxotel.com/"},
	{name: "H&eacute;ritage Victorien", type: "Hotel", address: "305 Rue Ontario Est", site: "http://www.montrealbedandbreakfast.ca/index.html"},
	{name: "Cath&eacute;drale Saint-Jacques", type: "Church", address: "1455 Rue Saint-Denis", site: "#"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Biblioth&egrave;que Centrale", type: "Library", address: "400 Rue Sainte-Catherine Est", site: "https://bibliotheques.uqam.ca/bibliotheque/centrale/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, J.-A.-DeS&egrave;ve Pavilion", type: "University", address: "320 Rue Sainte-Catherine Est", site: "https://carte.uqam.ca/pavillon-ds"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Saint-Denis Pavilion", type: "University", address: "1290 Rue Saint-Denis", site: "https://carte.uqam.ca/pavillon-ab"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Faculty of Political Science and Law", type: "University", address: "400 Rue Sainte-Catherine Est", site: "https://fspd.uqam.ca/"}];
	
	JeanTalon = [{name: "Tour Jean-Talon", type: "Office", address: "600 Rue Jean-Talon Est", site: "https://montrealundergroundcity.com/tour/tour-jean-talon/"},
	{name: "March&eacute; Jean-Talon", type: "Market", address: "7070 Avenue Henri-Julien", site: "https://www.marchespublics-mtl.com/en/marches/jean-talon-market/"},
	{name: "Plaza Saint-Hubert", type: "Shopping", address: "6841 Rue Saint-Hubert", site: "https://www.plazasthubert.com/en/"},
	{name: "R&eacute;sidence Alfredo-Gagliardi", type: "Residence", address: "7170 Rue Berri", site: "https://www.residencesenharmonie.qc.ca/en/residences/alfredo-gagliardi-residence"},
	{name: "Casa D&#39;Italia", type: "Cultural Centre", address: "505 Rue Jean-Talon Est", site: "https://www.casaditalia.org/"},
	{name: "St. George Antiochian Orthodox Church", type: "Church", address: "575 Rue Jean-Talon Est", site: "https://saintgeorgemontreal.org/"},
	{name: "Parc Le Pr&eacute;vost", type: "Park", address: "7275 Avenue Christophe-Colomb", site: "https://montreal.ca/en/places/parc-le-prevost"},
	{name: "Patro Villeray", type: "Cultural Centre", address: "7355 Avenue Christophe-Colomb", site: "https://patrovilleray.ca/"},
	{name: "&Eacute;cole Saint-Ars&egrave;ne", type: "School", address: "6972 Avenue Christophe-Colomb", site: "https://st-arsene.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;glise Saint-Ars&egrave;ne", type: "Church", address: "1015 Rue B&eacute;langer", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-arsene"},
	{name: "&Eacute;glise Notre-Dame-de-la-D&eacute;fense", type: "Church", address: "6800 Avenue Henri-Julien", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/notre-dame-de-la-defense-italiens"},
	{name: "Parc Dante", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-dante"},
	{name: "Maison de la Culture Claude-L&eacute;veill&eacute;e", type: "Cultural Centre", address: "911 Rue Jean-Talon Est", site: "https://montreal.ca/en/places/maison-de-la-culture-claude-leveillee"}];
	
	LionelGroulx = [{name: "March&eacute; Atwater", type: "Market", address: "138 Avenue Atwater", site: "https://www.marchespublics-mtl.com/en/marches/atwater-market/"},
	{name: "Parc Vinet", type: "Park", address: "550 Rue Vinet", site: "https://montreal.ca/en/places/parc-vinet"},
	{name: "Th&eacute;&acirc;tre Corona", type: "Theatre", address: "2490 Rue Notre-Dame Ouest", site: "https://www.theatrecorona.ca/en/"},
	{name: "Parc Victor-Rousselot", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-victor-rousselot"},
	{name: "&Eacute;cole Victor-Rousselot", type: "School", address: "3525 Rue Sainte-&Eacute;milie", site: "https://victor-rousselot.cssdm.gouv.qc.ca/"},
	{name: "Lemay, Montreal offices", type: "Office", address: "3500 Rue Saint-Jacques", site: "https://lemay.com/"},
	{name: "&Eacute;glise Saint-Ir&eacute;n&eacute;e-de-Lyon", type: "Church", address: "3030 Rue Delisle", site: "http://st-irenee.org/accueil"},
	{name: "Habitations Workman-Delisle", type: "Residence", address: "2705 Rue Workman", site: "https://www.omhm.qc.ca/en/tenant-services/habitations-workman-delisle-5/"},
	{name: "Joe Beef", type: "Restaurant", address: "2491 Rue Notre-Dame Ouest", site: "https://joebeef.squarespace.com/"},
	{name: "Barley Bar &agrave; C&eacute;r&eacute;ales", type: "Restaurant", address: "2613 Rue Notre-Dame Ouest", site: "https://barleybar.ca/"}];
	
	Snowdon = [{name: "Oratoire Saint-Joseph", type: "Church", address: "3800 Chemin Queen-Mary", site: "https://www.saint-joseph.org/"},
	{name: "C&ocirc;te-des-Neiges / N.D.G. Borough Hall", type: "Government", address: "5160 Boulevard D&eacute;carie", site: "https://montreal.ca/en/cote-des-neiges-notre-dame-de-grace"},
	{name: "&Eacute;cole Iona", type: "School", address: "5000 Avenue Iona", site: "https://iona.cssdm.gouv.qc.ca/"},
	{name: "Deli Snowdon", type: "Restaurant", address: "5265 Boulevard D&eacute;carie", site: "http://www.snowdondeli.com/en/"}];
	
	//YELLOW LINE
	JeanDrapeau = [{name: "La Ronde", type: "Theme Park", address: "22 Chemin Macdonald", site: "http://www.laronde.com/"},
	{name: "Parc Jean-Drapeau", type: "Island", address: "1 Circuit Gilles-Villeneuve", site: "http://www.parcjeandrapeau.com/en"},
	{name: "Casino de Montr&eacute;al", type: "Casino", address: "1 Avenue du Casino", site: "https://casinos.lotoquebec.com/en/montreal/home"},
	{name: "Circuit Gilles-Villeneuve", type: "Sports", address: "Parc Jean-Drapeau", site: "https://www.parcjeandrapeau.com/en/circuit-gilles-villeneuve-montreal/"},
	{name: "Biosph&egrave;re", type: "Museum", address: "160 Chemin du Tour de l&#39;Isle", site: "https://www.canada.ca/en/environment-climate-change/services/biosphere.html"},
	{name: "Plage Jean-Dor&eacute;", type: "Beach", address: "151 Circuit Gilles-Villeneuve", site: "https://www.parcjeandrapeau.com/en/jean-dore-beach-sand-swimming-sun-montreal/"},
	{name: "&Icirc;le Notre-Dame", type: "Island", address: "", site: "#"}];
	
	Longueuil = [{name: "Terminus Longueuil", type: "Bus Terminal", address: "120 Place Charles-Lemoyne", site: "https://exo.quebec/en/trip-planner/intermodal-installations/longueuil-terminal"},
	{name: "Universit&eacute; de Sherbrooke, Longueuil campus", type: "University", address: "150 Place Charles-Lemoyne", site: "http://www.usherbrooke.ca/longueuil/"},
	{name: "Universit&eacute; de Montr&eacute;al, Longueuil campus", type: "University", address: "101 Place Charles-Lemoyne", site: "https://www.umontreal.ca/nos-campus/longueuil/"},
	{name: "H&ocirc;tel Sandman Longueuil", type: "Hotel", address: "999 Rue de S&eacute;rigny", site: "https://www.sandmanhotels.com/locations/quebec/montreal-longueuil/hotels/montreal-longueuil-mol"},
	{name: "H&ocirc;tel Le Dauphin Montr&eacute;al-Longueuil", type: "Hotel", address: "1055 Rue Saint-Laurent Ouest", site: "https://www.hotelsdauphin.ca/en/hotels/montreal-longueuil/"},
	{name: "Place Longueuil", type: "Mall", address: "825 Rue Saint-Laurent Ouest", site: "https://www.placelongueuil.com/"},
	{name: "A&eacute;roport de Saint-Hubert", type: "Airport", address: "5700 Route de l&#39;A&eacute;roport", site: "http://www.dashl.ca/en"},
	{name: "CDI College, Longueuil campus", type: "College", address: "1111 Rue Saint-Charles Ouest", site: "https://www.cdicollege.ca/quebec/campuses/longueuil/"},
	{name: "Commission de Protection du Territoire Agricole du Qu&eacute;bec", type: "Agency", address: "25 Boulevard La Fayette", site: "http://www.cptaq.gouv.qc.ca/"},
	{name: "Axc&egrave;s Saint-Charles", type: "Residence", address: "1155 Rue Saint-Charles Ouest", site: "https://habitationstrigone.com/en/dwellings/axces-saint-charles/"},
	{name: "L&#39;Estuaire III", type: "Residence", address: "70 Rue de la Barre", site: "http://estuaire3.ca/"},
	{name: "Le D&#39;Assigny", type: "Residence", address: "110 Rue de la Barre", site: "https://groupemercille.com/residential/3-12#le-dassigny"},
	{name: "Revenu Qu&eacute;bec, Longueuil offices", type: "Agency", address: "825 Rue Saint-Laurent Ouest", site: "https://www.revenuquebec.ca/en/"},
	{name: "Tribunal Administratif du Logement du Qu&eacute;bec, Longueuil offices", type: "Agency", address: "201 Place Charles-Lemoyne", site: "https://www.tal.gouv.qc.ca/en"},
	{name: "Les Habitats Lafayette", type: "Residence", address: "100 Boulevard La Fayette", site: "http://www.residences6etoiles.com/en/lafayette.html"},
	{name: "SSQ Insurance, Longueuil offices", type: "Office", address: "1225 Rue Saint-Charles Ouest", site: "https://ssq.ca/en"},
	{name: "Canadian Space Agency", type: "Agency", address: "6767 Route de l&#39;A&eacute;roport", site: "https://www.asc-csa.gc.ca/eng/default.asp"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Longueuil campus", type: "University", address: "150 Place Charles-Lemoyne", site: "https://etudier.uqam.ca/campus/longueuil"},
	{name: "&Eacute;cole Secondaire Saint-Jean-Baptiste", type: "School", address: "705 Rue Duvernay", site: "https://saintjeanbaptiste.ecoles.csmv.qc.ca"},
	{name: "&Eacute;cole du Cur&eacute;-Lequin", type: "School", address: "653 Rue Pr&eacute;fontaine", site: "https://cure-lequin.ecoles.csmv.qc.ca"},
	{name: "&Eacute;cole Saint-Jude", type: "School", address: "653 Rue Pr&eacute;fontaine", site: "https://cure-lequin.ecoles.csmv.qc.ca"}];
	
	//BLUE LINE
	SaintMichel = [{name: "Little Maghreb", type: "District", address: "", site: "#"},
	{name: "Parc Fran&ccedil;ois-Perrault", type: "Park", address: "7525 Rue Fran&ccedil;ois-Perrault", site: "https://montreal.ca/en/places/parc-francois-perrault"},
	{name: "Biblioth&egrave;que de Saint-Michel", type: "Library", address: "7601 Rue Fran&ccedil;ois-Perrault", site: "https://montreal.ca/en/places/bibliotheque-de-saint-michel"},
	{name: "John F. Kennedy High School", type: "School", address: "3030 Rue Villeray", site: "http://jfkhighschoolemsb.com/"},
	{name: "Parc Sandro-Pertini", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-sandro-pertini"},
	{name: "&Eacute;cole Saint-Mathieu", type: "School", address: "7230 8e Avenue", site: "https://st-mathieu.csdm.ca/"},
	{name: "&Eacute;cole Joseph-Fran&ccedil;ois-Perrault", type: "School", address: "7450 Rue Fran&ccedil;ois-Perrault", site: "https://joseph-francois-perrault.csdm.ca/"},
	{name: "Parc Shaughnessy", type: "Park", address: "7634 17e Avenue", site: "https://montreal.ca/en/places/parc-shaughnessy"},
	{name: "Parc Joseph-Robin", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-joseph-robin"},
	{name: "Parc Michel-Ange", type: "Park", address: "3615 Rue Michel-Ange", site: "#"},
	{name: "Parc du Ruisseau-du-Pont-&agrave;-l&#39;Avoine", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-du-ruisseau-du-pont-lavoine"},
	{name: "Le Boulevard", type: "Mall", address: "4270 Rue Jean-Talon Est", site: "https://www.centreboulevard.com/en/"},
	{name: "R&eacute;sidence Le St-Michel", type: "Residence", address: "7070 Boulevard Saint-Michel", site: "https://www.residencelesaintmichel.ca/en"},
	{name: "&Eacute;glise de Dieu de la Proph&eacute;tie", type: "Church", address: "7277 Boulevard Saint-Michel", site: "https://egliselaprophetie.com/"},
	{name: "Best Western H&ocirc;tel Montr&eacute;al M&eacute;tropolitain", type: "Hotel", address: "3400 Boulevard Cr&eacute;mazie Est", site: "https://www.bestwestern.com/en_US/book/hotels-in-montreal/hotel-montreal-metropolitain-bw-premier-collection/propertyCode.67031.html"}];
	
	Iberville = [{name: "P&acirc;tisserie La Conca D&#39;Oro", type: "Shopping", address: "2550 Rue Jean-Talon Est", site: "https://www.laconcadoro.net/"},
	{name: "Parc Gabriel-Sagard", type: "Park", address: "7069 Rue Sagard", site: "https://montreal.ca/en/places/parc-gabriel-sagard"},
	{name: "&Eacute;cole Saint-Barth&eacute;lemy", type: "School", address: "7081 Avenue des &Eacute;rables", site: "https://st-barthelemy.csdm.ca/"},
	{name: "&Eacute;glise Biblique Pierre Angulaire", type: "Church", address: "2200 Rue Jean-Talon Est", site: "#"},
	{name: "Parc Molson", type: "Park", address: "2473 Rue Beaubien Est", site: "https://montreal.ca/en/places/parc-molson"},
	{name: "Paroisse Saint-Mathieu", type: "Church", address: "2600 Rue Jean-Talon Est", site: "https://www.diocesemontreal.org/en/lets-connect/churches-parishes/saint-mathieu"},
	{name: "Paroisse Saint-Barth&eacute;lemy", type: "Church", address: "7137 Avenue des &Eacute;rables", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-barthelemy"}];
	
	Fabre = [{name: "&Eacute;glise Notre-Dame-de-la-Consolata", type: "Church", address: "1700 Rue Jean-Talon Est", site: "https://www.paroisseconsolatamtl.ca/"},
	{name: "H&ocirc;pital Jean-Talon", type: "Hospital", address: "1385 Rue Jean-Talon Est", site: "https://www.ciusssnordmtl.ca/installations/hopitaux/hopital-jean-talon/"},
	{name: "Parc de Turin", type: "Park", address: "7205 Rue Chambord", site: "https://montreal.ca/en/places/parc-de-turin"},
	{name: "&Eacute;cole Saint-Gabriel-Lalemant", type: "School", address: "7350 Rue Garnier", site: "https://st-gabriel-lalemant.csdm.ca/"},
	{name: "&Eacute;cole Pierre Elliott Trudeau", type: "School", address: "6855 Rue Cartier", site: "https://www.emsb.qc.ca/trudeau"},
	{name: "La Baie des Fromages", type: "Shopping", address: "1715 Rue Jean-Talon Est", site: "https://en.labaiadeiformaggi.com/"}];
	
	DeCastelnau = [{name: "Little Italy", type: "District", address: "", site: "https://www.mtl.org/en/experience/welcome-little-italy"},
	{name: "March&eacute; Jean-Talon", type: "Market", address: "7070 Avenue Henri-Julien", site: "https://www.marchespublics-mtl.com/en/marches/jean-talon-market/"},
	{name: "Parc Jarry", type: "Park", address: "285 Rue Gary-Carter", site: "https://montreal.ca/en/places/parc-jarry"},
	{name: "Stade IGA", type: "Sports", address: "285 Rue Gary-Carter", site: "http://stadeiga.com/en/"},
	{name: "&Eacute;cole Sainte-C&eacute;cile", type: "School", address: "7230 Avenue de Gasp&eacute;", site: "https://ste-cecile.csdm.ca/"},
	{name: "Saint Nicholas Antiochian Orthodox Church", type: "Church", address: "80 Rue de Castelnau Est", site: "http://stnicholasmtl.com/"},
	{name: "&Eacute;glise Sainte-C&eacute;cile", type: "Church", address: "7390 Avenue Henri-Julien", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/sainte-cecile"},
	{name: "Parc Victorien-Pesant", type: "Park", address: "7345 Avenue de Gasp&eacute;", site: "https://montreal.ca/en/places/parc-victorien-pesant"},
	{name: "Parc de la Petite-Italie", type: "Park", address: "6634 Rue Clark", site: "https://montreal.ca/en/places/parc-de-la-petite-italie"},
	{name: "Parc Guglielmo-Marconi", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-guglielmo-marconi"},
	{name: "Fruiterie Milano", type: "Shopping", address: "6862 Boulevard Saint-Laurent", site: "https://milanofruiterie.ca/"},
	{name: "Place Shamrock", type: "Park", address: "70 Avenue Shamrock", site: "https://montreal.ca/en/places/place-shamrock"}];
	
	Parc = [{name: "&Eacute;cole de Sant&eacute; Publique de l&#39;Universit&eacute; de Montr&eacute;al", type: "University", address: "7101 Avenue du Parc", site: "https://espum.umontreal.ca/english/home/"},
	{name: "Centre William-Hingston", type: "School", address: "419 Rue Saint-Roch", site: "https://centre-william-hingston.csdm.ca/"},
	{name: "Parc Saint-Roch", type: "Park", address: "443 Avenue Ball", site: "https://montreal.ca/en/places/parc-saint-roch"}];
	
	Acadie = [{name: "Altasciences", type: "Pharmacy", address: "1100 Avenue Beaumont", site: "https://www.altasciences.com/"},
	{name: "March&eacute; Central", type: "Mall", address: "9187 Boulevard de l&#39;Acadie", site: "https://www.marchecentral.com/en"},
	{name: "Parc Hamilton", type: "Park", address: "", site: "#"},
	{name: "Universit&eacute; de Montr&eacute;al, MIL campus", type: "University", address: "1375 Avenue Th&eacute;r&egrave;se-Lavoie-Roux", site: "https://campusmil.umontreal.ca/"}];
	
	Outremont = [{name: "Th&eacute;&acirc;tre Outremont", type: "Theatre", address: "1248 Avenue Bernard Ouest", site: "http://www.theatreoutremont.ca/en/accueil/"},
	{name: "Parc Pratt", type: "Park", address: "795 Avenue Dunlop", site: "https://montreal.ca/en/places/parc-pratt"},
	{name: "Parc Raoul-Dandurand", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-raoul-dandurand"},
	{name: "Parc John-F.-Kennedy", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-john-f-kennedy"},
	{name: "Coll&egrave;ge Stanislas", type: "School", address: "780 Boulevard Dollard", site: "http://www.stanislas.qc.ca/montreal/"},
	{name: "Ar&eacute;na d&#39;Outremont", type: "Sports", address: "999 Avenue McEachran", site: "https://montreal.ca/en/places/arena-doutremont"},
	{name: "&Eacute;cole Internationale Guy-Drummond", type: "School", address: "1475 Avenue Lajoie", site: "https://guydrummond.ecoleoutremont.com/"},
	{name: "&Eacute;cole Primaire Lajoie", type: "School", address: "1276 Avenue Lajoie", site: "https://lajoie.ecoleoutremont.com/"}];
	
	EdouardMontpetit = [{name: "CEPSUM", type: "Sports", address: "2100 Boulevard &Eacute;douard-Montpetit", site: "https://www.cepsum.umontreal.ca/"},
	{name: "&Eacute;cole de Musique Vincent-d&#39;Indy", type: "College", address: "628 Chemin de la C&ocirc;te-Sainte-Catherine", site: "http://www.emvi.qc.ca/"},
	{name: "&Eacute;cole Saint-Germain-d&#39;Outremont", type: "School", address: "46 Avenue Vincent-d&#39;Indy", site: "https://www.csmb.qc.ca/fr-CA/enseignement/primaire/ecoles/liste/saint-germain-doutremont.aspx"},
	{name: "Paroisse Saint-Germain-d&#39;Outremont", type: "Church", address: "28 Avenue Vincent-d&#39;Indy", site: "https://paroisse-saint-germain.org/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Music", type: "University", address: "200 Avenue Vincent-d&#39;Indy", site: "https://musique.umontreal.ca/en/home/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Nursing Sciences", type: "University", address: "2375 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://fsi.umontreal.ca/accueil/"},
	{name: "Cath&eacute;drale Orthodoxe Grecque Saint-Georges", type: "Church", address: "2455 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://hcgm.org/churches/st-george-cathedral/"},
	{name: "&Eacute;glise Saint-Albert-le-Grand", type: "Church", address: "2715 Chemin de la C&ocirc;te-Sainte-Catherine", site: "http://www.st-albert.org/"}];
	
	UdeM = [{name: "Universit&eacute; de Montr&eacute;al", type: "University", address: "2900 Boulevard &Eacute;douard-Montpetit", site: "https://www.umontreal.ca/en/"},
	{name: "Coll&egrave;ge Jean-de-Br&eacute;beuf", type: "College", address: "3200 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.brebeuf.qc.ca/"},
	{name: "CHU Sainte-Justine", type: "Hospital", address: "3175 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.chusj.org/Home"},
	{name: "HEC Montr&eacute;al", type: "School", address: "3000 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.hec.ca/en/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Environmental Design", type: "University", address: "2940 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://amenagement.umontreal.ca/accueil/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Medicine", type: "University", address: "2900 Boulevard &Eacute;douard-Montpetit", site: "https://medecine.umontreal.ca/medical-school/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Pharmacy", type: "University", address: "2940 Chemin de Polytechnique", site: "https://pharm.umontreal.ca/english/home/"},
	{name: "Polytechnique Montr&eacute;al", type: "University", address: "2500 Chemin de Polytechnique", site: "https://www.polymtl.ca/en/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Arts and Sciences", type: "University", address: "3150 Rue Jean-Brillant", site: "https://fas.umontreal.ca/accueil/"},
	{name: "Universit&eacute; de Montr&eacute;al, Department of Pharmacology and Physiology", type: "University", address: "2960 Chemin de la Tour", site: "https://pharmacologie-physiologie.umontreal.ca/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Law", type: "University", address: "3101 Chemin de la Tour", site: "https://droit.umontreal.ca/en/home/"},
	{name: "Universit&eacute; de Montr&eacute;al, Department of Computer Science and Operations Research", type: "University", address: "2920 Chemin de la Tour", site: "https://diro.umontreal.ca/english/home/"},
	{name: "Universit&eacute; de Montr&eacute;al, Biblioth&egrave;que des Lettres et Sciences Humaines", type: "Library", address: "3000 Rue Jean-Brillant", site: "https://bib.umontreal.ca/travailler/les-bibliotheques/lettres-sciences-humaines"}];
	
	CoteDesNeiges = [{name: "Cimeti&egrave;re Notre-Dame-des-Neiges", type: "Cemetery", address: "4601 Chemin de la C&ocirc;te-des-Neiges", site: "https://www.cimetierenotredamedesneiges.ca/en"},
	{name: "Oratoire Saint-Joseph", type: "Church", address: "3800 Chemin Queen-Mary", site: "https://www.saint-joseph.org/en/"},
	{name: "Jewish General Hospital", type: "Hospital", address: "3755 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.jgh.ca/"},
	{name: "CHU Sainte-Justine", type: "Hospital", address: "3175 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.chusj.org/Home"},
	{name: "Maison de la Culture C&ocirc;te-des-Neiges", type: "Theatre", address: "5290 Chemin de la C&ocirc;te-des-Neiges", site: "http://ville.montreal.qc.ca/culture/en/maison-de-la-culture-de-cote-des-neiges"},
	{name: "Centre Communautaire de Loisir de la C&ocirc;te-des-Neiges", type: "Cultural Centre", address: "5347 Chemin de la C&ocirc;te-des-Neiges", site: "https://celocdn.org/"},
	{name: "Parc Jean-Brillant", type: "Park", address: "5252 Avenue Decelles", site: "https://montreal.ca/en/places/parc-jean-brillant-cote-des-neiges-notre-dame-de-grace"},
	{name: "&Eacute;cole de Th&eacute;ologie &Eacute;vang&eacute;lique du Qu&eacute;bec", type: "School", address: "4824 Chemin de la C&ocirc;te-des-Neiges", site: "https://www.eteq.ca/d8/en"},
	{name: "Centre Hospitalier de St. Mary", type: "Hospital", address: "3830 Avenue Lacombe", site: "http://www.smhc.qc.ca/en/"},
	{name: "&Eacute;cole Notre-Dame-des-Neiges", type: "School", address: "5309 Chemin de la C&ocirc;te-des-Neiges", site: "https://notre-dame-des-neiges.cssdm.gouv.qc.ca/"},
	{name: "March&eacute; Jean-Brillant", type: "Market", address: "", site: "https://sdc-cotedesneiges.ca/en/etablissements/jean-brillant-market/"},
	{name: "&Eacute;glise Notre-Dame-des-Neiges", type: "Church", address: "5366 Chemin de la C&ocirc;te-des-Neiges", site: "https://www.diocesemontreal.org/en/lets-connect/churches-parishes/notre-dame-des-neiges"},
	{name: "Parc Troie", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-troie"},
	{name: "Place du 6-D&eacute;cembre-1989", type: "Park", address: "", site: "https://montreal.ca/en/places/place-du-6-decembre-1989"},
	{name: "CLSC C&ocirc;te-des-Neiges", type: "Agency", address: "5700 Chemin de la C&ocirc;te-des-Neiges", site: "https://www.ciussswestcentral.ca/sites-and-resources/clsc/clsc-cote-des-neiges/"},
	{name: "&Eacute;cole Saint-Pascal-Baylon", type: "School", address: "6320 Chemin de la C&ocirc;te-des-Neiges", site: "https://st-pascal-baylon.cssdm.gouv.qc.ca/"},
	{name: "Parc Martin-Luther-King", type: "Park", address: "3453 Avenue de Kent", site: "https://montreal.ca/en/places/parc-martin-luther-king"},
	{name: "Coll&egrave;ge Jean-de-Br&eacute;beuf", type: "College", address: "3200 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.brebeuf.qc.ca/"},
	{name: "H&ocirc;tel Terrasse Royale", type: "Hotel", address: "5225 Chemin de la C&ocirc;te-des-Neiges", site: "https://terrasse-royale.com/"}];
	
	//GREEN LINE
	HonoreBeaugrand = [{name: "Village Champlain", type: "Mall", address: "7788 Rue Sherbrooke Est", site: "#"},
	{name: "Place Versailles", type: "Mall", address: "7275 Rue Sherbrooke Est", site: "https://www.placeversailles.com/en"},
	{name: "Terminus Honor&eacute;-Beaugrand", type: "Bus Terminal", address: "4755 Rue Honor&eacute;-Beaugrand", site: "https://exo.quebec/en/transit-planner/honore-beaugrand-station"},
	{name: "Parc Li&eacute;bert", type: "Park", address: "2848 Rue Li&eacute;bert", site: "https://montreal.ca/en/places/parc-liebert"},
	{name: "&Eacute;cole Sainte-Louise-de-Marillac", type: "School", address: "8100 Rue de Marseille", site: "https://ste-louise-de-marillac.csdm.ca/"},
	{name: "Parc Michel-Bourdon", type: "Park", address: "4507 Rue Joseph-A.-Rodier", site: "https://montreal.ca/en/places/parc-michel-bourdon"},
	{name: "Manoir Claudette Barr&eacute;", type: "Residence", address: "7979 Rue Sherbrooke Est", site: "https://www.manoirclaudettebarre.ca/"},
	{name: "Parc Dup&eacute;r&eacute;", type: "Park", address: "4404 Rue Saint-Donat", site: "https://montreal.ca/en/places/parc-dupere"},
	{name: "Centre d&#39;H&eacute;bergement Jean-Hubert-Biermans", type: "Residence", address: "7905 Rue Sherbrooke Est", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/chsld-jean-hubert-biermans"},
	{name: "Centre d&#39;H&eacute;bergement Pierre-Joseph-Triest", type: "Residence", address: "4900 Boulevard Lapointe", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/chsld-pierre-joseph-triest"},
	{name: "Acad&eacute;mie Dunton", type: "School", address: "5555 Rue de Boucherville", site: "https://academie-dunton.cssdm.gouv.qc.ca/"}];
	
	Radisson = [{name: "Place Versailles", type: "Mall", address: "7275 Rue Sherbrooke Est", site: "https://www.placeversailles.com/en"},
	{name: "Auberge Royal Versailles", type: "Hotel", address: "7200 Rue Sherbrooke Est", site: "https://www.royalversailles.com/en/"},
	{name: "Mercier&#8211;Hochelaga-Maisonneuve Borough Hall", type: "Government", address: "6854 Rue Sherbrooke Est", site: "https://montreal.ca/en/places/mercier-hochelaga-maisonneuve-borough-hall"},
	{name: "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise", type: "Cemetery", address: "6893 Rue Sherbrooke Est", site: "http://www.rsfa.ca/"},
	{name: "Terminus Radisson", type: "Bus Terminal", address: "7155 Rue Sherbrooke Est", site: "https://exo.quebec/en/trip-planner/intermodal-installations/radisson-terminal"},
	{name: "Galeries d&#39;Anjou", type: "Mall", address: "7999 Boulevard des Galeries-d&#39;Anjou", site: "https://www.cfshops.com/galeries-d-anjou.html"},
	{name: "Les Halles d&#39;Anjou", type: "Mall", address: "7500 Boulevard des Galeries-d&#39;Anjou", site: "https://www.hallesdanjou.com/en/home.html"},
	{name: "Coll&egrave;ge d&#39;Anjou", type: "School", address: "11000 Rue Renaude-Lapointe", site: "https://collegedanjou.qc.ca/"},
	{name: "Parc du Vaisseau-d&#39;Or", type: "Park", address: "3021 Rue du Trianon", site: "https://montreal.ca/en/places/parc-du-vaisseau-dor"},
	{name: "Parc Radisson", type: "Park", address: "5321 Rue Radisson", site: "https://montreal.ca/en/places/parc-radisson"},
	{name: "C&eacute;gep Marie-Victorin", type: "College", address: "7000 Rue Marie-Victorin", site: "https://www.collegemv.qc.ca/"},
	{name: "Parc des Roseraies", type: "Park", address: "7070 Avenue de la Nantaise", site: "https://montreal.ca/en/places/parc-des-roseraies"},
	{name: "Les Terrasses Versailles", type: "Residence", address: "6923 Boulevard des Galeries-d&#39;Anjou", site: "https://www.residencesexcellence.com/residences/terrasses-versailles/accueil"},
	{name: "&Eacute;cole des Roseraies", type: "School", address: "6440 Boulevard des Galeries-d&#39;Anjou", site: "https://desros.jimdofree.com/"},
	{name: "Institut Universitaire en Sant&eacute; Mentale de Montr&eacute;al", type: "Hospital", address: "7401 Rue Hochelaga", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/institut-universitaire-en-sante-mentale-de-montreal"},
	{name: "Place Versailles Apartments", type: "Residence", address: "7235 Rue Pierre-Corneille", site: "http://www.appartementsplaceversailles.com/"},
	{name: "Le Symbiose", type: "Residence", address: "3075 Rue Paul-David", site: "https://www.residencesexcellence.com/residences/symbiose/accueil"},
	{name: "Centre de R&eacute;adaptation en D&eacute;ficience Physique Raymond-Dewar Radisson", type: "Hospital", address: "3800 Rue Radisson", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-de-readaptation-en-deficience-physique-raymond-dewar-radisson"}];
	
	Langelier = [{name: "Centre Domaine", type: "Mall", address: "3235 Avenue de Granby", site: "https://centredomaine.com/"},
	{name: "Salon de Quilles Centre Commercial Le Domaine", type: "Sports", address: "3275 Avenue de Granby", site: "https://www.quillesdomainemontreal.com/"},
	{name: "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise", type: "Cemetery", address: "6893 Rue Sherbrooke Est", site: "http://www.rsfa.ca/"},
	{name: "Mercier&#8211;Hochelaga-Maisonneuve Borough Hall", type: "Government", address: "6854 Rue Sherbrooke Est", site: "https://montreal.ca/en/places/mercier-hochelaga-maisonneuve-borough-hall"},
	{name: "Biblioth&egrave;que Langelier", type: "Library", address: "6473 Rue Sherbrooke Est", site: "http://ville.montreal.qc.ca/culture/en/langelier-public-library"},
	{name: "Carrefour Langelier", type: "Mall", address: "7373 Boulevard Langelier", site: "https://www.carrefourlangelier.com/en/home.html"},
	{name: "Ar&eacute;na Saint-Donat", type: "Sports", address: "6750 Rue de Marseille", site: "https://montreal.ca/en/places/arena-saint-donat"},
	{name: "Parc Saint-Donat", type: "Park", address: "6800 Rue de Marseille", site: "https://montreal.ca/en/places/parc-saint-donat"},
	{name: "Parc de Lotbini&egrave;re", type: "Park", address: "1 Rue du Parc-de Lotbini&egrave;re", site: "https://montreal.ca/en/places/parc-de-lotbiniere"},
	{name: "Parc Mignault", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-mignault"},
	{name: "Centre R&eacute;cr&eacute;atif et Culturel Saint-Donat", type: "Cultural Centre", address: "6547 Rue de Marseille", site: "https://crcstdonat.org/"},
	{name: "&Eacute;cole Saint-Donat", type: "School", address: "3155 Rue Desautels", site: "https://st-donat.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;glise Saint-Donat de Montr&eacute;al", type: "Church", address: "6805 Rue de Marseille", site: "https://www.eglisesaintdonatdemontreal.com/"},
	{name: "&Eacute;cole Louis-Dupire", type: "School", address: "6400 Avenue Pierre-de-Coubertin", site: "https://louis-dupire.cssdm.gouv.qc.ca/"},
	{name: "Les Habitations Le Domaine", type: "Residence", address: "2990 Avenue de Granby", site: "https://www.ledomaine.ca/"},
	{name: "&Eacute;cole Saint-Fabien", type: "School", address: "6500 Avenue de Renty", site: "https://st-fabien.cssdm.gouv.qc.ca/"},
	{name: "Paroisse Saint-Fabien", type: "Church", address: "6455 Avenue de Renty", site: "http://www.saintfabien.org/Page00.html"},
	{name: "Parc F&eacute;lix-Leclerc", type: "Park", address: "6700 Rue Fran&ccedil;ois-Boivin", site: "https://montreal.ca/en/places/parc-felix-leclerc"},
	{name: "Edward Murphy School", type: "School", address: "6800 Avenue Pierre-de-Coubertin", site: "http://edwardmurphy.emsb.qc.ca/"},
	{name: "New Milano", type: "Restaurant", address: "6625 Rue de Marseille", site: "https://www.newmilano.ca/en-ca/"},
	{name: "Vincent Sous-Marins", type: "Restaurant", address: "6647 Rue de Marseille", site: "http://vincentsous-marins.ca/en"}];
	
	Cadillac = [{name: "Centre de Soins Prolong&eacute;s Grace Dart", type: "Residence", address: "5155 Rue Sainte-Catherine Est", site: "https://ciusss-ouestmtl.gouv.qc.ca/en/contact-location/long-term-care-centres-chsld/grace-dart-extended-care-centre/"},
	{name: "Plaza Antique", type: "Reception Hall", address: "6086 Rue Sherbrooke Est", site: "https://plazapmg.com/en/plaza-antique/"},
	{name: "H&ocirc;tel Chablis Cadillac", type: "Hotel", address: "5800 Rue Sherbrooke Est", site: "https://www.chabliscadillac.com/?lang=en"},
	{name: "Parc de l&#39;Ancienne-P&eacute;pini&egrave;re", type: "Park", address: "5220 Rue du Quesne", site: "https://montreal.ca/en/places/parc-de-lancienne-pepiniere"},
	{name: "Parc Jean-Amyot", type: "Park", address: "6110 Rue de Marseille", site: "https://montreal.ca/en/places/parc-jean-amyot"},
	{name: "&Eacute;cole Rosalie-Jett&eacute;", type: "School", address: "5100 Rue Bossuet", site: "https://rosalie-jette.csdm.ca/"},
	{name: "&Eacute;cole Notre-Dame-des-Victoires", type: "School", address: "2720 Rue Bossuet", site: "https://notre-dame-des-victoires.csdm.ca/"},
	{name: "Sanctuaire Marie-Reine-des-Coeurs", type: "Church", address: "5875 Rue Sherbrooke Est", site: "https://smrdc.org/"},
	{name: "Parc Bossuet", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-bossuet"},
	{name: "Association Pulmonaire du Qu&eacute;bec", type: "Agency", address: "6070 Rue Sherbrooke Est", site: "https://poumonquebec.ca/en/"},
	{name: "Service des Loisirs Saint-Fabien", type: "Cultural Centre", address: "5005 Rue du Quesne", site: "https://loisirsst-fabien.wixsite.com/accueil"},
	{name: "Parc Pierre-B&eacute;dard", type: "Park", address: "5515 Rue Lacordaire", site: "https://montreal.ca/en/places/parc-pierre-bedard"}];
	
	Assomption = [{name: "Centre de Quilles Moderne", type: "Sports", address: "3115 Boulevard de l&#39;Assomption", site: "https://www.quillesjgnc.com/centre-de-quilles-moderne/?lang=en"},
	{name: "Olympic Village", type: "District", address: "5199 Rue Sherbrooke Est", site: "https://www.caprent.com/apartments-for-rent/montreal-qc/olympic-village/"},
	{name: "H&ocirc;pital Maisonneuve-Rosemont", type: "Hospital", address: "5415 Boulevard de l&#39;Assomption", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/hopital-maisonneuve-rosemont"},
	{name: "Produits Scientific Games", type: "Office", address: "3000 Boulevard de l&#39;Assomption", site: "https://www.scientificgames.com/"},
	{name: "&Eacute;cole des M&eacute;tiers de l&#39;A&eacute;rospatiale de Montr&eacute;al", type: "Trade School", address: "5300 Rue Chauveau", site: "https://ecole-metiers-aerospatiale.cssdm.gouv.qc.ca/"},
	{name: "Elogia", type: "Residence", address: "5440 Rue Sherbrooke Est", site: "https://www.legroupemaurice.com/en/retirement-homes/elogia/"},
	{name: "LUX Gouverneur Montr&eacute;al", type: "Residence", address: "5500 Rue Sherbrooke Est", site: "https://www.luxgouverneur.ca/residences/lux-montreal/"},
	{name: "&Eacute;cole Marguerite-de-Lajemmerais", type: "School", address: "5555 Rue Sherbrooke Est", site: "https://marguerite-de-lajemmerais.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;glise MCI Canada", type: "Church", address: "5685 Rue Chauveau", site: "https://mcigc.ca/"},
	{name: "Centre de Services Scolaire de Montr&eacute;al", type: "Office", address: "5100 Rue Sherbrooke Est", site: "https://www.cssdm.gouv.qc.ca/"}];
	
	Viau = [{name: "Olympic Stadium", type: "Sports", address: "4545 Avenue Pierre-de-Coubertin", site: "https://parcolympique.qc.ca/en/"},
	{name: "Saputo Stadium", type: "Sports", address: "4750 Rue Sherbrooke Est", site: "https://www.impactmontreal.com/en/stadium/stade-saputo"},
	{name: "Biod&ocirc;me de Montr&eacute;al", type: "Museum", address: "4777 Avenue Pierre-de-Coubertin", site: "https://espacepourlavie.ca/en/biodome"},
	{name: "Jardin Botanique de Montr&eacute;al", type: "Nature", address: "4101 Rue Sherbrooke Est", site: "https://espacepourlavie.ca/en/botanical-garden"},
	{name: "Insectarium de Montr&eacute;al", type: "Nature", address: "4581 Rue Sherbrooke Est", site: "https://m.espacepourlavie.ca/en/mobile/insectarium"},
	{name: "Ar&eacute;na Maurice-Richard", type: "Sports", address: "2800 Rue Viau", site: "https://montreal.ca/en/places/arena-maurice-richard"},
	{name: "Cineplex Starcit&eacute;", type: "Cinema", address: "4825 Avenue Pierre-de-Coubertin", site: "https://www.cineplex.com/Theatre/cinema-starcite-montreal"},
	{name: "Planetarium Rio Tinto Alcan", type: "Museum", address: "4801 Avenue Pierre-de-Coubertin", site: "https://espacepourlavie.ca/en/rio-tinto-alcan-planetarium-1"},
	{name: "H&ocirc;tel Universel Montr&eacute;al", type: "Hotel", address: "5000 Rue Sherbrooke Est", site: "https://www.hoteluniverselmontreal.com/en"},
	{name: "Centre Pierre-Charbonneau", type: "Fitness", address: "3000 Rue Viau", site: "http://www.centrepierrecharbonneau.com/"},
	{name: "Habitations Pierre-de-Coubertin", type: "Residence", address: "2600 Avenue Aird", site: "https://www.omhm.qc.ca/en/tenant-services/habitations-pierre-de-coubertin/"}];
	
	PieIX = [{name: "Olympic Stadium", type: "Sports", address: "4545 Avenue Pierre-de-Coubertin", site: "https://parcolympique.qc.ca/en/"},
	{name: "Saputo Stadium", type: "Sports", address: "4750 Rue Sherbrooke Est", site: "https://www.impactmontreal.com/en/stadium/stade-saputo"},
	{name: "Biod&ocirc;me de Montr&eacute;al", type: "Museum", address: "4777 Avenue Pierre-de-Coubertin", site: "https://espacepourlavie.ca/en/biodome"},
	{name: "Jardin Botanique de Montr&eacute;al", type: "Nature", address: "4101 Rue Sherbrooke Est", site: "https://espacepourlavie.ca/en/botanical-garden"},
	{name: "Insectarium de Montr&eacute;al", type: "Nature", address: "4581 Rue Sherbrooke Est", site: "https://m.espacepourlavie.ca/en/mobile/insectarium"},
	{name: "Ar&eacute;na Maurice-Richard", type: "Sports", address: "2800 Rue Viau", site: "https://montreal.ca/en/places/arena-maurice-richard"},
	{name: "Cineplex Starcit&eacute;", type: "Cinema", address: "4825 Avenue Pierre-de-Coubertin", site: "https://www.cineplex.com/Theatre/cinema-starcite-montreal"},
	{name: "Planetarium Rio Tinto Alcan", type: "Museum", address: "4801 Avenue Pierre-de-Coubertin", site: "https://espacepourlavie.ca/en/rio-tinto-alcan-planetarium-1"},
	{name: "H&ocirc;tel Universel Montr&eacute;al", type: "Hotel", address: "5000 Rue Sherbrooke Est", site: "https://www.hoteluniverselmontreal.com/en"},
	{name: "Centre Pierre-Charbonneau", type: "Fitness", address: "3000 Rue Viau", site: "http://www.centrepierrecharbonneau.com/"},
	{name: "&Eacute;cole Eulalie-Durocher", type: "School", address: "2455 Rue L&eacute;tourneux", site: "https://eulalie-durocher.csdm.ca/"},
	{name: "&Eacute;cole Saint-Jean-Baptiste-de-la-Salle", type: "School", address: "2355 Boulevard Pie-IX", site: "https://st-jean-baptiste-de-la-salle.csdm.ca/"},
	{name: "Ch&acirc;teau Dufresne", type: "Museum", address: "2929 Avenue Jeanne-d&#39;Arc", site: "https://chateaudufresne.com/en/home/"},
	{name: "&Eacute;glise de Saint-Jean-Baptiste-De-La Salle", type: "Church", address: "2585 Boulevard Pie-IX", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-jean-baptiste-de-la-salle"},
	{name: "&Eacute;cole Ir&eacute;n&eacute;e-Lussier", type: "School", address: "4100 Rue Hochelaga", site: "https://irenee-lussier.cssdm.gouv.qc.ca/"},
	{name: "Parc L&eacute;on-Provancher", type: "Park", address: "5576 Boulevard Pie-IX", site: "https://montreal.ca/en/places/parc-leon-provancher"},
	{name: "Parc Guido-Nincheri", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-guido-nincheri"}];
	
	Joliette = [{name: "Coll&egrave;ge de Maisonneuve", type: "College", address: "3800 Rue Sherbrooke Est", site: "https://www.cmaisonneuve.qc.ca/"},
	{name: "CLSC de Maisonneuve", type: "Agency", address: "4201 Rue Ontario Est", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/clsc-de-hochelaga-maisonneuve"},
	{name: "Parc Lalancette", type: "Park", address: "2315 Rue Nicolet", site: "https://montreal.ca/en/places/parc-lalancette"},
	{name: "&Eacute;cole Saint-&Eacute;mile", type: "School", address: "3450 Rue Davidson", site: "https://st-emile.csdm.ca/"},
	{name: "Parc Saint-&Eacute;mile", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-saint-emile"},
	{name: "&Eacute;cole Sainte-Jeanne-d&#39;Arc", type: "School", address: "3700 Rue Sherbrooke Est", site: "https://ste-jeanne-darc.cssdm.gouv.qc.ca/"},
	{name: "Parc Victor-Bourgeau", type: "Park", address: "67 Place Victor-Bourgeau", site: "https://montreal.ca/en/places/parc-victor-bourgeau"},
	{name: "Manoir Louisiane", type: "Residence", address: "3600 Rue Sherbrooke Est", site: "https://manoir-louisiane.business.site/"},
	{name: "Paroisse Sainte-Jeanne-d&#39;Arc", type: "Church", address: "2295 Rue de Chambly", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/sainte-jeanne-darc"}];
	
	Prefontaine = [{name: "Ar&eacute;na Francis-Bouillon", type: "Sports", address: "3175 Rue de Rouen", site: "https://montreal.ca/en/places/arena-francis-bouillon"},
	{name: "Parc Raymond-Pr&eacute;fontaine", type: "Park", address: "3100 Rue Hochelaga", site: "https://montreal.ca/en/places/parc-raymond-prefontaine"},
	{name: "Institut Teccart", type: "College", address: "3030 Rue Hochelaga", site: "https://www.teccart.qc.ca/index_en.php"},
	{name: "Coll&egrave;ge Ville-Marie", type: "School", address: "2850 Rue Sherbrooke Est", site: "https://www.cvmarie.qc.ca/"},
	{name: "L&#39;&Eacute;glise &agrave; Montr&eacute;al", type: "Church", address: "3201 Rue Hochelaga", site: "http://churchinmontreal.ca/"},
	{name: "&Eacute;cole Notre-Dame-de-l&#39;Assomption", type: "School", address: "2430 Rue Darling", site: "https://notre-dame-de-lassomption.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;glise Nativit&eacute;-de-la-Sainte-Vierge", type: "Church", address: "1855 Rue D&eacute;z&eacute;ry", site: "https://nativite150.wixsite.com/site"}];
	
	Frontenac = [{name: "Place Frontenac", type: "Mall", address: "2600 Rue Ontario Est", site: "#"},
	{name: "Maison de la Culture et Biblioth&egrave;que Frontenac", type: "Theatre", address: "2550 Rue Ontario Est", site: "https://frontenac.tuxedobillet.com/"},
	{name: "Bar Metro Pub", type: "Restaurant", address: "2553 Rue Ontario Est", site: "#"},
	{name: "Parc M&eacute;d&eacute;ric-Martin", type: "Park", address: "2329 Avenue Gascon", site: "https://montreal.ca/en/places/parc-mederic-martin"},
	{name: "Centre Jean-Claude-Mal&eacute;part", type: "Cultural Centre", address: "2633 Rue Ontario Est", site: "https://cjcm.ca/"},
	{name: "Parc Walter-Stewart", type: "Park", address: "2455 Rue Larivi&egrave;re", site: "https://montreal.ca/en/places/parc-walter-stewart"},
	{name: "Parc Jos-Montferrand", type: "Park", address: "2560 Boulevard de Maisonneuve Est", site: "https://montreal.ca/en/places/parc-jos-montferrand"},
	{name: "Centre G&eacute;d&eacute;on-Ouimet", type: "School", address: "1960 Rue Poupart", site: "https://centre-gedeon-ouimet.csdm.ca/"},
	{name: "Mosqu&eacute;e Tawuba", type: "Mosque", address: "2315 Rue Ontario Est", site: "#"},
	{name: "&Eacute;cole Jean-Baptiste-Meilleur", type: "School", address: "2237 Rue Fullum", site: "https://jean-baptiste-meilleur.csdm.ca/"},
	{name: "&Eacute;cole Pierre-Dupuy", type: "School", address: "2000 Rue Parthenais", site: "https://pierre-dupuy.csdm.ca/"},
	{name: "&Eacute;cole des M&eacute;tiers des Faubourgs-de-Montr&eacute;al", type: "Trade School", address: "2000 Rue Parthenais", site: "https://ecole-metiers-faubourgs.csdm.ca/"},
	{name: "Parc Baldwin", type: "Park", address: "4355 Rue Fullum", site: "https://montreal.ca/en/places/parc-baldwin"},
	{name: "&Eacute;cole Saint-Louis-de-Gonzague", type: "School", address: "2430 Terrasse Mercure", site: "https://st-louis-de-gonzague.cssdm.gouv.qc.ca/"},
	{name: "Centre d&#39;H&eacute;bergement Armand-Lavergne", type: "Residence", address: "3500 Rue Chapleau", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-armand-lavergne"},
	{name: "Centre d&#39;H&eacute;bergement Paul-Bruch&eacute;si", type: "Residence", address: "2225 Rue Rachel Est", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-paul-bruchesi"},
	{name: "&Eacute;glise Presbyt&eacute;rienne Sarang Montr&eacute;al", type: "Church", address: "2315 Rue Rachel Est", site: "http://www.sarangchurch.ca/"},
	{name: "&Eacute;nergir", type: "Office", address: "1717 Rue du Havre", site: "https://www.energir.com/en/"},
	{name: "Place Joseph-Venne", type: "Park", address: "", site: "https://montreal.ca/en/places/place-joseph-venne"},
	{name: "Parc Coupal", type: "Park", address: "2340 Rue Coupal", site: "https://montreal.ca/en/places/parc-coupal"},
	{name: "Parc Magnan", type: "Park", address: "2337 Rue Magnan", site: "https://montreal.ca/en/places/parc-magnan"}];
	
	Papineau = [{name: "The Village", type: "District", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/village-montreal"},
	{name: "Conf&eacute;d&eacute;ration des Syndicats Nationaux", type: "Agency", address: "1400 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://www.csn.qc.ca/"},
	{name: "Parc des Faubourgs", type: "Park", address: "1872 Rue Dorion", site: "https://montreal.ca/en/places/parc-des-faubourgs"},
	{name: "Prison du Pied-du-Courant", type: "Museum", address: "903 Avenue de Lorimier", site: "http://museesmontreal.org/en/museums/la-prison-des-patriotes-exhibition-centre"},
	{name: "Parc des V&eacute;t&eacute;rans", type: "Park", address: "1655 Avenue Papineau", site: "https://montreal.ca/en/places/parc-des-veterans"},
	{name: "Place Emmett-Johns", type: "Park", address: "1449 Rue Dorion", site: "https://montreal.ca/en/places/parc-maisonneuve-cartier"},
	{name: "Appartements Urbains FARO", type: "Residence", address: "1825 Rue Sainte-Rose", site: "http://www.appartementsfaro.ca/en/home.html"},
	{name: "&Eacute;ditions MD", type: "Office", address: "1815 Avenue de Lorimier", site: "https://editionsmd.com/"}];
	
	Beaudry = [{name: "The Village", type: "District", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/village-montreal"},
	{name: "Maison Radio-Canada", type: "Office", address: "1400 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "http://archives.radio-canada.ca/societe/histoire/topics/1069-5953/"},
	{name: "Cabaret Mado", type: "Restaurant", address: "1115 Rue Sainte-Catherine Est", site: "http://www.mado.qc.ca/"},
	{name: "L&#39;Olympia", type: "Theatre", address: "1004 Rue Sainte-Catherine Est", site: "https://www.olympiamontreal.com/en/"},
	{name: "Parc de l&#39;Espoir", type: "Park", address: "1336 Rue Sainte-Catherine Est", site: "https://montreal.ca/en/places/parc-de-lespoir"},
	{name: "Parc Serge-Garant", type: "Park", address: "", site: "https://www.lavitrine.com/place/Parc_Serge_Garant"},
	{name: "Le National", type: "Theatre", address: "1220 Rue Sainte-Catherine Est", site: "http://www.latulipe.ca/"},
	{name: "Le Pass&eacute; Compos&eacute;", type: "Restaurant", address: "1310 Boulevard de Maisonneuve Est", site: "https://bistropassecompose.com/?lang=en"},
	{name: "Parc Fran&ccedil;ois-Martineau", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-francois-martineau"},
	{name: "Parc Hector-Charland", type: "Park", address: "1662 Rue de la Visitation", site: "https://montreal.ca/en/places/parc-hector-charland"},
	{name: "Centre St-Pierre", type: "School", address: "1212 Rue Panet", site: "https://www.centrestpierre.org/"},
	{name: "Parc des Joyeux-Vikings", type: "Park", address: "1763 Rue Beaudry", site: "https://montreal.ca/en/places/parc-des-joyeux-vikings"},
	{name: "Parc Jean-Charbonneau", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-jean-charbonneau"},
	{name: "Ar&eacute;na Camillien-Houde", type: "Sports", address: "1696 Rue Montcalm", site: "https://montreal.ca/en/places/arena-camillien-houde"},
	{name: "Parc Miville-Couture", type: "Park", address: "1215 Rue Atateken", site: "https://montreal.ca/en/places/parc-miville-couture"},
	{name: "Le Rubic", type: "Residence", address: "1117 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://rubic.ca/en/"},
	{name: "&Eacute;glise Saint-Pierre-Ap&ocirc;tre", type: "Church", address: "1201 Rue de la Visitation", site: "http://www.saintpierreapotre.ca/"}];
	
	SaintLaurent = [{name: "Mus&eacute;e Juste Pour Rire", type: "Museum", address: "2095 Boulevard Saint-Laurent", site: "http://www.hahaha.com/"},
	{name: "Club Soda", type: "Theatre", address: "1225 Boulevard Saint-Laurent", site: "https://clubsoda.ca/en/index.php"},
	{name: "Best Western Plus H&ocirc;tel Montr&eacute;al", type: "Hotel", address: "161 Rue Sainte-Catherine Est", site: "https://www.bestwestern.com/en_US/book/hotel-rooms.67029.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67029"},
	{name: "Monument-National", type: "Theatre", address: "1182 Boulevard Saint-Laurent", site: "https://ent-nts.ca/en/monument-national"},
	{name: "Laurent & Clark", type: "Residence", address: "1593 Rue Clark", site: "http://laurent-clark.com/en"},
	{name: "Appartements Le Myriade", type: "Residence", address: "1445 Rue Clark", site: "https://www.mondev.ca/apartments-for-rent-montreal/ville-marie/myriade"},
	{name: "MTelus", type: "Theatre", address: "59 Rue Sainte-Catherine Est", site: "https://mtelus.com/en"},
	{name: "Place de la Paix", type: "Park", address: "", site: "http://peacepark.com/"},
	{name: "H&ocirc;tel Z&eacute;ro1", type: "Hotel", address: "1 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://www.zero1-mtl.com/"},
	{name: "H&ocirc;tel Faubourg Montr&eacute;al", type: "Hotel", address: "155 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://www.hotelfaubourgmontreal.com/"},
	{name: "H&ocirc;tel Chrome Montr&eacute;al Centre-Ville", type: "Hotel", address: "215 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://www.hotelchrome.com/"},
	{name: "Candlewood Suites Montr&eacute;al Centre-Ville", type: "Hotel", address: "191 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://www.ihg.com/candlewood/hotels/us/en/montreal/yullb/hoteldetail?cm_mmc=GoogleMaps-_-CW-_-CA-_-YULLB"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Sainte-Catherine Pavilion", type: "University", address: "209 Rue Sainte-Catherine Est", site: "http://carte.uqam.ca/pavillon-v"},
	{name: "H&ocirc;tel 10", type: "Hotel", address: "10 Rue Sherbrooke Ouest", site: "https://www.hotel10montreal.com/"}];
	
	PlaceDesArts = [{name: "Place des Arts", type: "Theatre", address: "175 Rue Sainte-Catherine Ouest", site: "https://placedesarts.com/en"},
	{name: "Quartier des Spectacles / Place des Festivals", type: "District", address: "", site: "https://www.quartierdesspectacles.com/en/"},
	{name: "Mus&eacute;e d&#39;Art Contemporain", type: "Museum", address: "185 Rue Sainte-Catherine Ouest", site: "https://macm.org/en/"},
	{name: "Complexe Desjardins", type: "Mall", address: "150 Rue Sainte-Catherine Ouest", site: "https://www.complexedesjardins.com/en"},
	{name: "Revenu Qu&eacute;bec, Montreal offices", type: "Agency", address: "150 Rue Sainte-Catherine Ouest", site: "https://www.revenuquebec.ca/en/"},
	{name: "H&ocirc;tel Hilton Doubletree", type: "Hotel", address: "1255 Rue Jeanne-Mance", site: "https://www.hilton.com/en/hotels/ymqdtdt-doubletree-montreal/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Biological Science Pavilion", type: "University", address: "141 Avenue du Pr&eacute;sident-Kennedy", site: "http://carte.uqam.ca/pavillon-sb"},
	{name: "Th&eacute;&acirc;tre du Nouveau Monde", type: "Theatre", address: "84 Rue Sainte-Catherine Ouest", site: "https://tnm.qc.ca/"},
	{name: "Complexe Guy-Favreau / Services Canada", type: "Government", address: "200 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "http://complexeguyfavreau.com/en/"},
	{name: "Monument-National", type: "Theatre", address: "1182 Boulevard Saint-Laurent", site: "https://ent-nts.ca/en/monument-national"},
	{name: "Hydro-Qu&eacute;bec", type: "Agency", address: "75 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.hydroquebec.com/residential/"},
	{name: "H&ocirc;tel Travelodge Montr&eacute;al Centre", type: "Hotel", address: "50 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.wyndhamhotels.com/en-ca/travelodge/montreal-quebec/travelodge-hotel-by-wyndham-montreal-centre/overview"},
	{name: "Hilton Garden Inn Montr&eacute;al Centre-Ville", type: "Hotel", address: "380 Rue Sherbrooke Ouest", site: "https://www.hilton.com/en/hotels/yulcvgi-hilton-garden-inn-montreal-centre-ville/"},
	{name: "Campus1 MTL", type: "Residence", address: "420 Rue Sherbrooke Ouest", site: "https://www.campus1mtl.ca/montreal-student-housing/"},
	{name: "L&#39;Appartement H&ocirc;tel", type: "Hotel", address: "455 Rue Sherbrooke Ouest", site: "http://www.appartementhotel.com/en/home.html"},
	{name: "H&ocirc;tel Delta Montr&eacute;al par Marriott", type: "Hotel", address: "475 Avenue du Pr&eacute;sident-Kennedy", site: "https://www.marriott.com/hotels/travel/yuldb-delta-hotels-montreal"},
	{name: "R&eacute;gie de l&#39;Assurance Maladie du Qu&eacute;bec", type: "Agency", address: "425 Boulevard de Maisonneuve Ouest", site: "https://www.ramq.gouv.qc.ca/en"},
	{name: "Loto-Qu&eacute;bec", type: "Agency", address: "500 Rue Sherbrooke Ouest", site: "https://portail.lotoquebec.com/en/home"},
	{name: "Cin&eacute;ma Imp&eacute;rial", type: "Theatre", address: "1432 Rue de Bleury", site: "https://www.cinemaimperial.com/?refreshXL=13754496"},
	{name: "National Film Board of Canada", type: "Office", address: "1501 Rue de Bleury", site: "https://www.nfb.ca/"},
	{name: "CDI College, Montreal campus", type: "College", address: "416 Boulevard de Maisonneuve Ouest", site: "https://www.cdicollege.ca/quebec/campuses/montreal/"},
	{name: "Registraire des Entreprises du Qu&eacute;bec", type: "Agency", address: "2050 Rue de Bleury", site: "http://www.registreentreprises.gouv.qc.ca/en/default.aspx"},
	{name: "F&eacute;d&eacute;ration des M&eacute;decins Sp&eacute;cialistes du Qu&eacute;bec", type: "Agency", address: "150 Rue Sainte-Catherine Ouest", site: "https://fmsq.org/fr"},
	{name: "FDP Intelligence Financi&egrave;re", type: "Agency", address: "150 Rue Sainte-Catherine Ouest", site: "https://www.fprofessionnels.com/en/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pr&eacute;sident-Kennedy Pavilion", type: "University", address: "201 Avenue du Pr&eacute;sident-Kennedy", site: "https://sciences.uqam.ca/"},
	{name: "St. John the Evangelist Church", type: "Church", address: "137 Avenue du Pr&eacute;sident-Kennedy", site: "https://www.redroof.ca/"},
	{name: "Office Qu&eacute;b&eacute;cois de la Langue Fran&ccedil;aise", type: "Agency", address: "125 Rue Sherbrooke Ouest", site: "http://www.oqlf.gouv.qc.ca/accueil.aspx"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Biblioth&egrave;que des Sciences", type: "Library", address: "145 Avenue du Pr&eacute;sident-Kennedy", site: "https://bibliotheques.uqam.ca/bibliotheque/sciences/"},
	{name: "&Eacute;cole des Arts Num&eacute;riques, de l&#39;Animation et du Design", type: "University", address: "1501 Rue de Bleury", site: "https://www.nad.ca/fr"},
	{name: "&Eacute;cole de Danse Contemporaine de Montr&eacute;al", type: "School", address: "1435 Rue de Bleury", site: "https://www.edcm.ca/en"},
	{name: "Directeur de l&#39;&Eacute;tat Civil du Qu&eacute;bec", type: "Agency", address: "2050 Rue de Bleury", site: "http://www.etatcivil.gouv.qc.ca/en/default.html"},
	{name: "Domtar", type: "Office", address: "395 Boulevard de Maisonneuve Ouest", site: "https://www.domtar.com/en"},
	{name: "Conseil des Arts et des Lettres du Qu&eacute;bec, Montreal offices", type: "Agency", address: "1435 Rue de Bleury", site: "https://www.calq.gouv.qc.ca/en/"},
	{name: "L&#39;Astral", type: "Theatre", address: "305 Rue Sainte-Catherine Ouest", site: "https://www.sallelastral.com/en"},
	{name: "La Maison Symphonique", type: "Theatre", address: "1600 Rue Saint-Urbain", site: "https://placedesarts.com/en/venue/maison-symphonique"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Chemistry & Biochemistry Pavilion", type: "University", address: "2101 Rue Jeanne-Mance", site: "https://chimie.uqam.ca/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Sherbrooke Pavilion", type: "University", address: "200 Rue Sherbrooke Ouest", site: "https://carte.uqam.ca/pavillon-sh"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Adrien-Pinard Pavilion", type: "University", address: "100 Rue Sherbrooke Ouest", site: "http://carte.uqam.ca/pavillon-su"},
	{name: "Place du Cardinal P.-&Eacute;. L&eacute;ger", type: "Park", address: "", site: "#"},
	{name: "Louis Boh&egrave;me", type: "Residence", address: "350 Boulevard de Maisonneuve Ouest", site: "https://www.louisboheme.com/en/"},
	{name: "Le Concorde", type: "Residence", address: "441 Avenue du Pr&eacute;sident-Kennedy", site: "http://downtowncondosmontreal.com/le-concorde-2/"},
	{name: "Le Peterson", type: "Residence", address: "405 Rue de la Concorde", site: "https://lepeterson.com/"},
	{name: "Le Smith", type: "Residence", address: "2100 Rue de Bleury", site: "https://www.summitmanagement.ca/apartments/le-smith"},
	{name: "Jack Victor, Montreal offices", type: "Office", address: "1250 Rue Saint-Alexandre", site: "http://www.jackvictor.com/"},
	{name: "AC Marriott Montr&eacute;al Centre-Ville", type: "Hotel", address: "250 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.marriott.com/hotels/travel/yulac-ac-hotel-montreal-downtown"},
	{name: "Canada Revenue Agency, Montreal offices", type: "Agency", address: "305 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.canada.ca/en/revenue-agency.html"}];
	
	McGill = [{name: "McGill University", type: "University", address: "845 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/"},
	{name: "Centre Eaton de Montr&eacute;al", type: "Mall", address: "705 Rue Sainte-Catherine Ouest", site: "https://www.centreeatondemontreal.com/"},
	{name: "Place Montr&eacute;al Trust", type: "Mall", address: "1500 Avenue McGill College", site: "https://www.placemontrealtrust.com/"},
	{name: "Place Ville Marie", type: "Mall", address: "1 Place Ville Marie", site: "http://www.placevillemarie.com/en"},
	{name: "H&ocirc;tel Fairmont Reine Elizabeth", type: "Hotel", address: "900 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.fairmont.com/queen-elizabeth-montreal/"},
	{name: "Mus&eacute;e McCord", type: "Museum", address: "690 Rue Sherbrooke Ouest", site: "https://www.musee-mccord.qc.ca/en/"},
	{name: "Mus&eacute;e Redpath", type: "Museum", address: "859 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/redpath/"},
	{name: "Square Phillips", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-phillips"},
	{name: "Square Dorchester", type: "Town Square", address: "2903 Rue Peel", site: "https://montreal.ca/en/places/square-dorchester"},
	{name: "Cath&eacute;drale Marie Reine du Monde", type: "Church", address: "1085 Rue de la Cath&eacute;drale", site: "http://www.cathedralecatholiquedemontreal.org/"},
	{name: "&Eacute;difice Sun Life", type: "Office", address: "1155 Rue Metcalfe", site: "https://www.sunlifebuilding.ca/"},
	{name: "(defunct) H&ocirc;pital Royal Victoria", type: "Hospital", address: "687 Avenue des Pins Ouest", site: "https://ville.montreal.qc.ca/siteofficieldumontroyal/batiment-institutionnel/pavillon-r-pavillon-ross-memorial-hopital-royal-victoria"},
	{name: "Percival-Molson Memorial Stadium", type: "Sports", address: "475 Avenue des Pins Ouest", site: "http://www.mcgillathletics.ca/"},
	{name: "Carrefour Industrielle Alliance", type: "Mall", address: "977 Rue Sainte-Catherine Ouest", site: "http://www.carrefourindustriellealliance.com/en"},
	{name: "Th&eacute;&acirc;tre Banque Scotia", type: "Cinema", address: "977 Rue Sainte-Catherine Ouest", site: "https://www.cineplex.com/Theatre/cinema-banque-scotia-montreal"},
	{name: "Google, Montreal offices", type: "Office", address: "1253 Avenue McGill College", site: "https://careers.google.com/locations/montreal/"},
	{name: "Promenades Cath&eacute;drale", type: "Mall", address: "625 Rue Sainte-Catherine Ouest", site: "https://promenadescathedrale.com/home-shopping-centre-downtown-montreal"},
	{name: "Christ Church Catehdral", type: "Church", address: "635 Rue Sainte-Catherine Ouest", site: "http://www.montrealcathedral.ca/"},
	{name: "Hudson&#39;s Bay", type: "Shopping", address: "585 Rue Sainte-Catherine Ouest", site: "https://www.thebay.com/"},
	{name: "1501 McGill College", type: "Office", address: "1501 Avenue McGill College", site: "http://www.polarisrealty.com/en/properties/montreal/6_1501-mcgill-college-avenue/_realestate_property"},
	{name: "2001 McGill College", type: "Office", address: "2001 Avenue McGill College", site: "#"},
	{name: "2020 Robert-Bourassa", type: "Office", address: "2020 Boulevard Robert-Bourassa", site: "http://le2020.com/index-en.html"},
	{name: "Tour KPMG", type: "Office", address: "600 Boulevard de Maisonneuve Ouest", site: "https://home.kpmg/ca/en/home/about/offices/montreal-1.html"},
	{name: "Maison Manuvie", type: "Office", address: "900 Boulevard de Maisonneuve Ouest", site: "http://www.maisonmanuvie.com/en"},
	{name: "BNP Paribas", type: "Office", address: "2001 Boulevard Robert-Bourassa", site: "https://www.bnpparibas.ca/en/"},
	{name: "Tour Banque Laurentienne", type: "Office", address: "1981 Avenue McGill College", site: "https://www.laurentianbank.ca/"},
	{name: "H&ocirc;tel Renaissance Centre-Ville Montr&eacute;al", type: "Hotel", address: "1250 Boulevard Robert-Bourassa", site: "https://www.marriott.com/hotels/travel/yulmd-renaissance-montreal-downtown-hotel"},
	{name: "Transports Qu&eacute;bec, Montreal offices", type: "Agency", address: "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.transports.gouv.qc.ca/en/Pages/Home.aspx"},
	{name: "H&ocirc;tel Birks Montr&eacute;al", type: "Hotel", address: "1240 Square Phillips", site: "https://hotelbirksmontreal.com/"},
	{name: "Alliance pour la Sant&eacute; &Eacute;tudiante au Qu&eacute;bec", type: "Agency", address: "1200 Avenue McGill College", site: "http://www.aseq.ca/"},
	{name: "Institut Trebas", type: "School", address: "550 Rue Sherbrooke Ouest", site: "https://www.trebas.com/"},
	{name: "Roddick Gates", type: "Historical Site", address: "15a Rue Sherbrooke Ouest", site: "#"},
	{name: "AXA Assistance Canada", type: "Office", address: "2001 Boulevard Robert-Bourassa", site: "https://www.axa-assistance.ca/"},
	{name: "2001 Robert-Bourassa", type: "Office", address: "2001 Boulevard Robert-Bourassa", site: "https://gwlraleasing.com/building.php?building=4209522867010994813"},
	{name: "Montreal College of Information Technology", type: "College", address: "1255 Boulevard Robert-Bourassa", site: "https://www.montrealcollege.ca/"},
	{name: "Soci&eacute;t&eacute; d&#39;Habitation du Qu&eacute;bec", type: "Agency", address: "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "http://www.habitation.gouv.qc.ca/english.html"},
	{name: "Groupement des Assureurs Automobiles", type: "Office", address: "1981 Avenue McGill College", site: "https://gaa.qc.ca/en/"},
	{name: "TOM Condos", type: "Residence", address: "1188 Avenue Union", site: "https://tomcondos.com/en/"},
	{name: "McGill University, Faculty of Dentistry", type: "University", address: "2001 Avenue McGill College", site: "https://www.mcgill.ca/dentistry/"},
	{name: "McGill University, School of Continuing Studies", type: "University", address: "688 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/continuingstudies/"},
	{name: "Ordre des Ing&eacute;nieurs du Qu&eacute;bec", type: "Agency", address: "1801 Avenue McGill College", site: "http://oiq.qc.ca/en/Pages/selection.aspx"},
	{name: "F.A.C.E. School", type: "School", address: "3449 Rue University", site: "https://face-english.cssdm.gouv.qc.ca/"},
	{name: "Comit&eacute; de D&eacute;ontologie Polici&egrave;re du Qu&eacute;bec, Montreal offices", type: "Agency", address: "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://comite.deontologie.gouv.qc.ca/en/the-comite.html"},
	{name: "Le Square Phillips H&ocirc;tel &amp; Suites", type: "Hotel", address: "1193 Place Phillips", site: "http://www.squarephillips.com/en/home.html"},
	{name: "&Eacute;cole des Entrepreneurs du Qu&eacute;bec, Montreal campus", type: "Trade School", address: "505 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://eequebec.com/"},
	{name: "Richter, Montreal offices", type: "Office", address: "1981 Avenue McGill College", site: "https://www.richter.ca/"},
	{name: "McGill University, Max Bell School of Public Policy", type: "University", address: "680 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/maxbellschool/"},
	{name: "McGill University, Faculty of Science", type: "University", address: "853 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/science/"},
	{name: "McGill University, Department of Geography", type: "University", address: "805 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/geography/"},
	{name: "McGill University, School of Computer Science", type: "University", address: "3480 Rue University", site: "https://www.cs.mcgill.ca/"},
	{name: "McGill University, Department of Chemistry", type: "University", address: "801 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/chemistry/"},
	{name: "McGill University, Faculty of Engineering", type: "University", address: "817 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/engineering/"},
	{name: "The Presbyterian College", type: "College", address: "3495 Boulevard Robert-Bourassa", site: "https://www.presbyteriancollege.ca/"},
	{name: "Fonds d&#39;Assurance Responsabilit&eacute; Professionnelle de l&#39;Ordre des Pharmaciens du Qu&eacute;bec", type: "Agency", address: "2020 Boulevard Robert-Bourassa", site: "https://www.farpopq.com/"},
	{name: "RSA Group, Montreal offices", type: "Office", address: "2000 Avenue McGill College", site: "https://www.rsagroup.ca/"},
	{name: "McGill University, Department of Psychology", type: "University", address: "2001 Avenue McGill College", site: "https://www.mcgill.ca/psychology/"},
	{name: "Fiera Capital", type: "Office", address: "1981 Avenue McGill College", site: "https://www.fieracapital.com/en"},
	{name: "McGill University, Faculty of Arts", type: "University", address: "853 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/arts/"},
	{name: "McGill University, School of Urban Planning", type: "University", address: "815 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/urbanplanning/"},
	{name: "Valero, Montreal offices", type: "Office", address: "1801 Avenue McGill College", site: "https://www.valero.com/"},
	{name: "Interactive Brokers Canada", type: "Office", address: "1800 Avenue McGill College", site: "https://www.interactivebrokers.ca/en/home.php"},
	{name: "CNA, Montreal offices", type: "Office", address: "1800 Avenue McGill College", site: "https://www.cnacanada.ca/web/guest/cnacanada/home"}];
	
	Peel = [{name: "Les Cours Mont-Royal", type: "Mall", address: "1455 Rue Peel", site: "https://lcmr.ca/"},
	{name: "Carrefour Industrielle Alliance", type: "Mall", address: "977 Rue Sainte-Catherine Ouest", site: "http://www.carrefourindustriellealliance.com/en"},
	{name: "Th&eacute;&acirc;tre Banque Scotia", type: "Cinema", address: "977 Rue Sainte-Catherine Ouest", site: "https://www.cineplex.com/Theatre/cinema-banque-scotia-montreal"},
	{name: "Tour Scotia", type: "Office", address: "1002 Rue Sherbrooke Ouest", site: "#"},
	{name: "Tour CIBC", type: "Office", address: "1155 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "#"},
	{name: "McGill University", type: "University", address: "845 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/"},
	{name: "Place Montr&eacute;al Trust", type: "Mall", address: "1500 Avenue McGill College", site: "https://www.placemontrealtrust.com/en/"},
	{name: "Le Demetrius", type: "Residence", address: "1445 Rue Stanley", site: "https://www.gwlraresidential.com/apartments/qc/montreal/le-demetrius/index.aspx?_yTrackUser=OTQxNzA5NjYwIzE5MTk5NTcxODg=-DwVHUNDST0M=&_yTrackVisit=MTY5OTE0MzIwOSMyMDE4MTk4NTE2-/Rw0D2+iQPY=&_yTrackReqDT=37420320201210&lang=999"},
	{name: "YMCA Centre-Ville", type: "Fitness", address: "1440 Rue Stanley", site: "https://www.ymcaquebec.org/en/Find-a-Y/Downtown-YMCA"},
	{name: "FireGrill Restaurant & Bar", type: "Restaurant", address: "1490 Rue Stanley", site: "https://www.firegrill.com/"},
	{name: "Deville Diner Bar", type: "Restaurant", address: "1425 Rue Stanley", site: "http://devilledinerbar.com/"},
	{name: "Square Dorchester", type: "Town Square", address: "2903 Rue Peel", site: "https://montreal.ca/en/places/square-dorchester"},
	{name: "Bell Centre", type: "Sports", address: "1909 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.centrebell.ca/en"},
	{name: "Mus&eacute;e des Beaux-Arts de Montr&eacute;al", type: "Museum", address: "1380 Rue Sherbrooke Ouest", site: "https://www.mbam.qc.ca/en"},
	{name: "Holt Renfrew Ogilvy", type: "Shopping", address: "1307 Rue Sainte-Catherine Ouest", site: "https://www.holtrenfrew.com/en/the-new-holt-renfrew-ogilvy"},
	{name: "&Eacute;difice Sun Life", type: "Office", address: "1155 Rue Metcalfe", site: "https://www.sunlifebuilding.ca/"},
	{name: "H&ocirc;tel Omni Mont-Royal", type: "Hotel", address: "1050 Rue Sherbrooke Ouest", site: "https://www.omnihotels.com/hotels/montreal-mont-royal"},
	{name: "Le Centre Sheraton Montr&eacute;al", type: "Hotel", address: "1201 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.marriott.com/hotels/travel/yulsi-le-centre-sheraton-montreal-hotel/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTcxNDk2Mi03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"},
	{name: "Ritz-Carlton Montr&eacute;al", type: "Hotel", address: "1228 Rue Sherbrooke Ouest", site: "https://www.ritzcarlton.com/en/hotels/canada/montreal"},
	{name: "Le Germain H&ocirc;tel Montr&eacute;al", type: "Hotel", address: "2050 Rue Mansfield", site: "https://www.germainhotels.com/en/le-germain-hotel/montreal"},
	{name: "Le Mount Stephen", type: "Hotel", address: "1440 Rue Drummond", site: "https://www.lemountstephen.com/"},
	{name: "Vogue Hotel Montreal Downtown", type: "Hotel", address: "1425 Rue de la Montagne", site: "https://www.hilton.com/en/hotels/yulmqqq-vogue-montreal-downtown/"},
	{name: "Le St-Martin H&ocirc;tel Particulier", type: "Hotel", address: "980 Boulevard de Maisonneuve Ouest", site: "https://lestmartinmontreal.com/"},
	{name: "Sofitel Montr&eacute;al Le Carr&eacute; Dor&eacute;", type: "Hotel", address: "1155 Rue Sherbrooke Ouest", site: "https://all.accor.com/hotel/3646/index.en.shtml"},
	{name: "Chambre des Notaires du Qu&eacute;bec", type: "Agency", address: "2045 Rue Stanley", site: "https://www.cnq.org/en/"},
	{name: "&Eacute;difice Dominion Square", type: "Office", address: "1010 Rue Sainte-Catherine Ouest", site: "https://imtl.org/montreal/building/Dominion-Square-Building.php"},
	{name: "H&ocirc;tel Le Cantlie Suites", type: "Hotel", address: "1110 Rue Sherbrooke Ouest", site: "http://www.hotelcantlie.com/"},
	{name: "Residence Inn by Marriott Montr&eacute;al Centre-Ville", type: "Hotel", address: "2045 Rue Peel", site: "https://www.marriott.com/hotels/travel/yulri-residence-inn-montreal-downtown"},
	{name: "Best Western Ville-Marie Montreal Hotel & Suites", type: "Hotel", address: "3407 Rue Peel", site: "https://www.bestwestern.com/en_US/book/hotel-rooms.67012.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67012"},
	{name: "McGill University, Desautels Faculty of Management", type: "University", address: "1001 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/desautels/"},
	{name: "McGill University, McLennan Library Building", type: "Library", address: "3459 Rue McTavish", site: "https://www.mcgill.ca/library/"},
	{name: "Reuben&#39;s Deli & Steakhouse", type: "Restaurant", address: "1116 Rue Sainte-Catherine Ouest", site: "http://reubensdeli.com/"},
	{name: "Canada Goose", type: "Shopping", address: "1020 Rue Sainte-Catherine Ouest", site: "https://www.canadagoose.com/ca/en/montreal-store.html"},
	{name: "Chambre de Commerce et d&#39;Industrie Fran&ccedil;aise au Canada", type: "Office", address: "1455 Rue Drummond", site: "https://www.ccifcmtl.ca/"},
	{name: "Le 1200 Ouest", type: "Residence", address: "1200 Boulevard de Maisonneuve Ouest", site: "http://downtowncondosmontreal.com/1200-de-maisonneuve-2/"},
	{name: "Procom, Montreal offices", type: "Office", address: "2000 Rue Peel", site: "https://www.procomservices.com/en-us/"},
	{name: "Office de Consultation Publique de Montr&eacute;al", type: "Office", address: "1550 Rue Metcalfe", site: "https://ocpm.qc.ca/"},
	{name: "Communaut&eacute; M&eacute;tropolitaine de Montr&eacute;al", type: "Office", address: "1002 Rue Sherbrooke Ouest", site: "https://cmm.qc.ca/"},
	{name: "Montreal Gazette", type: "Office", address: "2055 Rue Peel", site: "https://montrealgazette.com/"},
	{name: "Reflector Entertainment", type: "Studio", address: "2200 Rue Stanley", site: "https://www.reflectorentertainment.com/"},
	{name: "McLean&#39;s Pub", type: "Restaurant", address: "1210 Rue Peel", site: "https://mcleanspub.com/en/"},
	{name: "Peel Pub", type: "Restaurant", address: "1196 Rue Peel", site: "#"},
	{name: "Four Seasons H&ocirc;tel et R&eacute;sidences Montr&eacute;al", type: "Hotel", address: "1440 Rue de la Montagne", site: "https://www.fourseasons.com/montreal/?seo=google_local_mqu1_amer"},
	{name: "Best Western Plus Montr&eacute;al Centre-Ville H&ocirc;tel Europa", type: "Hotel", address: "1240 Rue Drummond", site: "https://www.bestwestern.com/en_US/book/hotel-rooms.67013.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67013"},
	{name: "Stanley Tower", type: "Residence", address: "3470 Rue Stanley", site: "http://www.stanleytower.com/"},
	{name: "Le Sommet 3475", type: "Residence", address: "3475 Rue de la Montagne", site: "https://lesommet3475.com/en/"},
	{name: "McGill University, Faculty of Medicine and Health Sciences", type: "University", address: "3605 Rue de la Montagne", site: "https://www.mcgill.ca/medhealthsci/"},
	{name: "McGill University, Faculty of Law", type: "University", address: "3644 Rue Peel", site: "https://www.mcgill.ca/law/"},
	{name: "McGill University, Faculty of Education", type: "University", address: "3700 Rue McTavish", site: "https://www.mcgill.ca/education/"},
	{name: "LUNA Appartements Urbains", type: "Residence", address: "1100 Avenue du Docteur-Penfield", site: "http://www.appartementsluna.com/en/home.html"},
	{name: "Royal Penfield", type: "Residence", address: "1230 Avenue du Docteur-Penfield", site: "https://www.groupeaccueilres.ca/the-royal-penfield-"},
	{name: "Le Drummond", type: "Residence", address: "1211 Rue Stanley", site: "http://www.mcgillimmobilier.com/en/drummond-condos-in-montreal-downtown/"},
	{name: "Coast Underwriters, Montreal offices", type: "Office", address: "1010 Rue Sherbrooke Ouest", site: "https://www.coastunderwriters.ca/"},
	{name: "Theratechnologies", type: "Office", address: "2015 Rue Peel", site: "https://www.theratech.com/"},
	{name: "McGill University, Department of Biology", type: "University", address: "1205 Avenue du Docteur-Penfield", site: "https://www.mcgill.ca/biology/"},
	{name: "McGill University, Department of Pharmacology &amp; Therapeutics", type: "University", address: "3655 Promenade Sir-William-Osler", site: "https://www.mcgill.ca/pharma/"},
	{name: "McGill University, Department of Physiology", type: "University", address: "3655 Promenade Sir-William-Osler", site: "https://www.mcgill.ca/physiology/"},
	{name: "H&ocirc;tel Chez Swann", type: "Hotel", address: "1444 Rue Drummond", site: "http://hotelchezswann.com/"},
	{name: "Chez Alexandre", type: "Restaurant", address: "1454 Rue Peel", site: "https://www.chezalexandre.com/en/"},
	{name: "Ferreira Caf&eacute;", type: "Restaurant", address: "1446 Rue Peel", site: "https://ferreiracafe.com/en/"},
	{name: "Ib&eacute;rica", type: "Restaurant", address: "1450 Rue Peel", site: "http://www.iberica.ca/?lang=en"},
	{name: "Caf&eacute; Vasco Da Gama", type: "Restaurant", address: "1472 Rue Peel", site: "https://vascodagama.ca/en/"},
	{name: "Zante", type: "Restaurant", address: "1112 Rue Sherbrooke Ouest", site: "https://www.restaurantzante.ca/?lang=en"},
	{name: "Campo", type: "Restaurant", address: "1108 Boulevard de Maisonneuve Ouest", site: "https://campomtl.com/en/"},
	{name: "H&ocirc;tel Ambrose", type: "Hotel", address: "3422 Rue Stanley", site: "https://hotelambrose.ca/en"},
	{name: "Maison Louis-Joseph-Forget", type: "Historical Site", address: "1195 Rue Sherbrooke Ouest", site: "https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=92828&type=bien"},
	{name: "Maison James-Reid-Wilson", type: "Historical Site", address: "1201 Rue Sherbrooke Ouest", site: "https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=92829&type=bien"},
	{name: "La Soci&eacute;t&eacute;", type: "Restaurant", address: "1415 Rue de la Montagne", site: "https://montreal.lasociete.ca/"},
	{name: "Le Boulevardier", type: "Restaurant", address: "2050 Rue Mansfield", site: "https://leboulevardierrestaurant.com/en/"} ];
	
	Guy = [{name: "Concordia University, Sir George Williams campus", type: "University", address: "1455 Boulevard de Maisonneuve Ouest", site: "http://www.concordia.ca/"},
	{name: "Concordia University, John Molson School of Business", type: "University", address: "1450 Rue Guy", site: "http://www.concordia.ca/jmsb.html"},
	{name: "LaSalle College", type: "College", address: "2000 Rue Sainte-Catherine Ouest", site: "https://www.lasallecollege.com/"},
	{name: "Mus&eacute;e des Beaux-Arts de Montr&eacute;al", type: "Museum", address: "1380 Rue Sherbrooke Ouest", site: "https://www.mbam.qc.ca/en"},
	{name: "Golden Square Mile", type: "District", address: "", site: "https://www.mtl.org/en/experience/golden-square-mile"},
	{name: "Faubourg Sainte-Catherine", type: "Mall", address: "1616 Rue Sainte-Catherine Ouest", site: "#"},
	{name: "Kampai Garden", type: "Restaurant", address: "1616 Rue Sainte-Catherine Ouest", site: "https://www.kampaigarden.com/"},
	{name: "Montreal General Hospital", type: "Hospital", address: "1650 Avenue Cedar", site: "http://muhc.ca/"},
	{name: "Le Chatel", type: "Residence", address: "1625 Boulevard de Maisonneuve Ouest", site: "https://lechatel.net/"},
	{name: "Leonard Cohen Mural", type: "Historical Site", address: "1420 Rue Crescent", site: "https://mumtl.org/en/projects/tower-of-song-el-mac-gene-pendon-2017/"},
	{name: "Research Institute of the McGill University Health Centre", type: "University", address: "2155 Rue Guy", site: "https://rimuhc.ca/"},
	{name: "Place du Fort", type: "Residence", address: "1411 Rue du Fort", site: "https://placedufort.com/"},
	{name: "Concordia University, Webster Library", type: "Library", address: "1455 Boulevard de Maisonneuve Ouest", site: "https://library.concordia.ca/"},
	{name: "Le 1444 Mackay", type: "Residence", address: "1444 Rue Mackay", site: "https://www.hazelviewproperties.com/residential/le-1444-mackay"},
	{name: "Sir Winston Churchill Pub", type: "Restaurant", address: "1455 Rue Crescent", site: "https://www.swcpc.com/SirWinston/"},
	{name: "&Eacute;cole des M&eacute;tiers de la Restauration et du Tourisme de Montr&eacute;al", type: "Trade School", address: "1822 Boulevard de Maisonneuve Ouest", site: "https://ecole-metiers-restauration-tourisme.cssdm.gouv.qc.ca/ecole/"},
	{name: "Place Norman-Bethune", type: "Town Square", address: "", site: "https://montreal.ca/en/places/place-norman-bethune"},
	{name: "Canadian Centre for Architecture", type: "Museum", address: "1920 Rue Baile", site: "https://www.cca.qc.ca/en/"},
	{name: "Le 2250 Appartements", type: "Residence", address: "2250 Rue Guy", site: "https://www.caprent.com/apartments-for-rent/montreal-qc/the-2250-guy/"},
	{name: "Le M&eacute;ridien Versailles", type: "Hotel", address: "1808 Rue Sherbrooke Ouest", site: "https://www.marriott.com/hotels/travel/yulmv-le-m%C3%A9ridien-versailles"},
	{name: "Ch&acirc;teau Versailles", type: "Hotel", address: "1659 Rue Sherbrooke Ouest", site: "https://www.chateauversaillesmontreal.com/"},
	{name: "H&ocirc;tel Pierce", type: "Hotel", address: "1650 Boulevard de Maisonneuve Ouest", site: "https://www.simplissimmo.ca/en/categories/pierce-hotel-by-simplissimmo"},
	{name: "H&ocirc;tel Espresso Montr&eacute;al Centre-Ville", type: "Hotel", address: "1005 Rue Guy", site: "https://www.hotelespresso.ca/"},
	{name: "Matrix College of Management, Technology and Healthcare", type: "College", address: "1980 Rue Sherbrooke Ouest", site: "http://www.matrixcollege.ca/home?"},
	{name: "1900 Lincoln", type: "Residence", address: "1900 Avenue Lincoln", site: "https://www.montrealapartmentdowntown.com/indexEn.html"},
	{name: "Ch&acirc;teau Lincoln", type: "Residence", address: "1950 Avenue Lincoln", site: "https://www.chateau-lincoln.com/en/"},
	{name: "Hurley&#39;s Irish Pub", type: "Restaurant", address: "1225 Rue Crescent", site: "http://www.hurleysirishpub.com/en_home.html"}];
	
	Atwater = [{name: "Dawson College", type: "College", address: "3040 Rue Sherbrooke Ouest", site: "http://www.dawsoncollege.qc.ca/"},
	{name: "Place Alexis-Nihon", type: "Mall", address: "1500 Avenue Atwater", site: "https://www.alexisnihon.com/"},
	{name: "Westmount High School", type: "School", address: "4350 Rue Sainte-Catherine Ouest", site: "http://www.duxvitaeratio.ca/"},
	{name: "Westmount Square", type: "Mall", address: "1 Carr&eacute; Westmount", site: "#"},
	{name: "Montreal Forum", type: "Entertainment", address: "2313 Rue Sainte-Catherine Ouest", site: "https://www.forum-montreal.com/montreal-forum"},
	{name: "Cineplex Montreal Forum", type: "Cinema", address: "2313 Rue Sainte-Catherine Ouest", site: "http://www.cineplex.com/Theatre/cinema-cineplex-forum?utm_source=google&utm_medium=organic&utm_campaign=local&utm_content=CPXMontrealForum"},
	{name: "Montreal Children&#39;s Hospital", type: "Hospital", address: "1040 Avenue Atwater", site: "http://www.thechildren.com/departments-and-staff/departments/department-of-adolescent-medicine"},
	{name: "Square Cabot", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-cabot"},
	{name: "H&ocirc;tel La Tour Belv&eacute;d&egrave;re", type: "Hotel", address: "2175 Boulevard de Maisonneuve Ouest", site: "https://www.tourbelvedere.com/"},
	{name: "F&eacute;d&eacute;ration des M&eacute;decins Omnipraticiens du Qu&eacute;bec", type: "Agency", address: "3500 Boulevard de Maisonneuve Ouest", site: "https://www.fmoq.org/"},
	{name: "Plaza Tower", type: "Residence", address: "4000 Boulevard de Maisonneuve Ouest", site: "https://alexisnihon.com/plaza-tower"},
	{name: "Residence Inn by Marriott Montr&eacute;al Westmount", type: "Hotel", address: "2170 Avenue Lincoln", site: "https://www.marriott.com/hotels/travel/yulmr-residence-inn-montreal-westmount"},
	{name: "Place Henri-Dunant", type: "Park", address: "", site: "https://montreal.ca/en/places/place-henri-dunant"},
	{name: "Manoir Charles Dutaud", type: "Residence", address: "2165 Rue Tupper", site: "https://residences-quebec.ca/en/retirement-home/manoir-charles-dutaud/560"},
	{name: "Parc Hector-Toe-Blake", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-hector-toe-blake"},
	{name: "Alexander Appartements", type: "Residence", address: "1180 Rue du Sussex", site: "https://devimco.com/appartements/montreal/shaughnessy/alexander/en/"},
	{name: "1100 Atwater", type: "Office", address: "1100 Avenue Atwater", site: "https://1100atwater.ca/en/"}];
	
	Charlevoix = [{name: "Maison Saint-Gabriel", type: "Museum", address: "2146 Place Dublin", site: "https://www.maisonsaintgabriel.ca/en"},
	{name: "Parc du Canal de Lachine", type: "Park", address: "", site: "https://www.pc.gc.ca/en/lhn-nhs/qc/canallachine"},
	{name: "Parc Saint-Gabriel", type: "Park", address: "2355 Rue Mullins", site: "https://montreal.ca/en/places/parc-saint-gabriel"},
	{name: "Parc d&#39;Argenson", type: "Park", address: "2900 Rue Centre", site: "https://montreal.ca/en/places/parc-dargenson"},
	{name: "Parc Atwater / Saint-Charles", type: "Park", address: "2880 Rue Saint-Charles", site: "https://montreal.ca/en/places/parc-atwater-saint-charles"},
	{name: "Ar&eacute;na Saint-Charles", type: "Sports", address: "1055 Rue d&#39;Hibernia", site: "https://montreal.ca/en/places/arena-saint-charles"}];
	
	LaSalle = [{name: "&Icirc;le-des-Soeurs", type: "Island", address: "", site: "#"},
	{name: "Parc Poirier", type: "Park", address: "3177 Boulevard LaSalle", site: "https://montreal.ca/en/places/parc-poirier-verdun"},
	{name: "&Eacute;cole Notre-Dame-de-la-Paix", type: "School", address: "454 Avenue Caisse", site: "https://nddlp.ecoleverdun.com/"},
	{name: "R&eacute;sidence Priv&eacute;e Notre-Dame-de-la-Paix", type: "Residence", address: "3501 Rue &Eacute;thel", site: "https://bonjourresidences.com/residence/montreal-residence-privee-notre-dame-de-la-paix/"},
	{name: "Centre de Formation Professionnelle de Verdun", type: "Trade School", address: "3010 Boulevard Ga&eacute;tan-Laberge", site: "https://verdun.centrecsmb.com/"},
	{name: "&Eacute;cole Secondaire Monseigneur-Richard", type: "School", address: "3000 Boulevard Ga&eacute;tan-Laberge", site: "https://monseigneur-richard.ecoleverdun.com/"},
	{name: "Parc Sutherland-Sackville-Bain", type: "Park", address: "11 Rue Rh&eacute;aume", site: "https://montreal.ca/en/places/parc-sutherland-sackville-bain"}];
	
	DeLEglise = [{name: "Promenade Wellington", type: "Shopping", address: "266 Rue Hickson", site: "http://www.promenadewellington.com/en"},
	{name: "Auditorium de Verdun", type: "Sports", address: "4110 Boulevard LaSalle", site: "https://montreal.ca/en/places/auditorium-de-verdun"},
	{name: "Plage de Verdun", type: "Beach", address: "4110 Boulevard LaSalle", site: "https://montreal.ca/en/places/plage-urbaine-de-verdun"},
	{name: "Parc Arthur-Therrien", type: "Park", address: "3750 Boulevard Ga&eacute;tan-Laberge", site: "https://montreal.ca/en/places/parc-arthur-therrien"},
	{name: "Stade Ronald-Pich&eacute;", type: "Sports", address: "3750 Boulevard Ga&eacute;tan-Laberge", site: "#"},
	{name: "H&ocirc;pital de Verdun", type: "Hospital", address: "4000 Boulevard LaSalle", site: "https://www.ciusss-centresudmtl.gouv.qc.ca/etablissement/hopital-de-verdun"},
	{name: "Parc J.-Albert-Gari&eacute;py", type: "Park", address: "10 All&eacute;e des Brises-du-Fleuve", site: "https://montreal.ca/en/places/parc-j-albert-gariepy"},
	{name: "&Eacute;glise Notre-Dame-des-Sept-Douleurs de Montr&eacute;al", type: "Church", address: "4155 Rue Wellington", site: "http://nddt.org/"},
	{name: "Church of the Epiphany", type: "Church", address: "4322 Rue Wellington", site: "https://epiphanyverdun.com/"},
	{name: "&Eacute;cole Notre-Dame-des-Sept-Douleurs", type: "School", address: "320 Rue de l&#39;&Eacute;glise", site: "https://nddsd.ecoleverdun.com/"},
	{name: "Onward Gospel Church", type: "Church", address: "165 Rue Galt", site: "http://www.onwardgospelchurch.com/"},
	{name: "Parc Joannette", type: "Park", address: "292 Rue Hickson", site: "https://montreal.ca/en/places/parc-joannette"},
	{name: "Parc Monseigneur-J.-A.-Richard", type: "Park", address: "5150 Boulevard LaSalle", site: "https://montreal.ca/en/places/parc-monseigneur-j-richard"},
	{name: "Parc Monseigneur-Langlois", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-monseigneur-langlois"},
	{name: "Restaurant Crescendo", type: "Restaurant", address: "5150 Boulevard LaSalle", site: "http://www.restaurantcrescendo.com/"},
	{name: "Ch&acirc;teau Isabelle", type: "Residence", address: "4560 Boulevard LaSalle", site: "https://www.hazelviewproperties.com/properties/4560-lasalle-blvd"}];
	
	Verdun = [{name: "Centre Communautaire Marcel-Giroux", type: "Cultural Centre", address: "4501 Avenue Bannantyne", site: "https://montreal.ca/en/places/centre-communautaire-marcel-giroux"},
	{name: "Verdun Borough Hall", type: "Government", address: "4555 Rue de Verdun", site: "https://montreal.ca/en/places/mairie-darrondissement-de-verdun"},
	{name: "Parc Willibrord", type: "Park", address: "1018 Rue Willibrord", site: "https://montreal.ca/en/places/parc-willibrord"},
	{name: "&Eacute;cole L&eacute;vis-Sauv&eacute;", type: "School", address: "655 Rue Willibrord", site: "https://levissauve.ecoleverdun.com/"},
	{name: "&Eacute;cole Chanoine-Joseph-Th&eacute;or&ecirc;t", type: "School", address: "990 5e Avenue", site: "https://cjt.ecoleverdun.com/"},
	{name: "Parc du Souvenir", type: "Park", address: "4525 Rue de Verdun", site: "https://montreal.ca/en/places/parc-du-souvenir"},
	{name: "&Eacute;glise de Notre-Dame-de-Lourdes", type: "Church", address: "4949 Rue de Verdun", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/notre-dame-de-lourdes"},
	{name: "&Eacute;cole Notre-Dame-de-Lourdes", type: "School", address: "504 5e Avenue", site: "https://ndl.ecoleverdun.com/"},
	{name: "Grace Church", type: "Church", address: "501 5e Avenue", site: "http://www.gracechurchverdun.com/"},
	{name: "Centre Islamique de Verdun", type: "Cultural Centre", address: "4538 Rue de Verdun", site: "https://centres.macnet.ca/civ/en/"},
	{name: "&Eacute;glise Sainte-Willibrord", type: "Church", address: "351 Rue Willibrord", site: "https://www.stwillibrordparish.org/"}];
	
	Jolicoeur = [{name: "Parc de la V&eacute;rendrye", type: "Park", address: "5900 Rue Drake", site: "https://montreal.ca/en/places/parc-de-la-verendrye"},
	{name: "&Eacute;glise Notre-Dame-Porte-de-l&#39;Aurore", type: "Church", address: "1465 Rue de S&egrave;ve", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/notre-dame-porte-de-laurore-lituaniens"},
	{name: "&Eacute;glise Coeur-Immacul&eacute;-de-Marie", type: "Church", address: "6300 Rue Laurendeau", site: "https://www.diocesemontreal.org/en/faith-community/church/coeur-immacule-de-marie"},
	{name: "&Eacute;cole Coeur-Immacul&eacute;-de-Marie", type: "School", address: "1845 Boulevard Desmarchais", site: "https://coeur-immacule-de-marie.cssdm.gouv.qc.ca/"}];
	
	Monk = [{name: "Institut Douglas", type: "Hospital", address: "6875 Boulevard LaSalle", site: "http://www.douglas.qc.ca/?locale=en"},
	{name: "Centre Hospitalier Ville-&Eacute;mard", type: "Hospital", address: "6935 Rue Hamilton", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/clsc-de-ville-emard"},
	{name: "&Eacute;cole Honor&eacute;-Mercier", type: "School", address: "1935 Boulevard Desmarchais", site: "https://honore-mercier.csdm.ca/"},
	{name: "&Eacute;cole Dollard-des-Ormeaux", type: "School", address: "6639 Rue d&#39;Aragon", site: "http://dollard-des-ormeaux.csdm.ca/"},
	{name: "&Eacute;cole Saint-Jean-de-Matha", type: "School", address: "6970 Rue Dumas", site: "https://st-jean-de-matha.csdm.ca/"},
	{name: "Parc Clifford", type: "Park", address: "1820 Avenue Clifford", site: "https://montreal.ca/en/places/parc-clifford"},
	{name: "Parc D&#39;Arcy-McGee", type: "Park", address: "1500 Avenue Egan", site: "https://montreal.ca/en/places/parc-darcy-mcgee"},
	{name: "Parc Cur&eacute;-Albert-Arnold", type: "Park", address: "6855 Rue Hamilton", site: "https://montreal.ca/en/places/parc-cure-albert-arnold"},
	{name: "Paroisse Saint-Jean-de-Matha", type: "Church", address: "2700 Rue Allard", site: "https://www.diocesemontreal.org/en/lets-connect/churches-parishes/saint-jean-de-matha"},
	{name: "Parc Saint-Jean-Bosco", type: "Park", address: "", site: "#"},
	{name: "Paroisse Saint-Jean-Bosco", type: "Church", address: "2510 Rue Springland", site: "https://www.diocesemontreal.org/en/lets-connect/churches-parishes/saint-jean-bosco"},
	{name: "Parc Garneau", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-garneau"},
	{name: "Parc &Eacute;douard-Fabre", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-edouard-fabre"},
	{name: "Parc Saint-Jean-de-Matha", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-saint-jean-de-matha"},
	{name: "Mosqu&eacute;e El-Balkan", type: "Mosque", address: "2836 Rue Allard", site: "https://balkanmc.wordpress.com/"}];
				
	Angrignon = [{name: "Terminus Angrignon", type: "Bus Terminal", address: "3500 Boulevard des Trinitaires", site: "https://exo.quebec/en/trip-planner/intermodal-installations/angrignon-terminal"},
	{name: "Carrefour Angrignon", type: "Mall", address: "7077 Boulevard Newman", site: "http://www.carrefourangrignon.com/en/"},
	{name: "Parc Angrignon", type: "Park", address: "3400 Boulevard des Trinitaires", site: "https://montreal.ca/en/places/parc-angrignon"},
	{name: "Place Newman", type: "Mall", address: "2101 Avenue Dollard", site: "http://www.croftonmoore.com/property-details.php?pid=48"},
	{name: "Les Tours Angrignon", type: "Residence", address: "1500 Boulevard Angrignon", site: "https://www.selectionretraite.com/en/residence/lasalle/selection-tours-angrignon"},
	{name: "Les Tours Serenity", type: "Residence", address: "1700 Boulevard Angrignon", site: "https://serenitytowers.ca/"},
	{name: "C&eacute;gep Andr&eacute;-Laurendeau", type: "College", address: "1111 Rue Lapierre", site: "https://www.claurendeau.qc.ca/"},
	{name: "Habitations Angrignon I et II", type: "Residence", address: "3055 Boulevard des Trinitaires", site: "https://www.omhm.qc.ca/en/tenant-services/habitations-angrignon-i-et-ii/"},
	{name: "Le Conrad", type: "Residence", address: "1601 Boulevard Angrignon", site: "https://www.leconrad.com/en/"},
	{name: "Habitations Les Trinitaires", type: "Residence", address: "1771 Boulevard Angrignon", site: "https://habitationslestrinitaires.weebly.com/"},
	{name: "EQ8", type: "Residence", address: "6760 Boulevard Newman", site: "https://eq8.ca/en/"}];
	
	//ORANGE LINE
	Montmorency = [{name: "Place Bell", type: "Sports", address: "1950 Rue Claude-Gagn&eacute;", site: "https://www.placebell.ca/en"},
	{name: "Universit&eacute; de Montr&eacute;al, Laval campus", type: "University", address: "1700 Rue Jacques-T&eacute;treault", site: "https://www.umontreal.ca/en/our-campuses/laval-campus/"},
	{name: "Terminus Montmorency", type: "Bus Terminal", address: "555 Rue Lucien-Paiement", site: "https://exo.quebec/en/trip-planner/intermodal-installations/montmorency-terminal"},
	{name: "Coll&egrave;ge Montmorency", type: "College", address: "475 Boulevard de l&#39;Avenir", site: "https://www.cmontmorency.qc.ca/"},
	{name: "Centre Laval", type: "Mall", address: "1600 Boulevard le Corbusier", site: "https://duolaval.com/en"},
	{name: "Carrefour Laval", type: "Mall", address: "3003 Boulevard le Carrefour", site: "https://www.cfshops.com/carrefour-laval.html"},
	{name: "Salle Andr&eacute;-Mathieu", type: "Theatre", address: "475 Boulevard de l&#39;Avenir", site: "https://www.co-motion.ca/nos-salles-de-spectacles/salle-andre-mathieu/#"},
	{name: "Maison des Arts de Laval", type: "Theatre", address: "1395 Boulevard de la Concorde Ouest", site: "https://www.laval.ca/maisondesarts/Pages/Fr/accueil.aspx"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Laval campus", type: "University", address: "475 Boulevard de l&#39;Avenir", site: "https://etudier.uqam.ca/campus/laval"},
	{name: "Coll&egrave;ge Letendre", type: "School", address: "1000 Boulevard de l&#39;Avenir", site: "https://www.collegeletendre.qc.ca/"}];
	
	DeLaConcorde = [{name: "Maison des Arts de Laval", type: "Theatre", address: "1395 Boulevard de la Concorde Ouest", site: "https://www.laval.ca/maisondesarts/Pages/Fr/accueil.aspx"},
	{name: "Coll&egrave;ge Montmorency", type: "College", address: "475 Boulevard de l&#39;Avenir", site: "https://www.cmontmorency.qc.ca/"},
	{name: "Salle Andr&eacute;-Mathieu", type: "Theatre", address: "475 Boulevard de l&#39;Avenir", site: "https://www.co-motion.ca/nos-salles-de-spectacles/salle-andre-mathieu/#"}];
	
	Cartier = [{name: "Pont Viau", type: "Bridge", address: "", site: "#"},
	{name: "Terminus Cartier", type: "Bus Terminal", address: "5 Boulevard Cartier Ouest", site: "https://exo.quebec/en/trip-planner/intermodal-installations/cartier-terminal"},
	{name: "Ar&eacute;na Cartier", type: "Sports", address: "100 Mont&eacute;e Major", site: "https://www.laval.ca/lieux/Pages/Fr/arena-cartier.aspx"},
	{name: "Parc Cartier", type: "Park", address: "45 Boulevard Cartier Ouest", site: "https://www.laval.ca/lieux/Pages/Fr/parc-cartier.aspx"},
	{name: "Cour Municipale de la Ville de Laval", type: "Courthouse", address: "55 Boulevard des Laurentides", site: "https://www.laval.ca/lieux/Pages/Fr/cour-municipale.aspx"},
	{name: "Parc &Eacute;mile", type: "Park", address: "55 Boulevard Cartier Ouest", site: "#"}];
	
	HenriBourassa = [{name: "Pont Viau", type: "Bridge", address: "", site: "#"},
	{name: "Terminus Henri-Bourassa", type: "Bus Terminal", address: "590 Boulevard Henri-Bourassa Est", site: "https://exo.quebec/en/trip-planner/intermodal-installations/henri-bourassa-nord-terminal"},
	{name: "Ar&eacute;na Ahuntsic", type: "Sports", address: "10560 Rue Saint-Hubert", site: "https://montreal.ca/en/places/arena-ahuntsic"},
	{name: "Biblioth&egrave;que d&#39;Ahuntsic", type: "Library", address: "10300 Rue Lajeunesse", site: "https://montreal.ca/en/places/bibliotheque-dahuntsic"},
	{name: "Parc Nature de l&#39;&Icirc;le de la Visitation", type: "Park", address: "11062 Avenue Wilfrid-Saint-Louis", site: "https://parcs-nature.com/public/en/ile-de-la-visitation"},
	{name: "Parc Ahuntsic", type: "Park", address: "10555 Rue Lajeunesse", site: "https://montreal.ca/en/places/parc-ahuntsic"},
	{name: "Stade Gary-Carter", type: "Sports", address: "10555 Rue Lajeunesse", site: "#"},
	{name: "Coll&egrave;ge de Bois-de-Boulogne", type: "College", address: "10555 Avenue de Bois-de-Boulogne", site: "https://www.bdeb.qc.ca/"},
	{name: "Maison de la Culture Ahuntsic-Cartierville", type: "Theatre", address: "10300 Rue Lajeunesse", site: "http://ville.montreal.qc.ca/culture/en/maison-de-la-culture-ahuntsic-cartierville"},
	{name: "Bagel Henri-Bourassa", type: "Restaurant", address: "443 Boulevard Henri-Bourassa Est", site: "#"},
	{name: "Centre Communautaire Ahuntsic", type: "Cultural Centre", address: "10780 Rue Laverdure", site: "https://www.solidariteahuntsic.org/"},
	{name: "Parc Jeanne-Sauv&eacute;", type: "Park", address: "451 Boulevard Gouin Est", site: "https://montreal.ca/en/places/parc-jeanne-sauve"},
	{name: "Parc du Pont Ahuntsic", type: "Park", address: "", site: "#"}];
	
	Sauve = [{name: "Parc Henri-Julien", type: "Park", address: "9300 Rue Saint-Denis", site: "https://montreal.ca/en/places/parc-henri-julien"},
	{name: "Parc d&#39;Auteuil", type: "Park", address: "350 Rue Sauv&eacute; Est", site: "https://montreal.ca/en/places/parc-dauteuil"},
	{name: "R&ecirc;vanous", type: "Residence", address: "9870 Rue Laverdure", site: "https://www.revanous.org/"},
	{name: "&Eacute;cole Christ-Roi", type: "School", address: "525 Rue de Louvain Est", site: "https://christ-roi.csdm.ca/"},
	{name: "&Eacute;cole Marie-Anne", type: "School", address: "100 Rue Sauv&eacute; Est", site: "https://marie-anne.csdm.ca/"}];
	
	Cremazie = [{name: "Fonds de Solidarit&eacute; FTQ", type: "Agency", address: "545 Boulevard Cr&eacute;mazie Est", site: "https://www.fondsftq.com/en"},
	{name: "Coll&egrave;ge Ahuntsic", type: "College", address: "9155 Rue Saint-Hubert", site: "https://www.collegeahuntsic.qc.ca/"},
	{name: "Coll&egrave;ge Andr&eacute;-Grasset", type: "College", address: "1001 Boulevard Cr&eacute;mazie Est", site: "https://www.grasset.qc.ca/"},
	{name: "Complexe Sportif Claude-Robillard", type: "Sports", address: "1000 Avenue &Eacute;mile-Journault", site: "https://montreal.ca/en/places/complexe-sportif-claude-robillard"},
	{name: "Centre de Recherche Industrielle du Qu&eacute;bec", type: "Agency", address: "1201 Boulevard Cr&eacute;mazie Est", site: "https://www.criq.qc.ca/en/"},
	{name: "&Eacute;cole Saint-G&eacute;rard", type: "School", address: "505 Rue de Li&egrave;ge Est", site: "https://st-gerard.csdm.ca/"},
	{name: "R&eacute;gie du B&acirc;timent du Qu&eacute;bec", type: "Agency", address: "255 Boulevard Cr&eacute;mazie Est", site: "https://www.rbq.gouv.qc.ca/en.html"},
	{name: "Parc Saint-Alphonse", type: "Park", address: "8888 Avenue de Chateaubriand", site: "https://montreal.ca/en/places/parc-saint-alphonse"},
	{name: "Ar&eacute;na Michel-Normandin", type: "Sports", address: "850 Avenue &Eacute;mile-Journault", site: "https://montreal.ca/en/places/arena-michel-normandin"},
	{name: "Institut SA", type: "College", address: "690 Boulevard Cr&eacute;mazie Est", site: "https://sainstitute.ca/"},
	{name: "Commission de la Construction du Qu&eacute;bec", type: "Agency", address: "8485 Avenue Christophe-Colomb", site: "https://www.ccq.org/en"},
	{name: "Comit&eacute; de Gestion de la Taxe Scolaire de l&#39;&Icirc;le de Montr&eacute;al", type: "Agency", address: "500 Boulevard Cr&eacute;mazie Est", site: "https://cgtsim.qc.ca/en/"},
	{name: "Minist&egrave;re de l&#39;Agriculture, des P&ecirc;cheries et de l&#39;Alimentation, Montreal offices", type: "Agency", address: "201 Boulevard Cr&eacute;mazie Est", site: "https://www.mapaq.gouv.qc.ca/fr/Pages/Accueil.aspx"},
	{name: "Doctors of the World Canada", type: "Agency", address: "560 Boulevard Cr&eacute;mazie Est", site: "https://www.doctorsoftheworld.ca/"},
	{name: "Parc Blanche-Lamontagne", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-blanche-lamontagne"},
	{name: "Institut National de la Sant&eacute; Publique du Qu&eacute;bec, Montreal offices", type: "Agency", address: "190 Boulevard Cr&eacute;mazie Est", site: "https://www.inspq.qc.ca/en"}];
	
	Jarry = [{name: "Parc Jarry", type: "Park", address: "285 Rue Gary-Carter", site: "https://montreal.ca/en/places/parc-jarry"},
	{name: "Stade IGA", type: "Sports", address: "285 Rue Gary-Carter", site: "http://stadeiga.com/en/"},
	{name: "Parc Saint-Vincent-Ferrier", type: "Park", address: "8172 Rue Drolet", site: "https://montreal.ca/en/places/parc-saint-vincent-ferrier"},
	{name: "Parc G&eacute;rard-Lalonde", type: "Park", address: "375 Rue Jarry Est", site: "#"},
	{name: "Paroisse Saint-Vincent-Ferrier", type: "Church", address: "301 Rue Jarry Est", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-vincent-ferrier"},
	{name: "&Eacute;cole H&eacute;l&egrave;ne-Boull&eacute;", type: "School", address: "8050 Avenue de Gasp&eacute;", site: "https://helene-boulle.cssdm.gouv.qc.ca/"},
	{name: "Centre Sainte-Croix", type: "School", address: "85 Rue Jarry Ouest", site: "https://centre-ste-croix.cssdm.gouv.qc.ca/"},
	{name: "Qu&eacute;bec Deli", type: "Restaurant", address: "590 Rue Jarry Est", site: "http://www.quebecdeli.ca/en/home"}];
	
	Beaubien = [{name: "Plaza Saint-Hubert", type: "Shopping", address: "6841 Rue Saint-Hubert", site: "https://www.plazasthubert.com/en/"},
	{name: "&Eacute;glise Notre-Dame-de-la-D&eacute;fense", type: "Church", address: "6800 Avenue Henri-Julien", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/notre-dame-de-la-defense-italiens"},
	{name: "&Eacute;glise Saint-&Eacute;douard", type: "Church", address: "6500 Rue de Saint-Vallier", site: "#"},
	{name: "&Eacute;cole La Mennais", type: "School", address: "6521 Rue Saint-Denis", site: "https://la-mennais.csdm.ca/"},
	{name: "Chambre de la Jeunesse", type: "Courthouse", address: "410 Rue de Bellechasse", site: "https://www.justice.gouv.qc.ca/en/judicial-system/courts-and-tribunals-of-quebec/court-of-quebec/youth-division"},
	{name: "Th&eacute;&acirc;tre Plaza", type: "Theatre", address: "6505 Rue Saint-Hubert", site: "https://www.theatreplaza.ca/"},
	{name: "Beaubien Bagel", type: "Restaurant", address: "828 Rue Beaubien Est", site: "#"},
	{name: "Parc Dante", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-dante"}];
	
	Rosemont = [{name: "Biblioth&egrave;que Marc-Favreau", type: "Library", address: "500 Boulevard Rosemont", site: "https://montreal.ca/en/places/bibliotheque-marc-favreau"},
	{name: "Parc des Carri&egrave;res", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-des-carrieres"},
	{name: "Parc Luc-Durand", type: "Park", address: "600 Rue des Ateliers", site: "https://montreal.ca/en/places/parc-luc-durand"},
	{name: "Habitations Saint-Vallier", type: "Residence", address: "401 Rue des Carri&egrave;res", site: "https://www.omhm.qc.ca/en/housing-directory/habitations-saint-vallier"},
	{name: "Universit&eacute; T&Eacute;LUQ, Montreal offices", type: "Office", address: "5800 Rue Saint-Denis", site: "https://www.teluq.ca/site/en/"},
	{name: "Place Raymond-Plante", type: "Park", address: "780 Boulevard Rosemont", site: "https://montreal.ca/en/places/place-raymond-plante"},
	{name: "Le Saint-&Eacute;douard", type: "Restaurant", address: "808 Boulevard Rosemont", site: "https://lesaintedouard.com/"},
	{name: "Parc du P&egrave;re-Marquette", type: "Park", address: "1602 Rue de Bellechasse", site: "https://montreal.ca/en/places/parc-du-pere-marquette"},
	{name: "Centre P&egrave;re-Marquette", type: "Cultural Centre", address: "1600 Rue de Drucourt", site: "http://centreperemarquette.ca/"},
	{name: "Ar&eacute;na P&egrave;re-Marquette", type: "Sports", address: "1605 Rue de Bellechasse", site: "https://montreal.ca/en/places/arena-pere-marquette"},
	{name: "&Eacute;cole P&egrave;re-Marquette", type: "School", address: "6030 Rue Marquette", site: "https://pere-marquette.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;cole des M&eacute;tiers de l'&Eacute;quipement Motoris&eacute; de Montr&eacute;al", type: "Trade School", address: "5455 Rue Saint-Denis", site: "https://ecole-metiers-motorise.cssdm.gouv.qc.ca"}];
	
	Laurier = [{name: "Spectrum Productions", type: "Studio", address: "5445 Avenue de Gasp&eacute;", site: "http://www.productionsspectrum.com/"},
	{name: "Parc Sir-Wilfrid-Laurier", type: "Park", address: "1115 Avenue Laurier Est", site: "https://montreal.ca/en/places/parc-sir-wilfrid-laurier"},
	{name: "&Eacute;cole Nationale de Th&eacute;&acirc;tre", type: "School", address: "5030 Rue Saint-Denis", site: "https://ent-nts.ca/en"},
	{name: "&Eacute;cole Sup&eacute;rieure de Ballet du Qu&eacute;bec", type: "School", address: "4816 Rue Rivard", site: "https://www.esbq.ca/en/"},
	{name: "&Eacute;glise Catholique Saint-Denis", type: "Church", address: "454 Avenue Laurier Est", site: "https://.google.com/view/eglisesaintdenismontreal/accueil"},
	{name: "&Eacute;cole Laurier", type: "School", address: "505 Avenue Laurier Est", site: "https://laurier.cssdm.gouv.qc.ca/"},
	{name: "Centre Champagnat", type: "School", address: "5017 Rue Saint-Hubert", site: "https://centre-champagnat.cssdm.gouv.qc.ca/"},
	{name: "Parc Berri-Saint-Joseph", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-berri-saint-joseph"},
	{name: "Parc Lahaie", type: "Park", address: "4921 Boulevard Saint-Laurent", site: "https://montreal.ca/en/places/parc-lahaie"},
	{name: "Parc Saint-Michel", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-saint-michel"},
	{name: "&Eacute;cole Saint-Enfant-J&eacute;sus", type: "School", address: "75 Rue Villeneuve Est", site: "https://st-enfant-jesus.cssdm.gouv.qc.ca/"},
	{name: "Faberg&eacute;", type: "Restaurant", address: "25 Avenue Fairmount Ouest", site: "https://www.faberge514.com/eng/home"},
	{name: "Fairmount Bagel", type: "Restaurant", address: "74 Avenue Fairmount Ouest", site: "https://fairmountbagel.com/"}];
	
	MontRoyal = [{name: "Parc Mont-Royal", type: "Park", address: "1260 Chemin Remembrance", site: "https://montreal.ca/en/places/parc-du-mont-royal"},
	{name: "L&#39;Avenue du Mont-Royal", type: "District", address: "1012 Avenue du Mont-Royal Est", site: "https://www.mont-royal.net/"},
	{name: "Th&eacute;&acirc;tre du Rideau Vert", type: "Theatre", address: "4664 Rue Saint-Denis", site: "https://www.rideauvert.qc.ca/"},
	{name: "Biblioth&egrave;que du Plateau-Mont-Royal", type: "Library", address: "465 Avenue du Mont-Royal Est", site: "https://montreal.ca/en/places/bibliotheque-du-plateau-mont-royal"},
	{name: "Sanctuaire du Saint-Sacrement", type: "Church", address: "500 Avenue du Mont-Royal Est", site: "http://www.fraternites-jerusalem.ca/"},
	{name: "Parc Albert-Saint-Martin", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-albert-saint-martin"},
	{name: "Place G&eacute;rald-Godin", type: "Park", address: "", site: "https://montreal.ca/en/places/place-gerald-godin"},
	{name: "Relais Mont-Royal", type: "Church", address: "500 Avenue du Mont-Royal Est", site: "https://relaismontroyal.org/wp/"},
	{name: "Parc Denise-Morelle", type: "Park", address: "4394 Rue Rivard", site: "https://montreal.ca/en/places/parc-denise-morelle"},
	{name: "Parc &Eacute;mile-Nelligan", type: "Park", address: "4543 Avenue Laval", site: "https://montreal.ca/en/places/parc-emile-nelligan"},
	{name: "Parc Gilles-Lefebvre", type: "Park", address: "4535 Avenue Henri-Julien", site: "https://montreal.ca/en/places/parc-gilles-lefebvre"},
	{name: "Parc Pierre-Boucher", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-pierre-boucher"},
	{name: "Parc Palomino-Brind&#39;Amour", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-palomino-brindamour"},
	{name: "Conservatoire de Musique de Montr&eacute;al", type: "School", address: "4750 Avenue Henri-Julien", site: "https://www.conservatoire.gouv.qc.ca/"},
	{name: "Place des Fleurs-de-Macadam", type: "Park", address: "", site: "https://montreal.ca/en/places/place-des-fleurs-de-macadam"},
	{name: "La Banquise", type: "Restaurant", address: "994 Rue Rachel Est", site: "https://labanquise.com/en/"},
	{name: "Beautys", type: "Restaurant", address: "93 Avenue du Mont-Royal Ouest", site: "https://beautys.ca/"},
	{name: "Parc Jeanne-Mance", type: "Park", address: "4422 Avenue de l&#39;Esplanade", site: "https://montreal.ca/en/places/parc-jeanne-mance"}];
	
	Sherbrooke = [{name: "Institut de Tourisme et d&#39;H&ocirc;tellerie du Qu&eacute;bec", type: "University", address: "3535 Rue Saint-Denis", site: "https://www.ithq.qc.ca/en/institute/"},
	{name: "H&ocirc;tel de l&#39;ITHQ", type: "Hotel", address: "3535 Rue Saint-Denis", site: "http://www.ithq.qc.ca/en/hotel/"},
	{name: "Parc La Fontaine", type: "Park", address: "3819 Avenue Calixa-Lavall&eacute;e", site: "https://montreal.ca/en/places/parc-la-fontaine"},
	{name: "Square Saint-Louis", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-saint-louis"},
	{name: "Auberge du Carr&eacute; Saint-Louis", type: "Hotel", address: "3466 Rue Saint-Denis", site: "https://aubergecarrestlouis.com/home"},
	{name: "Th&eacute;&acirc;tre d&#39;Aujourd&#39;hui", type: "Theatre", address: "3900 Rue Saint-Denis", site: "https://www.theatredaujourdhui.qc.ca/"},
	{name: "Th&eacute;&acirc;tre de Quat&#39;Sous", type: "Theatre", address: "100 Avenue des Pins Est", site: "https://www.quatsous.com/"},
	{name: "Th&eacute;&acirc;tre La Chapelle", type: "Theatre", address: "3700 Rue Saint-Dominique", site: "https://lachapelle.org/en"},
	{name: "Les R&eacute;sidences Soleil Manoir Plaza", type: "Residence", address: "505 Rue Sherbrooke Est", site: "https://residencessoleil.ca/residences-soleil-list/manoir-plaza"},
	{name: "Gare d&#39;Autocars de Montr&eacute;al", type: "Bus Terminal", address: "1717 Rue Berri", site: "http://www.gamtl.com/en/bienvenue/default.aspx"},
	{name: "Latin Quarter", type: "District", address: "", site: "http://www.quartierlatin.ca/en/"},
	{name: "Champlain College of Vermont, Montreal campus", type: "College", address: "525 Rue Sherbrooke Est", site: "https://montreal.champlain.edu/"},
	{name: "Parc Jehane-Beno&icirc;t", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-jehane-benoit"},
	{name: "Parc J.-Z.-L&eacute;on-Patenaude", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-j-z-leon-patenaude"},
	{name: "C&eacute;gep du Vieux Montr&eacute;al", type: "College", address: "255 Rue Ontario Est", site: "http://www.cvm.qc.ca/Pages/index.aspx"},
	{name: "Loft Hotel Montr&eacute;al", type: "Hotel", address: "334 Terrasse Saint Denis", site: "https://lofthotel.guestybookings.com/"},
	{name: "Parc Simonne-Monet-Chartrand", type: "Park", address: "2121 Rue Saint-Christophe", site: "https://montreal.ca/en/places/parc-simonne-monet-chartrand"},
	{name: "Parc Claude-Melan&ccedil;on", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-claude-melancon"},
	{name: "H&ocirc;tel Ch&acirc;teau de l&#39;Argoat", type: "Hotel", address: "524 Rue Sherbrooke Est", site: "https://www.hotel-chateau-argoat.com/en/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Department of Dance", type: "University", address: "840 Rue Cherrier", site: "https://danse.uqam.ca/"},
	{name: "&Eacute;cole Espace-Jeunesse", type: "School", address: "3655 Rue Saint-Hubert", site: "https://espace-jeunesse.cssdm.gouv.qc.ca/"},
	{name: "Parc Th&eacute;r&egrave;se-Daviau", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-therese-daviau"},
	{name: "Auberge de la Fontaine", type: "Hotel", address: "1301 Rue Rachel Est", site: "http://www.aubergedelafontaine.com/?lang=en"},
	{name: "&Eacute;cole Le Plateau", type: "School", address: "3700 Avenue Calixa-Lavall&eacute;e", site: "https://le-plateau.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;cole Lanaudi&egrave;re", type: "School", address: "4300 Rue de Lanaudi&egrave;re", site: "https://lanaudiere.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;cole Nationale de l&#39;Humour", type: "School", address: "2120 Rue Sherbrooke Est", site: "https://enh.qc.ca/"},
	{name: "&Eacute;cole &Eacute;lan", type: "School", address: "3450 Avenue de Lorimier", site: "https://elan.cssdm.gouv.qc.ca/"},
	{name: "Parc Monseigneur-Lartigue", type: "Park", address: "2250 Rue Panet", site: "https://montreal.ca/en/places/parc-monseigneur-lartigue"},
	{name: "&Eacute;cole Marguerite-Bourgeoys", type: "School", address: "2070 Rue Plessis", site: "https://marguerite-bourgeoys.cssdm.gouv.qc.ca/"},
	{name: "H&ocirc;pital Notre-Dame", type: "Hospital", address: "1560 Rue Sherbrooke Est", site: "https://www.ciusss-centresudmtl.gouv.qc.ca/etablissement/hopital-notre-dame"},
	{name: "Parc Persillier-Lachapelle", type: "Park", address: "2040 Rue Alexandre-DeS&egrave;ve", site: "https://montreal.ca/en/places/parc-persillier-lachapelle"},
	{name: "Place Charles-de-Gaulle", type: "Park", address: "", site: "https://montreal.ca/en/places/place-charles-de-gaulle"},
	{name: "&Eacute;cole au Pied-de-la-Montagne", type: "School", address: "311 Avenue des Pins Est", site: "https://au-pied-de-la-montagne.cssdm.gouv.qc.ca/ecole/pavillon-jjolier/"},
	{name: "Les Fusiliers Mont-Royal", type: "Museum", address: "3721 Avenue Henri-Julien", site: "http://lesfusiliersmont-royal.com/"},
	{name: "H&ocirc;tel Manoir Sherbrooke", type: "Hotel", address: "157 Rue Sherbrooke Est", site: "https://manoirsherbrooke.ca/"},
	{name: "H&ocirc;tel Espace Confort", type: "Hotel", address: "2050 Rue Saint-Denis", site: "https://montrealespaceconfort.com/"},
	{name: "H&ocirc;tel St-Thomas", type: "Hotel", address: "430 Rue Sherbrooke Est", site: "https://hotelst-thomas.com/"},
	{name: "La Fabrique", type: "Restaurant", address: "3619 Rue Saint-Denis", site: "https://bistrotlafabrique.com/en/"},
	{name: "L&#39;&Eacute;vidence", type: "Restaurant", address: "3817 Rue Saint-Denis", site: "https://www.bistrolevidence.com/?lang=en"}];
	
	ChampDeMars = [{name: "Old Montreal", type: "District", address: "", site: "https://vieuxmontreal.ca/en/"},
	{name: "Old Port of Montreal", type: "Port", address: "333 Rue de la Commune Ouest", site: "https://www.oldportofmontreal.com/"},
	{name: "Place des Montr&eacute;alaises", type: "Park", address: "", site: "https://montreal.ca/en/places/place-des-montrealaises"},
	{name: "CHUM Saint-Luc", type: "Hospital", address: "1051 Rue Sanguinet", site: "https://www.chumontreal.qc.ca/"},
	{name: "Chinatown", type: "District", address: "", site: "https://www.mtl.org/en/experience/discover-neighbourhood-montreal-chinatown"},
	{name: "Place Vauquelin", type: "Town Square", address: "275 Rue Notre-Dame Est", site: "https://montreal.ca/en/places/place-vauquelin"},
	{name: "Champ de Mars", type: "Historical Site", address: "158 Rue Saint-Antoine Est", site: "https://montreal.ca/en/places/le-champ-de-mars"},
	{name: "Montreal City Hall", type: "Government", address: "275 Rue Notre-Dame Est", site: "https://montreal.ca/en/places/city-hall"},
	{name: "&Eacute;difice Lucien-Saulnier", type: "Government", address: "155 Rue Notre-Dame Est", site: "https://montreal.ca/en/places/lucien-saulnier-building"},
	{name: "Ch&acirc;teau Ramezay", type: "Historical Site", address: "280 Rue Notre-Dame Est", site: "https://www.chateauramezay.qc.ca/en/"},
	{name: "March&eacute; Bonsecours", type: "Shopping", address: "350 Rue Saint-Paul Est", site: "https://www.marchebonsecours.qc.ca/en/index.html"},
	{name: "Terrasses Bonsecours", type: "Restaurant", address: "364 Rue de la Commune Est", site: "https://terrassesbonsecours.com/"},
	{name: "Chappelle Notre-Dame-de-Bon-Secours", type: "Church", address: "400 Rue Saint-Paul Est", site: "https://margueritebourgeoys.org/en/"},
	{name: "Place Jacques-Cartier", type: "District", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-jacques-cartier-and-place-de-la-dauversiere"},
	{name: "Quai Jacques-Cartier", type: "Port", address: "", site: "http://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=115163&type=bien#.X390DtVKiM8"},
	{name: "Quai de l&#39;Horloge", type: "Port", address: "", site: "http://www.patrimoine-culturel.gouv.qc.ca/detail.do?methode=consulter&id=115167&type=bien#.X390UtVKiM8"},
	{name: "Bassin Bonsecours", type: "Lake", address: "", site: "https://www.oldportcorporation.com/activity/bonsecours-basin"},
	{name: "H&ocirc;tel William Gray", type: "Hotel", address: "421 Rue Saint-Vincent", site: "https://hotelwilliamgray.com/"},
	{name: "Maggie Oakes", type: "Restaurant", address: "426 Place Jacques-Cartier", site: "https://maggieoakes.com/en/"},
	{name: "BEVO Bar + Pizzeria", type: "Restaurant", address: "410 Rue Saint-Vincent", site: "https://bevopizza.com/en/"},
	{name: "Vieux-Port Steakhouse", type: "Restaurant", address: "39 Rue Saint-Paul Est", site: "https://vieuxportsteakhouse.com/en/"},
	{name: "Auberge Saint-Gabriel", type: "Restaurant", address: "426 Rue Saint-Gabriel", site: "http://aubergesaint-gabriel.com/en/"},
	{name: "Jardin Nelson", type: "Restaurant", address: "407 Place Jacques-Cartier", site: "https://jardinnelson.com/en/"},
	{name: "Rue Saint-Amable", type: "Historical Site", address: "", site: "https://vieuxmontreal.ca/en/publications/once-upon-a-time-on-saint-amable-street"},
	{name: "Place de la Dauversi&egrave;re", type: "Park", address: "", site: "https://www.vieuxmontreal.ca/en/business/place-de-la-dauversiere-2/"},
	{name: "Parc Fleury-Mesplet", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-fleury-mesplet"},
	{name: "Le Solano", type: "Residence", address: "901 Rue de la Commune Est", site: "https://lesolano.com/en/"},
	{name: "Parc de la Chasse-Galerie", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-de-la-chasse-galerie"},
	{name: "Place Victor-Morin", type: "Park", address: "", site: "https://montreal.ca/en/places/place-victor-morin"},
	{name: "Parc Fran&ccedil;ois-Dollier-De Casson", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-francois-dollier-de-casson"},
	{name: "H&ocirc;pital Chinois de Montr&eacute;al", type: "Hospital", address: "189 Avenue Viger Est", site: "http://www.montrealchinesehospital.ca/home_en.html"},
	{name: "Perch&eacute;", type: "Restaurant", address: "153 Rue Saint-Amable", site: "https://perchemtl.com/en/"},
	{name: "Square Viger", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-viger"},
	{name: "Centre Culturel Marocain Dar Al Maghrib", type: "Cultural Centre", address: "515 Avenue Viger Est", site: "http://www.lecentreculturelmarocain.ca/"},
	{name: "Maison Sainte-Th&eacute;r&egrave;se", type: "Hotel", address: "110 Rue Sainte-Th&eacute;r&egrave;se", site: "https://maisonsco.com/"},
	{name: "Maison Saint-Vincent", type: "Hotel", address: "443 Rue Saint-Vincent", site: "https://maisonsco.com/"},
	{name: "Terrasse William Gray", type: "Restaurant", address: "421 Rue Saint-Vincent", site: "https://hotelwilliamgray.com/food/terrasse-william-gray/"},
	{name: "Le S&eacute;nateur", type: "Restaurant", address: "254 Rue Saint-Paul Est", site: "https://vieuxmontreal.ca/en/business/le-senateur-en"},
	{name: "L&#39;Usine de Spaghetti", type: "Restaurant", address: "273 Rue Saint-Paul Est", site: "https://www.lusinedespaghettimtl.com/welcome"},
	{name: "Montr&eacute;al Poutine", type: "Restaurant", address: "181 Rue Saint-Paul Est", site: "https://www.montrealpoutine.us/"},
	{name: "Le Club Chasse et P&ecirc;che", type: "Restaurant", address: "423 Rue Saint-Claude", site: "https://www.leclubchasseetpeche.com/en/"},
	{name: "John Michael&#39;s Pub", type: "Restaurant", address: "458 Place Jacques-Cartier", site: "https://pubmontreal.com/"},
	{name: "Jacopo", type: "Restaurant", address: "436 Place Jacques-Cartier", site: "https://jacopomtl.com/en/"},
	{name: "Restaurant Papillon", type: "Restaurant", address: "85 Rue Saint-Paul Est", site: "https://restaurantpapillon.business.site/"},
	{name: "Trattoria Gio", type: "Restaurant", address: "452 Place Jacques-Cartier", site: "https://www.trattoriagio.com/english/"},
	{name: "Restaurant Jacques-Cartier", type: "Restaurant", address: "444 Place Jacques-Cartier", site: "https://www.restaurantjacquescartier.ca/?lang=en"},
	{name: "La Mar&eacute;e", type: "Restaurant", address: "404 Place Jacques-Cartier", site: "#"},
	{name: "Pincette Bar &agrave; Homard", type: "Restaurant", address: "94 Rue Saint-Paul Est", site: "https://pincettemtl.com/en/"},
	{name: "Brasserie 321", type: "Restaurant", address: "321 Place Jacques-Cartier", site: "https://www.brasserie321.ca/?lang=en"},
	{name: "Le Muscadin", type: "Restaurant", address: "443 Rue Saint-Vincent", site: "https://www.lemuscadin.ca/"},
	{name: "Caffe Un Po&#39; Di Pi&ugrave;", type: "Restaurant", address: "3 Rue de la Commune Est", site: "https://www.caffeunpodipiu.com/"}];
	
	PlaceDArmes = [{name: "Old Montreal", type: "District", address: "", site: "https://vieuxmontreal.ca/en/"},
	{name: "Old Port of Montreal", type: "Port", address: "333 Rue de la Commune Ouest", site: "https://www.oldportofmontreal.com/"},
	{name: "Centre des Sciences de Montr&eacute;al", type: "Museum", address: "2 Rue de la Commune Ouest", site: "https://www.montrealsciencecentre.com/"},
	{name: "Mus&eacute;e Pointe-&agrave;-Calli&egrave;re", type: "Museum", address: "350 Place Royale", site: "https://pacmusee.qc.ca/en/"},
	{name: "Douanes de Montr&eacute;al", type: "Museum", address: "150 Rue Saint-Paul Ouest", site: "https://pacmusee.qc.ca/en/stories-of-montreal/article/old-custom-house-one-of-our-city-s-architectural-treasures/"},
	{name: "Place d&#39;Youville", type: "Town Square", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-d-youville"},
	{name: "Gibby&#39;s", type: "Restaurant", address: "298 Place d&#39;Youville", site: "https://www.gibbys.com/"},
	{name: "SeaSalt Ceviche & Bar", type: "Restaurant", address: "351 Place Royale", site: "https://www.seasaltmontreal.ca/?lang=en"},
	{name: "Chinatown", type: "District", address: "", site: "https://www.mtl.org/en/experience/discover-neighbourhood-montreal-chinatown"},
	{name: "La Presse", type: "Office", address: "40 Rue Saint-Antoine Ouest", site: "https://www.lapresse.ca/"},
	{name: "Mission Old Brewery", type: "Historical Site", address: "915 Rue Clark", site: "https://www.missionoldbrewery.ca/en/"},
	{name: "Palais des Congr&egrave;s", type: "Convention Centre", address: "1001 Place Jean-Paul-Riopelle", site: "https://congresmtl.com/en/"},
	{name: "Palais de Justice de Montr&eacute;al", type: "Courthouse", address: "1 Rue Notre-Dame Est", site: "https://www.justice.gouv.qc.ca/en/join-us/find-a-courthouse/montreal-courthouse/"},
	{name: "Basilique Notre-Dame", type: "Church", address: "110 Rue Notre-Dame Ouest", site: "https://www.basiliquenotredame.ca/en"},
	{name: "Place d&#39;Armes", type: "Historical Site", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-d-armes"},
	{name: "BMO Headquarters", type: "Office", address: "119 Rue Saint-Jacques", site: "https://branches.bmo.com/qc/montreal/b0001/"},
	{name: "&Eacute;difice New York Life Insurance", type: "Office", address: "511 Place d&#39;Armes", site: "http://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=100143&type=bien"},
	{name: "H&ocirc;tel Saint-Sulpice", type: "Hotel", address: "414 Rue Saint-Sulpice", site: "https://www.lesaintsulpice.com/en/"},
	{name: "Complexe Guy-Favreau / Services Canada", type: "Government", address: "200 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "http://complexeguyfavreau.com/en/"},
	{name: "Complexe Desjardins", type: "Mall", address: "150 Rue Sainte-Catherine Ouest", site: "https://www.complexedesjardins.com/en"},
	{name: "H&ocirc;tel Place d&#39;Armes", type: "Hotel", address: "55 Rue Saint-Jacques", site: "https://hotelplacedarmes.com/"},
	{name: "Terrasse Place d&#39;Armes", type: "Restaurant", address: "55 Rue Saint-Jacques", site: "http://terrasseplacedarmes.com/en/oasis-urbain/"},
	{name: "Kyo Bar Japonais", type: "Restaurant", address: "711 C&ocirc;te de la Place d&#39;Armes", site: "https://kyobar.com/en/"},
	{name: "Holiday Inn Montr&eacute;al Centre-Ville Downtown", type: "Hotel", address: "999 Rue Saint-Urbain", site: "https://www.ihg.com/holidayinn/hotels/us/en/montreal/yulca/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-CA-_-YULCA"},
	{name: "H&ocirc;tel Uville", type: "Hotel", address: "204 Place d&#39;Youville", site: "https://uvillehotelmontreal.com/"},
	{name: "Auberge de la Place Royale", type: "Hotel", address: "115 Rue de la Commune Ouest", site: "http://auberge-de-la-place-royale.to-montreal-hotels.com/en/"},
	{name: "Embassy Suites by Hilton Montr&eacute;al", type: "Hotel", address: "208 Rue Saint-Antoine Ouest", site: "https://www.hilton.com/en/hotels/yuldnes-embassy-suites-montreal/"},
	{name: "Auberge du Vieux-Port", type: "Hotel", address: "97 Rue de la Commune Est", site: "http://aubergeduvieuxport.com/"},
	{name: "Verses Bistro", type: "Restaurant", address: "100 Rue Saint-Paul Ouest", site: "https://versesrestaurant.com/en/"},
	{name: "H&ocirc;tel Nelligan", type: "Hotel", address: "106 Rue Saint-Paul Ouest", site: "https://hotelnelligan.com/"},
	{name: "Terrasse Nelligan", type: "Restaurant", address: "106 Rue Saint-Paul Ouest", site: "http://terrassenelligan.com/home/"},
	{name: "Taverne Gaspar", type: "Restaurant", address: "89 Rue de la Commune Est", site: "https://tavernegaspar.com/en/"},
	{name: "Restaurant M&eacute;chant Boeuf", type: "Restaurant", address: "124 Rue Saint-Paul Ouest", site: "https://mechantboeuf.com/en/"},
	{name: "Caisse de D&eacute;p&ocirc;t et Placement du Qu&eacute;bec", type: "Agency", address: "1000 Place Jean-Paul-Riopelle", site: "https://www.cdpq.com/en"},
	{name: "Place Jean-Paul-Riopelle", type: "Town Square", address: "1000 Place Jean-Paul-Riopelle", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-jean-paul-riopelle"},
	{name: "&Eacute;difice Jacques-Parizeau", type: "Office", address: "1000 Place Jean-Paul-Riopelle", site: "http://edificejacques-parizeau.com/en/"},
	{name: "&Eacute;glise de la Mission-Catholique-Chinoise-du-Saint-Esprit", type: "Church", address: "979 Rue C&ocirc;t&eacute;", site: "https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=92746&type=bien"},
	{name: "H&ocirc;tel &Eacute;pik Montr&eacute;al", type: "Hotel", address: "171 Rue Saint-Paul Ouest", site: "http://www.epikmontreal.com/"},
	{name: "Le Petit H&ocirc;tel", type: "Hotel", address: "168 Rue Saint-Paul Ouest", site: "https://petithotelmontreal.com/"},
	{name: "Coll&egrave;ge Sup&eacute;rieur de Montr&eacute;al", type: "College", address: "205 Avenue Viger Ouest", site: "https://www.collegecsm.com/en/home.html"},
	{name: "Ogilvy, Montreal offices", type: "Office", address: "215 Rue Saint-Jacques", site: "https://www.ogilvy.com/ca/"},
	{name: "Vieux S&eacute;minaire de Saint-Sulpice", type: "Historical Site", address: "116 Rue Notre-Dame Ouest", site: "https://universcultureldesaintsulpice.ca/en/vs_en.html"},
	{name: "500 Place d&#39;Armes", type: "Office", address: "500 Place d&#39;Armes", site: "#"},
	{name: "Centaur Theatre", type: "Theatre", address: "453 Rue Saint-Fran&ccedil;ois-Xavier", site: "https://centaurtheatre.com/"},
	{name: "H&ocirc;tel Bonaparte", type: "Hotel", address: "447 Rue Saint-Fran&ccedil;ois-Xavier", site: "http://bonaparte.com/en/"},
	{name: "Centre de Commerce Mondial de Montr&eacute;al", type: "Mall", address: "747 Rue du Square-Victoria", site: "https://www.alliedreit.com/property/__trashed/"},
	{name: "Place Sun-Yat-Sen", type: "Park", address: "1055 Rue Clark", site: "https://montreal.ca/en/places/parc-sun-yat-sen"},
	{name: "H&ocirc;tel Monville", type: "Hotel", address: "1041 Rue de Bleury", site: "https://www.hotelmonville.com/en/"},
	{name: "SNC-Lavalin", type: "Office", address: "455 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.snclavalin.com/en"},
	{name: "H&ocirc;tel Le Dauphin Montr&eacute;al Centre-Ville", type: "Hotel", address: "1025 Rue de Bleury", site: "https://www.hotelsdauphin.ca/en/hotels/montreal/"},
	{name: "Saint Patrick&#39;s Basilica", type: "Church", address: "460 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "http://www.stpatricksmtl.ca/"},
	{name: "&Eacute;difice Aldred", type: "Office", address: "507 Place d&#39;Armes", site: "https://imtl.org/montreal/building/Aldred-Building.php"},
	{name: "Cour d&#39;Appel du Qu&eacute;bec", type: "Courthouse", address: "100 Rue Notre-Dame Est", site: "https://courdappelduquebec.ca/en/"},
	{name: "R&eacute;gie des Alcools, des Courses et des Jeux du Qu&eacute;bec, Montreal offices", type: "Agency", address: "1 Rue Notre-Dame Est", site: "https://www.racj.gouv.qc.ca/accueil.html"},
	{name: "Expedia, Montreal offices", type: "Office", address: "63 Rue de Br&eacute;soles", site: "https://www.expedia.ca/"},
	{name: "SpringHill Suites Vieux Montr&eacute;al", type: "Hotel", address: "445 Rue Saint-Jean-Baptiste", site: "https://www.marriott.com/hotels/travel/yulsh-springhill-suites-old-montreal"},
	{name: "Place Marguerite-Bourgeoys", type: "Park", address: "", site: "https://montreal.ca/en/places/place-marguerite-bourgeoys"},
	{name: "&Eacute;cole du Barreau", type: "School", address: "445 Boulevard Saint-Laurent", site: "http://www.ecoledubarreau.qc.ca/fr/"},
	{name: "Modavie", type: "Restaurant", address: "1 Rue Saint-Paul Ouest", site: "https://modavie.com/en/"},
	{name: "Toqu&eacute;!", type: "Restaurant", address: "900 Place Jean-Paul-Riopelle", site: "https://www.restaurant-toque.com/en"},
	{name: "Pub Saint Pierre", type: "Restaurant", address: "410 Rue Saint-Pierre", site: "https://www.pubsaintpierre.ca/"},
	{name: "Terrasse sur l&#39;Auberge", type: "Restaurant", address: "97 Rue de la Commune Est", site: "https://aubergeduvieuxport.com/food/terrasse-sur-lauberge/"},
	{name: "Restaurant Oskar", type: "Restaurant", address: "414 Rue Saint-Sulpice", site: "http://restaurantoskar.com/"},
	{name: "Brasserie 701", type: "Restaurant", address: "701 C&ocirc;te de la Place d&#39;Armes", site: "https://brasserie701.com/en/"},
	{name: "Restaurant Sauvage", type: "Restaurant", address: "52 Rue Saint-Jacques", site: "https://www.restaurantsauvage.com/"},
	{name: "Humaniti H&ocirc;tel Montr&eacute;al", type: "Hotel", address: "340 Rue de la Gaucheti&egrave;re Ouest", site: "https://www.humanitihotel.com/"},
	{name: "Hayat", type: "Restaurant", address: "131 Rue de la Commune Ouest", site: "https://hayatmontreal.com"}];
	
	SquareVictoria = [{name: "Old Montreal", type: "District", address: "", site: "https://vieuxmontreal.ca/en/"},
	{name: "Old Port of Montreal", type: "Port", address: "333 Rue de la Commune Ouest", site: "https://www.oldportofmontreal.com/"},
	{name: "Square Victoria", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-victoria"},
	{name: "Quebecor Media", type: "Office", address: "612 Rue Saint-Jacques", site: "https://www.quebecor.com/en/home"},
	{name: "Tour de la Bourse", type: "Office", address: "800 Rue Gauvin", site: "http://www.tourdelabourse.com/"},
	{name: "Tour Banque Nationale", type: "Office", address: "600 Rue de la Gaucheti&egrave;re Ouest", site: "#"},
	{name: "Tour Viger", type: "Office", address: "525 Avenue Viger Ouest", site: "https://www.touraimia.com/en/index.php"},
	{name: "Place Jean-Paul-Riopelle", type: "Town Square", address: "1000 Place Jean-Paul-Riopelle", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-jean-paul-riopelle"},
	{name: "Quartier International", type: "District", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/quartier-international-de-montreal"},
	{name: "ICAO Building", type: "Office", address: "999 Boulevard Robert-Bourassa", site: "https://www.icao.int/Pages/default.aspx"},
	{name: "Centre de Commerce Mondial de Montr&eacute;al", type: "Mall", address: "747 Rue du Square-Victoria", site: "https://www.alliedreit.com/property/__trashed/"},
	{name: "H&ocirc;tel Le Saint-James", type: "Hotel", address: "355 Rue Saint-Jacques", site: "https://hotellestjames.com/"},
	{name: "Raymond Chabot Grant Thornton", type: "Office", address: "600 Rue de la Gaucheti&egrave;re Ouest", site: "https://www.rcgt.com/en/offices/montreal/"},
	{name: "Somwhr Liquor Lounge", type: "Restaurant", address: "401 Rue Notre-Dame Ouest", site: "http://somwhr.com/"},
	{name: "Le Westin Montr&eacute;al", type: "Hotel", address: "270 Rue Saint-Antoine Ouest", site: "https://www.marriott.com/hotels/travel/yulle-le-westin-montreal/"},
	{name: "W Montr&eacute;al", type: "Hotel", address: "901 Rue du Square-Victoria", site: "https://www.marriott.com/hotels/travel/yulwh-w-montreal/"},
	{name: "L H&ocirc;tel Montr&eacute;al", type: "Hotel", address: "262 Rue Saint-Jacques", site: "http://www.lhotelmontreal.com/default-en.html"},
	{name: "H&ocirc;tel Intercontinental Montr&eacute;al", type: "Hotel", address: "360 Rue Saint-Antoine Ouest", site: "https://montreal.intercontinental.com/en/"},
	{name: "Cit&eacute; du Multim&eacute;dia", type: "District", address: "", site: "https://grandquebec.com/montreal-touristique/cite-multimedia/"},
	{name: "Palais des Congr&egrave;s", type: "Convention Centre", address: "1001 Place Jean-Paul-Riopelle", site: "https://congresmtl.com/en/"},
	{name: "Place Bonaventure", type: "Convention Centre", address: "800 Rue de la Gaucheti&egrave;re Ouest", site: "http://placebonaventure.com/en/"},
	{name: "evo Montr&eacute;al", type: "Residence", address: "777 Boulevard Robert-Bourassa", site: "https://www.evomontreal.com/"},
	{name: "Portus 360", type: "Restaurant", address: "777 Boulevard Robert-Bourassa", site: "https://portus360.com/en/"},
	{name: "Embassy Suites by Hilton Montr&eacute;al", type: "Hotel", address: "208 Rue Saint-Antoine Ouest", site: "https://www.hilton.com/en/hotels/yuldnes-embassy-suites-montreal/"},
	{name: "Caisse de D&eacute;p&ocirc;t et Placement du Qu&eacute;bec", type: "Agency", address: "1000 Place Jean-Paul-Riopelle", site: "https://www.cdpq.com/en"},
	{name: "AON", type: "Office", address: "700 Rue de la Gaucheti&egrave;re Ouest", site: "https://www.aon.com/canada/default.jsp"},
	{name: "&Eacute;difice Jacques-Parizeau", type: "Office", address: "1000 Place Jean-Paul-Riopelle", site: "http://edificejacques-parizeau.com/en/"},
	{name: "Soci&eacute;t&eacute; Qu&eacute;b&eacute;coise d&#39;Information Juridique", type: "Agency", address: "715 Rue du Square-Victoria", site: "https://soquij.qc.ca/"},
	{name: "CSL Group", type: "Office", address: "759 Rue du Square-Victoria", site: "https://www.cslships.com/en"},
	{name: "Maison des R&eacute;gions", type: "Office", address: "500 Rue Saint-Jacques", site: "https://maisondesregions.com/"},
	{name: "Place Victoria", type: "Mall", address: "800 Rue du Square-Victoria", site: "http://www.groupepetra.com/eng/properties/view?id=41index2_fr.php"},
	{name: "World Anti-Doping Agency", type: "Office", address: "800 Rue du Square-Victoria", site: "https://www.wada-ama.org/"},
	{name: "International Air Transport Association", type: "Office", address: "800 Rue du Square-Victoria", site: "https://www.iata.org/"},
	{name: "Autorit&eacute; des March&eacute;s Financiers", type: "Agency", address: "800 Rue du Square-Victoria", site: "https://lautorite.qc.ca/en"},
	{name: "La Vo&ucirc;te", type: "Restaurant", address: "360 Rue Saint-Jacques", site: "https://lavoutemontreal.com/en/home/"},
	{name: "Ivanho&eacute; Cambridge", type: "Office", address: "1001 Rue du Square-Victoria", site: "https://www.ivanhoecambridge.com/en/"},
	{name: "Atlific Hotels", type: "Office", address: "250 Rue Saint-Antoine Ouest", site: "https://www.atlific.com/"},
	{name: "St-James Theatre", type: "Reception Hall", address: "265 Rue Saint-Jacques", site: "https://www.stjamestheatre.ca/english"},
	{name: "CIMA+", type: "Office", address: "740 Rue Notre-Dame Ouest", site: "https://www.cima.ca/en/"},
	{name: "KoSc&egrave;ne", type: "Office", address: "651 Rue Notre-Dame Ouest", site: "http://www.koscene.ca/"},
	{name: "Saint-M2", type: "Residence", address: "464 Rue Saint-Henri", site: "https://www.saintm2.com/en/"},
	{name: "Chamber of Commerce of Metropolitan Montreal", type: "Office", address: "393 Rue Saint-Jacques", site: "https://www.ccmm.ca/en/"},
	{name: "H&ocirc;tel Gault", type: "Hotel", address: "449 Rue Sainte-H&eacute;l&egrave;ne", site: "https://hotelgault.com/"},
	{name: "Appartements-Boutique", type: "Residence", address: "715 Rue William", site: "http://www.appartementsboutique.ca/en/home.html"},
	{name: "Square des Fr&egrave;res-Charon", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-des-freres-charon"},
	{name: "DOMO Appartements", type: "Residence", address: "650 Rue Wellington", site: "https://www.mondev.ca/apartments-for-rent-montreal/old-montreal/wellington-650"},
	{name: "Alstom", type: "Office", address: "1050 C&ocirc;te du Beaver Hall", site: "https://www.alstom.com/"},
	{name: "Place du Fr&egrave;re-Andr&eacute;", type: "Park", address: "", site: "https://montreal.ca/en/places/place-du-frere-andre"},
	{name: "Toqu&eacute;!", type: "Restaurant", address: "900 Place Jean-Paul-Riopelle", site: "https://www.restaurant-toque.com/en"},
	{name: "Terrasse W Montr&eacute;al", type: "Restaurant", address: "901 Rue du Square-Victoria", site: "https://www.marriott.com/hotels/hotel-information/restaurant/details/yulwh-w-montreal/6760117/"},
	{name: "H&ocirc;tel St-Paul", type: "Hotel", address: "355 Rue McGill", site: "https://hotelstpaul.com/en/"},
	{name: "The Farsides", type: "Restaurant", address: "690 Rue Notre-Dame Ouest", site: "https://www.thefarsides.com/"},
	{name: "Holder", type: "Restaurant", address: "407 Rue McGill", site: "http://restaurantholder.com/en/"},
	{name: "Le Cartet Resto Boutique", type: "Restaurant", address: "106 Rue McGill", site: "https://lecartet.ca/indexen.html"},
	{name: "Dandy", type: "Restaurant", address: "244 Rue Saint-Jacques", site: "http://dandymtl.com/"},
	{name: "Le 409", type: "Restaurant", address: "409 Rue McGill", site: "https://le409.com/"},
	{name: "Monarque", type: "Restaurant", address: "406 Rue Saint-Jacques", site: "https://restaurantmonarque.ca/en"},
	{name: "&Eacute;difice du Grand Tronc", type: "Government", address: "360 Rue McGill", site: "https://imtl.org/montreal/building/edifice_Grand_Tronc.php"},
	{name: "Helena", type: "Restaurant", address: "438 Rue McGill", site: "https://restauranthelena.com/en/"},
	{name: "Le Butterfly", type: "Restaurant", address: "324 Rue Saint-Paul Ouest", site: "https://lebutterflymtl.com"}];
	
	Bonaventure = [{name: "Gare Centrale", type: "Train Station", address: "895 Rue de la Gaucheti&egrave;re Ouest", site: "https://garecentrale.ca/en/"},
	{name: "Terminus Centre-Ville", type: "Bus Terminal", address: "1000 Rue de la Gaucheti&egrave;re Ouest", site: "https://exo.quebec/en/trip-planner/intermodal-installations/terminus-centre-ville"},
	{name: "Les Halles de la Gare", type: "Mall", address: "895 Rue de la Gaucheti&egrave;re Ouest", site: "https://garecentrale.ca/en/halles-de-la-gare"},
	{name: "Place Bonaventure", type: "Convention Centre", address: "800 Rue de la Gaucheti&egrave;re Ouest", site: "http://placebonaventure.com/en/"},
	{name: "STM Headquarters", type: "Office", address: "800 Rue de la Gaucheti&egrave;re Ouest", site: "http://www.stm.info/en"},
	{name: "Bell Centre", type: "Sports", address: "1909 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.centrebell.ca/en"},
	{name: "1000 De La Gaucheti&egrave;re", type: "Office", address: "1000 Rue de la Gaucheti&egrave;re Ouest", site: "https://www.le1000.com/en"},
	{name: "Place Ville Marie", type: "Mall", address: "1 Place Ville Marie", site: "http://www.placevillemarie.com/en"},
	{name: "H&ocirc;tel Fairmont Reine Elizabeth", type: "Hotel", address: "900 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.fairmont.com/queen-elizabeth-montreal/"},
	{name: "Marriott Ch&acirc;teau Champlain", type: "Hotel", address: "1050 Rue de la Gaucheti&egrave;re Ouest", site: "https://www.marriott.com/hotels/travel/yulcc-montreal-marriott-chateau-champlain/"},
	{name: "ICAO Building", type: "Office", address: "999 Boulevard Robert-Bourassa", site: "https://www.icao.int/Pages/default.aspx"},
	{name: "Cath&eacute;drale Marie Reine du Monde", type: "Church", address: "1085 Rue de la Cath&eacute;drale", site: "http://www.cathedralecatholiquedemontreal.org/"},
	{name: "Square Dorchester", type: "Town Square", address: "2903 Rue Peel", site: "https://montreal.ca/en/places/square-dorchester"},
	{name: "&Eacute;difice Sun Life", type: "Office", address: "1155 Rue Metcalfe", site: "https://www.sunlifebuilding.ca/"},
	{name: "Time Supper Club", type: "Reception Hall", address: "997 Rue Saint-Jacques", site: "https://timesupperclub.com/"},
	{name: "Immigration, Refugees and Citizenship Canada", type: "Agency", address: "1010 Rue Saint-Antoine Ouest", site: "https://www.canada.ca/en/services/immigration-citizenship.html"},
	{name: "H&ocirc;tel Bonaventure", type: "Hotel", address: "900 Rue de la Gaucheti&egrave;re Ouest", site: "https://hotelbonaventure.com/en/"},
	{name: "Place du Canada", type: "Town Square", address: "1010 Rue de la Gaucheti&egrave;re Ouest", site: "https://montreal.ca/en/places/place-du-canada"},
	{name: "1250 Ren&eacute;-L&eacute;vesque", type: "Office", address: "1250 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://imtl.org/montreal/building/IBM-Marathon.php"},
	{name: "Vargas", type: "Restaurant", address: "690 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.vargas.ca/"},
	{name: "Telus, Montreal offices", type: "Office", address: "630 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.telus.com/en/"},
	{name: "AlphaCCO", type: "Office", address: "625 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://alphacco.com/en/"},
	{name: "Curateur Public du Qu&eacute;bec", type: "Agency", address: "600 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.curateur.gouv.qc.ca/cura/en/index.html"},
	{name: "Ordre des Dentistes du Qu&eacute;bec", type: "Agency", address: "800 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "http://www.odq.qc.ca/Home/tabid/149/language/en-US/Default.aspx"},
	{name: "Bombardier", type: "Office", address: "800 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://bombardier.com/en"}];
	
	LucienLAllier = [{name: "Bell Centre", type: "Sports", address: "1909 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.centrebell.ca/en"},
	{name: "Tour Deloitte", type: "Office", address: "1115 Rue Saint-Antoine Ouest", site: "https://www.cfoffice.ca/property/home/cf-deloitte-tower"},
	{name: "Tour des Canadiens", type: "Residence", address: "750 Rue Peel", site: "http://tourdescanadiens.com/en/"},
	{name: "&Eacute;cole de Technologie Sup&eacute;rieure", type: "College", address: "1100 Rue Notre-Dame Ouest", site: "http://www.etsmtl.ca/en/home"},
	{name: "Gare Windsor", type: "Office", address: "1100 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.cfoffice.ca/property/home/cf-the-windsor-station-office"},
	{name: "WeWork L&#39;Avenue", type: "Office", address: "1275 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.wework.com/buildings/l-avenue--montreal--QC"},
	{name: "Coll&egrave;ge Herzing", type: "College", address: "1616 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.herzing.ca/locations/montreal/"},
	{name: "Holiday Inn & Suites Montr&eacute;al Centre-Ville Ouest", type: "Hotel", address: "1390 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.ihg.com/holidayinn/hotels/us/en/montreal/yulcc/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-CA-_-YULCC"},
	{name: "Le Centre Sheraton Montr&eacute;al", type: "Hotel", address: "1201 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.marriott.com/hotels/travel/yulsi-le-centre-sheraton-montreal-hotel/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTcxNDk2Mi03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"},
	{name: "Novotel Montr&eacute;al Centre", type: "Hotel", address: "1180 Rue de la Montagne", site: "https://www.novotelmontreal.com/"},
	{name: "H&ocirc;tel Le Crystal", type: "Hotel", address: "1100 Rue de la Montagne", site: "https://www.hotellecrystal.com/"},
	{name: "Le Nouvel H&ocirc;tel & Spa", type: "Hotel", address: "1740 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.lenouvelhotel.com/"},
	{name: "Coll&egrave;ge O&#39;Sullivan", type: "College", address: "1191 Rue de la Montagne", site: "http://www.osullivan.edu/en"},
	{name: "Tribunal Administratif du Logement du Qu&eacute;bec, Montreal offices", type: "Agency", address: "1425 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.tal.gouv.qc.ca/en"},
	{name: "1350-1360 Ren&eacute;-L&eacute;vesque Ouest", type: "Office", address: "1360 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.1350rene-levesque.com/"},
	{name: "Best Western Plus Montr&eacute;al Centre-Ville H&ocirc;tel Europa", type: "Hotel", address: "1240 Rue Drummond", site: "https://www.bestwestern.com/en_US/book/hotel-rooms.67013.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67013"},
	{name: "1250 Ren&eacute;-L&eacute;vesque", type: "Office", address: "1250 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://imtl.org/montreal/building/IBM-Marathon.php"},
	{name: "Parc Julia-Drummond", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-julia-drummond"},
	{name: "Auberge Les Bons Matins", type: "Hotel", address: "1401 Avenue Argyle", site: "https://www.bonsmatins.com/en"},
	{name: "Roccabella", type: "Residence", address: "1059 Rue de la Montagne", site: "https://roccabella.ca/en/"},
	{name: "CGI, Montreal offices", type: "Office", address: "1350 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.cgi.com/en"}];
	
	GeorgesVanier = [{name: "Parc Oscar-Peterson", type: "Park", address: "810 Rue Chatham", site: "https://montreal.ca/en/places/parc-oscar-peterson"},
	{name: "Paroisse Saint Anthony of Padua", type: "Church", address: "1950 Rue Saint-Antoine Ouest", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-anthony-padua"},
	{name: "Parc de l&#39;Association-Eur&ecirc;ka", type: "Park", address: "576 Rue Chatham", site: "https://montreal.ca/en/places/parc-de-lassociation-eureka"},
	{name: "Parc Herbert-Brown-Ames", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-herbert-brown-ames"},
	{name: "&Eacute;cole de la Petite-Bourgogne", type: "School", address: "555 Rue des Seigneurs", site: "https://petite-bourgogne.cssdm.gouv.qc.ca/"},
	{name: "Centre Sportif de la Petite-Bourgogne", type: "Cultural Centre", address: "1825 Rue Notre-Dame Ouest", site: "http://www.centresportifdelapetitebourgogne.ca/en/"},
	{name: "Parc des Meubliers", type: "Park", address: "1935 Rue Notre-Dame Ouest", site: "https://montreal.ca/en/places/parc-des-meubliers"},
	{name: "Parc Herb-Trawick", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-herb-trawick"},
	{name: "Habitations de l&#39;&Eacute;rabli&egrave;re", type: "Residence", address: "1745 Rue Notre-Dame Ouest", site: "https://www.omhm.qc.ca/en/tenant-services/habitations-de-lerabliere"},
	{name: "Le SE7T", type: "Residence", address: "400 Avenue Richmond", site: "https://se7t.ca/en/"}];
	
	PlaceSaintHenri = [{name: "Parc Sir-Georges-&Eacute;tienne-Cartier", type: "Park", address: "127 Rue du Square-Sir-George-&Eacute;tienne-Cartier", site: "https://montreal.ca/en/places/square-sir-george-etienne-cartier"},
	{name: "Parc Louis-Cyr", type: "Park", address: "167 Rue Saint-Ferdinand", site: "https://montreal.ca/en/places/parc-louis-cyr"},
	{name: "Institut Technique Aviron", type: "Trade School", address: "5460 Avenue Royalmount", site: "http://www.avirontech.com/"},
	{name: "Parc Saint-Henri", type: "Park", address: "753 Rue Agn&egrave;s", site: "https://montreal.ca/en/places/parc-saint-henri"},
	{name: "Piscine Saint-Henri", type: "Pool", address: "4055 Rue Saint-Jacques", site: "https://montreal.ca/en/places/piscine-saint-henri"},
	{name: "CLSC Saint-Henri", type: "Agency", address: "3833 Rue Notre-Dame Ouest", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/clsc-de-saint-henri"},
	{name: "&Eacute;cole des M&eacute;tiers du Sud-Ouest-de-Montr&eacute;al", type: "Trade School", address: "717 Rue Saint-Ferdinand", site: "https://ecole-metiers-sud-ouest.csdm.ca/"},
	{name: "Parc &Eacute;mile-Berliner", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-emile-berliner"},
	{name: "&Eacute;cole Ludger-Duvernay", type: "School", address: "770 Rue du Couvent", site: "https://ludger-duvernay.cssdm.gouv.qc.ca/"},
	{name: "Arthurs Nosh Bar", type: "Restaurant", address: "4621 Rue Notre-Dame Ouest", site: "http://arthursmtl.com/"},
	{name: "&Eacute;glise Saint-Zotique", type: "Church", address: "4561 Rue Notre-Dame Ouest", site: "https://eglise-saint-zotique.business.site/"},
	{name: "Tacos Frida", type: "Restaurant", address: "4350 Rue Notre-Dame Ouest", site: "https://www.tacosfridamtl.ca/?lang=en"},
	{name: "Biblioth&egrave;que Saint-Henri", type: "Library", address: "4707 Rue Notre-Dame Ouest", site: "https://montreal.ca/en/places/bibliotheque-saint-henri"}];
	
	Vendome = [{name: "McGill University Health Centre", type: "Hospital", address: "1001 Boulevard D&eacute;carie", site: "https://muhc.ca/"},
	{name: "Quilles G Plus Rose Bowl", type: "Sports", address: "6510 Rue Saint-Jacques", site: "https://www.quillesgplus.com/en/quilles-g-plus-rose-bowl/"}];
	
	VillaMaria = [{name: "&Eacute;cole Villa-Maria", type: "School", address: "4245 Boulevard D&eacute;carie", site: "https://www.villamaria.qc.ca/en"},
	{name: "C&eacute;gep Marianopolis", type: "College", address: "4873 Avenue Westmount", site: "https://www.marianopolis.edu/"},
	{name: "Acad&eacute;mie Marymount", type: "School", address: "5100 Chemin de la C&ocirc;te Saint-Luc", site: "http://marymount.emsb.qc.ca/"},
	{name: "Village Monkland", type: "District", address: "", site: "#"}];
	
	CoteSainteCatherine = [{name: "Mus&eacute;e de l&#39;Holocauste", type: "Museum", address: "5151 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://museeholocauste.ca/en/"},
	{name: "Centre Segal", type: "Theatre", address: "5170 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.segalcentre.org/"},
	{name: "Centre Cummings", type: "Residence", address: "5700 Avenue de Westbury", site: "https://cummingscentre.org/"},
	{name: "Talmud Torahs Unis de Montr&eacute;al", type: "School", address: "4840 Avenue Saint-Kevin", site: "https://azrieli-tth.ca/talmud-torah/welcome/"},
	{name: "Centre Communautaire Juif", type: "Cultural Centre", address: "5400 Avenue de Westbury", site: "https://www.ymywha.com/"},
	{name: "Spanish & Portuguese Synagogue of Montreal", type: "Synagogue", address: "4894 Avenue Saint-Kevin", site: "https://www.thespanish.org/"},
	{name: "&Eacute;cole Internationale Marie de France", type: "School", address: "4700 Rue Fulton", site: "https://www.cimf.ca/"},
	{name: "Coll&egrave;ge International Marie de France", type: "School", address: "4635 Chemin Queen-Mary", site: "https://www.cimf.ca/"},
	{name: "Parc Mackenzie-King", type: "Park", address: "4907 Avenue Saint-Kevin", site: "https://montreal.ca/en/places/parc-mackenzie-king"},
	{name: "Institut Universitaire de G&eacute;riatrie de Montr&eacute;al, Alfred-Desrochers Pavilion", type: "Residence", address: "5325 Avenue Victoria", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-alfred-desrochers"}];
	
	Plamondon = [{name: "Centre Commercial Van Horne", type: "Shopping", address: "4861 Avenue Van Horne", site: "https://fcr.ca/properties/quebec/montreal/centre-commercial-van-horne-2/"},
	{name: "Shadd Health & Business Centre", type: "Trade School", address: "1000 Avenue Old Orchard", site: "http://www.shadd.com/"},
	{name: "Little Manila", type: "District", address: "", site: "#"},
	{name: "Ar&eacute;na Bill-Durnan", type: "Sports", address: "4988 Rue V&eacute;zina", site: "https://montreal.ca/en/places/arena-bill-durnan"},
	{name: "Centre Sportif C&ocirc;te-des-Neiges", type: "Sports", address: "4880 Avenue Van Horne", site: "https://www.loisirssportifscdn-ndg.com/en/cote-des-neiges-sports-center/"},
	{name: "&Eacute;cole Primaire Coronation", type: "School", address: "4810 Avenue Van Horne", site: "https://coronation.emsb.qc.ca/coronation"},
	{name: "Ramada Plaza Montr&eacute;al", type: "Hotel", address: "6445 Boulevard D&eacute;carie", site: "https://www.ramadaplazamontreal.com/en-us"},
	{name: "Parc Van Horne", type: "Park", address: "4900 Avenue Van Horne", site: "https://montreal.ca/en/places/parc-van-horne"},
	{name: "&Eacute;cole du Petit-Chapiteau", type: "School", address: "4890 Avenue Carlton", site: "https://petit-chapiteau.csdm.ca/"}];
	
	Namur = [{name: "Gibeau Orange Julep", type: "Restaurant", address: "7700 Boulevard D&eacute;carie", site: "https://orangejulep.ca/menu-english/"},
	{name: "Centre Commercial D&eacute;carie Square", type: "Mall", address: "6900 Boulevard D&eacute;carie", site: "#"},
	{name: "SmartCentres Montr&eacute;al D&eacute;carie", type: "Shopping", address: "5400 Rue Jean-Talon Ouest", site: "https://www.smartcentres.com/shop/property/smartcentres-montreal-decarie-qc/"},
	{name: "SPCA Montr&eacute;al", type: "Agency", address: "5215 Rue Jean-Talon Ouest", site: "https://www.spca.com/en/"},
	{name: "Parc Nelson-Mandela", type: "Park", address: "4920 Rue V&eacute;zina", site: "https://montreal.ca/en/places/parc-nelson-mandela"},
	{name: "&Eacute;cole des Nations", type: "School", address: "4860 Rue V&eacute;zina", site: "https://des-nations.csdm.ca/"},
	{name: "H&ocirc;tel Ruby Foo&#39;s", type: "Hotel", address: "7655 Boulevard D&eacute;carie", site: "https://www.hotelrubyfoos.com/"},
	{name: "Parc Elie-Wiesel", type: "Park", address: "5211 Avenue de Courtrai", site: "https://montreal.ca/en/places/parc-elie-wiesel"}];
	
	DeLaSavane = [{name: "Cimeti&egrave;re Baron de Hirsch", type: "Cemetery", address: "5015 Rue de la Savane", site: "https://barondehirsch.com/"},
	{name: "Kart-O-Mania", type: "Sports", address: "5196 Rue de la Savane", site: "http://www.kart-o-mania.ca/en/"}];
	
	DuCollege = [{name: "Vanier College", type: "College", address: "821 Avenue Sainte-Croix", site: "https://www.vaniercollege.qc.ca/"},
	{name: "C&eacute;gep de Saint-Laurent", type: "College", address: "625 Avenue Sainte-Croix", site: "https://www.cegepsl.qc.ca/"},
	{name: "Parc Decelles", type: "Park", address: "845 Rue Roy", site: "https://montreal.ca/en/places/parc-decelles"},
	{name: "Ar&eacute;na Ronald-Caron", type: "Sports", address: "625 Avenue Sainte-Croix", site: "https://athletics.dawsoncollege.qc.ca/hockey/venue/ronald-caron-arena/"},
	{name: "Parc Gohier", type: "Park", address: "730 Rue Buchanan", site: "https://montreal.ca/en/places/parc-gohier"},
	{name: "Saint-Laurent Borough Hall", type: "Government", address: "777 Boulevard Marcel-Laurin", site: "https://montreal.ca/en/places/saint-laurent-borough-hall"},
	{name: "&Eacute;cole Primaire Laurentide", type: "School", address: "465 Rue Cardinal", site: "https://laurentide.ecolesaintlaurent.ca/"},
	{name: "Biblioth&egrave;que du Vieux-Saint-Laurent", type: "Library", address: "1380 Rue de l&#39;&Eacute;glise", site: "https://montreal.ca/en/places/bibliotheque-du-vieux-saint-laurent"},
	{name: "Parc Grou", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-grou"},
	{name: "&Eacute;glise Saint-Laurent", type: "Church", address: "805 Avenue Sainte-Croix", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-laurent"},
	{name: "Biserica Sf&acirc;nta Cuvioas&abreve; Parascheva", type: "Church", address: "807 Avenue Sainte-Croix", site: "http://www.cuvioasa-parascheva-montreal.com/"}];
	
	CoteVertu = [{name: "Terminus C&ocirc;te-Vertu", type: "Bus Terminal", address: "1505 Boulevard de la C&ocirc;te-Vertu Ouest", site: "https://exo.quebec/en/trip-planner/intermodal-installations/cote-vertu-terminal"},
	{name: "Les Galeries Norgate", type: "Shopping", address: "1179 Boulevard D&eacute;carie", site: "#"},
	{name: "Place Vertu", type: "Mall", address: "3131 Boulevard de la C&ocirc;te-Vertu Ouest", site: "https://www.placevertu.com/en/"},
	{name: "Sph&egrave;retech Saint-Laurent", type: "Shopping", address: "3500 Boulevard de la C&ocirc;te-Vertu Ouest", site: "#"},
	{name: "Vanier College", type: "College", address: "821 Avenue Sainte-Croix", site: "https://www.vaniercollege.qc.ca/"},
	{name: "C&eacute;gep de Saint-Laurent", type: "College", address: "625 Avenue Sainte-Croix", site: "https://www.cegepsl.qc.ca/"},
	{name: "Parc Decelles", type: "Park", address: "845 Rue Roy", site: "https://montreal.ca/en/places/parc-decelles"},
	{name: "D&eacute;carie Hot Dogs", type: "Restaurant", address: "953 Boulevard D&eacute;carie", site: "#"},
	{name: "Centre des Loisirs de Saint-Laurent", type: "Theatre", address: "1375 Rue Grenet", site: "https://montreal.ca/en/places/centre-des-loisirs-de-saint-laurent"},
	{name: "GSK", type: "Pharmaceutical", address: "1765 Boulevard de la C&ocirc;te-Vertu Ouest", site: "https://ca.gsk.com/en-ca/"},
	{name: "&Eacute;cole Peter Hall", type: "School", address: "840 Boulevard de la C&ocirc;te-Vertu Ouest", site: "http://peterhall.qc.ca/en/"},
	{name: "&Eacute;glise Saint-Laurent", type: "Church", address: "805 Avenue Sainte-Croix", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-laurent"},
	{name: "Biserica Sf&acirc;nta Cuvioas&abreve; Parascheva", type: "Church", address: "807 Avenue Sainte-Croix", site: "http://www.cuvioasa-parascheva-montreal.com/"},
	{name: "Ar&eacute;na Ronald-Caron", type: "Sports", address: "625 Avenue Sainte-Croix", site: "https://athletics.dawsoncollege.qc.ca/hockey/venue/ronald-caron-arena/"},
	{name: "Parc B&eacute;langer", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-belanger"}];
	
	allspots = BerriUQAM.length + LionelGroulx.length + JeanTalon.length + Snowdon.length + JeanDrapeau.length + Longueuil.length + SaintMichel.length + Iberville.length 
	+ Fabre.length + DeCastelnau.length + Parc.length + Acadie.length + Outremont.length + EdouardMontpetit.length + UdeM.length + CoteDesNeiges.length + HonoreBeaugrand.length 
	+ Radisson.length + Langelier.length + Cadillac.length + Assomption.length + Viau.length + PieIX.length + Joliette.length + Prefontaine.length + Frontenac.length + Papineau.length 
	+ Beaudry.length + SaintLaurent.length + PlaceDesArts.length + McGill.length + Peel.length + Guy.length + Atwater.length + Charlevoix.length + LaSalle.length + DeLEglise.length 
	+ Verdun.length + Jolicoeur.length + Monk.length + Angrignon.length + Montmorency.length + DeLaConcorde.length + Cartier.length + HenriBourassa.length + Sauve.length 
	+ Cremazie.length + Jarry.length + Beaubien.length + Rosemont.length + Laurier.length + MontRoyal.length + Sherbrooke.length + ChampDeMars.length + PlaceDArmes.length 
	+ SquareVictoria.length + Bonaventure.length + LucienLAllier.length + GeorgesVanier.length + PlaceSaintHenri.length + Vendome.length + VillaMaria.length 
	+ CoteSainteCatherine.length + Plamondon.length + Namur.length + DeLaSavane.length + DuCollege.length + CoteVertu.length;
	document.getElementById("num-of-spots").innerHTML = "<p>Maximum possible number of results: "+allspots+".</p>";
	
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
	if(document.getElementById("search-box").value.toLowerCase() == "quartier latin")
	{
		document.getElementById("search-box").value = "Latin Quarter";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "jgh")
	{
		document.getElementById("search-box").value = "Jewish General Hospital";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "parc maisonneuve-cartier" || document.getElementById("search-box").value.toLowerCase() == "parc maisonneuve cartier" || 
	document.getElementById("search-box").value.toLowerCase() == "maisonneuve-cartier" || document.getElementById("search-box").value.toLowerCase() == "maisonneuve cartier")
	{
		document.getElementById("search-box").value = "Place Emmett-Johns";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "gay village" || document.getElementById("search-box").value.toLowerCase() == "the gay village" || 
	document.getElementById("search-box").value.toLowerCase() == "village gai" || document.getElementById("search-box").value.toLowerCase() == "le village gai" ||
	document.getElementById("search-box").value.toLowerCase() == "village gay" || document.getElementById("search-box").value.toLowerCase() == "le village gay")
	{
		document.getElementById("search-box").value = "The Village";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "csn")
	{
		document.getElementById("search-box").value = "Conf&eacute;d&eacute;ration des Syndicats Nationaux";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "ramq")
	{
		document.getElementById("search-box").value = "R&eacute;gie de l&#39;Assurance Maladie du Qu&eacute;bec";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "eaton centre" || document.getElementById("search-box").value.toLowerCase() == "eaton center" ||
	document.getElementById("search-box").value.toLowerCase() == "montreal eaton centre" || document.getElementById("search-box").value.toLowerCase() == "montreal eaton center")
	{
		document.getElementById("search-box").value = "Centre Eaton de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "place montreal trust")
	{
		document.getElementById("search-box").value = "Place Montr&eacute;al Trust";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "sun life building")
	{
		document.getElementById("search-box").value = "&Eacute;difice Sun Life";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "laurentian bank tower")
	{
		document.getElementById("search-box").value = "Tour Banque Laurentienne";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "queen elizabeth hotel" || document.getElementById("search-box").value.toLowerCase() == "fairmont queen elizabeth hotel")
	{
		document.getElementById("search-box").value = "H&ocirc;tel Fairmont Reine Elizabeth";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "dorchester square" || document.getElementById("search-box").value.toLowerCase() == "carr&eacute; dorchester" ||
	document.getElementById("search-box").value.toLowerCase() == "carre dorchester")
	{
		document.getElementById("search-box").value = "Square Dorchester";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "phillips square" || document.getElementById("search-box").value.toLowerCase() == "carr&eacute; phillips" ||
	document.getElementById("search-box").value.toLowerCase() == "carre phillips")
	{
		document.getElementById("search-box").value = "Square Phillips";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "scotiabank theatre" || document.getElementById("search-box").value.toLowerCase() == "scotiabank theater" || 
	document.getElementById("search-box").value.toLowerCase() == "scotia bank theatre" || document.getElementById("search-box").value.toLowerCase() == "scotia bank theater")
	{
		document.getElementById("search-box").value = "Th&eacute;&acirc;tre Banque Scotia";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "centre bell" || document.getElementById("search-box").value.toLowerCase() == "bell center")
	{
		document.getElementById("search-box").value = "Bell Centre";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "college lasalle" || document.getElementById("search-box").value.toLowerCase() == "coll&egrave;ge lasalle")
	{
		document.getElementById("search-box").value = "LaSalle College";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "mille carre dore" || document.getElementById("search-box").value.toLowerCase() == "mille carr&eacute; dor&eacute;" ||
	document.getElementById("search-box").value.toLowerCase() == "mille carr&eacute; dore" || document.getElementById("search-box").value.toLowerCase() == "mille carre dor&eacute;")
	{
		document.getElementById("search-box").value = "Golden Square Mile";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "forum de montreal" || document.getElementById("search-box").value.toLowerCase() == "forum de montr&eacute;al")
	{
		document.getElementById("search-box").value = "Montreal Forum";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "cabot square")
	{
		document.getElementById("search-box").value = "Square Cabot";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "stade olympique")
	{
		document.getElementById("search-box").value = "Olympic Stadium";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "stade saputo")
	{
		document.getElementById("search-box").value = "Saputo Stadium";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "botanical garden" || document.getElementById("search-box").value.toLowerCase() == "botanical gardens" ||
	document.getElementById("search-box").value.toLowerCase() == "montreal botanical garden" || document.getElementById("search-box").value.toLowerCase() == "montreal botanical gardens" ||
	document.getElementById("search-box").value.toLowerCase() == "jardin botanique de montreal")
	{
		document.getElementById("search-box").value = "Jardin Botanique de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "biodome" || document.getElementById("search-box").value.toLowerCase() == "montreal biodome" ||
	document.getElementById("search-box").value.toLowerCase() == "biodome de montreal" || document.getElementById("search-box").value.toLowerCase() == "biod&ocirc;me de montreal" ||
	document.getElementById("search-box").value.toLowerCase() == "biodome de montr&eacute;al")
	{
		document.getElementById("search-box").value = "Biod&ocirc;me de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "nuns island" || document.getElementById("search-box").value.toLowerCase() == "nuns&#39; island" ||
	document.getElementById("search-box").value.toLowerCase() == "ile des soeurs" || document.getElementById("search-box").value.toLowerCase() == "ile-des-soeurs" ||
	document.getElementById("search-box").value.toLowerCase() == "ids")
	{
		document.getElementById("search-box").value = "&Icirc;le-des-Soeurs";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "verdun beach")
	{
		document.getElementById("search-box").value = "Plage de Verdun";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "douglas institute")
	{
		document.getElementById("search-box").value = "Institut Douglas";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "ritz carlton")
	{
		document.getElementById("search-box").value = "Ritz-Carlton";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "jarry park")
	{
		document.getElementById("search-box").value = "Parc Jarry";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "iga stadium" || document.getElementById("search-box").value.toLowerCase() == "uniprix stadium")
	{
		document.getElementById("search-box").value = "Stade IGA";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "parc lafontaine")
	{
		document.getElementById("search-box").value = "Parc La Fontaine";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "china town" || document.getElementById("search-box").value.toLowerCase() == "quartier chinois")
	{
		document.getElementById("search-box").value = "Chinatown";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "hotel de ville" || document.getElementById("search-box").value.toLowerCase() == "h&ocirc;tel de ville")
	{
		document.getElementById("search-box").value = "Montreal City Hall";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "bank of montreal")
	{
		document.getElementById("search-box").value = "BMO";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "notre dame basilica" || document.getElementById("search-box").value.toLowerCase() == "notre-dame basilica" ||
	document.getElementById("search-box").value.toLowerCase() == "basilique notre dame")
	{
		document.getElementById("search-box").value = "Basilique Notre-Dame";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "montreal stock exchange" || document.getElementById("search-box").value.toLowerCase() == "montreal stock exchange tower" ||
	document.getElementById("search-box").value.toLowerCase() == "stock exchange tower")
	{
		document.getElementById("search-box").value = "Tour de la Bourse";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "international district")
	{
		document.getElementById("search-box").value = "Quartier International";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "oaci")
	{
		document.getElementById("search-box").value = "ICAO Building";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "montreal world trade centre" || document.getElementById("search-box").value.toLowerCase() == "world trade centre" ||
	document.getElementById("search-box").value.toLowerCase() == "ccmm" || document.getElementById("search-box").value.toLowerCase() == "montreal world trade center" ||
	document.getElementById("search-box").value.toLowerCase() == "world trade center")
	{
		document.getElementById("search-box").value = "Centre de Commerce Mondial de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "mary queen of the world" || document.getElementById("search-box").value.toLowerCase() == "mary queen of the world cathedral")
	{
		document.getElementById("search-box").value = "Cath&eacute;drale Marie Reine du Monde";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "central station")
	{
		document.getElementById("search-box").value = "Gare Centrale";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "windsor station")
	{
		document.getElementById("search-box").value = "Gare Windsor";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "deloitte tower")
	{
		document.getElementById("search-box").value = "Tour Deloitte";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "aviron technical institute")
	{
		document.getElementById("search-box").value = "Institut Technique Aviron";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "muhc" || document.getElementById("search-box").value.toLowerCase() == "cusm")
	{
		document.getElementById("search-box").value = "McGill University Health Centre";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "monkland village")
	{
		document.getElementById("search-box").value = "Village Monkland";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "holocaust museum")
	{
		document.getElementById("search-box").value = "Mus&eacute;e de l&#39;Holocauste";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "segal centre" || document.getElementById("search-box").value.toLowerCase() == "segal center")
	{
		document.getElementById("search-box").value = "Centre Segal";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "cummings centre" || document.getElementById("search-box").value.toLowerCase() == "cummings center")
	{
		document.getElementById("search-box").value = "Centre Cummings";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "shadd business centre" || document.getElementById("search-box").value.toLowerCase() == "shadd business center" ||
	document.getElementById("search-box").value.toLowerCase() == "shadd health and business centre" || document.getElementById("search-box").value.toLowerCase() == "shadd health and business center" ||
	document.getElementById("search-box").value.toLowerCase() == "shadd health & business center" || document.getElementById("search-box").value.toLowerCase() == "sbc")
	{
		document.getElementById("search-box").value = "Shadd Health & Business Centre";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "petit manille")
	{
		document.getElementById("search-box").value = "Little Manila";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "hopital de montreal pour enfants" || document.getElementById("search-box").value.toLowerCase() == "h&ocirc;pital de montreal pour enfants" ||
	document.getElementById("search-box").value.toLowerCase() == "hopital de montr&eacute;al pour enfants" || document.getElementById("search-box").value.toLowerCase() == "h&ocirc;pital de montr&eacute;al pour enfants")
	{
		document.getElementById("search-box").value = "Montreal Children&#39;s Hospital";
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
	if(document.getElementById("search-box").value.toLowerCase() == "leonard mural")
	{
		document.getElementById("search-box").value = "Leonard Cohen Mural";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "nfb" || document.getElementById("search-box").value.toLowerCase() == "onf" ||
	document.getElementById("search-box").value.toLowerCase() == "office national du film du canada")
	{
		document.getElementById("search-box").value = "National Film Board of Canada";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "wada" || document.getElementById("search-box").value.toLowerCase() == "world anti doping agency")
	{
		document.getElementById("search-box").value = "World Anti-Doping Agency";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "iata")
	{
		document.getElementById("search-box").value = "International Air Transport Association";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "theatre centaur" || document.getElementById("search-box").value.toLowerCase() == "th&eacute;&acirc;tre centaur"
	|| document.getElementById("search-box").value.toLowerCase() == "centaur theater")
	{
		document.getElementById("search-box").value = "Centaur Theatre";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "saint-james theatre" || document.getElementById("search-box").value.toLowerCase() == "st james theatre" ||
	document.getElementById("search-box").value.toLowerCase() == "theatre saint-james" || document.getElementById("search-box").value.toLowerCase() == "theatre st-james" ||
	document.getElementById("search-box").value.toLowerCase() == "theatre saint james" || document.getElementById("search-box").value.toLowerCase() == "theatre st james" ||
	document.getElementById("search-box").value.toLowerCase() == "th&eacute;&acirc;tre saint-james" || document.getElementById("search-box").value.toLowerCase() == "th&eacute;&acirc;tre st-james" ||
	document.getElementById("search-box").value.toLowerCase() == "th&eacute;&acirc;tre saint james" || document.getElementById("search-box").value.toLowerCase() == "th&eacute;&acirc;tre st james")
	{
		document.getElementById("search-box").value = "St-James Theatre";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "college cdi" || document.getElementById("search-box").value.toLowerCase() == "coll&egrave;ge cdi")
	{
		document.getElementById("search-box").value = "CDI College";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "portail roddick")
	{
		document.getElementById("search-box").value = "Roddick Gates";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "red roof church")
	{
		document.getElementById("search-box").value = "St. John the Evangelist Church";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "bronfman building")
	{
		document.getElementById("search-box").value = "Desautels Faculty of Management";
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
	if(document.getElementById("search-box").value.toLowerCase() == "centre canadien d&#39;architecture")
	{
		document.getElementById("search-box").value = "Canadian Centre for Architecture";
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
	if(document.getElementById("search-box").value.toLowerCase() == "parc roy rivard" || document.getElementById("search-box").value.toLowerCase() == "parc roy-rivard")
	{
		document.getElementById("search-box").value = "Parc Th&eacute;r&egrave;se-Daviau";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "parc du bon-air")
	{
		document.getElementById("search-box").value = "Parc du Ruisseau-du-Pont-&agrave;-l&#39;Avoine";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "parc kent")
	{
		document.getElementById("search-box").value = "Parc Martin-Luther-King";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "montreal chinese hospital")
	{
		document.getElementById("search-box").value = "H&ocirc;pital Chinois de Montr&eacute;al";
	}
	if(document.getElementById("search-box").value.toLowerCase() == "la baia dei formaggi")
	{
		document.getElementById("search-box").value = "La Baie des Fromages";
	}if(document.getElementById("search-box").value.toLowerCase() == "edward murphy elementary school")
	{
		document.getElementById("search-box").value = "Edward Murphy School";
	}
	
	street = document.getElementById("streets").value;
	category = document.getElementById("categories").value;
	
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
		case "18":
		{
			street = "Boulevard des Galeries-d&#39;Anjou";
			break;
		}
		default:
		{
			street = street;
			break;
		}
	}
	
	for(var i=0; i<BerriUQAM.length; i++)
	{
		if (BerriUQAM[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && BerriUQAM[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && BerriUQAM[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(BerriUQAM[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+BerriUQAM[i].name+"</h3>"+"<p>"+BerriUQAM[i].address+"&nbsp;&nbsp; Category: "+BerriUQAM[i].type+"&nbsp;&nbsp; <a href=\""+BerriUQAM[i].site+"\">Website</a> &nbsp;&nbsp; <b>Berri-UQAM</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+BerriUQAM[i].name+"</h3>"+"<p>"+BerriUQAM[i].address+"&nbsp;&nbsp; Category: "+BerriUQAM[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b>Berri-UQAM</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<JeanTalon.length; i++)
	{
		if (JeanTalon[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && JeanTalon[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && JeanTalon[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(JeanTalon[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+JeanTalon[i].name+"</h3>"+"<p>"+JeanTalon[i].address+"&nbsp;&nbsp; Category: "+JeanTalon[i].type+"&nbsp;&nbsp; <a href=\""+JeanTalon[i].site+"\">Website</a> &nbsp;&nbsp; <b>Jean-Talon</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+JeanTalon[i].name+"</h3>"+"<p>"+JeanTalon[i].address+"&nbsp;&nbsp; Category: "+JeanTalon[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b>Jean-Talon</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<LionelGroulx.length; i++)
	{
		if (LionelGroulx[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && LionelGroulx[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && LionelGroulx[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(LionelGroulx[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+LionelGroulx[i].name+"</h3>"+"<p>"+LionelGroulx[i].address+"&nbsp;&nbsp; Category: "+LionelGroulx[i].type+"&nbsp;&nbsp; <a href=\""+LionelGroulx[i].site+"\">Website</a> &nbsp;&nbsp; <b>Lionel-Groulx</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+LionelGroulx[i].name+"</h3>"+"<p>"+LionelGroulx[i].address+"&nbsp;&nbsp; Category: "+LionelGroulx[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b>Lionel-Groulx</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Snowdon.length; i++)
	{
		if (Snowdon[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Snowdon[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Snowdon[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Snowdon[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Snowdon[i].name+"</h3>"+"<p>"+Snowdon[i].address+"&nbsp;&nbsp; Category: "+Snowdon[i].type+"&nbsp;&nbsp; <a href=\""+Snowdon[i].site+"\">Website</a> &nbsp;&nbsp; <b>Snowdon</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Snowdon[i].name+"</h3>"+"<p>"+Snowdon[i].address+"&nbsp;&nbsp; Category: "+Snowdon[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b>Snowdon</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<JeanDrapeau.length; i++)
	{
		if (JeanDrapeau[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && JeanDrapeau[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && JeanDrapeau[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(JeanDrapeau[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+JeanDrapeau[i].name+"</h3>"+"<p>"+JeanDrapeau[i].address+"&nbsp;&nbsp; Category: "+JeanDrapeau[i].type+"&nbsp;&nbsp; <a href=\""+JeanDrapeau[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: yellow; color: black\">Jean-Drapeau</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+JeanDrapeau[i].name+"</h3>"+"<p>"+JeanDrapeau[i].address+"&nbsp;&nbsp; Category: "+JeanDrapeau[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: yellow; color: black\">Jean-Drapeau</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Longueuil.length; i++)
	{
		if (Longueuil[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Longueuil[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Longueuil[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Longueuil[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Longueuil[i].name+"</h3>"+"<p>"+Longueuil[i].address+"&nbsp;&nbsp; Category: "+Longueuil[i].type+"&nbsp;&nbsp; <a href=\""+Longueuil[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: yellow; color: black\">Longueuil&#8211;Universit&eacute;-de-Sherbrooke</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Longueuil[i].name+"</h3>"+"<p>"+Longueuil[i].address+"&nbsp;&nbsp; Category: "+Longueuil[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: yellow; color: black\">Longueuil&#8211;Universit&eacute;-de-Sherbrooke</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<SaintMichel.length; i++)
	{
		if (SaintMichel[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && SaintMichel[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && SaintMichel[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(SaintMichel[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+SaintMichel[i].name+"</h3>"+"<p>"+SaintMichel[i].address+"&nbsp;&nbsp; Category: "+SaintMichel[i].type+"&nbsp;&nbsp; <a href=\""+SaintMichel[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Saint-Michel</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+SaintMichel[i].name+"</h3>"+"<p>"+SaintMichel[i].address+"&nbsp;&nbsp; Category: "+SaintMichel[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Saint-Michel</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Iberville.length; i++)
	{
		if (Iberville[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Iberville[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Iberville[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Iberville[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Iberville[i].name+"</h3>"+"<p>"+Iberville[i].address+"&nbsp;&nbsp; Category: "+Iberville[i].type+"&nbsp;&nbsp; <a href=\""+Iberville[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">D&#39;Iberville</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Iberville[i].name+"</h3>"+"<p>"+Iberville[i].address+"&nbsp;&nbsp; Category: "+Iberville[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">D&#39;Iberville</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Fabre.length; i++)
	{
		if (Fabre[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Fabre[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Fabre[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Fabre[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Fabre[i].name+"</h3>"+"<p>"+Fabre[i].address+"&nbsp;&nbsp; Category: "+Fabre[i].type+"&nbsp;&nbsp; <a href=\""+Fabre[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Fabre</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Fabre[i].name+"</h3>"+"<p>"+Fabre[i].address+"&nbsp;&nbsp; Category: "+Fabre[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Fabre</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DeCastelnau.length; i++)
	{
		if (DeCastelnau[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DeCastelnau[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && DeCastelnau[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DeCastelnau[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DeCastelnau[i].name+"</h3>"+"<p>"+DeCastelnau[i].address+"&nbsp;&nbsp; Category: "+DeCastelnau[i].type+"&nbsp;&nbsp; <a href=\""+DeCastelnau[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">De Castelnau</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DeCastelnau[i].name+"</h3>"+"<p>"+DeCastelnau[i].address+"&nbsp;&nbsp; Category: "+DeCastelnau[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">De Castelnau</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Parc.length; i++)
	{
		if (Parc[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Parc[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Parc[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Parc[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Parc[i].name+"</h3>"+"<p>"+Parc[i].address+"&nbsp;&nbsp; Category: "+Parc[i].type+"&nbsp;&nbsp; <a href=\""+Parc[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Parc</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Parc[i].name+"</h3>"+"<p>"+Parc[i].address+"&nbsp;&nbsp; Category: "+Parc[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Parc</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Acadie.length; i++)
	{
		if (Acadie[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Acadie[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Acadie[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Acadie[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Acadie[i].name+"</h3>"+"<p>"+Acadie[i].address+"&nbsp;&nbsp; Category: "+Acadie[i].type+"&nbsp;&nbsp; <a href=\""+Acadie[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Acadie</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Acadie[i].name+"</h3>"+"<p>"+Acadie[i].address+"&nbsp;&nbsp; Category: "+Acadie[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Acadie</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Outremont.length; i++)
	{
		if (Outremont[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Outremont[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Outremont[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Outremont[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Outremont[i].name+"</h3>"+"<p>"+Outremont[i].address+"&nbsp;&nbsp; Category: "+Outremont[i].type+"&nbsp;&nbsp; <a href=\""+Outremont[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Outremont</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Outremont[i].name+"</h3>"+"<p>"+Outremont[i].address+"&nbsp;&nbsp; Category: "+Outremont[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Outremont</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<EdouardMontpetit.length; i++)
	{
		if (EdouardMontpetit[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && EdouardMontpetit[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && EdouardMontpetit[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(EdouardMontpetit[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+EdouardMontpetit[i].name+"</h3>"+"<p>"+EdouardMontpetit[i].address+"&nbsp;&nbsp; Category: "+EdouardMontpetit[i].type+"&nbsp;&nbsp; <a href=\""+EdouardMontpetit[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">&Eacute;douard-Montpetit</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+EdouardMontpetit[i].name+"</h3>"+"<p>"+EdouardMontpetit[i].address+"&nbsp;&nbsp; Category: "+EdouardMontpetit[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">&Eacute;douard-Montpetit</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<UdeM.length; i++)
	{
		if (UdeM[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && UdeM[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && UdeM[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(UdeM[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+UdeM[i].name+"</h3>"+"<p>"+UdeM[i].address+"&nbsp;&nbsp; Category: "+UdeM[i].type+"&nbsp;&nbsp; <a href=\""+UdeM[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Universit&eacute;-de-Montr&eacute;al</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+UdeM[i].name+"</h3>"+"<p>"+UdeM[i].address+"&nbsp;&nbsp; Category: "+UdeM[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">Universit&eacute;-de-Montr&eacute;al</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<CoteDesNeiges.length; i++)
	{
		if (CoteDesNeiges[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && CoteDesNeiges[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && CoteDesNeiges[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(CoteDesNeiges[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteDesNeiges[i].name+"</h3>"+"<p>"+CoteDesNeiges[i].address+"&nbsp;&nbsp; Category: "+CoteDesNeiges[i].type+"&nbsp;&nbsp; <a href=\""+CoteDesNeiges[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">C&ocirc;te-des-Neiges</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteDesNeiges[i].name+"</h3>"+"<p>"+CoteDesNeiges[i].address+"&nbsp;&nbsp; Category: "+CoteDesNeiges[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: blue; color: white\">C&ocirc;te-des-Neiges</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<HonoreBeaugrand.length; i++)
	{
		if (HonoreBeaugrand[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && HonoreBeaugrand[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && HonoreBeaugrand[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(HonoreBeaugrand[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+HonoreBeaugrand[i].name+"</h3>"+"<p>"+HonoreBeaugrand[i].address+"&nbsp;&nbsp; Category: "+HonoreBeaugrand[i].type+"&nbsp;&nbsp; <a href=\""+HonoreBeaugrand[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Honor&eacute;-Beaugrand</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+HonoreBeaugrand[i].name+"</h3>"+"<p>"+HonoreBeaugrand[i].address+"&nbsp;&nbsp; Category: "+HonoreBeaugrand[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Honor&eacute;-Beaugrand</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Radisson.length; i++)
	{
		if (Radisson[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Radisson[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Radisson[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Radisson[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Radisson[i].name+"</h3>"+"<p>"+Radisson[i].address+"&nbsp;&nbsp; Category: "+Radisson[i].type+"&nbsp;&nbsp; <a href=\""+Radisson[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Radisson</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Radisson[i].name+"</h3>"+"<p>"+Radisson[i].address+"&nbsp;&nbsp; Category: "+Radisson[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Radisson</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Langelier.length; i++)
	{
		if (Langelier[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Langelier[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Langelier[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Langelier[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Langelier[i].name+"</h3>"+"<p>"+Langelier[i].address+"&nbsp;&nbsp; Category: "+Langelier[i].type+"&nbsp;&nbsp; <a href=\""+Langelier[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Langelier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Langelier[i].name+"</h3>"+"<p>"+Langelier[i].address+"&nbsp;&nbsp; Category: "+Langelier[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Langelier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Cadillac.length; i++)
	{
		if (Cadillac[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Cadillac[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Cadillac[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Cadillac[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Cadillac[i].name+"</h3>"+"<p>"+Cadillac[i].address+"&nbsp;&nbsp; Category: "+Cadillac[i].type+"&nbsp;&nbsp; <a href=\""+Cadillac[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Cadillac</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Cadillac[i].name+"</h3>"+"<p>"+Cadillac[i].address+"&nbsp;&nbsp; Category: "+Cadillac[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Cadillac</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Assomption.length; i++)
	{
		if (Assomption[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Assomption[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Assomption[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Assomption[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Assomption[i].name+"</h3>"+"<p>"+Assomption[i].address+"&nbsp;&nbsp; Category: "+Assomption[i].type+"&nbsp;&nbsp; <a href=\""+Assomption[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Assomption</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Assomption[i].name+"</h3>"+"<p>"+Assomption[i].address+"&nbsp;&nbsp; Category: "+Assomption[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Assomption</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Viau.length; i++)
	{
		if (Viau[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Viau[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Viau[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Viau[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Viau[i].name+"</h3>"+"<p>"+Viau[i].address+"&nbsp;&nbsp; Category: "+Viau[i].type+"&nbsp;&nbsp; <a href=\""+Viau[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Viau</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Viau[i].name+"</h3>"+"<p>"+Viau[i].address+"&nbsp;&nbsp; Category: "+Viau[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Viau</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<PieIX.length; i++)
	{
		if (PieIX[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && PieIX[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && PieIX[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(PieIX[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+PieIX[i].name+"</h3>"+"<p>"+PieIX[i].address+"&nbsp;&nbsp; Category: "+PieIX[i].type+"&nbsp;&nbsp; <a href=\""+PieIX[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Pie-IX</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+PieIX[i].name+"</h3>"+"<p>"+PieIX[i].address+"&nbsp;&nbsp; Category: "+PieIX[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Pie-IX</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Joliette.length; i++)
	{
		if (Joliette[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Joliette[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Joliette[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Joliette[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Joliette[i].name+"</h3>"+"<p>"+Joliette[i].address+"&nbsp;&nbsp; Category: "+Joliette[i].type+"&nbsp;&nbsp; <a href=\""+Joliette[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Joliette</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Joliette[i].name+"</h3>"+"<p>"+Joliette[i].address+"&nbsp;&nbsp; Category: "+Joliette[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Joliette</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Prefontaine.length; i++)
	{
		if (Prefontaine[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Prefontaine[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Prefontaine[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Prefontaine[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Prefontaine[i].name+"</h3>"+"<p>"+Prefontaine[i].address+"&nbsp;&nbsp; Category: "+Prefontaine[i].type+"&nbsp;&nbsp; <a href=\""+Prefontaine[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Pr&eacute;fontaine</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Prefontaine[i].name+"</h3>"+"<p>"+Prefontaine[i].address+"&nbsp;&nbsp; Category: "+Prefontaine[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Pr&eacute;fontaine</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Frontenac.length; i++)
	{
		if (Frontenac[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Frontenac[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Frontenac[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Frontenac[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Frontenac[i].name+"</h3>"+"<p>"+Frontenac[i].address+"&nbsp;&nbsp; Category: "+Frontenac[i].type+"&nbsp;&nbsp; <a href=\""+Frontenac[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Frontenac</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Frontenac[i].name+"</h3>"+"<p>"+Frontenac[i].address+"&nbsp;&nbsp; Category: "+Frontenac[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Frontenac</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Papineau.length; i++)
	{
		if (Papineau[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Papineau[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Papineau[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Papineau[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Papineau[i].name+"</h3>"+"<p>"+Papineau[i].address+"&nbsp;&nbsp; Category: "+Papineau[i].type+"&nbsp;&nbsp; <a href=\""+Papineau[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Papineau</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Papineau[i].name+"</h3>"+"<p>"+Papineau[i].address+"&nbsp;&nbsp; Category: "+Papineau[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Papineau</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Beaudry.length; i++)
	{
		if (Beaudry[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Beaudry[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Beaudry[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Beaudry[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Beaudry[i].name+"</h3>"+"<p>"+Beaudry[i].address+"&nbsp;&nbsp; Category: "+Beaudry[i].type+"&nbsp;&nbsp; <a href=\""+Beaudry[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Beaudry</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Beaudry[i].name+"</h3>"+"<p>"+Beaudry[i].address+"&nbsp;&nbsp; Category: "+Beaudry[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Beaudry</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<SaintLaurent.length; i++)
	{
		if (SaintLaurent[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && SaintLaurent[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && SaintLaurent[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(SaintLaurent[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+SaintLaurent[i].name+"</h3>"+"<p>"+SaintLaurent[i].address+"&nbsp;&nbsp; Category: "+SaintLaurent[i].type+"&nbsp;&nbsp; <a href=\""+SaintLaurent[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Saint-Laurent</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+SaintLaurent[i].name+"</h3>"+"<p>"+SaintLaurent[i].address+"&nbsp;&nbsp; Category: "+SaintLaurent[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Saint-Laurent</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<PlaceDesArts.length; i++)
	{
		if (PlaceDesArts[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && PlaceDesArts[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && PlaceDesArts[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(PlaceDesArts[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceDesArts[i].name+"</h3>"+"<p>"+PlaceDesArts[i].address+"&nbsp;&nbsp; Category: "+PlaceDesArts[i].type+"&nbsp;&nbsp; <a href=\""+PlaceDesArts[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Place-des-Arts</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceDesArts[i].name+"</h3>"+"<p>"+PlaceDesArts[i].address+"&nbsp;&nbsp; Category: "+PlaceDesArts[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Place-des-Arts</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<McGill.length; i++)
	{
		if (McGill[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && McGill[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && McGill[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(McGill[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+McGill[i].name+"</h3>"+"<p>"+McGill[i].address+"&nbsp;&nbsp; Category: "+McGill[i].type+"&nbsp;&nbsp; <a href=\""+McGill[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">McGill</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+McGill[i].name+"</h3>"+"<p>"+McGill[i].address+"&nbsp;&nbsp; Category: "+McGill[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">McGill</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Peel.length; i++)
	{
		if (Peel[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Peel[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Peel[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Peel[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Peel[i].name+"</h3>"+"<p>"+Peel[i].address+"&nbsp;&nbsp; Category: "+Peel[i].type+"&nbsp;&nbsp; <a href=\""+Peel[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Peel</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Peel[i].name+"</h3>"+"<p>"+Peel[i].address+"&nbsp;&nbsp; Category: "+Peel[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Peel</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Guy.length; i++)
	{
		if (Guy[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Guy[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Guy[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Guy[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Guy[i].name+"</h3>"+"<p>"+Guy[i].address+"&nbsp;&nbsp; Category: "+Guy[i].type+"&nbsp;&nbsp; <a href=\""+Guy[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Guy-Concordia</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Guy[i].name+"</h3>"+"<p>"+Guy[i].address+"&nbsp;&nbsp; Category: "+Guy[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Guy-Concordia</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Atwater.length; i++)
	{
		if (Atwater[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Atwater[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Atwater[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Atwater[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Atwater[i].name+"</h3>"+"<p>"+Atwater[i].address+"&nbsp;&nbsp; Category: "+Atwater[i].type+"&nbsp;&nbsp; <a href=\""+Atwater[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Atwater</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Atwater[i].name+"</h3>"+"<p>"+Atwater[i].address+"&nbsp;&nbsp; Category: "+Atwater[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Atwater</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Charlevoix.length; i++)
	{
		if (Charlevoix[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Charlevoix[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Charlevoix[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Charlevoix[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Charlevoix[i].name+"</h3>"+"<p>"+Charlevoix[i].address+"&nbsp;&nbsp; Category: "+Charlevoix[i].type+"&nbsp;&nbsp; <a href=\""+Charlevoix[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Charlevoix</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Charlevoix[i].name+"</h3>"+"<p>"+Charlevoix[i].address+"&nbsp;&nbsp; Category: "+Charlevoix[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Charlevoix</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<LaSalle.length; i++)
	{
		if (LaSalle[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && LaSalle[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && LaSalle[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(LaSalle[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+LaSalle[i].name+"</h3>"+"<p>"+LaSalle[i].address+"&nbsp;&nbsp; Category: "+LaSalle[i].type+"&nbsp;&nbsp; <a href=\""+LaSalle[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">LaSalle</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+LaSalle[i].name+"</h3>"+"<p>"+LaSalle[i].address+"&nbsp;&nbsp; Category: "+LaSalle[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">LaSalle</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DeLEglise.length; i++)
	{
		if (DeLEglise[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DeLEglise[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && DeLEglise[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DeLEglise[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLEglise[i].name+"</h3>"+"<p>"+DeLEglise[i].address+"&nbsp;&nbsp; Category: "+DeLEglise[i].type+"&nbsp;&nbsp; <a href=\""+DeLEglise[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">De L&#39;&Eacute;glise</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLEglise[i].name+"</h3>"+"<p>"+DeLEglise[i].address+"&nbsp;&nbsp; Category: "+DeLEglise[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">De L&#39;&Eacute;glise</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Verdun.length; i++)
	{
		if (Verdun[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Verdun[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Verdun[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Verdun[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Verdun[i].name+"</h3>"+"<p>"+Verdun[i].address+"&nbsp;&nbsp; Category: "+Verdun[i].type+"&nbsp;&nbsp; <a href=\""+Verdun[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Verdun</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Verdun[i].name+"</h3>"+"<p>"+Verdun[i].address+"&nbsp;&nbsp; Category: "+Verdun[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Verdun</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Jolicoeur.length; i++)
	{
		if (Jolicoeur[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Jolicoeur[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Jolicoeur[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Jolicoeur[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Jolicoeur[i].name+"</h3>"+"<p>"+Jolicoeur[i].address+"&nbsp;&nbsp; Category: "+Jolicoeur[i].type+"&nbsp;&nbsp; <a href=\""+Jolicoeur[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Jolicoeur</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Jolicoeur[i].name+"</h3>"+"<p>"+Jolicoeur[i].address+"&nbsp;&nbsp; Category: "+Jolicoeur[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Jolicoeur</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Monk.length; i++)
	{
		if (Monk[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Monk[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Monk[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Monk[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Monk[i].name+"</h3>"+"<p>"+Monk[i].address+"&nbsp;&nbsp; Category: "+Monk[i].type+"&nbsp;&nbsp; <a href=\""+Monk[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Monk</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Monk[i].name+"</h3>"+"<p>"+Monk[i].address+"&nbsp;&nbsp; Category: "+Monk[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Monk</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Angrignon.length; i++)
	{
		if (Angrignon[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Angrignon[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Angrignon[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Angrignon[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Angrignon[i].name+"</h3>"+"<p>"+Angrignon[i].address+"&nbsp;&nbsp; Category: "+Angrignon[i].type+"&nbsp;&nbsp; <a href=\""+Angrignon[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Angrignon</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Angrignon[i].name+"</h3>"+"<p>"+Angrignon[i].address+"&nbsp;&nbsp; Category: "+Angrignon[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: green; color: white\">Angrignon</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Montmorency.length; i++)
	{
		if (Montmorency[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Montmorency[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Montmorency[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Montmorency[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Montmorency[i].name+"</h3>"+"<p>"+Montmorency[i].address+"&nbsp;&nbsp; Category: "+Montmorency[i].type+"&nbsp;&nbsp; <a href=\""+Montmorency[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Montmorency</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Montmorency[i].name+"</h3>"+"<p>"+Montmorency[i].address+"&nbsp;&nbsp; Category: "+Montmorency[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Montmorency</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DeLaConcorde.length; i++)
	{
		if (DeLaConcorde[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DeLaConcorde[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && DeLaConcorde[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DeLaConcorde[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLaConcorde[i].name+"</h3>"+"<p>"+DeLaConcorde[i].address+"&nbsp;&nbsp; Category: "+DeLaConcorde[i].type+"&nbsp;&nbsp; <a href=\""+DeLaConcorde[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">De La Concorde</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLaConcorde[i].name+"</h3>"+"<p>"+DeLaConcorde[i].address+"&nbsp;&nbsp; Category: "+DeLaConcorde[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">De La Concorde</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Cartier.length; i++)
	{
		if (Cartier[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Cartier[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Cartier[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Cartier[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Cartier[i].name+"</h3>"+"<p>"+Cartier[i].address+"&nbsp;&nbsp; Category: "+Cartier[i].type+"&nbsp;&nbsp; <a href=\""+Cartier[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Cartier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Cartier[i].name+"</h3>"+"<p>"+Cartier[i].address+"&nbsp;&nbsp; Category: "+Cartier[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Cartier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<HenriBourassa.length; i++)
	{
		if (HenriBourassa[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && HenriBourassa[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && HenriBourassa[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(HenriBourassa[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+HenriBourassa[i].name+"</h3>"+"<p>"+HenriBourassa[i].address+"&nbsp;&nbsp; Category: "+HenriBourassa[i].type+"&nbsp;&nbsp; <a href=\""+HenriBourassa[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Henri-Bourassa</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+HenriBourassa[i].name+"</h3>"+"<p>"+HenriBourassa[i].address+"&nbsp;&nbsp; Category: "+HenriBourassa[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Henri-Bourassa</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Sauve.length; i++)
	{
		if (Sauve[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Sauve[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Sauve[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Sauve[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Sauve[i].name+"</h3>"+"<p>"+Sauve[i].address+"&nbsp;&nbsp; Category: "+Sauve[i].type+"&nbsp;&nbsp; <a href=\""+Sauve[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Sauv&eacute;</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Sauve[i].name+"</h3>"+"<p>"+Sauve[i].address+"&nbsp;&nbsp; Category: "+Sauve[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Sauv&eacute;</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Cremazie.length; i++)
	{
		if (Cremazie[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Cremazie[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Cremazie[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Cremazie[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Cremazie[i].name+"</h3>"+"<p>"+Cremazie[i].address+"&nbsp;&nbsp; Category: "+Cremazie[i].type+"&nbsp;&nbsp; <a href=\""+Cremazie[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Cr&eacute;mazie</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Cremazie[i].name+"</h3>"+"<p>"+Cremazie[i].address+"&nbsp;&nbsp; Category: "+Cremazie[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Cr&eacute;mazie</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Jarry.length; i++)
	{
		if (Jarry[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Jarry[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Jarry[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Jarry[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Jarry[i].name+"</h3>"+"<p>"+Jarry[i].address+"&nbsp;&nbsp; Category: "+Jarry[i].type+"&nbsp;&nbsp; <a href=\""+Jarry[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Jarry</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Jarry[i].name+"</h3>"+"<p>"+Jarry[i].address+"&nbsp;&nbsp; Category: "+Jarry[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Jarry</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Beaubien.length; i++)
	{
		if (Beaubien[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Beaubien[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Beaubien[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Beaubien[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Beaubien[i].name+"</h3>"+"<p>"+Beaubien[i].address+"&nbsp;&nbsp; Category: "+Beaubien[i].type+"&nbsp;&nbsp; <a href=\""+Beaubien[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Beaubien</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Beaubien[i].name+"</h3>"+"<p>"+Beaubien[i].address+"&nbsp;&nbsp; Category: "+Beaubien[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Beaubien</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Rosemont.length; i++)
	{
		if (Rosemont[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Rosemont[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Rosemont[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Rosemont[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Rosemont[i].name+"</h3>"+"<p>"+Rosemont[i].address+"&nbsp;&nbsp; Category: "+Rosemont[i].type+"&nbsp;&nbsp; <a href=\""+Rosemont[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Rosemont</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Rosemont[i].name+"</h3>"+"<p>"+Rosemont[i].address+"&nbsp;&nbsp; Category: "+Rosemont[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Rosemont</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Laurier.length; i++)
	{
		if (Laurier[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Laurier[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Laurier[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Laurier[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Laurier[i].name+"</h3>"+"<p>"+Laurier[i].address+"&nbsp;&nbsp; Category: "+Laurier[i].type+"&nbsp;&nbsp; <a href=\""+Laurier[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Laurier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Laurier[i].name+"</h3>"+"<p>"+Laurier[i].address+"&nbsp;&nbsp; Category: "+Laurier[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Laurier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<MontRoyal.length; i++)
	{
		if (MontRoyal[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && MontRoyal[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && MontRoyal[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(MontRoyal[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+MontRoyal[i].name+"</h3>"+"<p>"+MontRoyal[i].address+"&nbsp;&nbsp; Category: "+MontRoyal[i].type+"&nbsp;&nbsp; <a href=\""+MontRoyal[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Mont-Royal</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+MontRoyal[i].name+"</h3>"+"<p>"+MontRoyal[i].address+"&nbsp;&nbsp; Category: "+MontRoyal[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Mont-Royal</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Sherbrooke.length; i++)
	{
		if (Sherbrooke[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Sherbrooke[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Sherbrooke[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Sherbrooke[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Sherbrooke[i].name+"</h3>"+"<p>"+Sherbrooke[i].address+"&nbsp;&nbsp; Category: "+Sherbrooke[i].type+"&nbsp;&nbsp; <a href=\""+Sherbrooke[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Sherbrooke</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Sherbrooke[i].name+"</h3>"+"<p>"+Sherbrooke[i].address+"&nbsp;&nbsp; Category: "+Sherbrooke[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Sherbrooke</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<ChampDeMars.length; i++)
	{
		if (ChampDeMars[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && ChampDeMars[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && ChampDeMars[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(ChampDeMars[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+ChampDeMars[i].name+"</h3>"+"<p>"+ChampDeMars[i].address+"&nbsp;&nbsp; Category: "+ChampDeMars[i].type+"&nbsp;&nbsp; <a href=\""+ChampDeMars[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Champ-de-Mars</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+ChampDeMars[i].name+"</h3>"+"<p>"+ChampDeMars[i].address+"&nbsp;&nbsp; Category: "+ChampDeMars[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Champ-de-Mars</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<PlaceDArmes.length; i++)
	{
		if (PlaceDArmes[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && PlaceDArmes[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && PlaceDArmes[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(PlaceDArmes[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceDArmes[i].name+"</h3>"+"<p>"+PlaceDArmes[i].address+"&nbsp;&nbsp; Category: "+PlaceDArmes[i].type+"&nbsp;&nbsp; <a href=\""+PlaceDArmes[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Place-d&#39;Armes</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceDArmes[i].name+"</h3>"+"<p>"+PlaceDArmes[i].address+"&nbsp;&nbsp; Category: "+PlaceDArmes[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Place-d&#39;Armes</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<SquareVictoria.length; i++)
	{
		if (SquareVictoria[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && SquareVictoria[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && SquareVictoria[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(SquareVictoria[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+SquareVictoria[i].name+"</h3>"+"<p>"+SquareVictoria[i].address+"&nbsp;&nbsp; Category: "+SquareVictoria[i].type+"&nbsp;&nbsp; <a href=\""+SquareVictoria[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Square-Victoria&#8211;OACI</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+SquareVictoria[i].name+"</h3>"+"<p>"+SquareVictoria[i].address+"&nbsp;&nbsp; Category: "+SquareVictoria[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Square-Victoria&#8211;OACI</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Bonaventure.length; i++)
	{
		if (Bonaventure[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Bonaventure[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Bonaventure[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Bonaventure[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Bonaventure[i].name+"</h3>"+"<p>"+Bonaventure[i].address+"&nbsp;&nbsp; Category: "+Bonaventure[i].type+"&nbsp;&nbsp; <a href=\""+Bonaventure[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Bonaventure</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Bonaventure[i].name+"</h3>"+"<p>"+Bonaventure[i].address+"&nbsp;&nbsp; Category: "+Bonaventure[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Bonaventure</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<LucienLAllier.length; i++)
	{
		if (LucienLAllier[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && LucienLAllier[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && LucienLAllier[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(LucienLAllier[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+LucienLAllier[i].name+"</h3>"+"<p>"+LucienLAllier[i].address+"&nbsp;&nbsp; Category: "+LucienLAllier[i].type+"&nbsp;&nbsp; <a href=\""+LucienLAllier[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Lucien-L&#39;Allier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+LucienLAllier[i].name+"</h3>"+"<p>"+LucienLAllier[i].address+"&nbsp;&nbsp; Category: "+LucienLAllier[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Lucien-L&#39;Allier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<GeorgesVanier.length; i++)
	{
		if (GeorgesVanier[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && GeorgesVanier[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && GeorgesVanier[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(GeorgesVanier[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+GeorgesVanier[i].name+"</h3>"+"<p>"+GeorgesVanier[i].address+"&nbsp;&nbsp; Category: "+GeorgesVanier[i].type+"&nbsp;&nbsp; <a href=\""+GeorgesVanier[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Georges-Vanier</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+GeorgesVanier[i].name+"</h3>"+"<p>"+GeorgesVanier[i].address+"&nbsp;&nbsp; Category: "+GeorgesVanier[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Georges-Vanier</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<PlaceSaintHenri.length; i++)
	{
		if (PlaceSaintHenri[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && PlaceSaintHenri[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && PlaceSaintHenri[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(PlaceSaintHenri[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceSaintHenri[i].name+"</h3>"+"<p>"+PlaceSaintHenri[i].address+"&nbsp;&nbsp; Category: "+PlaceSaintHenri[i].type+"&nbsp;&nbsp; <a href=\""+PlaceSaintHenri[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Place-Saint-Henri</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+PlaceSaintHenri[i].name+"</h3>"+"<p>"+PlaceSaintHenri[i].address+"&nbsp;&nbsp; Category: "+PlaceSaintHenri[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Place-Saint-Henri</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Vendome.length; i++)
	{
		if (Vendome[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Vendome[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Vendome[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Vendome[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Vendome[i].name+"</h3>"+"<p>"+Vendome[i].address+"&nbsp;&nbsp; Category: "+Vendome[i].type+"&nbsp;&nbsp; <a href=\""+Vendome[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Vend&ocirc;me</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Vendome[i].name+"</h3>"+"<p>"+Vendome[i].address+"&nbsp;&nbsp; Category: "+Vendome[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Vend&ocirc;me</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<VillaMaria.length; i++)
	{
		if (VillaMaria[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && VillaMaria[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && VillaMaria[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(VillaMaria[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+VillaMaria[i].name+"</h3>"+"<p>"+VillaMaria[i].address+"&nbsp;&nbsp; Category: "+VillaMaria[i].type+"&nbsp;&nbsp; <a href=\""+VillaMaria[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Villa-Maria</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+VillaMaria[i].name+"</h3>"+"<p>"+VillaMaria[i].address+"&nbsp;&nbsp; Category: "+VillaMaria[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Villa-Maria</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<CoteSainteCatherine.length; i++)
	{
		if (CoteSainteCatherine[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && CoteSainteCatherine[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && CoteSainteCatherine[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(CoteSainteCatherine[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteSainteCatherine[i].name+"</h3>"+"<p>"+CoteSainteCatherine[i].address+"&nbsp;&nbsp; Category: "+CoteSainteCatherine[i].type+"&nbsp;&nbsp; <a href=\""+CoteSainteCatherine[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">C&ocirc;te-Sainte-Catherine</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteSainteCatherine[i].name+"</h3>"+"<p>"+CoteSainteCatherine[i].address+"&nbsp;&nbsp; Category: "+CoteSainteCatherine[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">C&ocirc;te-Sainte-Catherine</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Plamondon.length; i++)
	{
		if (Plamondon[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Plamondon[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Plamondon[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Plamondon[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Plamondon[i].name+"</h3>"+"<p>"+Plamondon[i].address+"&nbsp;&nbsp; Category: "+Plamondon[i].type+"&nbsp;&nbsp; <a href=\""+Plamondon[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Plamondon</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Plamondon[i].name+"</h3>"+"<p>"+Plamondon[i].address+"&nbsp;&nbsp; Category: "+Plamondon[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Plamondon</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<Namur.length; i++)
	{
		if (Namur[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && Namur[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && Namur[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(Namur[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+Namur[i].name+"</h3>"+"<p>"+Namur[i].address+"&nbsp;&nbsp; Category: "+Namur[i].type+"&nbsp;&nbsp; <a href=\""+Namur[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Namur</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+Namur[i].name+"</h3>"+"<p>"+Namur[i].address+"&nbsp;&nbsp; Category: "+Namur[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Namur</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DeLaSavane.length; i++)
	{
		if (DeLaSavane[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DeLaSavane[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && DeLaSavane[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DeLaSavane[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLaSavane[i].name+"</h3>"+"<p>"+DeLaSavane[i].address+"&nbsp;&nbsp; Category: "+DeLaSavane[i].type+"&nbsp;&nbsp; <a href=\""+DeLaSavane[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">De La Savane</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DeLaSavane[i].name+"</h3>"+"<p>"+DeLaSavane[i].address+"&nbsp;&nbsp; Category: "+DeLaSavane[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">De La Savane</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<DuCollege.length; i++)
	{
		if (DuCollege[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && DuCollege[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && DuCollege[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(DuCollege[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+DuCollege[i].name+"</h3>"+"<p>"+DuCollege[i].address+"&nbsp;&nbsp; Category: "+DuCollege[i].type+"&nbsp;&nbsp; <a href=\""+DuCollege[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Du Coll&egrave;ge</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+DuCollege[i].name+"</h3>"+"<p>"+DuCollege[i].address+"&nbsp;&nbsp; Category: "+DuCollege[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">Du Coll&egrave;ge</b><br/><br/>";
			}
		}
	}
	
	for(var i=0; i<CoteVertu.length; i++)
	{
		if (CoteVertu[i].name.toLowerCase().indexOf(document.getElementById("search-box").value.toLowerCase()) != -1 && CoteVertu[i].type.toLowerCase().indexOf(category.toLowerCase()) != -1 && CoteVertu[i].address.toLowerCase().indexOf(street.toLowerCase()) != -1)
		{	
			//If spot has a site
			if(CoteVertu[i].site != "#")
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteVertu[i].name+"</h3>"+"<p>"+CoteVertu[i].address+"&nbsp;&nbsp; Category: "+CoteVertu[i].type+"&nbsp;&nbsp; <a href=\""+CoteVertu[i].site+"\">Website</a> &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">C&ocirc;te-Vertu</b><br/><br/>";
			}
			//If spot has no site
			else
			{
				document.getElementById("output").innerHTML += "<h3>"+CoteVertu[i].name+"</h3>"+"<p>"+CoteVertu[i].address+"&nbsp;&nbsp; Category: "+CoteVertu[i].type+"&nbsp;&nbsp; No website available &nbsp;&nbsp; <b style=\"background-color: orange; color: white\">C&ocirc;te-Vertu</b><br/><br/>";
			}
		}
	}
	
	if(document.getElementById("output").innerHTML == "")
	{
		document.getElementById("output").innerHTML += "<p>No results matched your search input.</p>";
	}
}

window.onload = init;

//ALL SPOTS FOR ALL STATIONS
//TRANSFERS
var BerriUQAM, LionelGroulx, JeanTalon, Snowdon;

//YELLOW LINE
var JeanDrapeau, Longueuil;

//BLUE LINE
var SaintMichel, Iberville, Fabre, DeCastelnau, Parc, Acadie, Outremont, EdouardMontpetit, UdeM, CoteDesNeiges;

//GREEN LINE
var HonoreBeaugrand, Radisson, Langelier, Cadillac, Assomption, Viau, PieIX, Joliette, Prefontaine, Frontenac, Papineau, Beaudry, SaintLaurent,
PlaceDesArts, McGill, Peel, Guy, Atwater, Charlevoix, LaSalle, DeLEglise, Verdun, Jolicoeur, Monk, Angrignon;

//ORANGE LINE
var Montmorency, DeLaConcorde, Cartier, HenriBourassa, Sauve, Cremazie, Jarry, Beaubien, Rosemont, Laurier, MontRoyal, Sherbrooke, ChampDeMars, PlaceDArmes, SquareVictoria,
Bonaventure, LucienLAllier, GeorgesVanier, PlaceSaintHenri, Vendome, VillaMaria, CoteSainteCatherine, Plamondon, Namur, DeLaSavane, DuCollege, CoteVertu;

var street, category;

var allspots;
