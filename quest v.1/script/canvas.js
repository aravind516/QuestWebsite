  //setInterval(draw,30);

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

function C1(r,d,angle1,angle2,blur){
	circle.lineWidth = r;
	var gradient = circle.createLinearGradient(0, 0, 0, 1000);
	gradient.addColorStop(0, "rgba(0, 255, 255, 1)");
	gradient.addColorStop(1, "rgba(0, 255, 255, 1)");
	circle.strokeStyle = gradient; //'rgba(127, 199, 175, 1)';

	circle.shadowBlur = blur;
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
	C1(20, radius/8, 0,6.3,0);
	C1(10, radius/7,0,6.3,0);
	
	x1+=0.01;
	x2+=0.01;
	x3+=0.01;
	y1+=0.01;
	y2+=0.01;
	y3+=0.01;
	

	C1(25, radius/5.8,x1,y1,0);
	C1(25, radius/5.8,x2,y2,0);
	C1(25, radius/5.8,x3,y3,0);
	
	var a=0,b=0.04;
	
	for(var i=0;i<31;i++){
	  C1(15,radius/6.4,a,b,20);
	  a+=0.2;
	  b=a+0.04;
	}
	
}
var x =500;
$(window).resize(function(){draw();});
draw();
setInterval(draw,30);

 var cw;  
	 $( window ).resize( function () {
	    cw = window.innerWidth;
		cw/=6;
		cw /= 1.8213328;
		cw *= 2;
		$(".canvasCenter").css("width",cw);
		$(".canvasCenter").css("height",cw);
	    $(".canvas-wrap").css("width",window.innerWidth);
		$(".canvas-wrap").css("height",window.innerHeight);
		$(".canvasCenter").css("transform","translate("+((window.innerWidth)/2-cw/2)+"px,"+((window.innerHeight)/2-cw/2)+"px)");
	});
	  
	  $(function(){
	     cw = window.innerWidth;
	     cw /=6;
		 cw /= 1.8213328;
		 cw *= 2;
		$(".canvasCenter").css("width",cw);
		$(".canvasCenter").css("height",cw);
		$(".canvas-wrap").css("width",window.innerWidth);
		$(".canvas-wrap").css("height",window.innerHeight);
		$(".canvas-wrap li").css("width",cw);
		$(".canvas-wrap li").css("height",cw);
		$(".canvasCenter").css("transform","translate("+((window.innerWidth)/2-cw/2)+"px,"+((window.innerHeight)/2-cw/2)+"px)");
		
		 $('.wholeCanWrap').click(function(){
		      
		  });
	  });
	  