let body = document.body;
let url = window.location.toString();

const getNameFromUrl = (url) => {
  let getUrl = url.split('=');
  let nameUrl = getUrl[1];
  if(nameUrl == undefined) {
  nameUrl = 'GanievaKarina';
  }
return nameUrl;
}

fetch(` https://api.github.com/users/${getNamefromUrl(url)}`)
  .then(res => res.json())
  .then(json => {
    console.log(json.avatar_url);
    console.log(json.name);
    console.log(json.bio);
    console.log(json.html_url);

    //let photo = new Photo();
  //  photo.scr = json.avatar_url;
  //  body.append(photo);

    let name = document.createElement('p');
    if (json.name != null){
      name.innerHTML = json.name;
    } else{
      name.innerHTML = 'Информация о пользователе не доступна';
    }
    body.append(name);
    name.addEventListener("click", () => window.location = 'https://webheroschool.github.io/fetchh/');

    let bio = document.createElement('p');
    if (json.bio != null){
      bio.innerHTML = json.bio;
    } else{
      bio.innerHTML = 'Информация о пользователе не доступна';
    }
    body.append(bio);
  })
  .catch(err => 'Информация о пользователе не доступна');
