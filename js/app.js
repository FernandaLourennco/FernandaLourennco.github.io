document.addEventListener('DOMContentLoaded', () => {
    // Configuração do Intersection Observer para disparar animações
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elementos com fade-up (subindo)
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(el => observer.observe(el));

    // Elemento da imagem com fade-right (vindo do lado)
    const fadeRightElements = document.querySelectorAll('.fade-right');
    fadeRightElements.forEach(el => observer.observe(el));

    const mobileMenuButton = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

});