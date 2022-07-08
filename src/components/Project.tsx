import { GithubLogo, Link } from 'phosphor-react'

interface ProjectsProps {
    imageUrl: string;
    title: string;
    description: string;
    githubLink: string;
    siteLink: string;
}

export function Project(props: ProjectsProps) {
    return (
        <div>
                <img className="rounded w-full" src={props.imageUrl} alt="" />

                <div className="flex flex-col items-center bg-purple-700 pt-4 pb-2 px-4 gap-2">
                    <span className="block text-xl font-bold">{props.title}</span>
                    <span className="block text-sm">{props.description}</span>    
                </div>
                
                <div className="flex justify-center gap-2 bg-purple-700 p-4 rounded-b-lg">
                    <a href={props.siteLink} target="_blank" className="bg-purple-300 p-4 rounded-full hover:opacity-80 transition-opacity">
                        <Link size={25} />
                    </a>
                    <a href={props.githubLink} target="_blank" className="bg-purple-300 p-4 rounded-full hover:opacity-80 transition-opacity">
                        <GithubLogo size={24} />
                    </a>
                </div>
            </div>
    )
}