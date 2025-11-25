import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { FeaturesSection } from "@/components/sections/features";
import { RoadmapSection } from "@/components/sections/roadmap";
import { TeamSection } from "@/components/sections/team";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <RoadmapSection />
        <TeamSection />
        
        {/* Footer / Contact CTA */}
        <footer className="bg-card py-12 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start the Journey?</h2>
                        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                            Join us in empowering autistic children across Pakistan with accessible, AI-powered social skills coaching.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-lg font-bold">
                                Contact Us
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8 h-12 text-lg">
                                Partner with Us
                            </Button>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; 2025 Raabta. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                        <a href="mailto:nimrahkamran620@gmail.com" className="hover:text-primary">nimrahkamran620@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
}
