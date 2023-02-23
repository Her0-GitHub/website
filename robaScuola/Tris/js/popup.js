const dialog = document.getElementById('dialog');
const header = document.querySelector('.dialog-header');
const body = document.querySelector('.dialog-body');
const playBtn = document.getElementById('play-btn');

function showDialog(title, message, btn) {
  header.innerHTML = title;
  if(message == ``)  body.style.display = 'none';
  else{
    body.style.display = ''
    body.innerHTML = message;
  }
  playBtn.innerHTML = btn;
  dialog.style.display = 'flex';
}

function hideDialog() {
  dialog.style.display = 'none';
}

playBtn.addEventListener('click', clear);
showDialog(`Tris`, ``, "Gioca");