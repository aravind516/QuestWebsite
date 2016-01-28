setInterval(draw, 60);
var canvas  = document.querySelector('#myCanvas');
var circle = canvas.getContext('2d');
var A1 = 0;
var A2 = 1.5*Math.PI;
var centerX = 150;
var centerY = 150;



function C1(r,d,angle1,angle2, x, y){

	circle.lineWidth = r;
	var gradient = circle.createLinearGradient(0, 0, 0, 1000);
	gradient.addColorStop(0, "#91cfba");
	gradient.addColorStop(1, "#337660");
	circle.strokeStyle = gradient; //'rgba(127, 199, 175, 1)';

	circle.shadowBlur = 10;
	circle.shadowColor = "rgba(0, 250, 250, 1)";

	circle.save();
	circle.beginPath();
	circle.arc(x, y, d, angle1, angle2);
	circle.stroke();
	circle.restore();


}

function draw(){

	circle.clearRect(0, 0, canvas.width, canvas.height);
	A1 += 0.25;
	A2 += 0.25;
	C1(7, 140, A1, A2, centerX, centerY);
	C1(2, 130, A1, A2, centerX, centerY);
}
