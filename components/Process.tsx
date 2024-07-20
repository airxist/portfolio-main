"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasReveal } from "@/components/ui/CanvasReveal";
import MagicButton from "./ui/MagicButton";
import { Button } from "./ui/MovingBorders";

export function Process() {
  return (
    <>
      <div className="py-10" id="testimonials">
        <h1 className="heading">
          My <span className="text-purple">Process</span>
        </h1>
      </div>

      <section className="my-20 w-full flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Plan & Strategize"
          icon={
            <Button className="w-full py-5 px-5">
              <h1 className="text-2xl">Phase 1</h1>
            </Button>
          }
          description="Just add your description"
        >
          <CanvasReveal
            animationSpeed={5.1}
            containerClassName="bg-orange-500"
          />
        </Card>
        <Card
          title="Develop & Progress Update"
          description="some descriptiton"
          icon={
            <Button className="w-full py-5 px-5">
              <h1 className="text-2xl">Phase 2</h1>
            </Button>
          }
        >
          <CanvasReveal
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            // dotSize={90}
          />
        </Card>
        <Card
          title="Develop & Launch"
          icon={
            <Button className="w-full py-5 px-5">
              <h1 className="text-2xl">Phase 3</h1>
            </Button>
          }
          description="Some Description"
        >
          <CanvasReveal
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </section>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[15rem] md:h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>

        <h2 className="text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>

        <p className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Process;
