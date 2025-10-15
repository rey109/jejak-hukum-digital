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
        className="text-center mb-12 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {content.title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-4">
          {content.subtitle}
        </p>
        <p className="text-lg text-blue-200">
          Klik tiap bagian untuk memahami isi pasal ini secara visual
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        {sectionCards.map((card: any, index: number) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="cursor-pointer"
            onClick={() => onNavigate(card.id as Section)}
          >
            <Card className={cn(
              "p-6 h-full bg-gradient-to-br backdrop-blur-sm border-white/20 hover:border-white/40 transition-all shadow-xl hover:shadow-2xl",
              card.color
            )}>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                {card.title}
              </h3>
              <p className="text-white/90">{card.desc}</p>
              <ChevronRight className="h-6 w-6 text-white mt-4 ml-auto" />
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
