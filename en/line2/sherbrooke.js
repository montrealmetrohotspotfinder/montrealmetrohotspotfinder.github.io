function init()
{
	spots = [{name: "Institut de Tourisme et d&#39;H&ocirc;tellerie du Qu&eacute;bec", type: "University", address: "3535 Rue Saint-Denis", site: "https://www.ithq.qc.ca/en/institute/"},
	{name: "H&ocirc;tel de l&#39;ITHQ", type: "Hotel", address: "3535 Rue Saint-Denis", site: "http://www.ithq.qc.ca/en/hotel/"},
	{name: "Parc La Fontaine", type: "Park", address: "3819 Avenue Calixa-Lavall&eacute;e", site: "https://montreal.ca/en/places/parc-la-fontaine"},
	{name: "Square Saint-Louis", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-saint-louis"},
	{name: "Auberge du Carr&eacute; Saint-Louis", type: "Hotel", address: "3466 Rue Saint-Denis", site: "https://aubergecarrestlouis.com/home"},
	{name: "Th&eacute;&acirc;tre d&#39;Aujourd&#39;hui", type: "Theatre", address: "3900 Rue Saint-Denis", site: "https://www.theatredaujourdhui.qc.ca/"},
	{name: "Th&eacute;&acirc;tre de Quat&#39;Sous", type: "Theatre", address: "100 Avenue des Pins Est", site: "https://www.quatsous.com/"},
	{name: "Th&eacute;&acirc;tre La Chappelle", type: "Theatre", address: "3700 Rue Saint-Dominique", site: "https://lachapelle.org/en"},
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
	{name: "Parc Th&eacute;r&egrave;se-Daviau (formerly Parc Roy-Rivard)", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-therese-daviau"}];
	
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
