import { cn } from "@/lib/utils";
import Link from "next/link";

type PriceType = {
    id: string;
    name: string;
    price: number;
    description: string;
    items: string[];
    paymentLink: string;
}

const plans = [
    {
        id: 'basic',
        name: 'Basic',
        price: 0,
        description: 'Free plan for individuals and small teams.',
        items: [
            'Up to 5 projects',
            'Basic support',
            'Limited integrations'
        ],
        paymentLink: 'https://sommaire.com/basic',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 49,
        description: 'Advanced features for growing teams.',
        items: [
            'Unlimited projects',
            'Priority support',
            'Advanced integrations'
        ],
        paymentLink: 'https://sommaire.com/pro',
    },
];

const PricingCard = ({ name, price, description, items, id, paymentLink }: PriceType) => {
    return <div className="relative w-full max-w-lg">
        <div className={cn("relative flex flex-col  gap-4 lg:gap-8 z-10 border-[1px] border-gray-500/20 rounded-2xl  p-6 h-full  shadow-lg", id === "pro" && 'border-rose-500')}>
            <div className="flex justify-between items-center gap-4">
                <div>
                    <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
                    <p className="text-base-content/80 mt-2">{description}</p>
                </div>

            </div>

            <div className="flex gap-2">
                <p className="text-5xl tracking-tight font-extrabold"  >${price}</p>
                <div>
                    <p className="text-sm uppercase font-semibold">USD</p>
                    <p className="text-xs">/month</p>
                </div>
            </div>
            <div>
                {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
            
            </div>
            <div>
                <Link href={paymentLink}>Buy Now</Link>
            </div>

        </div>
    </div>
}


export default function PricePage() {
    return <section>
        <div className="py-12 lg:py-24vmax-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
            <div>
                <h2>Pricing</h2>
            </div>
            <div className="relative flex flex-col items-center justify-center  lg:flex-row lg:items-stretch gap-8 lg:gap-12">
                {plans.map((plan) => (<PricingCard key={plan.id} {...plan} />))}
            </div>
        </div>
    </section>
}