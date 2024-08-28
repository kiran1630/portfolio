const showmenu = (toggleid,navid) =>{
    const toggle = document.getElementById(toggleid),
    nav =  document.getElementById(navid)
    if (toggle && nav){
        toggle.addEventListener('click',() => {
            nav.classList.toggle('show')
        }

        );
    }
}

showmenu('nav_toggle','nav_menu')

// active and remove active
const navlink = document.querySelectorAll('.nav_link')
navlink.forEach(n=>  n.classList.remove('active'))

function linkaction(){
    navlink.forEach(n => classList.remove('active'))
    this.classList.add('active')

    const  navmenu = document.getElementById('nav_menu')
    navmenu.classList.remove('show')

}
navlink.forEach(n => n.addEventListener('click',linkaction))