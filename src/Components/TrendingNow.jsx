import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faTh } from '@fortawesome/free-solid-svg-icons';

export const TrendingNow = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=38c25670&s=harry%20potter')
      .then(response => response.json())
      .then(data => {
        if(data.Search) {
          setMovies(data.Search);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Container fluid className="px-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <Dropdown className="ml-4 mt-1">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="btn-sm rounded-0" style={{ backgroundColor: '#221f1f' }}>
              Genres &nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-dark">
              <Dropdown.Item href="#" className="text-white bg-dark">Comedy</Dropdown.Item>
              <Dropdown.Item href="#" className="text-white bg-dark">Drama</Dropdown.Item>
              <Dropdown.Item href="#" className="text-white bg-dark">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <FontAwesomeIcon icon={faThLarge} className="icons" />
          <FontAwesomeIcon icon={faTh} className="icons" />
        </div>
      </div>
      <h4>Trending Now</h4>
      <Row className="mb-4 no-gutters text-center">
        {movies.map((movie, idx) => (
          <Col key={idx} className="mb-2 px-1 w-0" xs={12} sm={6} lg={4} xl={2}>
            <img className="img-fluid"  
            src={movie.Poster} alt="movie picture" />
          </Col>
        ))}
      </Row>
      {/* Repeat the same pattern for "Watch it Again" and "New Releases" sections */}
    </Container>
  );
};
