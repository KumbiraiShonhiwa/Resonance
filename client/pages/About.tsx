import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Users, Music, Heart, Zap, Expand } from "lucide-react";
import { observeScrollAnimation } from "@/lib/animations";
import Member_Card from "@/components/Member_Card";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export default function About() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => {
      observeScrollAnimation(section as HTMLElement);
    });
  }, []);

  const teamMembers = [
    {
      name: "Xandra Ang",
      role: "President",
      about: "",
      genre: "Rock Music",
      photo: "/photos/xandra.jpg",
    },
    {
      name: "Natasya Prasetyo",
      role: "Vice President",
      about: "",
      genre: "R&B Music",
      photo: "/photos/natasya.jpg",
    },
    {
      name: "Zahra Haider ",
      role: "Media and Branding Officer",
      about: "",
      genre: "K-Pop Music",
      photo: "/photos/zahra.jpg",
    },
    {
      name: "Mohaymin Iqbal",
      role: "Treasurer",
      about: "",
      genre: "Metal/Rock Music",
      photo: "/photos/mohaymin.jpg",
    },
    {
      name: "Kumbirai Shonhiwa",
      role: " Event Coordinator",
      about: "",
      genre: "Hip Hop & Indie Music",
      photo: "/photos/kumbirai.jpg",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="scroll-animate py-16 sm:py-24 bg-gradient-to-br from-secondary to-black text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Resonance was founded by a group of passionate students at the
            University of Sunderland who believed that music had the power to
            bring people together and transform communities.
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What started as informal jam sessions in the student hub has evolved
            into a thriving community, hosting a variety of concerts trips,
            workshops, and collaborative events throughout the academic year.
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Today, Resonance stands as a testament to the creativity and
            dedication of our members, celebrating the diverse musical talents
            within our university and beyond.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="scroll-animate py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-secondary mb-8 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: "Celebrate Music",
                description:
                  "To celebrate all forms of music and provide a platform for artists to shine",
              },
              {
                icon: Users,
                title: "Build Community",
                description:
                  "To foster meaningful connections between musicians and music enthusiasts",
              },
              {
                icon: Heart,
                title: "Inspire Creativity",
                description:
                  "To inspire and nurture the creative potential in every member",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Committee */}
      <section className="scroll-animate py-16 sm:py-24 bg-gradient-to-br from-secondary to-black text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-16 text-center">
            Meet the Committee
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
            {teamMembers.map((member, idx) => (
              <Member_Card
                key={idx}
                name={member.name}
                role={member.role}
                genre={member.genre}
                photo={member.photo}
                about={member.about}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="scroll-animate py-20 sm:py-28 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Music,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from our performances to our community support",
              },
              {
                icon: Users,
                title: "Inclusivity",
                description:
                  "Everyone is welcome. Regardless of skill level or background, there's a place for you",
              },
              {
                icon: Heart,
                title: "Passion",
                description:
                  "We are driven by our love for music and our commitment to our community",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "We embrace new ideas and continuously evolve to serve our members better",
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-200"
                >
                  <CardContent className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardDescription>
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
