import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    emailjs
      .send(
        "service_kd8eon7", // 🔹 Your EmailJS service ID
        "template_qw2u6op", // 🔹 Your EmailJS template ID
        formData,
        "USlFRmK_yPHdLo-8d" // 🔹 Your EmailJS public key
      )
      .then(
        () => {
          setFormData({ user_name: "", user_email: "", message: "" });
          setStatus({ loading: false, success: true, error: false });

          // Hide success message after 3s
          setTimeout(
            () => setStatus({ loading: false, success: false, error: false }),
            3000
          );
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus({ loading: false, success: false, error: true });
        }
      );
  };

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#0a192f] text-white" id="contact">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          Contact Me
        </h2>

        {/* Success Message */}
        {status.success && (
          <div className="mb-6 p-4 bg-green-600 text-white rounded-md shadow-md animate-fade-in">
            ✅ Your message has been sent!
          </div>
        )}

        {/* Error Message */}
        {status.error && (
          <div className="mb-6 p-4 bg-red-600 text-white rounded-md shadow-md animate-fade-in">
            ❌ Something went wrong. Please try again later.
          </div>
        )}

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`flex flex-col gap-6 transition-all duration-700 ${
            formInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#64ffda] focus:ring-2 focus:ring-[#64ffda] transition"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#64ffda] focus:ring-2 focus:ring-[#64ffda] transition"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#64ffda] focus:ring-2 focus:ring-[#64ffda] transition"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className={`px-6 py-3 font-semibold rounded-md transition flex justify-center items-center ${
              status.loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#64ffda] text-[#0a192f] hover:bg-[#52e0c4]"
            }`}
          >
            {status.loading ? (
              <span className="w-5 h-5 border-2 border-t-transparent border-[#0a192f] rounded-full animate-spin"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
