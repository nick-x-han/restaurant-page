function contactLoad() {
    const content = document.querySelector("#content");
    const contactDiv = document.createElement("div");
    const headline = document.createElement("h3");
    const contact = document.createElement("div");

    contactDiv.id = "contact";
    headline.textContent = "Contact Harrison Temple";
    contact.textContent = "harrison@gmail.com"
    
    content.appendChild(contactDiv);
    contactDiv.appendChild(headline);
    contactDiv.appendChild(contact);
}

export default contactLoad;