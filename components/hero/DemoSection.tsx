import { Pizza } from "lucide-react";

export default function DemoSection() {
    return (
        <section>
            <div className="py-12 lg:py-24vmax-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="inline-flex items-center justify-center p-2 bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 rounded-full  mb-4">
                    <Pizza className="w-6 h-6 text-rose-500"/>
                    </div>
                    <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
                        Watch how Sommaire transforms <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent"> this Next course PDF</span> into an easy-to-read beautiful summaries.
                        
                    </h3>
                </div>

                <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">

                </div>

            </div>
        </section>
    )
}