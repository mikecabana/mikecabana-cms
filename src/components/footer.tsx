import { SiBluesky, SiGithub, SiThreads } from '@icons-pack/react-simple-icons'

export function Footer() {
  return (
    <footer className="w-full py-12 px-4">
      <div className="flex items-center justify-center gap-8 mb-8">
        <a
          className="hover:text-accent transition-colors duration-100"
          href="https://github.com/mikecabana/spotify-now-playing-overlay"
          target="_blank"
        >
          <SiGithub className="w-5 h-5" />
        </a>
        <a
          className="hover:text-accent transition-colors duration-100"
          href="https://threads.net/@mikecabana"
          target="_blank"
        >
          <SiThreads className="w-5 h-5" />
        </a>
        <a
          className="hover:text-accent transition-colors duration-100"
          href="https://bsky.app/profile/mikecabana.com"
          target="_blank"
        >
          <SiBluesky className="w-5 h-5" />
        </a>
      </div>
      <p className="mb-2 text-center">built by Mikey &copy; {new Date().getFullYear()}</p>
      {/* <p className="text-sm flex items-center justify-center">
        <a href="/privacy-policy">Privacy Policy</a>
      </p> */}
    </footer>
  )
}
