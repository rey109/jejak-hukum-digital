import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, FolderOpen } from "lucide-react";

interface CasesPageProps {
  content: any;
  onBack: () => void;
  onOpenModal: (modal: any) => void;
}

export function CasesPage({ content, onBack, onOpenModal }: CasesPageProps) {
  return (
    <motion.div
      key="cases"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white hover:bg-white/10 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight"
        >
          {content.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {content.examples.map((example: any, index: number) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, rotateY: -15 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              onClick={() => onOpenModal(example)}
              className="cursor-pointer perspective-1000"
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:border-[#d4af37] transition-all p-6 h-full shadow-xl hover:shadow-2xl">
                <div className="bg-[#d4af37]/20 rounded-lg p-4 mb-4 text-center">
                  <FolderOpen className="h-12 w-12 text-[#d4af37] mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {example.title}
                </h3>
                <div className="bg-white/10 rounded-lg px-3 py-2 mb-4 inline-block">
                  <p className="text-sm text-[#d4af37] font-semibold">{example.evidence}</p>
                </div>
                <p className="text-blue-100 text-sm line-clamp-3">
                  {example.description}
                </p>
                <div className="mt-4 flex items-center text-blue-200 hover:text-white transition-colors">
                  <span className="text-sm">Lihat analisis lengkap</span>
                  <ChevronRight className="h-4 w-4 ml-2" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
