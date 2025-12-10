import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Home, Music } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="flex-1 flex items-center justify-center py-20 px-4 bg-gray-50">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Music className="w-12 h-12 text-primary opacity-50" />
          </div>
          <h1 className="text-6xl font-display font-bold text-secondary mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back to the music!
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
