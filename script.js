// let container = document.querySelector('.sketch-container');
// // let boxDiv;

// function changeBackgroundColor(){
//     this.style.backgroundColor= "black"
// }
// function createSquares(){
    
//     for (let i = 0; i < 256; i++) {
//         let boxDiv = document.createElement('div');
//         boxDiv.classList.add("box");
//         container.appendChild(boxDiv);

//         // boxDiv.addEventListener('mouseover', changeBackgroundColor())
//     }
    
// }

// let btn = document.querySelector('.create');

// btn.addEventListener('click', ()=> {
//     createSquares();
// })

// container.addEventListener('mouseover', ()=>{
    
//     console.log("a7a");
// })


// sth else:

const GRIDSIDE = 600;
let rows = 16;
let cols = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

