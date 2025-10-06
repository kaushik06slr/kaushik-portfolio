'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image';

import { Geist_Mono } from 'next/font/google';

import localFont from 'next/font/local';
import {
  WORK_EXPERIENCE,
  SOCIAL_LINKS,
  PROJECTS,
  VISUAL_SNIPPETS,
} from './data'

const geistMono = Geist_Mono({ subsets: ['latin'] });

const dmSans = localFont({
  src: './fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf',
  display: 'swap',
});

const beautyDemo = localFont({
  src: './fonts/BeautyDemo.otf',
  display: 'swap',
});
const VARIANTS_CONTAINER = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1
  },
}

const TRANSITION_SECTION = {
  duration: 0,
}





export default function Personal() {
  const [isPersonalMode, setIsPersonalMode] = useState(false)
  const [activeTab, setActiveTab] = useState('case-studies')
  const [isLoading, setIsLoading] = useState(true)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0 })
  const [caseStudyTooltip, setCaseStudyTooltip] = useState({ show: false, x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Navigation functions for image modal
  const navigateImage = (direction: 'prev' | 'next') => {
    const currentIndex = VISUAL_SNIPPETS.findIndex(snippet => snippet.image === enlargedImage)
    let newIndex

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : VISUAL_SNIPPETS.length - 1
    } else {
      newIndex = currentIndex < VISUAL_SNIPPETS.length - 1 ? currentIndex + 1 : 0
    }

    const newImage = VISUAL_SNIPPETS[newIndex].image
    setEnlargedImage(newImage)
    setCurrentImageIndex(newIndex)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (enlargedImage) {
        if (e.key === 'ArrowLeft') {
          navigateImage('prev')
        } else if (e.key === 'ArrowRight') {
          navigateImage('next')
        } else if (e.key === 'Escape') {
          setEnlargedImage(null)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [enlargedImage])

  useEffect(() => {
    // Check if user has already seen loading screen in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading')

    if (hasSeenLoading) {
      // Skip loading screen if already seen in this session
      setIsLoading(false)
    } else {
      // Show loading screen for first visit in session
      const timer = setTimeout(() => {
        setIsLoading(false)
        // Mark that user has seen loading screen in this session
        sessionStorage.setItem('hasSeenLoading', 'true')
      }, 3000) // 3 seconds loading screen

      return () => clearTimeout(timer)
    }
  }, [])

  // Prevent body scroll when loading screen is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isLoading])

  // Allow natural scrolling in personal mode
  useEffect(() => {
    // Always allow natural scrolling in personal mode
    document.body.style.overflow = 'unset'

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isPersonalMode])



  return (
    <>

      {isPersonalMode ? (
        // Personal Mode - Bio and Postcards Layout
        <motion.main
          className="min-h-screen flex flex-col md:flex-row"
          style={{ backgroundColor: '#FAFCFC' }}
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
        >
          {/* Personal Mode Toggle */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:left-24 z-10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="checkbox"
                  id="personalModeToggle"
                  className="sr-only"
                  checked={isPersonalMode}
                  onChange={(e) => setIsPersonalMode(e.target.checked)}
                />
                <label
                  htmlFor="personalModeToggle"
                  className={`relative block w-10 h-6 rounded-full cursor-pointer transition-colors duration-200 ${isPersonalMode ? 'bg-[#0A7455]' : 'bg-zinc-300 hover:bg-zinc-400'}`}
                >
                  <div
                    className="absolute w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-200 flex items-center justify-center pointer-events-none"
                    style={{
                      top: '4px',
                      left: isPersonalMode ? '20px' : '4px'
                    }}
                  >
                    <span className={`text-xs ${isPersonalMode ? 'text-[#0A7455]' : 'text-zinc-600'}`}>✽</span>
                  </div>
                </label>
              </div>
              <span className={`text-xs lg:text-sm ${dmSans.className}`}>
                <span className="text-zinc-900 font-bold">Behind pixels.</span>{' '}
                <span className="text-zinc-600">A little about me, off the grid</span>
              </span>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="w-full md:w-[60%] md:min-h-screen flex flex-col px-4 py-4 lg:px-8 lg:py-8" style={{ paddingTop: '80px' }}>
            <motion.div
              variants={VARIANTS_SECTION}
              transition={TRANSITION_SECTION}
              className="w-full"
            >
              {/* Responsive Vertical Carousel */}
              <div className="flex justify-between gap-4 md:gap-6 lg:gap-8 w-full">
                {/* Column 1 - 5 photos - Moving Down */}
                <div className="relative h-[350px] md:h-screen overflow-hidden flex-1">
                  <div className="flex flex-col gap-4 lg:gap-6 animate-marquee-vertical-down">
                    {[
                      "Thailand 🇹🇭.jpeg",
                      "☕️.jpeg",
                      "Golden Gate Bridge 🌁.jpeg",
                      "It's me again! 🙋🏻‍♂️.jpeg",
                      "Mysore.jpeg"
                    ].map((image, index) => (
                      <div
                        key={image}
                        className="bg-white border border-gray-200 animate-float-up"
                        style={{
                          padding: '12px 12px 20px 12px',
                          boxShadow: '0 1px 2px 0 rgba(111, 111, 111, 0.05)',
                          animationDelay: `${index * 0.1}s`,
                          marginTop: image === "It's me again! 🙋🏻‍♂️.jpeg" ? '4px' : '0'
                        }}
                      >
                        <div className="overflow-hidden w-full" style={{ height: '280px' }}>
                          <Image
                            src={`/About me/${image}`}
                            alt={image.replace(/\.(jpeg|jpg)$/, '')}
                            width={240}
                            height={280}
                            className="w-full h-full object-cover"
                            quality={100}
                          />
                        </div>
                        <div className="mt-2">
                          <div className={`text-gray-400 text-xs ${geistMono.className}`}>
                            {image.replace(/\.(jpeg|jpg)$/, '')}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {[
                      "Thailand 🇹🇭.jpeg",
                      "☕️.jpeg",
                      "Golden Gate Bridge 🌁.jpeg",
                      "It's me again! 🙋🏻‍♂️.jpeg",
                      "Mysore.jpeg"
                    ].map((image, index) => (
                      <div
                        key={`duplicate-${image}`}
                        className="bg-white border border-gray-200"
                        style={{
                          padding: '12px 12px 20px 12px',
                          boxShadow: '0 1px 2px 0 rgba(111, 111, 111, 0.05)',
                          marginTop: image === "It's me again! 🙋🏻‍♂️.jpeg" ? '4px' : '0'
                        }}
                      >
                        <div className="overflow-hidden w-full" style={{ height: '280px' }}>
                          <Image
                            src={`/About me/${image}`}
                            alt={image.replace(/\.(jpeg|jpg)$/, '')}
                            width={240}
                            height={280}
                            className="w-full h-full object-cover"
                            quality={100}
                          />
                        </div>
                        <div className="mt-2">
                          <div className={`text-gray-400 text-xs ${geistMono.className}`}>
                            {image.replace(/\.(jpeg|jpg)$/, '')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 - 4 photos - Moving Up */}
                <div className="relative h-[350px] md:h-screen overflow-hidden flex-1 hidden md:block" style={{ marginTop: '40px' }}>
                  <div className="flex flex-col gap-4 lg:gap-6 animate-marquee-vertical-up">
                    {[
                      "🤘🎸.jpeg",
                      "Carmel by the Sea.jpeg",
                      "🍿🎬.jpeg",
                      "New York 🇺🇸.jpeg"
                    ].map((image, index) => (
                      <div
                        key={image}
                        className="bg-white border border-gray-200 animate-float-up"
                        style={{
                          padding: '12px 12px 20px 12px',
                          boxShadow: '0 1px 2px 0 rgba(111, 111, 111, 0.05)',
                          animationDelay: `${(index + 5) * 0.1}s`
                        }}
                      >
                        <div className="overflow-hidden w-full" style={{ height: '280px' }}>
                          <Image
                            src={`/About me/${image}`}
                            alt={image.replace(/\.(jpeg|jpg)$/, '')}
                            width={240}
                            height={280}
                            className="w-full h-full object-cover"
                            quality={100}
                          />
                        </div>
                        <div className="mt-2">
                          <div className={`text-gray-400 text-xs ${geistMono.className}`}>
                            {image.replace(/\.(jpeg|jpg)$/, '')}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {[
                      "🤘🎸.jpeg",
                      "Carmel by the Sea.jpeg",
                      "🍿🎬.jpeg",
                      "New York 🇺🇸.jpeg"
                    ].map((image, index) => (
                      <div
                        key={`duplicate-${image}`}
                        className="bg-white border border-gray-200"
                        style={{
                          padding: '12px 12px 20px 12px',
                          boxShadow: '0 1px 2px 0 rgba(111, 111, 111, 0.05)'
                        }}
                      >
                        <div className="overflow-hidden w-full" style={{ height: '280px' }}>
                          <Image
                            src={`/About me/${image}`}
                            alt={image.replace(/\.(jpeg|jpg)$/, '')}
                            width={240}
                            height={280}
                            className="w-full h-full object-cover"
                            quality={100}
                          />
                        </div>
                        <div className="mt-2">
                          <div className={`text-gray-400 text-xs ${geistMono.className}`}>
                            {image.replace(/\.(jpeg|jpg)$/, '')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3 - 4 photos - Moving Down */}
                <div className="relative h-[350px] md:h-screen overflow-hidden flex-1 hidden lg:block">
                  <div className="flex flex-col gap-4 lg:gap-6 animate-marquee-vertical-down">
                    {[
                      "✨.jpeg",
                      "Appian HQ 💼.jpeg",
                      "Chennai ❤️.jpeg",
                      "Thailand 🇹🇭.jpeg"
                    ].map((image, index) => (
                      <div
                        key={image}
                        className="bg-white border border-gray-200 animate-float-up"
                        style={{
                          padding: '12px 12px 20px 12px',
                          boxShadow: '0 1px 2px 0 rgba(111, 111, 111, 0.05)',
                          animationDelay: `${(index + 9) * 0.1}s`
                        }}
                      >
                        <div className="overflow-hidden w-full" style={{ height: '280px' }}>
                          <Image
                            src={`/About me/${image}`}
                            alt={image.replace(/\.(jpeg|jpg)$/, '')}
                            width={240}
                            height={280}
                            className="w-full h-full object-cover"
                            quality={100}
                          />
                        </div>
                        <div className="mt-2">
                          <div className={`text-gray-400 text-xs ${geistMono.className}`}>
                            {image.replace(/\.(jpeg|jpg)$/, '')}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {[
                      "✨.jpeg",
                      "Appian HQ 💼.jpeg",
                      "Chennai ❤️.jpeg",
                      "Thailand 🇹🇭.jpeg"
                    ].map((image, index) => (
                      <div
                        key={`duplicate-${image}`}
                        className="bg-white border border-gray-200"
                        style={{
                          padding: '12px 12px 20px 12px',
                          boxShadow: '0 1px 2px 0 rgba(111, 111, 111, 0.05)'
                        }}
                      >
                        <div className="overflow-hidden w-full" style={{ height: '280px' }}>
                          <Image
                            src={`/About me/${image}`}
                            alt={image.replace(/\.(jpeg|jpg)$/, '')}
                            width={240}
                            height={280}
                            className="w-full h-full object-cover"
                            quality={100}
                          />
                        </div>
                        <div className="mt-2">
                          <div className={`text-gray-400 text-xs ${geistMono.className}`}>
                            {image.replace(/\.(jpeg|jpg)$/, '')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bio Content Section */}
          <div className="w-full md:w-[40%] md:h-screen flex flex-col px-6 py-8 lg:px-8 lg:py-12 mt-8 md:mt-0" style={{ paddingTop: '80px' }}>
            <motion.div
              variants={VARIANTS_SECTION}
              transition={TRANSITION_SECTION}
              className="flex flex-col max-w-lg mx-auto md:mx-0 md:justify-between md:h-full"
            >
              <div>
                {/* Title */}
                <div className="mb-6 lg:mb-8">
                  <h1 className={`text-3xl sm:text-3xl lg:text-3xl ${dmSans.className} mb-2`}>
                    <span className="font-normal text-zinc-500">Hey! I'm </span>
                    <span className="font-bold" style={{ color: '#0A7455' }}>Kaushik</span>
                    <span className="font-normal text-zinc-700"> ✨</span>
                  </h1>
                </div>

                <div className={`text-zinc-700 ${dmSans.className} mb-8`} style={{ fontSize: '17px', lineHeight: '1.7' }}>
                  <p className="mb-4">
                    A designer based out of Chennai, a city known for its culture, coffee, and endless sunshine. Like many Indian kids, I studied engineering, but somewhere along the way, I found myself drawn to design.

                  </p>
                  <p className="mb-4">

                    It all started with me making random posters in Photoshop and Illustrator just for fun. What began as a simple hobby slowly led me into the Product Design, and before I knew it, it became my full-time career 😅. I’ve spent the past few years creating experiences that felt simple, thoughtful, and human.



                  </p>
                  <p className="mb-4">



                    Beyond work, I’m deeply into photography, and I often stop at random places just to capture the light at the right moment. I also love exploring history, learning about different cultures, and finding stories hidden in food, music, and travel. Outside of all that, I’m usually watching movies or listening to music.



                  </p>
                  <p className="mb-4">



                    I’m also a big sports fan, CSK 💛 and Arsenal ❤️ keep me excited, hopeful, and occasionally heartbroken through the seasons.



                  </p>
                  <p className="mb-4">



                    I’m always curious about people and their stories. Up for a good conversation and happy to connect with like-minded folks 😇

                  </p>


                </div>

                {/* Social Links */}
                <div className="mb-4">
                  <h3 className={`font-medium tracking-wide ${geistMono.className} text-sm mb-3`} style={{ color: '#9CA3AF' }}>
                    Social Links
                  </h3>
                  <div className="flex items-center gap-2">
                    {SOCIAL_LINKS.filter(link => link.label === 'Instagram' || link.label === 'X.com').map((link, index) => (
                      <div key={link.label} className="flex items-center gap-2">
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${dmSans.className} text-zinc-600 hover:text-[#0A7455] hover:font-medium transition-all duration-200 flex items-center gap-2 text-sm`}
                        >
                          {link.label}
                          <svg
                            width="12"
                            height="12"
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
                            />
                          </svg>
                        </a>
                        {index === 0 && <span className="text-zinc-400 text-sm">•</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className={`text-xs text-gray-400 tracking-wide ${dmSans.className} text-center`}>
                Designed by Human 🧠 - Co-built with Claude 🤖 - Powered by Caffeine ☕️
              </div>
            </motion.div>
          </div>
        </motion.main>
      ) : (
        // Professional Mode - Two Column Layout
        <motion.main
          className="min-h-screen flex flex-col xl:flex-row xl:h-screen"
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Existing Content */}
          <div
            className="w-full xl:w-[45%] flex flex-col justify-between border-b xl:border-b-0 xl:border-r border-[#DFF5EE] relative px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-10 xl:px-24 xl:py-12 min-h-screen xl:max-h-screen xl:overflow-y-auto"
            style={{
              backgroundColor: '#FAFCFC'
              // Dark mode: backgroundColor: '#0F0F0F', border: 'border-zinc-800'
            }}
          >
            {/* Personal Mode Toggle */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:left-12 xl:left-24 z-10">
              <div className="flex items-center space-x-2 sm:space-x-3">
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
                    className={`relative block w-8 h-5 sm:w-10 sm:h-6 rounded-full cursor-pointer transition-colors duration-200 ${isPersonalMode ? 'bg-[#0A7455]' : 'bg-zinc-300 hover:bg-zinc-400'
                      // Dark mode: 'bg-zinc-700 hover:bg-zinc-600'
                      }`}
                  >
                    <div
                      className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-sm transition-all duration-200 flex items-center justify-center pointer-events-none"
                      style={{
                        top: isPersonalMode ? '0px' : '4px',
                        left: isPersonalMode ? '4px' : '4px'
                      }}
                    >
                      <span className={`text-xs ${isPersonalMode ? 'text-[#0A7455]' : 'text-zinc-600'}`}>✽</span>
                      {/* Dark mode: 'text-zinc-400' */}
                    </div>
                  </label>
                </div>
                <span className={`text-xs sm:text-sm lg:text-sm ${dmSans.className}`}>
                  <span className="text-zinc-900 font-bold">Behind pixels.</span>{' '}
                  <span className="text-zinc-600">A little about me, off the grid</span>
                  {/* Dark mode: text-zinc-100, text-zinc-400 */}
                </span>
              </div>
            </div>

            {/* Spacer for toggle */}
            <div style={{ marginTop: '20px' }} className="sm:mt-6"></div>



            {/* Profile Section */}
            <motion.section
              variants={VARIANTS_SECTION}
              transition={TRANSITION_SECTION}
              className="flex flex-col items-center text-center flex-grow"
            >
              {/* Profile Image */}
              {!isPersonalMode && (
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="rounded-full overflow-hidden mt-4 mb-2 bg-black w-32 h-32 sm:w-40 sm:h-40 lg:w-[170px] lg:h-[170px]">
                      <Image
                        src="/Professional.png"
                        alt="Kaushik R"
                        width={220}
                        height={220}
                        className="w-full h-full scale-100 object-cover"
                        style={{ objectPosition: 'center -43px' }}
                        quality={100}
                        priority
                      />
                    </div>

                    {/* Hello Badge */}
                    <div className="absolute bottom-2 -left-4 sm:bottom-3 sm:-left-6">
                      <div
                        className="hello-chip rounded-full px-3 py-1 flex items-center border-1 gap-1.5 cursor-pointer"
                        style={{ backgroundColor: '#fefefe' }}
                      >
                        <span className="wave-emoji text-md inline-block origin-bottom-right">👋</span>
                        <span className="hello-text text-sm font-medium text-gray-800">Hello</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Name */}
              {!isPersonalMode && (
                <h1 className={`font-medium tracking-wide ${beautyDemo.className} text-6xl sm:text-7xl lg:text-8xl xl:text-9xl`} style={{ color: '#0A7455', lineHeight: '1.0', marginTop: '16px', marginBottom: '12px' }}>
                  Kaushik
                </h1>
              )}

              {/* Bio Text */}
              <div className={`text-zinc-700 tracking-normal ${dmSans.className} px-2 sm:px-4 lg:px-0`} style={{ fontSize: isPersonalMode ? 'clamp(16px, 3.5vw, 22px)' : 'clamp(13px, 2.2vw, 16px)', lineHeight: '1.6', marginTop: isPersonalMode ? '32px' : '8px', textAlign: 'center' }}>
                {/* Dark mode: color: '#F3F4F6' instead of text-zinc-700 */}
                {!isPersonalMode && (
                  <>
                    <p style={{ marginTop: '8px' }}>
                      I’m a <span className="font-bold">Senior Product Designer</span> from Chennai, India with around 6 years of experience turning <span className="font-bold"> Complexity  →  Clarity</span> through user-focused, scalable digital experiences.
                    </p>
                    <p style={{ marginTop: '16px' }}>
                      I specialize in designing human-centered digital experiences across low-code/no-code platforms and fintech, applying systems thinking to create solutions that are both intuitive and accessible. At Appian, I work on enhancing data management experiences within the Data Fabric, helping organizations unify, manage, and leverage their data effectively. Over the years, I’ve collaborated closely with cross-functional teams, guided end-to-end product journeys, and delivered initiatives that drive meaningful impact for users at scale.
                    </p>
                  </>
                )}
              </div>

              {/* Compact Experience Section */}
              {!isPersonalMode && (
                <div style={{ marginTop: '20px' }} className="sm:mt-7">
                  <h3 className={`font-medium tracking-wide ${geistMono.className} text-xs sm:text-sm sm:mb-6 text-gray-500`} style={{ marginBottom: '16px' }}>
                    Career Journey
                  </h3>
                  <div className="flex items-center justify-center overflow-x-auto px-2">
                    {WORK_EXPERIENCE.map((job) => (
                      <div key={job.id} className="flex items-center">
                        <div className="flex flex-col items-center">
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-200 hover:opacity-80"
                            onMouseEnter={(e) => {
                              if (job.company === 'Appian Corporation') {
                                const img = e.currentTarget.querySelector('img');
                                if (img) {
                                  img.style.filter = 'brightness(0) saturate(100%) invert(18%) sepia(100%) saturate(7482%) hue-rotate(240deg) brightness(100%) contrast(100%)';
                                }
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (job.company === 'Appian Corporation') {
                                const img = e.currentTarget.querySelector('img');
                                if (img) {
                                  img.style.filter = 'none';
                                }
                              }
                            }}
                          >
                            <Image
                              src={job.logo}
                              alt={job.company}
                              width={job.company === 'Appian Corporation' ? 83 : 106}
                              height={30}
                              unoptimized
                              className={`object-contain transition-all duration-200 ${job.company === 'Appian Corporation'
                                ? 'mr-4 sm:mr-8'
                                : 'grayscale hover:grayscale-0'
                                }
                            `}
                              style={{ height: '24px' }}
                            />
                          </a>
                          <div className={`text-xs text-gray-500 text-center sm:mt-1.5 ${job.company === 'Appian Corporation' ? 'mr-4 sm:mr-8' : 'mr-1 sm:mr-2'}`} style={{ marginTop: '4px' }}>
                            <span className="hidden sm:inline">{job.start} - {job.end}</span>
                            <span className="sm:hidden">{job.start.slice(-2)} - {job.end.slice(-2)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}






            </motion.section>





            {!isPersonalMode && (
              <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="flex flex-col items-center flex-shrink-0"
              >
                {/* Separator */}
                <div className="flex items-center w-full mb-4 mt-6">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  {/* Dark mode: bg-zinc-800 */}
                  <div
                    className="mx-6 text-xl cursor-pointer separator-icon"
                    style={{
                      color: '#0A7455',
                      animation: 'spin 8s linear infinite'
                    }}
                  >✽</div>
                  <div className="flex-1 h-px bg-gray-200"></div>
                  {/* Dark mode: bg-zinc-800 */}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
                  {SOCIAL_LINKS.filter(link => link.label !== 'Instagram' && link.label !== 'X.com').map((link, index, filteredArray) => (
                    <span key={link.label} className="flex items-center">
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${dmSans.className} text-zinc-600 hover:text-[#0A7455] transition-colors duration-200 flex items-center gap-1 text-sm`}
                      // Dark mode: text-zinc-400
                      >
                        {link.label}
                        <svg
                          width="12"
                          height="12"
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
                          />
                        </svg>
                      </a>
                      {index < filteredArray.length - 1 && (
                        <span className="mx-3 text-zinc-400 hidden sm:inline">•</span>
                        /* Dark mode: text-zinc-600 */
                      )}
                    </span>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Right Column - Works Content */}
          <div
            className="w-full xl:w-[55%] flex flex-col px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 lg:px-12 lg:pt-16 lg:pb-20 xl:px-16 xl:pt-18 xl:pb-24 overflow-y-auto max-h-screen"
          // Dark mode: style={{ backgroundColor: '#111111' }}
          >
            <motion.section
              variants={VARIANTS_SECTION}
              transition={TRANSITION_SECTION}
              className="flex flex-col justify-start"
            >
              <div className="flex flex-col">
                <div className="flex justify-center space-x-4 sm:space-x-8 sm:mb-7" style={{ marginBottom: '20px' }}>
                  <button
                    onClick={() => setActiveTab('case-studies')}
                    className={`pb-2 px-1 ${activeTab === 'case-studies' ? 'font-semibold' : 'font-medium'} tracking-wide ${geistMono.className} text-sm border-b-2 border-transparent transition-colors relative cursor-pointer ${activeTab !== 'case-studies' ? 'hover:text-gray-700 group' : ''}`}
                    style={{ color: activeTab === 'case-studies' ? '#0A7455' : '#6B7280' }}
                  >
                    Selected Works
                    {activeTab === 'case-studies' && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1"
                        style={{
                          background: `url("data:image/svg+xml,%3csvg width='40' height='8' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0,4 Q10,0 20,4 T40,4' stroke='%230A7455' stroke-width='3' fill='none' stroke-linecap='round'/%3e%3c/svg%3e")`,
                          backgroundSize: '20px 4px',
                          backgroundRepeat: 'repeat-x'
                        }}
                      />
                    )}
                    {activeTab !== 'case-studies' && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: `url("data:image/svg+xml,%3csvg width='40' height='8' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0,4 Q10,0 20,4 T40,4' stroke='%23666666' stroke-width='3' fill='none' stroke-linecap='round'/%3e%3c/svg%3e")`,
                          backgroundSize: '20px 4px',
                          backgroundRepeat: 'repeat-x'
                        }}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('visual-snippets')}
                    className={`pb-2 px-1 ${activeTab === 'visual-snippets' ? 'font-semibold' : 'font-medium'} tracking-wide ${geistMono.className} text-sm border-b-2 border-transparent transition-colors relative cursor-pointer ${activeTab !== 'visual-snippets' ? 'hover:text-gray-700 group' : ''}`}
                    style={{ color: activeTab === 'visual-snippets' ? '#0A7455' : '#6B7280' }}
                  >
                    Visual Snippets
                    {activeTab === 'visual-snippets' && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1"
                        style={{
                          background: `url("data:image/svg+xml,%3csvg width='40' height='8' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0,4 Q10,0 20,4 T40,4' stroke='%230A7455' stroke-width='3' fill='none' stroke-linecap='round'/%3e%3c/svg%3e")`,
                          backgroundSize: '20px 4px',
                          backgroundRepeat: 'repeat-x'
                        }}
                      />
                    )}
                    {activeTab !== 'visual-snippets' && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: `url("data:image/svg+xml,%3csvg width='40' height='8' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0,4 Q10,0 20,4 T40,4' stroke='%23666666' stroke-width='3' fill='none' stroke-linecap='round'/%3e%3c/svg%3e")`,
                          backgroundSize: '20px 4px',
                          backgroundRepeat: 'repeat-x'
                        }}
                      />
                    )}
                  </button>
                </div>



                {/* Tab Content */}
                <div className="sm:mt-6" style={{ marginTop: '16px' }}>
                  {activeTab === 'case-studies' && (
                    <div className="relative">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {PROJECTS.map((project, index) => (
                          <div key={project.id} className="bg-white rounded-2xl border border-gray-200 flex flex-col h-full overflow-hidden">
                            {/* Thumbnail Image */}
                            <div className="w-full h-48 overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.name}
                                width={400}
                                height={240}
                                className="w-full h-full object-cover"
                                priority={index < 2}
                                onError={(e) => {
                                  console.error('Image failed to load:', project.image, e);
                                }}
                              />
                            </div>

                            {/* Content with padding */}
                            <div className="p-6 flex flex-col flex-grow">

                              {/* Company | Shipped | Year */}
                              <p className={`text-gray-500 ${dmSans.className}`} style={{ fontSize: '14px', marginBottom: '4px' }}>
                                {project.company} &nbsp;•&nbsp; {project.status} &nbsp;•&nbsp; {project.year}
                              </p>

                              {/* Title */}
                              <h3 className={`font-bold text-black ${dmSans.className}`} style={{ fontSize: '20px', marginBottom: '16px' }}>
                                {project.name}
                              </h3>

                              {/* Description */}
                              <p className={`text-gray-600 ${dmSans.className} flex-grow`} style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '16px' }}>
                                {project.description}
                              </p>

                              {/* Action Links */}
                              <div className="flex items-center mt-auto">
                                {project.caseStudyLink ? (
                                  <a
                                    href={project.caseStudyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-colors duration-200 hover:underline ${dmSans.className} inline-block`}
                                    style={{ color: '#0A7455', fontSize: '16px' }}
                                    onMouseEnter={(e) => {
                                      if (index < 3) { // Only show tooltip for first 3 cards
                                        setCaseStudyTooltip({ show: true, x: e.clientX, y: e.clientY })
                                      }
                                    }}
                                    onMouseLeave={() => setCaseStudyTooltip({ show: false, x: 0, y: 0 })}
                                    onMouseMove={(e) => {
                                      if (index < 3) {
                                        setCaseStudyTooltip({ show: true, x: e.clientX, y: e.clientY })
                                      }
                                    }}
                                  >
                                    View Case Study
                                  </a>
                                ) : (
                                  <span
                                    className={`text-gray-400 ${dmSans.className} inline-flex items-center gap-1`}
                                    style={{ fontSize: '16px' }}
                                    onMouseEnter={(e) => {
                                      if (index < 3) { // Only show tooltip for first 3 cards
                                        setCaseStudyTooltip({ show: true, x: e.clientX, y: e.clientY })
                                      }
                                    }}
                                    onMouseLeave={() => setCaseStudyTooltip({ show: false, x: 0, y: 0 })}
                                    onMouseMove={(e) => {
                                      if (index < 3) {
                                        setCaseStudyTooltip({ show: true, x: e.clientX, y: e.clientY })
                                      }
                                    }}
                                  >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6 10V8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V10M5 10H19C19.5523 10 20 10.4477 20 11V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V11C4 10.4477 4.44772 10 5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    View Case Study
                                  </span>
                                )}
                                {project.id !== 'project4' && (
                                  <>
                                    <span className={`mx-2 text-gray-400 ${dmSans.className}`} style={{ fontSize: '16px' }}>•</span>
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`transition-colors duration-200 hover:underline ${dmSans.className}`}
                                      style={{ color: '#0A7455', fontSize: '16px' }}
                                    >
                                      Documentation
                                    </a>
                                  </>
                                )}
                                {project.video && (
                                  <>
                                    <span className={`mx-2 text-gray-400 ${dmSans.className}`} style={{ fontSize: '16px' }}>•</span>
                                    <a
                                      href={project.video}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`transition-colors duration-200 hover:underline ${dmSans.className}`}
                                      style={{ color: '#0A7455', fontSize: '16px' }}
                                    >
                                      Demo
                                    </a>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>


                    </div>
                  )}

                  {activeTab === 'visual-snippets' && (
                    <div className="relative">
                      <div className={`text-center mb-8 -mt-2 text-gray-400 ${dmSans.className}`} style={{ fontSize: '14px' }}>
                        A few visual highlights from my design work
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {VISUAL_SNIPPETS.map((snippet, index) => (
                          <div key={snippet.id} className="w-full h-auto bg-white border border-gray-200 overflow-hidden rounded-lg">
                            <Image
                              src={snippet.image}
                              alt={snippet.title}
                              width={900}
                              height={600}
                              className="w-full h-full object-contain cursor-pointer rounded-lg"
                              priority={index < 2}
                              onClick={() => {
                                setEnlargedImage(snippet.image)
                                setCurrentImageIndex(index)
                              }}
                              onMouseEnter={(e) => setTooltip({ show: true, x: e.clientX, y: e.clientY })}
                              onMouseLeave={() => setTooltip({ show: false, x: 0, y: 0 })}
                              onMouseMove={(e) => {
                                setTooltip({ show: true, x: e.clientX, y: e.clientY });
                              }}
                              onError={(e) => {
                                console.error('Image failed to load:', snippet.image, e);
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          </div>
        </motion.main>
      )
      }

      {/* Tooltip */}
      {tooltip.show && (
        <div
          className="fixed z-40 pointer-events-none text-white text-xs px-3 py-2 rounded-full"
          style={{
            backgroundColor: '#0A7455',
            left: tooltip.x - 50,
            top: tooltip.y + 20,
          }}
        >
          Click to enlarge
        </div>
      )}

      {/* Case Study Tooltip */}
      {caseStudyTooltip.show && (
        <div
          className="fixed z-40 pointer-events-none text-white text-xs px-3 py-2 rounded-full"
          style={{
            backgroundColor: '#0A7455',
            left: caseStudyTooltip.x - 50,
            top: caseStudyTooltip.y + 20,
          }}
        >
          Let's Connect
        </div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
          >
            <div className="relative flex items-center justify-center w-full h-full max-w-screen-xl">
              {/* Previous arrow - outside image */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                className="absolute left-4 z-10 text-2xl font-medium opacity-60 hover:opacity-100 transition-opacity duration-200 rounded-full w-10 h-10 flex items-center justify-center"
                style={{
                  lineHeight: '1',
                  backgroundColor: '#94BDB2',
                  color: '#325E52'
                }}
              >
                ‹
              </button>

              {/* Image container */}
              <motion.div
                className="relative max-w-7xl max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={enlargedImage}
                  alt="Enlarged visual snippet"
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  quality={100}
                />

                {/* Close button */}
                <button
                  onClick={() => setEnlargedImage(null)}
                  className="absolute top-4 right-4 text-2xl font-medium opacity-60 hover:opacity-100 transition-opacity duration-200"
                  style={{
                    color: '#325E52'
                  }}
                >
                  ×
                </button>


              </motion.div>

              {/* Next arrow - outside image */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                className="absolute right-4 z-10 text-2xl font-medium opacity-60 hover:opacity-100 transition-opacity duration-200 rounded-full w-10 h-10 flex items-center justify-center"
                style={{
                  lineHeight: '1',
                  backgroundColor: '#94BDB2',
                  color: '#325E52'
                }}
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Loading Screen with Blur Effect - Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Blurred Background */}
            <div
              className="absolute inset-0 bg-white/40"
              style={{
                backdropFilter: 'blur(35px)',
                WebkitBackdropFilter: 'blur(35px)'
              }}
            />

            {/* Loading Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
              {/* Loading Icon */}
              <motion.div
                className="mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  className="text-5xl"
                  style={{
                    color: '#0A7455',
                    transformOrigin: 'center center'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  ✻
                </motion.div>
              </motion.div>

              {/* Loading Text */}
              <motion.div
                className={`text-center ${dmSans.className}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="text-3xl font-medium" style={{ color: '#0A7455' }}>
                  Making things pop, tastefully
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
