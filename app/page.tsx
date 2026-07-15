import ProfileCard from "@/app/components/ProfileCard";
import SocialGrid from "@/app/components/SocialGrid";
import SupportCard from "@/app/components/SupportCard";
import RepoCard from "@/app/components/RepoCard";
import ProjectCard from "@/app/components/ProjectCard";
import ContributionCard from "@/app/components/ContributionCard";
import Footer from "@/app/components/Footer";

import { projects } from "@/app/data/projects";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen p-4 md:p-10 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-4">

        <ProfileCard />

        <SocialGrid />

        <SupportCard />

        <RepoCard />

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}

        <ContributionCard />

        <Footer />

      </div>
    </main>
  );
}
