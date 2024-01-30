'use client';

import { InsightCard, TypingText } from "../components";
import { insights } from "../constants";

const Insights = () => (
  <section className="px-16 md:px-40 mt-40">
    <TypingText text={"| Insight"} align='text-center' />
    <h2 className={`text-white text-[30px] lg:text-[64px] leading-[120%] font-extrabold mx-auto mb-16 text-center`}>Insight about metaverse</h2>

    {
      insights.map((insight, index) => (
        <InsightCard title={insight.title} text={insight.subtitle} imgURL={insight.imgUrl} key={index} index={index}/>
      ))
    }
  </section>
);

export default Insights;
