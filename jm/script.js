let count = 4000000;

const music = document.getElementById("background-music");
    
    document.addEventListener("click", () => {
        music.play();
    }, { once: true });

// set bibi image to a random image of bibi
const bibi_images = [
    "bibi_images/bibi_curse_blessing_trny.png",
    "bibi_images/image.png",
    "bibi_images/bibi.png",
    "bibi_images/bibiFace.png"
]

document.getElementById("bibi-of-the-day").src = bibi_images[Math.floor(Math.random() * bibi_images.length)]

setInterval(() => {
    count += 1;
    document.getElementById("attack-count").textContent = count;
}, 10);

setInterval(() => {
    const attackCountElement = document.getElementById("death-count");
    const currentCount = parseInt(attackCountElement.textContent, 10);
    attackCountElement.textContent = currentCount + 1;
}, 1000);

const images = [
    "images/image.png",
    "images/image1.png",
    "images/image2.jpg",
    "images/image3.jpeg",
    "images/image4.jpg",
    "images/image5.png",
    "images/image6.jpeg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.JPG",
    "images/image10.JPG",
    "images/image11.PNG",
    "images/image12.JPG",
    "images/image13.jpg",
    "images/image14.jpg",
    "images/image15.JPG",
    "images/image16.gif",
    "images/image17.gif",
    "images/image18.gif",
    "images/image19.gif",
    "images/image20.gif",
];

function popImage() {
    const image = document.createElement("img");

    const randomImage = images[Math.floor(Math.random() * images.length)];


    image.src = randomImage;
    image.classList.add("pop-image");
    const rotation = Math.random() * 30 - 15;
    image.style.setProperty("--rotation", rotation + "deg");

    image.style.left = Math.random() * 95 + "vw";
    image.style.top = Math.random() * 90 + "vh";

    const size = Math.random() * 30 + 20;
    image.style.width = size + "px";
    image.style.height = size + "px";

    const duration = Math.random() * 1 + 0.8;
    image.style.animationDuration = duration + "s";

    document.getElementById("animation-container").appendChild(image);

    image.addEventListener("animationend", () => {
        image.remove();
    });
}

setInterval(popImage, 1000);


function makeItRainPennies() {
    const pennyCount = 50;
    
    for (let i = 0; i < pennyCount; i++) {
        const penny = document.createElement("img");
        penny.src = "penny.png";
        penny.classList.add("penny");
        penny.style.width = Math.random() * 100 + 50 + "px";
        penny.style.height = "auto";
        penny.style.left = Math.random() * 100 + "vw";
        penny.style.animationDuration = (Math.random() * 2 + 1) + "s";

        document.body.appendChild(penny);

        penny.addEventListener("animationend", () => {
            penny.remove();
        });
    }
}

document.getElementById("pennies-button").addEventListener("click", makeItRainPennies);
