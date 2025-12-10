import NavBar from "./NavBar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 w-full pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
