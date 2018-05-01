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
