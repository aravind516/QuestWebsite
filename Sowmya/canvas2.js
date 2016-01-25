  
setInterval(draw,30);
var canvas  = document.querySelector('#canvas');
var circle = canvas.getContext('2d');

canvas.width =window.innerWidth ;
canvas.height=window.innerHeight;
	
//var x1=0,x2=2.3,x3=3.6,y1=2;y2=3.4,y3=5.5;
var x1=0,x2=2.2,x3=4.4,y1=2;y2=4.2,y3=6;

$(window).resize(function(){
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
});

function C1(r,d,angle1,angle2){
	circle.lineWidth = r;
	var gradient = circle.createLinearGradient(0, 0, 0, 1000);
	gradient.addColorStop(0, "rgba(0, 255, 255, 0.5)");
	gradient.addColorStop(1, "rgba(0, 255, 255, 0.5)");
	circle.strokeStyle = gradient; //'rgba(127, 199, 175, 1)';

	circle.shadowBlur = 20;
	circle.shadowColor = "rgba(0, 255, 255, 1)";
    var x = window.innerWidth/2;
    var y = window.innerHeight/2;	
	circle.save();
	circle.beginPath();
	circle.arc(x,y,d,angle1,angle2);
	circle.stroke();
	circle.restore();
}

function C2(r,d,angle1,angle2){
	circle.lineWidth = r;
	var gradient = circle.createLinearGradient(0, 0, 0, 1000);
	gradient.addColorStop(0, "rgba(0, 255, 255, 0.8)");
	gradient.addColorStop(1, "rgba(0, 255, 255, 0.8)");
	circle.strokeStyle = gradient; //'rgba(127, 199, 175, 1)';

	circle.shadowBlur = 20;
	circle.shadowColor = "rgba(0, 255, 255, 1)";
    var x = window.innerWidth/2;
    var y = window.innerHeight/2;	
	circle.save();
	circle.beginPath();
	circle.arc(x,y,d,angle1,angle2);
	circle.stroke();
	circle.restore();
}


function draw(){
    
	circle.clearRect(0, 0, canvas.width, canvas.height);
	
	var radius = window.innerWidth;
	C1(20, radius/8, 0,6.3);
	C1(10, radius/7,0,6.3);
	
	x1+=0.25;
	x2+=0.25;
	x3+=0.25;
	y1+=0.25;
	y2+=0.25;
	y3+=0.25;

	C1(16, radius/6.2,x1,y1);
	C1(16, radius/6.2,x2,y2);
	C1(16, radius/6.2,x3,y3);
	
}
