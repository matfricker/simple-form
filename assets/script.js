window.onload = function() {
    var boxes = document.getElementById("boxes");
    var text = null;
    var message = null;
    // Set Focus on first textbox
    document.getElementById("txtName").focus();
    
    draw();
}

function writeInput(textBox, messageLabel) {
    text = document.getElementById(textBox);
    message = document.getElementById(messageLabel);
    message.innerHTML = text.value;
}

function checkInput(textBox) {
    text = document.getElementById(textBox);
    if (text.value.length == 0) {
        boxes.style.visibility = "visible";
    }
}

function changeColor() {
    if (message != null) {
        message.style.color = "#fff";
    }
}

function closePrompt() {
    boxes.style.visibility = "hidden";
}

function draw() {
    //var i = 0;
    //while (i <= 100) {
    //    document.getElementById("firstName").innerHTML += i + " ";
    //    i++;
    //}
}

function clearText(textBox) {
    alert(textBox);
    text = document.getElementById(textBox);
    text.value = "aaa";
}