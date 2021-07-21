let first_taimer=0
function load_time(new_state=true){
    let info=null;
    console.log("таймер")
    axios.get('http://localhost:63342/Saite/src/taimer.html?_ijt=stujetsta4pplrjv3k1dfq50ca')
        .then((response)=> {
            // handle success
            info= response.data
            let new_main= document.createElement("div")
            new_main.innerHTML=info
            document.querySelector(".main-content").remove()
            document.body.appendChild(new_main.querySelector(".main-content"))
            let link=document.querySelector("#index")
            link.setAttribute("href","css/timer-style.css")
            get_new_active_time_class()
            if (new_state)
                window.history.pushState({page: "taimer"},"taimer", "?page=taimer"+first_taimer)
            first_taimer++
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
function get_new_active_time_class(){
    document.querySelector(".low-title-right-items-container-map-container").classList.remove("active")
    document.querySelector(".low-title-right-items-container-activity-container").classList.remove("active")
    document.querySelector(".low-title-right-items-container-time-container").classList.add("active")
}