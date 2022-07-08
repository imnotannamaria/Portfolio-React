import { gql, useQuery } from "@apollo/client";
import { BracketsCurly, Briefcase, Browser } from "phosphor-react";
import { Link } from "react-router-dom";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const GET_EXPIRIENCE_QUERY = gql`
    query GetExperience {
        experiences {
            year
            jobPosition
            company
            description
        }
    }
`

interface GetExperienceQueryResponse {
    experiences: {
        id: string;
        year: number;
        jobPosition: string;
        company: string;
        description: string;
    }[]
}

export function ExperiencePage() {
    const { data } = useQuery<GetExperienceQueryResponse>(GET_EXPIRIENCE_QUERY)

    if(!data){
        return (
            <div className="flex-1 flex justify-center items-center text-xl font-bold">
                Carregando...✨
            </div>
        )
    }
    
    return (
        <>
            <Header/>
                <div className="flex flex-col gap-20">
                    <div className="flex justify-between bg-purple-450 p-2 rounded lg:p-4">
                        <Link to="/" className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-purple-600 transition-colors lg:text-xl lg:px-8">
                            Projects
                            <Browser size={20} />
                        </Link>
                        <Link to="/skills" className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-purple-600 transition-colors lg:text-xl lg:px-8">
                            Skills
                            <BracketsCurly size={20} />
                        </Link>
                        <Link to="/experience" className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-purple-600 transition-colors lg:text-xl lg:px-8">
                            Experience
                            <Briefcase size={20} />
                        </Link>
                    </div>

                    {data?.experiences.map(experience => {
                        return (
                            <Experience
                                key={experience.id}
                                year={experience.year}
                                jobPosition={experience.jobPosition}
                                company={experience.company}
                                description ={experience.description}
                            />
                        )    
                    })}

                </div>
            <Footer/>
        </>
    )
}