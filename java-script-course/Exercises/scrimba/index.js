const urlRequest = fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/berlin")
.then(data => console.log(data))
