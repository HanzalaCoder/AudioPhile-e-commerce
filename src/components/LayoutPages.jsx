import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


export default function LayoutPages({data}) {

    return (
        <>
          <Header data={data} />
          <Outlet />
          <Footer />
        </>
      


    )
}