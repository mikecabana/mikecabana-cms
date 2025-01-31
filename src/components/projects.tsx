import { getPayload } from '@/lib/payload'
import { ProjectCard } from './project-card'

export async function Projects() {
  const payload = await getPayload()

  const res = await payload.find({
    collection: 'projects',
  })

  const projects = res.docs.map((project) => {
    const { id, name, link, description, image, tags, wip } = project

    if (image && typeof image !== 'number') {
      return { id, name, link, description, image: image.url, tags, wip }
    }

    return { id, name, link, description, image: null, tags, wip }
  })

  return (
    <div className="grid grid-cols-1 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          image={project.image}
          link={project.link}
          tags={project.tags}
          wip={project.wip}
        />
      ))}
    </div>
  )
}
