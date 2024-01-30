const StartSteps = ({ number, text }) => (
  <div className="flex gap-7 mb-5 items-center">
    <div className="w-[70px] h-[70px] flex-shrink-0 rounded-3xl bg-[rgb(255,255,255,0.08)] flex items-center justify-center text-white font-extrabold text-[20px]">
      {number}
    </div>

    <div className="text-[14px] md:text-[18px] text-[#B0B0B0] leading-[180%] max-w-[370px]">
      {text}
    </div>
  </div>
);

export default StartSteps;
