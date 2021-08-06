function addEvent(obj, type, fn){
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function init(){
	var d = new Date().toLocaleString("fr-CA", { dateStyle: "full", timeStyle: "medium", timeZone: 'America/New_York' } );
	document.getElementById("dateTime").innerHTML = "Il est pr&eacute;sentement le "+d+" &agrave; Montr&eacute;al.";
}

window.onload = init;
