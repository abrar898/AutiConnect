import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  { name: "Nimrah Kamran", role: "Founder", image: "https://i.pravatar.cc/150?u=nimrah" },
  { name: "Amal Asim", role: "Co-Founder", image: "https://i.pravatar.cc/150?u=amal" },
  { name: "Khawaja Muqeet", role: "Mentor", image: "https://i.pravatar.cc/150?u=khawaja" },
  { name: "Hunzala Ali", role: "COO", image: "https://i.pravatar.cc/150?u=hunzala" },
];

export function TeamSection() {
  return (
    <section id="team" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-heading font-bold mb-6">The Minds Behind AutiConnect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            United by a passion for inclusive technology and education.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:border-primary">
                 <Avatar className="w-full h-full">
                    <AvatarImage src={member.image} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                 </Avatar>
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
