import {cn} from "@/lib/utils"
import Marquee from "@/components/ui/magicui/marquee"

const reviews = [
  {
    name: "New Visitor",
    username: "United States",
    body: " /images/googleseasrch.png",
    img: "/images/browserchrome-nbg.png"
  },
  {
    name: "Return Visitor",
    username: "Germany",
    body: " /images/redditthread.png",
    img: "/images/browsersafari-nbg.png"
  },
  {
    name: "Logged-In Visitor",
    username: "United Kingdom",
    body: " /images/newsletter.png",
    img: "/images/browserbrave-nbg.png"
  },
  {
    name: "Return Visitor",
    username: "Canada",
    body: " /images/facebookpost.png",
    img: "/images/browsermozilla-nbg.png"
  },
  {
    name: "New Visitor",
    username: "Mexico",
    body: " /images/googlediscover.png",
    img: "/images/browserchrome-nbg.png"
  },
  {
    name: "Logged-In Visitor",
    username: "Australia",
    body: " /images/newsletter.png",
    img: "/images/browsersafari-nbg.png"
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({img, name, username, body}: {img: string; name: string; username: string; body: string}) => {
  return (
    <figure className={cn("relative w-66 h-14 flex items-center justify-bewtween cursor-pointer overflow-hidden bg-accent/10 rounded-full p-3")}>
      <div className="flex items-center gap-3">
        <img className="w-14 h-14 rounded-full object-fill " alt="browser logo" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xs font-bold text-left w-auto px-2">{name}</figcaption>
          <p className="text-xs text-left font-base px-2 w-auto">{username}</p>
        </div>
      </div>
      <img className="text-xs font-semibold  w-8 pl-2" alt="source traffic" src={body} width={10} height={10} />
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[210px] w-full mb-4 flex-col items-center justify-center overflow-hidden  bg-background/10 border-border border-b">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-muted/20 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-foreground/5 "></div>
      <div className="pb-4"></div>
    </div>
  )
}
