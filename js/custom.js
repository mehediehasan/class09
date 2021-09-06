function num(getNum) {
    window.event.preventDefault();
    document.getElementById("display").value += getNum;
}

function arith (getNum) {
    if (document.getElementById("display").value) {
        document.getElementById("display").value += getNum;
    }
}

function clr() {
    document.getElementById("display").value = "";
}

function cocmpute() {

    if (document.getElementById("display").value != "") {
        let x =  document.getElementById("display").value;
        let y =  eval(x);
        document.getElementById("display").value += " = " + y;
    }


}