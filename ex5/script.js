
/* eslint-env es6 */
/* eslint-disable no-console */
const cards = document.querySelector('#cards')

var beers=[{name:'RickBeer dark', price: 20, img: '1.jpeg', dark:true, fagot:false, bottle:true},
           {name:'Жигулевское светлое', price: 19, img: '2.png', dark:false, fagot:false, bottle:true},
           {name:'Хмельные Раки светлое', price: 8, img: '3.png', dark:false, fagot:false, bottle:true},
           {name:'ČZ svetle (Česky Znak - Чешский знак) светлое', price: 17, img: '4.png', dark:false, fagot:false, bottle:true},
           {name:'ČZ cerne (Česky Znak - Чешский знак) темное', price: 17, img: '5.png', dark:true, fagot:false, bottle:true},
           {name:'Белый Кремль Светлое Пшеничное', price: 7, img: '6.png', dark:false, fagot:false, bottle:true},
           {name:'Carlsberg Green', price: 13, img: '7.jpg', dark:true, fagot:false, bottle:false},
           {name:'Saint-Omer', price: 14, img: '8.jpg', dark:false, fagot:false, bottle:true},
           {name:'Grolsch', price: 15, img: '9.jpg', dark:false, fagot:false, bottle:false},
           {name:'Сидр Chesters со вкусом яблока (полусухой)', price: 30, img: '10.jpg', dark:false, fagot:true, bottle:true},
];

//Initial grid
    var i;
    for(i=0; i<beers.length; i++){
        createCard(i);
    }
    addLink();

function createCard(x){
   if((x<beers.length)&&(x>=0)) {
        const imgDiv=document.createElement('div');
        imgDiv.setAttribute('class', 'img_container');

        const image=document.createElement('img');
        image.setAttribute('class','item_avatar');
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
        textDiv.setAttribute('id', 'text');
        textDiv.appendChild(nameDiv);
        textDiv.appendChild(pDiv);

        const pItemDiv=document.createElement('div');
        pItemDiv.setAttribute('class', 'personal_item');    
        pItemDiv.appendChild(imgDiv);
        pItemDiv.appendChild(textDiv);
       
       
        const aLink=document.createElement('a');
        aLink.setAttribute('id', 'buy_item');
        aLink.appendChild(pItemDiv);

        cards.appendChild(aLink);
    }
}

