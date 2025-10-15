import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface ExplanationPageProps {
  content: any;
  onBack: () => void;
  onOpenModal: (modal: any) => void;
}

export function ExplanationPage({ content, onBack, onOpenModal }: ExplanationPageProps) {
  return (
    <motion.div
      key="explanation"
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

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center tracking-tight leading-tight"
        >
          {content.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.cards.map((card: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => onOpenModal(card)}
              className="cursor-pointer"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:border-white/40 transition-all p-6 sm:p-8 h-full shadow-xl hover:shadow-2xl">
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 text-center">{card.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center tracking-tight leading-tight">
                  {card.title}
                </h3>
                <p className="text-blue-100 text-center text-sm">
                  Klik untuk detail lengkap
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}