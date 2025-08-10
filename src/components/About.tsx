"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://website-2025-bucket.s3.af-south-1.amazonaws.com/steven-carte.jpeg",
    "https://website-2025-bucket.s3.af-south-1.amazonaws.com/aws-mzansi.jpg",
    "https://website-2025-bucket.s3.af-south-1.amazonaws.com/anime-characters.jpg",
    "https://website-2025-bucket.s3.af-south-1.amazonaws.com/carte.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey, I&apos;m Steven Selolo - your friendly neighborhood Cloud Engineer and proud AWS Golden Jacket holder with 13 AWS certs.
        </Paragraph>
        <Paragraph className="mt-4">
          Think of me as a digital locksmith, except instead of jingling keys, I juggle cloud puzzles and unlock elegant, real-world solutions with a bit more code and a lot less rattling.
        </Paragraph>
        <Paragraph className="mt-4">
          I&apos;m deeply involved in the tech community, always eager to learn, teach, and share a good laugh.
        </Paragraph>
        <Paragraph className="mt-4">
          Whether mentoring aspiring engineers or debating which AWS service is the most &quot;underrated&quot; (spoiler: it&apos;s probably Lambda), I bring energy, curiosity, and a dash of humor to every conversation.
        </Paragraph>
        <Paragraph className="mt-4">
          When I step away from the cloud (yes, that mysterious place with fresh air and sunlight), you&apos;ll find me geeking out over the latest tech trends, contributing to open-source projects, or convincing friends that &quot;serverless&quot; isn&apos;t just magic - although, honestly, sometimes it feels like it.
        </Paragraph>
        <Paragraph className="mt-4">
          A dragon slayer ⚔️ with a keen interest in AWS, Security, and GenAI, I&apos;m always ready to tackle new challenges and keep pushing the limits.
        </Paragraph>
        <Paragraph className="mt-4">
          Learning is my lifelong adventure - as Monkey D. Luffy from <em>One Piece</em> said,
        </Paragraph>
        <Paragraph className="mt-4">
          &quot;If you don&apos;t take risks, you can&apos;t create a future.&quot;
        </Paragraph>
        <Paragraph className="mt-4">
          That spirit drives me to push boundaries, whether it&apos;s in cloud architecture, startups, or chasing the next big thing in tech.
        </Paragraph>
        <Paragraph className="mt-4">
          If you want to chat cloud, startups, or swap anime recommendations, let&apos;s connect - because the best ideas happen when curious minds collide.
        </Paragraph>
      </div>
    </div>
  );
}
