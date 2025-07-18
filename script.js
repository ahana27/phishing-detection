document.addEventListener("DOMContentLoaded", function() {
  const themeButton = document.querySelector(".theme-button");
  const body = document.getElementById("mainBody");

  themeButton.addEventListener("click", function() {
      // Toggle theme
      if (body.classList.contains("dark-theme")) {
          body.classList.remove("dark-theme");
      } else {
          body.classList.add("dark-theme");
      }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const reportButton = document.getElementById('checkUrlButton');

  reportButton.addEventListener('click', function() {
      // Open the new page when the report button is clicked
      window.open('result.html', '_blank');
  });
});
