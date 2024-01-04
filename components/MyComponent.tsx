import Image from 'next/image'
import React from 'react'

export const MyComponent = ()=>(
  <Image
    src='/images/profile.jpg'
    height={144}
    width={144}
    alt='name'
  />
)
