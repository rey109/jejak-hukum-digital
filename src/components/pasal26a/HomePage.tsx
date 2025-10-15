import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Section = "home" | "background" | "article" | "explanation" | "cases" | "impact" | "reflection";

interface HomePageProps {
  content: any;
  sectionCards: Array<{
    id: string;
    title: string;
    desc: string;
    color: string;
  }>;
  onNavigate: (section: Section) => void;
}

export function HomePage({ content, sectionCards, onNavigate }: HomePageProps) {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mb-20 max-w-5xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          {content.title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-blue-100/90 mb-4 font-light leading-relaxed">
          {content.subtitle}
        </p>
        <p className="text-sm md:text-base text-blue-200/70 max-w-2xl mx-auto">
          Klik tiap bagian untuk memahami isi pasal ini secara visual dan interaktif
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {/* Background - Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -8 }}
          className="cursor-pointer md:col-span-2 lg:col-span-2 lg:row-span-2"
          onClick={() => onNavigate("background" as Section)}
        >
          <Card className={cn(
            "p-10 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[320px]",
            "from-blue-500/90 to-blue-600/90"
          )}>
            <div>
              <div className="inline-block px-4 py-1.5 bg-white/20 rounded-full mb-6">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Mulai Di Sini</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Latar Belakang
              </h3>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Mengapa Pasal 26A hadir dan bagaimana perkembangannya dalam sistem hukum Indonesia
              </p>
            </div>
            <div className="flex items-center text-white/80 mt-8">
              <span className="text-sm font-medium">Jelajahi Timeline</span>
              <ChevronRight className="h-5 w-5 ml-2" />
            </div>
          </Card>
        </motion.div>

        {/* Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -8 }}
          className="cursor-pointer lg:row-span-1"
          onClick={() => onNavigate("article" as Section)}
        >
          <Card className={cn(
            "p-8 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[220px]",
            "from-indigo-500/90 to-indigo-600/90"
          )}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                Isi Pasal
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Bunyi lengkap dan rinci Pasal 26A
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-white/80 mt-4 ml-auto" />
          </Card>
        </motion.div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -8 }}
          className="cursor-pointer lg:row-span-1"
          onClick={() => onNavigate("explanation" as Section)}
        >
          <Card className={cn(
            "p-8 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[220px]",
            "from-purple-500/90 to-purple-600/90"
          )}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                Penjelasan Hukum
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Makna dan interpretasi mendalam
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-white/80 mt-4 ml-auto" />
          </Card>
        </motion.div>

        {/* Cases - Wide card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -8 }}
          className="cursor-pointer md:col-span-2"
          onClick={() => onNavigate("cases" as Section)}
        >
          <Card className={cn(
            "p-8 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[200px]",
            "from-pink-500/90 to-pink-600/90"
          )}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                Contoh Kasus Nyata
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Penerapan Pasal 26A dalam praktik hukum dengan analisis mendalam
              </p>
            </div>
            <ChevronRight className="h-6 w-6 text-white/80 mt-4 ml-auto" />
          </Card>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -8 }}
          className="cursor-pointer"
          onClick={() => onNavigate("impact" as Section)}
        >
          <Card className={cn(
            "p-8 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[200px]",
            "from-orange-500/90 to-orange-600/90"
          )}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Dampak & Makna
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Pengaruh terhadap sistem hukum
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-white/80 mt-4 ml-auto" />
          </Card>
        </motion.div>

        {/* Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -8 }}
          className="cursor-pointer"
          onClick={() => onNavigate("reflection" as Section)}
        >
          <Card className={cn(
            "p-8 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[200px]",
            "from-teal-500/90 to-teal-600/90"
          )}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Refleksi
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Renungan dan kesimpulan
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-white/80 mt-4 ml-auto" />
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}