function init(){
    let navbar = document.getElementById('navbar');
    if(navbar != undefined)
        navbar.innerHTML = /*html*/`
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/experiences'>Experiences</a></li>
                <li><a href='/pathway-reflection'>Pathway Reflection</a></li>
                <li><a href='/ohp-reflection'>OHP Reflection</a></li>
            </ul>
        `
}
