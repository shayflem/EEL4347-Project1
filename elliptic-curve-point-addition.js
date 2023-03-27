function addPoints() {
    var p = 23; // prime number
    var a = 1; // coefficient a of the curve y^2 = x^3 + ax + b
    var b = 4; // coefficient b of the curve y^2 = x^3 + ax + b
    var x1 = parseInt(document.getElementById("x1").value);
    var y1 = parseInt(document.getElementById("y1").value);
    var x2 = parseInt(document.getElementById("x2").value);
    var y2 = parseInt(document.getElementById("y2").value);

    // check if the two points are the same
    if (x1 == x2 && y1 == y2) {
        var slope = (3 * x1 * x1 + a) / (2 * y1);
    } else {
        var slope = (y2 - y1) / (x2 - x1);
    }
    var x3 = (slope * slope - x1 - x2) % p;
    var y3 = (slope * (x1 - x3) - y1) % p;

    document.getElementById("result").innerHTML = "Point 3 = (" + x3 + ", " + y3 + ")";
}
