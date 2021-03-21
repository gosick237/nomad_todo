const body = document.querySelector("body");
const IMG_NUM = 5


function paintImage(imgNumber){
    const image = new Image();
    image.src = `imgs/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")
    body.prepend(image);
}
function genRnNum(){
    return Math.floor(Math.random()*IMG_NUM);
}
function init(){
    const randomNumber = genRnNum();
    paintImage(randomNumber);
}

init();