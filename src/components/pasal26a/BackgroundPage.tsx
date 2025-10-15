import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface BackgroundPageProps {
  content: any;
  onBack: () => void;
}

export function BackgroundPage({ content, onBack }: BackgroundPageProps) {
  const [selectedTimeline, setSelectedTimeline] = useState<number | null>(null);

  return (
    <motion.div
      key="background"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white hover:bg-white/10 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              {content.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
              {content.content}
            </p>
            {content.importance && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-[#d4af37]/30 mt-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#d4af37] mb-3">
                  Pentingnya Pasal 26A
                </h3>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  {content.importance}
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Timeline Perkembangan</h3>
              <div className="space-y-4 sm:space-y-6">
                {content.timeline.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onClick={() => setSelectedTimeline(index)}
                    className="flex items-start gap-3 sm:gap-4 cursor-pointer group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#d4af37] to-yellow-600 flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-xl transition-shadow text-sm sm:text-base">
                      {item.year}
                    </div>
                    <div className="flex-1 bg-white/5 rounded-lg p-3 sm:p-4 group-hover:bg-white/10 transition-colors">
                      <p className="text-white font-medium text-sm sm:text-base leading-relaxed">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}