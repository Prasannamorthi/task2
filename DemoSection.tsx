
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';

const DemoSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="demo" className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Demo
          </h2>
          <p className="text-xl text-gray-300">
            Experience the user interface and see the forms in action
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Demo Forms */}
          <div>
            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-700">
                <TabsTrigger value="signup" className="data-[state=active]:bg-purple-500">Sign Up</TabsTrigger>
                <TabsTrigger value="login" className="data-[state=active]:bg-purple-500">Login</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signup">
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <User className="h-5 w-5 mr-2 text-purple-400" />
                      Create Account
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Join thousands of developers building secure applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-gray-300">Username</Label>
                      <Input 
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Enter your username"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-300">Password</Label>
                      <div className="relative">
                        <Input 
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleInputChange}
                          className="bg-slate-700 border-slate-600 text-white pr-10"
                          placeholder="Create a strong password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
                      <Input 
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Confirm your password"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                      Create Account
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="login">
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Lock className="h-5 w-5 mr-2 text-cyan-400" />
                      Welcome Back
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Sign in to access your secure dashboard
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="loginEmail" className="text-gray-300">Email or Username</Label>
                      <Input 
                        id="loginEmail"
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Enter your email or username"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loginPassword" className="text-gray-300">Password</Label>
                      <Input 
                        id="loginPassword"
                        type="password"
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 text-sm text-gray-300">
                        <input type="checkbox" className="rounded border-slate-600" />
                        <span>Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300">
                        Forgot password?
                      </a>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
                      Sign In
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Features Highlight */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">✨ Demo Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Real-time form validation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Password strength indicator
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Responsive design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Accessibility features
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">🔒 Security Notes</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                This demo showcases the frontend interface. In the actual implementation, 
                all passwords are hashed using PHP's password_hash() function, and data 
                is validated both client-side and server-side for maximum security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
