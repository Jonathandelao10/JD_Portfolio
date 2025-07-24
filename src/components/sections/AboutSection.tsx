import { motion } from 'framer-motion';
import { Download, Code, Brain, Database, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const roles = [
  { icon: Brain, title: 'AI Developer', color: 'text-primary' },
  { icon: Code, title: 'Software Developer', color: 'text-secondary' },
  { icon: Database, title: 'Data Scientist', color: 'text-accent' },
  { icon: Users, title: 'Project Manager', color: 'text-primary-glow' },
];

const dynamicRoles = [
  'AI Developer',
  'Machine Learning Engineer', 
  'Software Developer',
  'Data Scientist',
  'Project Manager',
  'Computer Scientist'
];

const AboutSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = dynamicRoles[currentRoleIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
      }
    }
  }, [displayText, isTyping, currentRoleIndex]);

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">ABOUT ME</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Role Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-card p-6 text-center">
                    <role.icon className={`h-8 w-8 mx-auto mb-3 ${role.color}`} />
                    <h3 className="font-semibold text-sm">{role.title}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button className="glow-btn w-full">
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text-secondary min-h-[2.5rem] flex items-center">
                {displayText}
                <span className="ml-1 w-0.5 h-6 bg-primary animate-pulse" />
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Computer Science professional with a strong interest in Machine Learning, AI, and Data Science. 
                  With experience in AI development, data analysis, and project management, I've contributed to real-world 
                  projects at <span className="text-primary font-semibold">NASA</span>, <span className="text-secondary font-semibold">CAI3p0</span>, 
                  <span className="text-accent font-semibold"> Beam Group</span>, and <span className="text-primary-glow font-semibold">ASU</span>.
                </p>
                <p>
                  I enjoy building intelligent systems that solve meaningful problems and improve user experience. 
                  Whether leading teams or diving into technical challenges, I bring curiosity, precision, and a drive to make an impact.
                </p>
                <p>
                  My journey from student-athlete to AI innovator has taught me the value of persistence, collaboration, 
                  and continuous learning in creating solutions that truly scale.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;