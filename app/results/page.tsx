"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, RefreshCw, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

export default function Results() {
  const [reportFormat, setReportFormat] = useState('pdf');

  // Mock result data - in production, this would come from URL params or state management
  const mockResult = {
    type: 'fake-news',
    timestamp: new Date().toISOString(),
    content: 'Sample news article about breaking political developments...',
    credibilityScore: 78,
    verdict: 'real' as const,
    explanation: 'Our comprehensive AI analysis indicates this content is likely authentic. The article demonstrates factual consistency, cites verifiable sources, and aligns with information from trusted news outlets.',
    sources: [
      'Reuters - Fact Check Database',
      'Associated Press Archives', 
      'BBC Verify',
      'Snopes.com'
    ],
    keywords: ['politics', 'breaking news', 'verified', 'government'],
    confidence: 85,
    detailsAnalyzed: [
      'Source credibility assessment',
      'Cross-reference with fact-check databases',
      'Linguistic pattern analysis',
      'Publication timeline verification',
      'Author background verification'
    ]
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

  const downloadReport = () => {
    // Mock download functionality
    const reportData = {
      platform: 'TruthLens',
      analysisType: mockResult.type,
      timestamp: mockResult.timestamp,
      result: mockResult
    };
    
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `truthlens-report-${Date.now()}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-blue-50/30 dark:to-blue-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Analysis Results
          </h1>
          <p className="text-xl text-muted-foreground">
            Detailed AI-powered content verification analysis and report.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Results */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Verdict Card */}
            <Card className="shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Content Analysis</CardTitle>
                    <CardDescription>
                      AI-powered authenticity verification results
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {new Date(mockResult.timestamp).toLocaleDateString()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                    {(() => {
                      const Icon = getVerdictIcon(mockResult.verdict);
                      return <Icon className="w-10 h-10 text-white" />;
                    })()}
                  </div>
                  <h2 className={`text-3xl font-bold capitalize ${getVerdictColor(mockResult.verdict)}`}>
                    {mockResult.verdict === 'real' ? 'Likely Authentic' : 
                     mockResult.verdict === 'fake' ? 'Likely Fake' : 'Uncertain'}
                  </h2>
                  <p className="text-4xl font-bold text-primary mt-3">
                    {mockResult.credibilityScore}%
                  </p>
                  <p className="text-muted-foreground">Credibility Score</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Confidence</span>
                      <span className="text-sm text-primary">{mockResult.confidence}%</span>
                    </div>
                    <Progress value={mockResult.confidence} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Analysis */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Detailed Analysis</CardTitle>
                <CardDescription>
                  Comprehensive breakdown of our AI verification process
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">AI Explanation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mockResult.explanation}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Analysis Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mockResult.detailsAnalyzed.map((detail, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Verified Sources</h3>
                  <div className="space-y-2">
                    {mockResult.sources.map((source, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm text-muted-foreground">{source}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3">Content Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {mockResult.keywords.map((keyword, index) => (
                      <Badge key={index} variant="secondary">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Actions Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Download Report */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Export Report</CardTitle>
                <CardDescription>
                  Download detailed analysis report
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={downloadReport} className="w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Results
                </Button>
                <Button variant="ghost" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Analyze Again
                </Button>
              </CardContent>
            </Card>

            {/* Summary Stats */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Analysis Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Analysis Type</span>
                  <Badge>Fake News Detection</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Processing Time</span>
                  <span className="text-sm font-medium">2.3 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sources Checked</span>
                  <span className="text-sm font-medium">{mockResult.sources.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Keywords Found</span>
                  <span className="text-sm font-medium">{mockResult.keywords.length}</span>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="shadow-xl bg-gradient-to-br from-primary/10 to-blue-50 dark:to-blue-900/20">
              <CardHeader>
                <CardTitle className="text-lg">Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Want to verify more content? Try our other detection tools.
                </p>
                <Button variant="outline" className="w-full" size="sm">
                  Detect Deepfakes
                </Button>
                <Button variant="ghost" className="w-full" size="sm">
                  Analyze Another Article
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}