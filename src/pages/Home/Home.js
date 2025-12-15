// •	Create a React application (Portfolio) with the following pages:
// o	Home: A page with a welcome message.
// o	About: A page describing your work.
// o	Redux Example: A page to demonstrate the redux example.
// o	CRUD Operations: A Page to demonstrate API fetch call.
// o	Photo Gallery: A Page to demonstrate the Optimization Techniques
// •	Add navigation links to switch between these pages.
// •	Use the React Router to handle the routing.
// •	Implement the UX (HTML) components using Bootstrap – Don't use regular styling.
// •	Refer to the previous assignments for layout references
import React from 'react';
import { Container, Alert, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Container className="my-5">
            {/* Jumbotron */}
            <Alert variant="primary" className="p-5 text-center shadow-sm">
                <Alert.Heading as="h1" className="display-4 fw-bold">
                    Welcome to the React Practical Project Portfolio
                </Alert.Heading>
                <p className="lead mt-3 mb-4">
                    This project is the final assignment for CSCI6333 and integrates key modern frontend
                    development concepts and best practices, including state management, API communication,
                    routing, and performance optimization.
                </p>
                <hr className="my-4" />
                <Button variant="outline-primary" as={Link} to="/About">
                    Explore the Tech Stack &rarr;
                </Button>
            </Alert>

            {/* Core Features */}
            <h2 className="mt-5 mb-4 text-center">Core Application Showcase</h2>
            <Row xs={1} md={2} lg={4} className="g-4">

                {/* CRUD */}
                <Col>
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>📝 CRUD Operations (API Practice)</Card.Title>
                            <Card.Text>
                                Implements full API operations (Create, Read, Update, Delete) using
                                <strong> Axios</strong> with JSONPlaceholder, including an
                                <strong> optimistic update</strong> strategy.
                            </Card.Text>
                            <Button variant="success" as={Link} to="/CRUD">
                                Try the CRUD Page
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Gallery */}
                <Col>
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>🖼️ Photo Gallery & Optimization</Card.Title>
                            <Card.Text>
                                Fetches data from the Picsum Photos API and implements
                                <strong> pagination</strong> and native
                                <strong> lazy loading</strong> to demonstrate frontend performance optimization.
                            </Card.Text>
                            <Button variant="success" as={Link} to="/Gallery">
                                View the Gallery
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Redux */}
                <Col>
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>🧠 Redux State Management</Card.Title>
                            <Card.Text>
                                Implements a complete <strong>To-Do App</strong> using
                                <strong> Redux</strong> for global state management and connects React components
                                via <code>useSelector</code> and <code>useDispatch</code>.
                            </Card.Text>
                            <Button variant="success" as={Link} to="/ReduxTodo">
                                Explore the Redux App
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Contact Form */}
                <Col>
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>📞 Contact Form & Validation</Card.Title>
                            <Card.Text>
                                Demonstrates form data binding and strict client-side validation
                                (implemented with <strong>React Hook Form</strong>), including email format
                                validation and logic to prevent selecting past dates.
                            </Card.Text>
                            <Button variant="success" as={Link} to="/Contact">
                                Try the Contact Form
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}
