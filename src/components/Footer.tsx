import { Copyright } from "phosphor-react";

export function Footer() {
    return (
        <div className="flex items-center justify-center text-sm p-4 gap-2 md:text-lg lg:text-xl lg:p-8">
            <span><Copyright size={24} /></span>
            <span>Anna Maria</span>
            <span className="mx-4 text-lg font-bold">.</span>
            <span>All rigths reserved</span>
        </div>
    )
}