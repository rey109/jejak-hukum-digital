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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b3d91] to-[#1e5a9e]">
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
    <div className="min-h-screen bg-gradient-to-br from-[#0b3d91] via-[#1e5a9e] to-[#0b3d91] relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

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
                "rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all",
                currentSection === item.id && "bg-[#d4af37] hover:bg-[#d4af37]/90"
              )}
            >
              <item.icon className="h-5 w-5 text-white" />
            </Button>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-white text-gray-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap shadow-lg">
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

      {/* Modal */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedModal(null)}
                className="absolute top-4 right-4 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedModal.title}</h3>
                <p className="text-gray-700 leading-relaxed">{selectedModal.detail || selectedModal.description}</p>
                {selectedModal.analysis && (
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Analisis Hukum:</p>
                    <p className="text-sm text-blue-800">{selectedModal.analysis}</p>
                  </div>
                )}
                {selectedModal.examples && (
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Contoh:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedModal.examples.map((ex: string, i: number) => (
                        <li key={i} className="text-gray-700">{ex}</li>
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