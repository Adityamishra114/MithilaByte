import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const serviceOptions = [
  "Website Designing & Development",
  "Customized CRM Solutions",
  "App Development",
  "Graphic Design",
  "Video Editing",
  "Social Media Marketing",
  "SEO & Digital Marketing",
  "Google My Business Listing",
  "AI Video Marketing",
];

const Office = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.service) {
      toast.error("Please select a service!");
      return;
    }

    const emailPayload = {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      email: formData.email,
      message: formData.message,
      subject: `New Service Inquiry - ${formData.service}`,
    };

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailPayload
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        service: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("❌ Failed to send email. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f7f4eb] py-10 px-4 font-publicSans mt-[calc(var(--header-height,80px))]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ✅ Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#333] mb-6">
            Let's connect with us
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone (10 digits)"
              pattern="^[0-9]{10}$"
              maxLength={10}
              inputMode="numeric"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
            >
              <option value="">Select Service</option>
              {serviceOptions.map((srv, i) => (
                <option key={i} value={srv}>
                  {srv}
                </option>
              ))}
            </select>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <button
              type="submit"
              disabled={loading}
              className={`bg-[#0076FF] text-white font-semibold px-6 py-3 rounded-md w-full transition-all ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Apply Now"}
            </button>
          </form>
        </div>
        <div className="w-full h-[400px] md:h-auto rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            height="100%"
            loading="lazy"
            allowFullScreen
            className="w-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Office;
