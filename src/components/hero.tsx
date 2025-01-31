import NextImage from 'next/image'
import SiteTitle from './site-title'
import { Socials } from './socials'

export function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse gap-8 mb-12 items-center">
        <div className="flex-grow text-right">
          <SiteTitle />
          {/* <h1 className="font-bold text-4xl mb-6">Mike Cabana</h1> */}
          <p className="md:text-2xl font-bold opacity-90 mb-8">
            Software developer, coffee lover, dog daddy, AI wrangler.
          </p>
          <Socials />
        </div>
        <div className="relative w-48 h-48 flex-shrink-0">
          <NextImage
            src="/p.jpg"
            alt="Profile pic of mike cabana"
            fill={true}
            sizes="138px, 138px"
            className="z-10 rounded-full"
          />
          <svg
            className="h-40 absolute -left-6 top-2"
            viewBox="0 0 188 123"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M187.035 108.152C183.206 127.277 92.8472 123.477 59.4232 116.786C28.3144 110.558 -3.23435 48.3123 0.594506 29.1874C9.32478 -1.3444 55.6981 -2.61897 89.1221 4.07258C176.474 21.5606 190.864 89.0269 187.035 108.152Z"
              fillOpacity="0.1"
              className="fill-current"
            />
          </svg>
        </div>
      </div>
    </>
  )
}
