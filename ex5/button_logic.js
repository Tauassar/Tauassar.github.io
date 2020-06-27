(function() {
  const buttons = document.querySelectorAll('.btn_filter');

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        clearDOM();
      if (button.classList.contains('dark')){
          console.log('dark choosen')
        var i;
        for(i=0; i<beers.length; i++){
            
            if(beers[i].dark){console.log('dark chosen');createCard(i);}
        }
      }
      if (button.classList.contains('bright')){
        var i;
        for(i=0; i<beers.length; i++){
            if(!beers[i].dark){console.log('bright chosen');createCard(i);}
        }
      }
      if (button.classList.contains('bottle')){
        var i;
        for(i=0; i<beers.length; i++){
            if(beers[i].bottle){console.log('bottle chosen');createCard(i);}
        }
      }
      if (button.classList.contains('jar')){
        var i;
        for(i=0; i<beers.length; i++){
            if(!beers[i].bottle){console.log('jar chosen');createCard(i);}
        }
      }
      if (button.classList.contains('fagot')){
        var i;
        for(i=0; i<beers.length; i++){
            if(beers[i].fagot){console.log('fagot chosen');createCard(i);}
        }
      }
        addLink();
    })
  })
})();


function clearDOM(){
    const cards = document.getElementById('cards');

  while (cards.firstChild) {
    cards.removeChild(cards.lastChild);
  }
    console.log('clear complete')
}