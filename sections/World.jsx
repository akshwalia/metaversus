'use client';

import { TypingText } from "../components";

const World = () => (
  <section className="px-16 md:px-40 mt-40">
    <TypingText text={"| People on the World"} align='text-center' />
    <h2 className={`text-white text-[30px] lg:text-[64px] leading-[120%] font-extrabold mx-auto mb-5 text-center`}>Track friends around you and invite them to play together in the same world</h2>

    <div className="relative">
      <img src="map.png" alt="map" className="w-full" />
      <img src="/person-1.png" alt="Person1" className="w-[45px] md:w-[80px]  absolute bottom-[10%] lg:bottom-[15%] right-[5%] lg:right-[10%] z-10 " />
      <img src="/person-2.png" alt="Person2" className="w-[45px] md:w-[80px]  absolute top-[0%] lg:top-[15%] left-[10%] lg:left-[10%] z-10" />
      <img src="/person-3.png" alt="Person3" className="w-[45px] md:w-[80px]  absolute top-[30%] lg:top-1/2 left-[40%] lg:left-[45%] z-10" />
    </div>
  </section>
);

export default World;
