function addLink(){
  const item = document.getElementById('#buy_item');

      item.forEach(function(button){
    item.addEventListener('click', function(e){
        console.log('1 click');
    })
  })
    
}