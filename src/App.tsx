import { Header } from "./components/header";
import { Home } from "./components/home";
import { Projects } from "./components/projects";

export default function App() {

  return (
    <div className="bg-bg px-4">
      <Header />
      <Home />
      <Projects />
    </div>
  )
}

