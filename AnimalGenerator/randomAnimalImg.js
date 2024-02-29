const catImage = document.getElementById('randomCatImage');
const loadButton = document.getElementById('loadRandomCat');

async function fetchCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    const imageUrl = data[0].url;
    catImage.src = imageUrl;
  } catch (error) {
    console.error('Error fetching cat image:', error);
  }
}

loadButton.addEventListener('click', fetchCatImage);
fetchCatImage();
