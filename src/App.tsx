import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ForRetailers from "./pages/ForRetailers";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import About from "./pages/company/About";
import Contact from "./pages/company/Contact";
import Careers from "./pages/company/Careers";
import Guides from "./pages/resources/Guides";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/for-retailers" element={<ForRetailers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:id" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/resources/case-studies" element={<Guides />} />
          <Route path="/resources/blog" element={<Guides />} />
          <Route path="/trial" element={<ForRetailers />} />
          <Route path="/demo" element={<ForRetailers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
