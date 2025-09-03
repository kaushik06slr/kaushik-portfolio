'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
     {/* <div className="flex items-center gap-4 mb-4"> 
  <Image
    src="/kaushik.jpg"
    alt="A photo of Kaushik R"
    width={100} 
    height={100}
    className="rounded-md object-contain" 
  />
</div>  */}
        <Link href="/" className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide text-center bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
          Kaushik
        </Link>
      </div>
    </header>
  )
}
