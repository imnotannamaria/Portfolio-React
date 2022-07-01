import { GithubLogo, Link } from 'phosphor-react'
import igniteLab from '../assets/igniteLab.png'

export function Projects() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <img className="rounded" src={igniteLab} alt="" />

                <div className="flex flex-col items-center bg-purple-700 p-4 gap-2">
                    <span className="block text-xl font-bold">Ignite Lab</span>
                    <span className="block text-sm">Class platform</span>    
                </div>
                
                <div className="flex justify-center gap-2 bg-purple-700 p-4 rounded-b-lg">
                    <a href="" className="bg-purple-300 p-4 rounded-full hover:opacity-80 transition-opacity">
                        <Link size={25} />
                    </a>
                    <a href="" className="bg-purple-300 p-4 rounded-full hover:opacity-80 transition-opacity">
                        <GithubLogo size={24} />
                    </a>
                </div>
            </div>
        </div>
    )
}