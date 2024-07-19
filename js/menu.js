(function(){
    // Selecciona el botón para abrir el menú utilizando su clase
    const openButton = document.querySelector('.nav__menu');
    // Selecciona el menú utilizando su clase, ajustado para seleccionar el elemento <ul> directamente
    const menu = document.querySelector('.nav__link--menu');
    // Selecciona el botón para cerrar el menú utilizando su clase, ya está correctamente seleccionado
    const closeMenu = document.querySelector('.nav__close');

    // Agrega un evento de clic al botón de abrir para mostrar el menú
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show'); // Asegura que el menú se muestre agregando la clase correspondiente
    });

    // Agrega un evento de clic al botón de cerrar para ocultar el menú
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show'); // Oculta el menú removiendo la clase correspondiente
    });

    // Mejora: Añadir funcionalidad para cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        // Verifica si el clic fue fuera del menú y del botón de abrir
        if (!menu.contains(e.target) && !openButton.contains(e.target)) {
            menu.classList.remove('nav__link--show'); // Cierra el menú
        }
    });
})();