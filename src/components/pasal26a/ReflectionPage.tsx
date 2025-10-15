import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

interface ReflectionPageProps {
  content: any;
  onBack: () => void;
}

export function ReflectionPage({ content, onBack }: ReflectionPageProps) {
  return (
    <motion.div
      key="reflection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-6 sm:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            {content.title}
          </h2>
          
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-blue-100 leading-relaxed italic font-light px-4"
          >
            "{content.quote}"
          </motion.blockquote>

          {content.closing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 mt-8"
            >
              <p className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed">
                {content.closing}
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="pt-8 sm:pt-12"
          >
            <Button
              onClick={onBack}
              size="lg"
              className="bg-[#d4af37] hover:bg-[#d4af37]/90 text-gray-900 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              <Home className="mr-2 h-5 w-5" />
              Kembali ke Beranda
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}