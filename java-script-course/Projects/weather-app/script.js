import { callWeatherAPI } from "./callWeatherAPI.js"; 
import { filterWeatherJson } from "./filterWeatherJson.js";
import { updatePage } from "./updatePage.js";
// get desired city
// call both apis
// make the json usable => filter the information
// update the html page

//export { callGiphyAPI } from giphyService

const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", (event) => main(event));

async function main(event) {
  event.preventDefault(); 
  const city = searchInput.value.trim();
  const weather = await callWeatherAPI(city);
  const weatherFiltered = await filterWeatherJson(weather);
  updatePage(weatherFiltered);
//  const gif = callGiphyAPI(weather.feelslike);
 // updatePage(weather, gif);
}  
