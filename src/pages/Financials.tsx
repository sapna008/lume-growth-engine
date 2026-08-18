import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

export default function Financials() {
  const { t } = useLanguage();
  useSEO(
    "Financials",
    "Financial insights and reporting for your retail business with Lume."
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1" role="main">
        <section
          className="flex items-center justify-center py-32 md:py-40"
          aria-labelledby="financials-heading"
        >
          <div className="site-container text-center">
            <h1
              id="financials-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              {t("financials.title")}
            </h1>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
