"use client"

import { motion } from 'framer-motion';
import { Shield, Brain, Globe, Users, Zap, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const technologies = [
    'Next.js 14', 'TypeScript', 'Tailwind CSS', 'OpenAI GPT-4', 'LangChain', 
    'TensorFlow', 'PyTorch', 'Framer Motion', 'ShadCN UI'
  ];

  const values = [
    {
      icon: Shield,
      title: 'Truth & Transparency',
      description: 'We believe in combating misinformation with transparent AI technology that users can understand and trust.'
    },
    {
      icon: Brain,
      title: 'Continuous Innovation',
      description: 'Our AI models are constantly evolving, learning from new patterns to stay ahead of sophisticated fake content.'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data privacy is paramount. We process content securely and never store personal information unnecessarily.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making accurate information verification accessible to everyone, regardless of technical expertise.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-blue-50/30 dark:to-blue-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About TruthLens
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TruthLens is a cutting-edge AI platform designed to combat the growing threat of 
            misinformation and deepfake content. Our mission is to democratize access to 
            professional-grade content verification technology.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="shadow-xl bg-gradient-to-r from-primary/10 to-blue-50 dark:to-blue-900/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                In an era where synthetic media and misinformation pose significant threats to society, 
                TruthLens provides individuals, journalists, and organizations with the tools needed 
                to verify content authenticity. We leverage the latest advances in artificial intelligence 
                to create a more informed and trustworthy digital world.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Technology Stack</CardTitle>
              <CardDescription className="text-center">
                Built with modern, production-ready technologies for maximum performance and reliability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Privacy & Security</CardTitle>
              <CardDescription>
                Your privacy and data security are our top priorities.
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-primary" />
                    Data Processing
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Content is processed securely and never permanently stored</li>
                    <li>• All uploads are automatically deleted after analysis</li>
                    <li>• No personal information is collected without consent</li>
                    <li>• GDPR and CCPA compliant data handling</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    Security Measures
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• End-to-end encryption for all data transmission</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• SOC 2 Type II compliance standards</li>
                    <li>• Zero-trust security architecture</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-xl bg-gradient-to-r from-primary to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-center text-blue-100">
                Experience the power of AI-driven content verification today.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-6">
                For enterprise solutions, API access, or custom integrations, 
                contact our team for a personalized demonstration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:contact@truthlens.ai"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Contact Sales
                  </button>
                </motion.a>
                <motion.a
                  href="/fake-news"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Try Demo
                  </button>
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}