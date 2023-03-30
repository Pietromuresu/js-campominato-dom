
const grid = document.getElementById('grid');
const gridContainer = document.querySelector('.container-grid ')
const generate = document.querySelector('.button-genera');
const levels = document.getElementById('levels');
let levelValue = levels.value;
const bombs = [];
const NUM_BOMBS =3;
let points = 0;
const endGame = document.querySelector('.endGame');
const arrSquare = [];
console.log(arrSquare);
 
generate.addEventListener('click', function(){
  generate.classList.add('hide');
  gridContainer.classList.remove('hide');
  levels.classList.add('hide');
  
  for (let i = 1; i <= levels.value; i++){
  const newDiv = document.createElement("div");
  grid.appendChild(newDiv);
  arrSquare.push("newDiv.idElem ");
  newDiv.classList.add('square');
  newDiv.idElem = i ;
  

  newDiv.addEventListener('click', function(){
  newDiv.classList.add('clicked');
  
  
  
    if (bombs.includes(newDiv.idElem)){
      console.log('hai perso');
      newDiv.classList.add('bomb');
      endGame.classList.add('showEnd');
      endGame.innerHTML = `<h1 class="lose"> HAI PERSO! HAI TOTALIZZATO ${points} PUNTI </h1>  `
    }else{
      points++;
    }
    if (points === (arrSquare.length - bombs.length)){
          console.log('hai vinto');
          endGame.classList.add('showEnd');
          endGame.innerHTML = `<h1 class="win" > HAI VINTO! HAI SCHIVATO TUTTE LE BOMBE!!! </h1>  `

        }
    })
    
    
  

  if (levels.value === '100'){
  newDiv.classList.add('levelOne');
  }else if (levels.value === '81'){
  newDiv.classList.add('levelTwo');
  }else {
  newDiv.classList.add('levelThree');
  }
  }
  
 generate.addEventListener('click', generateBombs(levels.value, NUM_BOMBS));
})
console.log(bombs) ;



// functions
function generateBombs(max, min){
  for(let i = 0; bombs.length < min; i++){
    
    const bomb = Math.floor(Math.random() * (max - min + 1) + min);
    if (!bombs.includes(bomb)){
       bombs.push(bomb);
    }else {
      
    }

    
   
  }
  
  
}

