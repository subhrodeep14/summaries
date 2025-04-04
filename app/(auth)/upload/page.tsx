import { Badge } from '@/components/ui/badge'
import { Sparkles } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
   <section className='min-h-screen bg-amber-100/30'>
    <div className=' mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 justify-center gap-4'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <div>
            <Badge 
            variant={'secondary'}
            className='relative px-6 py-2 text-base font-medium  rounded-full group-hover:bg-gray-50  transition-colors duration-200 ease-in-out hover:scale-105'            
            >
                <Sparkles className='h-6 w-6 mr-2 text-rose-600 animate-pulse'/>
                <span className='text-base'>
                    AI-Powered Content Creation
                </span>
            </Badge>
            </div>
            <h1>Start Uploading Your PDF's</h1>
            <p>Upload Your PDF and Let our AI do the magic </p>
        </div>
    </div>

   </section>
  )
}

export default page
