"use client"

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image, Video, AlertTriangle, CheckCircle, XCircle, Loader2, Download, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface DeepfakeResult {
  manipulationProbability: number;
  verdict: 'authentic' | 'manipulated' | 'uncertain';
  explanation: string;
  detectionMethods: string[];
  confidence: number;
  suspiciousRegions: { x: number; y: number; width: number; height: number }[];
}

export default function DeepfakeDetector() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DeepfakeResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const analyzeForDeepfake = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate deepfake analysis
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    const mockResult: DeepfakeResult = {
      manipulationProbability: Math.floor(Math.random() * 30) + 10,
      verdict: Math.random() > 0.3 ? 'authentic' : 'manipulated',
      explanation: 'Our deepfake detection model analyzed facial landmarks, temporal inconsistencies, and compression artifacts. The image shows natural patterns consistent with authentic photography.',
      detectionMethods: [
        'Facial Landmark Analysis',
        'Temporal Consistency Check',
        'Compression Artifact Detection',
        'Neural Network Pattern Recognition'
      ],
      confidence: Math.floor(Math.random() * 20) + 80,
      suspiciousRegions: []
    };
    
    setResult(mockResult);
    setIsAnalyzing(false);
  };

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'authentic': return 'text-green-600 dark:text-green-400';
      case 'manipulated': return 'text-red-600 dark:text-red-400';
      default: return 'text-yellow-600 dark:text-yellow-400';
    }
  };

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case 'authentic': return CheckCircle;
      case 'manipulated': return XCircle;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-purple-50/30 dark:to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent">
            Deepfake Detector
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload images or videos to detect AI-generated content and digital manipulation 
            using advanced neural network analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Media
                </CardTitle>
                <CardDescription>
                  Upload images (JPG, PNG) or videos (MP4, MOV) for deepfake analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div
                  className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  
                  {previewUrl ? (
                    <div className="space-y-4">
                      {selectedFile?.type.startsWith('image/') ? (
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="max-w-full h-48 object-contain mx-auto rounded-lg"
                        />
                      ) : (
                        <Video className="w-16 h-16 mx-auto text-primary" />
                      )}
                      <p className="font-medium">{selectedFile?.name}</p>
                     <p className="text-sm text-muted-foreground">
                    {((selectedFile?.size || 0) / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-center space-x-4 mb-4">
                        <Image className="w-8 h-8 text-primary" />
                        <Video className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-lg font-medium mb-2">Drop files here or click to browse</p>
                      <p className="text-muted-foreground">
                        Supports images (JPG, PNG) and videos (MP4, MOV)
                      </p>
                    </>
                  )}
                </div>

                <Button 
                  onClick={analyzeForDeepfake}
                  disabled={!selectedFile || isAnalyzing}
                  className="w-full"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing for Deepfakes...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Detect Deepfake
                    </>
                  )}
                </Button>

                {isAnalyzing && (
                  <div className="space-y-3">
                    <Progress value={45} className="w-full" />
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• Analyzing facial landmarks...</p>
                      <p>• Checking temporal consistency...</p>
                      <p>• Detecting compression artifacts...</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Detection Results</CardTitle>
                <CardDescription>
                  Deepfake analysis results and confidence metrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {result && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                        {(() => {
                          const Icon = getVerdictIcon(result.verdict);
                          return <Icon className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                      <h3 className={`text-2xl font-bold capitalize ${getVerdictColor(result.verdict)}`}>
                        {result.verdict === 'authentic' ? 'Likely Authentic' : 
                         result.verdict === 'manipulated' ? 'Likely Manipulated' : 'Uncertain'}
                      </h3>
                      <p className="text-3xl font-bold text-primary mt-2">
                        {result.manipulationProbability}%
                      </p>
                      <p className="text-sm text-muted-foreground">Manipulation Probability</p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-2">Analysis Explanation</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {result.explanation}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Detection Methods Used</h4>
                      <div className="space-y-2">
                        {result.detectionMethods.map((method, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Confidence Level</span>
                        <span className="text-sm text-primary">{result.confidence}%</span>
                      </div>
                      <Progress value={result.confidence} className="w-full" />
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Report
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                )}

                {!result && !isAnalyzing && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Upload className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Upload media to see detection results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Technology Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="shadow-xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <CardHeader>
              <CardTitle>Advanced Detection Technology</CardTitle>
              <CardDescription>
                Our deepfake detection system uses multiple AI models for comprehensive analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <Image className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Facial Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Detects unnatural facial movements and inconsistencies in facial features.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <Video className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Temporal Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyzes frame-to-frame consistency and temporal patterns in video content.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Artifact Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    Identifies compression artifacts and digital manipulation signatures.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
