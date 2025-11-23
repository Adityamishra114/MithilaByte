import { Routes, Route, useNavigate, Navigate } from "react-router-dom"; // Import Navigate here
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aboutus from "./pages/Aboutus";
import BlogList from "./components/BlogList";
import BlogDetail from "./pages/BlogDetail";
import CheckoutPage from "./components/CheckoutPage";
import { useAuth } from "./components/authContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import { useEffect } from "react";
import ContactUs from "./pages/ContactUs";
import Solutions10 from "./components/ServicesAbout/Solutions10";
import Solutions9 from "./components/ServicesAbout/Solutions9";
import Solutions8 from "./components/ServicesAbout/Solutions8";
import Solutions7 from "./components/ServicesAbout/Solutions7";
import Solutions5 from "./components/ServicesAbout/Solutions5";
import Solutions6 from "./components/ServicesAbout/Solutions6";
import Solutions4 from "./components/ServicesAbout/Solutions4";
import Solutions3 from "./components/ServicesAbout/Solutions3";
import Solutions2 from "./components/ServicesAbout/Solutions2";

const App = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate();
  const isMinimalLayout = location.pathname === "/home";
  useEffect(() => {
    if (user && location.pathname === "/login") {
      navigate("/admin-dashboard"); 
    }
  }, [user, navigate]);

  return (
    <>
      {!isMinimalLayout && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/blog" element={<BlogList />} />
        {/* <Route path="/services/ai-video-marketing" element={<Solutions10 />} />
        <Route path="/services/google-my-business" element={<Solutions9 />} />
        <Route path="/services/graphic-design" element={<Solutions8 />} />
        <Route path="/services/website-design-development" element={<Solutions7 />} />
        <Route path="/services/video-editing" element={<Solutions6 />} />
        <Route path="/services/social-media-marketing" element={<Solutions5 />} />
        <Route path="/services/crm-solutions" element={<Solutions4 />} />
        <Route path="/services/seo-digital-marketing" element={<Solutions3 />} />
        <Route path="/services/mobile-app-development" element={<Solutions2 />} /> */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>

      {!isMinimalLayout && <Footer />}
      {!isMinimalLayout && <ScrollToTopButton />}
      <ToastContainer />
    </>
  );
};

export default App;
