let adder = document.querySelector(".return");

let button = document.createElement("BUTTON")
button.setAttribute("onclick","formBuilder()")
button.setAttribute("type", "button")
button.setAttribute('class', 'btn btn-primary btn-lg btn-block');
button.innerHTML='If you want to go back'
adder.appendChild(button)

function formBuilder(){
  if (confirm("To go back to the main page click ok, to stay click go back")) {
    adder.innerHTML = ''
    window.location = window.location = 'http://software-engineer-portfolio-builder.surge.sh/index.html'
  } else {
    adder.innerHTML = ''
  }
}