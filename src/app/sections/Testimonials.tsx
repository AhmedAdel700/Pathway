"use client";
import image1 from "@/app/assets/Ellipse 1.svg";
import image2 from "@/app/assets/Ellipse 1 (1).svg";
import image3 from "@/app/assets/Ellipse 1 (2).svg";
import image4 from "@/app/assets/Ellipse 1 (3).svg";
import image5 from "@/app/assets/Ellipse 1 (4).svg";
import image6 from "@/app/assets/Ellipse 1 (5).svg";
import image7 from "@/app/assets/Ellipse 1 (6).svg";
import image8 from "@/app/assets/Ellipse 1 (7).svg";
import image9 from "@/app/assets/Ellipse 1 (8).svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    id: 1,
    text: "This product completely changed the way I work. It's fast, reliable, and incredibly easy to use!",
    imageSrc: image8,
    name: "John Doe",
    userName: "@johndoe",
  },
  {
    id: 2,
    text: "I've tried many tools before, but nothing comes close to the quality and support this offers.",
    imageSrc: image2,
    name: "Jane Smith",
    userName: "@janesmith",
  },
  {
    id: 3,
    text: "Exceptional experience from start to finish. Highly recommended!",
    imageSrc: image3,
    name: "Michael Johnson",
    userName: "@mjohnson",
  },
  {
    id: 4,
    text: "Everything works smoothly, and the team behind it is very responsive.",
    imageSrc: image9,
    name: "Emily Davis",
    userName: "@emilydavis",
  },
  {
    id: 5,
    text: "The UI is intuitive and the features are exactly what I needed.",
    imageSrc: image5,
    name: "Robert Wilson",
    userName: "@robertwilson",
  },
  {
    id: 6,
    text: "I noticed improvements in productivity immediately after switching.",
    imageSrc: image6,
    name: "Olivia Martinez",
    userName: "@oliviamartinez",
  },
  {
    id: 7,
    text: "Clean design, powerful functionality, and a support team that actually listens.",
    imageSrc: image7,
    name: "David Brown",
    userName: "@davidbrown",
  },
  {
    id: 8,
    text: "One of the best investments I've made in a long time!",
    imageSrc: image1,
    name: "Sophia Taylor",
    userName: "@sophiataylor",
  },
  {
    id: 9,
    text: "Five stars. I tell everyone I know about it. Totally worth it.",
    imageSrc: image4,
    name: "James Anderson",
    userName: "@jamesanderson",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdtColumn = testimonials.slice(6, 9);

const TestimonialColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
  >
    {props.testimonials.map(({ id, text, imageSrc, name, userName }) => (
      <div key={id} className="card">
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image
            src={imageSrc}
            alt={name}
            className="h-10 w-10 rounded-full"
            width={40}
            height={40}
          />

          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="tracking-tight leading-5">{userName}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="bg-white overflow-x-clip">
      <div className="container mx-auto px-4 flex flex-col items-center gap-5 md:gap-8 text-center">
        <div className="tag">Testimonials</div>
        <h2 className="section-title">What our users say</h2>
        <p className="section-desc">
          From Intuitive Design To Powerful Features, Our App Has Become An
          Essential Tool For Users Around The World.
        </p>

        <div className="flex justify-center gap-6">
          <TestimonialColumn testimonials={firstColumn} />
          <TestimonialColumn
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialColumn
            testimonials={thirdtColumn}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
}
