'use strict';
function buttonFor(name, request, element,targetID){
  const target = document.getElementById(targetID);
  element.addEventListener('click', async () => {
    const json = await fetch(`./create/${request}/`);
    const data = await json.json();
    const link = document.createElement('a')
    link.href = `./room/${data.token}/`
    link.innerHTML = `<p>${name} => Go to game</p>`;
    link.classList.add('btn');
    target.appendChild(link);
    console.log('AAAA');
  });
  }
(() => {
  const links = document.getElementById('links');  
  const img = document.getElementById('img');
  buttonFor('TicTac','tictac', img,'img');
})();
