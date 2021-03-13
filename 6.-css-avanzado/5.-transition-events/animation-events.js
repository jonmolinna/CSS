/*
  https://developer.mozilla.org/en-US/docs/Web/API/Animation

  Existen 4 eventos principales en las animaciones
        animationstart: Se dispara cuando se inicia la animación
        animationiteration: Se dispara cada vez que se inicia de nuevo el ciclo de la animación
        animationcancel: Se dispara cuando se cancela la animación
        animationend: Se dispara cuando se termina la animación
*/

const heart = document.getElementById('heart');
let duration;

heart.addEventListener('animationstart', e => {
    //console.log(e)
    duration = getComputedStyle(e.target).animationDuration;
    //console.log(duration.substring(0, duration.length - 1))
});

let count = 0;

heart.addEventListener('animationiteration', e => {
    count++;
    console.log(count);

    const animationName = getComputedStyle(e.target).animationName;
    if(animationName == 'heart-beat' && count%2 == 0){
        e.target.style.setProperty('animation-name', 'heart-rotate');
    } else if(animationName == 'heart-rotate'){
        e.target.style.setProperty('animation-name', 'heart-beat');
    }
    
});

heart.addEventListener('animationiteration', e => {
    //console.log('CANCEL');
});

heart.addEventListener('animationiteration', e => {
    //console.log('END');
    e.target.classList.remove('heart--animate')
    setTimeout(() => {
        e.target.classList.add('heart--animate')
    }, 0);
});