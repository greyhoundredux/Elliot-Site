function themeSwitcher() {
    document.body.classList.toggle("dark-theme");
}

function showDescription(obj) {
    var obj=document.getElementById(obj);
    if (obj.style.display == "block")
        obj.style.display = "none";
    else {
        obj.style.display = "block";
        boxClose(obj);
    }
}

function boxClose(obj) {
    if (obj == document.getElementById('html')) {
        document.getElementById('javascript').style.display = "none";
        document.getElementById('java').style.display = "none";
        document.getElementById('python').style.display = "none";
        document.getElementById('c').style.display = "none";
    }
    if (obj == document.getElementById('javascript')) {
        document.getElementById('html').style.display = "none";
        document.getElementById('java').style.display = "none";
        document.getElementById('python').style.display = "none";
        document.getElementById('c').style.display = "none";
    }
    if (obj == document.getElementById('java')) {
        document.getElementById('html').style.display = "none";
        document.getElementById('javascript').style.display = "none";
        document.getElementById('python').style.display = "none";
        document.getElementById('c').style.display = "none";
    }
    if (obj == document.getElementById('python')) {
        document.getElementById('html').style.display = "none";
        document.getElementById('javascript').style.display = "none";
        document.getElementById('java').style.display = "none";
        document.getElementById('c').style.display = "none";
    }
    if (obj == document.getElementById('c')) {
        document.getElementById('html').style.display = "none";
        document.getElementById('javascript').style.display = "none";
        document.getElementById('java').style.display = "none";
        document.getElementById('python').style.display = "none";
    }
    if (obj == document.getElementById('mysql')) {
        document.getElementById('git').style.display = "none";
        document.getElementById('adobe').style.display = "none";
    }
    if (obj == document.getElementById('git')) {
        document.getElementById('mysql').style.display = "none";
        document.getElementById('adobe').style.display = "none";
    }
    if (obj == document.getElementById('adobe')) {
        document.getElementById('mysql').style.display = "none";
        document.getElementById('git').style.display = "none";
    }
}

function hideCard(obj) {
    var obj=document.getElementById(obj);
    if (obj.style.display !== "none") {
        obj.style.display = "none";
        changeButton(obj);
    }
    else {
        obj.style.display = "block";
        changeButton(obj);
    }
}

function changeButton(obj) {
    if (obj == document.getElementById('lang-hide')) {
        if (document.getElementById('lang-hide-button').style.display !== "none") {
            document.getElementById('lang-hide-button').style.display = "none";
            document.getElementById('lang-show-button').style.display = "block";
        }
        else {
            document.getElementById('lang-hide-button').style.display = "block";
            document.getElementById('lang-show-button').style.display = "none";
        }
    }
    if (obj == document.getElementById('skills-hide')) {
        if (document.getElementById('skills-hide-button').style.display !== "none") {
            document.getElementById('skills-hide-button').style.display = "none";
            document.getElementById('skills-show-button').style.display = "block";
        }
        else {
            document.getElementById('skills-hide-button').style.display = "block";
            document.getElementById('skills-show-button').style.display = "none";
        }
    }
    if (obj == document.getElementById('education-hide')) {
        if (document.getElementById('edu-hide-button').style.display !== "none") {
            document.getElementById('edu-hide-button').style.display = "none";
            document.getElementById('edu-show-button').style.display = "block";
        }
        else {
            document.getElementById('edu-hide-button').style.display = "block";
            document.getElementById('edu-show-button').style.display = "none";
        }
    }
    if (obj == document.getElementById('employment-hide')) {
        if (document.getElementById('employment-hide-button').style.display !== "none") {
            document.getElementById('employment-hide-button').style.display = "none";
            document.getElementById('employment-show-button').style.display = "block";
        }
        else {
            document.getElementById('employment-hide-button').style.display = "block";
            document.getElementById('employment-show-button').style.display = "none";
        }
    }
}