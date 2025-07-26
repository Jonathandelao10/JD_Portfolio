import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const awards = [
  {
    icon: Medal,
    title: 'Academic Excellence',
    organization: 'Arizona State University',
    year: '2021 - 2025',
    description: 'Consistent academic achievement and recognition',
    category: 'Academic',
    color: 'text-accent'
  },
  {
    icon: Award,
    title: 'Student-Athlete Recognition',
    organization: 'Southwestern College',
    year: '2021-2022',
    description: 'Outstanding performance in academics and athletics',
    category: 'Athletic',
    color: 'text-primary-glow'
  },
  {
    icon: Trophy,
    title: 'IBM Data Science Certification',
    organization: 'IBM',
    year: '2024',
    description: 'Professional certification in data science and analytics',
    category: 'Professional',
    color: 'text-primary'
  },
  {
    icon: Star,
    title: 'NASA NPWEE Academy Certificate',
    organization: 'NASA',
    year: '2024',
    description: 'Completed Technical Proposal with outstanding performance',
    category: 'Professional',
    color: 'text-secondary'
  },
  {
    icon: Trophy,
    title: 'IBM Python for AI & Development Certificate',
    organization: 'IBM',
    year: '2024',
    description: 'Certification in Python programming for AI applications',
    category: 'Technical',
    color: 'text-primary'
  },
  {
    icon: Star,
    title: 'IBM Databases and SQL for Data Science with Python Certificate',
    organization: 'IBM',
    year: '2024',
    description: 'Advanced certification in database management and SQL',
    category: 'Technical',
    color: 'text-secondary'
  }
];

const categories = ['All', 'Professional', 'Technical', 'Academic', 'Athletic', 'Leadership'];

const AwardsSection = () => {
  return (
    <section id="awards" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">AWARDS & CERTIFICATES</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            Recognition for excellence and achievement
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="glass-card p-6 h-full relative overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <Badge 
                  variant="outline" 
                  className="absolute top-4 right-4 text-xs"
                >
                  {award.category}
                </Badge>

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-muted/20 ${award.color}`}>
                    <award.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold gradient-text-secondary">
                      {award.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium">{award.organization}</p>
                      <p>{award.year}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {award.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>

                {/* Floating Decorations */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5 
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary/30 to-secondary/30 
                            rounded-full blur-sm opacity-70"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">20+</div>
            <p className="text-muted-foreground text-sm">Total Awards</p>
          </Card>
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5</div>
            <p className="text-muted-foreground text-sm">Categories</p>
          </Card>
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <p className="text-muted-foreground text-sm">Years</p>
          </Card>
          <Card className="glass-card p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">∞</div>
            <p className="text-muted-foreground text-sm">Future Goals</p>
          </Card>
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Excellence is not a destination; it is a continuous journey that never ends."
            </blockquote>
            <p className="text-sm font-semibold gradient-text">
              - Personal Philosophy
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;