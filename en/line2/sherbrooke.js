function init()
{
	spots = [{name: "Institut de Tourisme et d&#39;H&ocirc;tellerie du Qu&eacute;bec", type: "University", address: "3535 Rue Saint-Denis", site: "https://www.ithq.qc.ca/en/institute/"},
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
	{name: "Parc Th&eacute;r&egrave;se-Daviau (formerly Parc Roy-Rivard)", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-therese-daviau"},
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
	{name: "H&ocirc;tel St-Thomas", type: "Hotel", address: "430 Rue Sherbrooke Est", site: "https://hotelst-thomas.com/"}];
	
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
}

window.onload = init; 
var spots;
