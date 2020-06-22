//Choose a random color
/* eslint-env es6 */
/* eslint-disable no-console */
const button = document.querySelector('#button')
const input = document.querySelector('#fname')
const error = document.querySelector('.error')

input.addEventListener('keydown', logKey);

function logKey(e) {
  if(e.keyCode==13){
      submit()
  }
}
button.addEventListener('click', submit)


function submit(){
    if(input.value==''){
        error.classList.add('show')
        setTimeout(function(){
        error.classList.remove('show')
        }, 2000)
    }else{
        document.getElementById('message').innerHTML = input.value
    }
}