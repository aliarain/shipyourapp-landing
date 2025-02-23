"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import features from "@/db/features.json";

const ListicleSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(features.features[0]);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      const currentIndex = features.features.findIndex(f => f.id === selectedFeature.id);
      const nextIndex = (currentIndex + 1) % features.features.length;
      setSelectedFeature(features.features[nextIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedFeature, autoplay]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Everything you need</h2>
          <p className="text-xl text-gray-400">
            Launch faster with production-ready features
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr,2fr] gap-8">
          {/* Feature List */}
          <div className="flex flex-col gap-2">
            {features.features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => {
                  setSelectedFeature(feature);
                  setAutoplay(false);
                }}
                className={`relative text-left p-4 rounded-lg transition-colors ${
                  selectedFeature.id === feature.id
                    ? "bg-[#1a1a1a] text-foreground"
                    : "hover:bg-accent-background/50 text-gray-400"
                }`}
              >
                {selectedFeature.id === feature.id && (
                  <motion.div
                    layoutId="activeFeature"
                    className="absolute inset-0 rounded-lg bg-[#1a1a1a] border border-accent-background/20"
                    initial={false}
                  />
                )}
                <span className="relative flex items-center gap-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-medium">{feature.title}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Feature Details */}
          <div className="relative rounded-2xl bg-[#1a1a1a] border border-accent-background/20 p-8">
            <BorderBeam 
              colorFrom="#F5AF00"
              colorTo="#FF3D00"
              duration={4}
              size={24}
            />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <span className="text-3xl">{selectedFeature.icon}</span>
                    {selectedFeature.title}
                  </h3>
                  <span className="text-primary font-bold">
                    Save {selectedFeature.timeSaved}
                  </span>
                </div>

                <ul className="space-y-3">
                  {selectedFeature.description.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListicleSection; 