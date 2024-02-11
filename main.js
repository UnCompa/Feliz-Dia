document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("audioPlayer");

  // Función para reproducir automáticamente el audio
  function autoplayAudio() {
    if (audio.paused) {
        audio.currentTime = 5
        audio.volume = 0.3
        audio.play();
    }
  }

  // Evento para detectar la interacción del usuario
  document.addEventListener("click", function() {
    autoplayAudio();
  });

  // Intentar reproducir automáticamente al cargar la página
  autoplayAudio();
  setInterval(() => {
      console.log(audio.currentTime)
  }, 1000)
});

let button = document.getElementById('button')
let modal = document.querySelector('.modal-container')

button.addEventListener('click', ()=>{
    modal.classList.toggle('close')
})

document.addEventListener('DOMContentLoaded', function() {
    new simpleParallax(document.querySelectorAll('#img1'), {
        scale: 1.2, 
        orientation: 'left', // Dirección del paralaje (up, down, left, right)
        delay: 0.6, // Retardo de la animación en segundos
        overflow: true, // Habilitar el desplazamiento del paralaje fuera de los límites de su contenedor
        customContainer: null // Contenedor personalizado del paralaje (por defecto, usa el contenedor más cercano)
    });
});