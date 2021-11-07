import {btnClick, btnUnClick} from "./event.js";

window.onload = function(){
    const bar = document.querySelector('button');
    
    bar.onclick = function(){
        let fun;
        if(bar.title === 'a'){
            bar.title = 'b';
            fun = btnClick;
        }
        else{
            bar.title = 'a';
            fun = btnUnClick;
        }
        console.log(fun);
        return fun;
    }
    console.log(bar.onclick);
}

