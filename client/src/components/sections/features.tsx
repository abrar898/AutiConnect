import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Shield, BarChart3, MessageSquare, Eye } from "lucide-react";
import eyeIcon from "@assets/generated_images/eye_gaze_detection_feature_icon.png";
import chatIcon from "@assets/generated_images/ai_conversational_bot_feature_icon.png";
import gameIcon from "@assets/generated_images/gamification_feature_icon.png";
import dashIcon from "@assets/generated_images/parent_dashboard_feature_icon.png";

const bentoItems = [
  {
    title: "AI Conversation Partner",
    desc: "Bilingual (Urdu/English) practice for daily social interactions.",
    icon: MessageSquare,
    image: chatIcon,
    colSpan: "md:col-span-2",
    bg: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    title: "Eye Gaze Analysis",
    desc: "Real-time attention tracking using advanced computer vision.",
    icon: Eye,
    image: eyeIcon,
    colSpan: "md:col-span-1",
    bg: "bg-emerald-50 dark:bg-emerald-950/30"
  },
  {
    title: "Gamified Progress",
    desc: "Turn therapy into play with rewards and milestones.",
    icon: Zap,
    image: gameIcon,
    colSpan: "md:col-span-1",
    bg: "bg-amber-50 dark:bg-amber-950/30"
  },
  {
    title: "Parent Insights",
    desc: "Deep analytics to track growth patterns over time.",
    icon: BarChart3,
    image: dashIcon,
    colSpan: "md:col-span-2",
    bg: "bg-purple-50 dark:bg-purple-950/30"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight"
          >
            Therapy Reimagined with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Artificial Intelligence</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground">
            Raabta combines clinical expertise with cutting-edge technology to create a safe space for social learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.colSpan} group`}
            >
              <div className={`relative h-full min-h-[300px] rounded-[2rem] overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${item.bg}`}>
                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg mb-8 max-w-sm">{item.desc}</p>
                  
                  <div className="mt-auto flex justify-end">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-32 h-32 md:w-48 md:h-48 object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-xl" 
                    />
                  </div>
                </div>
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/40 dark:from-black/0 dark:to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
