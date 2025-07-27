"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import SectionHeader from "@/components/section-header";

const DummyContent = ({ description, duration, mode }: { description: string; duration: string; mode: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-4">
        {description}
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm md:text-base">
        <div className="font-semibold text-neutral-700 dark:text-neutral-200">Duration: <span className="font-normal text-neutral-600 dark:text-neutral-300">{duration}</span></div>
        <div className="font-semibold text-neutral-700 dark:text-neutral-200">Mode: <span className="font-normal text-neutral-600 dark:text-neutral-300">{mode}</span></div>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Business",
    title: "MBA (Master of Business Administration)",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop", // new business/leadership image
    content: <DummyContent description="Advanced business management degree for career growth and leadership positions in the corporate world." duration="2 Years" mode="Online/Hybrid" />,
  },
  {
    category: "Business",
    title: "BBA (Bachelor of Business Administration)",
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent description="Comprehensive business management program covering finance, marketing, operations, and leadership skills." duration="3 Years" mode="Online/Hybrid" />,
  },
  {
    category: "Science & Technology",
    title: "MS (Master of Science)",
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent description="Advanced science programs for specialization in technology, data analytics, and research fields." duration="2 Years" mode="Online/Hybrid" />,
  },
  {
    category: "Science & Technology",
    title: "BS (Bachelor of Science)",
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent description="Science degree programs in various specializations including IT, Data Science, and Computer Science." duration="3 Years" mode="Online/Hybrid" />,
  },
  {
    category: "Computer Applications",
    title: "BCA (Bachelor of Computer Applications)",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent description="Undergraduate program focusing on computer applications, programming, and software development." duration="3 Years" mode="Online/Hybrid" />,
  },
  {
    category: "Certifications",
    title: "Professional Certifications",
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent description="Industry-recognized certifications in Digital Marketing, Data Analytics, Project Management, and more." duration="6-12 Months" mode="Online" />,
  },
];

export const Pricing = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        <SectionHeader
          title="Choose Your Course"
          description="Explore our comprehensive range of undergraduate, postgraduate, and professional programs designed for modern career success."
        />
        <Carousel items={cards} />
      </div>
    </section>
  );
};
