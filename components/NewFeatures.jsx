const NewFeatures = ({ imgURL, title, text }) => (
  <div className="flex flex-col gap-2 md:gap-7 mb-5 max-w-[210px]">
    <div className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-3xl bg-[rgb(255,255,255,0.08)] flex items-center justify-center text-white font-extrabold text-[20px]">
      <img src={imgURL} alt="a whole tree" className="w-1/2 h-1/2 " />
    </div>

    <div className="text-[18px] md:text-[24px] font-bold text-white">
      {title}
    </div>

    <div className="text-[12px] md:text-[18px] text-[#B0B0B0] leading-[180%] max-w-[370px]">
      {text}
    </div>
  </div>
);

export default NewFeatures;
