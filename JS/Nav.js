const MenuItems = [
    { title: 'Home', link: '../index.html' },
    { title: 'Blog', link: '../Blogs/blog.html' },
    { title: 'Gallery', link: '../Gallery/gallery.html' },
    { title: 'About', link: '../About/about.html' },
    { title: 'Tutorials and Templates', link: '../TutsAndTemps/tutsandtemps.html' },
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
    nav.appendChild(ul);
}

const Backbutton = document.getElementById("back")
Backbutton.addEventListener("click", function () {
    window.history.back();
})

//Attempted to use DOMContentLoaded however it did not work, I realise that 
//using load will only perform this operation once everything is loaded, but it was only way I could get it to work
window.addEventListener("load", () => {
    initMenu();
})

