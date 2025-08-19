import restaurantImage from './restaurant.jpg'

function homeLoad() {
    const content = document.querySelector("#content");
    const home = document.createElement("div");
    const headline = document.createElement("div");
    const image = document.createElement("img");
    const description = document.createElement("div");

    home.id = "home";
    headline.textContent = "Harrison Temple Restaurant";
    image.src = restaurantImage;
    image.alt = "Restaurant Image";
    image.width = "400";
    description.textContent = "Harrison Temple Restaurant is wonderful for those who love turtles and snacks! The prices are very low, so come on in and enjoy our delicacies!";
    
    content.appendChild(home);
    home.appendChild(headline);
    home.appendChild(image);
    home.appendChild(description);
}



export default homeLoad;