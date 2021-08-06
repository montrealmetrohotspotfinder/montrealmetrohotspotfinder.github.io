function addEvent(obj, type, fn){
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function init(){
	var d = new Date();
	document.getElementById("dateTime").innerHTML = "It is presently "+d;
}

window.onload = init;
