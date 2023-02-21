var dict = {
    en: {
        'Home': 'Home',
        'About': 'About',
        'Projects': 'Projects',
        'Contacts': 'Contacts',
        'Language' : 'Language',
        'Italian' : 'Italian',
        'English' : 'English',
    },
    it: {
        'Home': 'Home',
        'About': 'Chi sono',
        'Projects': 'Progetti',
        'Contacts': 'Contatti',
        'Language' : 'Lingua',
        'Italian' : 'Italiano',
        'English' : 'Inglese',
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

    
    
});