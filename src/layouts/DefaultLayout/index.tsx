import { BracketsCurly, Briefcase, Browser } from "phosphor-react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div>
        <Header/>
        <div className="flex flex-col gap-20 mt-16">
          <div className="flex justify-between bg-purple-450 p-2 rounded lg:p-4">
              <Link to="/" className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-purple-600 transition-colors lg:text-xl lg:px-8">
                  Projetos
                  <Browser size={20} />
              </Link>
              <Link to="/skills" className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-purple-600 transition-colors lg:text-xl lg:px-8">
                  Skills
                  <BracketsCurly size={20} />
              </Link>
              <Link to="/experience" className="flex items-center gap-2 text-sm py-4 px-2 rounded hover:bg-purple-600 transition-colors lg:text-xl lg:px-8">
                  Experiência
                  <Briefcase size={20} />
              </Link>
          </div>

          <Outlet />

          <Footer/>
        </div>
    </div>
  )
}
