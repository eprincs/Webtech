function navigate(menu){

    switch(menu) {
        case "manufacturers":

            $("#content").load('../manufacturerlist.html');
            createManufacturerTable();
            break;
        case "cars":

            $("#content").load('../carlist.html');
            loadOptions();
            break;
        case "homepage":
            $("#content").load('../homepage.html');
            break;
        case "newcar":

            $("#content").load('../newcar.html');
            loadOptions();
            break;
        case "newmanufacturer":
            $("#content").load('../newmanufacturer.html');
            break;
    }

}



function loadOptions(){
    $.get("manufacturerNames", function (req, res) {
        if(res === "success")
            addManufacturer(req);
    });
}


function addManufacturer(data){

    for (let i = 0;i < data.length;i++) {
        $('#manufacturerSelect').append($("<option></option>").attr("value",data[i]).text(data[i]));

    }
}

function createManufacturerTable(){
    $.get("manufacturers", function (req, res) {
        if(res === "success")
            addRow(req);
    });
}



function addRow(data){
    for (let i = 0;i < data.length;i++) {
        let column = [data[i].name, data[i].country, data[i].founded]

        let row = "<tr class='tablelisttr'>";
        for(let j = 0;j < column.length;j++){

            row += "<td class='tablelisttd'>" + column[j] + "</td>";
        }
        row += "</tr>";
        $("#manufacturertable").append(row);
    }
}













































/*
$(document).ready(function(){
    $(".menuButtonbutton").click(function(){
        var manufacturers;
        manufacturers = document.getElementById(#manufacturers);
        switch($(".menuButtonbutton")) {
            case manufacturers:
                navigate('../newcar.html');
                break;
            case:
                break;
            case:
                break;
            case:
                break;
            case:
                break;
            default:
                break;

        }
    });
});

 */
/*
$(document).ready(function () {
   var getMessages = function(parameter) {
    $.ajax({
        type: "get",
        url: "../cars",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(parameter),
        dataType: "json",
        success: function (result) {
            var manufacturers = JSON.parse(result.d);
            var count = manufacturers.length;
            var mname = parameter.name;
            var country = parameter.country;
            var founded = parameter.founded;

            for (var i = 0; i < count; i++) {
                addRow(mname[i], country[i], founded[i]);
            }
        },
        error: function (result) {

            alert('Valami baj van :(');
            alert(result.responseText);

        },
        async: true

    });}

});

function createManufacturerTable(){
    $.get("manufacturers", function (req, res) {
        if(res === "success")
            addRow([]);
    });
}

function addRow (mname, country, founded)  {

    var table = document.getElementById("#manufacturerlist");
    table.append("<tr>" + "<td>" + mname + "</td>" + "<td>" + country + "</td>" + "<td>" + founded + "</td>" +"</tr>");

};*/

