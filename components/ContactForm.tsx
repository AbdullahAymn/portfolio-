"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-black shadow-lg rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

      {sent && (
        <p className="bg-green-100 text-green-700 p-3 rounded">
          Your message has been sent!
        </p>
      )}

      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Your Message"
        className="w-full p-3 h-32 border rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white w-full py-3 rounded-lg"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
