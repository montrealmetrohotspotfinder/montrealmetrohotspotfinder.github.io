function init()
{
	spots = [{name: "Place Versailles", type: "Mall", address: "7275 Rue Sherbrooke Est", site: "https://www.placeversailles.com/en"},
	{name: "Auberge Royal Versailles", type: "Hotel", address: "7200 Rue Sherbrooke Est", site: "https://www.royalversailles.com/en/"},
	{name: "Mercier&#8211;Hochelaga-Maisonneuve Borough Hall", type: "Government", address: "6854 Rue Sherbrooke Est", site: "https://montreal.ca/en/places/mercier-hochelaga-maisonneuve-borough-hall"},
	{name: "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise", type: "Cemetery", address: "6893 Rue Sherbrooke Est", site: "http://www.rsfa.ca/"},
	{name: "Terminus Radisson", type: "Bus Terminal", address: "7155 Rue Sherbrooke Est", site: "https://exo.quebec/en/trip-planner/intermodal-installations/radisson-terminal"},
	{name: "Galeries d&#39;Anjou via Bus 44", type: "Mall", address: "7999 Boulevard des Galeries-d&#39;Anjou", site: "https://www.cfshops.com/galeries-d-anjou.html"},
	{name: "Les Halles d&#39;Anjou via Bus 44", type: "Mall", address: "7500 Boulevard des Galeries-d&#39;Anjou", site: "https://www.hallesdanjou.com/en/home.html"},
	{name: "Coll&egrave;ge d&#39;Anjou via Bus 44", type: "School", address: "11000 Rue Renaude-Lapointe", site: "https://collegedanjou.qc.ca/"},
	{name: "Parc du Vaisseau-d&#39;Or", type: "Park", address: "3021 Rue du Trianon", site: "https://montreal.ca/en/places/parc-du-vaisseau-dor"},
	{name: "Parc Radisson", type: "Park", address: "5321 Rue Radisson", site: "https://montreal.ca/en/places/parc-radisson"},
	{name: "C&eacute;gep Marie-Victorin via Bus 444", type: "College", address: "7000 Rue Marie-Victorin", site: "https://www.collegemv.qc.ca/"},
	{name: "Parc des Roseraies via Bus 44", type: "Park", address: "7070 Avenue de la Nantaise", site: "https://montreal.ca/en/places/parc-des-roseraies"},
	{name: "Les Terrasses Versailles via Bus 44", type: "Residence", address: "6923 Boulevard des Galeries-d&#39;Anjou", site: "https://www.residencesexcellence.com/residences/terrasses-versailles/accueil"},
	{name: "&Eacute;cole des Roseraies via Bus 44", type: "School", address: "6440 Boulevard des Galeries-d&#39;Anjou", site: "https://desros.jimdofree.com/"},
	{name: "Institut Universitaire en Sant&eacute; Mentale de Montr&eacute;al", type: "Hospital", address: "7401 Rue Hochelaga", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/institut-universitaire-en-sante-mentale-de-montreal"},
	{name: "Place Versailles Apartments", type: "Residence", address: "7235 Rue Pierre-Corneille", site: "http://www.appartementsplaceversailles.com/"},
	{name: "Le Symbiose", type: "Residence", address: "3075 Rue Paul-David", site: "https://www.residencesexcellence.com/residences/symbiose/accueil"}];
	
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
	
	/*PONT-TUNNEL LOUIS-HIPPOLYTE LA FONTAINE CLOSURE: EXO BUSES DO NOT OPERATE BETWEEN FRIDAYS 11:30PM TO MONDAYS 5:00AM*/
	var d = new Date();
	
	/*LA FONTAINE REOPENS AT 5:00 AM ON MONDAYS; LA FONTAINE CLOSES AT 11:30 PM ON FRIDAYS*/
	switch(d.getUTCDay()){
		case 6:{ //SATURDAY
			if(d.getUTCHours() == 3){
				if(d.getUTCMinutes() >= 30){ //TUNNEL IS CLOSED
					document.getElementById("connections-js").innerHTML = "<li><tr><td>26</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li><li><tr><td>44</td><td>Anjou</td></tr></li>"+
					"<li><tr><td>185</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"langelier.html\">Langelier</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"cadillac.html\">Cadillac</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"frontenac.html\">Frontenac</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li>"+
					"<li><tr><td>432</td><td>Saint-L&eacute;onard</td></tr></li>"+
					"<li><tr><td>444</td><td>C&eacute;gep Marie-Victorin</td></tr></li>"+
					"<li><tr><td>448</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
					"<li><tr><td>449</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
					"<li><tr><td>STL 925</td><td>Laval</td></tr></li>"+
					"<li><tr><td>CRT Lanaudi&egrave;re</td><td>Joliette</td></tr></li>"+
					"<li><tr><td>MRC De L&#39;Assomption</td><td>L&#39;Assomption</td></tr></li>"+
					"<li><tr><td>MRC Les Moulins</td><td>Mascouche</td></tr></li>";
				}
				else { //TUNNEL IS OPEN
					document.getElementById("connections-js").innerHTML = "<li><tr><td>26</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li><li><tr><td>44</td><td>Anjou</td></tr></li>"+
					"<li><tr><td>185</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"langelier.html\">Langelier</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"cadillac.html\">Cadillac</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"frontenac.html\">Frontenac</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li>"+
					"<li><tr><td>432</td><td>Saint-L&eacute;onard</td></tr></li>"+
					"<li><tr><td>444</td><td>C&eacute;gep Marie-Victorin</td></tr></li>"+
					"<li><tr><td>448</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
					"<li><tr><td>449</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
					"<li><tr><td>EXO</td><td>Boucherville<br/>Beloeil<br/>Varennes<br/>Sainte-Julie</td></tr></li>"+
					"<li><tr><td>RTL 61</td><td>Boucherville</td></tr></li>"+
					"<li><tr><td>RTL 461</td><td>Boucherville</td></tr></li>"+
					"<li><tr><td>STL 925</td><td>Laval</td></tr></li>"+
					"<li><tr><td>CRT Lanaudi&egrave;re</td><td>Joliette</td></tr></li>"+
					"<li><tr><td>MRC De L&#39;Assomption</td><td>L&#39;Assomption</td></tr></li>"+
					"<li><tr><td>MRC Les Moulins</td><td>Mascouche</td></tr></li>";
				}
			}
			else if (d.getUTCHours() > 3){ //TUNNEL IS CLOSED
				document.getElementById("connections-js").innerHTML = "<li><tr><td>26</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li><li><tr><td>44</td><td>Anjou</td></tr></li>"+
				"<li><tr><td>185</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"langelier.html\">Langelier</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"cadillac.html\">Cadillac</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"frontenac.html\">Frontenac</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li>"+
				"<li><tr><td>432</td><td>Saint-L&eacute;onard</td></tr></li>"+
				"<li><tr><td>444</td><td>C&eacute;gep Marie-Victorin</td></tr></li>"+
				"<li><tr><td>448</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
				"<li><tr><td>449</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
				"<li><tr><td>STL 925</td><td>Laval</td></tr></li>"+
				"<li><tr><td>CRT Lanaudi&egrave;re</td><td>Joliette</td></tr></li>"+
				"<li><tr><td>MRC De L&#39;Assomption</td><td>L&#39;Assomption</td></tr></li>"+
				"<li><tr><td>MRC Les Moulins</td><td>Mascouche</td></tr></li>";
			}
			else { //TUNNEL IS OPEN
				document.getElementById("connections-js").innerHTML = "<li><tr><td>26</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li><li><tr><td>44</td><td>Anjou</td></tr></li>"+
				"<li><tr><td>185</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"langelier.html\">Langelier</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"cadillac.html\">Cadillac</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"frontenac.html\">Frontenac</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li>"+
				"<li><tr><td>432</td><td>Saint-L&eacute;onard</td></tr></li>"+
				"<li><tr><td>444</td><td>C&eacute;gep Marie-Victorin</td></tr></li>"+
				"<li><tr><td>448</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
				"<li><tr><td>449</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
				"<li><tr><td>EXO</td><td>Boucherville<br/>Beloeil<br/>Varennes<br/>Sainte-Julie</td></tr></li>"+
				"<li><tr><td>RTL 61</td><td>Boucherville</td></tr></li>"+
				"<li><tr><td>RTL 461</td><td>Boucherville</td></tr></li>"+
				"<li><tr><td>STL 925</td><td>Laval</td></tr></li>"+
				"<li><tr><td>CRT Lanaudi&egrave;re</td><td>Joliette</td></tr></li>"+
				"<li><tr><td>MRC De L&#39;Assomption</td><td>L&#39;Assomption</td></tr></li>"+
				"<li><tr><td>MRC Les Moulins</td><td>Mascouche</td></tr></li>";
			}
			break;
		}
		case 0:{ //SUNDAY: TUNNEL IS CLOSED
			document.getElementById("connections-js").innerHTML = "<li><tr><td>26</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li><li><tr><td>44</td><td>Anjou</td></tr></li>"+
			"<li><tr><td>185</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"langelier.html\">Langelier</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"cadillac.html\">Cadillac</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"frontenac.html\">Frontenac</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li>"+
			"<li><tr><td>432</td><td>Saint-L&eacute;onard</td></tr></li>"+
			"<li><tr><td>444</td><td>C&eacute;gep Marie-Victorin</td></tr></li>"+
			"<li><tr><td>448</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
			"<li><tr><td>449</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
			"<li><tr><td>STL 925</td><td>Laval</td></tr></li>"+
			"<li><tr><td>CRT Lanaudi&egrave;re</td><td>Joliette</td></tr></li>"+
			"<li><tr><td>MRC De L&#39;Assomption</td><td>L&#39;Assomption</td></tr></li>"+
			"<li><tr><td>MRC Les Moulins</td><td>Mascouche</td></tr></li>";
			break;
		}
		case 1:{ //MONDAY
			if(d.getUTCHours() >= 9){ //TUNNEL IS OPEN
				document.getElementById("connections-js").innerHTML = "<li><tr><td>26</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li><li><tr><td>44</td><td>Anjou</td></tr></li>"+
				"<li><tr><td>185</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"langelier.html\">Langelier</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"cadillac.html\">Cadillac</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"frontenac.html\">Frontenac</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li>"+
				"<li><tr><td>432</td><td>Saint-L&eacute;onard</td></tr></li>"+
				"<li><tr><td>444</td><td>C&eacute;gep Marie-Victorin</td></tr></li>"+
				"<li><tr><td>448</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
				"<li><tr><td>449</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
				"<li><tr><td>EXO</td><td>Boucherville<br/>Beloeil<br/>Varennes<br/>Sainte-Julie</td></tr></li>"+
				"<li><tr><td>RTL 61</td><td>Boucherville</td></tr></li>"+
				"<li><tr><td>RTL 461</td><td>Boucherville</td></tr></li>"+
				"<li><tr><td>STL 925</td><td>Laval</td></tr></li>"+
				"<li><tr><td>CRT Lanaudi&egrave;re</td><td>Joliette</td></tr></li>"+
				"<li><tr><td>MRC De L&#39;Assomption</td><td>L&#39;Assomption</td></tr></li>"+
				"<li><tr><td>MRC Les Moulins</td><td>Mascouche</td></tr></li>";
			}
			else { //TUNNEL IS CLOSED
				document.getElementById("connections-js").innerHTML = "<li><tr><td>26</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li><li><tr><td>44</td><td>Anjou</td></tr></li>"+
				"<li><tr><td>185</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"langelier.html\">Langelier</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"cadillac.html\">Cadillac</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"frontenac.html\">Frontenac</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li>"+
				"<li><tr><td>432</td><td>Saint-L&eacute;onard</td></tr></li>"+
				"<li><tr><td>444</td><td>C&eacute;gep Marie-Victorin</td></tr></li>"+
				"<li><tr><td>448</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
				"<li><tr><td>449</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
				"<li><tr><td>STL 925</td><td>Laval</td></tr></li>"+
				"<li><tr><td>CRT Lanaudi&egrave;re</td><td>Joliette</td></tr></li>"+
				"<li><tr><td>MRC De L&#39;Assomption</td><td>L&#39;Assomption</td></tr></li>"+
				"<li><tr><td>MRC Les Moulins</td><td>Mascouche</td></tr></li>";
			}
			break;
		}
		default:{ //TUNNEL IS OPEN
			document.getElementById("connections-js").innerHTML = "<li><tr><td>26</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li><li><tr><td>44</td><td>Anjou</td></tr></li>"+
			"<li><tr><td>185</td><td><a href=\"honore-beaugrand.html\">Honor&eacute;-Beaugrand</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"langelier.html\">Langelier</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"cadillac.html\">Cadillac</a> <span style=\"color:green\">&#x2B24;</span><br/><a href=\"frontenac.html\">Frontenac</a> <span style=\"color:green\">&#x2B24;</span></td></tr></li>"+
			"<li><tr><td>432</td><td>Saint-L&eacute;onard</td></tr></li>"+
			"<li><tr><td>444</td><td>C&eacute;gep Marie-Victorin</td></tr></li>"+
			"<li><tr><td>448</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
			"<li><tr><td>449</td><td>Rivi&egrave;re-des-Prairies / Pointe-aux-Trembles</td></tr></li>"+
			"<li><tr><td>EXO</td><td>Boucherville<br/>Beloeil<br/>Varennes<br/>Sainte-Julie</td></tr></li>"+
			"<li><tr><td>RTL 61</td><td>Boucherville</td></tr></li>"+
			"<li><tr><td>RTL 461</td><td>Boucherville</td></tr></li>"+
			"<li><tr><td>STL 925</td><td>Laval</td></tr></li>"+
			"<li><tr><td>CRT Lanaudi&egrave;re</td><td>Joliette</td></tr></li>"+
			"<li><tr><td>MRC De L&#39;Assomption</td><td>L&#39;Assomption</td></tr></li>"+
			"<li><tr><td>MRC Les Moulins</td><td>Mascouche</td></tr></li>";
			break;
		}
	}
}

window.onload = init; 
var spots;
