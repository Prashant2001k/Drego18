function ageindays(){
    var birthyear=prompt("What year You are Born...My Good friend");
    var agedayss=(2022-birthyear)*365;
    var haa=document.createElement('h1');
    var textans=document.createTextNode("You are "+ agedayss+" days old!");
    haa.setAttribute('id','apni');
    haa.appendChild(textans);
    console.log((2022-birthyear)*365); 
       
    document.getElementById('age').appendChild(haa);
    
}
function resett(){
    document.getElementById('apni').remove();
    // document.querySelector("p.age").remove();
    // document.querySelector("p.age").remove();
}

function catgenerator(){
    var fl=document.querySelector("div.cat-gene");
    
    var imge=document.createElement("img");
    imge.src="https://media0.giphy.com/media/3oz8xUK8V7suY7W9SE/200w.webp?cid=ecf05e47c8tryxjlwtf7d301f77tbjxba86xk1cygb94yvmt&rid=200w.webp&ct=g";
    imge.classList.add("btn");

    fl.appendChild(imge);
}

function rpsGo(yourchoice){
    console.log(yourchoice);
    
}