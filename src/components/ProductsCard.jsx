import { Link } from "react-router-dom"


export default function productsCard({data,id1,index}) {
    let classVar = ""
    let classVar2 = "flex-row"
    let newProduct = false
   
  

    if (data.new) {
        classVar = "order-first"
        newProduct = true
    }
    if (index == 0) {
        classVar2 = "flex-row-reverse"
    }
    if (id1 === "earphones") {
        classVar2 = "flex-row"

    }
 



    return (
        <section className={`w-[90%] mx-auto md:max-w-[80%] ${classVar} flex flex-col items-center gap-6 lg:items-start lg:${classVar2} lg:gap-16 xl:gap-36  ` }>
            <div className="w-[90%] lg:w-[50%] mb-10">
                <img className="md:hidden hover:scale-110 transition-transform delay-200" src={data.categoryImage.mobile} alt="" />
                <img className="hidden md:block lg:hidden hover:scale-110 transition-transform delay-200 " src={data.categoryImage.tablet} alt="" />
                <img className = "hidden lg:block hover:scale-110 transition-transform delay-200"src={data.categoryImage.desktop} alt="" />
            </div>
            <div  className=" lg:w-[50%] flex flex-col items-center lg:items-start gap-8 text-center lg:text-left lg:self-center">
                {newProduct ? (<h1 className="tracking-[.6em] text-darkorange">
                    NEW PRODUCT</h1>
                ) : null}
                <h1 className="text-4xl font-bold uppercase tracking-[.1em] md:text-[3.5rem]  leading-[3.5rem]">
                    {data.name}
                </h1>
                <p className="text-customtext font-semibold max-w-[45ch] lg:font-normal ">{data.description} </p>
                <Link to={`/${id1}/${data.slug}`} >
                        <button className="w-[180px] bg-darkorange py-4 rounded-sm text-customwhite font-semibold tracking-wider hover:bg-lightorange">
                                    SEE PRODUCT
                            
                        </button>
                </Link>
            </div>
        </section>
    )
}