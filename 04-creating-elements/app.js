"use strict";

window.addEventListener("load", initApp);

// INSTRUCTIONS
//
// Exercise: Create the following DOM structure using only JavaScript (do NOT add any HTML to index.html except the script tag):
//
/* 
<div id="profile-container">
  <section id="profile-section">
    <h1>Profile</h1>
    <article class="profile-card">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile picture" />
      <h2>John Doe</h2>
      <p>Web developer and coffee enthusiast.</p>
      <ul>
        <li>Location: Copenhagen</li>
        <li>Favorite Language: JavaScript</li>
        <li>Hobby: Cycling</li>
      </ul>
    </article>
  </section>
</div> 
*/
//
// Steps:
// 1. When the page loads, use JavaScript to create the above structure and add it to the <body>.
// 2. Do not add any HTML in index.html.
// 3. Use document.createElement, setAttribute, textContent, appendChild, etc.
// 4. Do NOT add any event listeners or interactivity yet—just build the DOM tree.



function initApp() {
  // Hide instructions when done
  // document.querySelector("#instructions").classList.add("hidden");
  // TODO: Create the above DOM Structure and add it to the <body>
  createProfileSection();
}


function createProfileSection() {
    const body = document.querySelector("body");
    const instructions = document.querySelector("#instructions");

    const container = document.createElement("div");
    container.id = "profile-container";

    const section = document.createElement("section");
    section.id = "profile-section";

    const h1 = document.createElement("h1");
    h1.textContent = "Profile";

    const article = document.createElement("article");
    article.classList.add("profile-card");

    const img = document.createElement("img");
    img.setAttribute(
        "src",
        "https://randomuser.me/api/portraits/men/1.jpg"
    );
    img.setAttribute("alt", "Profile picture");

    const h2 = document.createElement("h2");
    h2.textContent = "John Doe";

    const p = document.createElement("p");
    p.textContent = "Web developer and coffee enthusiast.";

    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.textContent = "Location: Copenhagen";

    const li2 = document.createElement("li");
    li2.textContent = "Favorite Language: JavaScript";

    const li3 = document.createElement("li");
    li3.textContent = "Hobby: Cycling";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(ul);

    section.appendChild(h1);
    section.appendChild(article);

    container.appendChild(section);

    body.appendChild(container);

    instructions.classList.add("hidden")
}