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
            Register on the Student Union Site
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Become a member and enjoy the perks
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12"></div>
          <img src="Register_2.jpg">
          </img>
        </div>
      </section>
    </Layout>
  );
}
