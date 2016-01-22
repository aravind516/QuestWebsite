
function toggle_visibility(id) {

	var elements = document.getElementsByClassName('content');
	for(var i=0; i<elements.length; i++) { 
		elements[i].style.display='none';
	}
	document.getElementById(id).style.display = 'block';
}