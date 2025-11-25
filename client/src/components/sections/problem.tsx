import { motion } from "framer-motion";
import { Users, Brain, MessageCircle, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "1 in 68",
    label: "Children affected",
    description: "Global prevalence of Autism Spectrum Disorder",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    value: "350,000+",
    label: "Children in Pakistan",
    description: "Estimated number of autistic children",
    icon: Activity,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    value: "Limited",
    label: "Access to Therapy",
    description: "Most services are concentrated in urban centers",
    icon: Brain,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Understanding the <span className="text-primary">Challenge</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Autism Spectrum Disorder (ASD) affects how a person perceives the world. In Pakistan, stigma and lack of resources leave thousands of families without support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur hover:bg-card transition-colors">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</h3>
                  <h4 className="text-xl font-bold mb-3">{stat.label}</h4>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-border/50">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="p-2 bg-red-100 text-red-600 rounded-lg"><Activity className="w-5 h-5"/></span>
              Key Challenges
            </h3>
            <ul className="space-y-4">
              {[
                "Shortage of trained therapists especially in rural areas",
                "High cost of behavioral and speech therapy",
                "Lack of bilingual resources (Urdu & English)",
                "No real-time digital tools for personalized training"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="p-2 bg-primary/20 text-primary rounded-lg"><Brain className="w-5 h-5"/></span>
              Therapy Areas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Social Interaction", desc: "Improving responses & emotional understanding" },
                { title: "Communication", desc: "Enhancing verbal skills via speech interventions" },
                { title: "Eye Gaze", desc: "Teaching emotional cues & eye contact" },
                { title: "Progress Tracking", desc: "Data-backed insights for parents" }
              ].map((area, i) => (
                <div key={i} className="p-4 bg-background rounded-xl shadow-sm">
                  <p className="font-bold text-sm mb-1">{area.title}</p>
                  <p className="text-xs text-muted-foreground">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
