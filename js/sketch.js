var minyDim = 0.0;
var houryDim = 0.0;
var secondyDim = 0.0;

var minheightN = window.innerheight;
var hourheightN = window.innerheight;
var secondheightN = window.innerheight;

var minheightY = window.innerheight - 120;
var hourheightY = window.innerheight - 120;
var secondheightY = window.innerheight - 120;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
	background(50);
	
	// ********** Seconds container **********
	fill(color(255, 204, 0));   
	beginShape(); 

	var secondsXdim = 0.30;

	// Iterate over horizontal pixels
	for (var x = window.innerWidth / 3 * 2; x <= window.innerWidth; x += 10) {
		var y = map(noise(secondsXdim, secondyDim), 0, 1, secondheightN, secondheightY);

		// Set the vertex
		vertex(x, y); 

		// Increment x dimension for noise
		secondsXdim += 0.04;
	}
	// increment y dimension for noise
	secondyDim += 0.01;

	vertex(window.innerWidth, height);
	vertex(window.innerWidth / 3 * 2, height);
	endShape(CLOSE);
	
	// ********** Min container **********
	fill(color(20, 250, 250));   
	beginShape();

	var minXdim = 0.15;

	// Iterate over horizontal pixels
	for (var x = window.innerWidth / 3; x <= window.innerWidth / 3 * 2; x += 10) {
		var y = map(noise(minXdim, minyDim), 0, 1, minheightN, minheightY);
		
		// Set the vertex
		vertex(x, y); 

		// Increment x dimension for noise
		minXdim += 0.08;
	}
	// increment y dimension for noise
	minyDim += 0.01;

	vertex(window.innerWidth / 3 * 2, height);
	vertex(window.innerWidth / 3, height);
	endShape(CLOSE);
	
	// ******* Hour container **********
	fill(color(20, 204, 0));   
	beginShape(); 

	var hourXdim = 0;

	// Iterate over horizontal pixels
	for (var x = 0; x <= window.innerWidth / 3; x += 10) {
		var y = map(noise(hourXdim, houryDim), 0, 1, hourheightN, hourheightY);

		// Set the vertex
		vertex(x, y); 

		// Increment x dimension for noise
		hourXdim += 0.05;
	}
	// increment y dimension for noise
	houryDim += 0.01;

	vertex(window.innerWidth / 3, height);
	vertex(0, height);
	endShape(CLOSE);
	
	let currTime = new Date();
	currTime = currTime.toString().split(' ')[4];
	let currSec = currTime.split(':')[2];
	let currMin = currTime.split(':')[1];
	let currHour = currTime.split(':')[0];

	if (secondheightY > 0) { //Covers Top
		secondheightY = window.innerHeight - currSec * ((window.innerHeight) / 60);
		secondheightN = window.innerHeight - currSec * ((window.innerHeight) / 60) - 120;
	} else {
		secondheightY = window.innerHeight - 10;
		secondheightN = window.innerHeight;
	}
	
	if (minheightY > 0) { //Covers Top
		minheightY = window.innerHeight - currMin * ((window.innerHeight) / 60);
		minheightN = window.innerHeight - currMin * ((window.innerHeight) / 60) - 120;
	} else {
		minheightY = window.innerHeight - 10;
		minheightN = window.innerHeight;
	}
	
	if (hourheightY > 0) { //Covers Top
		hourheightY = window.innerHeight - currHour * ((window.innerHeight) / 24);
		hourheightN = window.innerHeight - currHour * ((window.innerHeight) / 24) - 120 - 120;
	} else {
		hourheightY = window.innerHeight - 10;
		hourheightN = window.innerHeight;
	}
	
	translate((width / 2) - 70, 0, 0);
	push();
	textSize(32);
	text(currHour + ":" + currMin + ":" + currSec, 10, 30);
	fill(0, 102, 153);
	pop();
}