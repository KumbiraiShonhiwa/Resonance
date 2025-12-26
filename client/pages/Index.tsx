import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  animateHeroText,
  animateSlideUp,
  addParallaxEffect,
  observeScrollAnimation,
  addHoverGlow,
} from "@/lib/animations";
import {
  Music,
  Calendar,
  Image as ImageIcon,
  Users,
  Sparkles,
} from "lucide-react";

export default function Index() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroCTARef = useRef<HTMLDivElement>(null);
  const heroBackgroundRef = useRef<HTMLDivElement>(null);
  const ctaJoinRef = useRef<HTMLAnchorElement>(null);
  const ctaEventsRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Hero title animation
    animateHeroText(heroTitleRef.current);

    // Hero subtitle animation
    animateSlideUp(heroSubRef.current, 500);

    // Hero CTA buttons animation
    animateSlideUp(heroCTARef.current, 800);

    // Parallax effect on hero background
    const removeParallax = addParallaxEffect(heroBackgroundRef.current, 0.3);

    // Add glow effect to buttons
    addHoverGlow(ctaJoinRef.current);
    addHoverGlow(ctaEventsRef.current);

    // Animate sections on scroll
    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => {
      observeScrollAnimation(section as HTMLElement);
    });

    return () => {
      if (removeParallax) removeParallax();
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-br from-secondary via-secondary to-black flex items-center justify-center">
        {/* Animated Background */}
        <div
          ref={heroBackgroundRef}
          className="absolute inset-0 z-0 opacity-30 px-0"
        >
          <img src="\photos\background.jpg"></img>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container max-w-5xl mx-auto px-4 text-center py-20">
          <h1
            ref={heroTitleRef}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Resonance
          </h1>

          <p
            ref={heroSubRef}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Experience the heartbeat of creativity at the University of
            Sunderland. Join a vibrant community of musicians, artists, and
            music enthusiasts.
          </p>

          {/* CTA Buttons */}
          <div
            ref={heroCTARef}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              ref={ctaJoinRef}
              to="/contact"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Join Us
            </Link>
            <Link
              ref={ctaEventsRef}
              to="/events"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 hover:shadow-xl transform hover:scale-105 border border-white/20 inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              View Events
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="scroll-animate py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
                About Resonance
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Resonance is the beating heart of musical creativity at the
                University of Sunderland. We bring together talented musicians,
                passionate listeners, and creative minds to celebrate the power
                of music.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                From intimate acoustics to electrifying performances, we create
                spaces where music connects people and transforms communities.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <span>→</span>
              </Link>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden flex items-center justify-center">
              <img src="\photos\logo.jpg"></img>
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="scroll-animate py-20 sm:py-28 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary text-center mb-16">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Events & Performances",
                description:
                  "Regular concerts, jam sessions, and collaborative performances throughout the year.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "Connect with fellow musicians and music lovers in a supportive, creative environment.",
              },
              {
                icon: ImageIcon,
                title: "Gallery",
                description:
                  "Explore memories from past events and showcase the vibrant moments we've created.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-200 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="scroll-animate py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">
              Upcoming Events
            </h2>
            <Link
              to="/events"
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                date: "March 15",
                title: "Spring Concert Series",
                location: "Main Hall",
                category: "Concert",
              },
              {
                date: "March 22",
                title: "Acoustic Jam Session",
                location: "Student Hub",
                category: "Jam Session",
              },
              {
                date: "April 5",
                title: "Electronic Music Showcase",
                location: "Performance Space",
                category: "Showcase",
              },
              {
                date: "April 12",
                title: "Collaborative Workshop",
                location: "Music Studio",
                category: "Workshop",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-primary font-semibold text-sm mb-2">
                      {event.date}
                    </p>
                    <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {event.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="scroll-animate py-20 sm:py-28 bg-gradient-to-r from-secondary to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Join the Resonance?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're an experienced musician or just passionate about
            music, there's a place for you in our community.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Get Involved Today
          </Link>
        </div>
      </section>
    </Layout>
  );
}
