let description = document.querySelector("#description");
let sunset = document.querySelector("#sunset");
let temp = document.querySelector("#temp");
let feelslike = document.querySelector("#feelslike");
let conditions = document.querySelector("#conditions");
let icon = document.querySelector("#icon");

let elements = {
    description,
    sunset,
    temp,
    feelslike,
    conditions,
    icon,
  }

export async function updatePage(json) {
  await json;
  let arrayJson =  Object.entries(json);
  for (let key of arrayJson) {
    let information = key[0];
    if (information in elements) {
      let htmlElement = elements[information];
      htmlElement.innerHTML = `${information}:  ${json[information]}`;
      // information.innerHTML = json[information];
    }
  }
  description.innerHTML = json["description"];
}

