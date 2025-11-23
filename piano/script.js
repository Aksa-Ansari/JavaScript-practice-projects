let keys=document.querySelectorAll(".key");
keys.forEach(key=>{
    key.addEventListener("click", ()=>{
        let soundName=key.getAttribute("data-sound");
        let audio=new Audio(`sounds/${soundName}.mp3`)
        audio.play();
    })
})