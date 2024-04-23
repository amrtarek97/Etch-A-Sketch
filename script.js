let container = document.querySelector('.sketch-container');
// let boxDiv;

function changeBackgroundColor(){
    this.style.backgroundColor= "black";
}
function createSquares(){
    
    for (let i = 0; i < 256; i++) {
        let boxDiv = document.createElement('div');
        boxDiv.classList.add("box");
        container.appendChild(boxDiv);

        boxDiv.addEventListener('mouseover', changeBackgroundColor());
    }
    
}

createSquares();

let btn = document.querySelector('.create');

btn.addEventListener('click', ()=> {
    createSquares();
})

// container.addEventListener('mouseover', ()=>{
    
//     console.log("a7a");
// })
