
import React from 'react';
import { Shield, Lock, Database, Code, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "User-Friendly Forms",
      description: "Clean, responsive signup and login forms built with HTML5 and modern CSS"
    },
    {
      icon: <Code className="h-8 w-8 text-cyan-400" />,
      title: "PHP Backend",
      description: "Robust server-side processing with secure authentication logic"
    },
    {
      icon: <Lock className="h-8 w-8 text-green-400" />,
      title: "Password Hashing",
      description: "Industry-standard password_hash() implementation for maximum security"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-400" />,
      title: "Session Management",
      description: "Secure session handling with proper timeout and validation"
    },
    {
      icon: <Database className="h-8 w-8 text-blue-400" />,
      title: "MySQL Integration",
      description: "Optimized database structure with prepared statements"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-400" />,
      title: "Input Validation",
      description: "Comprehensive form validation and SQL injection prevention"
    }
  ];

  return (
    <section id="features" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Authentication System
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every feature you need to build production-ready user authentication with modern security practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {feature.icon}
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
