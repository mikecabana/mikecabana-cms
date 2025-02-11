import NextLink from 'next/link'
import { ThemeSwitcher } from './theme-switcher'

export function Nav() {
  const items = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Projects',
      route: '/#projects',
    },
    {
      label: 'Posts',
      route: '/posts',
    },
    // {
    //   label: 'Snippets',
    //   route: '/snippets',
    // },
    // {
    //   label: 'Connect',
    //   route: '/connect',
    // },
    {
      label: 'Guestbook',
      route: '/guests',
    },
    // {
    //   label: 'Sera',
    //   route: '/sera',
    // },
  ]
  return (
    <nav className="flex items-center justify-between py-6 mb-12">
      <ul className="flex items-center gap-6 font-medium">
        {items.map((item, i) => (
          <li key={i}>
            <NextLink
              href={item.route}
              className="hover:text-accent transition-colors duration-100"
            >
              {item.label}
            </NextLink>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  )
}
