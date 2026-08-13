function createAbout() {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  about.id = "about";
  content.appendChild(about);

  const title = document.createElement("h3");
  title.textContent = "About Us";
  about.appendChild(title);

  const subtitle = document.createElement("h2");
  subtitle.textContent = "Fresh - Seasonal - Local";
  about.appendChild(subtitle);

  const p1 = document.createElement("p");
  p1.textContent =
    "We are a local restaurant that serves fresh, seasonal, and regional ingredients. Our menu features a variety of dishes all prepared with love and care, depending on the season and the produce available to us. We are committed to providing the best possible dining experience for our customers.";
  about.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent =
    "To serve you with the freshest ingredients, we source our produce from local farmers and suppliers. We believe in sustainable farming practices and are proud to be a local business.";
  about.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent =
    "If you have any questions or would like to make a reservation, please don't hesitate to contact us. We look forward to serving you and would greatly appreciate your feedback and referral after your visit.";
  about.appendChild(p3);
}

export default createAbout;
