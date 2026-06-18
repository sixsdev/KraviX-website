import StarField from "@/components/StarField";
import { Wrench } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center">
      <StarField />

      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-cursive text-foreground mb-8 animate-neon-sweep">
          Kravix
        </h1>

        <div
          className="flex items-center justify-center w-20 h-20 rounded-full border border-primary/30 mb-8"
          style={{
            boxShadow:
              "0 0 40px hsl(var(--primary)/0.25), inset 0 0 20px hsl(var(--primary)/0.1)",
          }}
        >
          <Wrench className="w-9 h-9 text-primary animate-pulse" />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase tracking-widest mb-4">
          Website Down for Updates
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
          We're working on something new. Kravix will be back soon — better than ever.
        </p>

        <a
          href="https://discord.com/invite/nQRGAyhD7X"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 px-8 py-3 rounded-full border border-foreground/20 text-foreground text-sm uppercase tracking-widest hover:bg-foreground/5 transition-all duration-300"
        >
          Join our Discord
        </a>
      </div>
    </div>
  );
};

export default Maintenance;