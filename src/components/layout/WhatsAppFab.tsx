import { useLocation } from "react-router-dom";

const hiddenRoutePrefixes = ["/admin"];

const WHATSAPP_NUMBER = "919326601463";
const WHATSAPP_MESSAGE = "Hi Lume! I'd like to know more about your platform for my store.";

export function WhatsAppFab() {
  const { pathname } = useLocation();
  const shouldHide = hiddenRoutePrefixes.some((prefix) => pathname.startsWith(prefix));

  if (shouldHide) {
    return null;
  }

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20BD5A] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="white" aria-hidden="true">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.31.638 4.474 1.745 6.32L4 29l7.86-1.71A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.6a9.55 9.55 0 0 1-4.87-1.33l-.35-.207-4.66 1.014 1.04-4.53-.23-.365A9.55 9.55 0 1 1 25.55 15a9.56 9.56 0 0 1-9.546 9.6Zm5.27-7.17c-.29-.145-1.71-.845-1.975-.94-.265-.097-.458-.145-.65.145-.192.29-.744.94-.912 1.133-.168.193-.336.217-.626.073-.29-.145-1.223-.45-2.33-1.435-.86-.767-1.44-1.715-1.61-2.005-.168-.29-.018-.447.127-.59.13-.13.29-.337.435-.505.145-.168.193-.29.29-.483.097-.193.048-.362-.024-.507-.073-.145-.65-1.567-.89-2.147-.235-.565-.474-.489-.65-.498l-.554-.01c-.193 0-.507.073-.773.363-.265.29-1.01.987-1.01 2.408 0 1.42 1.034 2.793 1.178 2.986.145.193 2.037 3.11 4.936 4.362.69.298 1.228.476 1.647.61.692.22 1.322.189 1.82.115.555-.083 1.71-.699 1.952-1.374.242-.674.242-1.252.17-1.373-.073-.121-.265-.194-.554-.34Z" />
      </svg>
    </a>
  );
}
