import Layout from "./Layout";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";


export default function MediaGallery() {

    const galleryItems =[
        {
            id: 1,
            title: "Event 1",
            category: "Concert",
            imgURL: "client/photos/logo.jpg"
        },
        {
            id: 2,
            title: "Event 2",
            category: "Jam Session",
            imgURL: "client/photos/logo.jpg"
        },
        {
            id: 3,
            title: "Event 3",
            category: "Workshop",
            imgURL: "client/photos/logo.jpg"
        },
        {
            id: 4,
            title: "Event 4",
            category: "Performance",
            imgURL: "client/photos/logo.jpg"
        }
    ]

  return (
    <Layout>
      <section>
        <Carousel className="w-full max-w-5xl mx-auto px-4">
          <CarouselContent>
            {galleryItems.map((item) => (
              <CarouselItem key={item.id} className="items-center">
                <div>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={item.imgURL} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </Layout>
  );
}
