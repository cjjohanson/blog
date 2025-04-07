import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPost from '@/images/logos/post.svg'
import logoArtsyPetz from '@/images/logos/artsypetz.svg'
import logoMeetup from '@/images/logos/meetup.svg'

const startups = [
  {
    name: 'ArtsyPetz',
    description:
      'Custom pet portraits without the headaches, available as wall art, clothing, mugs, bags, and more.',
    link: { href: 'http://artsypetz.com', label: 'artsypetz.com' },
    logo: logoArtsyPetz,
  },
  {
    name: 'In Progress',
    description:
      'An insanely easy way grow your social media presence.',
    // link: { href: '#', label: '' },
    logo: logoPost,
  },
  {
    name: 'In Progress',
    description:
      'Simplify making plans to hang out with friends and loved ones.',
    // link: { href: '#', label: 'github.com' },
    logo: logoMeetup,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Startups',
  description: 'The things I’ve built — or am still building.',
}

export default function Startups() {
  return (
    <SimpleLayout
      title="The things I’ve built — or am still building."
      intro="These are the startups I’ve poured time, code, and curiosity into. Some are live, some are in progress, and all of them reflect the joy of building things that matter (or just make me smile)."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {startups.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.link?.href ? (
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              ) : (
                project.name
              )}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <LinkIcon className="h-6 w-6 flex-none" />
            {project.link?.href && project.link.label ? (
              <>
                <span className="ml-2">{project.link.label}</span>
              </>
            ) : (
              <span className="italic text-zinc-400 ml-2">Coming soon</span>
            )}
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
