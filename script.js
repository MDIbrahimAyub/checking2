const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', () => {
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
});
const bagIcon = document.getElementById('bag-icon');
const rightBar = document.getElementById('right-bar');
const closeIcon = document.getElementById('close-icon');

bagIcon.addEventListener('click', () => {
    rightBar.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    rightBar.classList.remove('active');
});

const hearts = document.querySelectorAll(".heart i");

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("active");
        heart.classList.toggle("ri-heart-line"); // Outline heart
        heart.classList.toggle("ri-heart-fill"); // Filled heart
    });
});

let first = document.querySelector(".new-arr-card1")
first.addEventListener("click", () => {
    location.href = "post1.html";
})

