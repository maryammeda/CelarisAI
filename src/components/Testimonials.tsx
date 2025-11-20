import { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    image: "SC",
    content: "CelarisAI transformed my study routine! The flashcards and audio summaries helped me ace my exams while spending half the time studying.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Medical Student",
    image: "MJ",
    content: "The AI-powered notes from my lectures are incredible. I can focus on understanding rather than frantically writing everything down.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Business Major",
    image: "PP",
    content: "I use the Productivity Studio daily for my group projects. The task planner and meeting notes keep our team organized and efficient.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const { itemRefs, visibleItems } = useStaggeredScrollAnimation(3);

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-3 glow-text">Loved by Students Everywhere</h3>
        <p className="text-muted-foreground text-lg">
          See what students are saying about CelarisAI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            ref={(el) => itemRefs.current[index] = el}
            className={`glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 scroll-animate fade-up smooth delay-${index * 200} ${visibleItems.has(index) ? 'visible' : ''}`}
            style={{
              background: 'rgba(26, 26, 46, 0.6)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <CardContent className="pt-6">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    style={{
                      animation: `fadeIn 0.3s ease-out ${(i * 0.1) + 0.5}s backwards`,
                    }}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-white/90 mb-6 text-base leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {/* Avatar with Initials */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: index === 0
                      ? 'linear-gradient(135deg, rgba(0, 245, 212, 0.2), rgba(0, 245, 212, 0.4))'
                      : index === 1
                      ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.4))'
                      : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.4))',
                    border: '2px solid',
                    borderColor: index === 0
                      ? 'rgba(0, 245, 212, 0.3)'
                      : index === 1
                      ? 'rgba(236, 72, 153, 0.3)'
                      : 'rgba(139, 92, 246, 0.3)',
                  }}
                >
                  <span
                    className={
                      index === 0
                        ? 'text-primary'
                        : index === 1
                        ? 'text-secondary'
                        : 'text-purple-400'
                    }
                  >
                    {testimonial.image}
                  </span>
                </div>

                {/* Name and Role */}
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

