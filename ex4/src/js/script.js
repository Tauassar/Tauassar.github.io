//Choose a random color
/* eslint-env es6 */
/* eslint-disable no-console */
import '../css/style.css'
import * as $ from 'jquery'

import img_1 from '@assets/img/1.jpg'
import img_2 from '@assets/img/2.jpg'
import img_3 from '@assets/img/3.jpg'
import img_4 from '@assets/img/4.jpg'
import img_5 from '@assets/img/5.jpg'
import img_6 from '@assets/img/6.jpg'

const buttonPrev = document.querySelector('#buttonPrev')
const buttonNext = document.querySelector('#buttonNext')
const input = document.querySelector('#slide')

var images = [img_1, img_2, img_3, img_4, img_5, img_6]
var counter = 0

buttonNext.addEventListener('click', next)
function next(){
  console.log('next clicked')
    if(counter<images.length){
      $('#slide').attr('src',images[counter])
    counter++
    }
    else{
        counter=0;
        next()
    }
}

buttonPrev.addEventListener('click', prev)
function prev(){
    console.log('prev clicked')
    if(counter>0){
    counter--
 document.getElementById('slide').setAttribute('src',images[counter])
    }
    else{
        counter=images.length;
        prev()
    }
}
