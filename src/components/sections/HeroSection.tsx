import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
          >
            Jonathan De la O
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            From student-athlete to AI innovator.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl gradient-text-secondary font-semibold mb-12"
          >
            Creating solutions that scale
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button className="glow-btn px-8 py-6 text-lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="glass-card px-8 py-6 text-lg" asChild>
              <a href="https://drive.google.com/file/d/1vLR3xcdZnaja7cEIkawdv_lRNlsAs53Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" asChild>
              <a href="https://github.com/Jonathandelao10" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" asChild>
              <a href="https://www.linkedin.com/in/jonathandelao10/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors" asChild>
              <a href="mailto:jonathan.delao@example.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-primary/20 blur-xl float" />
          <div className="absolute top-40 right-32 w-32 h-32 rounded-full bg-secondary/20 blur-xl float" style={{ animationDelay: '-2s' }} />
          <div className="absolute bottom-40 left-32 w-24 h-24 rounded-full bg-accent/20 blur-xl float" style={{ animationDelay: '-4s' }} />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;