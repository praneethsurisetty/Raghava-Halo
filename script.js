const form = document.querySelector("#eoiForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name").trim();
  const phone = data.get("phone").trim();
  const size = data.get("size");
  const note = data.get("message").trim() || "I want EOI details for Raghava Halo.";

  const lines = [
    "Hello, I want to submit my EOI enquiry for Raghava Halo, Kondapur.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Preferred size: ${size}`,
    `Message: ${note}`,
  ];

  const url = `https://wa.me/918522943549?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
