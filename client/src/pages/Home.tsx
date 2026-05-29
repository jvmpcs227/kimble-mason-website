import React, { useState, useEffect } from "react";
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  CheckCircle, 
  ChevronRight, 
  Compass, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Menu, 
  Phone, 
  Presentation, 
  Shield, 
  Star, 
  Users, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Monitor scroll for header background & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "services", "programs", "credentials", "clients", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully. Kimble will be in touch shortly.");
      setFormData({ name: "", organisation: "", email: "", message: "" });
    }, 1200);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Programs", href: "#programs" },
    { name: "Credentials", href: "#credentials" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent/30 selection:text-primary">
      
      {/* 1. NAVIGATION BAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="container flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center border border-accent/40 relative">
              <span className="font-serif text-lg font-bold text-accent tracking-wider">KM</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-0.5 bg-accent"></div>
              <div className="absolute -top-0.5 -left-0.5 w-0.5 h-2 bg-accent"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-primary group-hover:text-primary/80 transition-colors">Kimble Mason</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold -mt-1">Leadership Development</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent relative py-1 ${activeSection === link.href.substring(1) ? "text-primary font-semibold" : "text-muted-foreground"}`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent animate-fade-in" />
                )}
              </a>
            ))}
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide border border-accent/20 rounded-none shadow-sm px-5">
              <a href="#contact">Work With Kim</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-6 px-6 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-border/50 ${activeSection === link.href.substring(1) ? "text-primary font-semibold" : "text-muted-foreground"}`}
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide border border-accent/20 rounded-none shadow-sm w-full mt-2">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Work With Kim</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-primary">
        {/* Subtle Textured Background */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply bg-cover bg-center" style={{ backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663575070665/EYXzQ57mEo6YHZtxS5bFmo/hero_bg-nbdrtnu7oiFTdrbRiwnQTj.webp')` }} />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent z-10" />

        <div className="container relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 lg:py-24">
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1 self-start">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-xs uppercase tracking-widest text-accent font-bold">30+ Years British Army Leadership</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] font-serif">
              Developing Leaders Who <span className="text-accent italic font-normal">Inspire</span>, Transform and Make a Lasting Impact
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 font-light max-w-2xl leading-relaxed">
              Executive Coaching & Leadership Development tailored for high-stakes corporate, mining, energy, and public sectors in Perth, Western Australia.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold tracking-wide rounded-none px-8 py-6 text-base shadow-lg transition-transform active:scale-[0.97]">
                <a href="#contact">Work With Kim</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:border-accent hover:bg-accent/10 text-primary-foreground font-semibold tracking-wide rounded-none px-8 py-6 text-base">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>

          {/* Premium Profile Portrait Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[3/4] border border-accent/30 p-3 bg-primary-foreground/5 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>
              
              <div className="w-full h-full overflow-hidden bg-primary/20">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663575070665/EYXzQ57mEo6YHZtxS5bFmo/kim_profile-cGdH28gPaZTnCJaezu2HzH.webp" 
                  alt="Kimble Mason - Leadership Coach Perth" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT / PROFILE SECTION */}
      <section id="about" className="py-24 bg-background border-b border-border scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Secondary Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 border border-accent/20 translate-x-2 translate-y-2 z-0"></div>
                <div className="relative z-10 overflow-hidden shadow-xl border border-border">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663575070665/EYXzQ57mEo6YHZtxS5bFmo/about_kim_secondary-iCtX4mH39rxFPdByp8us9J.webp" 
                    alt="Kimble Mason facilitating a leadership workshop in Perth" 
                    className="w-full h-auto object-cover aspect-[3/2]"
                  />
                  <div className="bg-primary text-primary-foreground p-6 border-t border-accent/30">
                    <p className="font-serif text-lg italic text-accent font-light">"True leadership is not about command; it is about inspiring others to achieve what they never thought possible."</p>
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-3 font-semibold">— Kimble Mason</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent"></span>
                <span className="text-xs uppercase tracking-widest text-accent font-bold">The Facilitator</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif">
                About Kimble Mason
              </h2>
              
              <p className="text-lg font-serif text-primary/90 italic leading-relaxed">
                Kimble Mason <span className="text-sm font-sans font-bold not-italic bg-accent/10 text-accent px-2 py-0.5">BSc, MSc, MBA</span> is a Leadership Development specialist, executive coach and facilitator with over 30 years of experience developing individuals in complex, high-pressure public, military and private sector environments.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                A graduate of the United Kingdom's elite Army Officer Training Organisation, <strong>The Royal Military Academy Sandhurst</strong>, Kim brings deep practical insight into what effective leadership really looks like. He is known for his engaging presence, emotional intelligence and ability to influence at all levels.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Based in Perth, Western Australia, Kim specializes in transitioning high-potential managers into exceptional executives, aligning corporate leadership with military-grade strategic execution, and building resilient organizational cultures.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/5 text-accent border border-accent/10">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-primary">Military Precision</h4>
                    <p className="text-xs text-muted-foreground">RMAS training adapted for corporate strategy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/5 text-accent border border-accent/10">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-primary">High EQ Coaching</h4>
                    <p className="text-xs text-muted-foreground">Emotionally intelligent executive facilitation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT LOGO BAR */}
      <section id="clients" className="py-16 bg-secondary/50 border-b border-border scroll-mt-20">
        <div className="container text-center">
          <div className="flex flex-col items-center space-y-3 mb-10">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Corporate Trust</span>
            <h2 className="text-2xl font-bold text-primary font-serif">Trusted By</h2>
            <div className="h-0.5 w-12 bg-accent mt-1"></div>
          </div>
          
          {/* Logo Strip Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              "BHP", 
              "Rio Tinto", 
              "Alinta Energy", 
              "Synergy", 
              "WA Treasury Corp", 
              "WA Police", 
              "DFES", 
              "Perth Transport", 
              "Horizon Power", 
              "Vault Minerals"
            ].map((company) => (
              <div 
                key={company} 
                className="bg-background border border-border py-4 px-6 flex items-center justify-center transition-all duration-300 hover:border-accent hover:shadow-sm group"
              >
                <span className="text-sm font-semibold tracking-wider text-muted-foreground group-hover:text-primary transition-colors uppercase">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE SERVICES SECTION */}
      <section id="services" className="py-24 bg-background border-b border-border scroll-mt-20">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent"></span>
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Services</span>
              <span className="h-px w-8 bg-accent"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif">Our Core Services</h2>
            <p className="text-base text-muted-foreground">
              All programs are customised and contextualised to meet the unique needs of your leaders and teams, ensuring immediate practical application and long-term behavioral change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-background border border-border p-8 hover:border-accent hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center border border-accent/20">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">Executive Coaching</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  One-on-one sessions tailored to enhance leadership purpose, presence, decision-making, and confident performance. Ideal for high-potential managers stepping into executive roles.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent font-bold pt-6 hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                Inquire <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-background border border-border p-8 hover:border-accent hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center border border-accent/20">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">Team Development Workshops</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Highly interactive sessions designed to strengthen collaboration, trust, and accountability within teams. We break down organizational silos and align collective strategic intent.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent font-bold pt-6 hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                Inquire <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-background border border-border p-8 hover:border-accent hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center border border-accent/20">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">Leadership Training Programs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Structured courses covering Intent Based and Inclusive Leadership, conflict resolution, and change management. Practical toolkits designed for immediate deployment in high-pressure sectors.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent font-bold pt-6 hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                Inquire <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 4 */}
            <div className="bg-background border border-border p-8 hover:border-accent hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center border border-accent/20">
                  <Presentation className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">Executive Presentation & Communication</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Learn the art of public speaking and presenting with personal impact, conviction, influence, authenticity and authority. Commanded from 30+ years of military briefing experience.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent font-bold pt-6 hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                Inquire <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP PROGRAMS SECTION */}
      <section id="programs" className="py-24 bg-secondary/30 border-b border-border scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent"></span>
                <span className="text-xs uppercase tracking-widest text-accent font-bold">Curriculum</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif">Leadership Programs Include</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our curriculum is designed to target both internal attributes (self-awareness, EQ) and external execution skills (change management, presentation authority). 
              </p>
              <p className="text-sm text-muted-foreground">
                We combine rigorous theoretical models (MBA, MSc) with battle-tested practical frameworks to deliver highly effective development paths.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide rounded-none shadow-md">
                  <a href="#contact">Request Program Syllabus</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-background border border-border p-8 md:p-10 shadow-sm relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 pointer-events-none rounded-bl-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Understanding Self",
                    "Understanding Leadership",
                    "Leading Others",
                    "Team Development",
                    "Safety Development and Leadership",
                    "Emotional Intelligence",
                    "Effective Communication and Presenting Skills",
                    "Influence as a Leader",
                    "Inclusive & Purpose-Driven Leadership",
                    "Leading Change and Change Management"
                  ].map((program, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2.5 border-b border-border/60 last:border-0">
                      <div className="w-5 h-5 bg-accent/10 flex items-center justify-center text-accent">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium text-primary">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CREDENTIALS SECTION */}
      <section id="credentials" className="py-24 bg-background border-b border-border scroll-mt-20">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent"></span>
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Pedigree</span>
              <span className="h-px w-8 bg-accent"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif">Qualifications & Memberships</h2>
            <p className="text-base text-muted-foreground">
              A solid foundation of academic excellence, executive certification, and professional membership ensuring the highest standard of coaching integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Executive & Organisational Coaching Certification", desc: "ICF Qualified & certified leadership coach.", icon: Award },
              { title: "Master of Business Administration (MBA)", desc: "Advanced business strategy, finance, and organizational behavior.", icon: BookOpen },
              { title: "Master of Science in Defence Technology (MSc)", desc: "Technical leadership and complex systems analysis.", icon: BookOpen },
              { title: "Bachelor of Science (BSc)", desc: "Scientific approach to evidence-based development.", icon: GraduationCap },
              { title: "Royal Military Academy Sandhurst Graduate", desc: "Elite British Army officer leadership training.", icon: Shield },
              { title: "Associate Member – Institute of Management Consultants", desc: "Adhering to professional consulting ethics (AIMC).", icon: Users },
              { title: "Association for Project Managers – APMP", desc: "Certified structured delivery and program execution.", icon: Briefcase }
            ].map((cred, idx) => {
              const IconComponent = cred.icon;
              return (
                <div key={idx} className="bg-secondary/20 border border-border p-6 flex items-start gap-4 hover:bg-secondary/40 transition-colors duration-200">
                  <div className="p-3 bg-background border border-accent/20 text-accent">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-bold text-primary leading-snug">{cred.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cred.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-accent/5 pointer-events-none rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 pointer-events-none rounded-tl-full"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground font-serif">What My Clients Say</h2>
            <div className="h-0.5 w-12 bg-accent mt-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 relative flex flex-col justify-between backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex text-accent gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent" />)}
                </div>
                <p className="font-serif text-lg italic text-primary-foreground/90 leading-relaxed">
                  "Kimble's coaching was instrumental during my transition into an executive role. His unique blend of military precision and deep corporate intelligence gave me the confidence and clarity needed to lead our division through complex organizational changes."
                </p>
              </div>
              <div className="pt-6 border-t border-primary-foreground/10 mt-6">
                <p className="font-serif text-sm font-bold text-accent">Executive Director</p>
                <p className="text-xs text-primary-foreground/60">Perth Resources & Mining Sector</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 relative flex flex-col justify-between backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex text-accent gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent" />)}
                </div>
                <p className="font-serif text-lg italic text-primary-foreground/90 leading-relaxed">
                  "The Team Development workshops led by Kim completely transformed our leadership team's dynamics. He cut through the politics and helped us establish a high-trust, intent-based execution model that has dramatically improved our accountability."
                </p>
              </div>
              <div className="pt-6 border-t border-primary-foreground/10 mt-6">
                <p className="font-serif text-sm font-bold text-accent">General Manager</p>
                <p className="text-xs text-primary-foreground/60">Western Australian Energy Utility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-background scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-accent"></span>
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">Engagement</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif">Work With Kim</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Ready to develop leadership capability in your organisation? Get in touch to discuss a tailored coaching engagement, team workshop, or strategic training program.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/5 border border-accent/20 flex items-center justify-center text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Email Directly</p>
                    <a href="mailto:kim@integral.global" className="text-base font-bold text-primary hover:text-accent transition-colors">
                      kim@integral.global
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/5 border border-accent/20 flex items-center justify-center text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Call Kim</p>
                    <a href="tel:0455488842" className="text-base font-bold text-primary hover:text-accent transition-colors">
                      0455 488 842
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/5 border border-accent/20 flex items-center justify-center text-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Location</p>
                    <p className="text-base font-bold text-primary">
                      Perth, Western Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-secondary/20 border border-border p-8 md:p-10 shadow-sm">
                <h3 className="text-xl font-bold font-serif text-primary mb-6">Send a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-wider font-bold text-primary">Full Name *</label>
                      <Input 
                        id="name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe" 
                        className="bg-background border-border rounded-none focus-visible:ring-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="organisation" className="text-xs uppercase tracking-wider font-bold text-primary">Organisation</label>
                      <Input 
                        id="organisation"
                        type="text" 
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="Company Pty Ltd" 
                        className="bg-background border-border rounded-none focus-visible:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-primary">Email Address *</label>
                    <Input 
                      id="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com" 
                      className="bg-background border-border rounded-none focus-visible:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider font-bold text-primary">Message *</label>
                    <Textarea 
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your leadership development requirements..." 
                      className="bg-background border-border rounded-none focus-visible:ring-accent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide rounded-none w-full py-6 shadow-md"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-10 bg-accent flex items-center justify-center border border-accent/40">
                <span className="font-serif text-sm font-bold text-primary tracking-wider">KM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-tight text-primary-foreground">Kimble Mason</span>
                <span className="text-[9px] uppercase tracking-widest text-primary-foreground/50 font-semibold -mt-1">Leadership Development</span>
              </div>
            </div>

            <p className="text-xs text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} Kimble Mason Leadership Development. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">LinkedIn</a>
              <span className="text-primary-foreground/20">|</span>
              <a href="#" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
