// Obtiene todos los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-links a');

// Recorre los enlaces y agrega un controlador de eventos para resaltar el enlace activo
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Elimina la clase 'active' de todos los enlaces
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    // Agrega la clase 'active' al enlace clicado
    link.classList.add('active');
  });
});
