function init()
{
	hnames = [ "CEPSUM", "&Eacute;cole de Musique Vincent-d&#39;Indy", "&Eacute;cole Saint-Germain-d&#39;Outremont", "Paroisse Saint-Germain-d&#39;Outremont", "Universit&eacute; de Montr&eacute;al, Facult&eacute; de Musique",
	"Universit&eacute; de Montr&eacute;al, Facult&eacute; des Sciences Infirmi&egrave;res", "Cath&eacute;drale Orthodoxe Grecque Saint-Georges", "&Eacute;glise Saint-Albert-le-Grand" ];
	
	htypes = [ "Sports", "Coll&egrave;ge", "&Eacute;cole", "&Eacute;glise", "Universit&eacute;", "Universit&eacute;", "&Eacute;glise", "&Eacute;glise" ];
	
	haddresses = [ "2100 Boulevard &Eacute;douard-Montpetit", "628 Chemin de la C&ocirc;te-Sainte-Catherine", "46 Avenue Vincent-d&#39;Indy", "28 Avenue Vincent-d&#39;Indy", "200 Avenue Vincent-d&#39;Indy", "2375 Chemin de la C&ocirc;te-Sainte-Catherine",
	"2455 Chemin de la C&ocirc;te-Sainte-Catherine", "2715 Chemin de la C&ocirc;te-Sainte-Catherine" ];
	
	hsites = [ "https://www.cepsum.umontreal.ca/", "http://www.emvi.qc.ca/", "https://www.csmb.qc.ca/fr-CA/enseignement/primaire/ecoles/liste/saint-germain-doutremont.aspx", "https://paroisse-saint-germain.org/", "https://musique.umontreal.ca/accueil/", "https://fsi.umontreal.ca/accueil/",
	"https://hcgm.org/st-george-cathedral/?lang=fr", "http://www.st-albert.org/" ];
	
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
