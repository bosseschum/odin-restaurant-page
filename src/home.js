function createHome() {
  const content = document.querySelector("#content");
  const home = document.createElement("div");
  home.id = "home";
  content.appendChild(home);

  const welcome = document.createElement("div");
  welcome.id = "welcome";
  home.appendChild(welcome);

  const welcomeText = document.createElement("h1");
  welcomeText.textContent = "Welcome to the Lago";
  welcome.appendChild(welcomeText);
  const p1 = document.createElement("p");
  p1.textContent =
    "Experience fresh, regional and seasonal ingredients in a modern and elegant way";
  welcome.appendChild(p1);

  const cta = document.createElement("div");
  welcome.appendChild(cta);
  const reserveBtn = document.createElement("button");
  reserveBtn.textContent = "Reserve your Table";
  cta.appendChild(reserveBtn);
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "View Menu";
  cta.appendChild(menuBtn);

  const meta = document.createElement("div");
  welcome.appendChild(meta);
  const p2 = document.createElement("p");
  p2.textContent = "Tue-Sun from 11am";
  meta.appendChild(p2);
  const p3 = document.createElement("p");
  p3.textContent = "Closed on Mondays";
  meta.appendChild(p3);
  const p4 = document.createElement("p");
  p4.textContent = "Laketown, By The Lake 4";
  meta.appendChild(p4);
  const p5 = document.createElement("p");
  p5.textContent = "Limited parking available";
  meta.appendChild(p5);
}

export default createHome;
