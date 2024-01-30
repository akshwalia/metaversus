'use client';
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ text, align }) => (
  <>
    <div className={`${align} text-[14px] text-secondary-white`}>
      {Array.from(text).map((letter, index) => (
        <motion.span key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          >
          {letter}
        </motion.span>
      ))}
    </div>
  </>

);

export const TitleText = () => (
  <h2>Title Text</h2>
);
