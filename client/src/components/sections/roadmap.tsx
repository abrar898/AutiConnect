import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const phases = [
  {
    id: "01",
    title: "Alpha Testing",
    time: "Months 1-3",
    desc: "Market validation and core feature definition.",
    active: false
  },
  {
    id: "02",
    title: "Beta Launch",
    time: "Months 4-6",
    desc: "MVP development, AI training, and initial user testing.",
    active: true
  },
  {
    id: "03",
    title: "Scale Up",
    time: "Month 7+",
    desc: "Full public release, marketing, and institutional partnerships.",
    active: false
  }
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Strategic Roadmap</h2>
            <p className="text-xl text-muted-foreground">
              Our phased approach ensures Raabta is built on a foundation of real user feedback and clinical validity.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 px-6 py-3 rounded-full border shadow-sm font-mono text-sm">
            Current Phase: <span className="text-primary font-bold">Beta Launch</span>
          </div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-3 gap-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div 
                  className={cn(
                    "bg-background border p-8 rounded-[2rem] relative z-10 transition-all duration-300 hover:-translate-y-2",
                    phase.active 
                      ? "border-primary shadow-xl shadow-primary/10 ring-4 ring-primary/5" 
                      : "border-border shadow-lg hover:border-primary/50"
                  )}
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className={cn("text-5xl font-bold opacity-20", phase.active ? "text-primary opacity-100" : "")}>
                      {phase.id}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider bg-muted px-3 py-1 rounded-full">
                      {phase.time}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
