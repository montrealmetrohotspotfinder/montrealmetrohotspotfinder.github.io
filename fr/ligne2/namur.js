function init()
{
	hnames = [ "Gibeau Orange Julep", "Centre Commercial D&eacute;carie Square", "SmartCentres Montr&eacute;al D&eacute;carie", "SPCA Montr&eacute;al", "Parc Nelson-Mandela",
	"&Eacute;cole des Nations", "H&ocirc;tel Ruby Foo&#39;s", "Parc Elie-Wiesel" ];
	
	htypes = [ "Restaurant", "Centre Commercial", "Magasinage", "Agence", "Parc", "&Eacute;cole", "H&ocirc;tel", "Parc" ];
	
	haddresses = [ "7700 Boulevard D&eacute;carie", "6900 Boulevard D&eacute;carie", "5400 Rue Jean-Talon Ouest", "5215 Rue Jean-Talon Ouest", "4920 Rue V&eacute;zina",
	"4860 Rue V&eacute;zina", "7655 Boulevard D&eacute;carie", "5211 Avenue de Courtrai" ];
	
	hsites = [ "https://orangejulep.ca", "#", "https://www.smartcentres.com/fr/property/smartcentres-montreal-decarie-qc/", "https://www.spca.com/",
	"https://montreal.ca/lieux/parc-nelson-mandela", "https://des-nations.csdm.ca/", "https://www.hotelrubyfoos.com/fr/", "https://montreal.ca/lieux/parc-elie-wiesel" ];
	
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
