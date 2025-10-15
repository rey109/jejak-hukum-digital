import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  BookOpen, 
  Scale, 
  FolderOpen, 
  Lightbulb,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { HomePage } from "@/components/pasal26a/HomePage";
import { BackgroundPage } from "@/components/pasal26a/BackgroundPage";
import { ArticlePage } from "@/components/pasal26a/ArticlePage";
import { ExplanationPage } from "@/components/pasal26a/ExplanationPage";
import { CasesPage } from "@/components/pasal26a/CasesPage";
import { ImpactPage } from "@/components/pasal26a/ImpactPage";
import { ReflectionPage } from "@/components/pasal26a/ReflectionPage";

type Section = "home" | "background" | "article" | "explanation" | "cases" | "impact" | "reflection";

export default function Pasal26A() {
  const [currentSection, setCurrentSection] = useState<Section>("home");
  const [selectedModal, setSelectedModal] = useState<any>(null);
  const content = useQuery(api.content.getArticleContent);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#2d1b3d] to-[#1a1a2e]">
        <div className="text-white text-xl">Memuat konten...</div>
      </div>
    );
  }

  const navigationItems = [
    { id: "home" as Section, icon: Home, label: "Beranda" },
    { id: "background" as Section, icon: BookOpen, label: "Latar Belakang" },
    { id: "article" as Section, icon: Scale, label: "Isi Pasal" },
    { id: "explanation" as Section, icon: Scale, label: "Penjelasan" },
    { id: "cases" as Section, icon: FolderOpen, label: "Contoh Kasus" },
    { id: "impact" as Section, icon: Lightbulb, label: "Dampak" },
    { id: "reflection" as Section, icon: Lightbulb, label: "Refleksi" }
  ];

  const sectionCards = [
    { id: "background", title: "Latar Belakang", desc: "Mengapa Pasal 26A hadir?", color: "from-blue-500 to-blue-600" },
    { id: "article", title: "Isi Pasal", desc: "Bunyi lengkap Pasal 26A", color: "from-indigo-500 to-indigo-600" },
    { id: "explanation", title: "Penjelasan Hukum", desc: "Makna dan interpretasi", color: "from-purple-500 to-purple-600" },
    { id: "cases", title: "Contoh Kasus", desc: "Penerapan dalam praktik", color: "from-pink-500 to-pink-600" },
    { id: "impact", title: "Dampak & Makna", desc: "Pengaruh terhadap hukum", color: "from-orange-500 to-orange-600" },
    { id: "reflection", title: "Refleksi", desc: "Renungan dan kesimpulan", color: "from-teal-500 to-teal-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#2d1b3d] to-[#1a1a2e] relative overflow-hidden">
      {/* Enhanced background with legal theme */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900 rounded-full filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl animate-pulse delay-500" />
      </div>

      {/* Legal pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Navigation Menu */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 space-y-3"
      >
        {navigationItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.1, x: -5 }}
            className="group relative"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentSection(item.id)}
              className={cn(
                "rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border border-amber-600/30",
                currentSection === item.id && "bg-amber-600 hover:bg-amber-700 border-amber-500"
              )}
            >
              <item.icon className="h-5 w-5 text-white" />
            </Button>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-gradient-to-r from-amber-600 to-red-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap shadow-lg font-semibold">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {currentSection === "home" && (
            <HomePage 
              content={content} 
              sectionCards={sectionCards}
              onNavigate={setCurrentSection}
            />
          )}
          {currentSection === "background" && (
            <BackgroundPage 
              content={content.sections.background}
              onBack={() => setCurrentSection("home")}
            />
          )}
          {currentSection === "article" && (
            <ArticlePage 
              content={content.sections.article}
              onBack={() => setCurrentSection("home")}
              onOpenModal={setSelectedModal}
            />
          )}
          {currentSection === "explanation" && (
            <ExplanationPage 
              content={content.sections.explanation}
              onBack={() => setCurrentSection("home")}
              onOpenModal={setSelectedModal}
            />
          )}
          {currentSection === "cases" && (
            <CasesPage 
              content={content.sections.cases}
              onBack={() => setCurrentSection("home")}
              onOpenModal={setSelectedModal}
            />
          )}
          {currentSection === "impact" && (
            <ImpactPage 
              content={content.sections.impact}
              onBack={() => setCurrentSection("home")}
            />
          )}
          {currentSection === "reflection" && (
            <ReflectionPage 
              content={content.sections.reflection}
              onBack={() => setCurrentSection("home")}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Modal with better styling */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl border-2 border-amber-600/20"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedModal(null)}
                className="absolute top-4 right-4 rounded-full hover:bg-amber-100"
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="space-y-6 pr-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-red-900 flex items-center justify-center text-white font-bold text-xl">
                    ⚖️
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight flex-1">{selectedModal.title}</h3>
                </div>
                <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-red-900 rounded-full" />
                <p className="text-gray-700 leading-relaxed text-lg">{selectedModal.detail || selectedModal.description}</p>
                {selectedModal.analysis && (
                  <div className="bg-gradient-to-br from-amber-50 to-red-50 p-6 rounded-xl border-l-4 border-amber-600 shadow-inner">
                    <p className="text-sm font-bold text-amber-900 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <span className="text-xl">📋</span> Analisis Hukum Mendalam:
                    </p>
                    <p className="text-base text-gray-800 leading-relaxed">{selectedModal.analysis}</p>
                  </div>
                )}
                {selectedModal.examples && selectedModal.examples.length > 0 && (
                  <div className="space-y-3">
                    <p className="font-bold text-gray-900 text-lg flex items-center gap-2">
                      <span className="text-xl">💡</span> Contoh Konkret:
                    </p>
                    <ul className="space-y-3">
                      {selectedModal.examples.map((ex: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-amber-100">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                          <span className="text-gray-700 leading-relaxed">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}