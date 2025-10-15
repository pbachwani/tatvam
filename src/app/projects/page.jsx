// app/projects/page.jsx

import Link from "next/link";
import Image from "next/image";
import { projects } from "../constants/data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="flex flex-col items-center group"
          >
            {/* Main Project Image */}
            <div className="w-auto h-auto max-h-[60vh] relative">
              <img
                src={project.images.main}
                alt={project.name}
                className="object-cover w-full h-full"
                // sizes="(max-width: 768px) 80vw, 320px"
              />
              <img
                src={project.images.illustration}
                alt={`${project.name} illustration`}
                className="object-cover w-full h-full absolute top-40 right-50 hidden md:block"
              />
            </div>
            {/* Illustration */}
            {/* {project.images.illustration && (
              <div className="w-[320px] h-[64px] mb-2 relative">
                <img
                  src={project.images.illustration}
                  alt={`${project.name} illustration`}
                  className="object-contain"
                />
              </div>
            )} */}
            {/* Project Name */}
            <span className="tracking-wider text-base uppercase [font-family:var(--font-andale)] font-bold mt-2">
              {project.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
