const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const totalCountry = document.getElementById('count-country');
  totalCountry.innerText = countries.length;
  const countriesContainer = document.getElementById('countries-container');
  countries.forEach((country) => {
    // console.log(country);
    const { name, capital, cca2 } = country;
    // console.log(cca2);
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML = `
     <h3>Name: ${name.common}</h3>
     <h4>Capital: ${capital}</h4>
     <button onclick="loadCountryDetail('${cca2}')">Display Detail</button>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};

const loadCountryDetail = (code) => {
  fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((response) => response.json())
    .then((data) => displayCountryDetail(data));
};

const displayCountryDetail = (country) => {
  const [signleCountry] = country;
  const { name, flags, capital, independent, languages } = signleCountry;

  console.log(Object.values(languages));
  const countryDetailDiv = document.getElementById('country-detail-div');

  countryDetailDiv.innerHTML = ` 
    <img src="${flags.png}" alt="" />
    <h3>Common name: ${name.common}</h3>
    <h3>Official name: ${name.official}</h3>
    <p>Capital: ${capital[0]}</p>
    <p>Language: ${Object.values(languages)}</p>
    <p>${
      independent
        ? 'It is an independent country '
        : 'It is not an independent country. '
    }</p>
  `;
};

loadCountries();
