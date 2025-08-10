import carte1 from "public/images/carte-1.jpg";
import carte2 from "public/images/carte-2.jpg";

import cookoutStories1 from "public/images/cookout-stories-1.jpg";
import cookoutStories2 from "public/images/cookout-stories-2.jpg";

import tutoconsulting1 from "public/images/tutoconsulting-1.jpg";
import tutoconsulting2 from "public/images/tutoconsulting-2.jpg";

export const products = [
  {
    href: "https://ourcarte.com",
    title: "Carte",
    description:
      "Helping restaurants simplify daily operations so they can focus on delivering great food and memorable experiences to their customers.",
    thumbnail: carte1,
    images: [carte1, carte2],
    stack: ["CustomerFirstTech", "RestaurantSuccess"],
    slug: "carte",
    content: (
      <div>
        <p>
          Our restaurant software startup is focused on delivering smart, user-friendly solutions designed to streamline restaurant operations. From managing reservations and orders to inventory tracking and staff scheduling, our software empowers restaurants to run more efficiently and provide better customer experiences.{" "}
        </p>
        <p>
          We believe technology should simplify the daily challenges faced by restaurant owners and staff, allowing them to focus more on what they do best—serving great food and creating memorable moments. Our cloud-based platform ensures scalability, security, and easy access anytime, anywhere.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://thecookout.co.za",
    title: "Cookout",
    description:
      "Bringing food lovers together through unique and engaging cooking events that create lasting memories and connections.",
    thumbnail: cookoutStories1,
    images: [cookoutStories1, cookoutStories2],
    stack: ["FoodExperience", "CommunityCooking"],
    slug: "cookout",
    content: (
      <div>
        <p>
          The cooking events startup brings food lovers together by organizing unique culinary experiences that celebrate creativity and community. From hands-on workshops to themed cooking parties, we offer an engaging way for people to connect over their shared passion for food.{" "}
        </p>
        <p>
          We strive to make every event memorable by partnering with talented chefs and local suppliers, ensuring high-quality ingredients and authentic experiences. Our platform handles event management seamlessly, helping organizers focus on crafting unforgettable moments.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tutoconsulting.co.za",
    title: "Tutoconsulting",
    description:
      "Partnering with businesses to deliver tailored software and cloud solutions that drive growth, efficiency, and success.",
    thumbnail: tutoconsulting1,
    images: [tutoconsulting1, tutoconsulting2],
    stack: ["BusinessGrowth", "TailoredTechSolutions"],
    slug: "tutoconsulting",
    content: (
      <div>
        <p>
          Our tech consulting company specializes in building custom software solutions tailored to the unique needs of businesses. Leveraging cloud technologies and modern development practices, we help companies innovate, scale, and optimize their operations.{" "}
        </p>
        <p>
          Whether it's migrating workloads to AWS, designing scalable architectures, or developing bespoke applications, our team combines technical expertise with strategic insight to deliver impactful results. We partner closely with clients to ensure solutions align with their goals and drive lasting value.
        </p>{" "}
      </div>
    ),
  },
];
