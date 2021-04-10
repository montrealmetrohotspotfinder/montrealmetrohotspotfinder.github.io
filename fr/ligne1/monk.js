function init()
{
	hnames = [ "Institut Douglas", "Centre Hospitalier Ville-&Eacute;mard", "&Eacute;cole Honor&eacute;-Mercier", 
	"&Eacute;cole Dollard-des-Ormeaux", "&Eacute;cole Saint-Jean-de-Matha", "Parc Clifford", "Parc D&#39;Arcy-McGee", "Parc Cur&eacute;-Albert-Arnold",
	"Paroisse Saint-Jean-de-Matha" ];
	
	htypes = [ "H&ocirc;pital", "H&ocirc;pital", "&Eacute;cole", "&Eacute;cole", "&Eacute;cole", "Parc", "Parc", "Parc", "&Eacute;glise" ];
	
	haddresses = [ "6875 Boulevard LaSalle", "6935 Rue Hamilton", "1935 Boulevard Desmarchais",
	"6639 Rue d&#39;Aragon", "6970 Rue Dumas", "1820 Avenue Clifford", "1500 Avenue Egan", "6855 Rue Hamilton", "2700 Rue Allard" ];
	
	hsites = [ "http://www.douglas.qc.ca/", 
				"https://ciusss-centresudmtl.gouv.qc.ca/etablissement/clsc-de-ville-emard", 
				"https://honore-mercier.csdm.ca/", 
				"http://dollard-des-ormeaux.csdm.ca/", 
				"https://st-jean-de-matha.csdm.ca/", 
				"https://montreal.ca/lieux/parc-clifford", 
				"https://montreal.ca/lieux/parc-darcy-mcgee",
				"https://montreal.ca/lieux/parc-cure-albert-arnold",
				"https://www.diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-jean-matha" ];
	
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