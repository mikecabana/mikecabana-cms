import { SiBluesky, SiGithub, SiThreads, SiX } from '@icons-pack/react-simple-icons'
import NextLink from 'next/link'

export function Footer() {
  return (
    <footer className="w-full py-12 px-4">
      <div className="flex items-center justify-center gap-8 mb-8">
        <a
          className="hover:text-sera transition-colors duration-100"
          href="https://github.com/mikecabana/spotify-now-playing-overlay"
          target="_blank"
        >
          <SiGithub className="w-5 h-5" />
        </a>
        <a
          className="hover:text-sera transition-colors duration-100"
          href="https://threads.net/@mikecabana"
          target="_blank"
        >
          <SiThreads className="w-5 h-5" />
        </a>
        <a
          className="hover:text-sera transition-colors duration-100"
          href="https://bsky.app/profile/mikecabana.com"
          target="_blank"
        >
          <SiBluesky className="w-5 h-5" />
        </a>
        <a
          className="hover:text-sera transition-colors duration-100"
          href="https://x.com/mikecabana"
          target="_blank"
        >
          <SiX className="w-5 h-5" />
        </a>
      </div>
      <p className="mb-2 text-center">
        built by <span className="text-sera">Mikey</span> &copy; {new Date().getFullYear()}
      </p>
      <p className="text-sm flex items-center justify-center">
        <NextLink href="/privacy-policy" className="hover:text-sera">
          Privacy Policy
        </NextLink>
      </p>
    </footer>
  )
}
