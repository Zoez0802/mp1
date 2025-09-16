let one=document.getElementById("one");
let two=document.getElementById("two");
let output=document.getElementById("output");


function doAdd() {
    output.innerHTML = String(Number(one.value) + Number(two.value));
    if (output.innerHTML < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}


function doSub() {
    output.innerHTML = String(Number(one.value) - Number(two.value));
    if (output.innerHTML < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}



function doMul() {
    output.innerHTML = String(Number(one.value) * Number(two.value));
    if (output.innerHTML < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function doDiv() {
    if (Number(two.value)=== 0) {
        output.innerHTML = "ERROR :( ";
        output.style.color = "red";
    } else {
        output.innerHTML = String(Number(one.value) / Number(two.value));
        if (output.innerHTML < 0) {
            output.style.color = "red";
        } else {
            output.style.color = "black";
        }
    }
}


function doPow() {
    let baseNumber =Number(one.value);
    let exponentNumber =Number(two.value);
    let Answer=1;

    //number 2 could be negative so we use math.abs
    for (let count=0; count < Math.abs(exponentNumber); count++) {
        Answer = Answer*baseNumber;
    }
    if (exponentNumber<0) {
        Answer = 1/Answer;
    }
    output.innerHTML=String(Answer);
    if (output.innerHTML<0) {
        output.style.color="red";
    } else {
        output.style.color="black";
    }
}

//clean all inputs and result
function clearAll() {
    one.value = "";
    two.value = "";
    output.innerHTML = "";
    output.style.color = "black";
}