"use client"

import Image from "next/image"

export default function Logo() {
  return (
    <div className="w-[100px] h-[26px] relative">
      {/* Dark theme logo - visible in light mode */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity">
        <Image src="/images/ezoiclogodrk.png" alt="Ezoic Logo" fill sizes="100px" priority className="object-contain" />
      </div>
      {/* Light theme logo - visible in dark mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity">
        <Image src="/images/ezoiclogolite.png" alt="Ezoic Logo" fill sizes="100px" priority className="object-contain" />
      </div>
    </div>
  )
}
