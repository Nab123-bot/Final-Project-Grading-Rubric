document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting us!");
    });
  }

  const select = document.getElementById("countrySelect");
  if (select) {
    select.addEventListener("change", function () {
      const country = this.value;
      const info = {
        japan: `
          <h3>Explore Japan</h3>
          <img src="images/japan1.jpg" alt="Mount Fuji" />
          <img src="images/japan2.jpg" alt="Tokyo at night" />
        `,
        brazil: `
          <h3>Visit Brazil</h3>
          <img src="images/brazil1.jpg" alt="Rio de Janeiro Beach" />
          <img src="images/brazil2.jpg" alt="Amazon Rainforest" />
        `,
      };
      document.getElementById("countryInfo").innerHTML = info[country] || "";
    });
  }
});
