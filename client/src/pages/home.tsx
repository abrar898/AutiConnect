import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { FeaturesSection } from "@/components/sections/features";
import { RoadmapSection } from "@/components/sections/roadmap";
import { TeamSection } from "@/components/sections/team";
import { ContactSection } from "@/components/sections/contact";

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
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-card py-12 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; 2025 Raabta. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                        <a href="mailto:auticonnect8@gmail.com" className="hover:text-primary">auticonnect8@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
}
