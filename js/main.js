$( document ).ready(function() {
    console.log("jquery load");
    var hide = true;
    $("#show-more").click(function(e){
        e.preventDefault();
        $(".bloc-1").toggleClass("showMore");
        if (hide) {
            $(this).html("Hide");
        }else{
            $(this).html("Show More");
        }
        hide = !hide;
    });

    $(".work-exp").click(function(e){
        e.preventDefault();
        $(this).closest("ul").find("a").removeClass("active");
        $(this).addClass("active");
        $(".experience").show();
        $(".certifications").hide();
    });
    $(".work-certif").click(function(e){
        e.preventDefault();
        $(this).closest("ul").find("a").removeClass("active");
        $(this).addClass("active");
        $(".experience").hide();
        $(".certifications").show();
    });

    
    
});