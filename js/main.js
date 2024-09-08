AOS.init({
  duration: 1000,
  offset: 200,
  once: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-dark-mode");
  const body = document.body;

  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    //   toggleButton.textContent = 'Light Mode';
  } else {
    body.classList.remove("dark-mode");
    //   toggleButton.textContent = 'Dark Mode';
  }

  toggleButton.addEventListener("click", function () {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      //   toggleButton.textContent = 'Dark Mode';
      localStorage.setItem("dark-mode", "disabled");
    } else {
      body.classList.add("dark-mode");
      //   toggleButton.textContent = 'Light Mode';
      localStorage.setItem("dark-mode", "enabled");
    }
  });
});

const goToTopButton = document.getElementById("go-to-top");

function toggleGoToTopButton() {
  if (window.scrollY > 300) {
    goToTopButton.style.display = "flex";
  } else {
    goToTopButton.style.display = "none";
  }
}

window.addEventListener("scroll", toggleGoToTopButton);

goToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
