import { motion } from 'framer-motion';
import { Code, Database, Brain, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    color: 'text-primary',
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'C', 'SQL', 'HTML', 'CSS', 'Bash']
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    color: 'text-secondary',
    skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'Numpy', 'NLTK', 'Matplotlib']
  },
  {
    icon: Database,
    title: 'Databases & Tools',
    color: 'text-accent',
    skills: ['PostgreSQL', 'Git', 'GitHub', 'Linux/Unix', 'Windows', 'Jupyter Notebook']
  },
  {
    icon: Wrench,
    title: 'Frameworks & Technologies',
    color: 'text-primary-glow',
    skills: ['React', 'FastAPI', 'TailwindCSS', 'VS Code', 'PyCharm', 'JUnit', 'Jira', 'Slack']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">SKILLS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-card p-6 h-full">
                <div className="text-center mb-6">
                  <category.icon className={`h-12 w-12 mx-auto mb-4 ${category.color}`} />
                  <h3 className="text-lg font-bold gradient-text-secondary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="bg-muted/30 rounded-lg px-3 py-2 text-sm font-medium text-center 
                                hover:bg-muted/50 transition-colors duration-300 cursor-pointer
                                hover:text-primary"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['GCC', 'Putty', 'Machine Learning', 'Data Analysis', 'Project Management', 'Team Leadership'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 
                          border border-primary/30 rounded-full px-4 py-2 text-sm font-medium
                          hover:from-primary/30 hover:to-secondary/30 transition-all duration-300
                          cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;