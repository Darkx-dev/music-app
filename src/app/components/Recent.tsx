import React from 'react'
import Image from 'next/image'
import recent1 from '@/assets/images/recent1.png'
import recent2 from '@/assets/images/recent2.png'
import recent3 from '@/assets/images/recent3.png'

export default function Recent() {
  return (
    <div className='recent__card'>
    <div className="recent__image">
        <Image
          src={recent1}
          alt="recent"
          width={100}
          height={80}
        />
    </div>
    <p className="recent__song_title text-sm text-center font-light mt-2">
        The triangle
    </p>
    </div>
  )
}
