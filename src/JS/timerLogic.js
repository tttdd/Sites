let session_start_time= Date.now()
function session_time(){
    let time=(Date.now()-session_start_time)/1000
    if(document.querySelector(".timer-time span")!=undefined)
        document.querySelector(".timer-time span").textContent=`${Math.trunc(time / 3600) } : ${Math.trunc((time/60)%60)} : ${Math.trunc(time%60)} `
}
setInterval(session_time,1000)