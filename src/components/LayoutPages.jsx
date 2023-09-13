import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { createContext,useState,useReducer } from "react"

function reducer(state,action) {
    switch(action.type) {
        case "total":
          return {count:  action.payload.value}
        case "plus":
          return {count: state.count +  action.payload.value}
        default :
        return state
    }
}

export const stateContext = createContext()
export const cartTotal = createContext() 


export default function LayoutPages({data}) {
  const [arrayState,setArrayState] = useState(JSON.parse(localStorage.getItem("cart")) || [] )
  const [state,dispatch] = useReducer(reducer,{count: 0})
  
    return (
        <stateContext.Provider value={[arrayState,setArrayState]} >
          <cartTotal.Provider value={[state,dispatch]} >
            <Header data={data} />
            <Outlet />
            <Footer />
          </cartTotal.Provider>
        </stateContext.Provider>
      


    )
}