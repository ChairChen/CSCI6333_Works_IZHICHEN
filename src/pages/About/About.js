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

import { Container, Accordion, Badge, Row, Col, Card } from 'react-bootstrap';

export default function About() {
    return (
        <Container className="my-5">
            <h1 className="mb-4 text-center">Project Tech Stack & Achievement Summary</h1>

            {/* 1. Core Tech Stack */}
            <Card className="shadow-sm mb-5">
                <Card.Header as="h2" className="bg-transparent border-0">
                    🌐 Core Tech Stack
                </Card.Header>
                <Card.Body>
                    <p className="lead">
                        This project adopts modern, industry-standard frontend technologies to ensure high performance,
                        scalability, and maintainability.
                    </p>

                    <Row xs={1} md={2} lg={3} className="g-3">
                        {/* Basics */}
                        <Col>
                            <Badge bg="primary" className="p-2">React / ReactDOM</Badge> Application foundation.
                        </Col>
                        <Col>
                            <Badge bg="primary" className="p-2">react-router-dom</Badge> Single Page Application (SPA) routing.
                        </Col>

                        {/* State & Data */}
                        <Col>
                            <Badge bg="danger" className="p-2">Redux / react-redux</Badge> Centralized state management (To-Do App).
                        </Col>
                        <Col>
                            <Badge bg="info" className="p-2">axios</Badge> Lightweight HTTP client for API requests.
                        </Col>
                        <Col>
                            <Badge bg="info" className="p-2">@apollo/client / graphql</Badge> GraphQL data fetching integration.
                        </Col>

                        {/* UI & Forms */}
                        <Col>
                            <Badge bg="success" className="p-2">react-bootstrap / bootstrap</Badge> UI/UX implementation and responsive design.
                        </Col>
                        <Col>
                            <Badge bg="warning" text="dark" className="p-2">react-hook-form</Badge> High-performance form validation and management.
                        </Col>

                        {/* Styling */}
                        <Col>
                            <Badge bg="secondary" className="p-2">CSS-in-JS (Styled / Emotion)</Badge> Component-level styling.
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* 2. Project Achievements */}
            <h2 className="mt-5 mb-4 text-center">✅ Project Achievements</h2>
            <Accordion defaultActiveKey="0" alwaysOpen>

                {/* Achievement 1 */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>🖼️ Photo Gallery: Performance Optimization & Pagination</Accordion.Header>
                    <Accordion.Body>
                        <p><strong>API Endpoint:</strong> <code>https://picsum.photos/v2/list</code></p>
                        <p>
                            <strong>Result:</strong> Successfully fetched images from a public API and displayed them
                            using a Bootstrap Grid layout. Implemented previous/next pagination with a limit of 6 images
                            per page. A key optimization was native image lazy loading using
                            <code> loading="lazy" </code>.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Achievement 2 */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>📝 CRUD & Contact Form: Real-world Data & Form Handling</Accordion.Header>
                    <Accordion.Body>
                        <p><strong>CRUD API:</strong> <code>https://jsonplaceholder.typicode.com/users</code></p>
                        <p>
                            <strong>Result:</strong> Implemented full CRUD operations (Create, Update, Delete) with an
                            optimistic UI update strategy. The Contact Form demonstrates strict field validation
                            (Name, Email, Date), including logic that prevents selecting past dates, along with a
                            Toast-based notification system.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Achievement 3 */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>🧠 Redux To-Do App: Global State Management</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Result:</strong> Built a Redux store with actions for adding, deleting, and
                            marking tasks as completed. Integrated React components with the store using
                            <code> useSelector </code> and <code> useDispatch </code> hooks.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Achievement 4 */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>🗺️ Routing & UX/UI</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Routing:</strong> Implemented page navigation within the portfolio
                            (Home, About, Redux Example, CRUD, Photo Gallery) using
                            <code> react-router-dom </code>.
                        </p>
                        <p>
                            <strong>Layout:</strong> Strictly followed the requirement of using only Bootstrap-based
                            styling. All UI components were built with <strong>React Bootstrap</strong>.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* References */}
                <Accordion.Item eventKey="4">
                    <Accordion.Header>📚 References</Accordion.Header>
                    <Accordion.Body>
                        <p><strong>Emoji:</strong> <code>https://www.dremendo.com/html-tutorial/html-emoji-codes</code></p>
                        <p><strong>Node.js CI/CD:</strong> <code>https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp</code></p>
                        <p><strong>GitHub Actions:</strong> <code>https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site</code></p>
                        <p><strong>Bootstrap:</strong> <code>https://react-bootstrap.netlify.app/docs/components/</code></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* 3. DevOps */}
            <Card className="shadow-sm mt-5">
                <Card.Header as="h2" className="bg-transparent border-0">
                    ⚙️ DevOps: Continuous Integration & Deployment
                </Card.Header>
                <Card.Body>
                    <p className="lead">
                        The final project is deployed on <strong>GitHub Pages</strong> and uses an automated
                        <strong> Node.js CI/CD workflow</strong> for continuous integration and deployment.
                    </p>
                    <p>
                        <strong>Key Technologies:</strong> GitHub Actions, Node.js CI/CD, GitHub Pages.
                        The project source code is maintained in the <code>final</code> branch.
                    </p>
                    <p>
                        Every push to the <code>final</code> branch automatically triggers the build, test,
                        and deployment pipeline, ensuring a streamlined and reliable development workflow.
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
}
