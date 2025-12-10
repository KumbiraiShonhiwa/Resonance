import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Image as ImageIcon } from "lucide-react";
import { observeScrollAnimation } from "@/lib/animations";

export default function Gallery() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => {
      observeScrollAnimation(section as HTMLElement);
    });
  }, []);

  const galleryItems = Array.from({ length: 12 }, (_, idx) => ({
    id: idx + 1,
    title: `Event ${idx + 1}`,
    category: ["Concert", "Jam Session", "Workshop", "Performance"][
      idx % 4
    ],
  }));

  return (
    <Layout>
      {/* Header */}
      <section className="scroll-animate py-16 sm:py-24 bg-gradient-to-br from-secondary to-black text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore memories from our past events and performances
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="scroll-animate group cursor-pointer relative overflow-hidden rounded-lg aspect-square bg-gray-200 hover:shadow-xl transition-all duration-200"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-primary opacity-30" />
                </div>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-end justify-end p-4">
                  <span className="text-white text-xs font-semibold bg-primary px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-secondary mb-4">
            More to Come
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Follow our social media for the latest photos and videos from our
            events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
