const nextbutton = document.getElementById("next")

const prevbutton = document.getElementById("prev")

let i = 1;

nextbutton.addEventListener("click",function(){
    i = i + 1;
    if (i===10) {
        i = 1;  
    }
    console.log(i);
    let x = "../Images/CharImage";
    //x.concat(i,".jpg");
    let el = document.getElementById("Slideshow");
    el.src=x.concat(i,".jpg");

})

prevbutton.addEventListener("click",function(){
    i = i - 1;
    if (i===0) {
        i = 9;  
    }
    console.log(i);
    let x = "../Images/CharImage";
    //x.concat(i,".jpg");
    let el = document.getElementById("Slideshow");
    el.src=x.concat(i,".jpg");
})