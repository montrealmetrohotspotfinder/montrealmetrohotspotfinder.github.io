function init()
{
	spots = [{name: "Universit&eacute; de Montr&eacute;al", type: "University", address: "2900 Boulevard &Eacute;douard-Montpetit", site: "https://www.umontreal.ca/en/"},
	{name: "Coll&egrave;ge Jean-de-Br&eacute;beuf", type: "College", address: "3200 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.brebeuf.qc.ca/"},
	{name: "CHU Sainte-Justine", type: "Hospital", address: "3175 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.chusj.org/Home"},
	{name: "HEC Montr&eacute;al", type: "School", address: "3000 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.hec.ca/en/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Environmental Design", type: "University", address: "2940 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://amenagement.umontreal.ca/accueil/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Medicine", type: "University", address: "2900 Boulevard &Eacute;douard-Montpetit", site: "https://medecine.umontreal.ca/medical-school/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Pharmacy", type: "University", address: "2940 Chemin de Polytechnique", site: "https://pharm.umontreal.ca/english/home/"},
	{name: "Polytechnique Montr&eacute;al", type: "University", address: "2500 Chemin de Polytechnique", site: "https://www.polymtl.ca/en/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Arts and Sciences", type: "University", address: "3150 Rue Jean-Brillant", site: "https://fas.umontreal.ca/accueil/"},
	{name: "Universit&eacute; de Montr&eacute;al, Department of Pharmacology and Physiology", type: "University", address: "2960 Chemin de la Tour", site: "https://pharmacologie-physiologie.umontreal.ca/"},
	{name: "Universit&eacute; de Montr&eacute;al, Faculty of Law", type: "University", address: "3101 Chemin de la Tour", site: "https://droit.umontreal.ca/en/home/"},
	{name: "Universit&eacute; de Montr&eacute;al, Department of Computer Science and Operations Research", type: "University", address: "2920 Chemin de la Tour", site: "https://diro.umontreal.ca/english/home/"},
	{name: "Universit&eacute; de Montr&eacute;al, Biblioth&egrave;que des Lettres et Sciences Humaines", type: "Library", address: "3000 Rue Jean-Brillant", site: "https://bib.umontreal.ca/travailler/les-bibliotheques/lettres-sciences-humaines"}];
	
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
