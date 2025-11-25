import { motion } from "framer-motion";
import { CheckCircle2, Circle, CircleDashed } from "lucide-react";

const phases = [
  {
    id: "01",
    title: "Phase 1: Alpha Testing",
    duration: "Months 1-3",
    status: "current",
    items: [
      "Market research & user needs analysis",
      "Core feature finalization",
      "Product roadmap creation",
      "Technical framework setup"
    ]
  },
  {
    id: "02",
    title: "Phase 2: Beta Launch",
    duration: "Months 4-6",
    status: "upcoming",
    items: [
      "Backend infrastructure build",
      "AI model training for simulations",
      "MVP development for testing",
      "Gamification integration"
    ]
  },
  {
    id: "03",
    title: "Phase 3: Post-Production",
    duration: "Month 7+",
    status: "upcoming",
    items: [
      "MVP validation with users",
      "Marketing campaigns launch",
      "Partnerships with institutions",
      "Funding expansion"
    ]
  }
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Development Roadmap</h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Our strategic 1-year plan to launch and scale Raabta for maximum impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl h-full hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-6xl font-bold text-slate-700 group-hover:text-primary/20 transition-colors select-none">
                    {phase.id}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-700/50 text-xs font-medium border border-slate-600">
                    {phase.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">{phase.title}</h3>
                
                <ul className="space-y-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
