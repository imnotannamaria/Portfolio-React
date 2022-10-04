import { gql, useQuery } from "@apollo/client";
import { SpinnerGap } from "phosphor-react";
import { Project } from "../components/Project";

const GET_PROJECTS_QUERY = gql`
    query GetProjects {
        projects(first:100) {
            id
            title
            description
            githubLink
            siteLink
            image{
                url
            }
        }
    }
`

interface GetProjectsQueryResponse {
    projects: {
        id: string;
        title: string;
        description: string;
        githubLink: string;
        siteLink: string;
        image: {
            url: string;
        }
    }[]
}

export function ProjectsPage() {
    const { data } = useQuery<GetProjectsQueryResponse>(GET_PROJECTS_QUERY)

    if(!data){
        return (
            <div className="flex-1 gap-2 flex justify-center items-center text-2xl font-bold">
                Loading <SpinnerGap size={30} weight="bold" />
            </div>
        )
    }

    return (
    <div className="grid gap-8 lg:grid-cols-2">
        {data?.projects.map(project => {
            return (
                <Project
                    key={project.id}
                    imageUrl={project.image.url}
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    siteLink={project.siteLink}
                />
            )
        })}
    </div>
    )
}