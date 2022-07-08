import { Briefcase } from "phosphor-react";

interface ExperienceProps {
    year: number;
    jobPosition: string;
    company: string;
    description: string;
}

export function Experience(props: ExperienceProps) {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-start gap-2">
                <div className="flex items-center gap-2">
                    <span className="bg-purple-400 px-4 py-2 rounded-3xl font-bold text-yellow-400">{props.year}</span>

                    <span className="text-yellow-400"><Briefcase size={30} /></span>
                </div>

                <div className="flex flex-col gap-4">
                    <strong className="text-xl text-purple-200 mt-2">{props.jobPosition}</strong>
                    <span className="text-xl text-yellow-400 font-medium">{props.company}</span>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}