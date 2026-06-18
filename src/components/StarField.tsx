import { useMemo } from "react";

const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      delay: Math.random() * 6,
      twinkleDuration: Math.random() * 3 + 2,
      driftDelay: Math.random() * 8,
      driftDuration: Math.random() * 6 + 6,
    }));
  }, []);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      left: Math.random() * 60,
      top: Math.random() * 40,
      delay: Math.random() * 12 + i * 5,
      duration: Math.random() * 1 + 0.8,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground animate-twinkle animate-star-drift"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s, ${star.driftDelay}s`,
            animationDuration: `${star.twinkleDuration + 2}s, ${star.driftDuration}s`,
          }}
        />
      ))}
      {shootingStars.map((s) => (
        <div
          key={`shoot-${s.id}`}
          className="absolute w-[2px] h-[2px] bg-foreground rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            boxShadow: "0 0 6px 2px rgba(255,255,255,0.6), -20px -20px 0 transparent",
            animation: `shooting-star ${s.duration}s linear ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
