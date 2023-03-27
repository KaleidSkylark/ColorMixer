function mixColors() {
    // get the input values
    var color1 = document.getElementById("color1").value.toLowerCase();
    var color2 = document.getElementById("color2").value.toLowerCase();

    // check if the colors are valid
    if (isValidColor(color1) && isValidColor(color2)) {
        // mix the colors
        var result = mix(color1, color2);

        // display the result
        document.getElementById("result").innerHTML = "The resulting color is " + result;

        // change background color
        document.body.style.backgroundColor = result;
    } else {
        // display error message
        document.getElementById("result").innerHTML = "Please enter valid colors.";
    }                                           
}

// function to check if a color is valid
function isValidColor(color) {
    var validColors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "black", "white"];
    return validColors.includes(color);
}

// function to mix the colors
function mix(color1, color2) {
    if ((color1 == "red" && color2 == "blue") || (color1 == "blue" && color2 == "red")) {
        return "purple";
    } else if (color1 == "blue" && color2 == "yellow" || color1 == "yellow" && color2 == "blue" ) {
        return "green";
    } else if (color1 == "yellow" && color2 == "red" || color1 == "red" && color2 == "yellow") {
        return "orange";
    } else if (color1 == "white" && color2 == "red" || color1 == "red" && color2 == "white"  ) {
        return "pink";
    } else if (color1 == "black" && color2 == "red" || color1 == "red" && color2 == "black") {
        return "maroon";
    } else if (color1 == "black" && color2 == "blue" || color1 == "blue" && color2 == "black") {
        return "navy";
    } else if (color1 == "black" && color2 == "yellow"|| color1 == "yellow" && color2 == "black") {
        return "olive";
    } else if (color1 == "white" && color2 == "blue" || color1 == "blue" && color2 == "white") {
        return "sky blue";
    } else if (color1 == "white" && color2 == "yellow" || color1 == "yellow" && color2 == "white") {
        return "lemon";
    } else {
        return "Sorry, I don't know how to mix those colors.";
    }
}