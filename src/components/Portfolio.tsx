import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, GraduationCap, Briefcase, FolderOpen, Award, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import AwardsSection from './sections/AwardsSection';
import ContactSection from './sections/ContactSection';
import AnimatedBackground from './3d/AnimatedBackground';

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'awards', label: 'Awards', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HeroSection />;
      case 'about': return <AboutSection />;
      case 'skills': return <SkillsSection />;
      case 'education': return <EducationSection />;
      case 'experience': return <ExperienceSection />;
      case 'projects': return <ProjectsSection />;
      case 'awards': return <AwardsSection />;
      case 'contact': return <ContactSection />;
      default: return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Top Navigation Bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/30"
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary/20 text-primary'
                    : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden glass-card"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </motion.header>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.nav
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 sidebar-glass z-40 p-6"
          >
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold gradient-text mb-2">
                  Jonathan De la O
                </h2>
                <p className="text-muted-foreground text-sm">
                  AI Developer & Computer Scientist
                </p>
              </div>

              <div className="flex-1 space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="pt-6 border-t border-border/30">
                <p className="text-xs text-muted-foreground text-center">
                  © 2024 Jonathan De la O
                </p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>


      {/* Main Content */}
      <main className="min-h-screen pt-16">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {renderSection()}
        </motion.div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Portfolio;