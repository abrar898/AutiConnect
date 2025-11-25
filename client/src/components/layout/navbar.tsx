import { Link } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Problem", href: "#problem" },
    { name: "Features", href: "#features" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Raabta
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button className="rounded-full font-medium px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="w-full rounded-full">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
