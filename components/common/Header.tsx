



import { FileText} from 'lucide-react'
import { Button } from '../ui/button'
import NavLink from './nav-link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  
  return (
    <nav className=' container flex justify-between items-center py-4 lg:px-20 px-3 mx-auto'>
      <div className='flex '>
        <NavLink href='/' className='flex items-center gap-1 lg:gap-2 shrink-0'>
        <FileText className='h-5 w-5 lg:h-8 lg:w-8 text-gray-900 hover:rotate-12 transition duration-200 ease-in-out' />
        <span className='font-extrabold text-xl lg:text-2xl text-gray-900'>Summaries</span></NavLink>
      </div>
      <div className='flex gap-4 lg:gap-12 lg:justify-center lg:items-center xl:justify-center'>
        <NavLink href='/pricing'>Pricing</NavLink>
        <SignedIn>
        <NavLink href='/dashboard'>Dashboard</NavLink>
        </SignedIn>
      </div>

      <div className='flex lg:justify-end items-center gap-4'>
        <SignedIn>
          <div className='flex gap-4 items-center'>
            <NavLink href='/upload'>upload a PDF</NavLink>
            <div >
              Pro
              </div>
              <SignedIn>
                <UserButton/>
              </SignedIn>
          </div>

        </SignedIn>

        <SignedOut>
        <NavLink href='/sign-in'>Sign In</NavLink>
        </SignedOut>
      </div>
    </nav>
  )
}

export default Header