function init(){
    let navbar = document.getElementById('navbar');
    if(navbar != undefined)
        navbar.innerHTML = /*html*/`
            <ul>
                <li class='name' style='padding-right: 5%'><h3>Kyle Chiasson</h3></li>
                <li class='home'               ><a href='/honors-portfolio/'>Home</a></li>
                <li class='experiences'        ><a href='/honors-portfolio/experiences'>Experiences</a></li>
                <li class='pathway-reflection' ><a href='/honors-portfolio/pathway-reflection'>Pathway Reflection</a></li>
                <li class='ohp-reflection'     ><a href='/honors-portfolio/ohp-reflection'>OHP Reflection</a></li>
            </ul>
        `
    if(footer != undefined)
        footer.innerHTML =  /*html*/`
            <p>Images on this website belong to their respective organizations.</p>
            <p>All written work on this website was made and owned by Kyle Chiasson.</p>
        `
}
