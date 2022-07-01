import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import './styles/global.css'

export function App() {
  return (
    <div className="flex flex-col gap-12 max-w-xl mt-12 mx-auto px-4">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}
