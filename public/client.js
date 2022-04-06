var key = localStorage.key(0);
document.getElementById("heading").value = 

if (localStorage.getItem("text") != null) {
  document.getElementById("text").value = localStorage.getItem("text")
}

function savels(event){
  localStorage.setItem("text",event.target.value);
}