'use client'
import { motion } from 'motion/react'
import Image from 'next/image';
import { Magnetic } from '@/components/ui/magnetic'
import { Archivo } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import {
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const archivo = Archivo({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}



function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 p-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-800 hover:text-white social-link"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="min-h-screen flex flex-col lg:flex-row lg:h-screen overflow-hidden"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Left Column - Existing Content */}
      <div
        className="w-full lg:w-[45%] flex flex-col justify-start overflow-hidden border-b lg:border-b-0 lg:border-r border-[#DFF5EE]"
        style={{
          backgroundColor: '#FAFCFC',
          padding: '72px 96px'
        }}
      >
        {/* Profile Section */}
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="flex flex-col"
        >
          {/* Profile Image */}
          <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-200">
            <Image
              src="/kaushik.jpg"
              alt="Kaushik R"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              quality={100}
              priority
            />
          </div>

          {/* Name */}
          <h1 className={`font-bold tracking-wide ${geistMono.className}`} style={{ color: '#0A7455', fontSize: '32px', lineHeight: '1.4', marginTop: '32px' }}>
            Kaushik
          </h1>

          {/* Bio Text */}
          <div className={`text-zinc-600 ${archivo.className}`} style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '16px' }}>
            <p>
              Hello 👋 I'm a Product Designer from Chennai with over 5 years of experience turning complexity into clarity. My work spans low-code/no-code platforms and fintech, where I focus on building intuitive, scalable solutions rooted in systems thinking. Outside of work, I enjoy photography — it allows me to capture diverse perspectives and fuels the creativity I bring into design.
            </p>
          </div>


        </motion.section>

        {/* Separator */}
        <div className="flex items-center" style={{ margin: '2rem 0' }}>
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="mx-4 text-2xl separator-icon cursor-pointer" style={{ color: '#0A7455' }}>✽</div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Work Experience Section */}
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="flex flex-col"
        >
          <h2 className={`font-semibold tracking-wide ${geistMono.className}`} style={{ color: '#323232', fontSize: '20px', lineHeight: '1.4' }}>
            Experience
          </h2>
          <div className="flex flex-col" style={{ marginTop: '24px' }}>
            {WORK_EXPERIENCE.map((job, index) => (
              <div
                key={job.id}
                className="space-y-1"
                style={{
                  marginBottom: job.id === 'work1' ? '28px' : index < WORK_EXPERIENCE.length - 1 ? '28px' : '0px'
                }}
              >
                <div className="flex items-baseline">
                  <h3 className={`font-medium ${archivo.className}`} style={{ color: '#323232', fontSize: '18px', lineHeight: '1.5' }}>
                    {job.title},
                  </h3>
                  <div className="flex items-center ml-1">
                    <p className={`text-zinc-600 ${archivo.className}`} style={{ fontSize: '18px', lineHeight: '1.5' }}>
                      {job.company}
                    </p>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-zinc-400 hover:text-zinc-600 transition-colors duration-200"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <span className={`text-zinc-500 ${archivo.className}`} style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  {job.start} - {job.end}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Separator */}
        <div className="flex items-center" style={{ margin: '2rem 0' }}>
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="mx-4 text-2xl separator-icon cursor-pointer" style={{ color: '#0A7455' }}>✽</div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>



        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="space-y-6"
        >
          <div className="flex items-center space-x-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Right Column - Works Content */}
      <div
        className="w-full lg:w-[55%] flex flex-col"
        style={{
          padding: '72px 96px'
        }}
      >
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="flex flex-col h-full"
        >
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center" style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
              {/* Icon - Text - Icon and Email text grouped */}
              <div style={{ gap: '14px', display: 'flex', flexDirection: 'column' }}>
                {/* Large rotating icon */}
                <div className="flex justify-center">
                  <div className="text-zinc-400 separator-icon-always" style={{ fontSize: '40px' }}>✽</div>
                </div>

                {/* Loading text */}
                <div className="flex justify-center">
                  <p className={`font-normal tracking-wide ${geistMono.className} text-zinc-600`} style={{ fontSize: '14px', lineHeight: '1.4' }}>
                    Good things take time! Portfolio loading..
                  </p>
                </div>

                {/* Email text */}
                <div>
                  <p className={`text-zinc-600 ${archivo.className}`} style={{ fontSize: '20px', lineHeight: '1.5' }}>
                    Until then, let's connect at {' '}
                    <a className={`underline ${archivo.className}`} style={{ color: '#0A7455', fontWeight: 'semibold' }} href={`mailto:${EMAIL}`}>
                      {EMAIL}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block ml-1"
                        style={{ color: '#0A7455' }}
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.main>
  )
}
