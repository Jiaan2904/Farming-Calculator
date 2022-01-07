function Calculate() {
    var length = Number(document.getElementById("input").value);
    var Area = length * length;
    var Perimeter = 4 * length;
    document.getElementById("LabelArea").innerHTML = Area;
    document.getElementById("LabelPerimeter").innerHTML = Perimeter;
}
