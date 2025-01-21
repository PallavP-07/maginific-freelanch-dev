const CircularProgress = ({ label, value, totalValue }) => {
  // Determine if the value is a percentage or an absolute value
  const isPercentage = typeof value === "string" && value.includes("%");
  
  // Calculate percentage and display value
  const percentage = isPercentage
    ? parseFloat(value) // Extract numeric value from percentage string
    : totalValue > 0
    ? (value / totalValue) * 100
    : 0;
    
  const displayValue = isPercentage
    ? `${parseFloat(value)}%` // Display as percentage
    : value; // Display raw value for absolute inputs

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Outer Container for the Progress */}
      <div className="relative w-40 h-40 sm:w-36 sm:h-36 lg:w-52 lg:h-52">
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
            r="14.5"
            fill="none"
            stroke="#CCE0D6" /* Light green */
            strokeWidth="2.8"
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
            strokeWidth="1.8"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              transition: "stroke-dashoffset 0.5s ease-in-out", // Smooth animation
            }}
          />
        </svg>

        {/* Inner Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          {/* Display Value */}
          <span className="text-[28px] leading-7 font-bold text-[#006633]">
            {displayValue}
          </span>
          {/* Label */}
          <p className="mt-1 text-[12px] p-4 font-light md:font-semibold leading-4 text-gray-500 text-center">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
