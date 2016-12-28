$(document).ready(
    function() {
        $("nav").niceScroll();
    }
);

$(document).ready(
    function() {
        $("body").niceScroll();
    }
);

$(document).ready(function() {
    var contador = 1;
function AnimateRotate(d){
    $({deg: 0}).animate({deg: d}, {
        step: function(now, fx){
            $(".profile-usuario span").css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}
$('.profile-usuario-opcion').hide();
    function efectoUsuario() {
        if (contador == 1){
            $( ".profile-usuario-opcion" ).toggle("blind");
            $(".profile-usuario span").addClass('icon-triangle-down2').removeClass('icon-triangle-up2');
            AnimateRotate(180);
            $( ".profile" ).css('border-bottom', '1px solid #D9D5D5')
                contador = 0;
            }else{
                contador = 1;
                $( ".profile-usuario-opcion" ).toggle("blind");
                $(".profile-usuario span").removeClass('icon-triangle-down2').addClass('icon-triangle-up2');
                AnimateRotate(-180);
                $( ".profile" ).css('border-bottom', '0px')
            }
        };
    $( ".profile-usuario" ).click(function() {
      efectoUsuario();
    });
});

$(document).ready(function() {
    var contador = 1;
    function AnimateRotate(d){
    $({deg: 0}).animate({deg: d}, {
        step: function(now, fx){
            $("#inicial .inicial-menu div:first").css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}
    function efectoMenu() {
        if (contador == 1){
            $( "#nav" ).animate({left: '0'},500);
                $( "#inicial .inicial-menu div:first" ).removeClass('icon-menu').addClass('icon-indent-increase');
                AnimateRotate(180);
                // $( "#inicial .inicial-menu div.inicial-menu-icon"
                contador = 0;
            }else{
                contador = 1;
                $( "#nav" ).animate({left: '-100%'},500);
                $( "#inicial .inicial-menu div:first" ).removeClass('icon-indent-increase').addClass('icon-menu');
                AnimateRotate(180);
            }
        };
    $( ".inicial-menu-menu" ).click(function() {
      efectoMenu();
    });
    $( "#inicial .inicial-menu div:first" ).click(function() {
      efectoMenu();
    });
});

$(document).ready(function() {
    // var path = window.location.pathname;
    // path = path.replace(/\/$/, "");
    // path = decodeURIComponent(path);
    //  $("#nav ul a").each(function () {
    //     var href = window.location;
    //     if (path.substring(0, href.length) === href) {
    //         $(this).closest('li').addClass('activo');
    //     }
    // });
    var primero = $('.menu .menu-inicio').prop('href');
    if (primero == window.location){
        $('.menu .menu-inicio li').addClass('activo')
    }
    var segundo = $('.menu .menu-empresas').prop('href');
    if (segundo == window.location){
        $('.menu .menu-empresas li').addClass('activo')
    }
});