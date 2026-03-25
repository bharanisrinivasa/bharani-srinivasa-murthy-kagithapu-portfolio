import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds loading for a nice effect
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress > 100 ? 100 : newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // small delay at 100% to let users see it
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
    >
      {/* Background elements matched to portfolio for seamless transition */}
      <div className="absolute inset-0 bg-[#030712]" />
      <img
        src="https://picsum.photos/seed/darktech/1920/1080?blur=2"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full px-6"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] mb-12 font-mono text-center"
        >
          <span className="text-white">MY</span>
          <span className="text-emerald-500"> PORTFOLIO</span>
        </motion.h1>
        
        {/* Loading Bar Container */}
        <div className="w-full max-w-md h-[4px] bg-slate-800/50 rounded-full overflow-hidden relative backdrop-blur-sm border border-white/5 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          {/* Animated Glow behind the bar */}
          <div 
            className="absolute top-0 left-0 h-full bg-emerald-500/80 blur-[2px] w-full origin-left" 
            style={{ transform: `scaleX(${progress / 100})` }} 
          />
          
          {/* Actual Loading Bar */}
          <motion.div 
            className="h-full bg-emerald-400 rounded-full relative z-10"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading Text / Percentage */}
        <div className="mt-8 flex items-center gap-4 text-emerald-500/80 font-mono text-sm tracking-widest uppercase">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Initializing
          </motion.div>
          <div className="w-12 text-right">
            {Math.round(progress)}%
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
