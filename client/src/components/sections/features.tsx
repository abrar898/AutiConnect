import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import eyeIcon from "@assets/generated_images/eye_gaze_detection_feature_icon.png";
import chatIcon from "@assets/generated_images/ai_conversational_bot_feature_icon.png";
import gameIcon from "@assets/generated_images/gamification_feature_icon.png";
import dashIcon from "@assets/generated_images/parent_dashboard_feature_icon.png";

const features = [
  {
    title: "AI Conversational Bot",
    description: "Practice social cues, greetings, and everyday conversations in both English & Urdu.",
    image: chatIcon,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Eye Gaze Detection",
    description: "Instant analysis of focus and attention to support social skill development.",
    image: eyeIcon,
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    title: "Gamified Progress",
    description: "Visual rewards and milestones that celebrate therapeutic and behavioral growth.",
    image: gameIcon,
    gradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Parent Dashboard",
    description: "Curated progress insights and communication patterns to guide therapy effectively.",
    image: dashIcon,
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Solution</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-6">
            Meet <span className="text-primary">Raabta</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A mobile and web application using AI-powered, culturally relevant storytelling to help autistic children.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-none bg-transparent hover:bg-muted/50 transition-colors duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${feature.gradient} mb-8 p-6 transition-transform duration-300 group-hover:scale-105`}>
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
