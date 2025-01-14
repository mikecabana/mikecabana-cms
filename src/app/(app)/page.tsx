import { cn } from '@/utils'
import NextImage from 'next/image'
import NextLink from 'next/link'

function Nav() {
  const items = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Projects',
      route: '/projects',
    },
    // {
    //   label: 'Posts',
    //   route: '/posts',
    // },
    // {
    //   label: 'Snippets',
    //   route: '/snippets',
    // },
    // {
    //   label: 'Connect',
    //   route: '/connect',
    // },
    // {
    //   label: 'Guestbook',
    //   route: '/guestbook',
    // },
    // {
    //   label: 'Sera',
    //   route: '/sera',
    // },
  ]
  return (
    <nav className="flex items-center justify-between py-6 mb-12">
      <ul className="flex items-center gap-4 font-medium">
        {items.map((item, i) => (
          <li key={i}>
            <NextLink href={item.route}>{item.label}</NextLink>
          </li>
        ))}
      </ul>

      <ul></ul>
    </nav>
  )
}

function Banner() {
  return (
    <div className="bg-[#3C3C40] border border-[#7C7C7C] py-1 px-4 text-sm font-medium rounded-full mb-4 inline-block">
      This is a test for the banner
    </div>
  )
}

function Hero() {
  return (
    <>
      <Banner />
      <div className="flex gap-8 mb-12">
        <div className="flex-grow">
          <h1 className="font-bold text-4xl mb-6">Mike Cabana</h1>
          <p>Software developer, coffee lover, dog daddy, AI wrangler.</p>
        </div>
        <div className="relative w-[138px] h-[138px] flex-shrink-0">
          <NextImage
            src="/profile.png"
            alt="Profile pic of mike cabana"
            fill={true}
            sizes="138px, 138px"
          />
        </div>
      </div>
    </>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  const gradients: string[] = [
    'bg-gradient-to-br from-gray-700 via-rose-500 to-orange-400',
    'bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]',
    'bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500',
  ]

  const getRandomGradient = () => {
    const index = Math.floor(Math.random() * gradients.length)
    return gradients[index]
  }

  return (
    <div className={cn(getRandomGradient(), 'relative rounded-xl')}>
      <div className="absolute bg-mc inset-1 z-0 rounded-lg"></div>
      <div className="z-10 p-4 relative">{children}</div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            This is a test Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore
            provident fugit. Expedita, cupiditate laudantium tempore quis, tenetur
          </Card>
          <Card>
            This is a test Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore
            provident fugit. Expedita, cupiditate laudantium tempore quis, tenetur
          </Card>
          <Card>
            This is a test Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore
            provident fugit. Expedita, cupiditate laudantium tempore quis, tenetur
          </Card>
        </div>
      </main>
    </>
  )
}
