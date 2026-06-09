"use client";

import React from "react";
import { motion } from "framer-motion";

// Import tool logos
import boltLogo from "@/assets/tools/bolt.png";
import datawrapperLogo from "@/assets/tools/datawrapper.jpeg";
import notionLogo from "@/assets/tools/notion.png";
import illustratorLogo from "@/assets/tools/illustrator.png";
import photoshopLogo from "@/assets/tools/photoshop.png";
import canvaLogo from "@/assets/tools/canva.png";
import figmaLogo from "@/assets/tools/figma.png";
import vercelLogo from "@/assets/tools/vercel.png";
import figjamLogo from "@/assets/tools/figjam.png";
import framerLogo from "@/assets/tools/framer.jpg";
import figmaNewLogo from "@/assets/tools/figma-new.png";

const ICONS_ROW1 = [figmaNewLogo, photoshopLogo, illustratorLogo, notionLogo, canvaLogo, framerLogo];

const ICONS_ROW2 = [boltLogo, datawrapperLogo, vercelLogo, figjamLogo, figmaLogo];

const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative pt-0 pb-32 overflow-hidden bg-background">
      {/* Gradient fade from hero */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center pt-16">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Tools I Use for Product, UX, and Workflow Design
        </motion.h2>

        {/* Carousel */}
        <motion.div
          className="mt-12 overflow-hidden relative pb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg flex items-center justify-center overflow-hidden"
              >
                <img src={src} alt="tool icon" className="h-10 w-10 object-contain rounded-lg" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 5).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg flex items-center justify-center overflow-hidden"
              >
                <img src={src} alt="tool icon" className="h-10 w-10 object-contain rounded-lg" />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
