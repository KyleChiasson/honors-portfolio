function init(){
    let navbar = document.getElementById('navbar');
    if(navbar != undefined)
        navbar.innerHTML = /*html*/`
            <ul>
                <li><a href='index.html'>Home</a></li>
                <li><a href='experiences.html'>Experiences</a></li>
                <li><a href='pathway-reflection.html'>Pathway Reflection</a></li>
                <li><a href='ohp-reflection.html'>OHP Reflection</a></li>
            </ul>
        `
}
