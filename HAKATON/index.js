// window resize
window.addEventListener('resize', () => {
    if (window.innerWidth < 767) {
        document.getElementById('header').getElementsByTagName('ul')[0].style.display = "none";
        document.getElementById('header').getElementsByTagName('i')[0].setAttribute('class', 'fas fa-align-justify fa-2x block');
    }
    else {
        document.getElementById('header').getElementsByTagName('ul')[0].style.display = "block";
        document.getElementById('header').getElementsByTagName('i')[0].removeAttribute('class');
    }
});
if (window.innerWidth < 767) {
    document.getElementById('header').getElementsByTagName('i')[0].setAttribute('class', 'fas fa-align-justify fa-2x block');
    document.getElementById('header').getElementsByTagName('ul')[0].style.display = "none";
}

function openWindow() {
    document.getElementById("window").style.height = "100%";
}
function closeWindow() {
    document.getElementById("window").style.height = "0%";
}

//navbar hide
let scroll = window.pageYOffset;
window.addEventListener('scroll', () => {
    let scrollDown = window.pageYOffset;
    if (scroll > scrollDown) {
        document.getElementById("header").style.top = "0";
    }
    else {
        document.getElementById("header").style.top = "-70px";
    }
    scroll = scrollDown;
});

// true or false
let bool = true;
function isChecked() {
    if (bool === true) {
        document.getElementById('money').getElementsByTagName('span')[1].setAttribute('class', 'marginRight');
        document.getElementById('money').getElementsByTagName('span')[1].innerHTML = "Annually";
        document.getElementById('money').getElementsByClassName('header-field-12')[0].setAttribute('style', 'background-color: silver; color: #fff; border-radius: 20px;');
        bool = false;
    }
    else {
        document.getElementById('money').getElementsByTagName('span')[1].setAttribute('class', 'marginLeft');
        document.getElementById('money').getElementsByTagName('span')[1].innerHTML = "Monthly";
        document.getElementById('money').getElementsByClassName('header-field-12')[0].setAttribute('style', 'background-color: #fff;');
        bool = true;
    }
}

// collapse
let collapse = document.getElementsByClassName("collapse");
for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        let icon = document.getElementById('question').getElementsByTagName('i')[i];
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            icon.setAttribute('class', 'fas fa-plus');
        }
        else {
            content.style.display = "block";
            icon.setAttribute('class', 'fas fa-minus');
        }
    });
}

// loader
let loader;
function myFunction() {
    loader = setTimeout(myLoaderFunction, 3000);
}
function myLoaderFunction() {
    document.getElementById("loader").style.display = "none";
    document.getElementsByClassName("all")[0].style.display = "block";
}