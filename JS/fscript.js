// Category Active Effect

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

  category.addEventListener("click", () => {

    categories.forEach(item => {
      item.classList.remove("active");
    });

    category.classList.add("active");

  });

});
function openConsole(){
    window.location.href="console.html";
}

function openWatch(){
    window.location.href="watch.html";
}
function goCart(){
    window.location.href = "cart.html";
}
function goLogin(){
    window.location.href = "login.html";
}
function openLaptop() {
    window.location.href = "search.html";
}