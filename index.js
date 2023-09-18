let offset = 0;
const sliderItems = document.querySelector('.slider__items');
const buttonNext = document.querySelector('.button_next')
const buttonPrev = document.querySelector('.button_prev')

function changeElemOpacity(elem, value){
    elem.style.opacity = value
}


buttonNext.addEventListener('click', ()=>{
    changeElemOpacity(buttonPrev, 1);
    changeElemOpacity(buttonNext, 1);

    if(offset < 1029){
        
        offset += 343;
        sliderItems.style.left = -offset + 'px';
        if(offset > 686) {
            changeElemOpacity(buttonNext, 0.6)
            // buttonPrev.style.opacity = 1;
        }
    }
    else{
        changeElemOpacity(buttonNext, 0.6);
    }

})

buttonPrev.addEventListener('click', ()=>{
    changeElemOpacity(buttonPrev, 1);
    changeElemOpacity(buttonNext, 1);

    if(offset > 0){
        // changeElemOpacity(buttonNext, 1);
        offset -= 343;
        sliderItems.style.left = -offset + 'px';

        if(offset < 343){
            changeElemOpacity(buttonPrev, 0.6);
        }
    }
    else{
        buttonPrev.style.opacity = 0.6;

    }
    
})