
/* eslint-env es6 */
/* eslint-disable no-console */
const buttons = document.querySelectorAll('btn_filter')
const cards = document.querySelector('#cards')

var beers=[{name:'RickBeer dark', price: 20, img: '1.jpeg'},
           {name:'Жигулевское светлое', price: 19, img: '2.png'},
           {name:'Хмельные Раки светлое', price: 8, img: '3.png'},
           {name:'ČZ svetle (Česky Znak - Чешский знак) светлое', price: 17, img: '4.png'},
           {name:'ČZ cerne (Česky Znak - Чешский знак) темное', price: 17, img: '5.png'},
           {name:'Белый Кремль Светлое Пшеничное', price: 7, img: '6.png'},
           {name:'Carlsberg Green', price: 13, img: '7.jpg'},
           {name:'Saint-Omer', price: 14, img: '8.jpg'},
           {name:'Grolsch', price: 15, img: '9.jpg'},
           {name:'Сидр Chesters со вкусом яблока (полусухой)', price: 30, img: '10.jpg'},
];

console.log(beers[0]);
var i;
for(i=0; i<beers.length; i++){
    createCard(i);
}

//buttonNext.addEventListener('click', next)
//function next(){
//    if(counter<images.length){
// document.getElementById('slide').setAttribute('src',images[counter])
//    counter++
//    }
//    else{
//        counter=0;
//        next()
//    }
//}


function createCard(x){
    const imgDiv=document.createElement('div');
    imgDiv.setAttribute('class', 'img_container');
    
    const image=document.createElement('img');
    image.setAttribute('class','item_avatar');
    console.log('assets/img/items/'+beers[x].img);
    image.setAttribute('src','assets/img/items/'+beers[x].img);
    
    imgDiv.appendChild(image);
    
    const nameDiv=document.createElement('h4');
    nameDiv.setAttribute('class', 'itemName');
    nameDiv.innerHTML=beers[x].name;
    const pDiv=document.createElement('p');
    pDiv.setAttribute('class', 'itemprice');
    var price='$ '+beers[x].price;
    pDiv.innerHTML=price;

    const textDiv=document.createElement('div');
    textDiv.setAttribute('class', 'text');
    textDiv.appendChild(nameDiv);
    textDiv.appendChild(pDiv);

    const pItemDiv=document.createElement('div');
    pItemDiv.setAttribute('class', 'personal_item');    
    pItemDiv.appendChild(imgDiv);
    pItemDiv.appendChild(textDiv);
    
    cards.appendChild(pItemDiv);
}


