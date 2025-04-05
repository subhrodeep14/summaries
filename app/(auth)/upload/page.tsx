
import UploadForm from '@/components/upload/UploadForm'
import UploadHeader from '@/components/upload/UploadHeader'


const page = () => {
  return (
   <section className='min-h-screen bg-amber-100/30'>
    <div className=' mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 '>
        <div className='flex justify-center items-center flex-col gap-6 text-center'>
        <UploadHeader/>
        <UploadForm/>
        </div>
        
    </div>

   </section>
  )
}

export default page
