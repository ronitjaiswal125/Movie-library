# MovieLibrary

Fullstack Responsive Movie Website 

## Overview

MovieLibrary is a robust, full-stack, and responsive movie website built with the MERN stack. It offers a user-friendly movie browsing experience comparable to Netflix, utilizing the TheMovieDB (TMDB) API to source comprehensive movie data. The platform features a sleek and modern UI designed with Material-UI, and provides functionalities including movie search, detailed movie information, and secure user authentication.


# MovieLibrary Frontend

Welcome to the MovieLibrary frontend repository. This project provides a seamless and modern movie browsing experience using React and Material-UI, powered by data from TheMovieDB (TMDB) API.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Integration](#api-integration)



## Introduction

MovieLibrary is a responsive web application for browsing movies, similar to Netflix. The frontend is built with React and styled using Material-UI. It fetches movie data from the TMDB API and provides features like movie search, detailed information pages, and user authentication.

## Features 

- **Movie Search:** Search for movies by title.
- **Detailed Movie Information:** View comprehensive details about movies, including synopsis, cast, and ratings.
- **User Authentication:** Secure user login and registration.
- **Responsive Design:** Optimized for all device sizes.

## Home Page

![alt text](<Screenshot 2024-05-31 150337-1.png>)

##

## Technology

- **React:** JavaScript library for building user interfaces.
- **Material-UI:** React components for faster and easier web development.
- **Axios:** Promise-based HTTP client for making API requests.
- **React Router:** For routing and navigation.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- An API key from TheMovieDB (TMDB).

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vkc4/Movie_library.git
    cd MovieLibrary-frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add your TMDB API key:**
    ```env
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    ```

## Usage

### Running the application

1. **Start the development server:**
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:8000`.

### Building for production

1. **Build the application:**
    ```bash
    npm run build
    ```

2. The production-ready files will be in the `build` directory.

## API Integration

This project uses the TMDB API to fetch movie data. Ensure you have a valid API key from TMDB and have added it to your `.env` file as described in the installation steps.

### Example API Call

Using Axios to fetch data from TMDB:
```javascript
import axios from 'axios';

const fetchMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    return response.data.results;
};
```

# MovieLibrary Backend

Welcome to the MovieLibrary backend repository. This project serves as the backend server for the MovieLibrary web application. It handles data storage, retrieval, and authentication using Node.js, Express, and MongoDB.

## Introduction

MovieLibrary Backend is a Node.js server built with Express. It provides RESTful APIs for managing movie data, user authentication, and other backend functionalities required by the MovieLibrary frontend.

## Features

- **User Authentication:** Register, login, and authenticate users.
- **Database Integration:** Interacts with MongoDB database for data storage.
- **Add Favorite:** Users can add their favorite movies.

## Authentication
![alt text](<Screenshot 2024-05-31 150536.png>)

## Search Movie


![alt text](<Screenshot 2024-05-31 150510.png>)

## Add to favorites

![alt text](<Screenshot 2024-05-31 150421.png>)

##

## Technology used

- **Node.js:** JavaScript runtime for server-side development.
- **Express:** Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** NoSQL database for storing movie and user data.
- **Mongoose:** MongoDB object modeling for Node.js.
- **JWT:** JSON Web Token for user authentication.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or accessible MongoDB Atlas cluster.

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vkc4/Movie_library.git
    cd MovieLibrary-backend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and configure environment variables:**
    ```env
    PORT=3001
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

## Usage

### Running the server

1. **Start the server:**
    ```bash
    npm start
    ```
2. The server will run on `http://localhost:8000` by default.
##


 

 


