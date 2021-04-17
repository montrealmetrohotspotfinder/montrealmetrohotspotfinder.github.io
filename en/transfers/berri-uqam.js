function init()
{
	spots = [{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al", type: "University", address: "405 Rue Sainte-Catherine Est", site: "http://www.uqam.ca/"},
	{name: "Grande Biblioth&egrave;que de Montr&eacute;al", type: "Library", address: "475 Boulevard de Maisonneuve Est", site: "https://www.banq.qc.ca/accueil/index.html?language_id=1"},
	{name: "Gare d&#39;Autocars de Montr&eacute;al", type: "Bus Terminal", address: "1717 Rue Berri", site: "http://www.gamtl.com/en/bienvenue/default.aspx"},
	{name: "Th&eacute;&acirc;tre Saint-Denis", type: "Theatre", address: "1594 Rue Saint-Denis", site: "https://theatrestdenis.com/en/"},
	{name: "Place Dupuis", type: "Mall", address: "845 Rue Sainte-Catherine Est", site: "https://busac.com/project/place-dupuis-montreal-qc/"},
	{name: "H&ocirc;tel Place Dupuis Montr&eacute;al", type: "Hotel", address: "1415 Rue Saint-Hubert", site: "https://www.choicehotels.com/quebec/montreal/ascend-hotels/cnb60?mc=llyxcncnnbl&pmf=canada"},
	{name: "Warner Brothers Montr&eacute;al", type: "Office", address: "888 Boulevard de Maisonneuve Est", site: "http://wbgamesmontreal.com/"},
	{name: "DaGiovanni", type: "Restaurant", address: "572 Rue Sainte-Catherine Est", site: "http://www.dagiovanni.ca/"},
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
	{name: "&Eacute;cole de Design de l&#39;UQAM", type: "University", address: "1440 Rue Sanguinet", site: "https://design.uqam.ca/"},
	{name: "Parc Saint-Jacques", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-saint-jacques"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Judith-Jasmin Pavilion", type: "University", address: "1564 Rue Saint-Denis", site: "http://carte.uqam.ca/pavillon-je"},
	{name: "H&ocirc;tel Le Relais Lyonnais", type: "Hotel", address: "1595 Rue Saint-Denis", site: "http://lerelaislyonnais.com/en/"}];
	
	if(spots.length == 1){
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><b>"+spots.length+ " hotspot is near this station.</b></span><br/><br/>";
	}
	else {
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><b>"+spots.length+ " hotspots are near this station.</b></span><br/><br/>";
	}
	
	for (var i=0; i<spots.length; i++)
	{
		if (spots[i].site == "#")
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + spots[i].name 
			+ "</td><td>" + spots[i].type 
			+ "</td><td>" + spots[i].address 
			+ "</td><td>" + "No website available</td></tr></li>";
		}
		else
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + spots[i].name 
			+ "</td><td>" + spots[i].type 
			+ "</td><td>" + spots[i].address 
			+ "</td><td>" + "<a href=\"" + spots[i].site + "\">Website</a></td></tr></li>";
		} 	
	}
	
	/*document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + "A&eacute;roport Montr&eacute;al-Trudeau and <a href=\"lionel-groulx.html\">Lionel-Groulx</a><br/> station via Shuttle Bus 747" +
	"</td><td>" + "Airport<br/>Station" + "</td><td>" + "975 Boulevard Rom&eacute;o-Vachon Nord<br/>620 Avenue Atwater" + "</td><td>" + "<a href=\"https://www.admtl.com/en\">Website</a><br/><a href=\"http://www.stm.info/en/info/networks/metro/lionel-groulx\">Website</a></td></tr></li>";*/

}

window.onload = init;
var spots;
