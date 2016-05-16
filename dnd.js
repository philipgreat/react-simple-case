

$(document).ready(function() {
		//alert($(location).attr('href'));
		var currentURL=$(location).attr('href');
		var index=currentURL.indexOf("#");
		if(index<0){
			return;
		}
		
		var methodName=currentURL.substring(index+1);
		//reqURI =  encodeURIComponent(methodName) + "/";		
		reqURI =  methodName + "/";		
		console.log("ready!")
		fillResult(reqURI,"#content");
		
		
});

function allowDrop(ev) {
    ev.preventDefault();
    
    
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    var element=document.getElementById(data).cloneNode();
	element.style.width="100px";
	element.style.height="100px";
	element.style.display="block";
	element.style.marginLeft="auto";
	element.style.marginRight="auto";
	
    ev.target.appendChild(element);
}