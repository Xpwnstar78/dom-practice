let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  let title = document.getElementById("main-title");
  title.innerHTML = "My name is DOM!";
  // Part 2
  document.body.style.backgroundColor = "lightgreen";
  // Part 3
  let menu = document.getElementById('favorite-things');
menu.removeChild(menu.lastElementChild);
  // Part 4
  let elements = document.getElementsByClassName('special-title');

for (let i = 0; i < elements.length; i++) {
  let element = elements[i];
  element.style.fontSize = "2rem";
}
  // Part 5
  let list = document.getElementById("past-races");
   list.removeChild(list.childNodes[7]);
  // Part 6
  let node = document.createElement("LI");                 
  let textnode = document.createTextNode("Brooklyn");         
  node.appendChild(textnode);                              
  document.getElementById("past-races").appendChild(node);     
  // Part 7
  let div = document.createElement('div');
  div.id = 'dom-adventures';
div.className = 'special-title';  
div.className = 'blog-post purple';
div.innerHTML = '<h1>Brooklyn</h1>';
let text = document.createTextNode('I ran over everyone!');
  div.appendChild(text);
  div.style.textAlign = "center";
  div.style.background = "purple";
document.body.appendChild(div);
}
