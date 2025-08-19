function menuLoad() {
    const content = document.querySelector("#content");
    const menuDiv = document.createElement("div");
    const headline = document.createElement("div");
    const menuList = document.createElement("ul");

    menuDiv.id = "menu";
    headline.textContent = "Harrison Temple Menu";
    menuList.textContent = "Harrison Temple's wonderful menu has many itching for more!";
    
    content.appendChild(menuDiv);
    menuDiv.appendChild(headline);
    menuDiv.appendChild(menuList);

    const items = ["Turtle Soup", "Cookies", "Cake", "Ice Cream", "Mountain Bounty Pizza", "Chicken Bake", "Green Banana", ]
    const prices = [12, 9, 8, 7, 30, 6, 2]
    generateMenuItems(items, prices, menuList);
}

function generateMenuItems(items, prices, menu) {
    let header = document.createElement("h3");
    let headerName = document.createElement("div");
    let headerPrice = document.createElement("div");
    headerName.textContent = "Item";
    headerPrice.textContent = "Price";
    header.appendChild(headerName);
    header.appendChild(headerPrice);
    menu.appendChild(header);
    for (let i = 0; i < items.length; i++) {
        let fullItem = document.createElement("li");
        let item = document.createElement("div");
        let price = document.createElement("div");
        item.textContent = items[i];
        price.textContent = "$" + prices[i];
        fullItem.appendChild(item);
        fullItem.appendChild(price);
        menu.appendChild(fullItem);
    }
}



export default menuLoad;