import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", role: "", message: "" });
  };

  return (
    <section className="py-32 bg-gradient-to-b from-background via-accent/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to Make a Difference? Join us in empowering autistic children across Pakistan with accessible, AI-powered therapy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+923332907662" className="text-lg font-semibold hover:text-primary transition-colors">
                    +92 333 2907662
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:auticonnect8@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors break-all">
                    auticonnect8@gmail.com
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-8">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Quick Links</p>
                <div className="space-y-3">
                  {["Mission", "Features", "Timeline", "Team"].map((link) => (
                    <a 
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 dark:border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Full Name</label>
                      <Input 
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="h-12 rounded-xl border-border/50 dark:border-white/10 dark:bg-slate-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Email Address</label>
                      <Input 
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12 rounded-xl border-border/50 dark:border-white/10 dark:bg-slate-800"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">I am a...</label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                      <SelectTrigger className="h-12 rounded-xl border-border/50 dark:border-white/10 dark:bg-slate-800">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parent">Parent/Guardian</SelectItem>
                        <SelectItem value="therapist">Therapist/Educator</SelectItem>
                        <SelectItem value="institution">Institution/School</SelectItem>
                        <SelectItem value="partner">Partner/Investor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your interest in Raabta"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-32 rounded-xl border-border/50 dark:border-white/10 dark:bg-slate-800 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-12 rounded-full text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40"
                  >
                    Request Early Access
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
