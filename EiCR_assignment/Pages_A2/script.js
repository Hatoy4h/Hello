    function setLanguage(lang) {
    // hide all languages
    document.querySelectorAll('.lang').forEach(el => {
        el.style.display = 'none';
    });

    // show selected language
    document.querySelectorAll('.' + lang).forEach(el => {
        el.style.display = 'block';
    });

    document.body.dir = lang === 'ar' : 'rtl :'ltr';
    
    const openmenu = document.querySelector('#show-menu')
    const hidemenuicon = document.querySelector('#hide-menu')
    const sideMenu = document.querySelector('#nav-menu')

    openmenu.addEventListener('click', function() {
        sideMenu.classList.add('active')
    })

    hidemenuicon.addEventListener('click', function() {
        sideMenu.classList.remove('active')
    })