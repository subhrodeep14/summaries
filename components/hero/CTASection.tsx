import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"


const CTASection = () => {
  return (
    <section className="bg-gray-50 py-12">
        <div className="py-12 lg:py-24vmax-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
            <div className="relative flex flex-col items-center mx-auto justify-center gap-8 space-y-4 lg:gap-14">
              <div className="text-center gap-4 lg:gap-8">
                <h2 className="text-3xl  sm:text-4xl font-bold tracking-tighter md:text-5xl mb-4">Ready to Save Hours of Reading Time ?</h2>
                <p className="text-md mx-auto  text-gray-500 max-w-2xl md:text-xl/relaxed lg:text-base/relaxed">
                  Transform lengthy articles into concise summaries with our AI-powered tool.
                  <br />
                </p>
              </div>
              <div className="flex flex-col min-[400px]:flex-row gap-4 lg:flex-row lg:gap-8">
                <div>
                  <Button
                  size={'lg'}
                  variant={'link'}
                  className=" w-full min-[400px]:w-auto bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:text-white transition-all duration-300 text-white hover:underline-none ">
                  <Link href='/#pricing' className="flex items-center justify-center gap-2 px-6 py-4">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 animate-pulse"></ArrowRight>
                  </Link>
                  </Button>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default CTASection
