# Kritika Roy Portfolio

## 1. Project Overview

This is a modern personal portfolio website for Kritika Roy.

It presents Kritika as a Senior HTML Developer, UI Developer and Frontend Developer with 7+ years of frontend/UI development experience. The website is designed to help with job applications, freelance work and immediate joining opportunities.

The design is minimal, editorial, responsive and easy to edit.

## 2. Technologies Used

- React: Used to build the website with reusable components.
- Vite: Used to run and build the React project.
- JavaScript: Used for React logic.
- HTML5: Used through React JSX to create semantic page structure.
- CSS3: Used for layout, responsive design, dark mode and styling.

## 3. Installation

First install the project packages:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

Vite will show a local website URL in the terminal.

## 4. Build

To create a production build, run:

```bash
npm run build
```

The final build files will be created inside the `dist` folder.

## 5. Project Structure

```text
public/
  images/
    Project images used in the portfolio.
  resume/
    Kritika_Roy_Resume.pdf

src/
  components/
    Small React components for each page section.
  data/
    Editable project, skill and experience data.
  App.jsx
    The main app component.
  main.jsx
    The file that connects React to index.html.
  index.css
    The main CSS file.

index.html
  The HTML file loaded by the browser.

package.json
  Project scripts and package list.
```

## 6. How React Works in This Project

`main.jsx` starts the React app and places it inside the `<div id="root"></div>` from `index.html`.

`App.jsx` is the main component. It imports all sections like Navbar, Hero, About, Projects and Contact.

Components are small pieces of the website. For example, `Hero.jsx` contains only the hero section.

Props are values passed from one component to another. In this project, `App.jsx` sends `darkMode` and `setDarkMode` to `Navbar.jsx`.

`useState()` is used for simple state. The project uses it for dark mode and the mobile menu.

`.map()` is used to show repeated data. For example, projects are stored in `src/data/projects.js`, and `Projects.jsx` uses `.map()` to create one card for each project.

## 7. How to Change Name

Edit these files:

- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`
- `index.html`

Search for `Kritika Roy` and replace it.

## 8. How to Change About Text

Edit:

```text
src/components/About.jsx
```

Change the paragraph text inside the component.

## 9. How to Add a Project

Edit:

```text
src/data/projects.js
```

Add a new object inside the `projects` array:

```js
{
  id: 13,
  name: "New Project",
  url: "https://example.com/",
  image: "/images/example.jpg",
  description: "Responsive frontend website development.",
  type: "Frontend Development",
  technologies: ["HTML", "CSS", "JavaScript"]
}
```

Place the image inside:

```text
public/images/
```

## 10. How to Remove a Project

Open:

```text
src/data/projects.js
```

Delete the full project object from the `projects` array.

## 11. How to Add Skills

Edit:

```text
src/data/skills.js
```

Add or remove skill names inside the `items` arrays.

## 12. How to Change Experience

Edit:

```text
src/data/experience.js
```

Change company names, roles, dates, descriptions or responsibility lists.

## 13. How to Change Colors

Edit the CSS variables in:

```text
src/index.css
```

Example:

```css
:root {
  --bg: #f5f5f2;
  --text: #111111;
}
```

Light mode uses `:root`.

Dark mode uses `.dark`.

## 14. How Dark Mode Works

In `App.jsx`, this line stores whether dark mode is active:

```js
const [darkMode, setDarkMode] = useState(true);
```

If `darkMode` is true, the website gets the `dark` class.

The theme button in `Navbar.jsx` changes the value when clicked.

## 15. How to Replace Resume

Replace this file:

```text
public/resume/Kritika_Roy_Resume.pdf
```

Keep the same file name if you do not want to edit the buttons.

## 16. How Resume Download Works

The download button uses this HTML attribute:

```html
download
```

That tells the browser to download the PDF instead of opening it normally.

## 17. How to Change Email

Edit:

```text
src/components/Contact.jsx
```

Find:

```html
mailto:YOUR_EMAIL
```

Replace `YOUR_EMAIL` with the real email address.

## 18. How to Change LinkedIn

Edit:

```text
src/components/Contact.jsx
```

Replace:

```text
https://www.linkedin.com/
```

with the real LinkedIn profile URL.

## 19. How to Change GitHub

Edit:

```text
src/components/Contact.jsx
```

Replace:

```text
https://github.com/
```

with the real GitHub profile URL.

## 20. How to Deploy

Beginner-friendly options:

- Netlify: Drag the `dist` folder into Netlify after running `npm run build`.
- Vercel: Import the project from GitHub and use the default Vite settings.
- GitHub Pages: Use a GitHub Pages deployment workflow for Vite.

For most beginners, Netlify or Vercel is the easiest.

## 21. Common Problems

### npm install error

Make sure Node.js is installed. Then try:

```bash
npm install
```

again.

### npm run dev error

Run `npm install` first. Then run:

```bash
npm run dev
```

### Images not loading

Make sure images are inside:

```text
public/images/
```

Image paths should start with `/images/`.

### Resume not downloading

Make sure this file exists:

```text
public/resume/Kritika_Roy_Resume.pdf
```

### Project links not working

Check the `url` value in:

```text
src/data/projects.js
```

Each URL should include `https://`.

### CSS not updating

Save the file and refresh the browser. If needed, stop the dev server and start it again with:

```bash
npm run dev
```
