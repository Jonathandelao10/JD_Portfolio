import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'Beam Group',
    role: 'Software Developer',
    period: 'Aug 2024 – May 2025',
    location: 'Remote',
    type: 'Full-time',
    description: 'Developing scalable software solutions and contributing to innovative projects that improve user experience and system efficiency.',
    technologies: ['Python', 'React', 'FastAPI', 'PostgreSQL'],
    status: 'current'
  },
  {
    company: 'Arizona State University',
    role: 'Asset Specialist',
    period: 'Sep 2022 – May 2025',
    location: 'Tempe, AZ',
    type: 'Part-time',
    description: 'Managing and optimizing university assets, implementing data-driven solutions to improve operational efficiency and resource allocation.',
    technologies: ['Data Analysis', 'Project Management', 'Asset Management'],
    status: 'current'
  },
  {
    company: 'CAI3P0',
    role: 'Applied AI Intern',
    period: 'Jun 2024 – Jan 2025',
    location: 'Remote',
    type: 'Internship',
    description: 'Developing AI solutions and machine learning models for real-world applications, focusing on natural language processing and predictive analytics.',
    technologies: ['TensorFlow', 'Python', 'NLTK', 'Machine Learning'],
    status: 'current'
  },
  {
    company: 'NASA - NPWEE Academy',
    role: 'Deputy Project Manager',
    period: 'May 2024 – Aug 2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Led cross-functional teams in aerospace engineering projects, coordinated research initiatives, and managed project timelines for mission-critical applications.',
    technologies: ['Project Management', 'Leadership', 'Research'],
    status: 'completed'
  },
  {
    company: 'Stanford University',
    role: 'Tennis Counselor',
    period: 'Jun 2022 – Aug 2022',
    location: 'Stanford, CA',
    type: 'Seasonal',
    description: 'Mentored young athletes, developed training programs, and fostered leadership skills through sports education and character development.',
    technologies: ['Leadership', 'Mentoring', 'Program Development'],
    status: 'completed'
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">EXPERIENCE</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            Building the future through innovation and collaboration
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 relative overflow-hidden group">
                {/* Status Indicator */}
                <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-xs font-bold ${
                  exp.status === 'current' 
                    ? 'bg-primary/20 text-primary border-l border-b border-primary/30' 
                    : 'bg-secondary/20 text-secondary border-l border-b border-secondary/30'
                }`}>
                  {exp.status === 'current' ? 'Current' : 'Completed'}
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="bg-primary/10 p-4 rounded-xl mb-4">
                      <Briefcase className="h-8 w-8 text-primary mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold gradient-text-secondary mb-2">
                      {exp.company}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Role Details */}
                  <div className="lg:col-span-2">
                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      {exp.role}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow 
                                transition-colors duration-300 font-medium"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.button>
                  </div>

                  {/* Technologies */}
                  <div className="lg:col-span-1">
                    <h5 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Technologies
                    </h5>
                    <div className="space-y-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                          viewport={{ once: true }}
                          className="bg-muted/30 rounded-lg px-3 py-1 text-xs font-medium
                                    hover:bg-muted/50 transition-colors duration-300 cursor-pointer
                                    hover:text-primary border border-transparent hover:border-primary/30"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tr from-accent/20 to-transparent 
                              rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <p className="text-muted-foreground">Organizations</p>
          </Card>
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </Card>
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">∞</div>
            <p className="text-muted-foreground">Impact Potential</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;