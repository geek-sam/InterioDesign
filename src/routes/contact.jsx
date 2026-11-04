import { useState, useEffect, useRef } from "react";
// import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const imageRef = useRef(null);

  // useEffect(() => {
  //   if (!imageRef.current) return;

  //   let x = 0;
  //   let y = 0;

  //   const handleMouseMove = (e) => {
  //     const rect = imageRef.current.getBoundingClientRect();

  //     x = e.clientX - rect.left;
  //     y = e.clientY - rect.top;

  //     // Update image position smoothly
  //     imageRef.current.style.transform = `translate(
  //       ${(x / rect.width - 0.5) * 30}px,
  //       ${(y / rect.height - 0.5) * 30}px
  //     )`;
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const payload = new FormData();

      // Web3Forms configuration
      payload.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

      payload.append("subject", "New Interior Design Project Inquiry");
      payload.append("from_name", "Interior Design Studio");

      // Contact form details
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("service", formData.service);
      payload.append("budget", formData.budget);
      payload.append("message", formData.message);

      // Spam protection
      payload.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit inquiry.");
      }

      setStatus("success");
      setFormData(initialForm);
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border-b border-black/20 bg-transparent py-4 text-base text-[#171717] outline-none placeholder:text-[#999] transition-colors focus:border-black";

  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#252525]">
      <section className="relative px-6 md:px-16 isolate min-h-[50vh] item-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imageRef}
            src="hero-bg.jpg"
            alt="Luxury contemporary interior design"
            className="h-full w-full object-cover scale-[1.25]"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* <div className="absolute w-full bottom-0 left-0 p-8 md:p-16">
          <div className="flex flex-col w-full justify-between gap-6 md:flex-row md:items-end">
            <h1 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#FAFAFA] md:text-5xl lg:text-6xl">
              Spaces that
              <br />
              <span className="">inspire living.</span>
            </h1>

            <p className="max-w-xs text-sm leading-7 text-[#FFF]">
              A collection of thoughtfully designed spaces, crafted around
              people, purpose and the beauty of everyday living.
            </p>
          </div>
        </div> */}
      </section>
      <section className="px-6 py-12 md:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          {/* Page Heading */}
          <div className="mb-16 lg:mb-24">
            <div className="mb-6 flex items-center gap-3 text-sm text-[#858580]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F15A32]" />
              Get in Touch
            </div>

            <h1 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] md:text-5xl lg:text-6xl">
              Let's create something
              <br />
              <span className="text-[#BDBDB7]">meaningful together.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#858580] md:text-lg">
              Tell us about your space, your ideas, and what you envision. We'd
              love to hear about your project.
            </p>
          </div>

          {/* Contact Layout */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Left: Contact Information */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between gap-12"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#858580]">
                  Contact Information
                </span>

                <div className="mt-9 space-y-8">
                  <div>
                    <p className="mb-2 text-sm text-[#858580]">Email</p>
                    <a
                      href="mailto:hello@studio.com"
                      className="text-lg font-medium text-[#171717] hover:opacity-60"
                    >
                      hello@studio.com
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-[#858580]">Phone</p>
                    <a
                      href="tel:+911145678900"
                      className="text-lg font-medium text-[#171717] hover:opacity-60"
                    >
                      +91 114 567 8900
                    </a>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-[#858580]">
                      Studio Location
                    </p>
                    <p className="text-lg font-medium text-[#171717]">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-black/10 pt-8">
                <p className="mb-5 text-sm text-[#858580]">Follow our work</p>

                <div className="flex flex-wrap gap-6 text-sm font-medium text-[#171717]">
                  <a href="#" className="hover:opacity-50">
                    Instagram ↗
                  </a>
                  <a href="#" className="hover:opacity-50">
                    Pinterest ↗
                  </a>
                  <a href="#" className="hover:opacity-50">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="mb-10">
                <span className="text-xs uppercase tracking-[0.2em] text-[#858580]">
                  Project Inquiry / 01
                </span>

                <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#171717] md:text-4xl">
                  Tell us about your project.
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-9">
                {/* Name and Email */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm text-[#555]">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm text-[#555]">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Service */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-sm text-[#555]">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="text-sm text-[#555]">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Interior Design</option>
                      <option>Architecture</option>
                      <option>Space Planning</option>
                      <option>Renovation</option>
                      <option>Turnkey Solutions</option>
                      <option>Commercial Design</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="text-sm text-[#555]">
                    Estimated Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>
                      Select your budget
                    </option>
                    <option>Below ₹5 Lakhs</option>
                    <option>₹5 – 10 Lakhs</option>
                    <option>₹10 – 25 Lakhs</option>
                    <option>₹25 – 50 Lakhs</option>
                    <option>₹50 Lakhs – 1 Crore</option>
                    <option>Above ₹1 Crore</option>
                    <option>Not Decided Yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-sm text-[#555]">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share your ideas, requirements, location and project details..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>

                {/* Submission Status */}
                {status === "success" && (
                  <p role="status" className="text-sm text-green-700">
                    Your inquiry has been submitted successfully. We'll be in
                    touch soon.
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex w-full items-center justify-between bg-[#171717] px-7 py-5 text-white transition-colors hover:bg-[#333] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="text-sm font-medium">
                    {status === "sending"
                      ? "Sending Inquiry..."
                      : "Submit Inquiry"}
                  </span>

                  <span className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                <p className="text-xs leading-5 text-[#858580]">
                  By submitting this form, you agree to be contacted regarding
                  your project inquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
