import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-1 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-primary text-background dark:text-background hover:brightness-125 pointer-events-auto",
        destructive: "bg-destructive text-destructive-foreground hover:brightness-125 pointer-events-auto",
        outline: "border border-border bg-transparent hover:bg-muted/30 hover:brightness-125 pointer-events-auto",
        secondary: "bg-secondary/20 text-background dark:text-background hover:brightness-125 pointer-events-auto",
        ghost: "hover:text-accent hover:underline pointer-events-auto",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-8 py-2",
        sm: "h-9 px-4",
        lg: "h-11 px-10",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({variant, size, className}))} {...props} />
}

export {Button, buttonVariants}
