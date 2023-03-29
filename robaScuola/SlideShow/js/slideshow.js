const NumFile = 3;
let activeImg = 3; // 1..NumFIle

const dot = document.getElementById('dot');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('left-button');
const img = document.getElementsByTagName('img')[0];

leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);

for(let i = 0; i<NumFile; i++){
    const newDot = document.createElement("div");
    newDot.setAttribute("n", i+1);
    if(i == activeImg-1){
        newDot.setAttribute("class", "dot active");
        img.src = "img/Img" + activeImg + ".png";
        img.setAttribute('n', activeImg);
    }
    else            newDot.setAttribute("class", "dot");
    dot.appendChild(newDot);
    newDot.addEventListener("click", goto);
}
function goto(){
    const n = this.getAttribute('n');
    img.src = "img/Img" + n + ".png";
    img.setAttribute("n", n);
    this.className = "dot active";
    document.getElementsByClassName('dot')[activeImg-1].className = "dot";
    activeImg = n;
}
function left(){
    let n = parseInt(img.getAttribute('n'))-1;
    if(n == 0){
        n = 3;
    }
    img.setAttribute("n", n);
    console.log(n);
    img.src = "img/Img" + n + ".png";
    document.getElementsByClassName('dot')[n-1].className = "dot active";
    document.getElementsByClassName('dot')[activeImg-1].className = "dot";
    activeImg = n;
}

function right(){
    let n = parseInt(img.getAttribute('n'))+1;
    if(n == 4){
        n = 1;
    }
    img.setAttribute("n", n);
    img.src = "img/Img" + n + ".png";
    console.log(n);
    document.getElementsByClassName('dot')[n-1].className = "dot active";
    document.getElementsByClassName('dot')[activeImg-1].className = "dot";
    activeImg = n;
}