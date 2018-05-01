
var offsetHeight = document.getElementById('mainarea').offsetHeight;
var offsetWidth = document.getElementById('mainarea').offsetWidth;
document.getElementById("widthholder").innerHTML = offsetWidth;
document.getElementById("heightholder").innerHTML = offsetHeight;
var pds = 0;
var id0 = setInterval(tvmoves, 1);

document.getElementById("mainarea").style.width = offsetWidth + "px"; 

function tvmoves(){
  pds = pds + 20;
  document.getElementById("displaysize").innerHTML = pds;
  document.getElementById("mainarea").style.width = offsetWidth - pds + "px";
} 

document.getElementsByTagName("BODY")[0].onload = function() {go()};
document.getElementsByTagName("BODY")[0].onresize = function() {go()};

//var dot = document.getElementById("bluedot").cx.baseVal.value;
//document.getElementById("display").innerHTML = dot;


function changePadding(){
  //get margin size and check for need here
  //var pl = document.getElementById('grid-container').style.paddingLeft;
  //document.getElementById("display").innerHTML = pl;
  
  var pads = 0;
  var id3 = setInterval(frame, 30);
  function frame() {
    if (pads == 30){ clearInterval(id3); }
    else {
      pads++;
      document.getElementById("grid-container").style.paddingLeft = 30-pads + "vw";
      document.getElementById("grid-container").style.paddingRight = 30-pads + "vw";
    }
  }
}

function returnPadding(){
  //get margin size and check for need here
  //var pl = document.getElementById('grid-container').style.paddingLeft;
  //document.getElementById("display").innerHTML = pl;
  
  var pads = 0;
  var id4 = setInterval(frame, 30);
  function frame() {
    if (pads == 30){ clearInterval(id4); }
    else {
      pads++;
      document.getElementById("grid-container").style.paddingLeft = pads + "vw";
      document.getElementById("grid-container").style.paddingRight = pads + "vw";
    }
  }
}


function go(){
	var id = setInterval(animateSize, 5);
	var pos = 400;
	var SVGID = document.getElementById("svg001");
	var SVGBG = document.getElementById("svg000");
	var size = {
		width: window.innerWidth || document.body.clientWidth,
		height: window.innerHeight || document.body.clientHeight
	}
	var scale = 0.95;
	function animateSize(){
		if (pos == 0){clearInterval(id);}
		else{
			pos--;
			var thisSize = 0;
			if (size.width <= size.height) {thisSize = size.width;}
			if (size.width > size.height) {thisSize = size.height;}			
			SVGID.width.baseVal.value = offsetWidth*scale-pos;
			SVGID.height.baseVal.value = offsetHeight*scale-pos;
		}
	}
	SVGBG.width.baseVal.value = size.width-10;
	SVGBG.height.baseVal.value = size.height-10;
}


var arr =["mix-blend-mode: normal;","mix-blend-mode: multiply;","mix-blend-mode: screen;","mix-blend-mode: overlay;","mix-blend-mode: darken;","mix-blend-mode: lighten;","mix-blend-mode: color-dodge;","mix-blend-mode: color-burn;","mix-blend-mode: hard-light;","mix-blend-mode: soft-light;","mix-blend-mode: difference;","mix-blend-mode: exclusion;","mix-blend-mode: hue;","mix-blend-mode: saturation;","mix-blend-mode: color;","mix-blend-mode: luminosity;"];
var rotate = 0;

if (rotate == 1) {setBlend(1);}
if (rotate == 0) {setRotate(500);}

function setBlend(thisValue){
	var x = arr[thisValue];
	var opa = 0;
	var spd = 4;
	var adj = 0.01;
	var adjNow = 0;

	document.getElementById("test0").setAttribute("style", "font-size: 6vh;");
	document.getElementById("test1").setAttribute("style", "font-size: 6vh;");
	document.getElementById("test2").setAttribute("style", "font-size: 6vh;");

	document.getElementById("test0").setAttribute("style", x);
	document.getElementById("test1").setAttribute("style", x);
	document.getElementById("test2").setAttribute("style", x);

	var changeOpa = setInterval(changeOpacity, spd);

	function changeOpacity(){
		if (adjNow >= 1.00) {clearInterval(changeOpa);}
		else {
			adjNow = adjNow+adj;
			document.getElementById("test0").style.opacity = opa+adjNow;
			document.getElementById("test1").style.opacity = opa+adjNow;
			document.getElementById("test2").style.opacity = opa+adjNow;
		}
	}
}


function setRotate(speed){
	var myVar = setInterval(updateBlend, speed);
	var y = 0;
	function updateBlend() {
		if (y == arr.length) {y = 0;}
		else { y++;
			var x = arr[y];

			document.getElementById("test0").setAttribute("style", x);
			document.getElementById("test1").setAttribute("style", x);
			document.getElementById("test2").setAttribute("style", x);
		}
	}
}



var svgEl = document.querySelector('.animated-lines');

var randomRange = function(min, max) {
  return ~~(Math.random() * (max - min + 1)) + min
};

var numberOfLines = 100,
  lineDataArr = [];

var createPathString = function() {

  var completedPath = '',
    comma = ',',
    ampl = 10; // pixel range from 0, aka how deeply they bend

  for (var i = 0; i < numberOfLines; i++) {

    var path = lineDataArr[i];

    var current = {
      x: ampl * Math.sin(path.counter / path.sin),
      y: ampl * Math.cos(path.counter / path.cos)
    };

    var newPathSection = 'M' +
      // starting point
      path.startX +
      comma +
      path.startY +
      // quadratic control point
      ' Q' +
      path.pointX +
      comma +
      (current.y * 2).toFixed(3) + // 1.5 to amp up the bend a little
      // center point intersection
      ' ' +
      ((current.x) / 10 + path.centerX).toFixed(3) +
      comma +
      ((current.y) / 5 + path.centerY).toFixed(3) +
      // end point with quadratic reflection (T) (so the bottom right mirrors the top left)
      ' T' +
      path.endX +
      comma +
      path.endY;
    path.counter++;

    completedPath += newPathSection;

  };

  return completedPath;

};

var createLines = function() {

  var newPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
    // higher is slower
    minSpeed = 1,
    maxSpeed = 150;

  // create an arr which contains objects for all lines
  // createPathString() will use this array
  for (var i = 0; i < numberOfLines; i++) {

    var lineDataObj = {
      counter: randomRange(1, 5000), // a broad counter range ensures lines start at different cycles (will look more random)
      startX: randomRange(-10, -10),
      startY: randomRange(20, 40),
      endX: randomRange(60, 60), // viewbox = 200
      endY: randomRange(10, 30), // viewbox = 120
      sin: randomRange(minSpeed, maxSpeed),
      cos: randomRange(minSpeed, maxSpeed),
      pointX: randomRange(0, 0),
      centerX: randomRange(15, 25),
      centerY: randomRange(23, 23)
    }

    lineDataArr.push(lineDataObj)

  }

  var animLoop = function() {
    newPathEl.setAttribute('d', createPathString());
    requestAnimationFrame(animLoop);
  }

  // once the path elements are created, start the animation loop
  svgEl.appendChild(newPathEl);
  animLoop();

};

createLines();


