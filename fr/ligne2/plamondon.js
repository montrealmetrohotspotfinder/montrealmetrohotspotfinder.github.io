function init()
{
	hnames = [ "Centre Commercial Van Horne", "Shadd Health & Business Centre", "Petit Manille", "Ar&eacute;na Bill-Durnan", "Centre Sportif C&ocirc;te-des-Neiges", "&Eacute;cole Primaire Coronation",
	"Ramada Plaza Montr&eacute;al", "Parc Van Horne", "&Eacute;cole du Petit-Chapiteau" ];
	
	htypes = [ "Magasinage", "&Eacute;cole de M&eacute;tiers", "District", "Sports", "Sports", "&Eacute;cole", "H&ocirc;tel", "Parc", "&Eacute;cole" ];
	
	haddresses = [ "4861 Avenue Van Horne", "1000 Avenue Old Orchard", "", "4988 Rue V&eacute;zina", "4880 Avenue Van Horne", "4810 Avenue Van Horne", "6445 Boulevard D&eacute;carie", "4900 Avenue Van Horne", "4890 Avenue Carlton" ];
	
	hsites = [ "https://fcr.ca/fr/properties/quebec/montreal-area/centre-commercial-van-horne/", "http://www.shadd.com/", "#", "https://montreal.ca/lieux/arena-bill-durnan", 
	"https://www.loisirssportifscdn-ndg.com/centre-sportif-cote-des-neiges/", 
	"https://coronation.emsb.qc.ca/coronation", "https://www.ramadaplazamontreal.com/fr-fr", "https://montreal.ca/lieux/parc-van-horne", "https://petit-chapiteau.csdm.ca/" ];
	
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