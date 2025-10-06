type Project = {
  name: string
  description: string
  link: string
  video: string
  image: string
  id: string
  company: string
  year: string
  status: string
  caseStudyLink?: string
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



type SocialLink = {
  label: string
  link: string
}

type VisualSnippet = {
  id: string
  image: string
  title: string
  description: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Unified Document Management with Appian Records',
    description: 'Seamlessly organize and manage documents as record types, enabling richer data relationships, stronger security, and integrated workflows across Appian applications',
    video: 'https://www.youtube.com/watch?v=pdkH77lRoYE',
    image: '/Record Documents.png',
    link: 'https://docs.appian.com/suite/help/25.3/manage-docs-with-records.html',
    id: 'project1',
    company: 'Appian',
    year: '2025',
    status: 'Shipped',
  },
  {
    name: 'Real-Time Data Streaming with Appian Kafka Integration',
    description: 'Connect Appian natively with Apache Kafka to harness real-time data streams, drive event-based automation, and enhance system responsiveness',
    video: '',
    image: '/kafka.png',
    link: 'https://community.appian.com/betas/b/programs/posts/kafka-integration',
    id: 'project2',
    company: 'Appian',
    year: '2025',
    status: 'Beta',
  },
  {
    name: 'Seamless Record-Level Collaboration with Appian',
    description: 'Enable teams to add top-level comments on record events, facilitating seamless collaboration, real-time updates, and centralized, context-rich communication',
    video: '',
    image: '/Records Collaboration.png',
    link: 'https://docs.appian.com/suite/help/25.3/record-events-collaboration.html#top-level-comments',
    id: 'project3',
    company: 'Appian',
    year: '2024',
    status: 'Shipped',
  },
  {
    name: 'FIGARO: Centralized Loan Post-Closing Platform',
    description: 'A centralized post-closing audit system designed to streamline loan validation, automate audits, and improve efficiency for loan processors and managers',
    video: '',
    image: '/Figaro.png',
    link: '',
    id: 'project4',
    company: 'Mr.Cooper',
    year: '2022',
    status: 'Shipped',
    caseStudyLink: 'https://www.figma.com/proto/UFCFP91mZczx0y04QwzxRA/Portfolio---Case-Study?node-id=9-2&t=3TJ41VaaswbWiTYS-1&scaling=min-zoom&content-scaling=fixed&page-id=8%3A5&starting-point-node-id=9%3A2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Appian Corporation',
    title: 'Senior UX Designer',
    start: "Apr'23",
    end: 'Now',
    link: 'https://appian.com',
    id: 'work1',
    logo: '/appian.svg?v=3',
  },
  {
    company: 'Mr.Cooper',
    title: 'UX Designer II',
    start: "Jan'20",
    end: "Apr'23",
    link: 'https://mrcooper.com',
    id: 'work2',
    logo: '/cooper.svg',
  },
]



export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Resume',
    link: 'https://drive.google.com/file/d/1O5uGDFgDURL7EGClXaPLLWuXSis-Uagf/view?usp=drive_link',
  },
  {
    label: 'kaushik06slr@gmail.com',
    link: 'mailto:kaushik06slr@gmail.com',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kaushikslr',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kaushikslr',
  },
  {
    label: 'X.com',
    link: 'https://twitter.com/kaushik06slr',
  },
]

export const VISUAL_SNIPPETS: VisualSnippet[] = [
  {
    id: 'snippet1',
    image: '/Visual Snippets/1.jpg',
    title: 'Visual Snippet 1',
    description: 'A visual design snippet showcasing creative work',
  },
  {
    id: 'snippet2',
    image: '/Visual Snippets/2.jpg',
    title: 'Visual Snippet 2',
    description: 'Another visual design snippet showcasing creative work',
  },
  {
    id: 'snippet3',
    image: '/Visual Snippets/3.jpg',
    title: 'Visual Snippet 3',
    description: 'Third visual design snippet showcasing creative work',
  },
  {
    id: 'snippet4',
    image: '/Visual Snippets/4.jpg',
    title: 'Visual Snippet 4',
    description: 'Fourth visual design snippet showcasing creative work',
  },
  {
    id: 'snippet5',
    image: '/Visual Snippets/5.jpg',
    title: 'Visual Snippet 5',
    description: 'Fifth visual design snippet showcasing creative work',
  },
  {
    id: 'snippet6',
    image: '/Visual Snippets/6.jpg',
    title: 'Visual Snippet 6',
    description: 'Sixth visual design snippet showcasing creative work',
  },
  {
    id: 'snippet7',
    image: '/Visual Snippets/7.jpg',
    title: 'Visual Snippet 7',
    description: 'Seventh visual design snippet showcasing creative work',
  },
  {
    id: 'snippet8',
    image: '/Visual Snippets/8.jpg',
    title: 'Visual Snippet 8',
    description: 'Eighth visual design snippet showcasing creative work',
  },
  {
    id: 'snippet9',
    image: '/Visual Snippets/9.jpg',
    title: 'Visual Snippet 9',
    description: 'Ninth visual design snippet showcasing creative work',
  },
  {
    id: 'snippet10',
    image: '/Visual Snippets/10.jpg',
    title: 'Visual Snippet 10',
    description: 'Tenth visual design snippet showcasing creative work',
  },
]


