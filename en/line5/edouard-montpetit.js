function init()
{
	spots = [{name: "CEPSUM", type: "Sports", address: "2100 Boulevard &Eacute;douard-Montpetit", site: "https://www.cepsum.umontreal.ca/"},
	{name: "&Eacute;cole de Musique Vincent-d&#39;Indy", type: "College", address: "628 Chemin de la C&ocirc;te-Sainte-Catherine", site: "http://www.emvi.qc.ca/"},
	{name: "&Eacute;cole Saint-Germain-d&#39;Outremont", type: "School", address: "46 Avenue Vincent-d&#39;Indy", site: "https://www.csmb.qc.ca/fr-CA/enseignement/primaire/ecoles/liste/saint-germain-doutremont.aspx"},
	{name: "Paroisse Saint-Germain-d&#39;Outremont", type: "Church", address: "28 Avenue Vincent-d&#39;Indy", site: "https://paroisse-saint-germain.org/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Music", type: "University", address: "200 Avenue Vincent-d&#39;Indy", site: "https://musique.umontreal.ca/en/home/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Nursing Sciences", type: "University", address: "2375 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://fsi.umontreal.ca/accueil/"},
	{name: "Cath&eacute;drale Orthodoxe Grecque Saint-Georges", type: "Church", address: "2455 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://hcgm.org/churches/st-george-cathedral/"},
	{name: "&Eacute;glise Saint-Albert-le-Grand", type: "Church", address: "2715 Chemin de la C&ocirc;te-Sainte-Catherine", site: "http://www.st-albert.org/"}];
	
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
