
import React from 'react';
import { Database, Code, Shield, Globe } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'PHP', icon: <Code className="h-12 w-12" />, color: 'text-purple-400', desc: 'Server-side logic' },
    { name: 'MySQL', icon: <Database className="h-12 w-12" />, color: 'text-blue-400', desc: 'Database management' },
    { name: 'HTML5', icon: <Globe className="h-12 w-12" />, color: 'text-orange-400', desc: 'Frontend structure' },
    { name: 'Security', icon: <Shield className="h-12 w-12" />, color: 'text-green-400', desc: 'Best practices' }
  ];

  return (
    <section className="relative z-10 py-20 px-6 bg-slate-800/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies Used
          </h2>
          <p className="text-xl text-gray-300">
            Built with industry-standard technologies and security practices
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center group">
              <div className={`${tech.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-900/50 rounded-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Code Sample Preview</h3>
          <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-gray-300">
{`<?php
// Secure password hashing
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Prepared statement to prevent SQL injection
$stmt = $pdo->prepare("INSERT INTO users (username, email, password) 
                       VALUES (?, ?, ?)");
$stmt->execute([$username, $email, $hashed_password]);

// Session management
session_start();
$_SESSION['user_id'] = $user_id;
$_SESSION['username'] = $username;
?>`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
