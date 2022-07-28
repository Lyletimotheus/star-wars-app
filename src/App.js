// Import React, useState Hook, useEffect Hook.
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import Partials
import Header from './components/Header';
import Footer from './components/Footer';

// Import Pages Components
import MovieList from './components/MovieList';
import Movie from './components/Movie';

// Import Other Functional Components
import StructuredData from './components/StructuredData';

const App = () => {
  // API URL
  const url = 'https://swapi.dev/api/films/';

  // State Object
  const [movies, setMovies] = useState({
    error: null,
    isLoaded: false,
    items: {},
  });

  const fetchData = async () => {
    // get the data from the api
    const response = await fetch(url);
    // convert the data to json
    const json = await response.json();

    // set state with the result
    setMovies({
      ...movies,
      isLoaded: true,
      items: json,
    });
  };

  useEffect(() => {
    // declare the async data fetching function

    // call the function
    fetchData().catch((error) =>
      setMovies({
        ...movies,
        error: error,
      })
    );
  }, []);

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header />

        <Helmet>
          <script type="application/ld+json">{JSON.stringify(StructuredData)}</script>
        </Helmet>

        <main>
          <Routes>
            <Route exact path="/" element={<MovieList movies={movies} />} />
            <Route exact path="/movie/:movieId" element={<Movie />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
