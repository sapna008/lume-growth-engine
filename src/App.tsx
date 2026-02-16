import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import { FloatingYouTubeShorts } from "@/components/FloatingYouTubeShorts";
import Index from "./pages/Index";
import ForRetailers from "./pages/ForRetailers";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Features from "./pages/Features";
import Resources from "./pages/Resources";
import Guides from "./pages/resources/Guides";
import CaseStudies from "./pages/resources/CaseStudies";
import Pricing from "./pages/Pricing";
import Help from "./pages/Help";
import GettingStarted from "./pages/GettingStarted";
import BillingGuide from "./pages/BillingGuide";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";
import NotFound from "./pages/NotFound";
import BookDemo from "./pages/BookDemo";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingYouTubeShorts />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/for-retailers" element={<ForRetailers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:id" element={<Solutions />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features/:id" element={<Features />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/guides" element={<Guides />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/:id" element={<Resources />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/help" element={<Help />} />
            <Route path="/help/getting-started" element={<GettingStarted />} />
            <Route path="/help/billing-guide" element={<BillingGuide />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/company/about" element={<About />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/trial" element={<BookDemo />} />
            <Route path="/demo" element={<BookDemo />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
