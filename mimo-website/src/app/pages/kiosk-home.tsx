import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useMotionValue, useTransform } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

export function KioskHome() {
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  const handleDragEnd = (event: any, info: any) => {
    const containerWidth = containerRef.current?.offsetWidth || 300;
    const thumbWidth = 64; // roughly the width of the thumb
    const threshold = containerWidth - thumbWidth - 10;

    if (info.offset.x >= threshold) {
      setIsUnlocked(true);
      // Trigger navigation
      setTimeout(() => {
        navigate("/kiosk/enter-code");
      }, 300);
    } else {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between p-8 bg-[#0A2647] text-white overflow-hidden relative selection:bg-white/30">

      {/* Top spacing */}
      <div className="flex-1"></div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center z-10 w-full max-w-2xl">
        <p className="text-sm md:text-base font-semibold tracking-[0.2em] mb-4 uppercase text-white/90">
          - Welcome to -
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-2 drop-shadow-sm">
          MIMO
        </h1>
        <h2 className="text-xl md:text-3xl font-bold mb-4 drop-shadow-sm">
          Self-Service Printing Kiosk
        </h2>
        <p className="text-sm md:text-base text-white/90 mb-12 font-medium max-w-md mx-auto">
          Fast, secure document printing via Mimo code.
        </p>

        {/* Swipe Button Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-sm h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center p-1.5 shadow-inner overflow-hidden border border-white/30"
        >
          {/* Thumb */}
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0.1}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
            className="absolute left-1.5 z-20 w-auto px-6 h-[52px] bg-white rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-md text-[#00AEEF] font-bold tracking-wider text-sm whitespace-nowrap"
          >
            SWIPE TO START <ArrowRight className="w-4 h-4 ml-2" />
          </motion.div>

          {/* Chevrons (Arrows) in background */}
          <div className="absolute right-6 flex space-x-1 text-white/50 z-10">
            <ChevronRight className="w-6 h-6 animate-pulse" style={{ animationDelay: "0ms" }} />
            <ChevronRight className="w-6 h-6 animate-pulse" style={{ animationDelay: "150ms" }} />
            <ChevronRight className="w-6 h-6 animate-pulse" style={{ animationDelay: "300ms" }} />
            <ChevronRight className="w-6 h-6 animate-pulse" style={{ animationDelay: "450ms" }} />
            <ChevronRight className="w-6 h-6 animate-pulse" style={{ animationDelay: "600ms" }} />
          </div>
        </div>
      </div>

      {/* Bottom spacing & Footer */}
      <div className="flex-1 flex flex-col justify-end w-full z-10">
        <div className="text-center text-white/80 text-xs space-y-1 font-medium">
          <p>Software designed and developed by <span className="font-bold text-white">Rathindra</span>.</p>
          <p>© 2026 <span className="font-bold text-white">VisionPrintt</span>. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
