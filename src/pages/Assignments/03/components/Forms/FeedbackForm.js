import { useState } from "react";
import { useForm } from "react-hook-form";

const ERROR_STYLE = { color: "red", fontSize: "0.9rem", marginTop: "0.25rem" };

export default function FeedbackForm() {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors }
  } = useForm();
  
  const [result, setResult] = useState(null);

  const onSubmit = (data) => {
    setResult(data);
    reset();
  };

  const ErrorMessage = ({ name }) => (
    errors[name] && <p style={ERROR_STYLE}>{errors[name].message}</p>
  );

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Nickname (Minimal Validation: optional) */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Nickname</label>
          <input
            type="text"
            {...register("nickname", { 
              maxLength: { value: 30, message: "Nickname must be under 30 characters." }
              ,required: "Nickname is required for feedback."
            })}
            style={{ display: "block", width: "300px" }}
          />
          <ErrorMessage name="nickname" /> 
        </div>

        {/* Rating (Required Validation) */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Rating (1 - 5) *</label>
          <select
            {...register("rating", { 
              required: "Rating is required for feedback."
            })}
            style={{ display: "block", width: "150px" }}
          >
            <option value="">Select...</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          <ErrorMessage name="rating" />
        </div>

        {/* Recommend (Boolean) */}
        <div style={{ marginBottom: "1rem" }}>
          <label>
            <input type="checkbox" {...register("recommend")} />
            &nbsp;Would recommend
          </label>
        </div>

        {/* Comments (Min Length 5) */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Comments</label>
          <textarea
            {...register("comments", {
              minLength: { value: 5, message: "Comments should be at least 5 characters." }
            })}
            style={{ display: "block", width: "300px", height: "100px" }}
          />
          <ErrorMessage name="comments" />
        </div>

        <button type="submit">Submit Feedback</button>
      </form>

      {/* Summary Card */}
      {result && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            background: "#f7f7f7",
            width: "350px",
          }}
        >
          <h3>Feedback Summary</h3>
          <p>
            <strong>Nickname:</strong> {result.nickname || "(none)"}
          </p>
          <p>
            <strong>Rating:</strong> {result.rating}
          </p>
          <p>
            <strong>Would Recommend:</strong>{" "}
            {result.recommend ? "Yes" : "No"}
          </p>
          <p>
            <strong>Comments:</strong> {result.comments || "(none)"}
          </p>
        </div>
      )}
    </div>
  );
}