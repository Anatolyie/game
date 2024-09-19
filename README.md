# Games Project

This project is a game discovery web application built with modern frontend technologies like React, Vite, Chakra UI, and more. It fetches and displays a list of games using the [RAWG API](https://api.rawg.io/) and provides a responsive, user-friendly interface for browsing and searching games.

## Features

- **Game API Integration**: The project fetches game data from the [RAWG API](https://api.rawg.io/), using an API key to access the game list and details.
- **Responsive Design**: The application is styled using **Chakra UI**, ensuring a fully responsive experience across different screen sizes.
- **State Management**: **Zustand** is used for efficient and minimalistic state management.
- **Data Fetching with React Query**: **React Query** is used for fetching, caching, and updating game data from the API.
- **Navigation with React Router**: **React Router DOM** is used for routing and navigation between different pages (e.g., game details, search results).
- **Icons**: Icons are provided by the **React Icons** library for consistent and easy-to-use icons throughout the app.

## Tech Stack

- **Vite**: For a fast development environment.
- **React**: Core UI framework.
- **Chakra UI**: For component styling and responsive design.
- **React Query**: For handling API calls, caching, and data fetching.
- **Zustand**: For global state management.
- **React Router DOM**: For page navigation.
- **Axios**: For making HTTP requests.
- **React Icons**: For adding icons to the UI.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/games-project.git
   cd games-project

2. Install dependencies:
    ```bash
    npm install



3. Add your RAWG API key:

Go to RAWG API and get your API key.
Create a .env file in the root of the project and add your API key:
    ```bash
    VITE_RAWG_API_KEY=your_api_key


4. Run the project in development mode:
   ```bash
     npm run dev


- Usage

The application allows users to:

Browse a list of games fetched from the RAWG API.
View detailed information about individual games.
Navigate between pages using React Router DOM.
Use search functionality to find specific games.
Enjoy a fully responsive experience on both desktop and mobile devices.
