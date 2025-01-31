import { Card } from './card'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getRandomGradient } from '@/lib/card'

type Tag = {
  tag?: string | null
  id?: string | null
}

type ProjectCardProps = {
  name: string
  description?: string | null
  image?: string | null
  link: string
  tags?: Tag[] | null
  wip?: boolean | null
}

function ProjectCardTag({ tag }: { tag: Tag }) {
  return <div className="text-xs text-gray-500">{tag?.tag}</div>
}

function ProjectCardTags({ tags }: { tags: Tag[] | null }) {
  return (
    <div className="flex items-center gap-4">
      {tags?.map((tag, i) => <ProjectCardTag key={i} tag={tag} />)}
    </div>
  )
}

function ProjectCardWip() {
  return <div className="text-xs text-gray-500">WIP</div>
}

export function ProjectCard({
  name: title,
  description,
  image,
  link,
  tags,
  wip,
}: ProjectCardProps) {
  return (
    <Card>
      {image && (
        <div className="relative w-full h-48 mb-4">
          <NextImage src={image} alt={title} className="rounded-t-lg object-cover w-full h-full" />
        </div>
      )}
      <div className="mb-6">
        <NextLink href={link} target="_blank" rel="noopener noreferrer" className="block">
          <h3 className="text-xl font-semibold mb-2 group">
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-2">
                {title}
                {wip && <ProjectCardWip />}
              </div>
              <ExternalLink className="w-4 h-4 transform transition-all duration-100 opacity-25  group-hover:opacity-100" />
            </div>
            <span
              className={cn(
                getRandomGradient(),
                'block max-w-0 group-hover:max-w-full transition-all duration-300 ease-out h-0.5',
              )}
            ></span>
          </h3>
        </NextLink>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      {tags && <ProjectCardTags tags={tags} />}
    </Card>
  )
}
