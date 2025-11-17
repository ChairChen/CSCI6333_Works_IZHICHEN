import FeedbackForm from "../components/Forms/FeedbackForm";

export default function FeedbackPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Feedback</h1>
      <p>Please share your feedback below.</p>
      <FeedbackForm />
    </div>
  );
}
