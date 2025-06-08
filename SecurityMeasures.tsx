
import React from 'react';
import { Shield, Lock, Eye, Database, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SecurityMeasures = () => {
  const securityFeatures = [
    {
      icon: <Lock className="h-8 w-8 text-green-400" />,
      title: "Password Hashing",
      description: "Uses PHP's password_hash() with bcrypt algorithm",
      implementation: "password_hash($password, PASSWORD_DEFAULT)"
    },
    {
      icon: <Database className="h-8 w-8 text-blue-400" />,
      title: "SQL Injection Prevention",
      description: "Prepared statements for all database queries",
      implementation: "$stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?')"
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-400" />,
      title: "Session Security",
      description: "Secure session management with regeneration",
      implementation: "session_regenerate_id(true)"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-400" />,
      title: "Input Validation",
      description: "Server-side validation and sanitization",
      implementation: "filter_var($email, FILTER_VALIDATE_EMAIL)"
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-400" />,
      title: "CSRF Protection",
      description: "Token-based cross-site request forgery protection",
      implementation: "csrf_token verification on forms"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-400" />,
      title: "Error Handling",
      description: "Secure error messages without information leakage",
      implementation: "Generic error messages for failed logins"
    }
  ];

  return (
    <section id="security" className="relative z-10 py-20 px-6 bg-slate-800/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Security Measures Implemented
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn industry-standard security practices that protect user data and prevent common vulnerabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {feature.icon}
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  {feature.description}
                </CardDescription>
                <div className="bg-slate-950 rounded p-3">
                  <code className="text-xs text-green-400 break-all">
                    {feature.implementation}
                  </code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg p-8 border border-red-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle className="h-6 w-6 text-orange-400 mr-3" />
            Why Security Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">4.1B</div>
              <div className="text-gray-300 text-sm">Records exposed in 2019</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">$3.86M</div>
              <div className="text-gray-300 text-sm">Average cost of data breach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">280 days</div>
              <div className="text-gray-300 text-sm">Average time to identify breach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityMeasures;
