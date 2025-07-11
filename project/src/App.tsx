import {
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Github,
  Hand,
  Home,
  Linkedin,
  Mail,
  Rocket,
  Search,
  TrendingUp
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isTyping, setIsTyping] = useState(true);
  const [showContactBox, setShowContactBox] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "LLM-Powered Search and Summarizer",
      description: "Developed a Python-based AI search assistant using Ollama (qwen2:0.5b) to query web data, scrape results, and deliver real-time summaries, minimizing reliance on paid APIs.",
      icon: <Search className="w-6 h-6" />,
      features: ["AI-powered query processing", "Real-time web scraping", "Intelligent summarization"],
      technologies: ["Python", "Ollama", "Web Scraping"]
    },
    {
      title: "House Price Prediction Model",
      description: "Designed an ML model using Python and scikit-learn, achieving 92% accuracy in predicting house prices on a 10,000-sample dataset via optimized regression techniques.",
      icon: <Home className="w-6 h-6" />,
      features: ["92% prediction accuracy", "Advanced regression optimization", "10,000+ data samples processed"],
      technologies: ["Python", "scikit-learn", "ML"]
    },
    {
      title: "Efficient Engine Integration",
      description: "Built an efficient engine with Google Programmable Search Engine, Newspaper3k, and Streamlit, ensuring scalable performance for consumer products and distributed applications.",
      icon: <Rocket className="w-6 h-6" />,
      features: ["Google Search API integration", "Advanced content extraction", "Scalable architecture"],
      technologies: ["Google APIs", "Streamlit", "Python"]
    },
    {
      title: "Enhanced Model Performance",
      description: "Enhanced model performance through feature engineering and hyperparameter tuning, applying object-oriented design and mathematical optimization principles.",
      icon: <TrendingUp className="w-6 h-6" />,
      features: ["Hyperparameter optimization", "Object-oriented design", "Mathematical optimization"],
      technologies: ["Feature Engineering", "Optimization", "OOP"]
    },
    {
      title: "Gesture-Controlled Virtual Assistant",
      description: "Created an AI assistant using Python, MediaPipe, and OpenCV to control system functions (e.g., Notepad, volume) via hand gestures, with real-time visual and voice feedback.",
      icon: <Hand className="w-6 h-6" />,
      features: ["Real-time gesture detection", "System control integration", "Voice feedback system"],
      technologies: ["Python", "MediaPipe", "OpenCV"]
    },
    {
      title: "Multi-Modal AI Document Intelligence System",
      description: "Developed an enterprise-grade AI system combining computer vision, NLP, and deep learning to automatically extract, analyze, and classify complex documents with 96% accuracy.",
      icon: <FileText className="w-6 h-6" />,
      features: ["Transformer-based document understanding", "96% classification accuracy", "Enterprise-grade system"],
      technologies: ["Computer Vision", "NLP", "Deep Learning"]
    }
  ];

  const skills = {
    "Programming Languages": ["C++", "Python", "Java", "JavaScript", "HTML/CSS", "Kotlin"],
    "Libraries & Frameworks": ["C++ STL", "Python Libraries", "ReactJS", "React Native"],
    "Databases & Tools": ["MongoDB", "Firebase", "Git", "GitHub"],
    "Cloud Platforms": ["Data Structures", "Algorithms", "Operating Systems", "Object-Oriented Programming"],
    "Areas of Interest": ["Agentic AI Systems", "Natural Language Processing", "Web Development", "Machine Learning", "System Design"]
  };

  const experience = [
    {
      title: "Full Stack Development Intern",
      company: "Techardors",
      period: "Jul - Aug 2024",
      description: "Developed a React.js and Flask web app, enhancing user engagement by 30% through UI/UX improvements and secure REST API integration with MongoDB, reducing data retrieval time by 25%.",
      achievements: ["30% improvement in user engagement", "25% reduction in data retrieval time", "Secure REST API integration"]
    },
    {
      title: "AI with Python Intern",
      company: "Coincent (Partnership with Microsoft)",
      period: "Aug - Sep 2024",
      description: "Built ML models using TensorFlow and scikit-learn, achieving 90% accuracy in predictive analytics for a distributed system project, optimizing classification and regression tasks.",
      achievements: ["90% accuracy in predictive analytics", "Distributed system optimization", "Advanced ML implementation"]
    }
  ];

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    // Here you could add logic to send the form data to an API or email service
    setTimeout(() => {
      setShowContactBox(false);
      setFormSent(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <AnimatedBackground />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-teal-500 rounded border-2 border-teal-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'about', label: '01. About' },
                  { id: 'experience', label: '02. Experience' },
                  { id: 'work', label: '03. Work' },
                  { id: 'contact', label: '04. Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-teal-400'
                        : 'text-gray-300 hover:text-teal-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button className="px-4 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-slate-900 transition-colors">
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Social Links */}
      <div className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center space-y-4">
        <a href="https://github.com/Hhs7304" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" title="GitHub">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/hariharasudhanng/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" title="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:hariharasudhanga@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors" title="Email">
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-px h-24 bg-gray-400"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Network nodes and connections */}
            <g stroke="#14b8a6" strokeWidth="1" fill="none">
              {/* Triangular shapes */}
              <path d="M100 150 L180 100 L160 200 Z" opacity="0.6" />
              <path d="M300 250 L380 200 L360 300 Z" opacity="0.4" />
              <path d="M500 350 L580 300 L560 400 Z" opacity="0.5" />
              <path d="M700 150 L780 100 L760 200 Z" opacity="0.3" />
              <path d="M900 450 L980 400 L960 500 Z" opacity="0.6" />
              
              {/* Lines connecting points */}
              <line x1="100" y1="150" x2="300" y2="250" opacity="0.3" />
              <line x1="180" y1="100" x2="380" y2="200" opacity="0.2" />
              <line x1="300" y1="250" x2="500" y2="350" opacity="0.4" />
              <line x1="500" y1="350" x2="700" y2="150" opacity="0.3" />
              <line x1="700" y1="150" x2="900" y2="450" opacity="0.2" />
              <line x1="160" y1="200" x2="360" y2="300" opacity="0.3" />
              <line x1="360" y1="300" x2="560" y2="400" opacity="0.4" />
              <line x1="560" y1="400" x2="760" y2="200" opacity="0.2" />
              <line x1="760" y1="200" x2="960" y2="500" opacity="0.3" />
              
              {/* Additional geometric shapes */}
              <path d="M200 500 L280 450 L260 550 Z" opacity="0.4" />
              <path d="M400 600 L480 550 L460 650 Z" opacity="0.5" />
              <path d="M600 500 L680 450 L660 550 Z" opacity="0.3" />
              <path d="M800 600 L880 550 L860 650 Z" opacity="0.4" />
              
              {/* More connecting lines */}
              <line x1="200" y1="500" x2="400" y2="600" opacity="0.3" />
              <line x1="400" y1="600" x2="600" y2="500" opacity="0.2" />
              <line x1="600" y1="500" x2="800" y2="600" opacity="0.4" />
              <line x1="280" y1="450" x2="480" y2="550" opacity="0.3" />
              <line x1="480" y1="550" x2="680" y2="450" opacity="0.2" />
              <line x1="680" y1="450" x2="880" y2="550" opacity="0.3" />
              
              {/* Scattered dots */}
              <circle cx="150" cy="300" r="2" fill="#14b8a6" opacity="0.6" />
              <circle cx="350" cy="150" r="2" fill="#14b8a6" opacity="0.4" />
              <circle cx="550" cy="250" r="2" fill="#14b8a6" opacity="0.5" />
              <circle cx="750" cy="350" r="2" fill="#14b8a6" opacity="0.3" />
              <circle cx="950" cy="200" r="2" fill="#14b8a6" opacity="0.6" />
              <circle cx="250" cy="400" r="2" fill="#14b8a6" opacity="0.4" />
              <circle cx="450" cy="500" r="2" fill="#14b8a6" opacity="0.5" />
              <circle cx="650" cy="350" r="2" fill="#14b8a6" opacity="0.3" />
              <circle cx="850" cy="450" r="2" fill="#14b8a6" opacity="0.4" />
              
              {/* Additional angular shapes */}
              <path d="M50 400 L120 380 L100 450 L80 420 Z" opacity="0.3" />
              <path d="M1000 300 L1070 280 L1050 350 L1030 320 Z" opacity="0.4" />
              <path d="M150 700 L220 680 L200 750 L180 720 Z" opacity="0.3" />
              <path d="M950 700 L1020 680 L1000 750 L980 720 Z" opacity="0.5" />
            </g>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-teal-400 text-sm mb-4 font-mono">
              {isTyping ? "Hi, my name is" : "Hi, my name is"}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hariharasudhan G A
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-400 mb-8">
              I build intelligent systems and web solutions.
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              I'm a software engineer specializing in AI, data science, and web development. 
              Currently pursuing my Bachelor's in Artificial Intelligence and Data Science at 
              <span className="text-teal-400"> SNS College of Engineering</span>, with a focus on building accessible, 
              intelligent solutions that solve real-world problems.
            </p>
            <button 
              onClick={() => scrollToSection('work')}
              className="inline-flex items-center px-8 py-4 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 group"
            >
              Check out my projects!
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-white mr-4">
              <span className="text-teal-400 font-mono text-xl mr-2">01.</span>
              About Me
            </h2>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Hello! I'm Hariharasudhan, a passionate software engineer currently pursuing my Bachelor's degree in 
                  Artificial Intelligence and Data Science. I love creating intelligent systems that solve real-world 
                  problems and building web applications that provide great user experiences.
                </p>
                
                <p>
                  My journey in tech has led me to work on various projects ranging from AI-powered search engines to 
                  machine learning models for price prediction. I'm particularly interested in the intersection of AI and 
                  web development, where I can leverage both skillsets to build innovative solutions.
                </p>
                
                <p>
                  I've gained valuable experience through internships at companies like Techardors and Microsoft, where 
                  I've worked on full-stack development and machine learning projects. Here are some technologies I've 
                  been working with:
                </p>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-8">
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">Python</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">Java</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">C++</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">HTML/CSS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">React.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">MongoDB</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">Firebase</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">TensorFlow</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">scikit-learn</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">Natural Language Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">Data Structures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">Algorithms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">Problem Solving</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ChevronRight className="w-3 h-3 text-teal-400" />
                    <span className="text-gray-300 font-mono text-sm">Leadership</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="w-full h-80 bg-slate-800 rounded-lg border-2 border-teal-400/30 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent"></div>
                  <div className="absolute inset-4 border border-teal-400/50 rounded-lg"></div>
                  <div className="absolute inset-8 border border-teal-400/30 rounded-lg"></div>
                  <img 
                    src="professional pic.jpg" 
                    alt="Hariharasudhan G A" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-teal-400 rounded-full opacity-40"></div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Education</h4>
                  <p className="text-gray-300 text-sm">B.Tech in AI & Data Science</p>
                  <p className="text-gray-400 text-xs">SNS College of Engineering</p>
                  <p className="text-teal-400 text-xs mt-1">CGPA: 8.0</p>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Contact</h4>
                  <div className="space-y-1">
                    <p className="text-gray-300 text-xs">hariharasudhanga@gmail.com</p>
                    <p className="text-gray-300 text-xs">+91 9385871907</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-white mr-4">
              <span className="text-teal-400 font-mono text-xl mr-2">02.</span>
              Experience
            </h2>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-teal-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-white mr-4">
              <span className="text-teal-400 font-mono text-xl mr-2">03.</span>
              Some Things I've Built
            </h2>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-teal-400">
                    {project.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-teal-400 transition-colors cursor-pointer" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-white mr-4">
              <span className="text-teal-400 font-mono text-xl mr-2">04.</span>
              Certifications
            </h2>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Career Essentials in Generative AI", provider: "Microsoft", date: "Dec 2024" },
              { title: "Career Essentials in Data Analysis", provider: "Microsoft", date: "Dec 2024" },
              { title: "Advanced Software Engineering Job Simulation", provider: "Walmart Global Tech", date: "Jan 2025" },
              { title: "Software Developer Virtual Experience Program", provider: "Goldman Sachs", date: "Dec 2024" },
              { title: "Introduction to Gemini for Google Workspace", provider: "Google", date: "Jul 2024" },
              { title: "Data Visualization: Empowering Business with Effective Insights", provider: "Google", date: "Dec 2024" }
            ].map((cert, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors">
                <h3 className="font-semibold text-white mb-2 text-sm">{cert.title}</h3>
                <p className="text-teal-400 text-sm mb-1">{cert.provider}</p>
                <p className="text-gray-400 text-xs">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <p className="text-teal-400 font-mono text-sm mb-4">05. What's Next?</p>
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowContactBox(true)}
                className="inline-flex items-center px-8 py-4 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 group"
              >
                <Mail className="mr-2 w-4 h-4" />
                Say Hello
              </button>
              <a 
                href="/AMZON RES.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-teal-400 text-slate-900 rounded hover:bg-teal-500 transition-all duration-300 group"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </div>
            {showContactBox && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                <div className="bg-slate-900 p-8 rounded-lg shadow-lg w-full max-w-md relative">
                  <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-teal-400"
                    onClick={() => setShowContactBox(false)}
                  >
                    ×
                  </button>
                  <h3 className="text-xl font-bold mb-4 text-white">Contact Me</h3>
                  {formSent ? (
                    <div className="text-teal-400 text-center font-semibold">Thank you! Your message has been sent.</div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-teal-400 focus:outline-none"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-teal-400 focus:outline-none"
                        required
                      />
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        placeholder="Your Message"
                        className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-teal-400 focus:outline-none"
                        rows={4}
                        required
                      />
                      <button
                        type="submit"
                        className="w-full py-2 bg-teal-400 text-slate-900 rounded hover:bg-teal-500 font-semibold transition-colors"
                      >
                        Send
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm mb-4">
            Built with React & Tailwind CSS
          </p>
          <p className="text-gray-500 text-xs">
            © 2025 Hariharasudhan G A. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;