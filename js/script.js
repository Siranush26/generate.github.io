let for_search = document.querySelector("#for_search")
//let images=document.getElementsByClassName("images")
//let container=document.getElementsByClassName("container")
let button2=document.getElementById("buttonn")
let for_h2=document.querySelector(".for_h2")
let button=document.getElementById("button")
let pics=document.getElementsByClassName("pics")[0]

for_search.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        search()
    }
})

function search(){
  removeImg()
    const url='https://api.unsplash.com/search/photos?query='+for_search.value+'&per_page=9&client_id=Wi9ASz8dTga7gGsfrhnGUnXFi5G5zOCRwp0-YeXOEZs';
    
    fetch(url)
    
    .then(response=>{
        if(response.ok)
        return response.json();
        else{
            alert(response.status)
        }
    })

    .then(data=>{
       const images=[];
        for(let i=0; i<data.results.length; i++){
            images[i]=document.createElement('div');
            images[i].className="img";
            images[i].style.backgroundImage='url('+data.results[i].urls.raw+')';
            images[i].addEventListener('dblclick',function(){
             window.open(data.results[i].links.download,'_blank')})
            pics.appendChild(images[i])
        }
    })
}


function removeImg(){
    pics.innerHTML="";
}

/*
window.addEventListener("load", dayNight)

function dayNight() {
    let date = new Date();
    let hour = date.getHours();

    if (hour >= 7 && hour <= 19) {
        for_h2.style.color= "pink"
        //document.body.style.background = "#e699ff";
        document.body.style.backgroundImage="url('img/1.gif')";
        document.body.style.backgroundRepeat = "repeat-y";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundAttachment="fixed";
        
    }
    else {
        for_h2.color = "#e699ff"
       // document.body.style.background = "#pink"
       document.body.style.backgroundImage="url('img/2.gif')";
       document.body.style.backgroundRepeat = "repeat-y";
       document.body.style.backgroundSize = "100%";
       document.body.style.backgroundAttachment="fixed";
    }


}

*/

button2.addEventListener("click", ()=>{
    let element=document.body
    element.classList.toggle("dark-mode");
})
   






