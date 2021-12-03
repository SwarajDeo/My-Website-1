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

function imageslideshow() {
    var x = document.getElementById('slideshow')
    var str = document.getElementById('slideshow').src;
    if (str.includes("pic1.jpg")) {
        x.src = "../img/pic2.jpg";
    } else if (str.includes("pic2.jpg")) {
        x.src = "../img/pic3.jpg";
    } else if (str.includes("pic3.jpg")) {
        x.src = "../img/pic4.jpg";
    } else if (str.includes("pic4.jpg")) {
        x.src = "../img/pic5.jpg";
    } else if (str.includes("pic5.jpg")) {
        x.src = "../img/pic1.jpg";
    } else {
        x.src = "";
    }
}