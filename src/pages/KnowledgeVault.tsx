import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Search, Brain, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ComingSoonDialog } from "@/components/ComingSoonDialog";
import { NavBar } from "@/components/NavBar";
import { Input } from "@/components/ui/input";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const KnowledgeVault = () => {
  const [showDialog, setShowDialog] = useState(false);
  
  const { elementRef: searchRef, isVisible: searchVisible } = useScrollAnimation();
  const { itemRefs: featureRefs, visibleItems: visibleFeatures } = useStaggeredScrollAnimation(3);
  const { itemRefs: contentRefs, visibleItems: visibleContent } = useStaggeredScrollAnimation(4);

  const vaultFeatures = [
    {
      icon: <FolderOpen className="w-6 h-6" />,
      title: "Smart Storage",
      description: "All flashcards, summaries, videos, and notes",
      count: "0 items",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Q&A from Notes",
      description: "Ask questions from previously inserted notes",
      count: "Ready",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Learning Tone",
      description: "AI learns your studying tone over time",
      count: "Adaptive",
    },
  ];

  const savedContent = [
    { type: "Flashcards", title: "Biology Chapter 3", date: "2025-01-15" },
    { type: "Video", title: "Math Derivatives Explainer", date: "2025-01-14" },
    { type: "Notes", title: "History World War II", date: "2025-01-13" },
    { type: "Audio", title: "Physics Summary", date: "2025-01-12" },
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
          <Database className="w-16 h-16 mx-auto mb-4 text-secondary icon-pulsate" />
          <h2 className="text-5xl font-bold mb-4 glow-text">Knowledge Vault</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Store and access all your AI-generated content in one place
          </p>
        </div>

        {/* Search Bar */}
        <Card 
          ref={searchRef}
          className={`max-w-3xl mx-auto mb-12 glass-card-teal card-glow-teal scroll-animate fade-down smooth ${searchVisible ? 'visible' : ''}`}
        >
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
              <Input 
                placeholder="Search your saved notes, flashcards, videos..."
                className="pl-10 text-base glass-card border-primary/30"
                onClick={() => setShowDialog(true)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Vault Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {vaultFeatures.map((feature, index) => {
            const colors = ['glass-card-teal card-glow-teal', 'glass-card-magenta card-glow-magenta', 'glass-card-purple card-glow-purple'];
            const iconColors = ['text-primary', 'text-secondary', 'text-purple-400'];
            const delays = ['delay-0', 'delay-200', 'delay-400'];
            return (
              <Card 
                key={index}
                ref={(el) => featureRefs.current[index] = el}
                className={`${colors[index]} cursor-pointer group scroll-animate scale-up spring ${delays[index]} ${visibleFeatures.has(index) ? 'visible' : ''}`}
                onClick={() => setShowDialog(true)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br from-current/20 to-current/5 ${iconColors[index]} group-hover:shadow-lg transition-all duration-300`}>
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <p className={`text-xs ${iconColors[index]}`}>{feature.count}</p>
                    </div>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Saved Content */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Your Saved Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedContent.map((item, index) => {
              const colors = ['glass-card-teal card-glow-teal', 'glass-card-magenta card-glow-magenta', 'glass-card-purple card-glow-purple', 'glass-card-teal card-glow-teal'];
              const tagColors = ['text-primary', 'text-secondary', 'text-purple-400', 'text-primary'];
              const animations = ['fade-left', 'fade-right', 'fade-left', 'fade-right'];
              const delays = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];
              return (
                <Card 
                  key={index}
                  ref={(el) => contentRefs.current[index] = el}
                  className={`${colors[index]} cursor-pointer group scroll-animate ${animations[index]} smooth ${delays[index]} ${visibleContent.has(index) ? 'visible' : ''}`}
                  onClick={() => setShowDialog(true)}
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className={`text-xs ${tagColors[index]} font-semibold mb-1`}>{item.type}</p>
                        <h4 className={`font-semibold group-hover:${tagColors[index]} transition-colors`}>{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
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

export default KnowledgeVault;
