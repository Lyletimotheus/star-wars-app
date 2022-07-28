import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { stringify } = require('roman-numerals-convert');

  return (
    <>
      <Link to={`/movie/${props.id}`}>
        <div className="flex w-full h-full mx-auto overflow-hidden card group">
          <div className="flex flex-col basis-8/12">
            <span className="text-xs">Episode {stringify(props.id)}</span>
            <h2 className="card-header">{props.title}</h2>
            <button type="button" className="mt-auto w-max button button-primary group-hover:bg-white group-hover:text-blue" aria-label={`View Movie Title: ${props.title}`}>
              Movie Details
            </button>
          </div>
          <div className="relative basis-4/12">
            <span className="absolute right-0 font-bold -translate-y-1/2 opacity-50 top-1/2 translate-x-1/3 text-9xl text-dark-gray text-shadow-white group-hover:text-blue">
              {stringify(props.id)}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
