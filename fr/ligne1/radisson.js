function init()
{
	hnames = [ "Place Versailles", "Auberge Royal Versailles", "Mairie de Mercier&#8211;Hochelaga-Maisonneuve", "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise",
	"Terminus Radisson", "Galeries d&#39;Anjou via Bus 44", "Les Halles d&#39;Anjou via Bus 44", "Coll&egrave;ge d&#39;Anjou via Bus 44", "Parc du Vaisseau-d&#39;Or", "Parc Radisson",
	"C&eacute;gep Marie-Victorin via Bus 444", "Parc des Roseraies via Bus 44", "Les Terrasses Versailles via Bus 44", "&Eacute;cole des Roseraies via Bus 44",
	"Institut Universitaire en Sant&eacute; Mentale de Montr&eacute;al", "Les Appartements Place Versailles", "Le Symbiose" ];
	
	htypes = [ "Centre Commercial", "H&ocirc;tel", "Gouvernement", "Cimeti&egrave;re", "Terminus d&#39;Autobus", "Centre Commercial", "Centre Commercial", "&Eacute;cole", "Parc", "Parc",
	"Coll&egrave;ge", "Parc", "R&eacute;sidence", "&Eacute;cole", "H&ocirc;pital", "R&eacute;sidence", "R&eacute;sidence" ];
	
	haddresses = [ "7275 Rue Sherbrooke Est", "7200 Rue Sherbrooke Est", "6854 Rue Sherbrooke Est", "6893 Rue Sherbrooke Est", "7155 Rue Sherbrooke Est", 
	"7999 Boulevard des Galeries-d&#39;Anjou", "7500 Boulevard des Galeries-d&#39;Anjou", "11000 Rue Renaude-Lapointe", "3021 Rue du Trianon", "5321 Rue Radisson",
	"7000 Rue Marie-Victorin", "7070 Avenue de la Nantaise", "6923 Boulevard des Galeries-d&#39;Anjou", "6440 Boulevard des Galeries-d&#39;Anjou", "7401 Rue Hochelaga", "7235 Rue Pierre-Corneille",
	"3075 Rue Paul-David" ];
	
	hsites = [ "https://www.placeversailles.com/fr", "https://www.royalversailles.com", "https://montreal.ca/lieux/mairie-darrondissement-de-mercier-hochelaga-maisonneuve", "http://www.rsfa.ca/", 
	"https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-radisson", "https://www.cfshops.com/fr_CA/galeries-d-anjou.html", "https://www.hallesdanjou.com/fr/accueil.html", 
	"https://collegedanjou.qc.ca/", "https://montreal.ca/lieux/parc-du-vaisseau-dor", "https://montreal.ca/lieux/parc-radisson", "https://www.collegemv.qc.ca/", "https://montreal.ca/lieux/parc-des-roseraies",
	"https://www.residencesexcellence.com/residences/terrasses-versailles/accueil", "https://desros.jimdofree.com/", "https://ciusss-estmtl.gouv.qc.ca/etablissement/institut-universitaire-en-sante-mentale-de-montreal",
	"http://www.appartementsplaceversailles.com/", "https://www.residencesexcellence.com/residences/symbiose/accueil" ];
	
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
var hnames, htypes, haddresses, hsites;
