import { SiGithub, SiThreads, SiBluesky, SiX } from '@icons-pack/react-simple-icons'
import { Button } from './ui/button'

export function Socials() {
  const items = [
    {
      label: 'gitHub',
      route: 'https://github.com/mikecabana',
      icon: SiGithub,
    },
    {
      label: 'threads',
      route: 'https://threads.net/@mikecabana',
      icon: SiThreads,
    },
    {
      label: 'bluesky',
      route: 'https://bsky.app/profile/mikecabana.com',
      icon: SiBluesky,
    },
    {
      label: 'twitter',
      route: 'https://x.com/mikecabana',
      icon: SiX,
    },
  ]
  return (
    <div className="flex items-center gap-4 w-full justify-center md:justify-end">
      {items.map((item, i) => (
        <Button key={i} variant="ghost" asChild>
          <a href={item.route} target="_blank" rel="noopener noreferrer">
            <item.icon />
          </a>
        </Button>
      ))}
    </div>
  )
}
