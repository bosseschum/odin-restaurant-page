function createContact() {
  const content = document.querySelector("#content");
  const contact = document.createElement("div");
  contact.id = "contact";
  content.appendChild(contact);

  const title = document.createElement("h3");
  title.textContent = "Contact Us";
  contact.appendChild(title);

  const p1 = document.createElement("p");
  p1.textContent =
    "We would love to hear from you! Please don't hesitate to reach out to us with any questions or feedback you may have.";
  contact.appendChild(p1);

  const contactCards = document.createElement("div");
  contactCards.id = "contact-cards";
  contact.appendChild(contactCards);

  const card1 = document.createElement("div");
  card1.id = "address";
  contactCards.appendChild(card1);

  const subtitle1 = document.createElement("h4");
  subtitle1.textContent = "Address";
  card1.appendChild(subtitle1);

  const p2 = document.createElement("p");
  p2.textContent = "By The Lake 4, Laketown";
  card1.appendChild(p2);

  const card2 = document.createElement("div");
  card2.id = "phone";
  contactCards.appendChild(card2);

  const subtitle2 = document.createElement("h4");
  subtitle2.textContent = "Phone";
  card2.appendChild(subtitle2);

  const p3 = document.createElement("p");
  p3.textContent = "+1 (555) 123-4567";
  card2.appendChild(p3);

  const card3 = document.createElement("div");
  card3.id = "email";
  contactCards.appendChild(card3);

  const subtitle3 = document.createElement("h4");
  subtitle3.textContent = "Email";
  card3.appendChild(subtitle3);

  const p4 = document.createElement("p");
  p4.textContent = "info@laketownrestaurant.com";
  card3.appendChild(p4);
}

export default createContact;
