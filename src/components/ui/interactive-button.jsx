import * as React from "react"
import { cn } from "@/lib/utils"

const InteractiveButton = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-6 py-3 font-medium text-black transition duration-300 ease-out hover:scale-105",
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary to-yellow-500 opacity-100 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </button>
  )
})
InteractiveButton.displayName = "InteractiveButton"

export { InteractiveButton } 