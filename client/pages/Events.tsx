import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Calendar, MapPin, Tag } from "lucide-react";
import { observeScrollAnimation } from "@/lib/animations";
import data from "./Events.json";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Events() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => {
      observeScrollAnimation(section as HTMLElement);
    });
  }, []);

  console.log(data);

  const events = [
    {
      date: "March 15, 2024",
      title: "Spring Concert Series",
      location: "Main Hall",
      category: "Concert",
      time: "7:00 PM",
      description:
        "Join us for an evening of classical and contemporary music.",
    },
    {
      date: "March 22, 2024",
      title: "Acoustic Jam Session",
      location: "Student Hub",
      category: "Jam Session",
      time: "6:00 PM",
      description: "Bring your instrument and jam with fellow musicians.",
    },
    {
      date: "April 5, 2024",
      title: "Electronic Music Showcase",
      location: "Performance Space",
      category: "Showcase",
      time: "8:00 PM",
      description: "Experience cutting-edge electronic music performances.",
    },
    {
      date: "April 12, 2024",
      title: "Collaborative Workshop",
      location: "Music Studio",
      category: "Workshop",
      time: "3:00 PM",
      description: "Learn music production and collaboration techniques.",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="scroll-animate py-16 sm:py-24 bg-gradient-to-br from-secondary to-black text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Events
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our upcoming concerts, jam sessions, and performances
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 bg-white border-b border-gray-200 z-40">
        <div className="container max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            <Button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              All Events
            </Button>
            <Button className="px-4 py-2 border border-gray-300 text-secondary rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Concerts
            </Button>
            <Button className="px-4 py-2 border border-gray-300 text-secondary rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Jam Sessions
            </Button>
            <Button className="px-4 py-2 border border-gray-300 text-secondary rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Workshops
            </Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, idx) => (
              <Card
                key={idx}
                className="scroll-animate bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-primary transition-all duration-200 group"
              >
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 h-32 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Calendar className="w-16 h-16 text-primary opacity-20 group-hover:opacity-30 transition-opacity" />
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-primary font-semibold text-sm mb-2">
                        {event.date}
                      </p>
                      <h3 className="text-2xl font-semibold text-secondary group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap ml-2">
                      {event.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{event.description}</p>

                  <div className="space-y-2 mb-6 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                  </div>
                  <CardFooter>
                    <Button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                      RSVP
                    </Button>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
