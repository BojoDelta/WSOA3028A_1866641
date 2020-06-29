const MenuItems = [
    { title: 'Home', link: '../index.html' },
    { title: 'Blog', link: '../Blogs/blog.html' },
    { title: 'Gallery', link: '../Gallery/gallery.html' },
    { title: 'About', link: '../About/about.html' },
    { title: 'Tutorials & Templates', link: '../TutsAndTemps/tutsandtemps.html' },
    { title: 'Contact', link: '../Contact/contact.html' }
]

const initMenu = () => {
    const nav = document.querySelector('nav');

    const ul = document.createElement('ul');

    for (let item of MenuItems) {
        const li = document.createElement('li');
        const i = document.createElement('a');
        i.innerText = item.title;
        i.href = item.link;
        li.appendChild(i);
        ul.appendChild(li);
    }
    ul.classList.add("menu")
    nav.appendChild(ul);
}

const initBlogBack = () =>{
    //console.log("test");
    const foot = document.getElementsByClassName("BlogDate");
    //console.log(foot[0]);
    const bb = document.createElement("button");
    bb.innerText = "Back";
    bb.className = "BackButton";
    bb.id = "backBlog";
    bb.addEventListener("click",function() {
        window.history.back();
    })
    foot[0].appendChild(bb);
}

const Backbutton = document.getElementById("back")
Backbutton.addEventListener("click", function () {
    window.history.back();
})

/*const BackBlogbutton = document.getElementById("backBlog")
if (typeof(BackBlogbutton) != undefined && BackBlogbutton !== null)
{
    BackBlogbutton.addEventListener("click", function () {
    window.history.back();
})
}*/



//Attempted to use DOMContentLoaded however it did not work, I realise that 
//using load will only perform this operation once everything is loaded, but it was only way I could get it to work
window.addEventListener("load", () => {
    initMenu();
    initBlogBack();
})

