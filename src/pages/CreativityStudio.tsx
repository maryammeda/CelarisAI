import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Presentation, Mic2, ImagePlus } from "lucide-react";
import { Link } from "react-router-dom";
import { ComingSoonDialog } from "@/components/ComingSoonDialog";
import { NavBar } from "@/components/NavBar";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const CreativityStudio = () => {
  const [showDialog, setShowDialog] = useState(false);
  
  const { elementRef: inputRef, isVisible: inputVisible } = useScrollAnimation();
  const { itemRefs: featureRefs, visibleItems: visibleFeatures } = useStaggeredScrollAnimation(3);

  const features = [
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Idea Pitch Deck",
      description: "Turn your ideas into professional presentation slides",
    },
    {
      icon: <Mic2 className="w-8 h-8" />,
      title: "Script & Voice Tool",
      description: "Generate scripts and convert them to natural voice narration",
    },
    {
      icon: <ImagePlus className="w-8 h-8" />,
      title: "Visual Generator",
      description: "Create stunning visuals and graphics for your projects",
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
          <Lightbulb className="w-16 h-16 mx-auto mb-4 text-primary icon-pulsate" />
          <h2 className="text-5xl font-bold mb-4 glow-text">Creativity Studio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bring your ideas to life with pitch decks and visual generators
          </p>
        </div>

        {/* Input Section */}
        <Card 
          ref={inputRef}
          className={`max-w-3xl mx-auto mb-12 glass-card-purple card-glow-purple relative overflow-hidden scroll-animate rotate-in spring ${inputVisible ? 'visible' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-purple-500/5" />
          <CardHeader className="relative z-10">
            <CardTitle>Describe Your Creative Idea</CardTitle>
            <CardDescription>Tell us about your project and let AI bring it to life</CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <Textarea 
              placeholder="Describe your idea, concept, or project details here..."
              className="min-h-[200px] mb-4 glass-card border-purple-500/30"
              onClick={() => setShowDialog(true)}
            />
            <Button 
              className="w-full bg-gradient-to-r from-primary via-secondary to-purple-500 hover:from-primary/90 hover:via-secondary/90 hover:to-purple-500/90 text-white shadow-lg shadow-primary/30"
              onClick={() => setShowDialog(true)}
            >
              Generate Creative Content
            </Button>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const colors = ['glass-card-purple card-glow-purple', 'glass-card-teal card-glow-teal', 'glass-card-magenta card-glow-magenta'];
            const iconColors = ['text-purple-400', 'text-primary', 'text-secondary'];
            const animations = ['scale-up', 'fade-up', 'scale-up'];
            const delays = ['delay-0', 'delay-200', 'delay-400'];
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

export default CreativityStudio;
