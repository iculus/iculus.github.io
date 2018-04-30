
    var f = (function () {
        // create the svg element
        var svg_box = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // set width and height
        svg_box.setAttribute("width", "100");
        svg_box.setAttribute("height", "100");
	svg_box.setAttribute("style", "stroke:white");
        // create a circle
        var my_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        my_circle.setAttribute("cx", "80");
        my_circle.setAttribute("cy", "80");
        my_circle.setAttribute("r", "30");
        my_circle.setAttribute("fill", "green");
        // attach it to the container
        svg_box.appendChild(my_circle);
        // attach container to document
        document.getElementById("svg54583").appendChild(svg_box);
    });
    f();
