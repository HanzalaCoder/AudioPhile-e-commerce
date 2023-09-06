import { Link } from "react-router-dom"


export default function Catagaries() {
    


   
    return (
        <section className="w-[90%] mx-auto md:max-w-[80%]">
              <nav className="grid place-items-center grid-cols-1 md:grid-cols-3   my-[6rem] md:my-[10rem] gap-[5rem]">
                <Link to="/headphones" className=" w-[340px] md:w-[230px] lg:w-[300px] xl:w-[380px]   h-[200px] md:h-[180px] lg:h-[200px]  bg-zinc-300/50 rounded-lg  shadow-lg  grid place-items-center relative ">
                    <img className=" catImg absolute -top-[20%]  w-[50%] md:w-[60%]  lg:-top-[40%]   hover:scale-110 transition-transform delay-100" src="../images/shared/mobile/desktop1.png" alt="" />
                    <h2 className="font-bold text-xl self-end mt-28 md:mt-20">HEADPHONES</h2>
                    <div className="flex items-center gap-3">
                        <span className="text-customtext font-bold text-darkorange" >SHOP</span>
                        <img src="../images/shared/desktop/icon-arrow-right.svg" alt="arrow " /> 
                    </div>
                </Link>
                
                <Link to="/speakers" className=" w-[340px] md:w-[230px] lg:w-[300px]  xl:w-[380px]     h-[200px] md:h-[180px] lg:h-[200px]   bg-zinc-300/50 rounded-lg  shadow-lg  grid place-items-center relative ">
                    <img className="catImg absolute -top-[20%]  w-[50%] md:w-[60%]  lg:-top-[40%] hover:scale-110 transition-transform delay-100" src="../images/shared/mobile/desktop2.png" alt="" />
                    <h2 className="font-bold text-xl self-end mt-28 md:mt-20">SPEAKERS</h2>
                    <div className="flex items-center gap-3">
                        <span className="text-customtext font-bold hover:text-darkorange" >SHOP</span>
                        <img src="../images/shared/desktop/icon-arrow-right.svg" alt="arrow " /> 
                    </div>
                </Link>
                
                <Link to="/earphones" className=" w-[340px] md:w-[230px] lg:w-[300px] xl:w-[380px]      h-[200px] md:h-[180px] lg:h-[200px]   bg-zinc-300/50 rounded-lg  shadow-lg  grid place-items-center relative ">
                    <img className="catImg absolute -top-[15%]  w-[50%] md:w-[60%]   lg:-top-[30%] hover:scale-110 transition-transform delay-100" src="../images/shared/mobile/desktop3.png" alt="" />
                    <h2 className="font-bold text-xl self-end mt-28 md:mt-20">EARPHONES</h2>
                    <div className="flex items-center gap-3">
                        <span className="text-customtext font-bold hover:text-darkorange" >SHOP</span>
                        <img src="../images/shared/desktop/icon-arrow-right.svg" alt="arrow " /> 
                    </div>
                </Link>
            </nav>

        </section>
      



    )

}