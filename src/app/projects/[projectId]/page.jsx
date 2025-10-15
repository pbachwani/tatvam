import { projects } from "@/app/constants/data";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Export this function from your dynamic route file!
export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetail({ params }) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <div>Project not found.</div>;

  return (
    <>
      <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-8">
        {/* Top content: text, illustration/sketch, and main image */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between py-12">
          {/* Left Column: Text & Illustration */}
          <div className="flex-1 md:pr-12 flex flex-col justify-start items-start">
            <h1 className="text-xl md:text-2xl uppercase mb-5 [font-family:var(--font-andale)] tracking-tighter">
              {project.name}
            </h1>
            <div className="text-[15px] mb-4 text-neutral-700 leading-relaxed [font-family:var(--font-andale)] tracking-wide">
              {project.description.intro}
            </div>
          </div>
          {/* Right Column: Main Image iwth illustration */}
          <div className="flex-1 flex justify-center items-start">
            <div className="relative w-[420px] h-auto bg-blue-300">
              <img
                src={project.images.main}
                alt={project.name}
                className="object-contain rounded-md"
              />
              <img
                src={project.images.illustration}
                alt={`${project.name} illustration`}
                className="object-cover pointer-events-none absolute hidden md:block md:top-50 md:right-60"
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        {project.images.carousel && project.images.carousel.length > 0 && (
          <div className="w-full min-w-screen my-12 relative">
            <div className="relative w-full">
              {/* Custom carousel logic goes here (replace with your carousel solution) */}
              <div className="w-full h-screen overflow-hidden">
                <img
                  src={project.images.carousel[1]}
                  alt={`Project ${project.name} slide`}
                  className="object-cover w-full h-full"
                />
                {/* Replace this sample image with a proper carousel if needed */}
              </div>
              <div className="absolute top-0 w-full h-full flex justify-between items-center ">
                <ChevronLeft className="size-20 font-extralight" />

                <ChevronRight className="size-20 font-extralight" />
              </div>
            </div>
          </div>
        )}

        {/* main description for project */}
        <div className="w-full max-w-7xl my-24">
          <h1 className="[font-family:var(--font-andale)] text-4xl">
            {project.name}
          </h1>
          <div className="text-[15px] mb-4 text-neutral-700 leading-relaxed [font-family:var(--font-andale)] tracking-wide">
            {project.description.description}
          </div>
        </div>

        {/* Extras Images */}
        {project.images.extras && project.images.extras.length > 0 && (
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {project.images.extras.map((extra, i) => (
              <div key={i} className="flex flex-col items-center justify-start">
                <div className="relative w-full h-auto max-h-[80vh]">
                  <img
                    src={extra.image}
                    alt={extra.heading}
                    className="object-contain rounded-md w-full h-full"
                  />
                </div>
                <div className="[font-family:var(--font-andale)] text-base mb-2">
                  {extra.heading}
                </div>
                <div className="text-left text-gray-700 text-[15px]">
                  {extra.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
