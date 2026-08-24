import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import BrandThemeLoader from "@/components/BrandThemeLoader";
import ProtectedRoute from "@/components/ProtectedRoute";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { QuickInquiryModal } from "@/components/layout/QuickInquiryModal";
import Index from "./pages/Index";
import ForRetailers from "./pages/ForRetailers";
import Products from "./pages/Products";
import ProductsMpos from "./pages/ProductsMpos";
import Solutions from "./pages/Solutions";
import Features from "./pages/Features";
import ReviewFeature from "./pages/features/ReviewFeature";
import ReferralFeature from "./pages/features/ReferralFeature";
import DigitalBillsFeature from "./pages/features/DigitalBillsFeature";
import LoyaltyFeature from "./pages/features/LoyaltyFeature";
import PromotionFeature from "./pages/features/PromotionFeature";
import AnalyticsFeature from "./pages/features/AnalyticsFeature";
import SurveysFeature from "./pages/features/SurveysFeature";
import Resources from "./pages/Resources";
import Guides from "./pages/resources/Guides";
import GuideDetail from "./pages/resources/GuideDetail";
import CaseStudies from "./pages/resources/CaseStudies";
import Blog from "./pages/resources/Blog";
import BlogPost from "./pages/resources/BlogPost";
import Pricing from "./pages/Pricing";
import Financials from "./pages/Financials";
import Help from "./pages/Help";
import GettingStarted from "./pages/GettingStarted";
import BillingGuide from "./pages/BillingGuide";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import About from "./pages/company/About";
import Startup from "./pages/Startup";
import Careers from "./pages/company/Careers";
import NotFound from "./pages/NotFound";
import BookDemo from "./pages/BookDemo";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import IndustryPageRoute from "./pages/industries/IndustryPageRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <BrandThemeLoader />
            <ScrollToTop />
            <WhatsAppFab />
            <QuickInquiryModal />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/for-retailers" element={<ForRetailers />} />
              <Route path="/industries" element={<Navigate to="/industries/fashion" replace />} />
              <Route path="/industries/:slug" element={<IndustryPageRoute />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/mpos" element={<ProductsMpos />} />
            <Route path="/products/:id" element={<Products />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:id" element={<Solutions />} />
              <Route path="/features" element={<Features />} />
              <Route path="/features/reviews" element={<ReviewFeature />} />
              <Route path="/features/referrals" element={<ReferralFeature />} />
              <Route path="/features/digital-bills" element={<DigitalBillsFeature />} />
            <Route path="/features/loyalty" element={<LoyaltyFeature />} />
            <Route path="/features/promotion" element={<PromotionFeature />} />
            <Route path="/features/analytics" element={<AnalyticsFeature />} />
            <Route path="/features/surveys" element={<SurveysFeature />} />
            <Route path="/features/:id" element={<Features />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/guides" element={<Guides />} />
              <Route path="/resources/case-studies" element={<CaseStudies />} />
              <Route path="/resources/blog" element={<Blog />} />
              <Route path="/resources/blog/:slug" element={<BlogPost />} />
              <Route path="/resources/:id" element={<Resources />} />
              <Route path="/guides/:slug" element={<GuideDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/financials" element={<Financials />} />
              <Route path="/help" element={<Help />} />
              <Route path="/help/getting-started" element={<GettingStarted />} />
              <Route path="/help/billing-guide" element={<BillingGuide />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/company/about" element={<About />} />
              <Route path="/company/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-conditions" element={<Terms />} />
              {/* Shorter legal URLs for reviewers */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* Startup overview page for Google reviewers */}
              <Route path="/startup" element={<Startup />} />
              <Route path="/trial" element={<BookDemo />} />
              <Route path="/demo" element={<BookDemo />} />
              <Route path="/book-demo" element={<BookDemo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
