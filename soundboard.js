var buttonElement = document.getElementById('button-1')
buttonElement.addEventListener('click', function () {
    var snd = new Audio("applause_y.wav");
    snd.play();
})

var buttonElement1 = document.getElementById('button-2')
buttonElement1.addEventListener('click', function () {
    var snd1 = new Audio("bubbles_sfx.wav");
    snd1.play();
})

var buttonElement2 = document.getElementById('button-3')
buttonElement2.addEventListener('click', function () {
    var snd2 = new Audio("buzzer_x.wav");
    snd2.play();
})