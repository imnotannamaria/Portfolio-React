import { ArrowCircleDown, GithubLogo, InstagramLogo, LinkedinLogo, Scroll, WhatsappLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'
import annaMaria from '../assets/anna-maria.png'
import cv from '../assets/cv.pdf'

export function Header() {
    return ( 
        <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-between items-center p-4 gap-10 lg:flex-row">
                <img src={annaMaria} alt="Anna Maria" />

                <div className="flex flex-col gap-4">

                    <h1 className="text-4xl">Anna Maria</h1>
                    <h2 className="text-xl font-medium">Software Engineer</h2>

                    <div className="flex gap-6">
                        <a href="" className="hover:text-yellow-400 transition-colors">
                            <GithubLogo size={35} />
                        </a>
                        <a href="" className="hover:text-yellow-400 transition-colors">
                            <LinkedinLogo size={35} />
                        </a>
                        <a href="" className="hover:text-yellow-400 transition-colors">
                            <InstagramLogo size={35} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="text-xl font-medium">About Me</h1>
                </div>

                <p>
                    <span className="block">Hi All ✨</span> 
                    <span className="block">My name is Anna Maria I am 20 years old and I am a full-stack developer.</span>
                    <span className="block">In 2019 as soon as I finished high school at the age of 16, I decided to start studying Information System.</span>
                    <span className="block">In 2020 I started studying HTML, CSS, JavaScript and React, I fell in love and decided that I would go deeper into web development.</span>
                    <span className="block">In early 2021 I got an internship at Avanade Brasil where I'm still working, here at Avanade I work in the automation and ChatBot area.</span>
                    <span className="block">I'm currently studying Python and the Django framework and I'm also constantly learning both web development (HTML, CSS, REACT) and ChatBot and all the automation stuff.</span>
                </p>
                    
            </div>

            <div className="flex flex-col gap-4 justify-between lg:flex-row">
                {/* <button className="flex justify-center gap-2 bg-purple-400 px-8 py-4 rounded hover:opacity-80 transition-opacity">
                    Download CV
                    <ArrowCircleDown size={24} />
                </button> */}

                <Link to={cv} target="_blank" className="flex justify-center gap-2 bg-purple-400 px-8 py-4 rounded hover:opacity-80 transition-opacity" download>
                    Download CV
                    <ArrowCircleDown size={24} />
                </Link>

                <button className="flex justify-center gap-2 bg-purple-400 px-8 py-4 rounded hover:opacity-80 transition-opacity">
                    Contact me
                    <WhatsappLogo size={24} />
                </button>
            </div>
        </div>
    )
}