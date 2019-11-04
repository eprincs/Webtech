$(document).ready(function()  {

    $("#content").load('../homepage.html');

    $("#cars").click(function () {
        navigate("cars");
    })
    $(document).on ("click", "#manufacturers", function () {
        navigate('manufacturers');
    });
    $(document).on ("click", "#newcar", function () {
        navigate('newcar');
    });
    $(document).on ("click", "#newmanufacturer", function () {
        navigate('newmanufacturer');
    });

    $(document).on ("click", "#clickableTr", function () {
        $("#manufacturertable td").slideToggle();

    });

    $(document).on ("click", "#clickableTr", function () {
        $("#carstable td").slideToggle();

    });

    $(document).on ("click", "#homebutton", function () {


        $("#menuBar").fadeIn();
        $("#menuFade").fadeIn();
        $("#menu").slideUp();


    });
    $(document).on ("click", "#menuFade", function () {

        $("#menuBar").slideUp();
        $("#menuFade").fadeOut();
        $("#menu").slideDown();

    });
    $(document).on ("click", "#carname", function () {


        $("#manufacturercontent").fadeToggle();
        $("#carcontent").slideToggle();
        if($("#carname").text()==="Carname"){
            $("#carname").text("Manufacturername");
        }
        else{
            $("#carname").text("Carname");
        }


    });










});