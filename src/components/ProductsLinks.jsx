import { Link } from "react-router-dom"

export default function ProductsLinks()  {
    

    return(
        <section className="w-[90%] mx-auto md:max-w-[80%] my-[6rem] flex gap-12 flex-col">
            <div className="bg-[url('../images/home/desktop/pattern-circles.svg')] bg-darkorange flex flex-col items-center justify-center gap-8 py-8 bg-cover md:bg-contain 
            lg:bg-bottom bg-center bg-no-repeat md:flex-row px-12 md:py-0 md:pt-8 md:gap-16 lg:gap-48 md:justify-start md:max-h-[35rem] lg:h-[40rem]  lg:px-24 rounded-md overflow-hidden">
                <img className="w-[50%] md:hidden" src="../images/home/mobile/image-speaker-zx9.png" alt=""  />
                <img className="w-[50%] lg:w-[45%] xl:w-[40%]  hidden md:block xl:pt-48" src="../images/home/desktop/image-speaker-zx9.png" alt="" />
                <div className= "grid place-items-center md:place-items-start grid-cols-1 gap-8 pb-16  mt-12">
                        <h1 className="text-4xl text-almostwhite font-extrabold md:text-[3.5rem] lg:text-[4.5rem] md:leading-[4rem]  "  >ZX9 SPEAKERS</h1>
                        <p className="text-center md:text-left text-textlight font-bold max-w-[30ch]  ">upgrade to premium speakers that are phenomenally build to deliver truly remarkable sound.</p>
                        <Link to= "/speakers/zx9-speaker">
                                <button className="w-[180px] border-2 py-3 px-4 border-darkorange bg-almostBlack text-almostwhite font-bold tracking-widest hover:bg-slate-500 rounded-sm " >
                                    SEE PRODUCT

                                </button>
                        </Link>
                        
                </div>
                
            </div>

            <div className="flex flex-col gap-6 bg-[url('../images/home/mobile/image-speaker-zx7.jpg')] md:bg-[url('../images/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('../images/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-center lg:bg-contain bg-no-repeat h-[18rem] lg:h-[22rem] items-center justify-center md:items-start px-24 rounded-sm">
                <div className="flex flex-col gap-4 lg:gap-8">
                    <h1 className="text-almostBlack text-3xl font-bold">ZX7 SPEAKERS</h1>
                    <Link to="/speakers/zx7-speaker">
                            <button className="w-[180px] border-2 py-3 px-4 border-almostBlack  text-almostBlack font-bold tracking-widest hover:bg-almostBlack  hover:text-almostwhite rounded-sm ">
                                    SEE PRODUCT

                            </button>
                    </Link>
                    
                </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-0 lg:gap-4 md:flex-row  md:h-[20rem] rounded-sm ">
                <div className="bg-[url('../images/home/mobile/image-earphones-yx1.jpg')] md:bg-[url('../images/home/tablet/image-earphones-yx1.jpg')] lg:bg-[url('../images/home/desktop/image-earphones-yx1.jpg')] h-[20rem] bg-cover bg-center md:w-[50%] ">
                </div>
                <div className=" md:w-[50%] bg-zinc-300/60 p-8 py-12 flex flex-col gap-6 items-center justify-center">
                    <h1 className="text-almostBlack text-3xl font-bold">YX1 EARPHONES</h1>
                    <Link to="/earphones/yx1-earphones">
                            <button className="w-[180px] border-2 py-3 px-4 border-almostBlack  text-almostBlack font-bold tracking-widest hover:bg-almostBlack  hover:text-almostwhite rounded-sm ">
                                    SEE PRODUCT
                            </button>
 
                           
                        </Link>

                    
                </div>
            </div>
        </section>
    )

}