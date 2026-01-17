import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { getProjectById, portfolioProjects } from "@/lib/portfolio-data"
import { notFound } from "next/navigation"
import { ProjectDetailsClient } from "./project-details-client"

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id,
  }))
}

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailsClient project={project} />
}
