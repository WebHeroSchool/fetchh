let body = document.body;
let url = window.location.toString();
let text = document.querySelector(".text");
const getNameFromUrl = (url) => {
  let getUrl = url.split("=");
  let nameUrl = getUrl[1];
  if (nameUrl == undefined) {
    nameUrl = "GanievaKarina";
  }
  return nameUrl;
};

fetch(` https://api.github.com/users/GanievaKarina`)
  .then((res) => res.json())
  .then((json) => {
    console.log(json.avatar_url);
    console.log(json.name);
    console.log(json.bio);
    console.log(json.html_url);

    let photo = new Image();
    photo.scr = json.avatar_url;
    body.append(photo);

console.log(text)
    if (json.name != null) {
      text.innerHTML = json.name;
    } else {
      text.innerHTML = "Информация о пользователе не доступна";
    }

    text.addEventListener(
      "click",
      () => (window.location = "https://webheroschool.github.io/fetchh/")
    );

    let bio = document.createElement("p");
    if (json.bio != null) {
      bio.innerHTML = json.bio;
    } else {
      bio.innerHTML = "Информация о пользователе не доступна";
    }
    body.append(bio);
  })
  .catch((err) => "Информация о пользователе не доступна");
