import {cn} from "@/lib/utils"

// Define the content props type
type SphereMaskContent = {
  mainheading: string
  mainsubHeading: string
}

export const SphereMask = ({reverse = false, content}: {reverse?: boolean; content: SphereMaskContent}) => {
  return (
    <>
      <div className="pb-4 pt-24"> </div>
      <div
        className={cn(
          // color
          "[--color:var(--color-one)]",
          "pointer-events-none relative z-0 mx-auto lg:h-[40rem] h-[50rem] overflow-hidden ",

          // sphere mask
          "[mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_60%)] ",

          // reverse
          reverse ? "my-[-8rem] rotate-180 md:mt-[-30rem]" : "my-[-19.82em] ",

          // before
          "before:absolute before:inset-0 before:h-full before:w-full before:opacity-50 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] ",

          // after
          "after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--muted))] after:bg-muted/10"
        )}
      ></div>

      <div className="flex flex-col items-center justify-center text-center h-full lg:mt-20 mt-12 lg:px-20 px-12 ">
        <h2 className="  font-semibold text-primary opacity-90">{content.mainheading}</h2>
        <p className="text-xl max-w-5xl mx-auto flex justify-center pb-4 opacity-90">{content.mainsubHeading}</p>
      </div>
    </>
  )
}
