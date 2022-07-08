import { gql, useQuery } from "@apollo/client";
import { BracketsCurly, Briefcase, Browser, SpinnerGap } from "phosphor-react";
import { Link } from 'react-router-dom'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Project } from "../components/Project";

const GET_PROJECTS_QUERY = gql`
    query GetProjects {
        projects {
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
                </div>
            <Footer/>
        </>
    )
}