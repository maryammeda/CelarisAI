import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Clock, Trophy, CheckCircle, BookOpen, Lightbulb, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { ComingSoonDialog } from "@/components/ComingSoonDialog";
import { NavBar } from "@/components/NavBar";
import { useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

const Dashboard = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [focusTime, setFocusTime] = useState(25);
  
  const { itemRefs: topCardRefs, visibleItems: visibleTopCards } = useStaggeredScrollAnimation(3);
  const { itemRefs: taskRefs, visibleItems: visibleTasks } = useStaggeredScrollAnimation(3);
  const { itemRefs: recentRefs, visibleItems: visibleRecent } = useStaggeredScrollAnimation(3);

  const todayTasks = [
    { title: "Complete Math Assignment", studio: "Study Studio", completed: false },
    { title: "Review History Notes", studio: "Study Studio", completed: true },
    { title: "Create Pitch Deck", studio: "Creativity Studio", completed: false },
  ];

  const recentCreations = [
    { title: "Biology Flashcards", type: "Flashcards", date: "2 hours ago" },
    { title: "Essay Humanized", type: "Text", date: "5 hours ago" },
    { title: "Math Video Explainer", type: "Video", date: "Yesterday" },
  ];

  const quickLinks = [
    { icon: <BookOpen className="w-6 h-6" />, title: "Study Studio", link: "/study-studio" },
    { icon: <LineChart className="w-6 h-6" />, title: "Productivity Studio", link: "/productivity-studio" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Creativity Studio", link: "/creativity-studio" },
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
        <div className="mb-12">
          <LayoutDashboard className="w-12 h-12 mb-4 text-primary" />
          <h2 className="text-4xl font-bold mb-2 glow-text">Your Dashboard</h2>
          <p className="text-lg text-muted-foreground">Welcome back! Here's your personal hub</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Focus Mode Timer */}
          <Card 
            ref={(el) => topCardRefs.current[0] = el}
            className={`glass-card-teal card-glow-teal scroll-animate scale-up spring delay-0 ${visibleTopCards.has(0) ? 'visible' : ''}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Focus Mode Timer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">{focusTime}:00</div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white btn-glow shadow-lg shadow-primary/30"
                  onClick={() => setShowDialog(true)}
                >
                  Start Focus Session
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Streaks & Progress */}
          <Card 
            ref={(el) => topCardRefs.current[1] = el}
            className={`glass-card-magenta card-glow-magenta scroll-animate scale-up spring delay-200 ${visibleTopCards.has(1) ? 'visible' : ''}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-secondary" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Daily Streak</p>
                  <p className="text-3xl font-bold text-secondary">7 days 🔥</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Badges Earned</p>
                  <p className="text-3xl font-bold text-primary">12 🏆</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card 
            ref={(el) => topCardRefs.current[2] = el}
            className={`glass-card-purple card-glow-purple scroll-animate scale-up spring delay-400 ${visibleTopCards.has(2) ? 'visible' : ''}`}
          >
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickLinks.map((item, index) => {
                const colors = ['hover:border-primary/50 hover:bg-primary/10', 'hover:border-secondary/50 hover:bg-secondary/10', 'hover:border-purple-400/50 hover:bg-purple-500/10'];
                return (
                  <Link key={index} to={item.link}>
                    <Button 
                      variant="outline" 
                      className={`w-full justify-start glass-card border-white/10 ${colors[index]} transition-all`}
                    >
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </Button>
                  </Link>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Today's Tasks & Recent Creations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Tasks */}
          <Card 
            ref={(el) => taskRefs.current[0] = el}
            className={`glass-card-teal card-glow-teal scroll-animate fade-right smooth ${visibleTasks.has(0) ? 'visible' : ''}`}
          >
            <CardHeader>
              <CardTitle>Today's Tasks</CardTitle>
              <CardDescription>Your scheduled activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayTasks.map((task, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg glass-card hover:border-primary/30 transition-all cursor-pointer"
                  onClick={() => setShowDialog(true)}
                >
                  <CheckCircle className={`w-5 h-5 ${task.completed ? 'text-primary' : 'text-muted-foreground'}`} />
                  <div className="flex-1">
                    <p className={task.completed ? 'line-through text-muted-foreground' : ''}>{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.studio}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Creations */}
          <Card 
            ref={(el) => taskRefs.current[1] = el}
            className={`glass-card-magenta card-glow-magenta scroll-animate fade-left smooth delay-200 ${visibleTasks.has(1) ? 'visible' : ''}`}
          >
            <CardHeader>
              <CardTitle>Recent AI Creations</CardTitle>
              <CardDescription>Your latest generated content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentCreations.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg glass-card hover:border-secondary/30 transition-all cursor-pointer"
                  onClick={() => setShowDialog(true)}
                >
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xs text-secondary">{item.type}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
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

export default Dashboard;
