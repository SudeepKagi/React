# 🖼️ Gallery Project

> 🖼️ Gallery Project is a React application that fetches and displays a paginated gallery of high-quality images from the Lorem Picsum API, allowing users to browse diverse photos and view their authors.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-6710E2?style=for-the-badge&logo=axios&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

## 📋 Table of Contents
* [✨ Features](#-features)
* [🛠️ Tech Stack](#️-tech-stack)
* [📁 Project Structure](#-project-structure)
* [⚙️ Installation & Setup](#️-installation--setup)
* [📜 Available Scripts](#-available-scripts)

---

## ✨ Features
*   **Dynamic Photo Gallery:** Displays a collection of images fetched in real-time from an external API, providing a constantly fresh visual experience.
*   **Paginated Browsing:** Easily navigate through different sets of photos using intuitive "Next" and "Prev" buttons to explore various image collections.
*   **Image Author Display:** Each displayed photo is accompanied by its author's name, giving credit and context to the artists.
*   **External API Integration:** Seamlessly fetches data from the Lorem Picsum API, demonstrating robust capabilities for interacting with third-party services using Axios.
*   **Modern UI Styling:** Utilizes Tailwind CSS for a highly customizable and efficient utility-first styling approach, ensuring a clean and responsive user interface.
*   **Fast Development Experience:** Leverages Vite for rapid development server startup, hot module reloading, and an optimized build process, enhancing developer productivity.

---

## 🛠️ Tech Stack

| Category        | Technology    | Purpose                                              |
| :-------------- | :------------ | :--------------------------------------------------- |
| Language        | JavaScript    | Primary programming language for frontend logic      |
| Runtime         | Node.js       | Powers the development environment and build tools   |
| Framework       | React         | Building interactive and declarative user interfaces |
| Build Tool      | Vite          | Next-generation frontend tooling for a fast development experience |
| Styling         | Tailwind CSS  | Utility-first CSS framework for rapid UI development |
| HTTP Client     | Axios         | Promise-based HTTP client for making API requests    |
| Package Manager | npm           | Manages project dependencies and scripts             |
| Linting         | ESLint        | Ensures code quality and consistency                 |

---

## 📁 Project Structure

```
gallery-project/
├── src/                   # Main application source code
│   ├── App.css            # Global styles specific to the App component
│   ├── App.jsx            # The main React component rendering the photo gallery
│   ├── index.css          # Core global CSS styles
│   └── main.jsx           # Entry point for the React application
├── README.md              # Project documentation file
├── eslint.config.js       # ESLint configuration for code quality
├── index.html             # The primary HTML file that serves the React application
├── package-lock.json      # Records exact versions of dependencies
├── package.json           # Project metadata and dependency declarations
└── vite.config.js         # Configuration file for Vite build tool
```

---

## ⚙️ Installation & Setup

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/gallery-project.git
    cd gallery-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will typically be accessible at `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run the following scripts:

*   **`npm run dev`**
    Starts the development server with Vite, providing hot module reloading and a fast development experience. The application will automatically open in your browser, typically at `http://localhost:5173`.

*   **`npm run build`**
    Compiles the application for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance and smallest file size.

*   **`npm run lint`**
    Runs ESLint to identify and report on patterns in the code, ensuring code quality, consistency, and adherence to defined style guidelines across the project.

*   **`npm run preview`**
    Locally serves the static production build for testing purposes. This allows you to verify the optimized production version of the application before deployment.

---
