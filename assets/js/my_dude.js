function draw(){
	var canvas = document.getElementById('canvas');
		if (canvas.getContext){
		  var ctx = canvas.getContext('2d');

/*  arc(x, y, radius, startAngle, endAngle, anticlockwise--boolean)  **angles in radians (radians = (Math.PI/180)*degrees)
	quadraticCurveTo(cp1x, cp1y, x, y)
	bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)  
	lineTo(x, y)  **draws line from current position to x,y
	moveTo(x, y)  **moves to new position without drawing the line
*/

	// face
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(325, 340);
	ctx.quadraticCurveTo(300, 370, 250, 372);
	ctx.quadraticCurveTo(110, 385, 90, 345);
	ctx.bezierCurveTo(35, 220, 40, 285, 70, 160);
	ctx.quadraticCurveTo(80, 120, 165, 114);
	//ctx.quadraticCurveTo(105, 70, 235, 80);
	ctx.quadraticCurveTo(295, 100, 320, 165);
	ctx.stroke();

	// crazy hair -- from left
	var x = 90;
	var y = 80;
	var x1 = x - 10;
	var x2 = x + 10;
	var y1 = y + 20;
	var y2 = y + 20;

	ctx.beginPath();

	while (x < 290){
		
		ctx.moveTo(x, y);
		ctx.bezierCurveTo(x1, y1, x2, y2, x, y + 45);
		x += 21;

		if (x > 150) 
			y += 6;

		if (x > 200)
			y += 7;

		if (x > 250)
			y += 4;

		x1 = x - 10;
		x2 = x + 10;
		y1 = y + 10;
		y2 = y + 15;
		ctx.moveTo(x, y - 20);
		ctx.bezierCurveTo(x1, y1, x2, y2, x, y + 30);	
		x += 20;

		if (x < 250) 
			y -= 10;

		if (x > 250)
			y -= 7;

		x1 = x - 10;
		x2 = x + 10;
		y1 = y + 20;
		y2 = y + 14;
	};
	ctx.stroke();

	// mouth
	ctx.beginPath();
	ctx.moveTo(155, 320);
	ctx.quadraticCurveTo(175, 335, 240, 315);
	ctx.stroke();

	// nose
	ctx.beginPath();
	ctx.moveTo(190, 235);
	ctx.lineTo(210, 260);
	ctx.lineTo(198, 275);
	ctx.stroke();

	// left eye
	ctx.fillStyle = 'rgba(0, 0, 255, 0.65)';
	ctx.beginPath();
	ctx.moveTo(155, 203);
	ctx.arc(135, 203, 20, 0, Math.PI*2, false);
	ctx.fill();
	ctx.stroke();

	// right eye
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(265, 203);
	ctx.arc(245, 203, 20, 0, Math.PI*2, false);
	ctx.fill();
	ctx.stroke();

    }
}