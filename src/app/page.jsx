import ContactUs from "@/components/contactUs/ContactUs";
import Classes from "@/components/classes/Classes";
import FreeClasses from "@/components/classes/FreeClasses";
import Faq from "@/components/faq/Faq";
import Header from "@/components/header/Header";
import Information from "@/components/informations/Information";
import Value from "@/components/value/Value";

export const metadata = {
  applicationName: "Koding kids Indonesia",
  referrer: "origin-when-cross-origin",
  keywords: ["Coding Kids", "Online Course", "Coding"],
  title: "Koding Kids | We make kids love coding",
  description: "We don't teach coding, we make kids love coding.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Information />
      <Classes />
      <Value />
      <Faq />
      <FreeClasses />
      <ContactUs />
    </main>
  );
}
