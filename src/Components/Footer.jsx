import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="mt-5">
      <Container className='d-flex justify-content-center'>
        <Row className="text-center">
          <Col className="offset-md-3">
            <Row>
              <Col className="text-left mb-2">
                <i className="fa fa-facebook footer-icon"></i>
                <i className="fa fa-instagram footer-icon"></i>
                <i className="fa fa-twitter footer-icon"></i>
                <i className="fa fa-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row>
              <Col className="footer-links">
                <p><a href="#">Audio and Subtitles</a></p>
                <p><a href="#">Media Center</a></p>
                <p><a href="#">Privacy</a></p>
                <p><a href="#">Contact us</a></p>
              </Col>
              <Col className="footer-links">
                <p><a href="#">Audio Description</a></p>
                <p><a href="#">Investor Relations</a></p>
                <p><a href="#">Legal Notices</a></p>
              </Col>
              <Col className="footer-links">
                <p><a href="#">Help Center</a></p>
                <p><a href="#">Jobs</a></p>
                <p><a href="#">Cookie Preferences</a></p>
              </Col>
              <Col className="footer-links">
                <p><a href="#">Gift Cards</a></p>
                <p><a href="#">Terms of Use</a></p>
                <p><a href="#">Corporate Information</a></p>
              </Col>
            </Row>
            <Row>
              <Col className="text-left mb-2">
                <Button variant="secondary" size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="text-left mb-2 mt-2">
                <small>© 1997-2022 Netflix, Inc.</small>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
