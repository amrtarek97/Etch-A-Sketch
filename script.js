let container = document.querySelector('.sketch-container');

function createSquares(){
    for (let i = 0; i < 16; i++) {
        let boxDiv = document.createElement('div');
        boxDiv.classList.add("box");
    }
}