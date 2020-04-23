const button = document.querySelector('button')

button.addEventListener("click",function(){
    let el = document.createElement("p");
    el.innerHTML = "This is a test"
    document.body.appendChild(el);
})
