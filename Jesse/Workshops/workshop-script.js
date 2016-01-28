
function toggle_visibility(id) {

	var elements = document.getElementsByClassName('content');
	for(var i=0; i<elements.length; i++) { 
		elements[i].style.display='none';
	}
	document.getElementById(id).style.display = 'block';

	var elementsBy = document.getElementsByClassName('by');
	for(var j=0; j<elementsBy.length; j++) { 
		elementsBy[j].style.display='none';
	}
	var byName = id + "-by";
	document.getElementById(byName).style.display = 'table-cell';

}