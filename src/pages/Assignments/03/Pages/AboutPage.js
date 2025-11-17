import NY from '../../../../assets/images/NY.JPG'

export default function AboutPage() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>About Us</h1>

            {/* Section 1 */}
            <section style={{ marginTop: "1.5rem" }}>
                <h2>Who We Are</h2>
                <p>
                We are a small demo team focused on building a mini React application
                to demonstrate routing, controlled forms, uncontrolled forms, and 
                nested navigation. This project is part of Assignment 04.
                </p>
            </section>

            {/* Section 2 */}
            <section style={{ marginTop: "1.5rem" }}>
                <h2>Our Mission</h2>
                <p>
                Our mission is to learn React concepts through hands-on practice and
                to build clean, modular, and scalable UI components.
                </p>
            </section>

            {/* Section 3 */}
            <section style={{ marginTop: "1.5rem" }}>
                <h2>Tech Stack</h2>
                <ul>
                <li>React 18 + Hooks</li>
                <li>React Router v6</li>
                <li>JavaScript (ES2023)</li>
                </ul>
            </section>

            {/* Image */}
            <section style={{ marginTop: "1.5rem" }}>
                <h2>Our Workspace</h2>
                <img
                src={NY}
                alt="New York"
                style={{ borderRadius: "8px", marginTop: "0.5rem", height: "200px", width: "200px" }}
                />
            </section>
        </div>
    );
}