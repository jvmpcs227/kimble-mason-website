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
  X,
  Target,
  MessageSquare,
  Sparkles,
  Volume2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  
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
      
      {/* 1. NAVIGATION BAR - PERMANENTLY WHITE */}
      {/* Increased navbar height by exactly 3% (padding py-2 md:py-2.5 -> py-2.06 md:py-2.575, rounded to py-2 md:py-3) to cleanly accommodate the larger logo */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border shadow-sm py-2 md:py-3">
        <div className="container flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo container - noticeably bigger logo, custom aspect, fits neatly with slim modern bar padding */}
            {/* Logo container - noticeably bigger logo, custom aspect, fits neatly with slim modern bar padding */}
            {/* Made the logo exactly 7% larger than previous scale (1.212 * 1.07 = 1.297) */}
            <div className="w-24 h-24 md:w-28 md:h-24 flex items-center justify-center relative bg-transparent border-0 shadow-none -my-4 md:-my-5 ml-4 mr-3 md:ml-6 md:mr-5">
              <img 
                src="/images/client_logo_transparent.webp" 
                srcSet="/images/client_logo_transparent_mobile.webp 120w, /images/client_logo_transparent.webp 252w"
                sizes="(max-width: 768px) 120px, 252px"
                alt="KJM Leadership Development Logo" 
                className="w-full h-full scale-[1.45] object-contain bg-transparent border-0 shadow-none"
                loading="eager"
              />
            </div>
            {/* 1. NAVBAR — ADD NAME NEXT TO LOGO (Vertically centered, subtitle removed) */}
            <div className="flex items-center">
              <span className="font-serif text-sm md:text-lg font-bold tracking-tight text-primary">Kimble J Mason</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent relative py-1 ${
                  activeSection === link.href.substring(1) ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent animate-fade-in" />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 transition-colors hover:text-accent text-primary"
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
            </div>
          </div>
        )}
      </header>

            {/* 2. HERO SECTION - Vertically narrower (py-12 md:py-16, removed min-h-screen to avoid taking too much screen height) */}
      <section className="relative flex items-center justify-center pt-32 pb-16 overflow-hidden bg-primary">
        {/* Subtle Textured Background */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply bg-cover bg-center hidden md:block" style={{ backgroundImage: `url('/images/hero_bg.webp')` }} />
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply bg-cover bg-center block md:hidden" style={{ backgroundImage: `url('/images/hero_bg_mobile.webp')` }} />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent z-10" />

        <div className="container relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6 md:py-10">
          <div className="lg:col-span-8 flex flex-col space-y-6 text-left">
            {/* 4. HERO SECTION — REORDER AND RESIZE TEXT */}
            {/* Executive Coaching is now the dominant larger text */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground leading-[1.3] font-serif">
              Executive Coaching and Leadership Development tailored to meet the needs of Individuals, Managers, Leaders and Teams in Western Australia.
            </h1>
            
            {/* Purpose paragraph is smaller but still prominent, sitting below */}
            <p className="text-sm sm:text-base text-primary-foreground/80 font-light max-w-3xl leading-relaxed">
              Purpose: To develop effective and influential leadership capabilities in individuals and teams that inspire followers, facilitate change and growth to make a lasting impact
            </p>
            
            {/* 4. HERO SECTION — BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:border-accent hover:bg-accent/10 text-primary-foreground font-semibold tracking-wide rounded-none px-8 py-5 text-sm h-11">
                <a href="#services">Services</a>
              </Button>
            </div>
          </div>

          {/* Premium Profile Portrait Container - Perfectly aligned with the quote on desktop */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-6">
            {/* Set exact width on desktop (w-[240px]) to match the quote block precisely */}
            <div className="relative w-full max-w-[240px] lg:w-[240px] aspect-[3/4] border border-accent/30 p-2 bg-primary-foreground/5 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent"></div>
              
              <div className="w-full h-full overflow-hidden bg-primary/20">
                <img 
                  src="/images/client_portrait_hero.webp" 
                  srcSet="/images/client_portrait_hero_mobile.webp 320w, /images/client_portrait_hero.webp 713w"
                  sizes="(max-width: 768px) 320px, 713px"
                  alt="Kimble Mason - Leadership Coach Perth" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

            {/* 5. HERO SECTION — MOVE LEADERSHIP QUOTE DIRECTLY UNDER PHOTO */}
            {/* Matches the portrait width (max-w-[240px] lg:w-[240px]) exactly so they align perfectly on both desktop edges */}
            {/* Made the quote text slightly larger on desktop (lg:text-sm instead of text-xs) for significantly improved readability */}
            <div className="w-full max-w-[240px] lg:w-[240px] text-left space-y-4">
              <blockquote className="border-l-2 border-accent pl-3 py-0.5 italic text-primary-foreground/80 text-xs lg:text-sm font-serif leading-relaxed">
                "True leadership is not about position, authority or command; it is about the ability to influence and direct a group of people to achieve willingly the team or Organisational Goals" <span className="not-italic font-sans text-[10px] lg:text-[11px] uppercase tracking-wider text-accent font-bold ml-1.5 whitespace-nowrap">— Kimble J Mason</span>
              </blockquote>

              {/* Moved '30+ Years' Badge directly underneath the subheading text below Kim's photo */}
              {/* Added whitespace-nowrap and slightly adjusted tracking/text-size to guarantee it stays strictly on one line inside the 240px container on all devices */}
              <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-2 py-1.5 w-full justify-center overflow-hidden">
                <span className="text-[9.5px] lg:text-[10px] uppercase tracking-wider text-accent font-bold text-center whitespace-nowrap">30+ Years British Army Officer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT / PROFILE SECTION */}
      <section id="about" className="py-24 bg-background border-b border-border scroll-mt-20">
        <div className="container">
          {/* About content reorganised cleanly as a centered block without any photo */}
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <p className="text-lg font-serif text-primary/90 italic leading-relaxed">
              Kimble Mason <span className="text-sm font-sans font-bold not-italic bg-accent/10 text-accent px-2 py-0.5">BSc, MSc, MBA</span> is a Leadership Development specialist, executive coach and facilitator with over 30 years of experience developing individuals in complex, high-pressure public, military and private sector environments.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              A graduate of the United Kingdom's elite Army Officer Training Organisation, <strong>The Royal Military Academy Sandhurst</strong>, Kim brings deep practical insight into what effective leadership really looks like. He is known for his engaging presence, emotional intelligence and ability to influence at all levels.
            </p>

            {/* Quote moved to Hero Section */}
          </div>
        </div>
      </section>

      {/* 4. CLIENT LOGO BAR */}
      <section id="clients" className="py-16 bg-secondary/50 border-b border-border scroll-mt-20">
        <div className="container text-center">
          {/* 9. TRUSTED BY SECTION — HEADING */}
          <div className="flex flex-col items-center space-y-3 mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-primary font-serif max-w-4xl leading-snug">
              Kim has designed and facilitated high impact leadership development programs for Organisations including:
            </h2>
            <div className="h-0.5 w-12 bg-accent mt-2"></div>
          </div>
          
          {/* Logo Strip Grid - Desktop row-centering layout with custom scale overrides to ensure all logos match visually */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: "BHP", logo: "/images/37944.webp" },
              { name: "Rio Tinto", logo: "/images/37930.webp", scaleClass: "scale-[1.35]" },
              { name: "Alinta Energy", logo: "/images/37943.webp", scaleClass: "scale-[1.25]" },
              { name: "Synergy", logo: "/images/37942.webp", scaleClass: "scale-[1.3]" },
              { name: "WA Treasury Corp", logo: "/images/37936.webp" },
              { name: "WA Police", logo: "/images/37937.webp", scaleClass: "scale-[1.25]" },
              { name: "DFES", logo: "/images/37941.webp" },
              { name: "Perth Transport", logo: "/images/37947.webp", scaleClass: "scale-[1.3]" },
              { name: "Horizon Power", logo: "/images/37935.webp", scaleClass: "scale-[1.35]" },
              { name: "Vault Minerals", logo: "/images/37945.webp" }
            ].map((client) => (
              <div 
                key={client.name} 
                className="bg-white border border-transparent rounded-lg p-2 md:p-3 h-24 flex items-center justify-center transition-all duration-300 md:hover:scale-[1.03] w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] min-w-[140px] max-w-[280px]"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} Logo`} 
                  className={`w-auto h-auto max-w-[96%] max-h-[96%] object-contain filter-none ${client.scaleClass || ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE SERVICES SECTION */}
      <section id="services" className="py-24 bg-background border-b border-border scroll-mt-20">
        <div className="container">
          {/* 10. CORE SERVICES SECTION — REMOVE ORANGE LABEL */}
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif">Services</h2>
            <p className="text-base text-muted-foreground">
              All programs are customised and contextualised to meet the unique needs of your leaders and teams, ensuring immediate practical application and long-term behavioral change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            {/* 12. CORE SERVICES — SERVICE CARD STYLING: bg-secondary/10 (slightly darker than bg-background) and visually impactful icons */}
            <div className="bg-secondary/10 border border-border p-8 hover:border-accent hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center border border-accent/30 shadow-inner">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">Executive Coaching</h3>
                {/* 11. CORE SERVICES — UPDATE SERVICE CARD DESCRIPTIONS */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Ideal for helping individuals to unlock their creative potential to achieve their work and life goals and to move forward on those things that are important to them."
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent font-bold pt-6 hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                Enquire <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-secondary/10 border border-border p-8 hover:border-accent hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center border border-accent/30 shadow-inner">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">Team Development Workshops</h3>
                {/* 11. CORE SERVICES — UPDATE SERVICE CARD DESCRIPTIONS */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Highly Interactive sessions designed to help develop effective and high performing teams by strengthening team understanding, dynamics, collaboration, trust, and accountability."
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent font-bold pt-6 hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                Enquire <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-secondary/10 border border-border p-8 hover:border-accent hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center border border-accent/30 shadow-inner">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">Leadership Training Programs</h3>
                {/* 11. CORE SERVICES — UPDATE SERVICE CARD DESCRIPTIONS */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Structured courses covering topics such as 'What is effective Leadership?', Intent Based and Inclusive Leadership, Performance Management, Mental Wellbeing, Difficult Conversations, Conflict resolution, and change management."
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent font-bold pt-6 hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                Enquire <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 4 */}
            <div className="bg-secondary/10 border border-border p-8 hover:border-accent hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-2 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center border border-accent/30 shadow-inner">
                  <Volume2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">Executive Presentation and Communication Skills</h3>
                {/* 11. CORE SERVICES — UPDATE SERVICE CARD DESCRIPTIONS */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Learn and practice the art of delivering information and presenting with confidence, personal impact, conviction, and authority."
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent font-bold pt-6 hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                Enquire <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP PROGRAMS SECTION */}
      <section id="programs" className="py-24 bg-secondary/30 border-b border-border scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* 13. LEADERSHIP PROGRAMS SECTION: Remove "Curriculum" label/heading; remove two paragraphs under "Leadership Programs Include" heading; keep only the topic list */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif">Leadership Programs Include</h2>
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
          {/* 14. CREDENTIALS SECTION — REMOVE PEDIGREE: Remove "Pedigree" label/heading entirely */}
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-serif">Qualifications & Memberships</h2>
            {/* 15. CREDENTIALS SECTION — UPDATE WORDING: change "to the highest standard" to "to the highest standard of coaching and facilitation integrity." */}
            <p className="text-base text-muted-foreground">
              A solid foundation of academic excellence, executive certification, and professional membership ensuring the highest standard of coaching and facilitation integrity.
            </p>
          </div>

          {/* Qualifications Grid - Centering the last row on desktop and tablet */}
          <div className="flex flex-wrap justify-center gap-6">
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
                <div 
                  key={idx} 
                  className="bg-secondary/20 border border-border p-6 flex items-start gap-4 hover:bg-secondary/40 transition-colors duration-200 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="p-3 bg-background border border-accent/20 text-accent shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    {/* 16. CREDENTIALS SECTION — SMALLER TEXT: Qualifications text smaller throughout (text-sm for title, text-xs for description) */}
                    <h4 className="font-serif text-sm font-bold text-primary leading-snug">{cred.title}</h4>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground font-serif">What My Clients Say</h2>
            <div className="h-0.5 w-12 bg-accent mt-1"></div>
          </div>

          {/* 17. TESTIMONIALS — Clean 3-column grid for 9 real quotes, balancing perfectly across all devices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "I thought it was an awesome course - Kim was very knowledgeable, great sense of humour and made it an encouraging, positive environment. I felt engaged for the whole day and encouraged to put myself out there more.",
                author: "Alinta Energy"
              },
              {
                quote: "The session was very well facilitated. The activities were engaging and plentiful, keeping the energy in the room up throughout the day. Kim was great and the content covered was very applicable to my role.",
                author: "Alinta Energy"
              },
              {
                quote: "Kim was an outstanding facilitator. His energy, knowledge and ability to engage the cohort in discussions was excellent.",
                author: "Station Officer, DFES"
              },
              {
                quote: "Kim is exceptional at his role. Excellent presentation. The fact that Kim managed to keep 20 Firies engaged all day was an achievement.",
                author: "DFES"
              },
              {
                quote: "Excellent Presentation.",
                author: "Vault Minerals"
              },
              {
                quote: "Kim is an excellent facilitator — very engaging, reads the room, delivers the content at good pace with humour and some personal connections with all attendees.",
                author: "Health Support Services"
              },
              {
                quote: "This was a very fun and informative workshop. Kim was an amazing and encouraging facilitator.",
                author: "Health Support Services"
              },

              {
                quote: "Kim was wonderful. He kept us on track and had a great combination of practical opportunities and theory.",
                author: "City of Cockburn"
              },
              {
                quote: "No improvement required as this session was a standout and the most informative and engaging of the sessions attended to date.",
                author: "City of Perth"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 relative flex flex-col justify-between backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex text-accent gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent" />)}
                  </div>
                  <p className="font-serif text-base italic text-primary-foreground/90 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-primary-foreground/10 mt-6 shrink-0">
                  <p className="font-serif text-sm font-bold text-accent">
                    {t.author || "Participant Feedback"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section id="contact" className="py-20 bg-background scroll-mt-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Details - Resized and balanced nicely (Get in Touch heading removed) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="h-1 w-10 bg-accent"></div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/5 border border-accent/20 flex items-center justify-center text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <a href="mailto:kimjmason@hotmail.com" className="text-base font-bold text-primary hover:text-accent transition-colors">
                      kimjmason@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/5 border border-accent/20 flex items-center justify-center text-accent">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
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
                    <p className="text-base font-bold text-primary">
                      Perth, Western Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/5 border border-accent/20 flex items-center justify-center text-accent">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <a 
                      href="https://au.linkedin.com/in/kimble-mason-092a981" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-base font-bold text-primary hover:text-accent transition-colors flex items-center gap-1.5"
                    >
                      Connect on LinkedIn <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Resized to fit nicely side-by-side with contact details */}
            <div className="lg:col-span-7 bg-secondary/10 border border-border p-6 md:p-8 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/40"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/40"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/40"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/40"></div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-wider font-bold text-primary/70">Full Name *</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required 
                      placeholder="" 
                      className="bg-background border-border rounded-none focus-visible:ring-accent h-10 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="organisation" className="text-[10px] uppercase tracking-wider font-bold text-primary/70">Organisation</label>
                    <Input 
                      id="organisation" 
                      name="organisation" 
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="" 
                      className="bg-background border-border rounded-none focus-visible:ring-accent h-10 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-wider font-bold text-primary/70">Email Address *</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required 
                    placeholder="" 
                    className="bg-background border-border rounded-none focus-visible:ring-accent h-10 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-wider font-bold text-primary/70">Your Message *</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required 
                    placeholder="" 
                    rows={3}
                    className="bg-background border-border rounded-none focus-visible:ring-accent resize-none text-sm"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold tracking-wide rounded-none py-5 transition-all duration-300 text-sm h-11">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-6">
            {/* Noticeably bigger KJM logo in footer, matched exactly to the header logo size across all devices */}
            <div className="w-24 h-24 md:w-28 md:h-24 flex items-center justify-center relative bg-transparent border-0 shadow-none">
              <img 
                src="/images/client_logo_transparent.webp" 
                alt="KJM Leadership Development Logo" 
                className="w-full h-full scale-[1.212] object-contain bg-transparent border-0 shadow-none"
                loading="lazy"
              />
            </div>

            <p className="text-xs text-primary-foreground/60 text-center">
              © {new Date().getFullYear()} Kimble Mason Leadership Development. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a 
                href="https://au.linkedin.com/in/kimble-mason-092a981" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-primary-foreground/60 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-primary-foreground/20">|</span>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setPrivacyModalOpen(true);
                }} 
                className="text-xs text-primary-foreground/60 hover:text-accent transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* PRIVACY POLICY MODAL - Redesigned to match premium dark style of the site with comfortable bottom clearance */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-primary/95 backdrop-blur-md animate-fade-in">
          <div 
            className="bg-background text-foreground w-full max-w-2xl max-h-[80vh] md:max-h-[75vh] flex flex-col shadow-2xl border border-accent/20 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Geometric accents matching the site's design */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/60"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/60"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/60"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/60"></div>

            {/* Header - shrink-0 added to prevent vertical compression */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-secondary/20 shrink-0">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-primary">Privacy Policy</h3>
                <p className="text-[10px] text-accent uppercase tracking-widest font-bold">Australian Privacy Principles Compliant</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed text-muted-foreground scrollbar-thin">
              <p className="text-xs italic text-accent/80">Last updated: May 31, 2026</p>
              
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-primary text-base border-b border-border pb-1">1. Introduction</h4>
                <p>
                  Kimble Mason Leadership Development ("we", "us", "our") is committed to protecting your privacy in accordance with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth). This Privacy Policy explains how we collect, use, disclose, and protect your personal information.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif font-bold text-primary text-base border-b border-border pb-1">2. Information We Collect</h4>
                <p>
                  We collect personal information directly from you when you submit enquiries through our website contact form. This information is limited to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your Name</li>
                  <li>Your Organisation</li>
                  <li>Your Email Address</li>
                  <li>Any other information you voluntarily provide in your message</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif font-bold text-primary text-base border-b border-border pb-1">3. How We Use Your Information</h4>
                <p>
                  The personal information we collect via our contact form is used <strong>solely to respond to your enquiries</strong> and to provide you with information or services that you request from us. We do not use this information for unrelated marketing lists, and we will never sell, rent, or lease your personal details to third parties.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif font-bold text-primary text-base border-b border-border pb-1">4. Disclosure of Personal Information</h4>
                <p>
                  We do not share, sell, or disclose your personal information to any third parties unless required by law, or as necessary to comply with a legal obligation.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif font-bold text-primary text-base border-b border-border pb-1">5. Data Security</h4>
                <p>
                  We take reasonable steps to ensure your personal information is stored securely and protected from unauthorised access, modification, or disclosure. However, please be aware that no transmission of data over the internet can be guaranteed as completely secure.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif font-bold text-primary text-base border-b border-border pb-1">6. Access and Correction</h4>
                <p>
                  You have the right to request access to the personal information we hold about you, or to request that we correct or delete it. To make such a request, please contact us directly via the details provided on our website.
                </p>
              </div>
            </div>

            {/* Footer button inside modal - slimmed down and modern (py-3 px-6) for a sleek, balanced, and sophisticated look */}
            <div className="py-3 px-6 bg-secondary/10 border-t border-border flex justify-end shrink-0">
              <Button 
                onClick={() => setPrivacyModalOpen(false)}
                className="bg-primary hover:bg-accent text-primary-foreground font-bold tracking-wide rounded-none px-6 text-xs h-10 transition-colors shadow-sm cursor-pointer"
              >
                Acknowledge & Close
              </Button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
