function init(){
    let navbar = document.getElementById('navbar');
    if(navbar != undefined)
        navbar.innerHTML = /*html*/`
            <ul>
                <li class='home'             ><a href='/honors-portfolio/'>Home</a></li>
                <li class='experiences'       ><a href='/honors-portfolio/experiences'>Experiences</a></li>
                <li class='pathway-reflection'><a href='/honors-portfolio/pathway-reflection'>Pathway Reflection</a></li>
                <li class='ohp-reflection'    ><a href='/honors-portfolio/ohp-reflection'>OHP Reflection</a></li>
            </ul>
        `
}
