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
let squaresPerSide = 16;


const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} X ${slider.value} (Resolution)`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;


function seteBackgroundColor(){
    this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide) {
    const numOfSquares = (squaresPerSide * squaresPerSide)
    const widthOrHeight = `${(GRIDSIDE/squaresPerSide)-2}px`
    for(let i =0; i< (numOfSquares);i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");
        
        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", seteBackgroundColor);
    }
}


function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

createGridCells(16);