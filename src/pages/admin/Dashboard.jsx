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
  const [totalLeads, setTotalLeads] = useState(0);
  const [downloadClicks, setDownloadClicks] = useState(0);
  const [bookDemoClicks, setBookDemoClicks] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [contentSaving, setContentSaving] = useState(false);
  const [contentForm, setContentForm] = useState({
    heading: "",
    subheading: "",
    colorTheme: "",
    template: "",
    heroImage: "",
    heroVideo: "",
    heroImageId: "",
    heroVideoId: "",
  });
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
    const grouped = leads.reduce((acc, lead) => {
      const dateObj = new Date(lead.createdAt || Date.now());
      const label = dateObj.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(grouped).map(([date, count]) => ({ date, count }));
  }, [leads]);

  const sourceData = useMemo(() => {
    const grouped = leads.reduce((acc, lead) => {
      const source = lead.source || "unknown";
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(grouped).map(([name, value]) => ({ name, value }));
  }, [leads]);

  const fetchContentData = async () => {
    setContentLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/content`);
      const json = await response.json();
      const data = json?.data ?? {};

      setContentForm({
        heading: data.heading ?? "",
        subheading: data.subheading ?? "",
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
      const formData = new FormData();
      formData.append("heading", contentForm.heading);
      formData.append("subheading", contentForm.subheading);
      formData.append("colorTheme", contentForm.colorTheme);
      formData.append("template", contentForm.template);

      if (heroImageFile) formData.append("heroImage", heroImageFile);
      if (heroVideoFile) formData.append("heroVideo", heroVideoFile);

      const response = await fetch(`${API_BASE_URL}/api/content`, {
        method: "POST",
        body: formData,
      });
      const json = await response.json();

      if (!response.ok || !json.success) {
        throw new Error(json.message || "Failed to save content");
      }

      toast.success("Hero content saved");
      await fetchContentData();
    } catch (error) {
      toast.error(error.message || "Failed to save content");
    } finally {
      setContentSaving(false);
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
          min-height: 100vh;
          background: linear-gradient(135deg, #fffdf5 0%, #fff9e8 52%, #fff5db 100%);
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
          padding: 24px 14px;
          flex-shrink: 0;
          position: relative;
          z-index: 30;
          box-shadow: 2px 0 20px rgba(99,102,241,0.04);
        }

        .d-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 4px 8px 24px;
          border-bottom: 1px solid #f0f4ff;
          margin-bottom: 20px;
        }

        .d-logo-mark {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }

        .d-logo-mark img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 4px;
        }

        .d-logo-name {
          font-size: 19px;
          font-weight: 800;
          color: #1e293b;
          letter-spacing: -0.4px;
        }

        .d-logo-tag {
          font-size: 11px;
          color: #94a3b8;
          font-family: 'Fira Code', monospace;
          margin-top: 1px;
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
          overflow: auto;
          padding: 32px;
          background:
            radial-gradient(circle at 8% 18%, rgba(254, 240, 138, 0.30) 0, rgba(254, 240, 138, 0.09) 22%, transparent 38%),
            radial-gradient(circle at 92% 12%, rgba(253, 224, 71, 0.22) 0, rgba(253, 224, 71, 0.08) 20%, transparent 36%),
            linear-gradient(135deg, #fffdf5 0%, #fff9e8 52%, #fff5db 100%);
        }

        .d-page-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .d-page-title {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.6px;
          line-height: 1.1;
        }

        .d-page-sub {
          font-size: 13px;
          color: #64748b;
          margin-top: 5px;
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
          color: #1e3a8a;
          min-height: 130px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #bfdbfe;
        }

        .d-stat-card-1 {
          background: linear-gradient(135deg, #ffffff 0%, #eaf4ff 62%, #dbeafe 100%);
          box-shadow: 0 10px 26px rgba(59, 130, 246, 0.14);
        }

        .d-stat-card-2 {
          background: linear-gradient(135deg, #ffffff 0%, #ecf8ff 62%, #d9f1ff 100%);
          box-shadow: 0 10px 26px rgba(14, 165, 233, 0.14);
        }

        .d-stat-card-3 {
          background: linear-gradient(135deg, #ffffff 0%, #eef6ff 58%, #e3ecff 100%);
          box-shadow: 0 10px 26px rgba(99, 102, 241, 0.13);
        }

        .d-stat-card::after {
          content: '';
          position: absolute;
          top: -20px; right: -20px;
          width: 100px; height: 100px;
          border-radius: 50%;
          background: rgba(191, 219, 254, 0.45);
        }

        .d-stat-card::before {
          content: '';
          position: absolute;
          bottom: -30px; right: 30px;
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(186, 230, 253, 0.35);
        }

        .d-stat-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #1d4ed8;
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
            <div className="d-logo-mark">
              <img src={apeirosLogo} alt="Apeiros logo" />
            </div>
            <div>
              <div className="d-logo-name">Apeiros</div>
              <div className="d-logo-tag">admin panel</div>
            </div>
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

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
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
                    <div style={{ display: "grid", gap: 8 }}>
                      <label style={{ fontSize: 13, fontWeight: 600 }}>Heading</label>
                      <input
                        value={contentForm.heading}
                        onChange={(e) => setContentForm((prev) => ({ ...prev, heading: e.target.value }))}
                        placeholder="Enter heading"
                        style={{ border: "1px solid #dbeafe", borderRadius: 10, padding: "10px 12px" }}
                      />
                    </div>

                    <div style={{ display: "grid", gap: 8 }}>
                      <label style={{ fontSize: 13, fontWeight: 600 }}>Subheading</label>
                      <textarea
                        value={contentForm.subheading}
                        onChange={(e) => setContentForm((prev) => ({ ...prev, subheading: e.target.value }))}
                        rows={3}
                        placeholder="Enter subheading"
                        style={{ border: "1px solid #dbeafe", borderRadius: 10, padding: "10px 12px", resize: "vertical" }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
                      <div style={{ display: "grid", gap: 8 }}>
                        <label style={{ fontSize: 13, fontWeight: 600 }}>Color Theme</label>
                        <input
                          value={contentForm.colorTheme}
                          onChange={(e) => setContentForm((prev) => ({ ...prev, colorTheme: e.target.value }))}
                          placeholder="e.g. Ocean Blue"
                          style={{ border: "1px solid #dbeafe", borderRadius: 10, padding: "10px 12px" }}
                        />
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
                <div className="d-page-header">
                  <div>
                    <div className="d-page-title">Analytics Overview</div>
                    <div className="d-page-sub">Track your leads and growth in real-time</div>
                  </div>
                  <div className="d-time-badge">
                    {new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                  </div>
                </div>

                <div className="d-stat-grid">
                  <div className="d-stat-card d-stat-card-1">
                    <div className="d-stat-label">Total Leads</div>
                    <div className="d-stat-value">{totalLeads}</div>
                    <div className="d-stat-footer">all-time captured leads</div>
                  </div>
                  <div className="d-stat-card d-stat-card-2">
                    <div className="d-stat-label">Download Clicks</div>
                    <div className="d-stat-value">{downloadClicks}</div>
                    <div className="d-stat-footer">play store CTA taps</div>
                  </div>
                  <div className="d-stat-card d-stat-card-3">
                    <div className="d-stat-label">Book Demo Clicks</div>
                    <div className="d-stat-value">{bookDemoClicks}</div>
                    <div className="d-stat-footer">book demo button taps</div>
                  </div>
                </div>



                {/* Charts */}
                <div className="d-chart-grid">
                  <div className="d-card">
                    <div className="d-card-title">Leads Trend</div>
                    <div className="d-card-sub">Submissions over time</div>
                    <div style={{ height: 270 }}>
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

                  <div className="d-card">
                    <div className="d-card-title">Lead Sources</div>
                    <div className="d-card-sub">By origin</div>
                    <div style={{ height: 270 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sourceData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%" cy="50%"
                            innerRadius={55} outerRadius={95}
                            paddingAngle={4}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                          >
                            {sourceData.map((_, i) => (
                              <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip content={<PieTooltip />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="d-table-card">
                  <div className="d-table-top">
                    <div className="d-table-title">All Leads</div>
                    <div className="d-count-pill">{leads.length} records</div>
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
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan={5} style={{ textAlign: "center", padding: "36px", color: "#94a3b8", fontFamily: "'Fira Code', monospace", fontSize: 13 }}>
                              Loading leads…
                            </td>
                          </tr>
                        ) : leads.length === 0 ? (
                          <tr>
                            <td colSpan={5} style={{ textAlign: "center", padding: "36px", color: "#94a3b8", fontFamily: "'Fira Code', monospace", fontSize: 13 }}>
                              No leads found.
                            </td>
                          </tr>
                        ) : (
                          leads.map((lead) => (
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
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
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