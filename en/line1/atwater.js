function init()
{
	spots = [{name: "Dawson College", type: "College", address: "3040 Rue Sherbrooke Ouest", site: "http://www.dawsoncollege.qc.ca/"},
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