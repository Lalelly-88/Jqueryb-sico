$(document).ready(function() {
    // Ocultar la imagen
    $('#ocultarBtn').click(function() {
      $('#imagen').hide();
      $('h1').text('¡No tenemos ninguna imagen!');
    });
  
    // Mostrar la imagen
    $('#mostrarBtn').click(function() {
      $('#imagen').show();
      $('h1').text('¡Mirá la siguiente imagen!');
    });
  });
  