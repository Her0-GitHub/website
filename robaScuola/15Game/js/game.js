const board = document.getElementsByClassName("box");
let first

for (let i = 0, j = 1; i < board.length; i++) {
    if(i != board.length-1) board[i].innerHTML = i+1;
    board[i].addEventListener("click", move);
    board[i].setAttribute("x", (i%4)+1);
    board[i].setAttribute("y", j);
    if(!((i+1)%4))  j++;
}

function setup(){
    shuffle();
    hideDialog();
    clearCronometro();
    playBtn.addEventListener('click', setup);
    first = true;
}

function move(){
    const empty = document.getElementsByClassName('box empty')[0];
    const x = parseInt(this.getAttribute("x")), y = parseInt(this.getAttribute("y"));
    const emptyx = parseInt(empty.getAttribute("x")), emptyy = parseInt(empty.getAttribute("y"));
    if(   
        this.innerHTML != '' && 
        (x-emptyx == 0 && Math.abs(y-emptyy) == 1) || 
        (y-emptyy == 0 && Math.abs(x-emptyx) == 1)
    ){
        // add class for css
        this.className = 'box empty';
        empty.className = 'box'
        // swap number
        const temp = this.innerHTML;
        this.innerHTML = empty.innerHTML;
        empty.innerHTML = temp;
        // check win only when empty is in box-16
        if(this.id == "box-16"){
            checkWin();
        }
        if(first){startCronometro(); first = false;}
    }   
}

function checkWin(){
    for (let i = 1; i < board.length; i++) {
        if(document.getElementById("box-" + i).innerHTML != i.toString()){
            return;
        }
    }
    stopCronometro();
    showDialog(`15 Game`, "Tempo Totale: " + (document.getElementById("cronometro").innerText).replaceAll("\n", ""), "Reset");
}

function shuffle() {
    for(let i = 0; i < board.length*board.length; i++){
        let empty = document.getElementsByClassName('box empty')[0];
        let x = parseInt(empty.getAttribute('x'));
        let y = parseInt(empty.getAttribute('y'));
        let coord = [];
        if(x!=4)    coord.push([x+1, y]);
        if(y!=4)    coord.push([x, y+1]);
        if(x!=1)    coord.push([x-1, y]);
        if(y!=1)    coord.push([x, y-1]);
        let random = Math.floor(Math.random() * coord.length);
        let swap = getElementByXY(coord[random][0], coord[random][1]);
        // swap number
        let temp = swap.innerHTML;
        swap.innerHTML = empty.innerHTML;
        empty.innerHTML = temp;
        // add class for css
        swap.className = 'box empty';
        empty.className = 'box';
    }
}
function getElementByXY(x, y){
    return document.getElementById("box-" + ((y - 1) * 4 + x));
}
setup();