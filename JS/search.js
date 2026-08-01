// Login Button
document.querySelector(".login").addEventListener("click", function () {
    window.location.href = "login.html";
});

// Search Button
document.querySelector(".search-box button").addEventListener("click", searchProduct);

document.querySelector(".search-box input").addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        searchProduct();
    }

});

function searchProduct() {

    let product = document.querySelector(".search-box input").value.toLowerCase();

    if (product == "laptop") {

        alert("Showing Laptop Results");

        window.location.href = "search.html";

    }

    else if (product == "mobile") {

        alert("Showing Mobile Results");

    }

    else if (product == "watch") {

        alert("Showing Watch Results");

    }

    else {

        alert("No Product Found");

    }

}


// Product Click



// Sort

let sort = document.querySelectorAll(".sort a");

sort.forEach(function(item){

    item.addEventListener("click",function(){

        alert(item.innerText);

    });

});
function openProduct(){

    window.location.href = "product.html";

}