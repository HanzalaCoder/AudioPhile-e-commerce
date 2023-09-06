

export default function TextCard() {

    return(
        <section  className="w-[90%] md:max-w-[80%] mx-auto my-[5rem]">
            <div className="flex flex-col gap-12 items-center justify-center text-center  md:text-left lg:gap-24 md:justify-between lg:flex-row-reverse">
            <div className="rounded-md lg:w-[50%] ">
                <img className="w-[100%] md:hidden" src="../images/shared/mobile/image-best-gear.jpg" alt="" />
                <img className="w-[100%] hidden md:block lg:hidden" src="../images/shared/tablet/image-best-gear.jpg" alt="" />
                <img className="w-[100%] hidden lg:block" src="../images/shared/desktop/image-best-gear.jpg" alt="" />

            </div>
            <div className=" grid gap-8 md:gap-4 lg:w-[50%]">
                <h1 className="text-4xl font-extrabold text-almostBlack  lg:text-[3.5rem] lg:leading-[4rem]  ">BRINGING YOU THE <span className="text-darkorange">BEST</span>  AUDIO GEAR</h1>

                <p className="text-customtext font-medium text-md lg:max-w-[45ch]">Located at the heart of New York City. Audiohile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms avialable for you to browse and experience a wide range of our products. stop by our store to meent some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. </p>
            </div>

            </div>

           

        </section>
    )
}