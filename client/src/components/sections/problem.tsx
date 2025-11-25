import { motion } from "framer-motion";
import { TrendingUp, Users2, Globe2 } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              The Silent <br/>
              <span className="text-red-500">Crisis</span> in Care
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-12">
              Autism prevalence is rising, but access to quality care isn't keeping pace. In Pakistan, cultural stigma and resource scarcity leave thousands of children behind.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Critical Shortage",
                  desc: "Severe lack of trained therapists in rural regions.",
                  color: "bg-red-500"
                },
                {
                  title: "Financial Barrier",
                  desc: "Therapy costs are prohibitive for most families.",
                  color: "bg-orange-500"
                },
                {
                  title: "Language Gap",
                  desc: "Most tools are English-only, ignoring local context.",
                  color: "bg-blue-500"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className={`w-1.5 h-16 ${item.color} rounded-full group-hover:scale-y-110 transition-transform`} />
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl rounded-full" />
            <div className="grid gap-6 relative">
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <Users2 className="w-8 h-8 text-red-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Prevalence</span>
                </div>
                <p className="text-5xl font-bold mb-2">1 in 68</p>
                <p className="text-slate-400">Children affected by ASD globally</p>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <Globe2 className="w-8 h-8 text-blue-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Local Impact</span>
                </div>
                <p className="text-5xl font-bold mb-2">350,000+</p>
                <p className="text-slate-400">Estimated autistic children in Pakistan</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
