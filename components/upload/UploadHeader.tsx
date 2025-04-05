import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

export default function UploadHeader() {
  return (
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
            <div className=' capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            <h1>Start Uploading Your PDF's</h1>
            </div>
            <div className=' mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center'>
            <p>Upload Your PDF and Let our AI do the magic </p>
            </div>
            
        </div>
  );
}