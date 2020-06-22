//Choose a random color
/* eslint-env es6 */
/* eslint-disable no-console */
const button = document.querySelector('#button')

const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];

button.addEventListener('click', function(){
    var quoteIndex=parseInt(Math.random()*quotes.length)
    document.getElementById('generate').innerHTML = quotes[quoteIndex].quote;
    document.getElementById('authorName').innerHTML = quotes[quoteIndex].author;
})


function clearContent(){
    var div = document.getElementById('generate');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}
