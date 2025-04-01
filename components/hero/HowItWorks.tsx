import { BrainCircuit, FileOutput, FileText } from "lucide-react";
import {ReactNode} from "react";

type step = {
    title: string;
    description: string;
    icon: ReactNode;
}

const steps: step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    title: "Upload your PDF", 
    description: "Simply drag and drop your PDF file into our user-friendly interface, and watch as we work our magic.",
},
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    title: "AI analysis", 
    description: "Our AI-powered engine will analyze the content and generate a concise summary, highlighting the key points.",
},
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    title: "Get your summary", 
    description: "Easily download your summary or share it with colleagues and friends for quick insights.",}
]





export default function HowItWorks() {
    return <section className="relative ">
         <div className="py-12 lg:py-24vmax-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
          <div className="text-center mb-12 space-y-4">
            <h2 className=" uppercase text-rose-600 text-2xl font-bold ">How it works</h2>
            <h3 className=" text-gray-900 text-3xl max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 font-bold">
              Transform any PDF into an easy-to-digest summary in three simple steps 
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto relative max-w-6xl">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <div className="mb-4 text-rose-500">
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))

            }
         </div>
         </div>
    </section>
  }
