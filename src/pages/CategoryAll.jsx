import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import ProductDetail from "./ProductDetail";
import ProductsCard from "../components/ProductsCard";
import Catagaries from "../components/Catagaries";
import TextCard from "../components/TextCard";


export default function CatagoryAll({data}) {
    const { id1 } = useParams()
    const [showProductDetail, setShowProductDetail] = useState(false);
    const [productsdata, setProductsData] = useState([])
    let CardsList = []

    const handleButtonClick = () => {
        setShowProductDetail(true);
    };
    useEffect(() => {
        setProductsData(prevzList => {
            return data.filter(card => {
                if (card.category === id1) {
                    return card
                }
            })
        })

     },[id1])


     if (productsdata.length > 0) {
            CardsList =   productsdata.map((card,index )=> {
              return  <ProductsCard key={card.id} data= {card} id1= {id1} index= {index}  /> 

            })

     }

    
     


    return (
        <main>
            {showProductDetail ? (
                <ProductDetail />
            ) : (
                <section>
                    {productsdata.length > 0 ? (
                        <section>
                            <div className="bg-almostBlack ustomblack w-ful text-customwhite" >
                                    <div className="h-[.5px] w-[90%] bg-lightgray/50  mx-auto bg-almostwhite md:max-w-[80%]" ></div>
                                    <h1  className="text-center py-12 text-4xl uppercase font-bold md:py-16 lg:py-24 md:text-[3rem] md:tracking-[.4rem]" >{productsdata[0].category}</h1>
                            </div>
                            <div className="flex flex-col  gap-24 lg:gap-36 my-[8rem]">
                                {CardsList}
                            </div>
                            <Catagaries />
                            <TextCard />

                        </section>
                        
                        

                    ): (
                        <h1>Loading...</h1>

                    )
                }

                </section>
            )
            
            }
        </main>
    );
}