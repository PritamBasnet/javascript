let container = document.querySelector('.container');
let paragraph = document.createElement('p');
let h3 = document.createElement('h3');
let div = document.createElement('div');
let ul = document.querySelector('ul');
let fruitList = '<li>Apple</li><li>Mango</li><li>Orange</li>';
ul.innerHTML = fruitList;
div.innerHTML = '<h1>I am a div.</h1><p>Me too</p>';
div.setAttribute('style','background-color:pink;border:1px solid black;')
h3.innerText = "Hey, I'm Blue.";
h3.setAttribute('style','color:blue;');
paragraph.innerText="Hey, I'm red.";
paragraph.setAttribute('style','color:red');
container.appendChild(h3);
container.appendChild(paragraph);
container.appendChild(div);