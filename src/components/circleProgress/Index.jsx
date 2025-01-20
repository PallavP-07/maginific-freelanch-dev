const CircularProgress = ({  label, value,totalValue }) => {
    
    const displayValue = typeof value === "number" ? `${value}%` : value;
    const percentage = totalValue > 0 ? (value / totalValue) * 100 : 0;
    return (
      <div className="flex flex-col items-center justify-center w-full">
        {/* Outer Container for the Progress */}
        <div className="relative w-40 h-40 sm:w-40 sm:h-40 lg:w-56 lg:h-56">
          {/* SVG Circular Progress */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#CCE0D6" /* Light green */
              strokeWidth="3"
            />
            {/* Progress Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#006633" /* Dark green */
              strokeDasharray="100"
              strokeDashoffset={100 - percentage}
              strokeLinecap="round"
              strokeWidth="2"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "center",
                transition: "stroke-dashoffset 0.5s ease-in-out", // Smooth animation
              }}
            />
          </svg>
  
          {/* Inner Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
            {/* Percentage Value */}
            <span className=" text-[28px] leading-7 font-bold text-[#006633]">
              {displayValue}
            </span>
            {/* Label */}
            <p className="mt-1 text-[12px] font-semibold leading-4 text-gray-500 text-center">
              {label}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CircularProgress;
  