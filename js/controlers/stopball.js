import {obj} from '../main.js';

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if (obj.stateApp=="run"){
            obj.stateApp="stop";
            clearInterval(obj.myApp);
        }else{
            obj.stateApp="run";    
            obj.myApp=setInterval(obj.inicia(ball),50);
        }
    }
}