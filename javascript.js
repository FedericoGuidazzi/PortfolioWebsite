var dict = {
    en: {
        'Home': 'Home',
        'About': 'About',
        'Projects': 'Projects',
        'Contacts': 'Contacts',
        'Language' : 'Language',
        'Italian' : 'Italian',
        'English' : 'English',
        'Hi' : "Hi, I'm Federico Guidazzi",
        'Intro' : "I'm a software engineer, with passion for coding and almost all the tech world.",
        'Intro2' : "Currently I work as Software Engineer at GFT.",
        'AboutMe' : "About Me",
        'Description' : "nknn",
    },
    it: {
        'Home': 'Home',
        'About': 'Su di me',
        'Projects': 'Progetti',
        'Contacts': 'Contatti',
        'Language' : 'Lingua',
        'Italian' : 'Italiano',
        'English' : 'Inglese',
        'Hi' : "Ciao, Sono Federico Guidazzi",
        'Intro' : "Sono un ingegnere informatico, appassionato di programmazione e quasi tutto quello che fa parte del mondo tecnologico.",
        'Intro2' : "Attualmente lavoro come ingegnere informatico presso GFT.",
        'AboutMe' : "Su di me",
        'Description' : "nknn",
    },
    
}

function translate(dict, lang, word) {
    return dict[lang][word];
}

function translateAll(lang){
    var tmpl = $('.template');
    $.each(tmpl, (key, value)=> {
        var html = translate(dict, lang, $(value).attr('id'));
        value.innerText = html;
    });
}


$(document).ready(function(){
    let bool = true;

    translateAll('it');

    $(".dropdownIcon").click(()=>{
        if(bool){
            $(".dropdownIcon").attr("src", "./resources/x-lg.svg");
        } else {
            $(".dropdownIcon").attr("src", "./resources/list.svg");
        }
        bool = !bool;
    });

    $('.dropdown-menu>li').click(function(){
        var lang;
        if($(this).attr('id') == 'Italian'){
            lang = 'it';
        } else if($(this).attr('id') == 'English'){
            lang = 'en';
        }
        translateAll(lang);
    })

    const observer = new IntersectionObserver((entities)=>{
        entities.forEach((entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                var string = $(entry.target).attr("id").charAt(0).toUpperCase() + $(entry.target).attr("id").slice(1);
                $('#'+string).css('color', 'black');
            } else {
                entry.target.classList.remove('show');
                var string = $(entry.target).attr("id").charAt(0).toUpperCase() + $(entry.target).attr("id").slice(1);
                $('#'+string).css('color', 'var(--bs-nav-link-color)');
            }
        }));
    });

    const hiddenElements = document.querySelectorAll('.nascosto');
    hiddenElements.forEach((el)=>observer.observe(el));

    
    
});