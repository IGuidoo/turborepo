import * as React from "react"
import { cn } from "./utils.js"


const CardSmall = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl molecule p-1.5",
      className
    )}
    {...props}
  />
))
CardSmall.displayName = "CardSmall"

const CardLiSmall = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "rounded-2xl molecule p-1.5 list-none",
      className
    )}
    {...props}
  />
))
CardLiSmall.displayName = "CardLiSmall"

const CardSmallHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col p-4 space-y-1", className)}
    {...props}
  />
))
CardSmallHeader.displayName = "CardSmallHeader"

const CardSmallTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "testH3",
      className
    )}
    {...props}
  />
))
CardSmallTitle.displayName = "CardSmallTitle"

const CardSmallDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-lg theme-t-t", className)}
    {...props}
  />
))
CardSmallDescription.displayName = "CardSmallDescription"

const CardSmallContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("bg-base-50 rounded-[10px]", className)} {...props} />
))
CardSmallContent.displayName = "CardSmallContent"

const CardSmallFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardSmallFooter.displayName = "CardSmallFooter"

export { CardSmall, CardLiSmall, CardSmallHeader, CardSmallFooter, CardSmallTitle, CardSmallDescription, CardSmallContent }
