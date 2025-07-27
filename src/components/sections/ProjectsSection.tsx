import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'SpaceX Launch Predictor',
    description: 'Machine learning model to predict SpaceX Falcon 9 first stage landing success. Collected data via APIs and web scraping, performed data wrangling and EDA, and created interactive visual analytics. Built and evaluated classification models to analyze the impact of variables like payload mass and launch site on landing success.',
    technologies: ['Python', 'SQL', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook', 'BeautifulSoup'],
    category: 'AI/ML',
    featured: true,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/Data-Science-Certificate/tree/main/Capstone%20Project'
  },
  {
    title: 'Political News Bias Predictor',
    description: 'NLP model that analyzes news articles to detect political bias and sentiment using deep learning. US Political News Bias Predictor, leveraging NLP and machine learning to detect bias across news sources while minimizing overfitting to specific outlets.',
    technologies: ['Python', 'TensorFlow', 'Numpy', 'NLTK', 'Scikit-learn', 'Pandas', 'BERT'],
    category: 'AI/ML',
    featured: true,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/Bias_Detector'
  },
  {
    title: 'AI-Powered Assistant',
    description: 'Intelligent chatbot with natural language processing capabilities for customer service automation. A custom AI assistant built using LLaMA 3.2, optimized through quantization and instruction tuning for accurate, efficient responses.',
    technologies: ['Python', 'NLTK', 'Llama 3.2', 'HuggingFace', 'Transformers'],
    category: 'AI/ML',
    featured: true,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/NLP-Project'
  },
  {
    title: 'AI chatbot for Financial Services',
    description: 'An AI chatbot, designed to guide seniors through complex financial aid applications, improving accessibility through natural conversation.',
    technologies: ['Gemini', 'JavaScript', 'React', 'Node.js', 'Firebase', 'CSS'],
    category: 'AI/ML',
    featured: true,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10'
  },
  {
    title: 'Wine Quality prediction with ML models',
    description: 'Machine learning model that predicts the quality of wine using different machine learning algorithms such as K-means clustering and decision tree classification.',
    technologies: ['Python', 'Scikit-learn', 'Numpy', 'Jupyter Notebook'],
    category: 'AI/ML',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/DataScienceProjects'
  },
  {
    title: 'Real Estate Market Predictor',
    description: 'Machine learning model that predicts real estate prices.',
    technologies: ['Python', 'Scikit-learn', 'Numpy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    category: 'AI/ML',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/DataScienceProjects'
  },
  {
    title: 'F1 Predictor 2025',
    description: 'Machine learning model that predicts the F1 winner.',
    technologies: ['Python', 'Jupyter Notebook', 'Pandas'],
    category: 'AI/ML',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/DataScienceProjects'
  },
  {
    title: 'Facebook Sentiment Analysis',
    description: 'Sentiment analysis tool for Facebook posts and comments using natural language processing.',
    technologies: ['Python', 'NLTK', 'Numpy', 'Pandas', 'Matplotlib'],
    category: 'AI/ML',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/DataScienceProjects'
  },
  {
    title: 'Sales Forecast Predictor',
    description: 'Machine Learning model that predicts Sales Forecast using XGBoost.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'XGBoost', 'Seaborn'],
    category: 'AI/ML',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/DataScienceProjects'
  },
  {
    title: 'Stock Price predictor using Tensorflow',
    description: 'Stock price prediction model using Tensorflow and LSTM (Long Short-Term Memory) networks a type of RNN.',
    technologies: ['Python', 'Numpy', 'Pandas', 'TensorFlow', 'Seaborn', 'Matplotlib', 'Jupyter Notebook'],
    category: 'AI/ML',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/DataScienceProjects'
  },
  {
    title: 'Credit Card Fraud Detector',
    description: 'Machine learning model that detects fraudulent credit card transactions using historical data. This by analyzing transaction patterns, enabling the model to distinguish between normal and fraudulent activity.',
    technologies: ['Python', 'Matplotlib', 'Numpy', 'Pandas', 'Seaborn', 'Jupyter Notebook'],
    category: 'AI/ML',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/DataScienceProjects'
  },
  {
    title: 'Effortlogger tool',
    description: 'Used agile methodologies to lead a team of 4 individuals for enhancing the EffortLogger tool for a manufacturing firm. Implemented features to adapt to business needs, enhance security, and support large-scale projects. Successfully modernized the tool, meeting customer specifications and improving functionality.',
    technologies: ['Java', 'JUnit', 'Eclipse', 'Jira', 'Astah'],
    category: 'Software Engineering',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/JarrettGilp/Th54-EffortLoggerV2'
  },
  {
    title: 'Vehicle Software',
    description: 'Program to simulate the operation of vehicles to compare the performance of traditional, electric and hybrid automobiles. Gives you the best option comparing the performance of each of the vehicles.',
    technologies: ['C++'],
    category: 'Software Engineering',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10'
  },
  {
    title: 'Phone Directory',
    description: 'Phone directory that allows the user to create, show, insert, remove, store and find contacts in it. All this functions through the use of data structures.',
    technologies: ['C++'],
    category: 'Software Engineering',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/phoneDirectory'
  },
  {
    title: 'Rapid Recovery',
    description: 'Web application to assist in the recovery of Stroke Patients. The game helps in the development of the Fine Motor Skills(FMS) deactivated in the patients suffering from Stroke.',
    technologies: ['JavaScript', 'p5.js', 'Git'],
    category: 'Web Development',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10'
  },
  {
    title: 'Mario Bros Website',
    description: 'Website based on the classic game "Mario Bros" using HTML, CSS and Javascript, which is compatible with Laptops, desktops and other devices.',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    category: 'Web Development',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/Mario-Bros-Website'
  },
  {
    title: 'eCommerce Platform',
    description: 'Designed and developed a full-stack e-commerce platform to showcase advanced database management skills. The backend was powered by PostgreSQL, focusing on efficient schema design, relational integrity, and query optimization. The frontend, built with React, HTML, CSS, and JavaScript. The project demonstrated proficiency in building scalable CRUD operations, managing user sessions, and integrating frontend components with a robust SQL backend.',
    technologies: ['PostgreSQL', 'JavaScript', 'CSS', 'HTML', 'React'],
    category: 'Full-Stack',
    featured: false,
    status: 'completed',
    githubUrl: 'https://github.com/Jonathandelao10/eCommerce_app'
  }
];

const categories = ['All', 'AI/ML', 'Full-Stack', 'Software Engineering', 'Web Development'];

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

                    <div className="flex justify-center pt-4">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
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

                    <div className="flex justify-center pt-2">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-3 w-3" />
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
