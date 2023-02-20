$(document).ready(function(){
    let bool = true;
    $(".dropdownIcon").click(()=>{
        if(bool){
            $(".dropdownIcon").attr("src", "./resources/x-lg.svg");
        } else {
            $(".dropdownIcon").attr("src", "./resources/list.svg");
        }
        bool = !bool;
    });
});