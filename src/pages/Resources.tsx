import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, BookOpen, Video, Play, Calendar } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";

const resourceCategories = [
  {
    id: "case-studies",
    icon: FileText,
    title: "Case Studies",
    desc: "See how retailers are growing with Lume",
    items: [
      { title: "Sharma General Store: 4x Growth", desc: "How a Delhi kirana store digitized operations", category: "Grocery" },
      { title: "Fashion Hub Mumbai", desc: "Building customer loyalty in fashion retail", category: "Fashion" },
      { title: "Tech World Electronics", desc: "Warranty tracking and service reminders", category: "Electronics" },
    ],
  },
  {
    id: "blog",
    icon: BookOpen,
    title: "Blog",
    desc: "Retail insights and tips",
    items: [
      { title: "5 Ways to Increase Repeat Customers", desc: "Practical strategies for customer retention", category: "Growth" },
      { title: "Digital Billing Best Practices", desc: "Get the most out of smart billing", category: "Billing" },
      { title: "Understanding GST for Retailers", desc: "A simple guide to GST compliance", category: "Compliance" },
    ],
  },
  {
    id: "guides",
    icon: BookOpen,
    title: "Guides",
    desc: "Step-by-step tutorials",
    items: [
      { title: "Getting Started with Lume", desc: "Complete setup guide for new users", category: "Setup" },
      { title: "Creating Your First Campaign", desc: "Send targeted messages to customers", category: "Marketing" },
      { title: "Setting Up Loyalty Points", desc: "Reward your repeat customers", category: "Loyalty" },
    ],
  },
  {
    id: "videos",
    icon: Video,
    title: "Videos",
    desc: "Watch and learn",
    items: [
      { title: "Lume Platform Overview", desc: "5-minute walkthrough of all features", category: "Overview", duration: "5:23" },
      { title: "Quick Billing Tutorial", desc: "Create bills in under 30 seconds", category: "Tutorial", duration: "3:45" },
      { title: "Analytics Dashboard Guide", desc: "Understanding your business data", category: "Tutorial", duration: "8:12" },
    ],
  },
];

export default function Resources() {
  const { id } = useParams();
  const selectedCategory = id ? resourceCategories.find(c => c.id === id) : null;
  useSEO(
    selectedCategory ? `${selectedCategory.title} – Lume Resources` : 'Resources – Guides, Case Studies & Videos | Lume',
    selectedCategory ? selectedCategory.desc : 'Lume resources: case studies, guides, videos. Learn how retailers grow with digital billing & loyalty.'
  );

  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-20 lg:pt-24 pb-12 hero-gradient text-white">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <selectedCategory.icon className="w-7 h-7" style={{ color: '#146fb5' }} />
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2" style={{ color: '#1b181f' }}>{selectedCategory.title}</h1>
              <p className="text-lg" style={{ color: '#4f4f4f' }}>{selectedCategory.desc}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-spacing bg-white">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {selectedCategory.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-secondary/30 p-5 rounded-xl hover:shadow-md transition-all cursor-pointer"
                >
                  <span className="text-xs px-2 py-1 rounded font-medium" style={{ background: '#eaf2f8', color: '#146fb5' }}>
                    {item.category}
                  </span>
                  <h3 className="font-semibold mt-3 mb-1" style={{ color: '#1b181f' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: '#4f4f4f' }}>{item.desc}</p>
                  {(item as any).duration && (
                    <div className="flex items-center gap-1 mt-3 text-sm" style={{ color: '#4f4f4f' }}>
                      <Play className="w-4 h-4" />
                      {(item as any).duration}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-20 lg:pt-24 pb-12 hero-gradient text-white">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3" style={{ color: '#1b181f' }}>
              Resources
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4f4f4f' }}>
              Learn, grow, and succeed with Lume
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resourceCategories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/resources/${category.id}`}
                  className="block bg-secondary/30 p-6 rounded-xl hover:shadow-lg transition-all h-full text-center"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: '#eaf2f8' }}>
                    <category.icon className="w-6 h-6" style={{ color: '#146fb5' }} />
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: '#1b181f' }}>{category.title}</h3>
                  <p className="text-sm mb-3" style={{ color: '#4f4f4f' }}>{category.desc}</p>
                  <span className="text-xs font-medium" style={{ color: '#146fb5' }}>{category.items.length} items</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
