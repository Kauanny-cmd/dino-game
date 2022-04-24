const dino = document.querySelector('.dino')

function handleKeyUp(event){
    if(event.keyCode === 32){
        jump();
    }
}

function jump(){
    let position = 0

    let upInterval = setInterval(() =>{

        //sobe
        position += 20
        dino.style.bottom = position + 'px'
    },20)
}

document.addEventListener('keyup', handleKeyUp)