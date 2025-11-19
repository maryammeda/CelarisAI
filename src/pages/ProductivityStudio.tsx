import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Mic, FileCheck, Bot, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { ComingSoonDialog } from "@/components/ComingSoonDialog";
import { NavBar } from "@/components/NavBar";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const ProductivityStudio = () => {
  const [showDialog, setShowDialog] = useState(false);
  
  const { elementRef: inputRef, isVisible: inputVisible } = useScrollAnimation();
  const { itemRefs: featureRefs, visibleItems: visibleFeatures } = useStaggeredScrollAnimation(4);

  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "AI Meeting Notes",
      description: "AI that records transcripts or converts recordings to text",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Essay Humanizer",
      description: "Humanizes AI written text with good grammar quality",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Detector",
      description: "Calculates how AI an essay/text sounds before submission",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Task Planner",
      description: "Turns assignments and deadlines into a study schedule",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      {/* Header */}
      <header className="glass-nav">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="CelarisAI Logo" className="w-12 h-12 icon-pulsate" />
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
          <LineChart className="w-16 h-16 mx-auto mb-4 text-secondary icon-pulsate" />
          <h2 className="text-5xl font-bold mb-4 glow-text">Productivity Studio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Boost your productivity with AI-powered meeting notes and task planning
          </p>
        </div>

        {/* Input Section */}
        <Card 
          ref={inputRef}
          className={`max-w-3xl mx-auto mb-12 glass-card-magenta card-glow-magenta scroll-animate fade-up smooth ${inputVisible ? 'visible' : ''}`}
        >
          <CardHeader>
            <CardTitle>Paste Your Text or Upload Audio</CardTitle>
            <CardDescription>Enter text to humanize, detect AI, or create a task plan</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="Paste your essay, meeting transcript, or assignment list here..."
              className="min-h-[200px] mb-4 glass-card border-secondary/30"
              onClick={() => setShowDialog(true)}
            />
            <Button 
              className="w-full bg-secondary hover:bg-secondary/90 text-white btn-glow-secondary shadow-lg shadow-secondary/30"
              onClick={() => setShowDialog(true)}
            >
              Process Text
            </Button>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const colors = ['glass-card-magenta card-glow-magenta', 'glass-card-teal card-glow-teal', 'glass-card-purple card-glow-purple', 'glass-card-magenta card-glow-magenta'];
            const iconColors = ['text-secondary', 'text-primary', 'text-purple-400', 'text-secondary'];
            const animations = ['fade-left', 'fade-right', 'fade-left', 'fade-right'];
            const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];
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

export default ProductivityStudio;
