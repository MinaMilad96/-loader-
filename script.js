function loader(){
    document.querySelector(".loader").classList.add("fade");
}
function fadeOut(){
    setInterval(loader,2000);
}
window.onload = fadeOut;