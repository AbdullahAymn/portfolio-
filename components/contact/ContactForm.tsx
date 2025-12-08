"use client";
import { useState } from "react";
import Card from "../Card";
import { Loader, Mail, MapPin, Phone, Send } from "lucide-react";
import Label from "./Label";
import Sent from "./Sent";

type error = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<error>({});

  const validate = () => {
    const newError: error = {};

    // Name validation: cannot be empty, and minimum 2 characters
    if (!name.trim()) {
      newError.name = "Please enter your name.";
    } else if (name.trim().length < 2) {
      newError.name = "Name should be at least 2 characters.";
    }

    // Email validation: cannot be empty, must match email regex
    if (!email.trim()) {
      newError.email = "Please enter your email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim())) {
      newError.email = "Please enter a valid email address.";
    }

    // Message validation: cannot be empty, must have at least 10 chars
    if (!message.trim()) {
      newError.message = "Please enter your message.";
    } else if (message.trim().length < 10) {
      newError.message = "Message should be at least 10 characters.";
    }

    setErrors(newError);

    // Return true if errors exist, false otherwise
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
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


  const closePopup = () => {
    setSent(false);
  };
  return (
    <Card>
      <div className="flex flex-wrap gap-4">
        {/* Contact Side Section */}
        <div className="flex flex-col justify-between gap-2 w-full md:max-w-[400px]">
          <section
            onClick={() =>
              window.open("mailto:abdullahayman40474@gmail.com", "_blank")
            }
            title="Send Email"
            className="cursor-pointer p-4 rounded-2xl shadow-2xl shadow-white/10 border text-white flex items-center !justify-start gap-2"
          >
            <Mail size={36} className="text-[#26a77d]" />
            <p className="text-xl"> abdullahayman40474@gmail.com</p>
          </section>
          <section
            onClick={() => window.open("tel:+201015737609")}
            title="Call"
            className="cursor-pointer p-4 rounded-2xl shadow-2xl shadow-white/10 border text-white flex items-center !justify-start gap-2"
          >
            <Phone size={36} className="text-[#26a77d]" />
            <p className="text-xl"> +20 101 573 7609</p>
          </section>
          <section
            title="Address"
            className="cursor-pointer p-4 rounded-2xl shadow-2xl shadow-white/10 border text-white flex items-center !justify-start gap-2"
          >
            <MapPin size={36} className="text-[#26a77d]" />
            <p className="text-xl">Egypt</p>
          </section>
        </div>

        {/* Contact Form */}
        <div className="flex-1 p-4 rounded-2xl shadow-2xl shadow-white/10 border">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="relative group">
              <input
                type="text"
                id="name"
                className={`peer w-full border  rounded-md bg-transparent px-3 pt-3 pb-2 focus:outline-none ${
                  errors.name ? "border-red-600" : "border-gray-300 "
                } focus:border-[#26a77d] transition text-gray-900 dark:text-gray-200 shadow-sm`}
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
              <Label labelFor="name" value={name} text=" Your Name" />
              <p>{errors.name}</p>
            </div>
            <div className="relative  group">
              <input
                type="email"
                id="email"
                className={`peer w-full border  rounded-md bg-transparent px-3 pt-3 pb-2 focus:outline-none ${
                  errors.email ? "border-red-600" : "border-gray-300 "
                } focus:border-[#26a77d] transition text-gray-900 dark:text-gray-200 shadow-sm`}
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <Label labelFor="email" value={email} text="Your Email" />
              <p>{errors.email}</p>
            </div>
            <div className="relative  group md:col-span-2">
              <textarea
                id="message"
                className={`peer w-full border  rounded-md bg-transparent px-3 pt-3 pb-2 focus:outline-none ${
                  errors.message ? "border-red-600" : "border-gray-300 "
                } focus:border-[#26a77d] transition text-gray-900 dark:text-gray-200 shadow-sm`}
                value={message}
                autoComplete="off"
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder=" "
                disabled={loading}
                rows={6}
              />
              <Label labelFor="message" value={message} text="Your Message" />
              <p>{errors.message}</p>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="md:col-span-2 hover:bg-[#26a77d] transition-all ease-in-out duration-300
               cursor-pointer p-4 rounded-2xl shadow-2xl shadow-white/10 border-2 text-white 
               flex items-center !justify-center gap-4 text-xl"
            >
              {loading ? (
                <>
                  Sending <Loader />
                </>
              ) : (
                <>
                  Send Message <Send />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      {/* Animated Success Popup */}

      <Sent isOpened={sent} onClose={closePopup} />
    </Card>
  );
}
