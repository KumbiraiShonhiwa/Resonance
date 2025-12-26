import { useEffect } from "react";
import Layout from "@/components/Layout";
import { observeScrollAnimation } from "@/lib/animations";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import MediaGallery from "@/components/MediaGallery";

export default function Merch() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => {
      observeScrollAnimation(section as HTMLElement);
    });
  }, []);

  const merchItems = [
    {
      id: 0,
      price: "$10.00",
      name: "Hoodies",
      imgURl: "/photos/logo.jpg",
    },
    {
      id: 1,
      price: "$10.00",
      name: "Hoodies",
      imgURl: "/photos/logo.jpg",
    },
    {
      id: 2,
      price: "$10.00",
      name: "Hoodies",
      imgURl: "/photos/logo.jpg",
    },
    {
      id: 3,
      price: "$10.00",
      name: "Hoodies",
      imgURl: "/photos/logo.jpg",
    },
    {
      id: 4,
      price: "$10.00",
      name: "Hoodies",
      imgURl: "/photos/logo.jpg",
    },
    {
      id: 5,
      price: "$10.00",
      name: "Hoodies",
      imgURl: "/photos/logo.jpg",
    },
  ];
  return (
    <Layout>
      {/* Header */}
      <section className="scroll-animate py-16 sm:py-24 bg-gradient-to-br from-secondary to-black text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Merchandise
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore and search for your pitch perfect merch
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {merchItems.map((item) => (
              <Card className="bg-grey-50 rounded-xl text-center hover:shadow-lg hover:border-primary border-gray-200 transition-all duration-200">
                <CardHeader className="bg-gradient-to-br from primary/20 to-primary/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src={item.imgURl}></img>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg font-semibold text-primary mb-1">
                    {item.name}
                  </CardDescription>
                </CardContent>
                <CardFooter className="text-gray-600 text-sm">
                  {item.price}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        {/* Model Section */}
        <MediaGallery />
      </section>
    </Layout>
  );
}
