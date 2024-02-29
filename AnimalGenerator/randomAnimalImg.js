const catImage = document.getElementById('randomCatImage');
const loadButton = document.getElementById('loadRandomCat');
console.log("initialised")
async function fetchCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    console.log("getting photo")
    const data = await response.json();
    const imageUrl = data[0].url;
    catImage.src = imageUrl;
    console.log("added photo")
  } catch (error) {
    console.error('Error fetching cat image:', error);
    window.print("there was trouble getting the photo :(")
  }
}

loadButton.addEventListener('click', fetchCatImage);
fetchCatImage();
