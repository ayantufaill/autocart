import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/core/HeaderSection/Header";
import HeroSection from "@/components/core/HeroSection/HeroSection";
import AboutUs from "@/components/core/AboutUs/AboutUs";
import AutoCartPage from "@/components/core/Choose/Choose";
import ChooseCategory from "@/components/core/ChooseCategory/ChooseCategory";
import AppWork from "@/components/core/ChooseCategory/AppWork/AppWork";
import AutoCartScreen from "@/components/core/ChooseCategory/AppWork/AppWork";
import FAQSection from "@/components/core/Questions/Questions";
import Footer from "@/components/core/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <AutoCartPage />
      <ChooseCategory />
      <AutoCartScreen />
      <FAQSection />
      <Footer />
    </>
  );
}
