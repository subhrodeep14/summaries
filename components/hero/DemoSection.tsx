import { Pizza } from "lucide-react";

export default function DemoSection() {
    return (
        <section>
            <div className="py-12 lg:py-24vmax-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    <Pizza className="w-6 h-6 text-rose-500"/>
                    <h3>
                        Watch how Sommaire transforms your notes into beautiful summaries.
                        
                    </h3>
                </div>

            </div>
        </section>
    )
}