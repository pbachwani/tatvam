import { projects } from "@/app/constants/data";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FramerCarousel from "@/app/components/FramerCarousel";

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
      <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-8 overflow-x-clip">
        {/* Top content: text, illustration/sketch, and main image */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between py-12">
          {/* Left Column: Text */}
          <div className="flex-1 md:pr-12 flex flex-col justify-start items-start">
            <h1 className="text-xl md:text-2xl uppercase mb-5 [font-family:var(--font-andale)] tracking-tighter">
              {project.name}
            </h1>
            <div className="text-[15px] mb-4 text-neutral-700 leading-relaxed [font-family:var(--font-andale)] tracking-tight">
              {project.description.intro}
            </div>
          </div>
          {/* Right Column: Main Image with illustration */}
          <div className="flex-1 flex justify-center items-start">
            <div className="relative w-[420px] h-auto">
              <img
                src={project.images.main}
                alt={project.name}
                className="object-contain"
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
          <FramerCarousel project={project} />
        )}

        {/* main description for project */}
        {/* <div className="w-full max-w-7xl my-24">
          <h1 className="[font-family:var(--font-andale)] text-4xl tracking-tight uppercase">
            {project.name}
          </h1>
          <div className="text-[15px] text-neutral-700 leading-relaxed [font-family:var(--font-andale)] tracking-wide mt-4 ">
            {project.description.description}
          </div>
        </div> */}

        {/* Extras Images */}
        {project.images.extras && project.images.extras.length > 0 && (
          <div className="w-full min-h-screen flex flex-col justify-center items-center h-full max-w-7xl">
            {project.images.extras.map((extra, i) => (
              <div
                key={i}
                className={`w-full max-w-7xl flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } justify-between py-12`}
              >
                {/* right Column: Text */}
                <div className="flex-1 flex flex-col justify-start items-start">
                  {/* <h1 className="text-xl md:text-2xl uppercase mb-5 [font-family:var(--font-andale)] tracking-tighter">
                    {extra.heading}
                  </h1> */}
                  <div className="text-[15px] mb-4 text-neutral-700 leading-relaxed [font-family:var(--font-andale)] tracking-wide">
                    {extra.text}
                  </div>
                </div>

                {/* left Column: Main Image with illustration */}
                <div
                  className={`flex-1 flex ${
                    i % 2 === 0 ? "justify-end" : "justify-start"
                  } items-start`}
                >
                  <div className="relative w-[420px] h-auto ">
                    <img
                      src={extra.image}
                      alt={project.name}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
