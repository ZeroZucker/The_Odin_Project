//// make an api call depending on a variable
// log the resutl of the call
//
const API_KEY = "CAPTTEPKNH8D2FGDZBJYE3K73";
const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const DATE = "2025-10-22";
const wantedInformation = ["datetime", "conditions", "icon", "temp", "windspeed", "feelslike"];

const button = document.querySelector("#searchForm");
const searchInput = document.querySelector("#search");


button.addEventListener("submit", (event) => {
  event.preventDefault();
  let loc = searchInput.value.trim()
  console.log(loc);
  let weatherInformation = getData(loc);
  updatePage(weatherInformation);

  console.log(weatherInformation);
  });

async function updatePage(data) {
  let weather = await data;
  console.log(weather);
  for (let wanted of wantedInformation) {
    console.log(document.querySelector(`#${wanted}`));
    let element = document.querySelector(`#${wanted}`);
    if (element) {
    element.innerHTML = weather[wanted];
    }
}}

async function getData(city) {

   try {

    let response = await callAPI(city);
    let result = await response.json()
    let releventInformation = result.currentConditions;
    let filteredInfo = Object.fromEntries(Object.entries(releventInformation).filter( ([key]) => wantedInformation.includes(key)));
    return filteredInfo;
   
  } catch (err) { console.log(err);}

}

async function callAPI(city) {
  return fetch(`${URL}${city}/${DATE}?key=${API_KEY}`);
}



