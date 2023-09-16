Moviebox - Your Ultimate Movie Discovery App 🍿
Welcome to Moviebox, your one-stop destination for discovering and exploring movies. Built with Next.js and TypeScript, this web application is designed to provide you with an immersive movie-watching experience. So grab your popcorn and let's dive into the world of cinema!

Objective 🎯
Our primary goal with Moviebox is to create a movie discovery platform that empowers users to effortlessly search for movies, access detailed information about them, and even save their favorite flicks. We've integrated the powerful TMDB API to ensure that you have access to a vast catalog of movies.

Features and Requirements ✨
User Interface
We understand the importance of a visually appealing and user-friendly interface. Our design is responsive, ensuring a seamless experience on any device. You can preview the design we aimed to replicate on Figma.

On the homepage, you'll find a curated list of the top 10 movies. These are showcased in a grid layout, complete with captivating movie posters. Each movie card features the title and release date. Our app prioritizes user experience down to the smallest detail:

Movie Card: [data-testid: movie-card]
Movie Poster: [data-testid: movie-poster]
Movie Title: [data-testid: movie-title]
Movie Release Date: [data-testid: movie-release-date]
Movie Search
We've implemented a robust search feature, enabling you to find movies by title with ease. Search results are displayed promptly, including movie posters, titles, and release dates. While the magic happens behind the scenes, we make sure to keep you informed with a loading indicator during searches.

Movie Details
When you navigate to a movie's specific page using the URL pattern /movies/:id (where :id represents the IMDb ID), you'll be greeted with comprehensive movie details:

Movie Title: [data-testid: movie-title]
Release Date (in UTC): [data-testid: movie-release-date]
Runtime (in minutes): [data-testid: movie-runtime]
Overview: [data-testid: movie-overview]
API Integration
To provide you with accurate and up-to-date movie information, we've seamlessly integrated the TMDB API. Here are the essential endpoints we use:

Fetch Movie Details by ID: https://api.themoviedb.org/3/movie/{movie_id}
Error Handling
We believe in delivering a smooth experience, even when things don't go as planned. Our error handling mechanism ensures that you receive meaningful error messages in case of API failures or any other issues. Your movie journey should never be interrupted.

Submission
We've hosted our frontend application on GitHub Pages for your convenience. You can explore Moviebox by visiting our GitHub Pages site. Additionally, we've provided clear and concise instructions on how to run this project locally in our README.md file. We've also taken care to maintain well-documented and organized code.

Start Exploring 🚀
Moviebox is more than just a movie app; it's your gateway to the cinematic world. Whether you're a film enthusiast or just looking for a great movie night, we've got you covered. Enjoy the power of React and Next.js as you immerse yourself in the magic of cinema.

So, what are you waiting for? Start exploring Moviebox now and discover your next favorite movie! 🍿🎬