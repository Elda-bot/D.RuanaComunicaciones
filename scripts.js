// Aquí podrías agregar interactividad como validación de formularios, integración con CAPTCHA, etc.
// script.js
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // Cambia el valor según lo que necesites
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
// Código JavaScript que podría estar duplicando elementos
function addHeader() {
    var header = document.createElement('header');
    header.innerHTML = '<img src="images/logo.png" alt="Logo"><nav><ul><li><a href="#">Inicio</a></li><li><a href="#">Servicios</a></li><li><a href="#">Contacto</a></li></ul></nav>';
    document.body.appendChild(header);
}

// Verifica que esta función no se ejecute más de una vez por error
addHeader();
