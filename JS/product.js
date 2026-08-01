// =============================
// Add to Cart
// =============================

function addCart() {

    alert("Product Added to Cart Successfully!");

}


// =============================
// Buy Now
// =============================

function buyNow() {

    alert("Redirecting to Payment Page...");

    // Uncomment later if you create payment.html

    // window.location.href = "payment.html";

}


// =============================
// Image Zoom Effect
// =============================

let image = document.querySelector(".image-box img");

image.addEventListener("mousemove", function () {

    image.style.transform = "scale(1.2)";

});

image.addEventListener("mouseleave", function () {

    image.style.transform = "scale(1)";

});


// =============================
// Search Box
// =============================

let search = document.querySelector(".search input");

search.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        let value = search.value.toLowerCase();

        if (value == "laptop") {

            window.location.href = "HTML/search.html";

        }

        else {

            alert("Product Not Found");

        }

    }

});


// =============================
// Login
// =============================

document.querySelector(".icons span").addEventListener("click", function () {

    window.location.href = "HTML/login.html";

});
