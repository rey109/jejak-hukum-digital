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
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-16 max-w-5xl"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
          {content.title}
        </h1>
        <p className="text-2xl md:text-3xl text-blue-100 mb-6 font-light">
          {content.subtitle}
        </p>
        <p className="text-base md:text-lg text-blue-200/80">
          Klik tiap bagian untuk memahami isi pasal ini secara visual
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl w-full px-4">
        {/* Background - Large card spanning 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03, y: -8 }}
          className="cursor-pointer md:col-span-2 md:row-span-2"
          onClick={() => onNavigate("background" as Section)}
        >
          <Card className={cn(
            "p-8 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-white/40 transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[280px]",
            "from-blue-500 to-blue-600"
          )}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Latar Belakang
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">Mengapa Pasal 26A hadir?</p>
            </div>
            <ChevronRight className="h-8 w-8 text-white mt-6 ml-auto" />
          </Card>
        </motion.div>

        {/* Article - Medium card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.03, y: -8 }}
          className="cursor-pointer md:col-span-2"
          onClick={() => onNavigate("article" as Section)}
        >
          <Card className={cn(
            "p-8 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-white/40 transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[200px]",
            "from-indigo-500 to-indigo-600"
          )}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Isi Pasal
              </h3>
              <p className="text-white/90">Bunyi lengkap Pasal 26A</p>
            </div>
            <ChevronRight className="h-6 w-6 text-white mt-4 ml-auto" />
          </Card>
        </motion.div>

        {/* Explanation - Medium card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.03, y: -8 }}
          className="cursor-pointer md:col-span-2"
          onClick={() => onNavigate("explanation" as Section)}
        >
          <Card className={cn(
            "p-8 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-white/40 transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[200px]",
            "from-purple-500 to-purple-600"
          )}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Penjelasan Hukum
              </h3>
              <p className="text-white/90">Makna dan interpretasi</p>
            </div>
            <ChevronRight className="h-6 w-6 text-white mt-4 ml-auto" />
          </Card>
        </motion.div>

        {/* Cases - Wide card spanning 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.03, y: -8 }}
          className="cursor-pointer md:col-span-3"
          onClick={() => onNavigate("cases" as Section)}
        >
          <Card className={cn(
            "p-8 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-white/40 transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[180px]",
            "from-pink-500 to-pink-600"
          )}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Contoh Kasus
              </h3>
              <p className="text-white/90 text-lg">Penerapan dalam praktik hukum nyata</p>
            </div>
            <ChevronRight className="h-7 w-7 text-white mt-4 ml-auto" />
          </Card>
        </motion.div>

        {/* Impact - Compact card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.03, y: -8 }}
          className="cursor-pointer md:col-span-2"
          onClick={() => onNavigate("impact" as Section)}
        >
          <Card className={cn(
            "p-6 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-white/40 transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[160px]",
            "from-orange-500 to-orange-600"
          )}>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Dampak & Makna
              </h3>
              <p className="text-white/90 text-sm">Pengaruh terhadap hukum</p>
            </div>
            <ChevronRight className="h-5 w-5 text-white mt-3 ml-auto" />
          </Card>
        </motion.div>

        {/* Reflection - Compact card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.03, y: -8 }}
          className="cursor-pointer md:col-span-1"
          onClick={() => onNavigate("reflection" as Section)}
        >
          <Card className={cn(
            "p-6 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-white/40 transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between min-h-[160px]",
            "from-teal-500 to-teal-600"
          )}>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Refleksi
              </h3>
              <p className="text-white/90 text-sm">Kesimpulan</p>
            </div>
            <ChevronRight className="h-5 w-5 text-white mt-3 ml-auto" />
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}