function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}

function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var idFoto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(idFoto));
}