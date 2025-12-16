import Signup from "@/components/Signup";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  animateHeroText,
  animateSlideUp,
  addParallaxEffect,
  observeScrollAnimation,
  addHoverGlow,
} from "@/lib/animations";
import { Calendar, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function SignupPage() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroCTARef = useRef<HTMLDivElement>(null);
  const heroBackgroundRef = useRef<HTMLDivElement>(null);
  const ctaJoinRef = useRef<HTMLAnchorElement>(null);
  const ctaEventsRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (heroTitleRef.current) animateHeroText(heroTitleRef.current);
    if (heroSubRef.current) animateSlideUp(heroSubRef.current, 500);
    if (heroCTARef.current) animateSlideUp(heroCTARef.current, 800);

    const removeParallax = addParallaxEffect(heroBackgroundRef.current, 0.3);

    if (ctaJoinRef.current) addHoverGlow(ctaJoinRef.current);
    if (ctaEventsRef.current) addHoverGlow(ctaEventsRef.current);

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
      <section className="relative w-full min-h-screen bg-gradient-to-br from-secondary via-secondary to-black">
        <div
          ref={heroBackgroundRef}
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/client/photos/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 grid md:grid-cols-2 items-center min-h-screen gap-8 p-4 sm:p-6 lg:p-8">
          {/* Hero Content */}
          <div className="text-center md:text-left">
            <h1
              ref={heroTitleRef}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Resonance
            </h1>
            <p
              ref={heroSubRef}
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto md:mx-0"
            >
              Experience the heartbeat of creativity at the University of
              Sunderland. Join a vibrant community of musicians, artists, and
              music enthusiasts.
            </p>
            <div
              ref={heroCTARef}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
          {/* Signup Form */}
          <div className="flex items-center justify-center">
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 w-full max-w-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">
                  Create an Account
                </CardTitle>
                <CardDescription>
                  Join the society, get access to events & more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Signup />
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <p className="text-sm">Already have an account?</p>
                <Button variant="outline" size="default" className="w-full">
                  Log In
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
