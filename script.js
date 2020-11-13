function themeSwitcher() {
    document.body.classList.toggle("light-theme");
}

function toggle(obj) {
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
}