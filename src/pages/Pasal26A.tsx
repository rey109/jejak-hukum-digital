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
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin" />
          <div className="text-white text-base sm:text-lg">Memuat konten...</div>
        </div>
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
        <div className="absolute top-0 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-[#d4af37] rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-[#8b1538] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-[#1e3a8a] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Legal pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Floating Navigation Menu - Hidden on mobile when on home */}
      {currentSection !== "home" && (
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50 space-y-2"
        >
          {navigationItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentSection(item.id)}
                className={cn(
                  "rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border",
                  currentSection === item.id 
                    ? "bg-[#d4af37] hover:bg-[#d4af37]/90 border-[#d4af37] shadow-lg shadow-[#d4af37]/50" 
                    : "border-white/20 hover:border-[#d4af37]/50"
                )}
              >
                <item.icon className={cn(
                  "h-4 w-4 sm:h-5 sm:w-5 transition-colors",
                  currentSection === item.id ? "text-gray-900" : "text-white"
                )} />
              </Button>
              <div className="hidden lg:block absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-gradient-to-r from-[#d4af37] to-[#8b1538] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl font-semibold">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

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

      {/* Enhanced Modal - Fully responsive */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-white via-amber-50/50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border-2 border-[#d4af37]/30"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedModal(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 rounded-full hover:bg-[#d4af37]/20 w-8 h-8 sm:w-10 sm:h-10"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <div className="space-y-6 sm:space-y-8 pr-6 sm:pr-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#8b1538] flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                    ⚖️
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-2">
                      {selectedModal.title}
                    </h3>
                    <div className="h-1 sm:h-1.5 w-24 sm:w-32 bg-gradient-to-r from-[#d4af37] to-[#8b1538] rounded-full" />
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {selectedModal.detail || selectedModal.description}
                </p>
                
                {selectedModal.analysis && (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 border-[#d4af37] shadow-inner">
                    <p className="text-xs sm:text-sm font-bold text-[#8b1538] mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">📋</span> Analisis Hukum Mendalam
                    </p>
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      {selectedModal.analysis}
                    </p>
                  </div>
                )}
                
                {selectedModal.examples && selectedModal.examples.length > 0 && (
                  <div className="space-y-4">
                    <p className="font-bold text-gray-900 text-lg sm:text-xl flex items-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">💡</span> Contoh Konkret
                    </p>
                    <ul className="space-y-3 sm:space-y-4">
                      {selectedModal.examples.map((ex: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-colors">
                          <span className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8b1538] text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                            {i + 1}
                          </span>
                          <span className="text-gray-700 leading-relaxed flex-1 text-sm sm:text-base">
                            {ex}
                          </span>
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