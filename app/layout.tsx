import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TruthLens - AI-Powered Fake News & Deepfake Detection',
  description: 'Professional AI platform for detecting fake news and deepfakes with advanced machine learning technology. Verify content authenticity with confidence.',
  keywords: 'fake news detection, deepfake detection, AI verification, content authenticity, misinformation',
  authors: [{ name: 'TruthLens Team' }],
  openGraph: {
    title: 'TruthLens - AI-Powered Content Verification',
    description: 'Detect fake news and deepfakes with professional-grade AI technology',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}