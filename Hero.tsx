
import React from 'react';
import { Shield, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700">
            <Shield className="h-6 w-6 text-cyan-400" />
            <Code className="h-6 w-6 text-purple-400" />
            <Database className="h-6 w-6 text-green-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Secure Login &<br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Signup System
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Master web security with a hands-on PHP & MySQL authentication system. 
          Learn password hashing, session management, and SQL injection prevention 
          through real-world development practices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 px-8 py-3 text-lg">
            Start Building Now
          </Button>
          <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3 text-lg">
            View Demo
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700 max-w-md">
            <div className="text-sm text-gray-400 mb-2">Perfect for:</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Web Developers</span>
              <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">CS Students</span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Bootcamp Grads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
