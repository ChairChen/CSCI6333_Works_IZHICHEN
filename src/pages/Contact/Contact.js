// •	Create a contact form with the following fields:
// o	Name (required).
// o	Email (required, must be a valid email).
// o	Date (input should be a calendar and implement a validation where it will not accept past dates – example – today is 12/10/2025, so it cannot accept dates past Dec 10th, 2025.)
// o	Message (optional).
// •	Use a controlled component to manage the form with state.
// •	Validate the form:
// o	Show error messages if the form is submitted with invalid data.
// •	Add a submit button:
// o	Log the form data to the console on submission if valid.
// o	Reset the form after successful submission.

import { useState } from "react";
import { useToast } from "../../context/ToastContext";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const getTodayDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today.toISOString().split('T')[0];
};

const INITIAL_FORM_STATE = {
    name: ""
    ,email: ""
    ,date: ""
    ,message: ""
};

export default function Contact() {
    const { addToast } = useToast();
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.date) {
            newErrors.date = "Date is required.";
        } else {
            const selected = new Date(formData.date);
            const today = new Date(getTodayDate());
            if (selected < today) {
            newErrors.date = "Cannot select a past date.";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const RequiredStar = () => (
        <span
            title="This is a required field"
            style={{ color: 'var(--bs-red', marginLeft: '0.25rem', cursor: 'help' }}
        >
            *
        </span>
    );

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prev) => ({
            ...prev
            ,[name]: value
        }));
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;
        setFormData(INITIAL_FORM_STATE);
        console.log(formData);
        addToast(
            `Dear ${formData.name} (${formData.date}), your message has been sent successfully.`,
            "success"
        );
        
        setFormData(INITIAL_FORM_STATE);
        setErrors({});
    };

    return (
        <Container>
            <h1 className="mb-4">Contact Page (React Controlled Form + Validation)</h1>
            
            <div className="border rounded p-4 flex-fill">
                <Form onSubmit={onSubmit}>
                    <h3 className="mb-4">Contact Us</h3>
                    <Form.Group as={Row} className="mb-3 align-items-center" controlId="formBasicName">
                        <Form.Label column sm={2}>Name <RequiredStar /></Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="text"
                                name="name" 
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-danger">{errors.name}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}  className="mb-3" controlId="formBasicEmail">
                        <Form.Label column sm={2}>Email <RequiredStar /></Form.Label>
                        <Col sm={8}>
                            <Form.Control 
                                type="text"
                                name="email" 
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-danger">{errors.email}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}  className="mb-3" controlId="formBasicDate">
                        <Form.Label column sm={2}>Date <RequiredStar /></Form.Label>
                        <Col sm={8}>
                            <Form.Control 
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            {errors.date && <p className="text-danger">{errors.date}</p>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}  className="mb-3" controlId="formBasicMessage">
                        <Form.Label column sm={2}>Message</Form.Label>
                        <Col sm={8}>
                            <Form.Control 
                                as="textarea"
                                rows={3}
                                name="message"
                                placeholder="Enter Message"
                                value={formData.message}
                                onChange={handleChange}
                                style={{ resize: 'vertical' }}
                            />
                            <Form.Text muted>
                                Maximum 5000 characters.
                            </Form.Text>
                            {errors.date && <p className="text-danger">{errors.message}</p>}
                        </Col>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" title="submit contact">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
}