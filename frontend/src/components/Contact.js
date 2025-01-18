import React, { useState } from "react";
import axios from "axios";
import '../styles/global.css'; // Import the CSS file for animations

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", contactNumber: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="p-8 bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300 scroll-mt-16"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded dark:bg-darkCard dark:text-lightText"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded dark:bg-darkCard dark:text-lightText"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Contact Number (optional)"
            className="w-full p-2 border rounded dark:bg-darkCard dark:text-lightText"
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded dark:bg-darkCard dark:text-lightText"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
            Send
          </button>
        </form>

        {success && (
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">Thank You!</h3>
            <div className="relative inline-block mt-2">
              <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-explode"></div>
              <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-explode delay-100"></div>
              <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-explode delay-200"></div>
              <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-explode delay-300"></div>
              <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-explode delay-400"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;