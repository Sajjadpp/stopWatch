
var time=document.getElementById('time')
let timer=null

let [hour,minute,second]=[0,0,0]

function stopwatch(){
   
    second++;
    if(second===60){
        second=0
        minute++
    }
    if(minute===60){
        minute=0
        hour++
    }
    let h= hour< 10 ? '0'+hour:hour
    let m= minute< 10 ? '0'+minute:minute
    let s= second< 10 ? '0'+second:second
    time.innerHTML=h+' : '+m+' : '+s

}


function timestart(){
    if(timer!==null){
        clearInterval(timer)
    }
    timer=setInterval(stopwatch,1000)
    
}


function watchStop(){
    clearInterval(timer)
}
function watchReset(){
    clearInterval(timer)
    time.innerHTML='00 : 00 : 00'
}

