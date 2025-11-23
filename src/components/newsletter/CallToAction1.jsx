import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { images212 } from "../../../data";
import "./CallToAction1.css";

const CallToAction1 = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    } else {
      console.error("❌ EMAILJS PUBLIC KEY missing in .env");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    const payload = {
      name: form.name,
      email: form.email,
      subject: "Website CTA Lead - New Contact",
      message: `New lead from CTA section:\n\nName: ${form.name}\nEmail: ${form.email}`,
    };

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload
      );

      toast.success("Thank you! We will contact you soon.");
      setForm({ name: "", email: "" });

    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      toast.error("Failed to send. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="call-to-action ptb-70"
      style={{ background: "url('/assets/cta-bg.jpg') no-repeat center center / cover" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center text-white mb-5 font-publicSans">
              <h2 className="text-white h2-outs font-publicSans">Get in touch with us today</h2>
              <p className="lead">
                We’re committed to building long-term relationships and delivering exceptional service.
                Let’s grow together.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Form */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <form className="analysis-form-wrap text-center row" onSubmit={handleSubmit}>
              
              <div className="col-lg-4 col-md-12 p-0">
                <div className="form-group analysis-form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-12 p-0">
                <div className="form-group analysis-form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* ✅ Same button style as input, working loader */}
              <div className="col-lg-4 col-md-12 p-0">
                <div className="form-group">
                  <input
                    type="submit"
                    className={`btn btn-primary w-100 ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
                    value={loading ? "Sending..." : "Send Now"}
                    disabled={loading}
                  />
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="cta-image hidden md:block lg:block">
        <img src={images212.prof1} width="200" className="img-left" alt="cta" />
        <img src={images212.mike1} width="200" className="img-right" alt="cta" />
      </div>
    </section>
  );
};

export default CallToAction1;
