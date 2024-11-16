import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </>
  );
}
