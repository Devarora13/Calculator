let prvText = "";
document.querySelector(".one").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"1";
    prvText+="1";
}
document.querySelector(".two").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"2";
    prvText+="2";
}
document.querySelector(".three").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"3";
    prvText+="3";
}
document.querySelector(".four").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"4";
    prvText+="4";
}
document.querySelector(".five").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"5";
    prvText+="5";
}
document.querySelector(".six").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"6";
    prvText+="6";
}
document.querySelector(".seven").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"7";
    prvText+="7";
}
document.querySelector(".eight").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"8";
    prvText+="8";
}
document.querySelector(".nine").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"9";
    prvText+="9";
}
document.querySelector(".X").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"X";
    prvText+="*";
}
document.querySelector(".divide").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"/";
    prvText+="/";
}
document.querySelector(".plus").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"+";
    prvText+="+";
}
document.querySelector(".minus").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"-";
    prvText+="-";
}
document.querySelector(".clear").onclick = ()=>{
    document.querySelector(".screen").innerHTML = "";
    prvText="";
}
document.querySelector(".zero").onclick = ()=>{
    document.querySelector(".screen").innerHTML = prvText+"0";
    prvText+="0";
}
document.querySelector(".equal").onclick = ()=>{
    let exp = eval(prvText);
    document.querySelector(".screen").innerHTML = exp;
}
