# Prologg



## Table of Contents

  * [Description](#description)
  * [Usage](#usage)
  * [Features](#features)
  * [Installation](#installation)
  * [License](#license)



## Description
<!-- Description briefly explains what kind of project this is and what you made -->
<!-- Add a nice poster visual 📸 -->
<!-- Add a link to GitHub Pages 🌐 -->

**Prologg is a startup fighting labor exploitation.**
This project consists of a static website focused on crowdfunding and customer acquisition, and a web app used in practice by people who are being exploited.

The website is informational, professional, and aimed at law firms, with the goal of getting them to request a demo.

The web app is functional, responsive, and aimed at people who are being exploited in the workplace, with the goal of helping them quickly and easily collect evidence for a potential court case.

[Live link - informational website](https://prologglaw.netlify.app/)

<img width="2278" height="4164" alt="screenshots of the website aimed at lawyers" src="https://github.com/user-attachments/assets/405bf186-2682-4a70-a916-4550b571a145" />



## Usage
<!-- Usage covers the user story, how it works, and what you can do with it. -->
### Language toggle
One of the main features is the language toggle. It is important that the website is easy to read for both Dutch-speaking and foreign lawyers and other interested parties. The website's language defaults to Dutch, but it can be switched to English with a single button press. The button is always in the navigation bar; on mobile, you'll find it inside the hamburger menu.

<img width="1479" height="78" alt="Screenshot 2026-10-27 at 11 45 57" src="https://github.com/user-attachments/assets/67f8f070-b558-4718-8eb2-fc0955cfd8b8" />
<img width="358" height="681" alt="Screenshot 2026-10-27 at 11 46 14" src="https://github.com/user-attachments/assets/e54e771f-18a8-4ce0-ba15-85e7ff6385ed" />

### Markdown & YAML
It is important that the website is easy to maintain and that its content can be edited without much technical knowledge.
We chose to let the maintainer write the content in Markdown. We load this content into the site using YAML.

The content lives in a single file, divided into the sections of the website. There is also a copy of this file in English, which makes the language toggle possible.
If you decide to change the website's content, don't forget to update the English file as well.

**Note:** Do not change the names of the sections, otherwise the content will no longer be loaded.

### Media features
Another feature of the website is a dark mode. For this, we use the media feature `@media (prefers-color-scheme: dark)` to follow the user's preferences.

We also use the media feature `@media (prefers-reduced-motion: no-preference)` for the navigation bar animation, to check whether the user actually wants animations. And we use `@media (any-pointer: fine)` for hover effects, to check whether the user's device actually supports hovering (otherwise hover effects trigger on tap, which we don't want).

### Site navigation
Since this is a one page website, the navigation links use anchor points in the website to go to the correct section. Combined with an animation, this results into a great user experience.



## Features
<!-- Features covers which techniques were used and how. What is the HTML structure? What are the most important things in CSS? What was done with JS and how? Maybe you did something with Node.js, or used a framework or library? -->
This website runs on SvelteKit, a component-based framework. Because the website consists of only one page, we chose to run it with a static adapter. This means the website is generated in advance, so Node.js isn't needed to generate the HTML on every request.



## Design choices
The website is designed with the focus on professionalism and trust. The main colors we used are different shades of blue.
Blue emits trust, professionalism, security and stability.



## Want to add or change something in the project?
Read our guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md)



## Installation
<!-- Installation explains how another developer can work on your repo -->
Step 1: **Fork the repo**
Step 2: **Clone the code**
Step 3: **npm install**
Step 4: **npm run dev**



## Sources


### Datamodel
<img width="5131" height="4171" alt="Image" src="https://github.com/user-attachments/assets/ecef9e3c-5fe7-486f-aa46-a175c599970f" />



## License
This project is licensed under the terms of the [MIT license](./LICENSE).