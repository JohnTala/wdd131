
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const select = document.getElementById('product');

products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.name;
  option.textContent = product.name;
  select.appendChild(option);
});

// Show the current year in the footer
let year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

// Show the date the page was last modified
let lastModified = document.lastModified;
document.getElementById("lastModifiedDate").textContent = "Last updated: " + lastModified;
