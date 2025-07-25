import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'SpaceX Launch Predictor',
    description: 'Machine learning model that predicts SpaceX launch success rates using historical data and weather patterns.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    category: 'AI/ML',
    featured: true,
    status: 'completed'
  },
  {
    title: 'AI-Powered Assistant',
    description: 'Intelligent chatbot with natural language processing capabilities for customer service automation.',
    technologies: ['Python', 'NLTK', 'FastAPI', 'React'],
    category: 'AI/ML',
    featured: true,
    status: 'in-progress'
  },
  {
    title: 'Political News Bias Predictor',
    description: 'NLP model that analyzes news articles to detect political bias and sentiment using deep learning.',
    technologies: ['Python', 'TensorFlow', 'NLTK', 'Web Scraping'],
    category: 'AI/ML',
    featured: true,
    status: 'completed'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SQL', 'Stripe API'],
    category: 'Full-Stack',
    featured: false,
    status: 'completed'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for real-time data analysis and visualization using modern web technologies.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    category: 'Data Science',
    featured: false,
    status: 'completed'
  },
  {
    title: 'Blockchain Voting System',
    description: 'Secure voting platform using blockchain technology to ensure transparency and prevent fraud.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    category: 'Blockchain',
    featured: false,
    status: 'in-progress'
  }
];

const categories = ['All', 'AI/ML', 'Full-Stack', 'Data Science', 'Blockchain'];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">PROJECTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground mb-8">
            Transforming ideas into intelligent solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  filter === category 
                    ? 'glow-btn' 
                    : 'glass-card hover:bg-muted/50'
                }`}
                onClick={() => setFilter(category)}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold gradient-text-secondary mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredProjects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="glass-card p-6 h-full relative overflow-hidden group">
                  {/* Status Badge */}
                  <Badge 
                    variant={project.status === 'completed' ? 'default' : 'secondary'}
                    className="absolute top-4 right-4"
                  >
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold gradient-text-secondary">
                        {project.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-muted/30 rounded-lg px-2 py-1 text-xs font-medium
                                    hover:bg-muted/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 glow-btn">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 pointer-events-none"
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold gradient-text-secondary mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-card p-4 h-full">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-muted/20 rounded px-2 py-1 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="ghost">
                        <Github className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
