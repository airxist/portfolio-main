export function GridBackgroundDemo({ className, opacity } : { className?: string, opacity?: number}) {
  return (
    <div
      className={`${className} h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[${opacity || 0.2}] bg-grid-black/[0.3] flex items-center justify-center`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
