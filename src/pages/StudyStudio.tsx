import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Headphones, Video, HelpCircle, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { ComingSoonDialog } from "@/components/ComingSoonDialog";
import { NavBar } from "@/components/NavBar";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const StudyStudio = () => {
  const [showDialog, setShowDialog] = useState(false);
  
  // Scroll animation for upload section
  const { elementRef: uploadRef, isVisible: uploadVisible } = useScrollAnimation();
  
  // Scroll animations for feature cards (5 cards)
  const { itemRefs: featureRefs, visibleItems: visibleFeatures } = useStaggeredScrollAnimation(5);

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "PPT/PDF Notes",
      description: "Convert your PPTs into easy readable, summarized notes",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "PPT/PDF Flashcards",
      description: "Receive question-answer flashcards from your materials",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio Summary",
      description: "Text to short spoken summary for learning on the go",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Explainer",
      description: "Text to narrated videos with visuals",
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Auto Quiz Maker",
      description: "Create quizzes from your notes for revision",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      {/* Header */}
      <header className="glass-nav">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="CelarisAI Logo" className="w-12 h-12 icon-pulsate" />
              <div>
                <h1 className="text-4xl font-bold glow-text">CelarisAI</h1>
                <p className="text-sm text-muted-foreground mt-1">Your Intelligent Study Companion</p>
              </div>
            </Link>
            <Button variant="outline" className="glass-card border-primary/30 text-white hover:bg-primary/20 btn-glow">
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-primary icon-pulsate" />
          <h2 className="text-5xl font-bold mb-4 glow-text">Study Studio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your notes into flashcards, audio summaries, and video explainers
          </p>
        </div>

        {/* Upload Section */}
        <Card 
          ref={uploadRef}
          className={`max-w-3xl mx-auto mb-12 glass-card-teal card-glow-teal scroll-animate scale-up spring ${uploadVisible ? 'visible' : ''}`}
        >
          <CardContent className="py-16">
            <div 
              className="border-2 border-dashed border-primary/50 rounded-lg p-12 text-center cursor-pointer hover:border-primary hover:bg-primary/10 transition-all"
              onClick={() => setShowDialog(true)}
            >
              <Upload className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-2">Upload Your PPT or PDF</h3>
              <p className="text-muted-foreground">Click to upload or drag and drop your study materials</p>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const colors = ['glass-card-teal card-glow-teal', 'glass-card-magenta card-glow-magenta', 'glass-card-purple card-glow-purple', 'glass-card-teal card-glow-teal', 'glass-card-magenta card-glow-magenta'];
            const iconColors = ['text-primary', 'text-secondary', 'text-purple-400', 'text-primary', 'text-secondary'];
            const animations = ['fade-up', 'fade-down', 'rotate-in', 'fade-left', 'fade-right'];
            const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300', 'delay-400'];
            return (
              <Card 
                key={index}
                ref={(el) => featureRefs.current[index] = el}
                className={`${colors[index]} group cursor-pointer scroll-animate ${animations[index]} spring ${delays[index]} ${visibleFeatures.has(index) ? 'visible' : ''}`}
                onClick={() => setShowDialog(true)}
              >
                <CardHeader>
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-current/20 to-current/5 ${iconColors[index]} group-hover:shadow-lg transition-all duration-300 w-fit mb-2`}>
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <ComingSoonDialog open={showDialog} onOpenChange={setShowDialog} />

      {/* Footer */}
      <footer className="border-t border-border/20 mt-20">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 CelarisAI — Celestial Intelligence, Reimagined.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StudyStudio;
