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
 video:'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
 image: '/DocumentT.jpg', // <-- Add this line
link: 'https://docs.appian.com/suite/help/25.3/manage-docs-with-records.html',
id: 'project1',
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
  },
  {
    company: 'Mr.Cooper',
    title: 'UX Designer II',
    start: 'January 2020',
    end: 'April 2023',
    link: 'https://mrcooper.com',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Insights from Designing a Low-Code / No-Code Developer Platform ⚡️',
    description: '[Coming Soon]',
    link: '',
    uid: 'blog-1',
  },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Twitter',
    link: 'https://twitter.com/kaushik06slr',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kaushikslr',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kaushikslr',
  },
]

export const EMAIL = 'kaushik06slr@gmail.com'
