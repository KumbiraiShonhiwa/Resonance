import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { observeScrollAnimation } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => {
      observeScrollAnimation(section as HTMLElement);
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="scroll-animate py-16 sm:py-24 bg-gradient-to-br from-secondary to-black text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "resonance@sunderland.ac.uk",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "University of Sunderland, Sunderland, UK",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+44 (0) 191 515 2000",
              },
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="scroll-animate bg-gray-50 rounded-xl p-8 text-center border border-gray-200 hover:border-primary transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="scroll-animate">
              <h2 className="text-3xl font-display font-bold text-secondary mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg"
                >
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                </button>
              </form>
            </div>

            {/* Social & Info */}
            <div className="scroll-animate">
              <h2 className="text-3xl font-display font-bold text-secondary mb-8">
                Connect With Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Follow us on social media to stay updated with our latest
                events, announcements, and behind-the-scenes content.
              </p>

              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="font-semibold text-secondary mb-4">
                    Our Social Media
                  </h3>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: Instagram,
                        href: "https://instagram.com",
                        label: "Instagram",
                      },
                      {
                        icon: Facebook,
                        href: "https://facebook.com",
                        label: "Facebook",
                      },
                      {
                        icon: Linkedin,
                        href: "https://linkedin.com",
                        label: "LinkedIn",
                      },
                    ].map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-100 hover:bg-primary text-secondary hover:text-white rounded-lg flex items-center justify-center transition-all"
                          aria-label={social.label}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-secondary mb-4">
                    Office Hours
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <strong>Monday - Friday:</strong> 1:00 PM - 5:00 PM
                    </li>
                    <li>
                      <strong>Saturday:</strong> 11:00 AM - 3:00 PM
                    </li>
                    <li>
                      <strong>Sunday:</strong> Closed
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-secondary mb-3">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-primary hover:text-primary/80">
                  <li>
                    <a href="/events" className="hover:underline">
                      View Upcoming Events
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" className="hover:underline">
                      Browse Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:underline">
                      Learn About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
