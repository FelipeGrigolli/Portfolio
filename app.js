var nameElement = document.getElementById('name');
var jobElement = document.getElementById('job');

var nameText = nameElement.innerText;
var jobText = jobElement.innerText;

nameElement.innerText = '';
jobElement.innerText = '';

function typeWriter(text, element, callback) {
  var i = 0;
  var speed = 100;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (typeof callback === 'function') callback();
    }
  }

  type();
}

typeWriter(nameText, nameElement, function() {
  typeWriter(jobText, jobElement);
});


window.onload = function() {
  const texto = document.getElementById('paragrafo');
  const imagem = document.querySelector('.Programador');
  
  texto.classList.add('visible');
  imagem.classList.add('visible');
};


var lastScrollTop = 0;

// Adicione um evento de rolagem à janela
window.addEventListener('scroll', function() {
    // Obtenha a posição atual do scroll
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Verifique se o scroll está se movendo para baixo e se já passou do cabeçalho
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Role para baixo e esconda o cabeçalho
        document.querySelector('header').classList.add('hide');
    } else {
        // Role para cima e mostre o cabeçalho novamente
        document.querySelector('header').classList.remove('hide');
    }

    // Atualize a posição do scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener('DOMContentLoaded', function() {

  let count = 1;
  document.getElementById("radio1").checked = true;

  setInterval(function(){
    nextImage();
  }, 2000);

  function nextImage(){
    count++;
    if(count>3){
      count = 1;
    }

    document.getElementById("radio"+count).checked = true;
  }
});
