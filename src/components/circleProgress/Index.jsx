"use client";
import { useEffect, useState, useRef } from "react";

const CircularProgress = ({ value, text, subtext, percentage }) => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const animateProgress = () => {
            start += 2; // Increase progress smoothly
            setProgress((prev) => Math.min(start, percentage)); // Ensure it doesn't exceed percentage

            if (start < percentage) {
              animationFrameRef.current = requestAnimationFrame(animateProgress);
            }
          };

          cancelAnimationFrame(animationFrameRef.current); // Reset animation frame
          animationFrameRef.current = requestAnimationFrame(animateProgress);
        } else {
          setProgress(0); // Reset progress when out of view
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (progressRef.current) observer.observe(progressRef.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [percentage]);

  return (
    <div className="flex flex-col items-center justify-center" ref={progressRef}>
      <div className="relative w-[140px] h-[140px] md:w-[148px] md:h-[148px] lg:w-[192px] lg:h-[192px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle cx="18" cy="18" r="14.5" fill="none" stroke="#CCE0D6" strokeWidth="2.8" />
          
          {/* Progress Circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#006633"
            strokeDasharray="100"
            strokeDashoffset={100 - progress}
            strokeLinecap="round"
            strokeWidth="1.8"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              transition: "stroke-dashoffset 0.3s ease-out",
            }}
          />
        </svg>

        {/* Inner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xl lg:text-4xl font-bold text-[#026534]">
            {value}
            {text === "%" && <span className="text-[#CCE0D6]">%</span>}
          </p>
          <span className="text-[8px] lg:text-[12px] text-gray-600 text-center mt-2">{subtext}</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
