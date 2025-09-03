"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Define some example cards
const cards = [
  { id: 1, title: "Project One", content: "Description for the first project." },
  { id: 2, title: "Project Two", content: "Description for the second project." },
  { id: 3, title: "Project Three", content: "Description for the third project." },
  { id: 4, title: "Project Four", content: "Description for the fourth project." },
];

const HorizontalScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-8">
          {/* Your Title Card */}
          <div className="flex h-[450px] w-screen flex-col items-center justify-center px-4 text-white">
            <h2 className="text-5xl font-bold">My Recent Work</h2>
            <p className="mt-4 text-lg text-zinc-300">Scroll down to explore my projects.</p>
          </div>

          {/* Map through your project cards */}
          {cards.map((card) => {
            return (
              <div key={card.id} className="group relative h-[450px] w-[600px] overflow-hidden rounded-xl bg-zinc-900 border border-zinc-700">
                <div className="flex h-full flex-col items-center justify-center p-8 text-white">
                    <h3 className="text-3xl font-bold">{card.title}</h3>
                    <p className="mt-2 text-zinc-400">{card.content}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;