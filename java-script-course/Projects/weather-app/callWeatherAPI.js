const API_KEY = "CAPTTEPKNH8D2FGDZBJYE3K73";
const ENDPOINT = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function callWeatherAPI(city) {
  try {
    const uri = `${city}?key=${API_KEY}`;
    const result = await fetch(ENDPOINT + uri);

    if (!result.ok) {
      throw new Error(`https error! Status: ${result.status}`);
    };

    const json = await result.json();
    let jsonFiltered = await json.days[0];
    return jsonFiltered;

  } catch (error) {
    console.log(error("Error calling weather API:", error));
    return null;
    }
}

