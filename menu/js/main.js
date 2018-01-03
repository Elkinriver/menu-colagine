//Menu Panel
function menu_panel(){
document.getElementById("menu-ico").onclick = function(){
document.getElementById("menu-ico").classList.toggle("menu-cerrar");
document.getElementById("menu").classList.toggle("menu-off");
}
}
menu_panel();