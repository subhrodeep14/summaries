import React from 'react'
import { Button } from '../ui/button'
import { Sparkle, Sparkles } from 'lucide-react'
import { Badge } from '../ui/badge'

const HeroSection = () => {
  return (
   <section className='relative mx-auto flex flex-col justify-center items-center z-0 py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl'>
    <div className='relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group'>
      <Badge
      variant={'secondary'}
      className=' py-2 px-6 text-base font-medium rounded-full group-hover:bg-gray-50 transition-colors duration-200 bg-white '>
      <Sparkles className='w-6 h-6 text-rose-600 animate-pulse mr-2' />
      <p className='text-base text-rose-600'>Powered by AI</p>
      </Badge>

    </div>
    <div>
      <h1 className='font-bold py-6 text-center'>Transfrom PDFs into concise summaries</h1>
    </div>
    <div>
      <h2 className='text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600 py-5'>Get a beautiful reel of the document in seconds</h2>
    </div>
    <div>
      <Button>Get Started</Button>
    </div>
   </section>
  )
}

export default HeroSection
