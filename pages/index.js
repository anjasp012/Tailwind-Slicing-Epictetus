import { useState } from "react";
import FeaturedNews from "../components/FeaturedNews";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsSection from "../components/NewsSection";

export default function Home() {

  return (
    <>
      <Navbar />
      <FeaturedNews />
      <NewsSection />
      <Footer />
    </>
  );
}
