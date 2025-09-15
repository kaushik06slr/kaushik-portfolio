'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image';
import { Magnetic } from '@/components/ui/magnetic'
import { Archivo } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';
import { PT_Serif } from 'next/font/google';
import {
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  PROJECTS,
} from './data'

const archivo = Archivo({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });
const ptSerif = PT_Serif({ subsets: ['latin'], weight: '400' });
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
  const [isPersonalMode, setIsPersonalMode] = useState(false)
  const [greetingIndex, setGreetingIndex] = useState(0)
  const greetings = [
    { text: 'வணக்கம்', emoji: '🙏' },
    { text: 'नमस्ते', emoji: '🙏' },
    { text: 'Hello', emoji: '👋' },
    { text: 'Hola', emoji: '👋' }
  ]

  useEffect(() => {
    if (isPersonalMode) {
      const interval = setInterval(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length)
      }, 2000) // Change every 2 seconds

      return () => clearInterval(interval)
    }
  }, [isPersonalMode, greetings.length])

  return (
    <motion.main
      className="min-h-screen flex flex-col lg:flex-row lg:h-screen overflow-hidden"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Left Column - Existing Content */}
      <div
        className="w-full lg:w-[45%] flex flex-col justify-start overflow-hidden border-b lg:border-b-0 lg:border-r border-[#DFF5EE] relative px-6 py-12 lg:px-24 lg:py-18"
        style={{
          backgroundColor: '#FAFCFC'
        }}
      >
        {/* Personal Mode Toggle */}
        <div className="absolute top-6 left-6 lg:left-24">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="checkbox"
                id="personalMode"
                className="sr-only"
                checked={isPersonalMode}
                onChange={(e) => setIsPersonalMode(e.target.checked)}
              />
              <label
                htmlFor="personalMode"
                className={`relative block w-10 h-6 rounded-full cursor-pointer transition-colors duration-200 ${isPersonalMode ? 'bg-[#0A7455]' : 'bg-zinc-300 hover:bg-zinc-400'
                  }`}
              >
                <div
                  className="absolute w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-200 flex items-center justify-center pointer-events-none"
                  style={{
                    top: isPersonalMode ? '0px' : '4px',
                    left: isPersonalMode ? '4px' : '4px'
                  }}
                >
                  <span className={`text-xs ${isPersonalMode ? 'text-[#0A7455]' : 'text-zinc-600'}`}>✽</span>
                </div>
              </label>
            </div>
            <span className={`text-xs lg:text-sm ${archivo.className}`}>
              <span className="text-zinc-900">Behind the Screen.</span>{' '}
              <span className="text-zinc-600">A little about me, off the grid</span>
            </span>
          </div>
        </div>

        {/* Spacer for toggle */}
        <div style={{ marginTop: '26px' }}></div>

        {/* Personal Mode Cover Photo */}
        {isPersonalMode && (
          <>
            <div className={`text-2xl lg:text-3xl ${geistMono.className} mb-6`}>
              <div className="inline-block">
                <span className="font-semibold" style={{ color: '#0A7455' }}>👋 </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={greetingIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut"
                    }}
                    className="font-semibold inline-block"
                    style={{ color: '#0A7455' }}
                  >
                    {greetings[greetingIndex].text}
                  </motion.span>
                </AnimatePresence>
              </div>

            </div>
            <div className="w-full rounded-lg mb-8 h-60">
              <Image
                src="/Personal.jpeg"
                alt="Personal"
                width={800}
                height={600}
                className="w-full h-full object-cover scale-100 transform"
                quality={100}
                priority
              />
            </div>
          </>
        )}

        {/* Profile Section */}
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="flex flex-col"
        >
          {/* Profile Image */}
          {!isPersonalMode && (
            <div className="rounded-md overflow-hidden bg-gray-200" style={{ width: '150px', height: '150px' }}>
              <Image
                src="/Professional.png"
                alt="Kaushik R"
                width={150}
                height={150}
                className="w-full h-full object-cover scale-150 object-center"
                quality={100}
                priority
              />
            </div>
          )}

          {/* Name */}
          {!isPersonalMode && (
            <h1 className={`font-bold tracking-wide ${geistMono.className} text-2xl lg:text-3xl`} style={{ color: '#0A7455', lineHeight: '1.4', marginTop: '32px' }}>
              Kaushik
            </h1>
          )}

          {/* Bio Text */}
          <div className={`text-zinc-600 ${isPersonalMode ? ptSerif.className : archivo.className} text-sm lg:text-base`} style={{ fontSize: isPersonalMode ? 'clamp(18px, 4vw, 24px)' : 'clamp(14px, 3vw, 16px)', lineHeight: '1.6', marginTop: isPersonalMode ? '32px' : '16px', textAlign: 'justify' }}>
            {isPersonalMode ? (
              <>
                <p>
                  I'm a history lover, traveler, and photography enthusiast. I enjoy exploring the past, capturing the perfect shot, and discovering new stories wherever I go. These days, I spend my time exploring online, daydreaming about new adventures, and letting curiosity guide my thoughts.
                </p>
                <p style={{ marginTop: '16px' }}>
                  You'll often find me getting lost in movies, vibing to good music, or imagining the perfect shot I'd capture if I were out exploring.
                </p>
              </>
            ) : (
              <p>
                A Product Designer from Chennai with over 5 years of experience turning complexity into clarity. My work spans low-code/no-code platforms and fintech, where I focus on building intuitive, scalable solutions rooted in systems thinking. Outside of work, I enjoy photography — it allows me to capture diverse perspectives and fuels the creativity I bring into design.
              </p>
            )}
          </div>

          {/* Social Links in Personal Mode */}
          {isPersonalMode && (
            <div style={{ marginTop: '32px' }}>
              <h3 className={`font-medium tracking-wide ${geistMono.className} text-lg`} style={{ color: '#0A7455', marginBottom: '16px' }}>
                Find me at
              </h3>
              <div className="flex items-center space-x-3">
                {SOCIAL_LINKS.filter(link => link.label === 'Twitter' || link.label === 'Instagram').map((link) => (
                  <MagneticSocialLink key={link.label} link={link.link}>
                    {link.label}
                  </MagneticSocialLink>
                ))}
              </div>
            </div>
          )}

        </motion.section>

        {/* Experience Section with Separators */}
        {!isPersonalMode && (
          <>
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
          </>
        )}



        {!isPersonalMode && (
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
        )}
      </div>

      {/* Right Column - Works Content */}
      <div
        className="w-full lg:w-[55%] flex flex-col px-6 pt-12 lg:px-[120px] lg:pt-18"
      >
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="flex flex-col h-full overflow-y-auto"
        >
          {isPersonalMode ? (
            // Personal Mode - Vibes Header
            <div>
              <h2 className={`font-semibold tracking-wide ${geistMono.className}`} style={{ fontSize: '20px', lineHeight: '1.4' }}>
                <span className="text-gray-400 line-through">Projects</span>{' '}
                <span style={{ color: '#0A7455' }}>Vibes</span>
              </h2>
            </div>
          ) : (
            // Professional Mode - Work Section
            <div className="flex flex-col">
              <h2 className={`font-semibold tracking-wide ${geistMono.className}`} style={{ color: '#0A7455', fontSize: '20px', lineHeight: '1.4', marginBottom: '6px' }}>
                Projects
              </h2>

              <p className={`text-gray-600 text-sm ${archivo.className}`} style={{ marginBottom: '18px' }}>
                To know more about my works, reach me out at{' '}
                <a href={`mailto:${EMAIL}`} className="text-gray-600 underline hover:text-gray-800 transition-colors">
                  {EMAIL}
                </a>
              </p>

              {/* Projects */}
              <div>
                {PROJECTS.map((project, index) => (
                  <div key={project.id} className={`bg-white rounded-2xl p-6 border border-gray-200 ${index < PROJECTS.length - 1 ? 'mb-6' : ''}`}>
                    {/* Project Placeholder */}
                    <div className="w-full h-48 rounded-lg flex items-center justify-center gap-4" style={{ backgroundColor: '#EEF4F2', marginBottom: '26px' }}>
                      <div className="text-4xl" style={{ color: '#9FADA8' }}>✽</div>
                      <div className="text-4xl" style={{ color: '#9FADA8' }}>✽</div>
                      <div className="text-4xl" style={{ color: '#9FADA8' }}>✽</div>
                    </div>

                    {/* Project Title */}
                    <h3 className={`font-bold text-xl text-black ${geistMono.className}`} style={{ marginBottom: '4px' }}>
                      {project.name}
                    </h3>

                    {/* Project Description */}
                    <p className={`text-gray-600 text-sm ${archivo.className}`} style={{ lineHeight: '1.5', marginBottom: '26px' }}>
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${project.video ? 'sm:flex-1' : 'w-full'} w-full bg-zinc-200 text-zinc-700 px-4 py-2 rounded-sm font-medium transition-colors duration-200 hover:bg-zinc-300 ${archivo.className} flex items-center justify-center gap-2`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Read Documentation
                      </a>
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full sm:flex-1 bg-[#0A7455] text-white px-4 py-2 rounded-sm font-medium transition-colors duration-200 hover:bg-[#0A7455]/90 ${archivo.className} flex items-center justify-center gap-2`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="5,3 19,12 5,21" fill="currentColor" />
                          </svg>
                          View Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      </div>
    </motion.main>
  )
}
