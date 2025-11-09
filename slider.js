function theme() {

    if (document.getElementById("toggleSwitch").checked == true){
        document.body.style.color = "white";
        document.body.style.background = "#42454E";
        document.querySelectorAll(".main").style.background = "#4B4E58";
    } else {
        document.body.style.color = "black";
        document.body.style.background = "#FCFBFC";
        document.querySelectorAll(".main").style.background = "#FFFFFF";
    }
}