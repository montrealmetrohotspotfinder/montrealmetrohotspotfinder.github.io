function init()
{
	hnames = [ "Promenade Wellington", "Auditorium de Verdun", "Plage de Verdun", "Parc Arthur-Therrien", "Stade Ronald-Pich&eacute;", "H&ocirc;pital de Verdun", "Parc J.-Albert-Gari&eacute;py",
	"&Eacute;glise Notre-Dame-des-Sept-Douleurs de Montr&eacute;al" ];
	
	htypes = [ "Magasinage", "Sports", "Plage", "Parc", "Sports", "H&ocirc;pital", "Parc", "&Eacute;glise" ];
	
	haddresses = [ "266 Rue Hickson", "4110 Boulevard LaSalle", "4110 Boulevard LaSalle", "3750 Boulevard Ga&eacute;tan-Laberge", "3750 Boulevard Ga&eacute;tan-Laberge",
	"4000 Boulevard LaSalle", "10 All&eacute;e des Brises-du-Fleuve", "4155 Rue Wellington" ];
	
	hsites = [ "http://www.promenadewellington.com/fr", 
	"https://montreal.ca/lieux/auditorium-de-verdun", 
	"https://montreal.ca/lieux/plage-urbaine-de-verdun",
	"https://montreal.ca/lieux/parc-arthur-therrien",
	"#",
	"https://www.ciusss-centresudmtl.gouv.qc.ca/etablissement/hopital-de-verdun",
	"https://montreal.ca/lieux/parc-j-albert-gariepy",
	"http://nddt.org/" ];
	
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