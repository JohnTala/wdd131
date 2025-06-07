
function calculateWindChill(tempC, windKph) {
  // Wind chill only applies if temp <= 10°C and wind > 4.8 km/h
  if (tempC <= 10 && windKph > 4.8) {
    return (
      13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKph, 0.16) + 0.3965 * tempC * Math.pow(windKph, 0.16)
    ).toFixed(1);
  } else {
    return "N/A";
  }
}

// Static values for now
const temperature = 10;
const windSpeed = 5;
const conditions = "Partly Cloudy";

// Populate weather info
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("temp").textContent = `${temperature} °C`;
  document.getElementById("conditions").textContent = conditions;
  document.getElementById("wind").textContent = `${windSpeed} km/h`;
  document.getElementById("windChill").textContent = `${calculateWindChill(temperature, windSpeed)} °C`;

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
