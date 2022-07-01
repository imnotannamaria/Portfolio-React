import { BracketsCurly, Briefcase, Browser } from "phosphor-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export function ProjectsPage() {
    return (
        <>
            <Header/>
                <div className="flex flex-col gap-20">
                    <div className="flex justify-between bg-gray-400 p-2 rounded lg:p-4">
                        <Link to="/" className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-gray-600 transition-colors lg:text-xl lg:px-8">
                            Projects
                            <Browser size={20} />
                        </Link>
                        <Link to="/skills" className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-gray-600 transition-colors lg:text-xl lg:px-8">
                            Skills
                            <BracketsCurly size={20} />
                        </Link>
                        <Link to="/experience" className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-gray-600 transition-colors lg:text-xl lg:px-8">
                            Experience
                            <Briefcase size={20} />
                        </Link>
                    </div>

                    <Projects/>
                </div>
            <Footer/>
        </>
    )
}