import clsx from "clsx";

type SpeenLoaderProps = {
  className?: string;
};

export default function SpeenLoader({ className }: SpeenLoaderProps) {
  const classes = clsx("flex", "items-center", "justify-center", className);

  return (
    <div className={classes}>
      <div
        className={clsx(
          "w-10 h-10",
          "border-5 border-t-transparent border-slate-900",
          "rounded-full",
          "animate-spin",
        )}
      ></div>
    </div>
  );
}
