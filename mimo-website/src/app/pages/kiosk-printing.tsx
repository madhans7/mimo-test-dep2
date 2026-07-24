import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function KioskPrinting() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate printing progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Navigate back to home after 3 seconds of completion
          setTimeout(() => {
            navigate("/");
          }, 3000);
          return 100;
        }
        // Random increment between 1 and 5
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen w-full flex items-center p-8 bg-[#0A2647] text-white overflow-hidden relative selection:bg-white/30">

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10 gap-16">

        {/* Left Side: Status Text inside a frosted glass card */}
        <div className="flex-1">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl max-w-xl">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-sm">
              Hello Demo.. !
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-2 text-white/90">
              {progress < 100 ? "Printing in progress..." : "Printing complete!"}
            </p>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {progress < 100 ? "Please wait." : "Please collect your documents."}
            </p>

            <p className="text-sm md:text-base font-bold text-yellow-300 uppercase tracking-widest animate-pulse">
              {progress === 0 && "Warming up printer..."}
              {progress > 0 && progress < 100 && "Printing your document..."}
              {progress === 100 && "Done!"}
            </p>
          </div>
        </div>

        {/* Right Side: Circular Progress */}
        <div className="relative shrink-0 w-80 h-80 flex items-center justify-center">

          {/* Animated decorative rings */}
          <div className="absolute inset-0 border-[1px] border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-2 border-[1px] border-white/20 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-6 border-[2px] border-white/10 rounded-full" />

          {/* Inner frosted circle */}
          <div className="absolute inset-10 rounded-full bg-black/20 backdrop-blur-md shadow-inner border border-white/10 flex items-center justify-center">
            {progress < 100 ? (
              <div className="flex items-baseline font-black tracking-tighter drop-shadow-lg">
                <span className="text-8xl">{progress}</span>
                <span className="text-4xl text-white/70 ml-1">%</span>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <CheckCircle2 className="w-32 h-32 text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
              </motion.div>
            )}
          </div>

          {/* Floating decorative dots */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{
                transform: `rotate(${deg}deg) translateY(-140px)`,
                animationDelay: `${i * 200}ms`
              }}
            />
          ))}

        </div>

      </div>
    </div>
  );
}
