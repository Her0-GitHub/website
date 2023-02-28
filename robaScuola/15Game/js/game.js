const board = document.getElementsByClassName("box");

for (let i = 0; i < board.length; i++) {
    if(i != board.length-1) board[i].innerHTML = i+1;
    board[i].addEventListener("click", move);
}


function move(){
    empty = document.getElementById("box-16");
    if(this.innerHTML != ''){
        temp = this.innerHTML;
        this.innerHTML = empty.innerHTML;
        empty.innerHTML =  temp;

        temp = this.id;
        this.id = empty.id;
        empty.id =  temp;
    }
}