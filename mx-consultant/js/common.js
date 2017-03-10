

    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    });

$(function () {
    $('.spinner .btn:first-of-type').on('click', function () {
        var btn = $(this);
        var input = btn.closest('.spinner').find('input');
        if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
            input.val(parseInt(input.val(), 10) + 1);
        } else {
            btn.next("disabled", true);
        }
    });
    $('.spinner .btn:last-of-type').on('click', function () {
        var btn = $(this);
        var input = btn.closest('.spinner').find('input');
        if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
            input.val(parseInt(input.val(), 10) - 1);
        } else {
            btn.prev("disabled", true);
        }
    });
})

$(document).ready(function () {
    $("#nav li").hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

    $(".sub-nav li").hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });

    $("#btnSearch").click(function () {
        $(".search-list").slideToggle();
    });

    $(".search-form input").keypress(function (e) {
        if (e.keyCode == 13) {
            $(".search-list").show();
        }
    });

    $('.addcartbtn').click(function (e) {
        $(this).text('Agregado al Pedido');
        setTimeout(function () {
            $(e.target).text('Agregar al Pedido');
        }, 2000);
    });

    $(".mob-top .search").click(function () {
        $(".mobsearch").slideToggle();
    });

    $(".choose-consultant-bar .bar").click(function () {
        $('.choose-consultant-bar .bar-view').slideToggle(400, function () {
            $('.choose-consultant-bar .bar-view input[name="CONNAME"]').focus();
        });
    });

    $(".showConsultant").click(function () {
        $(".consultant-list").slideToggle();
    });

    $(".choose-consultant-bar .consultant-list li").click(function () {
        $(".consultant-list").slideToggle();
    });

    $(".sidenav .mobmenu a").click(function () {
        $(this).next().slideToggle();
        //$(".subitem").slideToggle();
        $(this).toggleClass('icon-minus');
    });

    $("#mobile-menu").mobileMenu({
        MenuWidth: 250,
        SlideSpeed: 300,
        WindowsMaxWidth: 767,
        PagePush: true,
        FromLeft: true,
        Overlay: true,
        CollapseMenu: true,
        ClassName: "mobile-menu"
    });

    var trigger = $('.mm-toggle'),
    isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('#example').DataTable();

})
