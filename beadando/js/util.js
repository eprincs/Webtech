function checkEmptiness(value){

    console.log(value);
    if(value === "" || value ==="undefined" ||value == null) {
        return true;
    }
    return false;

}



function checkInput(min,value, max) {
    var wronginput = true;

    if(checkEmptiness(value)===false){
        if(value >= min && value <= max) {
            wronginput = false;
        }
    }

    return wronginput;

}

function changeRed(formitem){
    $(formitem).addClass("formstylered");
}

function removeRed(formitem){
    $(formitem).removeClass("formstylered");
}