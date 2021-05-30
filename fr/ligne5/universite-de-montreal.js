function init()
{
	hnames = [ "Universit&eacute; de Montr&eacute;al", "Coll&egrave;ge Jean-de-Br&eacute;beuf", "CHU Sainte-Justine", "HEC Montr&eacute;al", "Universit&eacute; de Montr&eacute;al, Facult&eacute; de l&#39;Am&eacute;nagement", "Universit&eacute; de Montr&eacute;al, Facult&eacute; de M&eacute;decine",
	"Universit&eacute; de Montr&eacute;al, Facult&eacute; de Pharmacie", "Polytechnique Montr&eacute;al"];
	
	htypes = [ "Universit&eacute;", "Coll&egrave;ge", "H&ocirc;pital", "&Eacute;cole", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;" ];
	
	haddresses = [ "2900 Boulevard &Eacute;douard-Montpetit", "3200 Chemin de la C&ocirc;te-Sainte-Catherine", "3175 Chemin de la C&ocirc;te-Sainte-Catherine", "3000 Chemin de la C&ocirc;te-Sainte-Catherine", "2940 Chemin de la C&ocirc;te-Sainte-Catherine", "2900 Boulevard &Eacute;douard-Montpetit",
	"2940 Chemin de Polytechnique", "2500 Chemin de Polytechnique" ];
	
	hsites = [ "https://www.umontreal.ca/", "https://www.brebeuf.qc.ca/", "https://www.chusj.org/fr/accueil", "https://www.hec.ca/index.html", "https://amenagement.umontreal.ca/accueil/", "https://medecine.umontreal.ca/", "https://pharm.umontreal.ca/accueil/", "https://www.polymtl.ca/" ];
	
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
