//Choose a random color
/* eslint-env es6 */
/* eslint-disable no-console */
const button = document.querySelector('#button')
const body=document.querySelector('body')
var bgColor='#BEA7E5';

const hexVars=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',];
document.getElementById("hexCode").innerHTML = 'The hexcode is '+bgColor;
body.style.backgroundColor=bgColor
button.addEventListener('click', function(){
    clearContent();
    var colorIndex= parseHex()
    document.getElementById("hexCode").innerHTML = 'The hexcode is '+colorIndex;
    body.style.backgroundColor=colorIndex
    colorIndex=''
})

function parseHex(){
    var Color = '#'
    var i;
    for(i=0;i<6;i++){
       Color = Color + hexVars[parseInt(Math.random()*hexVars.length)]
    }
    return Color;
}

function clearContent(){
    var div = document.getElementById('hexCode');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}
