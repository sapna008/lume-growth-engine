import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Handshake, User, Phone, Mail, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { saveQuickLead } from "@/lib/leadStore";

const hiddenRoutePrefixes = ["/book-demo", "/demo", "/trial", "/contact", "/admin"];
const SHOWN_THIS_SESSION_KEY = "lume_quick_inquiry_shown";
const SHOW_DELAY_MS = 6000;

export function QuickInquiryModal() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(SHOWN_THIS_SESSION_KEY)) return;
    const shouldHide = hiddenRoutePrefixes.some((prefix) => pathname.startsWith(prefix));
    if (shouldHide) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SHOWN_THIS_SESSION_KEY, "1");
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
    // Only ever arms once per mount; route changes shouldn't restart the delay.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      await saveQuickLead(formData);
    } catch (error) {
      console.error("Failed to save quick inquiry lead:", error);
      setErrorMessage(t("quickInquiry.errorMessage"));
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);

    try {
      await emailjs.send(
        "service_xiq2pva",
        "template_1bnulym",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: "",
          date: "",
          time: "",
        },
        "IelFQbwyOKxBpHWFm"
      );
    } catch (error) {
      // Lead is already captured; the notification email is best-effort only.
      console.error("Failed to send quick inquiry notification email via EmailJS:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md rounded-2xl p-8 text-center sm:p-10">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[rgb(var(--brand-rgb)/0.1)]">
          <Handshake className="h-9 w-9" style={{ color: "var(--brand)" }} />
        </div>

        <DialogHeader className="items-center text-center">
          <DialogTitle className="text-2xl font-display font-extrabold tracking-tight sm:text-3xl" style={{ color: "#1b181f" }}>
            {t("quickInquiry.title")}
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            {t("quickInquiry.subtitle")}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-left text-green-700">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{t("quickInquiry.successTitle")}</h3>
                <p className="text-sm">{t("quickInquiry.successMessage")}</p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
            {errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {errorMessage}
              </div>
            )}

            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                required
                aria-label={t("quickInquiry.namePlaceholder")}
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={t("quickInquiry.namePlaceholder")}
                className="h-12 rounded-xl pl-11 pr-3"
              />
            </div>

            <div className="relative">
              <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="tel"
                required
                aria-label={t("quickInquiry.phonePlaceholder")}
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder={t("quickInquiry.phonePlaceholder")}
                className="h-12 rounded-xl pl-11 pr-3"
              />
            </div>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                aria-label={t("quickInquiry.emailPlaceholder")}
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder={t("quickInquiry.emailPlaceholder")}
                className="h-12 rounded-xl pl-11 pr-3"
              />
            </div>

            <Button
              type="submit"
              variant="cta"
              className="h-12 w-full gap-2 rounded-xl text-base font-bold transition-all duration-200 active:scale-95"
              disabled={loading || !formData.name || !formData.phone}
            >
              {loading ? "Sending..." : t("quickInquiry.submit")}
              <ArrowRight className="h-4 w-4" />
            </Button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" />
              {t("quickInquiry.disclaimer")}
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
