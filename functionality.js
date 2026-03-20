function init(){
    let navbar = document.getElementById('navbar');
    if(navbar != undefined)
        navbar.innerHTML = /*html*/`
            <ul>
                <li><a href='/honors-portfolio/'>Home</a></li>
                <li><a href='/honors-portfolio/experiences'>Experiences</a></li>
                <li><a href='/honors-portfolio/pathway-reflection'>Pathway Reflection</a></li>
                <li><a href='/honors-portfolio/ohp-reflection'>OHP Reflection</a></li>
            </ul>
        `
}
