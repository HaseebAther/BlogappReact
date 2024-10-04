import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components/index"

function App() {


  return (
    <>
      <div>
        <main>
          <Header/>
          <Outlet/>
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default App
