
function redirect(btn, page){

    var pageContainer = document.getElementById(page);

    if(pageContainer.classList.contains('hidden')){

        const sections = document.querySelectorAll('section');
        
        /* Hide all sections */
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        /* Remove clicked */
        const buttons = btn.parentNode.querySelectorAll('li');
        buttons.forEach(button => {
        button.classList.remove('clicked');
        });

        /* Select chosen */
        pageContainer.classList.remove('hidden');
        btn.classList.add('clicked');

        /* If small screen, hide side menu */
        const sideMenu = document.getElementById("sidemenu")
        if (sideMenu.classList.contains('aside-open')){
            sideMenu.classList.remove('aside-open');
        }
    }
}