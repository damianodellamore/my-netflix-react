import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const NewReleases = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch('http://www.omdbapi.com/?apikey=38c25670&s=new') // Modifica questa stringa di ricerca come desideri
        .then(response => response.json())
        .then(data => {
          if(data.Search) {
            setMovies(data.Search);
          }
        })
        .catch(error => console.error('Error:', error));
    }, []);

    return (
      <>
        <h4>New Releases</h4>
        <Row className="mb-4 no-gutters text-center">
          {movies.map(movie => (
            <Col key={movie.imdbID} className="mb-2 px-1" xs={12} sm={6} lg={4} xl={2}>
              <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
            </Col>
          ))}
        </Row>
      </>
    );
};

export default NewReleases;
