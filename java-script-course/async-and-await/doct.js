async function loadJson(url) {
  try {

    const response = await fetch(url);
    if (response.status == 200) {
     return response.json();
    } else {
      throw new Erro(response.status);
    }
  } catch (err) {
      console.log(err);
  }
}
