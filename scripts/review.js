const count = Number(localStorage.getItem('reviewCount')) || 0;
localStorage.setItem('reviewCount', count + 1);
 document.getElementById('reviewCount').textContent = count + 1;

let year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

// Show the date the page was last modified
let lastModified = document.lastModified;
document.getElementById("lastModifiedDate").textContent = "Last updated: " + lastModified;
 