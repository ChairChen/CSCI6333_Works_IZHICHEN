import { useLocation } from "react-router-dom";

export default function ThankYouPage() {
  const location = useLocation();
  const name = location.state?.name || "Guest";

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Thank You!</h1>
      <p>Thanks for contacting us, <strong>{name}</strong>!</p>
      <p>Your message has been received.</p>
    </div>
  );
}