"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Link2, FileText, Upload, AlertTriangle, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

interface AnalysisResult {
  credibilityScore: number;
  verdict: 'real' | 'fake' | 'uncertain';
  explanation: string;
  sources: string[];
  keywords: string[];
  confidence: number;
}

export default function FakeNewsDetector() {
  const [activeTab, setActiveTab] = useState('url');
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyzeContent = async () => {
    if (!content.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResult: AnalysisResult = {
      credibilityScore: Math.floor(Math.random() * 40) + 60,
      verdict: Math.random() > 0.5 ? 'real' : 'fake',
      explanation: 'Our AI analysis examined multiple factors including source credibility, content consistency, cross-referencing with verified databases, and linguistic patterns. The article shows strong alignment with verified information sources.',
      sources: [
        'Reuters - Fact Check Database',
        'Associated Press Archives',
        'BBC Verify',
        'Snopes.com'
      ],
      keywords: ['politics', 'economy', 'verified', 'breaking news'],
      confidence: Math.floor(Math.random() * 20) + 80
    };
    
    setResult(mockResult);
    setIsAnalyzing(false);
  };

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'real': return 'text-green-600 dark:text-green-400';
      case 'fake': return 'text-red-600 dark:text-red-400';
      default: return 'text-yellow-600 dark:text-yellow-400';
    }
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case 'real': return CheckCircle;
      case 'fake': return XCircle;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-blue-50/30 dark:to-blue-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Fake News Detector
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analyze news articles, social media posts, and online content for authenticity 
            using advanced AI technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Content Analysis
                </CardTitle>
                <CardDescription>
                  Choose your input method and submit content for AI-powered verification.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="url" className="flex items-center">
                      <Link2 className="w-4 h-4 mr-2" />
                      URL
                    </TabsTrigger>
                    <TabsTrigger value="text" className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Text
                    </TabsTrigger>
                    <TabsTrigger value="file" className="flex items-center">
                      <Upload className="w-4 h-4 mr-2" />
                      File
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="url" className="space-y-4">
                    <Input
                      placeholder="https://example.com/news-article"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="text-lg"
                    />
                    <p className="text-sm text-muted-foreground">
                      Paste the URL of a news article, blog post, or social media link.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="text" className="space-y-4">
                    <Textarea
                      placeholder="Paste the article text or social media post content here..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="min-h-[200px] text-base"
                    />
                    <p className="text-sm text-muted-foreground">
                      Copy and paste the full text content you want to verify.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="file" className="space-y-4">
                    <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-lg font-medium mb-2">Drop files here</p>
                      <p className="text-muted-foreground mb-4">Supports PDF, DOC, TXT files</p>
                      <Button variant="outline">
                        Browse Files
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <Button 
                    onClick={analyzeContent}
                    disabled={!content.trim() || isAnalyzing}
                    className="w-full"
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing Content...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Analyze for Fake News
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="shadow-xl h-fit">
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
                <CardDescription>
                  AI-powered content verification results will appear here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isAnalyzing && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                      <span>Processing content...</span>
                    </div>
                    <Progress value={33} className="w-full" />
                    <p className="text-sm text-muted-foreground">
                      Analyzing patterns and cross-referencing sources...
                    </p>
                  </div>
                )}

                {result && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                        {(() => {
                          const Icon = getVerdictIcon(result.verdict);
                          return <Icon className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                      <h3 className={`text-2xl font-bold capitalize ${getVerdictColor(result.verdict)}`}>
                        {result.verdict === 'real' ? 'Likely Real' : result.verdict === 'fake' ? 'Likely Fake' : 'Uncertain'}
                      </h3>
                      <p className="text-3xl font-bold text-primary mt-2">
                        {result.credibilityScore}%
                      </p>
                      <p className="text-sm text-muted-foreground">Credibility Score</p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-2">AI Explanation</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {result.explanation}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Verified Sources</h4>
                      <div className="space-y-1">
                        {result.sources.map((source, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            • {source}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.keywords.map((keyword, index) => (
                          <Badge key={index} variant="secondary">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-xs text-muted-foreground mb-3">
                        Confidence Level: {result.confidence}%
                      </p>
                      <Progress value={result.confidence} className="w-full" />
                    </div>

                    <Button variant="outline" className="w-full">
                      Download Report
                    </Button>
                  </motion.div>
                )}

                {!result && !isAnalyzing && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Submit content to see analysis results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}