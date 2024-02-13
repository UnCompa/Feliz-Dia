var videos = document.querySelectorAll('.video-js');
    videos.forEach(function(video){
        videojs(video);
    });

document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("audioPlayer");

  // Función para reproducir automáticamente el audio
  function autoplayAudio() {
    if (audio.paused) {
        audio.currentTime = 10
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
    new simpleParallax(document.querySelectorAll('#img2'), {
        scale: 1.2, 
        orientation: 'right', // Dirección del paralaje (up, down, left, right)
        delay: 0.6, // Retardo de la animación en segundos
        overflow: true, // Habilitar el desplazamiento del paralaje fuera de los límites de su contenedor
        customContainer: null // Contenedor personalizado del paralaje (por defecto, usa el contenedor más cercano)
    });
});

document.addEventListener('DOMContentLoaded', function() {
    new simpleParallax(document.querySelectorAll('#img1'), {
        scale: 1.2, 
        orientation: 'left', // Dirección del paralaje (up, down, left, right)
        delay: 0.6, // Retardo de la animación en segundos
        overflow: true, // Habilitar el desplazamiento del paralaje fuera de los límites de su contenedor
        customContainer: null // Contenedor personalizado del paralaje (por defecto, usa el contenedor más cercano)
    });
});


function calcularDiasTranscurridos(fechaInicio) {
      // Fecha actual
      var fechaActual = new Date();

      // Convertir la fecha de inicio a milisegundos
      var inicio = fechaInicio.getTime();

      // Convertir la fecha actual a milisegundos
      var actual = fechaActual.getTime();

      // Calcular la diferencia de tiempo en milisegundos
      var diferencia = actual - inicio;

      // Convertir la diferencia de tiempo de milisegundos a días
      var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

      return dias;
    }

    function actualizarDiasTranscurridos() {
      // Fecha de inicio (15 de junio de 2023)
      var fechaInicio = new Date(2023, 5, 15); // Meses en JavaScript se indexan desde 0 (0 = enero, 1 = febrero, etc.)

      // Calcular los días transcurridos
      var diasTranscurridos = calcularDiasTranscurridos(fechaInicio);

      // Mostrar los días transcurridos en el elemento HTML
      document.getElementById('counter').textContent = diasTranscurridos;
    }

    // Llamar a la función para mostrar los días transcurridos al cargar la página
    actualizarDiasTranscurridos();

    // Actualizar los días transcurridos cada día
    setInterval(actualizarDiasTranscurridos, 24 * 60 * 60 * 1000); // Cada 24 horas (en milisegundos)