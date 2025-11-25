import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Nimrah Kamran",
    role: "Founder - Software Engineer",
    initials: "NK",
    color: "bg-pink-100 text-pink-600"
  },
  {
    name: "Amal Asim",
    role: "Co-Founder - Software Engineer",
    initials: "AA",
    color: "bg-purple-100 text-purple-600"
  },
  {
    name: "Khawaja Muqeet",
    role: "Co-Founder - CEO NerdFlow",
    initials: "KM",
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Iqra Rathore",
    role: "CMO - Preplify",
    initials: "IR",
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Hunzala Ali",
    role: "COO - Software Engineer",
    initials: "HA",
    color: "bg-orange-100 text-orange-600"
  },
  {
    name: "Obaid Ahmed Khan",
    role: "Director of Design",
    initials: "OA",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    name: "Abdul Hadi Butt",
    role: "CTO - NerdFlow",
    initials: "AH",
    color: "bg-cyan-100 text-cyan-600"
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Meet the Team</h2>
          <p className="text-lg text-muted-foreground">
            A diverse team of experts in AI, education, therapy, and design working together to create an inclusive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className={`text-xl font-bold ${member.color}`}>
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <div className="flex gap-2">
                  <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
