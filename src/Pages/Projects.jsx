import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import Blender from "../components/Blender";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          In my projects, I endeavor to blend the finesse of frontend
          development with the captivating world of 3D art. Each endeavor is a
          testament to my passion for creating immersive and engaging digital
          experiences. From responsive web designs that seamlessly adapt to user
          interactions to visually stunning 3D compositions, I strive to push
          the boundaries of technology and design, aiming to captivate audiences
          and leave a lasting impression. Dive into this diverse collection of
          projects, each a unique fusion of technical prowess and artistic
          expression.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg">
              <img
                class="w-full"
                src={project.image}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{project.name}</div>
                <p class="text-gray-700 text-base">{project.description}</p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{project.hash1}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{project.hash2}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{project.hash3}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Blender />

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
