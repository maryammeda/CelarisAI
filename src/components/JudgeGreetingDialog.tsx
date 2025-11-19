import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const JudgeGreetingDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the dialog has been shown before in this session
    const hasShownGreeting = sessionStorage.getItem('judgeGreetingShown');
    
    if (!hasShownGreeting) {
      // Show dialog after a short delay for better UX
      setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem('judgeGreetingShown', 'true');
      }, 500);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent 
        className="!bg-gradient-to-br !from-[#1a1a2e] !to-[#16213e] backdrop-blur-xl border border-primary/30 shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(0, 245, 212, 0.15), 0 20px 60px rgba(0, 0, 0, 0.7)',
        }}
      >
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="CelarisAI Logo" className="w-12 h-12 icon-pulsate" />
          </div>
          <DialogTitle className="text-2xl text-center glow-text text-white">
            Greetings, Honorable Judges!
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-4 text-white space-y-3">
            <p>
              You've just stepped into a world built with far too much caffeine, code, and creativity.
            </p>
            <p>
              Every pixel has been fussed over, and I hope it makes you smile as much as it made me debug!   
            </p>
          </DialogDescription>
        </DialogHeader>
        <Button 
          onClick={() => setOpen(false)}
          className="bg-primary hover:bg-primary/90 text-white mt-4 btn-glow shadow-md shadow-primary/20"
        >
          Continue to Site
        </Button>
      </DialogContent>
    </Dialog>
  );
};

