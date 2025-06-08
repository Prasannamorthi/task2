
import React from 'react';
import { BookOpen, Code, Shield, Database, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LearningOutcomes = () => {
  const outcomes = [
    {
      icon: <Code className="h-8 w-8 text-purple-400" />,
      title: "PHP Development Skills",
      description: "Master server-side programming with PHP",
      skills: ["Object-oriented programming", "Form processing", "Session management", "Error handling"]
    },
    {
      icon: <Database className="h-8 w-8 text-blue-400" />,
      title: "Database Management",
      description: "Learn MySQL database design and operations",
      skills: ["Database schema design", "CRUD operations", "Prepared statements", "Data relationships"]
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Web Security",
      description: "Implement industry-standard security practices",
      skills: ["Password hashing", "SQL injection prevention", "CSRF protection", "Input validation"]
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      title: "User Experience",
      description: "Create intuitive and accessible interfaces",
      skills: ["Form design", "Error messaging", "Responsive layouts", "Accessibility"]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-400" />,
      title: "Best Practices",
      description: "Follow industry standards and conventions",
      skills: ["Code organization", "Documentation", "Testing strategies", "Deployment"]
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      title: "Portfolio Project",
      description: "Build a complete project for your portfolio",
      skills: ["Project planning", "Full-stack development", "Problem solving", "Career readiness"]
    }
  ];

  return (
    <section id="learn" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What You'll Learn
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gain practical skills that employers value and build a strong foundation for your web development career
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {outcome.icon}
                  <CardTitle className="text-white text-lg">{outcome.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  {outcome.description}
                </CardDescription>
                <ul className="space-y-2">
                  {outcome.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg p-8 border border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Step-by-Step Development Plan</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span className="text-gray-300">Set up development environment</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span className="text-gray-300">Design database schema</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span className="text-gray-300">Build frontend forms</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span className="text-gray-300">Implement PHP backend</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                  <span className="text-gray-300">Add security measures</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">6</span>
                  <span className="text-gray-300">Test and deploy</span>
                </li>
              </ol>
            </div>
            <div className="text-center">
              <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-300 mb-4">Hours of hands-on coding</div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-gray-300">Practical, real-world project</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
