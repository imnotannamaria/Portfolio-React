import { Briefcase } from "phosphor-react";

export function Experience() {
    return (
        <div className="flex items-start gap-2">
            <div className="flex items-center gap-2">
                <span className="bg-purple-400 px-4 py-2 rounded-3xl font-bold text-yellow-400">2022</span>

                <span className="text-yellow-400"><Briefcase size={30} /></span>
            </div>

            <div className="flex flex-col gap-4">
                
                <strong className="text-xl text-purple-200 mt-2">Software Analist</strong>
                <span className="text-xl text-yellow-400 font-medium">Avanade</span>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 md:grid-cols-3">
                    <span className="text-sm bg-purple-400 p-2 rounded-3xl font-medium">C#</span>
                    <span className="text-sm  bg-purple-400 p-2 rounded-3xl font-medium">Azure Functions</span>
                    <span className="text-sm  bg-purple-400 p-2 rounded-3xl font-medium">Scrum</span>
                    <span className="text-sm bg-purple-400 p-2 rounded-3xl font-medium">React</span>
                </div>
            </div>
        </div>
    )
}