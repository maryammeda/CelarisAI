import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ComingSoonDialog = ({ open, onOpenChange }: ComingSoonDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="!bg-gradient-to-br !from-[#1a1a2e] !to-[#16213e] backdrop-blur-xl border border-primary/30 shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(0, 245, 212, 0.15), 0 20px 60px rgba(0, 0, 0, 0.7)',
        }}
      >
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="CelarisAI Logo" className="w-12 h-12 icon-pulsate" />
          </div>
          <DialogTitle className="text-2xl text-center glow-text text-white">
            Coming Soon!
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-4 text-muted-foreground">
            Front end designed for competition purposes! Stay tuned as these features will come to life soon!
          </DialogDescription>
        </DialogHeader>
        <Button 
          onClick={() => onOpenChange(false)}
          className="bg-primary hover:bg-primary/90 text-white mt-4 btn-glow shadow-md shadow-primary/20"
        >
          Got it!
        </Button>
      </DialogContent>
    </Dialog>
  );
};
