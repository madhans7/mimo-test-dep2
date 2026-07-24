import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Delete, Check } from "lucide-react";
import { motion } from "motion/react";

export function KioskEnterCode() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const CODE_LENGTH = 4;

  const handleKeyPress = (num: string) => {
    if (code.length < CODE_LENGTH) {
      setCode((prev) => prev + num);
    }
  };

  const handleDelete = () => {
    setCode((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    if (code.length === CODE_LENGTH) {
      // Navigate to printing progress screen
      navigate("/kiosk/printing");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center p-8 bg-[#0A2647] text-white overflow-hidden relative selection:bg-white/30">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10 gap-16">

        {/* Left Side: Text and Inputs */}
        <div className="flex-1 flex flex-col space-y-8 pl-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight drop-shadow-sm">
            Enter Your Mimo<br />Code Here
          </h1>

          {/* Code Input Boxes */}
          <div className="flex space-x-4">
            {Array.from({ length: CODE_LENGTH }).map((_, i) => (
              <div
                key={i}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-4xl font-bold border-2 transition-all duration-200 ${i === code.length
                    ? 'border-white bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : code.length > i
                      ? 'border-white/80 bg-white/10'
                      : 'border-white/30 bg-white/5'
                  }`}
              >
                {code[i] || ""}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Number Pad */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 shrink-0">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleKeyPress(num.toString())}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 transition-all flex items-center justify-center text-3xl font-bold shadow-sm backdrop-blur-md border border-white/20"
            >
              {num}
            </button>
          ))}

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-500/80 hover:bg-red-500 active:scale-95 transition-all flex items-center justify-center text-white shadow-sm backdrop-blur-md"
          >
            <Delete className="w-8 h-8" />
          </button>

          {/* Zero Button */}
          <button
            onClick={() => handleKeyPress("0")}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 transition-all flex items-center justify-center text-3xl font-bold shadow-sm backdrop-blur-md border border-white/20"
          >
            0
          </button>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={code.length !== CODE_LENGTH}
            className={`w-20 h-20 md:w-24 md:h-24 rounded-full transition-all flex items-center justify-center shadow-sm backdrop-blur-md border ${code.length === CODE_LENGTH
                ? 'bg-green-500 hover:bg-green-400 active:scale-95 border-green-400 cursor-pointer'
                : 'bg-white/10 border-white/10 text-white/30 cursor-not-allowed'
              }`}
          >
            <Check className={`w-10 h-10 ${code.length === CODE_LENGTH ? 'text-white' : 'text-white/30'}`} strokeWidth={3} />
          </button>
        </div>

      </div>
    </div>
  );
}
