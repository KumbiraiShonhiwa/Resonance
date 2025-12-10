import { useEffect } from "react";
import Layout from "@/components/Layout";
import { observeScrollAnimation } from "@/lib/animations";


export default function Merch() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => {
      observeScrollAnimation(section as HTMLElement);
    });
  }, []);
  return (
    <Layout>
        <section></section>
    </Layout>
)

}


