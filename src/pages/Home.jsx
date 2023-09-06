import HomeHeader from "../components/HomeHeader"
import Catagaries from "../components/Catagaries"
import ProductsLinks from "../components/ProductsLinks"
import TextCard from "../components/TextCard"
export default function Home() {

    return(
        <main className="w-[100%]">
            <HomeHeader />
            <Catagaries />
            <ProductsLinks />
            <TextCard />

        </main>
    )

}