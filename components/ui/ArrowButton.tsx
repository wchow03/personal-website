"use client";
import React from "react";
import { MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react";

import { cn } from "@/lib/utils";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
}

export default function ArrowButton({
  text = "Open",
  textColor = "#bf49ff",
  buttonOverlayColor = "#bf49ff",
  borderColor = "#c284f9",
  iconColor = "white",
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <button
      style={{ borderColor: borderColor }}
      {...props}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-purple-400 bg-background px-6 py-3 font-medium shadow-md transition duration-300 ease-out",
        className,
      )}
    >
      <span
        style={{ background: buttonOverlayColor }}
        className={cn(
          "ease absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-purple-400 text-white duration-300 group-hover:translate-y-0",
        )}
      >
        <MoveDown style={{ color: iconColor }} />
      </span>
      <span
        style={{ color: textColor }}
        className={cn(
          "absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover:translate-y-full",
        )}
      >
        {text}
      </span>
      <span className="invisible relative">Button</span>
    </button>
  );
}

// "use client";
// import React from "react";

// import { cn } from "@/lib/utils";

// interface SwipeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     firstText: string;
//     secondText: string;
//     className?: string;
//     firstClass?: string;
//     secondClass?: string;
//     iconColor?: string;
// }

// export default function SwipeButton({
//   className = "",
//   secondText = "Get access",
//   firstText = "Get access",
//   firstClass = "bg-orange-500 text-white",
//   secondClass = "bg-black text-white",
//   iconColor = "white",
//   ...props
// }: SwipeButtonProps) {
//   const common = "block px-4 py-2   text-2xl font-bold duration-300 ease-in-out";
//   return (
//     <button
//       {...props}
//       className={cn("group relative min-w-fit overflow-hidden rounded-md", className)}
//     >
//       <span
//         className={cn(
//         //   "absolute inset-0 translate-y-full group-hover:translate-y-0 items-center justify-center flex",
//           "absolute inset-0 flex h-full w-full items-center justify-center",
//           common,
//           secondClass,
//         )}
//       >
//         <MoveDown style={{ color: iconColor }} />
//       </span>
//       <span className={cn("group-hover:-translate-y-full", common, firstClass)}>{firstText}</span>
//     </button>
//   );
// }

