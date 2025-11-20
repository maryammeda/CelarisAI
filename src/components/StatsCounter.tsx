import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 3, label: 'AI Studios', suffix: '' },
  { value: 12, label: 'Smart Tools', suffix: '+' },
  { value: 80, label: 'Faster Learning', suffix: '%' },
  { value: 1000, label: 'Students Helped', suffix: '+' },
];

export const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(
              Math.round(increment * currentStep),
              stat.value
            );
            return newCounts;
          });
        } else {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto px-6 py-16"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center stats-card"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` : 'none',
              }}
            >
              <div className="relative">
                {/* Glowing circle background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-32 h-32 rounded-full blur-3xl opacity-20 ${
                      index === 0
                        ? 'bg-primary'
                        : index === 1
                        ? 'bg-secondary'
                        : index === 2
                        ? 'bg-purple-500'
                        : 'bg-primary'
                    }`}
                  />
                </div>

                {/* Number */}
                <div className="relative text-5xl md:text-6xl font-black mb-3">
                  <span
                    className={`${
                      index === 0
                        ? 'text-primary'
                        : index === 1
                        ? 'text-secondary'
                        : index === 2
                        ? 'text-purple-400'
                        : 'text-primary'
                    }`}
                    style={{
                      textShadow: '0 0 30px currentColor',
                    }}
                  >
                    {stat.prefix}
                    {counts[index]}
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

