import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import './styles/global.css'

export function App() {
  return (
    <div className="flex flex-col gap-12 max-w-xl mt-12 mx-auto px-4">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )
}
