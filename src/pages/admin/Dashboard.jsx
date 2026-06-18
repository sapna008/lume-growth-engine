import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "sonner";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import auth from "@/firebase";
import { useAuth } from "@/context/AuthContext";
import { getHeroContentFromDb, saveHeroContentToDb } from "@/lib/contentStore";
import { applyBrandColor } from "@/lib/brandTheme";
import apeirosLogo from "@/assets/apeiros-logo.png";

const PIE_COLORS = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#3b82f6"];

const NAV_ITEMS = [
  {
    id: "analytics",
    label: "Analytics",
    icon: (
      <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l5-5 4 4 5-6 4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
      </svg>
    ),
  },
  {
    id: "content",
    label: "Content",
    icon: (
      <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6M7 16h8" />
      </svg>
    ),
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div style={{
        background: "#fff",
        border: "1px solid #e0e7ff",
        borderRadius: 12,
        padding: "10px 16px",
        boxShadow: "0 8px 24px rgba(99,102,241,0.12)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        <p style={{ color: "#6366f1", fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{label}</p>
        <p style={{ color: "#1e293b", fontSize: 13 }}>Leads: <strong>{payload[0].value}</strong></p>
      </div>
    );
  }
  return null;
};

const PieTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div style={{
        background: "#fff",
        border: "1px solid #e0e7ff",
        borderRadius: 12,
        padding: "10px 16px",
        boxShadow: "0 8px 24px rgba(99,102,241,0.12)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        <p style={{ color: "#6366f1", fontWeight: 700, fontSize: 13 }}>{payload[0].name}</p>
        <p style={{ color: "#1e293b", fontSize: 13 }}>Count: <strong>{payload[0].value}</strong></p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const API_BASE_URL = import.meta.env.VITE_CONTENT_API_BASE_URL || "http://localhost:4000";
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("analytics");
  const [leads, setLeads] = useState([]);
  const [leadSearch, setLeadSearch] = useState("");
  const [trendRange, setTrendRange] = useState("all");
  const [totalLeads, setTotalLeads] = useState(0);
  const [downloadClicks, setDownloadClicks] = useState(0);
  const [bookDemoClicks, setBookDemoClicks] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [contentSaving, setContentSaving] = useState(false);
  const [contentForm, setContentForm] = useState({
    headingEn: "",
    headingHi: "",
    subheadingEn: "",
    subheadingHi: "",
    colorTheme: "",
    template: "",
    heroImage: "",
    heroVideo: "",
    heroImageId: "",
    heroVideoId: "",
  });
  const [translating, setTranslating] = useState("");
  const [heroImageFile, setHeroImageFile] = useState(null);
  const [heroVideoFile, setHeroVideoFile] = useState(null);
  const [heroImagePreview, setHeroImagePreview] = useState("");
  const [heroVideoPreview, setHeroVideoPreview] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);
      try {
        const [leadsResponse, leadsMetaResponse, clickMetricsResponse] = await Promise.all([
          fetch("https://company-website-f3fdc-default-rtdb.firebaseio.com/leads.json"),
          fetch("https://company-website-f3fdc-default-rtdb.firebaseio.com/leadsMeta.json"),
          fetch("https://company-website-f3fdc-default-rtdb.firebaseio.com/websiteClickMetrics.json"),
        ]);
        const leadsJson = (await leadsResponse.json()) || {};
        const leadsMetaJson = (await leadsMetaResponse.json()) || {};
        const clickMetricsJson = (await clickMetricsResponse.json()) || {};
        const parsedLeads = Object.entries(leadsJson).map(([id, value]) => ({
          id,
          ...value,
        }));
        parsedLeads.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setLeads(parsedLeads);
        setTotalLeads(leadsMetaJson.totalLeads ?? parsedLeads.length);
        setDownloadClicks(clickMetricsJson.downloadButton?.count ?? 0);
        setBookDemoClicks(clickMetricsJson.bookDemoButton?.count ?? 0);
      } catch {
        toast.error("Failed to load analytics data");
      } finally {
        setLoading(false);
      }
    };
    void fetchLeads();
  }, []);

  const userName = useMemo(() => {
    if (!user?.email) return "Admin User";
    return user.email.split("@")[0];
  }, [user?.email]);

  const leadsByDate = useMemo(() => {
    const cutoff = trendRange === "30d" ? Date.now() - 30 * 24 * 60 * 60 * 1000 : 0;
    const grouped = leads.reduce((acc, lead) => {
      const ts = lead.createdAt || Date.now();
      if (ts < cutoff) return acc;
      const dateObj = new Date(ts);
      const label = dateObj.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(grouped).map(([date, count]) => ({ date, count }));
  }, [leads, trendRange]);

  const sourceData = useMemo(() => {
    const grouped = leads.reduce((acc, lead) => {
      const source = lead.source || "unknown";
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(grouped).map(([name, value]) => ({ name, value }));
  }, [leads]);

  const filteredLeads = useMemo(() => {
    const query = leadSearch.trim().toLowerCase();
    if (!query) return leads;
    return leads.filter((lead) =>
      [lead.name, lead.email, lead.phone].some((field) =>
        String(field ?? "").toLowerCase().includes(query)
      )
    );
  }, [leads, leadSearch]);

  const fetchContentData = async () => {
    setContentLoading(true);
    try {
      const data = (await getHeroContentFromDb()) ?? {};

      setContentForm({
        headingEn: data.headingEn ?? "",
        headingHi: data.headingHi ?? "",
        subheadingEn: data.subheadingEn ?? "",
        subheadingHi: data.subheadingHi ?? "",
        colorTheme: data.colorTheme ?? "",
        template: data.template ?? "",
        heroImage: data.heroImage ?? "",
        heroVideo: data.heroVideo ?? "",
        heroImageId: data.heroImageId ?? "",
        heroVideoId: data.heroVideoId ?? "",
      });
      setHeroImagePreview(data.heroImage ?? "");
      setHeroVideoPreview(data.heroVideo ?? "");
      setHeroImageFile(null);
      setHeroVideoFile(null);
    } catch {
      toast.error("Failed to load content data");
    } finally {
      setContentLoading(false);
    }
  };

  useEffect(() => {
    if (activeView === "content") {
      void fetchContentData();
    }
  }, [activeView]);

  const handleContentSave = async (event) => {
    event.preventDefault();
    setContentSaving(true);

    try {
      // 1. Save bilingual text straight to Realtime Database — no backend needed.
      await saveHeroContentToDb({
        headingEn: contentForm.headingEn.trim(),
        headingHi: contentForm.headingHi.trim(),
        subheadingEn: contentForm.subheadingEn.trim(),
        subheadingHi: contentForm.subheadingHi.trim(),
        colorTheme: contentForm.colorTheme.trim(),
        template: contentForm.template.trim(),
      });

      // 2. Media uploads need the Cloudinary backend — best effort only, so a
      //    missing API server never blocks saving the text content.
      if (heroImageFile || heroVideoFile) {
        try {
          const formData = new FormData();
          if (heroImageFile) formData.append("heroImage", heroImageFile);
          if (heroVideoFile) formData.append("heroVideo", heroVideoFile);

          const response = await fetch(`${API_BASE_URL}/api/content`, {
            method: "POST",
            body: formData,
          });
          const json = await response.json();
          if (!response.ok || !json.success) {
            throw new Error(json.message || "Media upload failed");
          }

          await saveHeroContentToDb({
            heroImage: json.data?.heroImage ?? "",
            heroVideo: json.data?.heroVideo ?? "",
          });
        } catch {
          toast.warning("Text saved. Media upload needs the API server (run: npm run api:dev).");
        }
      }

      toast.success("Hero content saved");
      await fetchContentData();
    } catch (error) {
      toast.error(error.message || "Failed to save content");
    } finally {
      setContentSaving(false);
    }
  };

  const handleAutoTranslate = async (sourceField, targetField) => {
    const text = contentForm[sourceField]?.trim();
    if (!text) {
      toast.error("Enter English text first");
      return;
    }
    setTranslating(targetField);
    try {
      // Free, key-less, CORS-enabled translation (MyMemory) — runs fully in the
      // browser, so no backend server is required.
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|hi`;
      const response = await fetch(url);
      const json = await response.json().catch(() => null);
      const translated = json?.responseData?.translatedText;

      if (!response.ok || !translated) {
        throw new Error(json?.responseDetails || `Translation failed (HTTP ${response.status})`);
      }

      setContentForm((prev) => ({ ...prev, [targetField]: translated }));
      toast.success("Translated to Hindi — review and edit if needed");
    } catch (error) {
      toast.error(error.message || "Translation failed");
    } finally {
      setTranslating("");
    }
  };

  const onImageFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setHeroImageFile(file);
    setHeroImagePreview(URL.createObjectURL(file));
  };

  const onVideoFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setHeroVideoFile(file);
    setHeroVideoPreview(URL.createObjectURL(file));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/admin/login", { replace: true });
    } catch (error) {
      toast.error(error.message || "Logout failed");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .d-root {
          display: flex;
          height: 100vh;
          overflow: hidden;
          background: #f1f5f9;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #1e293b;
        }

        /* ─── SIDEBAR ─── */
        .d-sidebar {
          width: 248px;
          min-height: 100vh;
          background: #fff;
          border-right: 1px solid #e8ecf8;
          display: flex;
          flex-direction: column;
          padding: 14px 14px 16px;
          flex-shrink: 0;
          position: relative;
          z-index: 30;
          box-shadow: 2px 0 20px rgba(99,102,241,0.04);
        }

        .d-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
          padding: 0 8px 10px;
          border-bottom: 1px solid #f0f4ff;
          margin-bottom: 12px;
        }

        .d-logo-img {
          height: 48px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          margin-left: -6px;
        }

        .d-logo-tag {
          font-size: 11px;
          color: #94a3b8;
          font-family: 'Fira Code', monospace;
          letter-spacing: 0.5px;
          margin-top: -6px;
          margin-left: 30px;
        }

        .d-nav-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #94a3b8;
          padding: 0 10px;
          margin-bottom: 6px;
         
        }

        .d-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 12px;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: #64748b;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.18s;
          margin-bottom: 3px;
          text-align: left;
        }

        .d-nav-item:hover {
          background: #f1f5fe;
          color: #6366f1;
        }

        .d-nav-item.active {
          background: linear-gradient(135deg, #eef2ff, #ede9fe);
          color: #6366f1;
          box-shadow: inset 3px 0 0 #6366f1;
        }

        .d-sidebar-footer {
          margin-top: auto;
          padding: 16px;
          background: linear-gradient(135deg, #f8faff, #f3f0ff);
          border-radius: 14px;
          border: 1px solid #e0e7ff;
        }

        .d-user-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .d-avatar {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #a78bfa);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          color: #fff;
          flex-shrink: 0;
        }

        .d-username {
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .d-userrole {
          font-size: 11px;
          color: #94a3b8;
          font-family: 'Fira Code', monospace;
        }

        .d-logout {
          width: 100%;
          padding: 9px;
          border-radius: 9px;
          border: 1.5px solid #fecaca;
          background: #fff5f5;
          color: #ef4444;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.18s;
        }

        .d-logout:hover {
          background: #fef2f2;
          border-color: #ef4444;
          box-shadow: 0 2px 8px rgba(239,68,68,0.15);
        }

        /* ─── MAIN ─── */
        .d-main {
          flex: 1;
          min-width: 0;
          min-height: 0;
          overflow: auto;
          padding: 18px 32px 32px;
          background:
            radial-gradient(circle at 6% 0%, rgba(99, 102, 241, 0.10) 0, rgba(99, 102, 241, 0.04) 24%, transparent 44%),
            radial-gradient(circle at 100% 4%, rgba(14, 165, 233, 0.08) 0, transparent 38%),
            #f1f5f9;
        }

        .d-page-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 18px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .d-page-title {
          font-size: 21px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.4px;
          line-height: 1.15;
        }

        .d-page-sub {
          font-size: 12.5px;
          color: #64748b;
          margin-top: 3px;
          font-weight: 500;
        }

        .d-time-badge {
          background: #fff;
          border: 1px solid #e0e7ff;
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 12px;
          font-family: 'Fira Code', monospace;
          color: #6366f1;
          font-weight: 500;
        }

        /* ─── STAT CARDS ─── */
        .d-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 24px;
        }

        .d-stat-card {
          border-radius: 20px;
          padding: 24px;
          position: relative;
          overflow: hidden;
          color: #1e293b;
          min-height: 130px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #e2e8f0;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .d-stat-card:hover {
          transform: translateY(-3px);
        }

        .d-stat-card-1 {
          background: linear-gradient(135deg, #ffffff 0%, #f5f3ff 60%, #ede9fe 100%);
          box-shadow: 0 10px 28px rgba(99, 102, 241, 0.14);
        }
        .d-stat-card-1:hover { box-shadow: 0 16px 36px rgba(99, 102, 241, 0.22); }

        .d-stat-card-2 {
          background: linear-gradient(135deg, #ffffff 0%, #eff6ff 60%, #dbeafe 100%);
          box-shadow: 0 10px 28px rgba(59, 130, 246, 0.13);
        }
        .d-stat-card-2:hover { box-shadow: 0 16px 36px rgba(59, 130, 246, 0.2); }

        .d-stat-card-3 {
          background: linear-gradient(135deg, #ffffff 0%, #ecfeff 60%, #cffafe 100%);
          box-shadow: 0 10px 28px rgba(14, 165, 233, 0.13);
        }
        .d-stat-card-3:hover { box-shadow: 0 16px 36px rgba(14, 165, 233, 0.2); }

        .d-stat-card::after {
          content: '';
          position: absolute;
          top: -24px; right: -24px;
          width: 110px; height: 110px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.10);
        }

        .d-stat-card::before {
          content: '';
          position: absolute;
          bottom: -30px; right: 28px;
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.07);
        }

        .d-stat-label {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #6366f1;
          position: relative;
          z-index: 1;
        }

        .d-stat-value {
          font-size: 40px;
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1;
          color: #0f172a;
          position: relative;
          z-index: 1;
        }

        .d-stat-value-sm {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 1.4;
          position: relative;
          z-index: 1;
          word-break: break-all;
        }

        .d-stat-footer {
          font-size: 11px;
          color: #475569;
          font-family: 'Fira Code', monospace;
          position: relative;
          z-index: 1;
        }

        /* ─── CHART GRID ─── */
        .d-chart-grid {
          display: grid;
          grid-template-columns: 1fr 370px;
          gap: 18px;
          margin-bottom: 24px;
        }

        .d-card {
          background: #fff;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 2px 16px rgba(99,102,241,0.06);
          border: 1px solid #e8ecf8;
        }

        .d-card-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .d-card-sub {
          font-size: 12px;
          color: #94a3b8;
          margin-bottom: 18px;
          font-family: 'Fira Code', monospace;
        }

        /* ─── BENTO ANALYTICS (fits viewport, no scroll) ─── */
        .d-analytics {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .d-analytics .d-page-header { margin-bottom: 0; }

        .d-bento {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas:
            "s1 s2 s3"
            "trend trend sources";
        }

        .d-bento .d-stat-card {
          min-height: 0;
          padding: 16px 20px;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
        }
        .d-bento .d-stat-value { font-size: 30px; line-height: 1; }
        .d-bento .d-stat-footer { font-size: 10.5px; }

        .d-stat-body {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .d-stat-icon {
          width: 46px; height: 46px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .d-stat-card-1 .d-stat-icon { background: #ede9fe; color: #7c3aed; }
        .d-stat-card-2 .d-stat-icon { background: #dbeafe; color: #2563eb; }
        .d-stat-card-3 .d-stat-icon { background: #cffafe; color: #0891b2; }

        /* card header with right-aligned control */
        .d-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 8px;
        }

        .d-mini-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 11px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #fff;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          transition: all 0.16s;
        }
        .d-mini-pill:hover { border-color: #c7d2fe; color: #6366f1; }

        .d-mini-select {
          appearance: none;
          -webkit-appearance: none;
          padding: 7px 30px 7px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #fff
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")
            no-repeat right 10px center;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          transition: all 0.16s;
        }
        .d-mini-select:hover { border-color: #c7d2fe; color: #6366f1; }
        .d-mini-select:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }

        .d-table-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .d-search-wrap { position: relative; display: flex; align-items: center; }
        .d-search-wrap svg {
          position: absolute;
          left: 11px;
          color: #94a3b8;
          pointer-events: none;
        }
        .d-search-input {
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 12px 8px 32px;
          font-size: 13px;
          min-width: 180px;
          outline: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #1e293b;
          transition: all 0.16s;
        }
        .d-search-input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }

        .d-row-action {
          background: none;
          border: none;
          cursor: pointer;
          color: #94a3b8;
          padding: 4px;
          border-radius: 8px;
          display: inline-flex;
          transition: all 0.16s;
        }
        .d-row-action:hover { background: #f1f5f9; color: #6366f1; }

        @media (max-width: 600px) {
          .d-search-input { min-width: 130px; }
        }

        .d-bento-trend, .d-bento-sources {
          display: flex;
          flex-direction: column;
          padding: 18px 20px;
          height: 300px;
        }
        .d-bento-trend .d-card-sub,
        .d-bento-sources .d-card-sub { margin-bottom: 10px; }

        .d-chart-fill { flex: 1; min-height: 0; }

        .d-pie-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 14px;
          margin-top: 8px;
          max-height: 56px;
          overflow: auto;
        }
        .d-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #475569;
          font-weight: 600;
        }
        .d-legend-dot {
          width: 9px; height: 9px;
          border-radius: 3px;
          flex-shrink: 0;
        }
        .d-legend-name {
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .d-legend-pct { color: #6366f1; font-weight: 700; }

        @media (max-width: 960px) {
          .d-bento {
            grid-template-columns: 1fr;
            grid-template-areas: none;
          }
          /* Inline gridArea styles (s1/s2/trend/sources) win over CSS, so
             force normal stacking when the grid collapses to one column. */
          .d-bento > * {
            grid-area: auto !important;
          }
          /* Stacked: give charts real height instead of a cramped fixed box
             so the donut and its legend never overlap the card title. */
          .d-bento-trend, .d-bento-sources {
            height: auto;
          }
          .d-bento-trend .d-chart-fill { height: 240px; flex: none; }
          .d-bento-sources .d-chart-fill { height: 220px; flex: none; }
        }

        @media (max-width: 480px) {
          .d-bento { gap: 12px; }
          .d-bento-trend, .d-bento-sources { padding: 16px; }
          .d-bento-trend .d-chart-fill { height: 200px; }
          .d-bento-sources .d-chart-fill { height: 190px; }
          .d-pie-legend { max-height: none; }
        }

        /* ─── TABLE ─── */
        .d-table-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(99,102,241,0.06);
          border: 1px solid #e8ecf8;
        }

        .d-table-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          border-bottom: 1px solid #f0f4ff;
          background: linear-gradient(90deg, #fafbff, #fff);
        }

        .d-table-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
        }

        .d-count-pill {
          background: linear-gradient(135deg, #eef2ff, #ede9fe);
          color: #6366f1;
          border: 1px solid #c7d2fe;
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 700;
          font-family: 'Fira Code', monospace;
        }

        .d-data-table {
          width: 100%;
          border-collapse: collapse;
        }

        .d-data-table thead tr {
          background: #fafbff;
        }

        .d-data-table th {
          padding: 11px 20px;
          text-align: left;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #94a3b8;
          border-bottom: 1px solid #f0f4ff;
        }

        .d-data-table td {
          padding: 13px 20px;
          border-bottom: 1px solid #f8f9ff;
          font-size: 13.5px;
          color: #475569;
          transition: background 0.15s;
          vertical-align: middle;
        }

        .d-data-table tbody tr:last-child td {
          border-bottom: none;
        }

        .d-data-table tbody tr:hover td {
          background: #f8faff;
        }

        .d-td-name {
          color: #0f172a !important;
          font-weight: 700 !important;
          font-size: 14px !important;
        }

        .d-td-email {
          color: #6366f1 !important;
          font-family: 'Fira Code', monospace;
          font-size: 12.5px !important;
          font-weight: 500 !important;
        }

        .d-phone-pill {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 20px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #16a34a;
          font-size: 12px;
          font-family: 'Fira Code', monospace;
          font-weight: 500;
        }

        .d-date-pill {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 20px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #2563eb;
          font-size: 12px;
          font-family: 'Fira Code', monospace;
        }

        .d-dash { color: #cbd5e1; }

        /* ─── CONTENT PAGE ─── */
        .d-content-empty {
          background: #fff;
          border-radius: 22px;
          padding: 60px 48px;
          text-align: center;
          border: 1px solid #e8ecf8;
          box-shadow: 0 2px 16px rgba(99,102,241,0.05);
        }

        .d-content-icon-wrap {
          width: 64px; height: 64px;
          border-radius: 18px;
          background: linear-gradient(135deg, #eef2ff, #ede9fe);
          border: 1.5px solid #c7d2fe;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 26px;
        }

        .d-content-empty h2 {
          font-size: 22px; font-weight: 800;
          color: #0f172a; margin-bottom: 10px;
        }

        .d-content-empty p {
          font-size: 14px; color: #64748b;
          max-width: 420px; margin: 0 auto;
          line-height: 1.65;
        }

        /* ─── BILINGUAL CONTENT FIELDS ─── */
        .d-bilingual {
          border: 1px solid #eef2ff;
          background: #fafbff;
          border-radius: 14px;
          padding: 14px 16px;
          display: grid;
          gap: 12px;
        }

        .d-bilingual-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }

        .d-translate-btn {
          border: 1px solid #c7d2fe;
          background: linear-gradient(135deg, #eef2ff, #ede9fe);
          color: #4f46e5;
          border-radius: 999px;
          padding: 6px 13px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.18s;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .d-translate-btn:hover:not(:disabled) {
          box-shadow: 0 2px 10px rgba(99,102,241,0.18);
          transform: translateY(-1px);
        }

        .d-translate-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .d-bilingual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        @media (max-width: 720px) {
          .d-bilingual-grid { grid-template-columns: 1fr; }
        }

        .d-lang-tag {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #94a3b8;
        }

        /* ─── MOBILE ─── */
        .d-mobile-bar { display: none; }

        .d-overlay {
          display: none;
          position: fixed; inset: 0;
          background: rgba(15,23,42,0.3);
          z-index: 20;
          backdrop-filter: blur(2px);
        }

        .d-overlay.show { display: block; }

        @media (max-width: 960px) {
          .d-sidebar {
            position: fixed;
            left: 0; top: 0; height: 100%;
            transform: translateX(-100%);
            transition: transform 0.28s cubic-bezier(.4,0,.2,1);
          }
          .d-sidebar.open { transform: translateX(0); }
          .d-mobile-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 20px;
            background: #fff;
            border-bottom: 1px solid #e8ecf8;
            position: sticky; top: 0; z-index: 15;
          }
          .d-main { padding: 20px 16px; }
          .d-stat-grid { grid-template-columns: 1fr; }
          .d-chart-grid { grid-template-columns: 1fr; }
        }

        .d-ham {
          background: none; border: none;
          cursor: pointer;
          display: flex; flex-direction: column;
          gap: 5px; padding: 4px;
        }
        .d-ham span {
          display: block; width: 20px;
          height: 2px; background: #1e293b;
          border-radius: 2px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .d-stat-grid { animation: fadeUp 0.35s ease both; }
        .d-chart-grid { animation: fadeUp 0.35s 0.08s ease both; }
        .d-table-card { animation: fadeUp 0.35s 0.15s ease both; }
      `}</style>

      <div className="d-root">
        {/* Sidebar */}
        <aside className={`d-sidebar${sidebarOpen ? " open" : ""}`}>
          <div className="d-logo">
            <img src={apeirosLogo} alt="Apeiros logo" className="d-logo-img" />
            <div className="d-logo-tag">admin panel</div>
          </div>

          <div style={{ marginBottom: 8 }}>
            <div className="d-nav-label">Menu</div>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`d-nav-item${activeView === item.id ? " active" : ""}`}
                onClick={() => { setActiveView(item.id); setSidebarOpen(false); }}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          <div className="d-sidebar-footer">
            <div className="d-user-row">
              <div className="d-avatar">{userName.slice(0, 2).toUpperCase()}</div>
              <div style={{ minWidth: 0 }}>
                <div className="d-username">{userName}</div>
                <div className="d-userrole">admin</div>
              </div>
            </div>
            <button type="button" className="d-logout" onClick={handleLogout}>Sign Out</button>
          </div>
        </aside>

        <div className={`d-overlay${sidebarOpen ? " show" : ""}`} onClick={() => setSidebarOpen(false)} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, minHeight: 0 }}>
          {/* Mobile bar */}
          <div className="d-mobile-bar">
            <button type="button" className="d-ham" onClick={() => setSidebarOpen(true)}>
              <span /><span /><span />
            </button>
            <img src={apeirosLogo} alt="Apeiros logo" style={{ height: 28, width: "auto" }} />
            <div className="d-avatar" style={{ width: 32, height: 32, fontSize: 11 }}>
              {userName.slice(0, 2).toUpperCase()}
            </div>
          </div>

          <main className="d-main">
            {activeView === "content" && (
              <div className="d-card" style={{ maxWidth: 980 }}>
                <div className="d-card-title">Hero Content Management</div>
                <div className="d-card-sub">Upload image/video and update banner content</div>

                {contentLoading ? (
                  <p style={{ color: "#64748b", padding: "16px 0" }}>Loading content...</p>
                ) : (
                  <form onSubmit={handleContentSave} style={{ display: "grid", gap: 14 }}>
                    {/* Heading — English + Hindi */}
                    <div className="d-bilingual">
                      <div className="d-bilingual-head">
                        <label style={{ fontSize: 13, fontWeight: 700 }}>Heading</label>
                        <button
                          type="button"
                          className="d-translate-btn"
                          onClick={() => handleAutoTranslate("headingEn", "headingHi")}
                          disabled={translating === "headingHi"}
                        >
                          {translating === "headingHi" ? "Translating…" : "⇄ Auto-translate to Hindi"}
                        </button>
                      </div>
                      <div className="d-bilingual-grid">
                        <div style={{ display: "grid", gap: 6 }}>
                          <span className="d-lang-tag">English</span>
                          <input
                            value={contentForm.headingEn}
                            onChange={(e) => setContentForm((prev) => ({ ...prev, headingEn: e.target.value }))}
                            placeholder="Enter heading in English"
                            style={{ border: "1px solid #dbeafe", borderRadius: 10, padding: "10px 12px", width: "100%" }}
                          />
                        </div>
                        <div style={{ display: "grid", gap: 6 }}>
                          <span className="d-lang-tag">हिंदी (Hindi)</span>
                          <input
                            value={contentForm.headingHi}
                            onChange={(e) => setContentForm((prev) => ({ ...prev, headingHi: e.target.value }))}
                            placeholder="हिंदी में हेडिंग लिखें"
                            style={{ border: "1px solid #fde68a", borderRadius: 10, padding: "10px 12px", width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subheading — English + Hindi */}
                    <div className="d-bilingual">
                      <div className="d-bilingual-head">
                        <label style={{ fontSize: 13, fontWeight: 700 }}>Subheading</label>
                        <button
                          type="button"
                          className="d-translate-btn"
                          onClick={() => handleAutoTranslate("subheadingEn", "subheadingHi")}
                          disabled={translating === "subheadingHi"}
                        >
                          {translating === "subheadingHi" ? "Translating…" : "⇄ Auto-translate to Hindi"}
                        </button>
                      </div>
                      <div className="d-bilingual-grid">
                        <div style={{ display: "grid", gap: 6 }}>
                          <span className="d-lang-tag">English</span>
                          <textarea
                            value={contentForm.subheadingEn}
                            onChange={(e) => setContentForm((prev) => ({ ...prev, subheadingEn: e.target.value }))}
                            rows={3}
                            placeholder="Enter subheading in English"
                            style={{ border: "1px solid #dbeafe", borderRadius: 10, padding: "10px 12px", resize: "vertical", width: "100%" }}
                          />
                        </div>
                        <div style={{ display: "grid", gap: 6 }}>
                          <span className="d-lang-tag">हिंदी (Hindi)</span>
                          <textarea
                            value={contentForm.subheadingHi}
                            onChange={(e) => setContentForm((prev) => ({ ...prev, subheadingHi: e.target.value }))}
                            rows={3}
                            placeholder="हिंदी में सबहेडिंग लिखें"
                            style={{ border: "1px solid #fde68a", borderRadius: 10, padding: "10px 12px", resize: "vertical", width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
                      <div style={{ display: "grid", gap: 8 }}>
                        <label style={{ fontSize: 13, fontWeight: 600 }}>Brand Color (whole website)</label>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <input
                            type="color"
                            value={/^#[0-9a-fA-F]{6}$/.test(contentForm.colorTheme) ? contentForm.colorTheme : "#146fb5"}
                            onChange={(e) => {
                              const v = e.target.value;
                              setContentForm((prev) => ({ ...prev, colorTheme: v }));
                              applyBrandColor(v);
                            }}
                            aria-label="Pick brand color"
                            style={{ width: 48, height: 42, border: "1px solid #dbeafe", borderRadius: 10, padding: 2, background: "#fff", cursor: "pointer", flexShrink: 0 }}
                          />
                          <input
                            value={contentForm.colorTheme}
                            onChange={(e) => {
                              const v = e.target.value;
                              setContentForm((prev) => ({ ...prev, colorTheme: v }));
                              applyBrandColor(v);
                            }}
                            placeholder="#146fb5"
                            style={{ flex: 1, minWidth: 0, border: "1px solid #dbeafe", borderRadius: 10, padding: "10px 12px", fontFamily: "'Fira Code', monospace" }}
                          />
                        </div>
                        <span style={{ fontSize: 11, color: "#94a3b8" }}>
                          Pick a color — the public website adapts to it with matching light gradients.
                        </span>
                      </div>
                      <div style={{ display: "grid", gap: 8 }}>
                        <label style={{ fontSize: 13, fontWeight: 600 }}>Template</label>
                        <input
                          value={contentForm.template}
                          onChange={(e) => setContentForm((prev) => ({ ...prev, template: e.target.value }))}
                          placeholder="e.g. modern-v1"
                          style={{ border: "1px solid #dbeafe", borderRadius: 10, padding: "10px 12px" }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 12 }}>
                      <div style={{ display: "grid", gap: 8 }}>
                        <label style={{ fontSize: 13, fontWeight: 600 }}>Hero Image</label>
                        <input type="file" accept="image/*" onChange={onImageFileChange} />
                        {heroImagePreview ? (
                          <div style={{ display: "grid", gap: 8 }}>
                            <img
                              src={heroImagePreview}
                              alt="Hero preview"
                              style={{ width: "100%", maxHeight: 180, objectFit: "cover", borderRadius: 10, border: "1px solid #e2e8f0" }}
                            />
                            <a
                              href={contentForm.heroImage || heroImagePreview}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontSize: 12,
                                color: "#2563eb",
                                textDecoration: "underline",
                                wordBreak: "break-all",
                              }}
                            >
                              {contentForm.heroImage ? contentForm.heroImage : "Selected image preview link"}
                            </a>
                          </div>
                        ) : null}
                      </div>
                      <div style={{ display: "grid", gap: 8 }}>
                        <label style={{ fontSize: 13, fontWeight: 600 }}>Hero Video</label>
                        <input type="file" accept="video/*" onChange={onVideoFileChange} />
                        {heroVideoPreview ? (
                          <div style={{ display: "grid", gap: 8 }}>
                            <video
                              src={heroVideoPreview}
                              controls
                              style={{ width: "100%", maxHeight: 180, borderRadius: 10, border: "1px solid #e2e8f0" }}
                            />
                            <a
                              href={contentForm.heroVideo || heroVideoPreview}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontSize: 12,
                                color: "#2563eb",
                                textDecoration: "underline",
                                wordBreak: "break-all",
                              }}
                            >
                              {contentForm.heroVideo ? contentForm.heroVideo : "Selected video preview link"}
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
                      <button
                        type="submit"
                        disabled={contentSaving}
                        style={{
                          border: "none",
                          borderRadius: 10,
                          padding: "10px 16px",
                          background: "linear-gradient(135deg,#2563eb,#0891b2)",
                          color: "#fff",
                          fontWeight: 700,
                          cursor: contentSaving ? "not-allowed" : "pointer",
                          opacity: contentSaving ? 0.7 : 1,
                        }}
                      >
                        {contentSaving ? "Saving..." : "Save Content"}
                      </button>
                      <button
                        type="button"
                        onClick={() => void fetchContentData()}
                        style={{
                          border: "1px solid #cbd5e1",
                          borderRadius: 10,
                          padding: "10px 16px",
                          background: "#fff",
                          color: "#334155",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        Refresh
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {activeView === "analytics" && (
              <>
                <div className="d-analytics">
                <div className="d-page-header">
                  <div>
                    <div className="d-page-title">Analytics Overview</div>
                    <div className="d-page-sub">Track your leads and growth in real-time</div>
                  </div>
                  <div className="d-time-badge">
                    {new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                  </div>
                </div>

                <div className="d-bento">
                  <div className="d-stat-card d-stat-card-1" style={{ gridArea: "s1" }}>
                    <div className="d-stat-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 00-4-4h-1m-6 5H2v-1a4 4 0 014-4h4a4 4 0 014 4v1zm-3-9a4 4 0 100-8 4 4 0 000 8zm9-4a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="d-stat-body">
                      <div className="d-stat-label">Total Leads</div>
                      <div className="d-stat-value">{totalLeads}</div>
                      <div className="d-stat-footer">all-time captured leads</div>
                    </div>
                  </div>
                  <div className="d-stat-card d-stat-card-2" style={{ gridArea: "s2" }}>
                    <div className="d-stat-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3" />
                      </svg>
                    </div>
                    <div className="d-stat-body">
                      <div className="d-stat-label">Download Clicks</div>
                      <div className="d-stat-value">{downloadClicks}</div>
                      <div className="d-stat-footer">play store CTA taps</div>
                    </div>
                  </div>
                  <div className="d-stat-card d-stat-card-3" style={{ gridArea: "s3" }}>
                    <div className="d-stat-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <div className="d-stat-body">
                      <div className="d-stat-label">Book Demo Clicks</div>
                      <div className="d-stat-value">{bookDemoClicks}</div>
                      <div className="d-stat-footer">book demo button taps</div>
                    </div>
                  </div>

                  {/* Leads Trend area chart */}
                  <div className="d-card d-bento-trend" style={{ gridArea: "trend" }}>
                    <div className="d-card-head">
                      <div>
                        <div className="d-card-title">Leads Trend</div>
                        <div className="d-card-sub" style={{ marginBottom: 0 }}>Submissions over time</div>
                      </div>
                      <select
                        className="d-mini-select"
                        value={trendRange}
                        onChange={(e) => setTrendRange(e.target.value)}
                        aria-label="Leads trend time range"
                      >
                        <option value="all">All Time</option>
                        <option value="30d">Last 30 Days</option>
                      </select>
                    </div>
                    <div className="d-chart-fill">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={leadsByDate}>
                          <defs>
                            <linearGradient id="indigoGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.18} />
                              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.01} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f4ff" />
                          <XAxis
                            dataKey="date"
                            tick={{ fill: "#94a3b8", fontSize: 11, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            axisLine={false} tickLine={false}
                          />
                          <YAxis
                            allowDecimals={false}
                            tick={{ fill: "#94a3b8", fontSize: 11, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            axisLine={false} tickLine={false}
                          />
                          <Tooltip content={<CustomTooltip />} />
                          <Area
                            type="monotone"
                            dataKey="count"
                            stroke="#6366f1"
                            strokeWidth={2.5}
                            fill="url(#indigoGrad)"
                            dot={{ fill: "#6366f1", r: 3.5, strokeWidth: 0 }}
                            activeDot={{ r: 5.5, fill: "#6366f1", stroke: "#fff", strokeWidth: 2 }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Lead Sources donut */}
                  <div className="d-card d-bento-sources" style={{ gridArea: "sources" }}>
                    <div className="d-card-title">Lead Sources</div>
                    <div className="d-card-sub">By origin</div>
                    <div className="d-chart-fill">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sourceData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%" cy="50%"
                            innerRadius="58%" outerRadius="85%"
                            paddingAngle={4}
                          >
                            {sourceData.map((_, i) => (
                              <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip content={<PieTooltip />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="d-pie-legend">
                      {(() => {
                        const total = sourceData.reduce((sum, s) => sum + s.value, 0) || 1;
                        return sourceData.map((s, i) => (
                          <div key={s.name} className="d-legend-item">
                            <span className="d-legend-dot" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                            <span className="d-legend-name">{s.name}</span>
                            <span className="d-legend-pct">{((s.value / total) * 100).toFixed(0)}%</span>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                </div>

                {/* Leads table */}
                <div className="d-table-card">
                  <div className="d-table-top">
                    <div className="d-table-title">All Leads</div>
                    <div className="d-table-actions">
                      <div className="d-search-wrap">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <circle cx="11" cy="11" r="7" />
                          <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
                        </svg>
                        <input
                          className="d-search-input"
                          placeholder="Search leads..."
                          value={leadSearch}
                          onChange={(e) => setLeadSearch(e.target.value)}
                        />
                      </div>
                      <div className="d-count-pill">{filteredLeads.length} records</div>
                    </div>
                  </div>
                  <div style={{ overflowX: "auto" }}>
                    <table className="d-data-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th aria-label="Actions" />
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan={6} style={{ textAlign: "center", padding: "36px", color: "#94a3b8", fontFamily: "'Fira Code', monospace", fontSize: 13 }}>
                              Loading leads…
                            </td>
                          </tr>
                        ) : filteredLeads.length === 0 ? (
                          <tr>
                            <td colSpan={6} style={{ textAlign: "center", padding: "36px", color: "#94a3b8", fontFamily: "'Fira Code', monospace", fontSize: 13 }}>
                              {leadSearch ? "No leads match your search." : "No leads found."}
                            </td>
                          </tr>
                        ) : (
                          filteredLeads.map((lead) => (
                            <tr key={lead.id}>
                              <td className="d-td-name">{lead.name}</td>
                              <td className="d-td-email">{lead.email}</td>
                              <td><span className="d-phone-pill">{lead.phone}</span></td>
                              <td>
                                {lead.date
                                  ? <span className="d-date-pill">{new Date(lead.date).toLocaleDateString("en-IN")}</span>
                                  : <span className="d-dash">—</span>}
                              </td>
                              <td>{lead.time || <span className="d-dash">—</span>}</td>
                              <td style={{ width: 44, textAlign: "center" }}>
                                <button type="button" className="d-row-action" aria-label="Lead actions">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <circle cx="12" cy="5" r="1.6" />
                                    <circle cx="12" cy="12" r="1.6" />
                                    <circle cx="12" cy="19" r="1.6" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
}