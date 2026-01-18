'use client'

import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section !bg-[#1C1C1E] !p-8 !w-full lg:!w-[35%] flex flex-col items-center text-center gap-6 rounded-[32px]">
      <div className="cta-badge bg-[#FFDA6E] text-black text-sm font-bold px-4 py-2 rounded-full">
        Start learning your way.
      </div>
      <h2 className="text-3xl font-bold text-white leading-tight">
          Build a Personalized Learning Companion
      </h2> 
        <p className="text-gray-400 text-sm leading-relaxed px-4">
          Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.
        </p>

        <div className="relative w-full flex justify-center py-4">
             <Image src="/images/cta.svg" alt="cta" width={362} height={232} className="object-contain" />
        </div>

          <Link href="/companion/new" className='w-full bg-[#FF5C35] hover:bg-[#ff441f] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors'>
            <Image src="/icons/plus.svg" alt="plus" width={16} height={16}/>
            Build New Companion
          </Link>
    </section>
  )
}


export default CTA