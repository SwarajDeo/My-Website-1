function mouseover1() {
    var a = document.getElementById("nav1");
    a.style.color = 'rgb(0, 255, 55)';
}

function mouseout1() {
    var a = document.getElementById("nav1");
    a.style.color = 'rgb(255, 255, 255)';
}

function mouseover2() {
    var a = document.getElementById("nav2");
    a.style.color = 'rgb(0, 255, 55)';
}

function mouseout2() {
    var a = document.getElementById("nav2");
    a.style.color = 'rgb(255, 255, 255)';
}

function mouseover3() {
    var a = document.getElementById("nav3");
    a.style.color = 'rgb(0, 255, 55)';
}

function mouseout3() {
    var a = document.getElementById("nav3");
    a.style.color = 'rgb(255, 255, 255)';
}

window.onscroll = function () {
    scrollwithit()
}
var myanav = document.getElementById("myanav");
var sticky = myanav.offsetTop;
function scrollwithit() {
    if (window.pageYOffset >= sticky) {
        myanav.classList.add("sticky")
        myanav.classList.remove("anav")
    } else {
        myanav.classList.remove("sticky");
        myanav.classList.add("anav");
    }
}