import data from "./data/products.json"
import {Routes,Route} from "react-router-dom"
import Layout from "./components/LayoutPages"
import Home from "./pages/Home"
import CatagoryAll from "./pages/CategoryAll"
import ProductDetail from "./pages/ProductDetail"
function App() {
  
  
  return (
    
    <Routes>
        <Route path="/" element= {<Layout />} >
            <Route index element = {<Home />} />
            <Route  path=":id1" element = {<CatagoryAll data= {data.products} />}/>
            <Route path=":id1/:id2" element= {<ProductDetail data = {data.products} />}  />
        </Route>
        
    </Routes>
  )
}

export default App
