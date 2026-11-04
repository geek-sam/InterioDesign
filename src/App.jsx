import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import { ThemeProvider } from "./components/site/ThemeProvider";
// import { ScrollReveal } from "./components/site/ScrollReveal";
import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";
// import { PageLoader } from "./components/site/PageLoader";

import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import ProjectsPage from "./routes/projects";
import ServicesPage from "./routes/services.index";
import ServiceDetailPage from "./routes/services.$slug";
// import WorkPage from "./routes/work";
// import WorkDetailPage from "./routes/work.$slug";
import BlogPage from "./routes/blog.jsx";
import ContactPage from "./routes/contact";
// import PrivacyPage from "./routes/privacy";
import TermsPage from "./routes/terms";
import NotFoundPage from "./routes/404";
import GalleryPage from "./routes/gallery";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* <PageLoader />
        <ScrollReveal /> */}
      <Header />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
