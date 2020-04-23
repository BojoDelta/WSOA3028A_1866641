const nextbutton = document.getElementById("next")

const prevbutton = document.getElementById("prev")

nextbutton.addEventListener("click",function(){
    let el = document.getElementById("Slideshow");
    el.src="../Images/CharImage1.jpg";

})

prevbutton.addEventListener("click",function(){
    let el = document.getElementById("Slideshow")
    el.src="../Images/CharImage2.jpg";
})