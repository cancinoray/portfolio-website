import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import LatestBlog from "@/components/LatestBlog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getLatestBlogPosts } from "@/lib/blog";

export default function Home() {
  const latestPosts = getLatestBlogPosts(3);
  return (
    <main className="relative">
      <div id="top" />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <LatestBlog posts={latestPosts} />
      <Contact />
      <Footer />
    </main>
  );
}

