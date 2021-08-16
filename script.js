$(document).ready(function () {
    $(".spectrum input").spectrum();

    /*color change*/
    var initialColor = "#f00";
    $("#header").css("background-color", initialColor);

    function updateColor(element, color, type) {
        if (type === "text") {

            $(element).css("color",
                (color ? color.toHexString() : ""));
        }
        if (type === "bg") {

            $(element).css("background-color",
                (color ? color.toHexString() : ""));
        }

    }

    $("#bgcolor").spectrum({
        color: initialColor,
        move: function (color) { updateColor(".output.render", color, "bg"); },
        hide: function (color) { updateColor(".output.render", color, "bg"); }
    });
    $("#Menu").spectrum({
        color: "#fff",
        move: function (color) { updateColor(".menu li .menu-link", color, "text"); },
        hide: function (color) { updateColor(".menu li .menu-link", color, "text"); }
    });
    $("#name").spectrum({
        color: "#fff",
        move: function (color) { updateColor(".designation #name", color, "text"); },
        hide: function (color) { updateColor(".designation #name", color, "text"); }
    });
    $("#designation").spectrum({
        color: "#fff",
        move: function (color) { updateColor(".designation #role", color, "text"); },
        hide: function (color) { updateColor(".designation #role", color, "text"); }
    });
    $("#contact").spectrum({
        color: "#fff",
        move: function (color) { updateColor(".menu .active", color, "bg"); },
        hide: function (color) { updateColor(".menu .active", color, "bg"); }
    });
    $("#contact-text").spectrum({
        color: initialColor,
        move: function (color) { updateColor(".menu .active", color, "text"); },
        hide: function (color) { updateColor(".menu .active", color, "text"); }
    });


    $('.top-menu a').click(function (event) {
        event.preventDefault();//stop browser to take action for clicked anchor

        //get displaying tab content jQuery selector
        var active_tab_selector = $('.top-menu .active a').attr('href');

        //find actived navigation and remove 'active' css
        var actived_nav = $('.top-menu .active');
        actived_nav.removeClass('active');

        //add 'active' css into clicked navigation
        $(this).parents('.card').addClass('active');

        //hide displaying tab content
        $(active_tab_selector).removeClass('active');
        $(active_tab_selector).addClass('hide');

        //show target tab content
        var target_tab_selector = $(this).attr('href');
        $(target_tab_selector).removeClass('hide');
        $(target_tab_selector).addClass('active');
    });


})

