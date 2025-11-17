import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const INITIAL_FORM_STATE = {
    fullname: ""
    ,email: ""
    ,phone: ""
    ,subject: ""
    ,message: ""
    ,contactMethod: "Email"
    ,bestTime: ""
    ,agree: false // checkbox/boolean value
};

const REF_KEYS = ["fullname", "email", "phone", "message", "agree"];

export default function ContactForm({ basePath }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const inputRefs = {
        fullname: useRef(null)
        ,email: useRef(null)
        ,phone: useRef(null)
        ,message: useRef(null)
        ,agree: useRef(null)
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev
            ,[name]: type === "checkbox" ? checked : value
        }));
    };

    const validate = () => {
        const newErrors = {};

        // Name
        if (!formData.fullname.trim()) {
        newErrors.fullname = "Full name is required.";
        } else if (formData.fullname.trim().length < 2 || formData.fullname.trim().length > 50) {
            newErrors.fullname = "Name must be between 2 and 50 characters.";
        }

        // Email
        if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Invalid email format.";
        }

        // Phone
        if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone must be exactly 10 digits.";
        }

        // Message
        if (!formData.message.trim()) {
        newErrors.message = "Message is required.";
        } else if (formData.message.trim().length < 20) {
        newErrors.message = "Message must be at least 20 characters.";
        }

        // Terms checkbox
        if (!formData.agree) {
        newErrors.agree = "You must agree to the terms.";
        }

        setErrors(newErrors);
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            const firstErrorField = REF_KEYS.find(key => validationErrors[key]);
            if (firstErrorField && inputRefs[firstErrorField].current) {
                inputRefs[firstErrorField].current.focus();
            }
            return;
        }

        navigate((basePath+"/thank-you"), {
            state: { name: formData.fullname }
        });

        setFormData(INITIAL_FORM_STATE);
        setErrors({});
        setSuccess(true);
    };

    // useMemo
    // const isFormValid = useMemo(() => {
    //     return (
    //         formData.fullname.trim().length >= 2 &&
    //         /^\S+@\S+\.\S+$/.test(formData.email) &&
    //         (formData.phone.trim() === "" || /^\d{10}$/.test(formData.phone)) &&
    //         formData.message.trim().length >= 20 &&
    //         formData.agree === true
    //         );
    //     }, [formData]);

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
        {/* success banner */}
        {success && (
            <div style={{ padding: "1rem", background: "#e6ffe6", border: "1px solid #66cc66", marginBottom: "1rem" }}>
            Form submitted successfully!
            </div>
        )}

        {/* Full Name */}
        <div style={{ marginBottom: "1rem" }}>
            <label>Full Name *</label>
            <input
            ref={inputRefs.fullname}
            name="fullname" // name for onChange reuse
            type="text"
            value={formData.fullname}
            onChange={handleChange} // handleChange
            style={{ display: "block", width: "300px" }}
            />
            {errors.fullname && <p style={{ color: "red" }}>{errors.fullname}</p>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "1rem" }}>
            <label>Email *</label>
            <input
            ref={inputRefs.email}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", width: "300px" }}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        
        {/* Phone */}
        <div style={{ marginBottom: "1rem" }}>
            <label>Phone (optional)</label>
            <input
            ref={inputRefs.phone}
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            style={{ display: "block", width: "300px" }}
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        {/* Subject */}
        <div style={{ marginBottom: "1rem" }}>
            <label>Subject</label>
            <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{ display: "block", width: "300px" }}
            >
            <option>Support</option>
            <option>Sales</option>
            <option>Feedback</option>
            <option>Other</option>
            </select>
        </div>

        {/* Message */}
        <div style={{ marginBottom: "1rem" }}>
            <label>Message *</label>
            <textarea
            ref={inputRefs.message}
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ display: "block", width: "300px", height: "100px" }}
            />
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>

        {/* Preferred Contact */}
        <div style={{ marginBottom: "1rem" }}>
            <p>Preferred Contact Method</p>
            <label>
            <input
                type="radio"
                name="contactMethod" 
                value="Email"
                checked={formData.contactMethod === "Email"}
                onChange={handleChange}
            />
            Email
            </label>
            <label style={{ marginLeft: "1rem" }}>
            <input
                type="radio"
                name="contactMethod"
                value="Phone"
                checked={formData.contactMethod === "Phone"}
                onChange={handleChange}
            />
            Phone
            </label>
        </div>
        
        {/* Best Time */}
        <div style={{ marginBottom: "1rem" }}>
            <label>Best Time to Reach You (optional)</label>
            <input
            name="bestTime"
            type="time"
            value={formData.bestTime}
            onChange={handleChange}
            style={{ display: "block", width: "150px" }}
            />
        </div>

        {/* Agree to Terms */}
        <div style={{ marginBottom: "1rem" }}>
            <label>
            <input
                ref={inputRefs.agree}
                name="agree"
                type="checkbox"
                checked={formData.agree}
                onChange={handleChange}
            />
            &nbsp;I agree to the Terms *
            </label>
            {errors.agree && <p style={{ color: "red" }}>{errors.agree}</p>}
        </div>

        <button type="submit" >
            {/* disabled={!isFormValid}> */}
            Submit
        </button>
        </form>
    );
}