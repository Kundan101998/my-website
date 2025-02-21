function changeText() {
    document.getElementById("message").innerHTML = "You clicked the button!";
}

function showName() {
    let name = document.getElementById("name").value;
    document.getElementById("output").innerHTML = "Hello, " + name + "!";
}
