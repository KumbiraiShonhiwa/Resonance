import Layout from "./Layout";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function MediaGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Event 1",
      category: "Concert",
      imgURL: "client/photos/logo.jpg",
    },
    {
      id: 2,
      title: "Event 2",
      category: "Jam Session",
      imgURL: "client/photos/logo.jpg",
    },
    {
      id: 3,
      title: "Event 3",
      category: "Workshop",
      imgURL: "client/photos/logo.jpg",
    },
    {
      id: 4,
      title: "Event 4",
      category: "Performance",
      imgURL: "client/photos/logo.jpg",
    },
  ];

  return (
    <section>
      <Carousel className="w-full max-w-5xl mx-auto px-4">
        <CarouselContent>
          {galleryItems.map((item) => (
            <CarouselItem key={item.id} className="items-center">
              <div>
                <Card className="bg-primary rounded-xl text-center ">
                  <CardHeader className="text-center text-seconday">
                    <h1>{item.title}</h1>
                  </CardHeader>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img className="rounded-xl" src={item.imgURL} />
                  </CardContent>
                  <CardFooter className="text-center text-secondary">
                    {item.category}
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
