const sim = document.querySelector(".sim");
const nao = document.querySelector(".nao");
const voltar = document.querySelector(".voltar");

var timesNo = 0;

const showSim = () => { document.querySelector("#modalSim").style.display = "flex"; document.querySelector("#container").style.display = "none"; document.querySelector(".audioSim").play(); document.querySelector(".audioS").pause();}

const showNao = () => {
    nao.style.left = Math.floor(Math.random() * 150) + "px";
    nao.style.right = Math.floor(Math.random() * 150) + "px";
    nao.style.top = Math.floor(Math.random() * 150) + "px";
    nao.style.bottom = Math.floor(Math.random() * 150) + "px";

    timesNo += 1;
}

const times = () => {
    if (timesNo == 10) {
        document.querySelector(".audioS").pause();
        document.querySelector("#modalNao").style.display = "flex"; 
        document.querySelector("#container").style.display = "none";
        
        setInterval(function () {document.querySelector(".audioNao").play();}, 4000);

    }
}



const showVoltar = () => { document.querySelector("#modalSim").style.display = "none"; document.querySelector("#container").style.display = "flex"; document.querySelector(".audioSim").pause(); document.querySelector(".audioS").play();}

nao.onmouseenter = () => { showNao(); times();}
nao.onclick = () => { showNao();  times();}

sim.onclick = () => { showSim() }

voltar.onclick = () => { showVoltar() }

