import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Steven</Heading>

      <Paragraph className="max-w-xl mt-4">
        A dragon slayer ⚔️ interested in <Highlight>AWS</Highlight>, <Highlight>Security</Highlight>, and <Highlight>GenAI</Highlight>. Passionate about startups, teamwork, and <Highlight>continuous learning</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Skilled in cloud architecture on <Highlight>AWS</Highlight> with 13 certifications and a holder of the prestigious <Highlight>AWS Golden Jacket</Highlight>.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
    </Container>
  );
}
