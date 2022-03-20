
let anse = document.getElementById('ans');
let strings="";
divx.onmouseover=function(event){
    let tar=event.target;
    tar.style.cursor ="pointer";
}
divx.onclick=function(event){
    let x=event.target;
    let value2=x.innerHTML
    let value=value2.trim();
    if (!(value == '=') || !(value =='clear')){
    strings+=value;
    console.log(strings)
    anse.innerHTML=strings;
       }
}
    function calculate(){
        // console.log(eval(strings))
        let answer=eval(strings)
        anse.innerHTML=answer;
    }
let ele = document.getElementById('clear');
ele.onclick=()=>{
    console.log('clear');
    anse.innerHTML = "";
    strings = "";
}
let div6=document.getElementById('div6');
div6.onmouseover = function (event) {
    let tar2 = event.target;
    tar2.style.cursor = "pointer";
}
