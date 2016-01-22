setInterval(draw, 60);
var canvas  = document.querySelector('#canvas');
var circle = canvas.getContext('2d');
var A1 = 0;
var A2 = Math.PI;
var A3 = 0;
var A4 = 3*Math.PI/2;
var A5 = 0;
var A6 = Math.PI/3;
var centerX = 500;
var centerY = 300;

function C1(r,d,angle1,angle2){

	circle.lineWidth = r;
	var gradient = circle.createLinearGradient(0, 0, 0, 1000);
	gradient.addColorStop(0, "rgba(0, 255, 255, 1)");
	gradient.addColorStop(1, "rgba(0, 255, 255, 1)");
	circle.strokeStyle = gradient; //'rgba(127, 199, 175, 1)';

	//circle.shadowBlur = 10;
	circle.shadowColor = "rgba(255, 255, 255, 1)";

	circle.save();
	circle.beginPath();
	circle.arc(200, 200,d,angle1,angle2);
	circle.stroke();
	circle.restore();
}

function draw(){

	circle.clearRect(0, 0, canvas.width, canvas.height);
	A1 += 0.25;
	A2 += 0.25;
	A3 -= 0.25;
	A4 -= 0.25;
	A5 += 0.25;
	A6 += 0.25;
	C1(5, 50, A3+0.5, A4);
	C1(3, 100, A1, A2);
	C1(8, 80, A3, A4);
	C1(10, 120, A5, A6+3);

}
