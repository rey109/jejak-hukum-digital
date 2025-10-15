import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticlePageProps {
  content: any;
  onBack: () => void;
  onOpenModal: (modal: any) => void;
}

export function ArticlePage({ content, onBack, onOpenModal }: ArticlePageProps) {
  return (
    <motion.div
      key="article"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white hover:bg-white/10 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight"
        >
          {content.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-12 leading-relaxed"
        >
          {content.content}
        </motion.p>

        <div className="space-y-6 sm:space-y-8">
          {content.points.map((point: any, index: number) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => onOpenModal(point)}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 cursor-pointer hover:bg-white/15 transition-all group"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#d4af37] mb-3 sm:mb-4 group-hover:text-yellow-300 transition-colors">
                {point.title}
              </h3>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                {point.text.split(' ').map((word: string, i: number) => {
                  const keywords = ['elektronik', 'dokumen', 'informasi', 'data', 'digital'];
                  const isKeyword = keywords.some(k => word.toLowerCase().includes(k));
                  return (
                    <span
                      key={i}
                      className={cn(
                        "transition-colors",
                        isKeyword && "text-[#d4af37] font-semibold group-hover:text-yellow-300"
                      )}
                    >
                      {word}{' '}
                    </span>
                  );
                })}
              </p>
              <div className="mt-4 flex items-center text-blue-200 group-hover:text-white transition-colors">
                <span className="text-sm">Klik untuk melihat contoh lengkap</span>
                <ChevronRight className="h-4 w-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}