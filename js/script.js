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
    document.getElementById("rumusCF").innerHTML = "°F = (°C x 9 / 5) + 32<br>";
    document.getElementById("rumusCF").innerHTML += "°F = (" + inputValue + " x 9 / 5) + 32<br>";
    document.getElementById("rumusCF").innerHTML += "°F = " + Math.round(inputValue * 9 / 5 + 32) + "°F";
    }

    if (degree == "F") {
        var inputValue = document.getElementById("farenheit").value;
        document.getElementById("rumusFC").innerHTML = "°C = (°F - 32) x 5 / 9<br>";
        document.getElementById("rumusFC").innerHTML += "°C = (" + inputValue + "-32) x 5 / 9<br>";
        document.getElementById("rumusFC").innerHTML += "°C = " + Math.round((inputValue-32) * 5 / 9) + "°C";
    }

}