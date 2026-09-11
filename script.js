// =========================================================
// script.js — Comportamentos globais do site
// - Menu mobile (hamburger)
// - Scroll to top
// - Animação de reveal ao rolar
// - Destacar link ativo baseado na URL
// - Fechar menu mobile ao clicar em link ou fora
// =========================================================

(function () {
    'use strict';


    // =========================================
    // MENU MOBILE
    // =========================================

    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');

    if (menuToggle && siteNav) {

        const openMenu = () => {
            menuToggle.setAttribute('aria-expanded', 'true');
            siteNav.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            siteNav.classList.remove('is-open');
            document.body.style.overflow = '';
        };

        const toggleMenu = () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            isOpen ? closeMenu() : openMenu();
        };

        menuToggle.addEventListener('click', toggleMenu);

        // Fecha ao clicar em um link
        siteNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Fecha com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' &&
                menuToggle.getAttribute('aria-expanded') === 'true') {
                closeMenu();
                menuToggle.focus();
            }
        });

        // Fecha se a tela for redimensionada pra desktop
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 768 &&
                    menuToggle.getAttribute('aria-expanded') === 'true') {
                    closeMenu();
                }
            }, 150);
        });

    }


    // =========================================
    // SCROLL TO TOP
    // =========================================

    const scrollTopBtn = document.querySelector('.scroll-top');

    if (scrollTopBtn) {

        const toggleScrollBtn = () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('is-visible');
            } else {
                scrollTopBtn.classList.remove('is-visible');
            }
        };

        window.addEventListener('scroll', toggleScrollBtn, { passive: true });
        toggleScrollBtn(); // estado inicial

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

    }


    // =========================================
    // REVEAL ON SCROLL
    // =========================================

    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0 &&
        'IntersectionObserver' in window) {

        // Respeita prefers-reduced-motion
        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReduced) {
            revealElements.forEach(el => el.classList.add('is-visible'));
        } else {

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            revealElements.forEach(el => observer.observe(el));

        }

    } else {
        // Fallback: mostra tudo
        revealElements.forEach(el => el.classList.add('is-visible'));
    }


    // =========================================
    // HEADER — sombra ao rolar
    // =========================================

    const header = document.querySelector('.site-header');

    if (header) {

        const updateHeader = () => {
            if (window.scrollY > 8) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
            } else {
                header.style.boxShadow = 'none';
            }
        };

        window.addEventListener('scroll', updateHeader, { passive: true });

    }


})();
