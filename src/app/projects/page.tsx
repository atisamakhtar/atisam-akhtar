"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectModal from '@/components/projects/project-modal';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

// Define Project type
interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  pdf?: string; // URL to the PDF file
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

// Sample project data (replace with actual project data)
const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website built with Next.js, Stripe, and Firebase.',
    image: 'https://picsum.photos/seed/project4/600/400',
    // pdf: '/pdfs/project1-details.pdf', // Example PDF path
    tags: ['Next.js', 'React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application using React and Node.js.',
    image: 'https://picsum.photos/seed/project2/600/400',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
    liveUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Portfolio Website V1',
    description: 'My previous portfolio website, showcasing design and development skills.',
    // Use a PDF if no representative image is available or more detail is needed
    pdf: '/pdfs/portfolio-v1-showcase.pdf',
    tags: ['HTML', 'CSS', 'JavaScript', 'Animation'],
    repoUrl: '#',
  },
   {
    id: 'project-4',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard displaying complex data using D3.js.',
    image: 'https://picsum.photos/seed/project4/600/400',
    tags: ['D3.js', 'React', 'Data Viz'],
    liveUrl: '#',
    repoUrl: '#',
  },
];


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay clearing project to allow modal close animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="space-y-12 fade-in">
      <section className="text-center ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">My Projects</h1>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          Here's a selection of projects I've worked on. Click on any project to learn more.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projectsData.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 bg-card">
             {project.image && (
              <div className="relative h-48 w-full">
                 <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
             {project.pdf && !project.image && ( // Show placeholder if only PDF exists
              <div className="relative h-48 w-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">PDF Available</p>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-card-foreground">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button onClick={() => openModal(project)} variant="outline">
                 View Details
              </Button>
               <div className="flex space-x-2">
                {project.liveUrl && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View Live Project">
                       <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="ghost" size="icon" asChild>
                     <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="View Project Repository">
                       {/* Use GitHub icon from lucide-react if available, or a generic code icon */}
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                   </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </div>
  );
}
