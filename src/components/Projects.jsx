import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div id="projects-head" className="mb-6 flex items-end justify-between">
        <h2 id="projects-title" className="text-2xl font-semibold text-gray-900">Projects</h2>
        <p id="projects-note" className="text-sm text-gray-500">/* add more by duplicating a ProjectCard */</p>
      </div>

      <div id="projects-grid" className="grid grid-cols-1 gap-6 items-start">
        <ProjectCard
          idPrefix="brainstorming"
          title="Brainstorming Dashboard"
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
          description="Boards, share links, JWT auth, Go API, MySQL, S3 thumbnails, AWS deploy."
          tech="Go, MySQL, React, Tailwind, AWS (EC2, S3), Docker"
          repoUrl="https://github.com/your/repo1"
          demoUrl="https://yourapp.example.com"
          loomUrl="https://www.loom.com/share/your-video-1"
        />
        <ProjectCard
          idPrefix="rubiks"
          title="Screen-reader micro-SaaS"
          imageSrc="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
          description="Browser extension that reads pages aloud with click-to-read and DOM traversal."
          tech="Browser APIs, Web Speech, MV3, React, Tailwind, Go backend"
          repoUrl="https://github.com/your/repo2"
          demoUrl="https://yourapp2.example.com"
          loomUrl="https://www.loom.com/share/your-video-2"
        />
      </div>
    </section>
  );
}
