let first_location=0
async function load_location(new_state=true){
    let info=null;
    let response=await axios.get('https://tttdd.github.io/Sites/src/location.html').catch((e)=>{console.log(e)})
    let link=document.querySelector("#index")
    info= response.data
    link.setAttribute("href","src/css/map-style.css")
    let new_main= document.createElement("div")
    new_main.innerHTML=info
    document.querySelector(".main-content").remove()
    document.body.appendChild(new_main.querySelector(".main-content"))
    load_map_script()
    get_new_active_location_class()
    if (new_state)
        window.history.pushState({page: "location"},"location", "?page=location"+first_location)
    first_location++
}

function get_new_active_location_class(){
    document.querySelector(".low-title-right-items-container-map-container").classList.add("active")
    document.querySelector(".low-title-right-items-container-activity-container").classList.remove("active")
    document.querySelector(".low-title-right-items-container-time-container").classList.remove("active")
}

function load_map_script(){
    let script_google_map = document.createElement('script');
    script_google_map.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAVPu3PeEyhVDD0dp3D2i7ihyB4xi6dqAQ&callback=initMap';
    script_google_map.async = true;

// Attach your callback function to the `window` object
    window.initMap = function() {
       let map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    };

// Append the 'script' element to 'head'
    document.head.appendChild( script_google_map);
}