import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/hero_image_of_a_child_using_a_tablet.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-float opacity-50" />
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Pakistan’s First AI Social Skills Coach
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-[1.1]">
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Every Child</span> to Connect
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            Raabta is an AI-powered bilingual coach helping autistic children improve social, emotional, and communication skills through culturally adapted learning.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 text-lg h-12">
              Start Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-12 border-2">
              <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <p className="font-bold text-2xl text-foreground">350k+</p>
              <p>Children in Pakistan</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-bold text-2xl text-foreground">Bilingual</p>
              <p>Urdu & English Support</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
            <img 
              src={heroImage} 
              alt="Child learning with Raabta" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            
            {/* Floating Badge 1 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                🎉
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Daily Progress</p>
                <p className="font-bold text-sm">Excellent!</p>
              </div>
            </motion.div>

             {/* Floating Badge 2 */}
             <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-4 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <p className="text-xs font-bold">Live Eye Tracking</p>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative elements behind image */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full rounded-3xl border-2 border-dashed border-primary/30" />
        </motion.div>
      </div>
    </section>
  );
}
