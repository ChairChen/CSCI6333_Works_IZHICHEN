import React from 'react';
import logo from "../../logo.svg"; 
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default function Preview() {
  return (
    <Container 
        fluid 
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}
    >
        <Row className="mb-4">
            <Col>
                <Image 
                    src={logo} 
                    alt="logo" 
                    style={{ height: '20vmin' }}
                    className="mb-4 logo-spin"
                />
            </Col>
        </Row>
        
        <Row>
            <Col>
                <h1 className="display-4 fw-bold text-info mb-3">
                    404 - Page Not Found
                </h1>
                
                <p className="lead mb-4">
                    Check the link for any incorrect spelling...
                </p>
                
                <Button
                    variant="outline-info"
                    href="https://chairchen.github.io/CSCI6333_Works_IZHICHEN/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4"
                >
                    Go to Home Page
                </Button>
                <br />
                <Button
                    variant="outline-info"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4"
                >
                    Learn React (External Link)
                </Button>

                <div className="mt-4 p-3 border-top">
                    <h4 className="text-info fw-bold mb-1">
                        This is a Default / Preview Page
                    </h4>
                    <p className="text-muted small">
                        CSCI6333 Final on 2025/12/14 by IZhi Chen
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
  );
}