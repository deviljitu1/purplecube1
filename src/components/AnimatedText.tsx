/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character: React.FC<{
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let runningCharIndex = 0;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordStartIndex = runningCharIndex;
        runningCharIndex += wordChars.length + 1; // +1 for the space

        return (
          <React.Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, charIndex) => {
                const globalIndex = wordStartIndex + charIndex;
                const start = globalIndex / totalChars;
                const end = Math.min(1, start + 0.15);

                return (
                  <Character
                    key={charIndex}
                    char={char}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </span>
            {wordIndex < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};
