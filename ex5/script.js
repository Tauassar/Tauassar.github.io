//Choose a random color
/* eslint-env es6 */
/* eslint-disable no-console */
const buttonPrev = document.querySelector('#buttonPrev')
const buttonNext = document.querySelector('#buttonNext')
const input = document.querySelector('#slide')

var counter = 0
images=['assets/img/1.jpg','assets/img/2.jpg','assets/img/3.jpg','assets/img/4.jpg','assets/img/5.jpg','assets/img/6.jpg',]

buttonNext.addEventListener('click', next)
function next(){
    if(counter<images.length){
 document.getElementById('slide').setAttribute('src',images[counter])
    counter++
    }
    else{
        counter=0;
        next()
    }
}

buttonPrev.addEventListener('click', prev)
function prev(){
    if(counter>0){
    counter--
 document.getElementById('slide').setAttribute('src',images[counter])
    }
    else{
        counter=images.length;
        prev()
    }
}


