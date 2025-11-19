import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Lightbulb, LineChart, Database, Sparkles, FileText, Mic, Video, BrainCircuit, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { JudgeGreetingDialog } from "@/components/JudgeGreetingDialog";
import { ComingSoonDialog } from "@/components/ComingSoonDialog";
import { NavBar } from "@/components/NavBar";
import { useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const navigate = useNavigate();
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  
  // Scroll animations for feature cards (3 cards)
  const { itemRefs: featureRefs, visibleItems: visibleFeatures } = useStaggeredScrollAnimation(3);
  
  // Scroll animations for studio cards (4 cards)
  const { itemRefs: studioRefs, visibleItems: visibleStudios } = useStaggeredScrollAnimation(4);
  const studios = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Study Studio",
      description: "Transform your notes into flashcards, audio summaries, and video explainers",
      features: ["PPT/PDF Notes", "Flashcards", "Audio Summary", "Video Explainer", "Auto Quiz Maker"],
      path: "/study-studio"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Productivity Studio",
      description: "Boost your productivity with AI-powered meeting notes and task planning",
      features: ["AI Meeting Notes", "Essay Humanizer", "AI Detector", "Task Planner"],
      path: "/productivity-studio"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creativity Studio",
      description: "Bring your ideas to life with pitch decks and visual generators",
      features: ["Idea Pitch Deck", "Script & Voice Tool", "Visual Generator"],
      path: "/creativity-studio"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Knowledge Vault",
      description: "Store and access all your AI-generated content in one place",
      features: ["Smart Storage", "Q&A from Notes", "Learning Tone Adaptation"],
      path: "/knowledge-vault"
    }
  ];

  return (
    <div className="min-h-screen text-foreground">
      <JudgeGreetingDialog />
      <ComingSoonDialog open={isComingSoonOpen} onOpenChange={setIsComingSoonOpen} />
      
      {/* Header */}
      <header className="glass-nav relative">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4">
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

      {/* Hero Section with Aurora Background */}
      <section className="container mx-auto px-6 py-12 text-center aurora-bg overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="CelarisAI Logo" className="w-16 h-16 mx-auto mb-4 icon-pulsate" />
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
            Study Smarter, Not Harder
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Transform your learning experience with AI-powered tools designed for students who want to achieve more in less time.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/study-studio">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white btn-glow">
                Get Started Free
              </Button>
            </Link>
            <Link to="/study-studio">
              <Button size="lg" variant="outline" className="glass-card border-secondary/50 text-white hover:bg-secondary/20 btn-glow-secondary">
                Explore Studios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          <Card 
            ref={(el) => featureRefs.current[0] = el}
            className={`glass-card-teal card-glow-teal scroll-animate float-in spring delay-0 ${visibleFeatures.has(0) ? 'visible' : ''}`}
          >
            <CardHeader>
              <FileText className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Smart Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Convert PPTs and PDFs into concise, easy-to-read summaries instantly</p>
            </CardContent>
          </Card>
          <Card 
            ref={(el) => featureRefs.current[1] = el}
            className={`glass-card-magenta card-glow-magenta scroll-animate float-in spring delay-200 ${visibleFeatures.has(1) ? 'visible' : ''}`}
          >
            <CardHeader>
              <BrainCircuit className="w-10 h-10 text-secondary mb-2" />
              <CardTitle>AI Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Adaptive AI that learns your study style and creates personalized content</p>
            </CardContent>
          </Card>
          <Card 
            ref={(el) => featureRefs.current[2] = el}
            className={`glass-card-purple card-glow-purple scroll-animate float-in spring delay-400 ${visibleFeatures.has(2) ? 'visible' : ''}`}
          >
            <CardHeader>
              <Video className="w-10 h-10" style={{ color: '#8B5CF6' }} />
              <CardTitle>Multi-Format</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Get your content as text, audio, video, or interactive flashcards</p>
            </CardContent>
          </Card>
        </div>

        {/* Studios Grid - Bento Layout */}
        <h3 className="text-3xl font-bold text-center mb-12 glow-text">Explore Our AI Studios</h3>
        <div className="bento-grid max-w-6xl mx-auto">
          {/* Study Studio - Large Featured Card with Teal accent */}
          <Card 
            ref={(el) => studioRefs.current[0] = el}
            onClick={() => navigate(studios[0].path)}
            className={`bento-large glass-card-teal card-glow-teal group scroll-animate fade-up smooth delay-0 cursor-pointer ${visibleStudios.has(0) ? 'visible' : ''}`}
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/20">
                  {studios[0].icon}
                </div>
                <CardTitle className="text-3xl">{studios[0].title}</CardTitle>
              </div>
              <CardDescription className="text-lg mt-4">{studios[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {studios[0].features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-base">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Productivity Studio - Medium Card with Magenta accent */}
          <Card 
            ref={(el) => studioRefs.current[1] = el}
            onClick={() => navigate(studios[1].path)}
            className={`bento-medium glass-card-magenta card-glow-magenta group scroll-animate fade-right smooth delay-200 cursor-pointer ${visibleStudios.has(1) ? 'visible' : ''}`}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/30 to-secondary/10 text-secondary group-hover:from-secondary group-hover:to-secondary/80 group-hover:text-white transition-all duration-300 shadow-lg shadow-secondary/20">
                  {studios[1].icon}
                </div>
                <CardTitle className="text-2xl">{studios[1].title}</CardTitle>
              </div>
              <CardDescription className="text-base">{studios[1].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {studios[1].features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-md shadow-secondary/50" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Creativity Studio - Medium Card with Purple accent */}
          <Card 
            ref={(el) => studioRefs.current[2] = el}
            onClick={() => navigate(studios[2].path)}
            className={`bento-medium glass-card-purple card-glow-purple group scroll-animate scale-up spring delay-300 cursor-pointer ${visibleStudios.has(2) ? 'visible' : ''}`}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-500/10 text-purple-400 group-hover:from-purple-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-purple-500/20">
                  {studios[2].icon}
                </div>
                <CardTitle className="text-2xl">{studios[2].title}</CardTitle>
              </div>
              <CardDescription className="text-base">{studios[2].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {studios[2].features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-md shadow-purple-400/50" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Knowledge Vault - Medium Card with Teal accent */}
          <Card 
            ref={(el) => studioRefs.current[3] = el}
            onClick={() => navigate(studios[3].path)}
            className={`bento-medium glass-card-teal card-glow-teal group scroll-animate fade-left smooth delay-400 cursor-pointer ${visibleStudios.has(3) ? 'visible' : ''}`}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/20">
                  {studios[3].icon}
                </div>
                <CardTitle className="text-2xl">{studios[3].title}</CardTitle>
              </div>
              <CardDescription className="text-base">{studios[3].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {studios[3].features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-md shadow-primary/50" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="glass-card card-glow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-50" />
          <CardContent className="py-16 text-center relative z-10">
            <h3 className="text-4xl font-bold mb-4 glow-text">Ready to Transform Your Learning?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already studying smarter with CelarisAI
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsComingSoonOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 btn-glow"
            >
              Start Your Free Trial
            </Button>
          </CardContent>
        </Card>
      </section>

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

export default Index;
