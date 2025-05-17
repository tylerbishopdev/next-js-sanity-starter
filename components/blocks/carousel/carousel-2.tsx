import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots} from "@/components/ui/carousel"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Card, CardContent} from "@/components/ui/card"
import {urlFor} from "@/sanity/lib/image"
import {StarRating} from "@/components/ui/star-rating"
import PortableTextRenderer from "@/components/portable-text-renderer"
import {PAGE_QUERYResult} from "@/sanity.types"

type Carousel2Props = Extract<NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number], {_type: "carousel-2"}>

export default function Carousel2({padding, colorVariant, testimonial}: Carousel2Props) {
  const color = stegaClean(colorVariant)

  return (
    <SectionContainer color={color} padding={padding} className="mx-auto px-8 lg:px-0">
      {testimonial && testimonial.length > 0 && (
        <Carousel>
          <CarouselContent>
            {testimonial.map((item) => (
              <CarouselItem key={item._id} className="md:basis-1/3">
                <Card className="h-full w-full">
                  <CardContent className="flex flex-col justify-between p-5 bg-bento lg:p-5 h-full">
                    <div>
                      <div className="flex items-center mb-2">
                        <Avatar className="w-10 h-10 mr-3">
                          {item.image && <AvatarImage src={urlFor(item.image).url()} alt={item.name ?? ""} />}
                          <AvatarFallback>{item.name?.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-diatype text-accent">{item.name}</h3>
                          <p className="text-sm font-mono font-bold text-muted-foreground">{item.title}</p>
                        </div>
                      </div>
                      <StarRating rating={item.rating ?? 0} />
                      {item.body && (
                        <section className="mt-2 line-clamp-4">
                          <PortableTextRenderer value={item.body} />
                        </section>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="outline" className="-left-3 md:-left-8 xl:-left-12 bg-muted/50 hidden md:flex" />
          <CarouselNext variant="outline" className="-right-3 md:-right-8 xl:-right-12 bg-muted/50 hidden md:flex" />
          <div className="w-full flex justify-center">
            <CarouselDots />
          </div>
        </Carousel>
      )}
    </SectionContainer>
  )
}
