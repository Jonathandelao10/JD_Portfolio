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
    type: 'Part-time',
    description: '• Designed and developed an AI-powered chatbot to help seniors navigate and complete complex Canadian financial aid forms, including dynamic PDF filling and personalized guidance.\n• Engineered backend APIs using Firebase and JavaScript to support real-time form processing and logic-based response generation.\n• Led chatbot prompt design and NLP integration to ensure human-like conversation and adaptive question flows.\n• Collaborated with a cross-functional team to deliver a production-ready MVP, improving accessibility for non-technical users.\n• Conducted rigorous testing, user interviews, and documentation to support future deployment and scalability.',
    technologies: ['Python', 'Javascript', 'React', 'Firebase', 'Node.js', 'Gemini'],
    status: 'current'
  },
  {
    company: 'Arizona State University',
    role: 'Asset Specialist',
    period: 'Sep 2022 – May 2025',
    location: 'Tempe, AZ',
    type: 'Part-time',
    description: '• Coordinating the tagging of all movable equipment with a value of $5,000 or more.\n• Coordinating a biennial inventory of all capital equipment per PCS 600.\n• Maintaining capital asset records in Workday and tracking capital assets from inception to retirement.\n• Completing annual and ad hoc asset reports.\n• Responding to auditor and sponsor requests.\n• Other administrative duties or special projects as assigned.',
    technologies: ['Excel', 'Workday', 'Data Analysis', 'Asset Management', 'Slack'],
    status: 'current'
  },
  {
    company: 'CAI3P0',
    role: 'Applied AI Intern',
    period: 'Jun 2024 – Jan 2025',
    location: 'Remote',
    type: 'Internship',
    description: '• Contributed to strategic planning and implementation of AI solutions, integrating technical insights with real-world applications.\n• Completed specialized AI training, enhancing skills in machine learning, natural language processing (NLP), and model evaluation.\n• Collaborated on AI-driven solutions and engaged with stakeholders to align chatbot development with business needs.\n• Conducted strategic AI research and case studies, analyzing chatbot effectiveness and optimizing performance.\n• Developed an AI Chatbot, gaining expertise in Transformer models and Mixture of Experts.',
    technologies: ['Python', 'Machine learning', 'Javascript', 'React', 'NLTK', 'Tensorflow', 'Transformers', 'HuggingFace', 'AI'],
    status: 'current'
  },
  {
    company: 'NASA - NPWEE Academy',
    role: 'Deputy Project Manager',
    period: 'May 2024 – Aug 2024',
    location: 'Remote',
    type: 'Internship',
    description: '• Collaborated with an interdisciplinary team to develop an AI-Driven Real-Time Analysis for CubeSat Mission Reliability technical proposal.\n• Developed skills in technical proposal writing, peer review, and research project planning.\n• Managed programmatic aspects for the team, overseeing budgeting, scheduling, and outreach efforts.\n• Introduced efficient project management and scheduling methods, cutting project completion time by 20%.',
    technologies: ['Project Management', 'Leadership', 'research', 'Jira', 'Technical Proposal Writing'],
    status: 'completed'
  },
  {
    company: 'Stanford University',
    role: 'Tennis Counselor',
    period: 'Jun 2022 – Aug 2022',
    location: 'Stanford, CA',
    type: 'Seasonal',
    description: 'Mentored young athletes, developed training programs, and fostered leadership skills through sports education and character development. Developed leadership skills to organize tennis learning groups of +100 kids and adults. Accomplished communication skills by applying different teaching methods for a wide range of ages.',
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
            <div className="text-3xl font-bold gradient-text mb-2">1+</div>
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