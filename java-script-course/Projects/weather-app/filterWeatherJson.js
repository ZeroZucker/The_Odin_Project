let relevantInformation = ["conditions", "description", "feelslike", "icon", "sunset", "temp"];


export async function filterWeatherJson(json){
  
  let filteredInfo = Object.fromEntries(Object.entries(json).filter( ([key]) => relevantInformation.includes(key)));
  return filteredInfo;
}
