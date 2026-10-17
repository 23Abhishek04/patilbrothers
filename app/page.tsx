import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Workprocess from "@/components/Workprocess";
import Welcome from "@/components/Welcome";

const page = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Workprocess />
      <Services />
      <Contact />
    </div>
  )
}

export default page