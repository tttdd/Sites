const first_width=1553
const two_width=1554
let flag=true
function get_change() {
    let main_content=null
    let first_child=null
    let width = window.innerWidth;
    if ((width < first_width) && flag){
        flag = false
        main_content = document.querySelector(".main-content");
        first_child = document.querySelector(".main-content-left-container")
        main_content.firstChild.remove()
        main_content.appendChild(first_child)
        console.log(flag)

    }
    else if((width>two_width) && !flag){
        main_content=document.querySelector(".main-content");
        first_child=document.querySelector(".main-content-right-container")
        main_content.firstChild.remove()
        main_content.appendChild(first_child)
        flag=true
        console.log(flag)
    }
}