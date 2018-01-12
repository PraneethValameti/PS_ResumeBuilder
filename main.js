

function newpage() {
  window.open ('resume.html','_self',false)

}

function results() {
  fname = document.getElementById("fname").value;
}
window.onload = function() {
    /* Add your logic here */
    document.getElementById('name').innerHTML=fname;

}
