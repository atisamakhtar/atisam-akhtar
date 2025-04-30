"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from 'next/image';
import { ScrollArea } from "@/components/ui/scroll-area";

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

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[80vw] lg:max-w-[60vw] max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl text-primary">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-grow overflow-y-auto px-6">
           <div className="py-4 space-y-4">
            {project.image && (
              <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain" // Use contain to show the whole image
                />
              </div>
            )}
            {project.pdf && (
              <div className="w-full h-[60vh] border rounded-md overflow-hidden shadow-inner bg-muted">
                <iframe
                  src={`${project.pdf}#toolbar=0&navpanes=0&scrollbar=0`} // Basic PDF viewer controls
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title={`${project.title} PDF Viewer`}
                  // Security note: Ensure PDFs are from trusted sources or sanitized
                  // sandbox="allow-scripts allow-same-origin" // Consider sandbox for enhanced security if PDFs are user-uploaded
                />
                 <p className="text-xs text-muted-foreground p-2 text-center">Scroll within the frame to view the PDF.</p>
              </div>
            )}
            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            {/* Add more project details here if needed */}
          </div>
        </ScrollArea>
         {/* Optional: Add footer for links if needed within the modal */}
         {/* <DialogFooter className="p-6 pt-0"> ... </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
