function convert(degree) {
  if (degree == "C") {
    var inputValue = document.getElementById("celsius").value;
    if (!isNaN(inputValue)) {
        var x = inputValue * 9 / 5 + 32;
        document.getElementById("resultCF").innerHTML = Math.round(x) + "°F";
    } else {
        document.getElementById("resultCF").innerHTML = "Fail!";
        window.alert("Please input numeric only");
    }
  }

  if (degree == "F") {
    var inputValue = document.getElementById("farenheit").value;
    if (!isNaN(inputValue)) {
        var x = (inputValue-32) * 5 / 9;
        document.getElementById("resultFC").innerHTML = Math.round(x) + "°C";
    } else {
        document.getElementById("resultFC").innerHTML = "Fail";
        window.alert("Please input numeric only");
    }
  }
}

function rumus(degree) {
    if (degree == "C") {
    var inputValue = document.getElementById("celsius").value;
    document.getElementById("rumusCF").innerHTML = "°C = (°F x 9 / 5) + 32<br>";
    document.getElementById("rumusCF").innerHTML += "°C = (" + inputValue + " x 9 / 5) + 32<br>";
    document.getElementById("rumusCF").innerHTML += "°C = " + Math.round(inputValue * 9 / 5 + 32) + "°C";
    }

    if (degree == "F") {
        var inputValue = document.getElementById("farenheit").value;
        document.getElementById("rumusFC").innerHTML = "°F = (°C - 32) x 5 / 9<br>";
        document.getElementById("rumusFC").innerHTML += "°F = (" + inputValue + "-32) x 5 / 9<br>";
        document.getElementById("rumusFC").innerHTML += "°F = " + Math.round((inputValue-32) * 5 / 9) + "°F";
    }

}