let image = document.getElementById("myimage");
let btn = document.getElementById("btn");
let hello = document.getElementById("hello");
let name = document.getElementById("name");

const URL = 'https://randomuser.me/api/'


btn.addEventListener('click', getClicked);
hello.addEventListener('mouseover', displybtn);
document.addEventListener('DOMContentLoaded',getClicked);




function getClicked (){

      fetch(URL)
        .then(function (response) {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(function (responseAsJson) {
            name.innerHTML = responseAsJson.results[0].name.title;
            name.innerHTML = responseAsJson.results[0].name.first;
            name.innerHTML = responseAsJson.results[0].name.last;
            myimage.src = responseAsJson.results[0].picture.large;
          
        })
        .catch(function (error) {
          console.log(error);
        })
    }

