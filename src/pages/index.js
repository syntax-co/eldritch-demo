import Image from "next/image";
import { Inter } from "next/font/google";
import Topbar from "./components/top-bar";
import Section1 from "./sections/section-1";
import Section2 from "./sections/section-2";
import Section3 from "./sections/section-3";
import Footer from "./sections/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen"
    >
      <Topbar />
      
      <Section1 />

      <Section2 />

      <Section3 />

      <Footer />

    </div>
  );
}
