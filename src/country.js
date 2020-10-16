const url = "https://api.covid19api.com/summary";

const countries = (element) => {
  fetch(url)
    .then((response) => response.json())
    .then(({ Countries }) => {
      const countriesWithCases = Countries.filter(
        (country) => country.TotalConfirmed
      );

      countriesWithCases.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
      countriesWithCases.forEach((country) => {
        const option = document.createElement("option");
        option.text = country.Country;
        option.value = country.Slug;
        element.add(option);
      });
    });
};

const country = (value, confirmedEl, recoveredEl, deadthEl) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (value === "global") {
        confirmedEl.innerHTML = numberWithSpaces(data.Global.TotalConfirmed);
        recoveredEl.innerHTML = numberWithSpaces(data.Global.TotalRecovered);
        deadthEl.innerHTML = numberWithSpaces(data.Global.TotalDeaths);
      } else {
        const selectedCountry = data.Countries.find(
          (country) => country.Slug === value
        );
        confirmedEl.innerHTML = numberWithSpaces(
          selectedCountry.TotalConfirmed
        );
        recoveredEl.innerHTML = numberWithSpaces(
          selectedCountry.TotalRecovered
        );
        deadthEl.innerHTML = numberWithSpaces(selectedCountry.TotalDeaths);
      }
    });
};

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default { countries, country };
