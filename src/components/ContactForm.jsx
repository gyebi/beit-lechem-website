import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const initialFormData = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setFormData(initialFormData);
      setStatus("sent");
    } catch (error) {
      console.error("Failed to send contact message:", error);
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </label>
      </div>

      <label>
        Project type
        <select
          name="projectType"
          value={formData.projectType}
          required
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="full-stack-development">Full-stack development</option>
          <option value="ui-ux-design">UI/UX design</option>
          <option value="agritech">Agritech solution</option>
          <option value="business-operations">Business operations</option>
        </select>
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows="5"
          placeholder="Share a few details about your idea or challenge"
          value={formData.message}
          required
          onChange={handleChange}
        ></textarea>
      </label>

      <button className="contact-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="contact-status">Message sent. We will get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="contact-status contact-status-error">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
