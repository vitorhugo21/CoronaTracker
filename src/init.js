import country from "./country";

function init() {
  const selectBox = document.querySelector("select");
  const confirmedCases = document.querySelector(
    ".confirmed-container .cases-container .cases-container-number"
  );
  const recoveredCases = document.querySelector(
    ".recovered-container .cases-container .cases-container-number"
  );
  const deathCases = document.querySelector(
    ".death-container .cases-container .cases-container-number"
  );

  selectBox.addEventListener("change", (e) => {
    country.country(e.target.value, confirmedCases, recoveredCases, deathCases);
  });

  country.country("global", confirmedCases, recoveredCases, deathCases);
  country.countries(selectBox);
}

init();
