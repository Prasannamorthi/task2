
import React from 'react';
import { Shield, Database, Code, Lock, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import DemoSection from '@/components/DemoSection';
import SecurityMeasures from '@/components/SecurityMeasures';
import LearningOutcomes from '@/components/LearningOutcomes';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
        
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">SecureAuth</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-cyan-400 transition-colors">Demo</a>
            <a href="#security" className="text-gray-300 hover:text-cyan-400 transition-colors">Security</a>
            <a href="#learn" className="text-gray-300 hover:text-cyan-400 transition-colors">Learn</a>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
            Get Started
          </Button>
        </nav>

        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Tech Stack Section */}
        <TechStack />
        
        {/* Demo Section */}
        <DemoSection />
        
        {/* Security Measures */}
        <SecurityMeasures />
        
        {/* Learning Outcomes */}
        <LearningOutcomes />
        
        {/* Call to Action */}
        <CallToAction />
        
        {/* Footer */}
        <footer className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Shield className="h-6 w-6 text-cyan-400" />
                <span className="text-lg font-semibold text-white">SecureAuth Project</span>
              </div>
              <p className="text-gray-400 text-sm">
                Built with PHP, MySQL, and modern web security practices
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
