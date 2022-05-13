let for_search = document.querySelector("#for_search")
let images=document.getElementsByClassName("images")
let container=document.getElementsByClassName("container")
let button=document.getElementById("buttonn")


//window.addEventListener("load", dayNight)

function search_img() {

}


/*
function dayNight() {
    let date = new Date();
    let hour = date.getHours();

    if (hour >= 7 && hour <= 19) {
        document.h2.style.color= "#e699ff"
        //document.body.style.backgroundColor = ""
        
    }
    else {
        document.body.style.color = "pink"
        document.body.style.backgroundColor = "#e699ff"
    }


}
*/


button.addEventListener("click", ()=>{
    let element=document.body
    element.classList.toggle("dark-mode");
})
   



