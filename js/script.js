const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//asynchronous function to use to fetch API data
const getImage = async function(){
  //response from the API
  //await used to wait for complete response
  //fetch contains url and endpoints
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  //parse(interpret) data in res variable
  //also needs to wait for complete response
  const images = await res.json();
  //console.log(images);
  selectRandomImage(images);
};

//selectRandomImage function is used in getImage
//function to request randomIndex image
const selectRandomImage = function(images){
  //round random#(0-1)*100 down to get randomIndex
  const randomIndex = Math.floor(Math.random() * images.length);
  //grab a randomImage using randomIndex from above
  const randomImage = images[randomIndex];
  //console.log(randomImage);
  //log out randomIndex as a whole number
  //rounded down
  //console.log(randomIndex);
  displayImage(randomImage);
};

//call function in selectRandomImage function
const displayImage = function(randomImage){
  //assigns API object selected to declared variable; same for imageAddress
  const author = randomImage.author;
  const imageAdress = randomImage.download_url;
  //use innerText to modify authorSpan class
  //assign author to change wanted
  authorSpan.innerText = author;
  //change src of image to tell JS to load from
  //source url
  img.src = imageAdress;
  //remove hide class to make image visible 
  imgDiv.classList.remove("hide");
};

button.addEventListener("click", function(){
  getImage();
});
