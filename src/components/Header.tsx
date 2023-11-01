import { ArrowCircleDown, At, GithubLogo, InstagramLogo, LinkedinLogo, Scroll, TwitterLogo, WhatsappLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'
import annaMaria from '../assets/anna-maria.png'
import cv from '../assets/cv.pdf'

export function Header() {
    return ( 
        <div className="flex flex-col gap-8">
            <div className="flex justify-center items-center gap-4">
                <span className="block p-2 bg-purple-450 rounded-full">
                    <At size={24}/>
                </span>
                <span className="block text-xl font-medium">
                    imnotannamaria
                </span>
            </div>


            <div className="flex flex-col justify-between items-center p-4 gap-10 lg:flex-row">
                <img src={annaMaria} alt="Anna Maria" />

                <div className="flex flex-col gap-4 items-center lg:items-start">

                    <h1 className="text-4xl">Anna Maria</h1>
                    <h2 className="font-medium">Desenvolvedora Full-Stack</h2>
                    

                    <div className="flex gap-4">
                        <a 
                            href="https://github.com/imnotannamaria" 
                            target="_blank" 
                            className="hover:text-yellow-400 transition-colors"
                        >
                            <GithubLogo size={35} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/imnotannamaria/" 
                            target="_blank" 
                            className="hover:text-yellow-400 transition-colors"
                        >
                            <LinkedinLogo size={35} />
                        </a>
                        <a 
                            href="https://www.instagram.com/imnotannamaria/" 
                            target="_blank" 
                            className="hover:text-yellow-400 transition-colors"
                        >
                            <InstagramLogo size={35} />
                        </a>
                        <a 
                            href="https://twitter.com/imnotannamaria" 
                            target="_blank" 
                            className="hover:text-yellow-400 transition-colors"
                        >
                            <TwitterLogo size={35} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    <h1 className="text-xl font-medium">Sobre mim</h1>
                </div>

                <p>
                    <span className="block">Olá ✨</span> 
                    <span className="block">Sou Anna Maria, desenvolvedora full-stack de 21 anos.</span>
                    <span className="block">Após concluir o ensino médio aos 16 anos, ingressei na faculdade de Sistemas de Informação em 2019.</span>
                    <span className="block">Ao longo de 2020, mergulhei nos estudos de HTML, CSS, JavaScript e React, descobrindo minha verdadeira paixão pelo desenvolvimento web. Essa paixão me impulsionou a aprofundar meus conhecimentos nessa área em constante evolução.</span>
                    <span className="block">Em 2021, tive a oportunidade de ingressar na Avanade Brasil, onde tenho atuado na área de IA e Chatbot utilizando tecnologias da Microsoft.</span>
                    <span className="block">Atualmente, estou me dedicando ao estudo de ciência de dados, utilizando ferramentas como Python, Pandas e Scikit-learn, entre outras.</span>
                    <span className="block">Continuo comprometida em aprimorar minhas habilidades tanto no desenvolvimento web, com enfoque em tecnologias como React e NodeJS, quanto na área de ChatBot.</span>
                </p>
                    
            </div>

            <div className="flex flex-col gap-4 justify-between lg:flex-row">
                <Link to={cv} target="_blank" className="flex justify-center gap-2 bg-purple-400 px-8 py-4 rounded hover:opacity-80 transition-opacity" download>
                    Currículo
                    <ArrowCircleDown size={24} />
                </Link>

                <a 
                    href="https://wa.me/5581986698525" 
                    target="_blank" 
                    className="flex justify-center gap-2 bg-purple-400 px-8 py-4 rounded hover:opacity-80 transition-opacity"
                >
                    Fale comigo
                    <WhatsappLogo size={24} />
                </a>
            </div>
        </div>
    )
}