import { gql, useQuery } from "@apollo/client";
import { SpinnerGap } from "phosphor-react";
import { Experience } from "../components/Experience";

const GET_EXPIRIENCE_QUERY = gql`
    query GetExperience {
        experiences(first:100) {
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
            <div className="flex-1 gap-2 flex justify-center items-center text-2xl font-bold">
                Loading <SpinnerGap size={30} weight="bold" />
            </div>
        )
    }
    
    return (
        <div>
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
    )
}