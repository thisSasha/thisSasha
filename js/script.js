document.body.style.overflowY = 'hidden';

window.addEventListener('wheel', () => {
    const headerContainer = document.querySelector('.header__container');
    const headerWidth = headerContainer.offsetWidth;
    if (headerWidth >= window.innerWidth) {   
        document.body.style.overflowY = 'auto';
        return
    }
    requestAnimationFrame(() => {
        headerContainer.style.width = `${headerWidth + 20}px`;
    });
}, { passive: true });