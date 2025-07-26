import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const education = [
  {
    institution: 'Arizona State University',
    degree: 'Bachelor of Science in Computer Science',
    period: '2022–2025',
    location: 'Tempe, AZ',
    description: 'Specialized in Machine Learning, AI, and Software Engineering. Active in research projects and tech organizations.',
    highlights: ['Machine Learning Focus', 'AI Research', 'Software Engineering'],
    status: 'current'
  },
  {
    institution: 'Southwestern College',
    degree: 'Bachelor of Science in Computer Science',
    period: '2021–2022',
    location: 'Winfield, KS',
    description: 'Foundation in mathematics, sciences, and computer fundamentals. Maintained high academic standing while competing as a student-athlete.',
    highlights: ['Student-Athlete', 'Academic Excellence', 'Leadership'],
    status: 'completed'
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">EDUCATION</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            Academic foundation for technological innovation
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-8 relative overflow-hidden">
                {/* Status Indicator */}

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Institution Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-primary/20 p-3 rounded-xl">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold gradient-text-secondary mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-lg font-semibold text-foreground mb-2">
                          {edu.degree}
                        </p>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (highlightIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="bg-muted/30 rounded-lg px-3 py-2 text-sm font-medium
                                  hover:bg-muted/50 transition-colors duration-300 cursor-pointer
                                  hover:text-primary border border-transparent hover:border-primary/30"
                      >
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-xl" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-xl" />
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;