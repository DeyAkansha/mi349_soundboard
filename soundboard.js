
var buttonElement = document.getElementById('button-1')
buttonElement.addEventListener('click', function () {
    console.log('I was clicked!')
    var snd = new Audio("applause_y.wav")
    snd.play()
})