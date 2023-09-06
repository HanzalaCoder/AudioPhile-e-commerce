import { Link } from "react-router-dom"

export default function HomeHeader() {

    return(

        <section className="bg-almostBlack">
            <article className="w-[90%] md:max-w-[80%] mx-auto ">
            <div className="h-[.5px]  mx-auto bg-lightgray/50" ></div>
                <div className="bg-[url('../images/home/mobile/image-header.jpg')] md:bg-[url('../images/home/tablet/image-header.jpg')] lg:bg-[url('../images/home/desktop/image-hero.jpg')] 
                bg-contain bg-center  h-[35rem]  bg-no-repeat grid place-items-center
                 md:bg-cover md:h-[40rem]
                lg:place-content-start  ">
                    <div className="flex items-center  flex-col gap-4  lg:items-start lg:pt-[20%]" >
                        <h3 className="text-textlight text-xl tracking-[0.4em] lg:text-lg lg:tracking-[0.5em] mb-4">NEW PRODUCT</h3>
                        <h1 className="text-almostwhite text-4xl text-center font-extrabold tracking-widest md:text-[3rem] lg:text-[3.5rem]   max-w-[15ch]   md:leading-[4rem] lg:text-left"> XX99 MARK 1||  HEADPHONES</h1>
                        <p className="text-textlight text-center font-medium max-w-[50ch] lg:text-left md:max-w-[40ch]" >Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <Link to="/headphones/xx99-mark-two-headphones">
                                <button className="w-[180px] border-2 py-3 px-4 border-darkorange text-almostwhite font-bold tracking-widest hover:bg-darkorange rounded-sm mt-5">
                                        SEE PRODUCT
                                </button>
                             
                        </Link>
                        

                    </div>
                    

                </div>
                
                

            </article>

        </section>

    )



}








