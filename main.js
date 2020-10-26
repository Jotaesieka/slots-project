const game = new Game(200);
const btn = document.querySelector('.zasady');
const getRules = ()=>{
    return alert(`Gracz wygrywa w dwóch przypadkach:
    1. Jeśli kolor każdego pola jest inny niż pozostałych.
    2. Jeśli wszystkie pola są jednakowego koloru.
    Wysokość wygranej wynosi trzykrotność stawki.
    Powodzenia!
    
    Pamiętaj! Graj odpowiedzialnie. W razie utraty kontroli nad swoim portfelem skontaktuj się z Urzędem Gminy Sońsk.`)
}
btn.addEventListener('click', getRules);