import { gql, useQuery } from "@apollo/client";
import { SpinnerGap } from "phosphor-react";
import { Skills } from "../components/Skills";

const GET_SKILLS_QUERY = gql`
    query GetSkills {
        skills(first:100) {
            id
            image {
            url
            }
            title
        }
    }
`

interface GetSkillsQueryResponse {
    skills: {
        id: string;
        image: {
            url: string;
        }
        title: string;
    }[]
}

export function SkillsPage() {
    const { data } = useQuery<GetSkillsQueryResponse>(GET_SKILLS_QUERY)

    if(!data){
        return (
            <div className="flex-1 gap-2 flex justify-center items-center text-2xl font-bold">
                Loading <SpinnerGap size={30} weight="bold" />
            </div>
        )
    }
    
    return (
        <div className="grid gap-8 lg:grid-cols-2">
            {data?.skills.map(skill => {
                return (
                    <Skills
                        key={skill.id}
                        imageUrl={skill.image.url}
                        title={skill.title}
                    />
                )    
            })}
        </div>
    )
}