import { BracketsCurly, Briefcase, Browser} from "phosphor-react";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function Menu() {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex justify-between bg-gray-400 p-2 rounded lg:p-4">
                <button className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-gray-600 transition-colors lg:text-xl lg:px-8">
                    Projects 
                    <Browser size={20} />
                </button>
                <button className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-gray-600 transition-colors lg:text-xl lg:px-8">
                    Skills
                    <BracketsCurly size={20} />
                </button>
                <button className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-gray-600 transition-colors lg:text-xl lg:px-8">
                    Experience
                    <Briefcase size={20} />
                </button>
            </div>

            <Projects/>
            <Skills/>
            <Experience/>
        </div>
    )
}