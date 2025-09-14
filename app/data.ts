type Project = {
  name: string
  description: string
  link: string
  video: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  logo: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
{
name: 'Document Management with Appian Records',
 description: 'Enable seamless organization of documents as record types, supporting intuitive data relationships, enhanced security, and workflow integration.',
 video:'https://www.youtube.com/watch?v=pdkH77lRoYE',
 image: '/DocumentT.jpg',
link: 'https://docs.appian.com/suite/help/25.3/manage-docs-with-records.html',
id: 'project1',
},
{
name: 'Records Collaboration in Appian',
 description: 'Enable adding top-level comments on record events for seamless collaboration and updates.',
 video: '',
 image: '/DocumentT.jpg',
link: 'https://docs.appian.com/suite/help/25.3/record-events-collaboration.html#top-level-comments',
id: 'project2',
},
 ]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Appian Corporation',
    title: 'Senior UX Designer',
    start: 'April 2023',
    end: 'Present',
    link: 'https://appian.com',
    id: 'work1',
    logo: '/appian-logo.png',
  },
  {
    company: 'Mr.Cooper',
    title: 'UX Designer II',
    start: 'January 2020',
    end: 'April 2023',
    link: 'https://mrcooper.com',
    id: 'work2',
    logo: '/mrcooper-logo.png',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Insights from Designing a Low-Code / No-Code Developer Platform ⚡️',
    description: 'My learnings from designing a low-code/no-code developer tool and the challenges we faced.',
    link: '/blog/low-code-no-code-insights',
    uid: 'blog-1',
  },
  {
    title: 'Design Systems at Scale',
    description: 'How we built and maintained design systems across multiple product teams and platforms.',
    link: '/blog/design-systems-at-scale',
    uid: 'blog-2',
  },
  {
    title: 'The Future of No-Code Design',
    description: 'Exploring how no-code platforms are changing the way designers approach product development.',
    link: '/blog/future-of-no-code-design',
    uid: 'blog-3',
  },
  {
    title: 'Photography and Design Inspiration',
    description: 'How my photography practice influences my design work and creative process.',
    link: '/blog/photography-and-design',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kaushikslr',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/kaushik06slr',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kaushikslr',
  },
]

export const EMAIL = 'kaushik06slr@gmail.com'
