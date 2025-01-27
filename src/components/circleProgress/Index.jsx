const CircularProgress = ({ value, text, subtext,percentage }) => {

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Outer Container for the Progress */}
      <div className="relative md:w-[148px] md:h-[148px] lg:w-[192px] lg:h-[192px]">
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
        <div className="absolute inset-0 flex overflow-hidden flex-col items-center justify-center">
          <p className=" text-xl lg:text-4xl font-bold text-[#026534]">{value}{text === '%' ? <span className="text-[#CCE0D6]">%</span> : ''}</p>
          <span className="text-[8px] lg:text-[12px] lg:break-words text-gray-600 text-center mt-2">{subtext}</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;







