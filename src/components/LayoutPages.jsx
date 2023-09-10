import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { createContext,useState } from "react"

export const stateContext = createContext()


export default function LayoutPages({data}) {
  const [arrayState,setArrayState] = useState([])
  
    return (
        <stateContext.Provider value={[arrayState,setArrayState]} >
          <Header data={data} />
          <Outlet />
          <Footer />
        </stateContext.Provider>
      


    )
}