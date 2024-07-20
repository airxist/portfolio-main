"use client";

import { cn } from "@/utils/cn";
import { GradientBg } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import MagicButton from "./MagicButton";
import { useState } from "react";

import lottieConfettie from "@/data/lottieConfettie.json";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-6 gap-8 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("Josemariaofurum@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 overflow-hidden border-white/[0.1] border",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "} h-full`}>
        {/* img main */}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        {/* spare image if any */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {/* gradient background */}
        {id === 6 && <GradientBg />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-10 transition duration-100 relative md:h-full min-h-40 flex flex-col px-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {/* The Globe */}
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-2 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React.js", "Next.js", "TypeScript"].map((tool) => (
                  <span
                    key={tool}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 text-center bg-[#10132E]"
                  >
                    {tool}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["VueJS", "MongoDB", "NodeJS"].map((tool) => (
                  <span
                    key={tool}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 text-center bg-[#10132E]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-9 relative">
              <div>
                <div>
                  Lottie animation for later
                </div>
                <MagicButton
                  title={copied ? "Copied" : "copy my email"}
                  handleClick={handleClick}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
