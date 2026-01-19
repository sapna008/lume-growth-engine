import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Image, Palette, Type, Eye, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const gradientTemplates = [
  { id: "blue", name: "Ocean Blue", value: "linear-gradient(135deg, hsl(204 100% 20%) 0%, hsl(204 100% 33%) 50%, hsl(204 85% 45%) 100%)" },
  { id: "purple", name: "Royal Purple", value: "linear-gradient(135deg, hsl(270 70% 25%) 0%, hsl(270 70% 40%) 50%, hsl(280 65% 55%) 100%)" },
  { id: "green", name: "Forest Green", value: "linear-gradient(135deg, hsl(150 70% 18%) 0%, hsl(150 65% 30%) 50%, hsl(160 60% 42%) 100%)" },
  { id: "orange", name: "Sunset Orange", value: "linear-gradient(135deg, hsl(20 80% 25%) 0%, hsl(30 85% 40%) 50%, hsl(40 90% 52%) 100%)" },
];

interface HeroConfig {
  heading: string;
  subheading: string;
  gradient: string;
  bannerImage: string;
}

const defaultConfig: HeroConfig = {
  heading: "Smart Billing That Turns Every Sale Into Customer Growth",
  subheading: "From quick billing to customer loyalty, campaigns, and analytics — all in one retail growth platform.",
  gradient: gradientTemplates[0].value,
  bannerImage: "/src/assets/hero-banner.png",
};

export default function Admin() {
  const [config, setConfig] = useState<HeroConfig>(defaultConfig);
  const [savedConfig, setSavedConfig] = useState<HeroConfig>(defaultConfig);

  useEffect(() => {
    const saved = localStorage.getItem("heroConfig");
    if (saved) {
      const parsed = JSON.parse(saved);
      setConfig(parsed);
      setSavedConfig(parsed);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("heroConfig", JSON.stringify(config));
    setSavedConfig(config);
    toast.success("Configuration saved successfully!");
  };

  const handleReset = () => {
    setConfig(defaultConfig);
    localStorage.removeItem("heroConfig");
    setSavedConfig(defaultConfig);
    toast.info("Configuration reset to defaults");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container-wide flex items-center justify-between h-14">
          <h1 className="font-display font-bold text-lg text-foreground">Admin Configuration</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </Button>
            <Button variant="cta" size="sm" onClick={handleSave}>
              <Save className="w-4 h-4 mr-1" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="container-wide py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-border">
              <h2 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                <Type className="w-5 h-5 text-primary" />
                Hero Content
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Heading</label>
                  <Textarea
                    value={config.heading}
                    onChange={(e) => setConfig({ ...config, heading: e.target.value })}
                    rows={2}
                    className="resize-none"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Subheading</label>
                  <Textarea
                    value={config.subheading}
                    onChange={(e) => setConfig({ ...config, subheading: e.target.value })}
                    rows={2}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border">
              <h2 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-primary" />
                Background Gradient
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                {gradientTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setConfig({ ...config, gradient: template.value })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      config.gradient === template.value 
                        ? "border-primary ring-2 ring-primary/20" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div 
                      className="h-12 rounded-md mb-2"
                      style={{ background: template.value }}
                    />
                    <p className="text-sm font-medium text-foreground">{template.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-border">
              <h2 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                <Image className="w-5 h-5 text-primary" />
                Hero Banner Image
              </h2>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Image URL</label>
                <Input
                  value={config.bannerImage}
                  onChange={(e) => setConfig({ ...config, bannerImage: e.target.value })}
                  placeholder="Enter image URL..."
                />
                <p className="text-xs text-muted-foreground mt-1.5">
                  Enter a URL or use /src/assets/your-image.png
                </p>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <div className="bg-white p-6 rounded-xl border border-border">
              <h2 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-primary" />
                Live Preview
              </h2>
              
              <div 
                className="rounded-lg overflow-hidden text-white p-6"
                style={{ background: config.gradient }}
              >
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold leading-tight mb-2">
                      {config.heading.split("Customer Growth").map((part, i) => (
                        <span key={i}>
                          {part}
                          {i === 0 && <span className="text-orange-400">Customer Growth</span>}
                        </span>
                      ))}
                    </h3>
                    <p className="text-sm text-white/80 mb-4">{config.subheading}</p>
                    <div className="flex gap-2">
                      <button className="bg-orange-500 text-white text-xs px-3 py-1.5 rounded font-medium">
                        Start Free Trial
                      </button>
                      <button className="bg-white/10 border border-white/30 text-white text-xs px-3 py-1.5 rounded font-medium">
                        Watch Demo
                      </button>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={config.bannerImage}
                      alt="Hero Preview"
                      className="rounded-lg shadow-lg w-full max-h-40 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/400x200/1e40af/white?text=Hero+Image";
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                This is a scaled preview. Actual appearance may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
