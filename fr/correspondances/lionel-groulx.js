function init()
{
	hnames = [ "March&eacute; Atwater", "Parc Vinet", "Th&eacute;&acirc;tre Corona", "Parc Victor-Rousselot", "&Eacute;cole Victor-Rousselot", "Lemay, bureaux montr&eacute;alais", "&Eacute;glise Saint-Ir&eacute;n&eacute;e-de-Lyon",
	"Habitations Workman-Delisle", "Joe Beef", "Barley Bar &agrave; C&eacute;r&eacute;ales", "Greenspot", "Resto Caf&eacute; Quoi de N&#39;Oeuf" ];
	
	htypes = [ "March&eacute;", "Parc", "Th&eacute;&acirc;tre", "Parc", "&Eacute;cole", "Bureau", "&Eacute;glise", "R&eacute;sidence", "Restaurant", "Restaurant", "Restaurant",
	"Restaurant" ];
	
	haddresses = [ "138 Avenue Atwater", "550 Rue Vinet", "2490 Rue Notre-Dame Ouest", "", "3525 Rue Sainte-&Eacute;milie", "3500 Rue Saint-Jacques", "3030 Rue Delisle", "2705 Rue Workman", "2491 Rue Notre-Dame Ouest",
	"2613 Rue Notre-Dame Ouest", "3041 Rue Notre-Dame Ouest", "2745 Rue Notre-Dame Ouest" ];
	
	hsites = [ "https://www.marchespublics-mtl.com/marches/atwater/", "https://montreal.ca/lieux/parc-vinet", "https://www.theatrecorona.ca/", "https://montreal.ca/lieux/parc-victor-rousselot", "https://victor-rousselot.cssdm.gouv.qc.ca/", 
	"https://lemay.com/fr/", "http://st-irenee.org/", "https://www.omhm.qc.ca/fr/services-aux-locataires/habitations-workman-delisle-5/", "https://joebeef.squarespace.com/", "https://barleybar.ca/", "https://www.greenspot1947.ca", 
	"https://www.quoidenoeuf.ca" ];
	
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
	
	/*document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + "A&eacute;roport Montr&eacute;al-Trudeau et la station <a href=\"berri-uqam.html\">Berri-UQAM</a> <br/> via l&#39;autobus navette 747" +
	"</td><td>" + "A&eacute;roport<br/>Station" + "</td><td>" + "975 Boulevard Rom&eacute;o-Vachon Nord<br/>505 Rue Sainte-Catherine Est" + "</td><td>" + "<a href=\"https://www.admtl.com/fr\">Site Web</a><br/><a href=\"http://www.stm.info/fr/infos/reseaux/metro/berri-uqam\">Site Web</a></td></tr></li>";*/
}

window.onload = init;
var hnames, htypes, haddresses, hsites;
