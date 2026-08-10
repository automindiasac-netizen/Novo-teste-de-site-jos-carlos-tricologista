import { About } from "@/components/sections/about";
import { BeforeAfter } from "@/components/sections/before-after";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { Navbar } from "@/components/sections/navbar";
import { Procedures } from "@/components/sections/procedures";
import { WhatsappFloatButton } from "@/components/sections/whatsapp-float-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Procedures />
        <About />
        <Location />
      </main>
      <Footer />
      <WhatsappFloatButton />
    </>
  );
}
