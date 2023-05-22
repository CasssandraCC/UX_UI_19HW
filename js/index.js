console.log("Hello world!") ;

const cards = document.querySelectorAll('.cardUX');
cards.forEach(cardUX => {
    cardUX.addEventListener('mouseenter', () => {
        cardUX.classList.add('hover');
    });
    cardUX.addEventListener('mouseleave', () => {
        cardUX.classList.remove('hover');
    });
});