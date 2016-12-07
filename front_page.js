// Sets the background photo to a randomly generating image
window.onload = function() {
  var rand = getRandomInt(0,6);
  console.log(rand);
  var photoOptions = ['img/background-photo1.JPG', 'img/background-photo2.jpg', 'img/background-photo3.jpg', 
                      'img/background-photo4.png', 'img/background-photo5.jpg', 'img/background-photo6.jpg',
                      'img/background-photo7.jpg']
  document.getElementById('body').style.backgroundImage = ("url(" + photoOptions[rand] + ")");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function extractName(firstname) {
  // console.log("hi")
  // console.log(firstname);
  sessionStorage.setItem('name', firstname);
  location.href = 'dashboard_home.html';
}

document.getElementById("begin_button").onclick = function() {extractName(document.getElementById("name_input").value);};
document.getElementById("begin_button").href = "dashboard_home.html";