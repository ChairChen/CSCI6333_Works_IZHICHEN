import ContactForm from "../components/Forms/ContactForm";

export default function ContactPage({ basePath }) {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Contact Us</h1>
            <p>Please fill out the form below. All fields with * are required.</p>
            <ContactForm basePath={basePath}/>
        </div>
    );
}