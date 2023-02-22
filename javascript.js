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
        'Description1' : "The passion for technology, in particular for informatics, has been with me throughout my life, this can be testified by the university studies that I have chosen.",
        'Description2' : "I find beautiful how IT can be used in any area of ​​our lives, enriching it, facilitating it and giving it an irresistible charm, from my point of view.",
        'Description3' : "I am very interested by the technologies in development and how they are exponentially advancing all the areas in which they are used, hemlping me to stay updated on new technologies.",
        'Description4' : "In conclusion, I specify, that writing code and solving problems are activities that I find very rewarding and satisfying, especially if the difficulties that are solved can change everyone's life, even if only in a small part, thus taking a small step towards a better world.",
        'Description5' : "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.",
        'Skills':'Skills',
        'Projects':'Projects',
        'Contacts':'Contacts',
    },
    it: {
        'Home': 'Home',
        'About': 'Chi Sono',
        'Projects': 'Progetti',
        'Contacts': 'Contatti',
        'Language' : 'Lingua',
        'Italian' : 'Italiano',
        'English' : 'Inglese',
        'Hi' : "Ciao, Sono Federico Guidazzi",
        'Intro' : "Sono un ingegnere informatico, appassionato di programmazione e quasi tutto quello che fa parte del mondo tecnologico.",
        'Intro2' : "Attualmente lavoro come ingegnere informatico presso GFT.",
        'AboutMe' : "Chi Sono",
        'Description1' : "La passione per la tecnologia, in particolare per l'informatica, mi ha accompagnato da sempre nel corso della mia vita, questo può essere testimoniato dal percorso di studi universitari che ho scelto.",
        'Description2' : "Trovo bellissimo come l'informatica si possa sposare con qualsiasi ambito della nostra vita, arricchendolo, facilitandolo e donandogli un fascino irresistibile, dal mio punto di vista.",
        'Description3' : "Sono molto incuriosito dalle tecnologie informatiche in sviluppo e di come queste stiano facendo avanzare in modo esponenziale tutti gli ambiti in cui esse trovano utilizzo, facendomi così rimanere al passo coi tempi.",
        'Description4' : "Concludo, specificando, che scrivere codice e risolvere problemi è un'attività che trovo molto ripagante e soddisfacente, sopratutto se le difficoltà che si vanno a risolvere possono cambiare, anche se solo in piccola parte, la vita di tutti, facendo così un piccolo passo verso un mondo migliore.",
        'Description5' : "Sono aperto a nuove offerte lavorative a cui possa contribuire, imparare e crescere. Se hai un'opportunità lavorativa che incontra le mie competenze e esperienza non esitare a contattarmi.",
        'Skills':'Competenze',
        'Projects':'Progetti',
        'Contacts':'Contatti',
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
            } else {
                entry.target.classList.remove('show');
            }
        }));
    });

    const hiddenElements = document.querySelectorAll('.nascosto');
    hiddenElements.forEach((el)=>observer.observe(el));

    setInterval(function () {
        const observer = new IntersectionObserver((entities)=>{
            entities.forEach((entry=>{
                var center = window.innerHeight / 2;
                if(entry.target.getBoundingClientRect().top<=center && entry.target.getBoundingClientRect().bottom>=center){
                    var string = $(entry.target).attr("id").charAt(0).toUpperCase() + $(entry.target).attr("id").slice(1);
                    $('#'+string).css('color', 'black');
                } else {
                    var string = $(entry.target).attr("id").charAt(0).toUpperCase() + $(entry.target).attr("id").slice(1);
                    $('#'+string).css('color', 'var(--bs-nav-link-color)');
                }
            }));
        });
        
        const hiddenElements = document.querySelectorAll('.nascosto');
        hiddenElements.forEach((el)=>observer.observe(el));
        
    }, 1000);

});