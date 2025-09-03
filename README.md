# TruthLens - AI-Powered Fake News & Deepfake Detection Platform

![TruthLens Logo](https://via.placeholder.com/200x80/1e40af/ffffff?text=TruthLens)

A cutting-edge AI platform designed to combat misinformation and deepfake content using advanced machine learning technology. TruthLens provides professional-grade content verification tools for individuals, journalists, and organizations.

## 🚀 Features

### 🔍 Fake News Detection
- **URL Analysis**: Paste news article URLs for instant verification
- **Text Analysis**: Copy and paste article content for credibility assessment
- **File Upload**: Upload PDF, DOC, or TXT files for analysis
- **AI-Powered Explanations**: Detailed reasoning behind each verdict
- **Source Verification**: Cross-reference with trusted fact-checking databases
- **Confidence Scoring**: Transparent confidence metrics for each analysis

### 🎭 Deepfake Detection
- **Image Analysis**: Upload photos to detect AI-generated or manipulated content
- **Video Analysis**: Analyze video files for deepfake manipulation
- **Facial Landmark Detection**: Advanced facial analysis algorithms
- **Temporal Consistency**: Frame-by-frame analysis for video content
- **Artifact Detection**: Identify compression and manipulation signatures
- **Region Highlighting**: Visual indicators of suspicious areas

### 🎨 User Experience
- **Modern SaaS Design**: Clean, professional interface with Apple-level aesthetics
- **Dark/Light Theme**: Seamless theme switching with saved preferences
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Real-time Analysis**: Instant feedback with progress indicators
- **Downloadable Reports**: Export detailed analysis results

## 📸 Screenshots

### Landing Page
![Landing Page](./screenshots/landing-page.png)
*Modern hero section with call-to-action and feature highlights*

### Fake News Detection
![Fake News Detector](./screenshots/fake-news-detector.png)
*Comprehensive fake news analysis interface with multiple input methods*



### Deepfake Detection
![Deepfake Detector](./assets/deepfakedetectorpng.png)
*Advanced deepfake detection with visual analysis tools*


## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Modern component library
- **Framer Motion** - Animation library
- **next-themes** - Theme management

### AI & Machine Learning
- **LangChain** - AI application framework
- **OpenAI GPT-4** - Natural language processing
- **TensorFlow** - Machine learning models
- **PyTorch** - Deep learning framework

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key (for fake news detection)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/truthlens.git
   cd truthlens
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your API keys to `.env.local`:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
truthlens/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── deepfake/          # Deepfake detection page
│   ├── fake-news/         # Fake news detection page
│   ├── results/           # Analysis results page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── ui/               # ShadCN UI components
│   ├── footer.tsx        # Footer component
│   ├── navigation.tsx    # Navigation component
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
│   ├── ai-services.ts    # AI service integrations
│   └── utils.ts          # Helper utilities
├── screenshots/          # Application screenshots
├── public/              # Static assets
└── README.md           # Project documentation
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=TruthLens

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Custom color palette for professional SaaS design
- Extended spacing system (8px grid)
- Custom animations and transitions
- Dark mode support with CSS variables

### ShadCN UI Components

Pre-configured with:
- Custom theme colors
- Consistent border radius
- Accessible color contrasts
- Animation presets

## 🎯 Usage

### Fake News Detection

1. **Navigate to Fake News Detector**
   - Click "Verify News Now" on the landing page
   - Or use the navigation menu

2. **Choose Input Method**
   - **URL**: Paste a news article URL
   - **Text**: Copy and paste article content
   - **File**: Upload PDF, DOC, or TXT files

3. **Analyze Content**
   - Click "Analyze for Fake News"
   - Wait for AI processing (2-3 seconds)

4. **Review Results**
   - View credibility score and verdict
   - Read AI-powered explanation
   - Check verified sources
   - Download detailed report

### Deepfake Detection

1. **Navigate to Deepfake Detector**
   - Use the navigation menu
   - Or click "Detect Deepfakes" button

2. **Upload Media**
   - Drag and drop files or click to browse
   - Supports images (JPG, PNG) and videos (MP4, MOV)

3. **Analyze for Manipulation**
   - Click "Detect Deepfake"
   - Wait for neural network analysis (3-4 seconds)

4. **Review Detection Results**
   - View manipulation probability
   - Read detailed explanation
   - Check detection methods used
   - Download analysis report

## 🎨 Design System

### Color Palette
- **Primary**: Deep blue (#1e40af) - Trust and reliability
- **Secondary**: Vibrant teal (#0d9488) - Innovation and technology
- **Accent**: Warm orange (#ea580c) - Call-to-action elements
- **Success**: Green (#10b981) - Positive results
- **Warning**: Yellow (#f59e0b) - Uncertain results
- **Error**: Red (#ef4444) - Negative results

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600-700 font weight, 120% line height
- **Body Text**: 400-500 font weight, 150% line height
- **Code**: Monospace font for technical elements

### Spacing System
- **Base Unit**: 8px
- **Component Spacing**: 16px, 24px, 32px
- **Section Spacing**: 48px, 64px, 80px
- **Container Max Width**: 1280px (7xl)

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables**
   - Add your OpenAI API key in Vercel dashboard
   - Configure production URLs

### Build Optimization

The project includes:
- **Static Export**: Optimized for CDN deployment
- **Image Optimization**: Next.js Image component with external domains
- **Bundle Analysis**: Webpack bundle optimization
- **SEO Optimization**: Meta tags, Open Graph, and structured data

## 🔒 Privacy & Security

### Data Handling
- Content is processed securely and never permanently stored
- All uploads are automatically deleted after analysis
- No personal information collected without consent
- GDPR and CCPA compliant data handling

### Security Measures
- End-to-end encryption for data transmission
- Environment variable protection for API keys
- Input validation and sanitization
- Rate limiting for API endpoints

## 🤝 Contributing

### Development Setup

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm run test
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages
- Add JSDoc comments for complex functions

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Features
- Code splitting with Next.js
- Image optimization and lazy loading
- CSS purging with Tailwind
- Bundle size optimization
- Server-side rendering (SSR)

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure all environment variables are set
- Check Node.js version compatibility (18+)
- Clear `.next` cache: `rm -rf .next`

**API Errors**
- Verify OpenAI API key is valid
- Check API rate limits
- Ensure network connectivity

**Styling Issues**
- Clear browser cache
- Check Tailwind CSS compilation
- Verify component imports

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- Portfolio: [https://your-portfolio.com](https://your-portfolio.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: [your.email@example.com](mailto:your.email@example.com)

## 🙏 Acknowledgments

- OpenAI for GPT-4 API
- Vercel for hosting platform
- ShadCN for UI components
- Tailwind CSS for styling system
- Framer Motion for animations
- Next.js team for the framework

## 📈 Roadmap

### Upcoming Features
- [ ] Real-time content monitoring
- [ ] Browser extension for instant verification
- [ ] API access for developers
- [ ] Bulk content analysis
- [ ] Advanced reporting dashboard
- [ ] Multi-language support

### Version History
- **v1.0.0** - Initial release with fake news and deepfake detection
- **v1.1.0** - Enhanced UI/UX and performance improvements
- **v1.2.0** - Advanced AI models and better accuracy

---

**Built with ❤️ using Next.js, TypeScript, and AI technology**

*Making the internet a more trustworthy place, one verification at a time.*
