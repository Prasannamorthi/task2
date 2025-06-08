
import React from 'react';
import { ArrowRight, Github, Download, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CallToAction = () => {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Secure Future?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of developers who have leveled up their skills with hands-on security projects. 
            Start building career-ready applications today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-center">
            <CardHeader>
              <Download className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <CardTitle className="text-white">Download Source</CardTitle>
              <CardDescription className="text-gray-300">
                Get the complete source code with documentation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white border-0">
                Download Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
            <CardHeader>
              <Github className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <CardTitle className="text-white">View on GitHub</CardTitle>
              <CardDescription className="text-gray-300">
                Explore the code, contribute, and star the repo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white border-0">
                View Repository
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-green-500/50 transition-all duration-300 text-center">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <CardTitle className="text-white">Tutorial Guide</CardTitle>
              <CardDescription className="text-gray-300">
                Step-by-step tutorial with explanations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white border-0">
                Start Tutorial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🚀 Level Up Your Web Dev Skills with Real Projects
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Build secure authentication systems like a pro and turn your code into career-ready projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Building Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Trusted by developers worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-gray-500">•</div>
            <div className="text-2xl font-bold">Downloads</div>
            <div className="text-gray-500">•</div>
            <div className="text-2xl font-bold">⭐⭐⭐⭐⭐</div>
            <div className="text-gray-500">•</div>
            <div className="text-2xl font-bold">4.9/5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
