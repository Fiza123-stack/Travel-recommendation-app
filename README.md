Wayfarer Travel — Travel Recommendation Web Application

A small multi-page travel site built for the Final Project. It includes:

Home page (index.html) — intro, a search bar with Search/Reset buttons, and a results grid that shows beach, temple, and country recommendations (each with two images).
About Us page (about.html) — mission, stats, values, and a team section.
Contact Us page (contact.html) — a working front-end contact/email form.
Navigation bar on every page — logo, Home/About Us/Contact Us links, active-page highlighting, and a hamburger menu on mobile.
Search feature — type beach, temple, country, or any place name (e.g. Japan) to filter the results; Reset clears the search.
File structure
travel-app/
├── index.html
├── about.html
├── contact.html
├── css/style.css
├── js/script.js
└── data.json      (reference copy of the destination data; script.js has it inlined)
Run it locally

Just open index.html in a browser — no build step or server required.

Deploy on GitHub Pages
Create a new public GitHub repository (e.g. travel-recommendation-app).
Upload all the files in this folder to the repository, keeping the same structure (index.html at the repo root, css/ and js/ as subfolders).
In the repo, go to Settings → Pages.
Under Source, choose Deploy from a branch, pick the main branch and / (root) folder, then click Save.
Wait a minute, then refresh — GitHub will show your live URL, usually: https://<your-username>.github.io/<repo-name>/
Submit both URLs for the assignment:
GitHub repository URL: https://github.com/<your-username>/<repo-name>
Live site URL: https://<your-username>.github.io/<repo-name>/
Screenshots for the assignment

Take screenshots of:

The Home page (intro + search bar)
A search result showing beach recommendations (2 images visible)
A search result showing temple recommendations (2 images visible)
A search result showing country recommendations (2 images visible)
The About Us page
The Contact Us page with the email form
The nav bar, including the mobile hamburger menu open (resize your browser narrow first)
