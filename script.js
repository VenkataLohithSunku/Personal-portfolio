document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('menu');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = new bootstrap.Collapse(menuToggle);
      bsCollapse.hide();
    });
  });
});

function opendetails(){
  var educationDetails=document.getElementById('ed');

    if (educationDetails.style.display === "none" || educationDetails.style.display === "")
    {
      educationDetails.style.display = "flex";
    }
    else
    {
      educationDetails.style.display = "none";
    }
}

window.onload = function() {
  document.getElementById("ed").style.display = "none";
};

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved user preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save user preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️"; // Sun icon for Light Mode
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙"; // Moon icon for Dark Mode
    }
});