
# Apple Website Clone

A responsive and pixel-perfect clone of the Apple website homepage, built with modern web technologies to showcase front-end development skills.

**Live Demo:** **[https://quanticmachines.netlify.app/](https://quanticmachines.netlify.app/)**

![Apple Clone Preview](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJ6dTJrMGJtN3l0d204bWs4bG94ZWV1dHJkcHczNWI1dTNrMTR2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lOqg91p2kIW9gdowet/giphy.gif)

---

## Project Overview

This project is a meticulous recreation of the Apple website homepage, built to demonstrate expertise in modern frontend development, responsive design, and attention to detail. The goal was to replicate the premium look, feel, and functionality of Apple's official site while implementing it from scratch using current web technologies.

This clone showcases advanced CSS skills, JavaScript interactions, and responsive design principles that make it a strong portfolio piece for frontend development roles.

---

## Core Features

* **Pixel-Perfect Design:** Faithful recreation of Apple's visual design and layout
* **Fully Responsive:** Optimized for all devices - desktop, tablet, and mobile
* **Smooth Animations:** CSS transitions and micro-interactions that mimic the Apple experience
* **Sticky Navigation:** Fixed header that adapts to scroll behavior
* **Product Showcase Sections:** Hero sections with gradient backgrounds and call-to-action buttons
* **Hover Effects:** Interactive elements with smooth state transitions
* **Mobile Menu:** Hamburger menu implementation for mobile devices
* **Cross-Browser Compatible:** Tested and optimized for major browsers

---

## Tech Stack

This project was built using industry-standard frontend technologies.

* **Frontend Framework:** **[React.js](https://reactjs.org/)** with functional components and hooks
* **Styling:** **Pure CSS3** with Flexbox and Grid layouts
* **Icons:** **SVG icons** for crisp, scalable graphics
* **Build Tool:** **[Create React App](https://create-react-app.dev/)**
* **Deployment:** **[Netlify](https://www.netlify.com/)**

---

## Key Technical Highlights & Challenges

This section highlights the technical implementations that make this project stand out as a portfolio piece.

### 1. Responsive Design Implementation

Creating a layout that maintains Apple's premium aesthetic across all screen sizes was a primary challenge.

* **Solution:** Used mobile-first approach with CSS media queries and flexible units
* **Implementation:** Employed CSS Grid for complex layouts and Flexbox for component alignment. Used relative units (rem, %) and max-width constraints to ensure proper scaling across devices.

### 2. Pixel-Perfect Styling

Matching Apple's precise spacing, typography, and visual hierarchy required meticulous attention to detail.

* **Solution:** Comprehensive use of browser developer tools for measurement and comparison
* **Implementation:** Matched exact color values, font weights, line heights, and spacing using CSS custom properties for consistency. Implemented subtle gradients and shadows to recreate Apple's visual depth.

### 3. Navigation & Interaction Patterns

Recreating Apple's sophisticated navigation behavior, including the sticky header and mobile menu.

* **Solution:** JavaScript event listeners combined with CSS transitions
* **Implementation:** Created a sticky navigation that changes appearance on scroll. Built a mobile hamburger menu with smooth slide-in animation using CSS transforms and transitions.

### 4. Performance Optimization

Ensuring fast loading times and smooth animations comparable to the original site.

* **Solution:** Optimized images, minimal CSS, and efficient JavaScript
* **Implementation:** Used compressed images, limited external dependencies, and implemented CSS will-change property for smoother animations.

---

## How To Run Locally

You can clone and run this project on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sksbkt/Apple-web
    cd Apple-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.



## Project Structure
```
Apple-web/  
├── public/  
│ ├── index.html  
│ └── assets/  
│ ├── images/ # Static images  
│ └── models/ # 3D model files  
├── src/  
│ ├── components/  
│ │ ├── Product3DViewer/ # 3D visualization component  
│ │ ├── ProductCustomizer/ # Color/size selector  
│ │ ├── Navigation/ # Header navigation  
│ │ └── UI/ # Reusable UI components  
│ ├── hooks/  
│ │ ├── use3DScene.js # Three.js scene management  
│ │ └── useProductConfig.js # Product state management  
│ ├── styles/ # CSS files  
│ ├── utils/ # Helper functions  
│ ├── App.js # Main application component  
│ └── index.js # Application entry point  
└── package.json
```

## Contact

Created by **[Ali Khoshbakht](https://github.com/sksbkt)**

* [**Portfolio**](https://quanticmachines.netlify.app/)
* [**LinkedIn**](https://www.linkedin.com/in/ali-khoshbakht/)
* [**GitHub**](https://github.com/sksbkt)

---

## Disclaimer

This project is for educational and portfolio purposes only. All Apple branding, designs, logos, and content are property of Apple Inc. This is a personal learning project and is not affiliated with, endorsed by, or connected to Apple Inc. in any way.
