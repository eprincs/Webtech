function search() {

    var searchmanufacturer =  document.cookie = "name="+ document.getElementById("manufacturerSelect").value;
    console.log(searchmanufacturer);

    $.get("manufacturer", function (req, res) {
        if(res === "success"){
            deleteCarRow();
            addCarRow(req);
            addCard(req);
        }
    });



}


function createCarsTable(){
        $.get("cars", function (req, res) {
            if(res === "success") {

                deleteCarRow();
                addCard(req);
                addCarRow(req);

            }
        });
}

function search2(){

    let car = $("#searchCar").val();
    $.get("cars", function (req, res) {
        if(res === "success"){
            deleteCarRow();
            searchCard(car, req);
            searchCar(car, req);



        }

    });
}



function deleteCarRow(){

    $("#carstable td").remove();
    $(".listdiv").remove();
}


function addCarRow(data){

    for (let i = 0;i < data.length;i++) {
        let column = [data[i].name, data[i].consumption, data[i].color, data[i].manufacturer, data[i].available, data[i].year, data[i].horsepower];
        let row = "<tr class='tablelisttr'>";
        for(let j = 0;j < column.length;j++){
            row += "<td class='tablelisttd'>" + column[j] + "</td>";
        }
        row += "</tr>";
        $("#carstable").append(row);
    };
}




function reset(){
    $("input[type=number]").text("");
    $("input[type=date]").text("");
    $("input[type=text]").text("");


}

function addCard(data){

    for (let i = 0;i < data.length;i++) {
        let column = ["Name: " + data[i].name,"Consumption: " +  data[i].consumption,"Color: " +  data[i].color,"Manufacturer: " +  data[i].manufacturer,"Available: " +   data[i].available, "Year: " + data[i].year,"Horsepower: " +  data[i].horsepower]
        let row = "<div class='listdiv'>";
        for(let j = 0;j < column.length;j++){
            row += "<div class='listdivrow'>" + column[j] + "</div>";
        }
        row += "</div>";
        $("#cards").append(row);
    };
}

function searchCar(carname, data){
    for (let i = 0;i < data.length;i++) {
        if(data[i].name === carname){
            let column = [data[i].name, data[i].consumption, data[i].color, data[i].manufacturer, data[i].available, data[i].year, data[i].horsepower];
            let row = "<tr class='tablelisttr'>";
            for(let j = 0;j < column.length;j++){
                row += "<td class='tablelisttd'>" + column[j] + "</td>";
            }
            row += "</tr>";
            $("#carstable").append(row);
        }
    }
}

function searchCard(carname, data){

    for (let i = 0;i < data.length;i++) {
        if(data[i].name === carname) {
            let column = ["Name: " + data[i].name, "Consumption: " + data[i].consumption, "Color: " + data[i].color, "Manufacturer: " + data[i].manufacturer, "Available: " + data[i].available, "Year: " + data[i].year, "Horsepower: " + data[i].horsepower]
            let row = "<div class='listdiv'>";
            for (let j = 0; j < column.length; j++) {
                row += "<div class='listdivrow'>" + column[j] + "</div>";
            }
            row += "</div>";
            $("#cards").append(row);
        }
    };
}



