import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/hero_image_of_a_child_using_a_tablet.png";

export function Hero() {
  return (
    <section className="relative min-h-[110vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-background via-background to-accent/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-primary/20 backdrop-blur-sm text-sm font-medium text-primary shadow-sm"
            >
              <Sparkles className="w-4 h-4 fill-primary/20" />
              <span>Pakistan’s First AI Social Skills Coach</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-tight">
              Unlock <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600 animate-gradient">
                Every Child's
              </span> <br/>
              Potential
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Raabta uses AI-powered storytelling to help autistic children build social confidence, one interaction at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="rounded-full h-14 px-10 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-2 bg-background/50 backdrop-blur hover:bg-accent/50">
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>

            <div className="pt-10 flex items-center justify-center lg:justify-start gap-12">
              {[
                { label: "Children Supported", value: "350k+" },
                { label: "Languages", value: "Urdu & Eng" },
                { label: "AI Precision", value: "98%" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="font-bold text-3xl text-foreground tracking-tight">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 w-full max-w-[600px] lg:max-w-none relative perspective-1000"
          >
            {/* Main Image Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/20 dark:border-white/10 bg-white dark:bg-slate-900 z-20 transform transition-transform hover:scale-[1.01] duration-500">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
               <img 
                src={heroImage} 
                alt="Child learning" 
                className="w-full h-auto object-cover aspect-[4/3] scale-105 hover:scale-100 transition-transform duration-1000"
              />
              
              {/* UI Overlays */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-20" />
              
              <div className="absolute bottom-8 left-8 z-30 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" style={{backgroundImage: `url(https://i.pravatar.cc/100?img=${10+i})`, backgroundSize: 'cover'}} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-white/90">Used by 1,000+ families</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center border border-white/20 z-30 rotate-6"
            >
              <span className="text-4xl">🚀</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/20 z-30 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Live Analysis</span>
              </div>
              <p className="text-sm font-bold">Eye contact improved by 15% this session.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
