import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ImpactPageProps {
  content: any;
  onBack: () => void;
}

export function ImpactPage({ content, onBack }: ImpactPageProps) {
  return (
    <motion.div
      key="impact"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-4xl mx-auto">
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
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center tracking-tight leading-tight"
        >
          {content.title}
        </motion.h2>

        <div className="space-y-8 sm:space-y-12">
          {content.points.map((point: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start gap-4 sm:gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-yellow-600 flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                {point.icon}
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
                  {point.title}
                </h3>
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}