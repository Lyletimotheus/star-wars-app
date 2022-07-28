import React from 'react';
import { Helmet } from 'react-helmet';

import MovieCard from './MovieCard';

const MovieList = (props) => {
  return (
    <section className="container p-5 mx-auto">
      <Helmet>
        <title>Classical Movie Collection - Star Wars</title>
        <meta name="description" content="A collection of classical movie for your viewing." />
        <link rel="icon" href={require(`../images/star-wars-logo.svg`).default} />
        <link rel="canonical" href="http://localhost:3000/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Classical Movie Collection - Star Wars" />
        <meta property="og:description" content="A collection of classical movie for your viewing." />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:site_name" content="Star Wars" />
        <meta property="og:image" content={require(`../images/star-wars-logo.svg`).default} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Classical Movie Collection - Star Wars" />
        <meta name="twitter:url" content="http://localhost:3000/" />
        <meta name="twitter:image" content={require(`../images/star-wars-logo.svg`).default} />
      </Helmet>

      {props.movies.error ? (
        <h1 className="mb-5 text-2xl text-center uppercase">Error: {props.movies.error.message}</h1>
      ) : !props.movies.isLoaded ? (
        <h1 className="mb-5 text-2xl text-center uppercase">Loading...</h1>
      ) : (
        <div>
          <h1 className="mb-5 text-3xl text-center uppercase">
            <span className="font-bold">Classical Movie</span> Collection
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {props.movies.items.results.map((item, index) => (
              <MovieCard title={item.title} id={item.episode_id} key={index} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieList;
