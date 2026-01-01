import BrandLogo from "./BrandLogo"

const Banner = () => {

    type descrip = {
        types : string,
        score : number,
    }

    const description : descrip[] = [
        {
            types:'International Brands',
            score:200
        },
        {
            types:'High-Quality Products',
            score:2000
        },
        {
            types:'Happy Customers',
            score :30000
        }
    ]
  return (
<div>
    <div className="flex items-center flex-col md:flex-row h-fit bg-background">

        <div className="md:w-1/2 w-full h-fit md:pt-10 md:pl-10 pt-5 md:px-0 px-5  ">

            <h1 className="md:text-7xl text-4xl md:tracking-[-5px] tracking-[-1px] font-extrabold  md:my-5">
                FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <p className="md:text-grey md:my-5 my-3 md:text-base text-sm">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>

            <button className="md:w-52 w-full mr-5 h-13 my-3 rounded-[62px] active:scale-95 md:text-base text-sm bg-black text-white">
                Shop Now
            </button>

            <div className="my-7 flex flex-wrap justify-around items-center">

                {description.map((desc,index)=>(
                   
                <div className="flex items-center w-fit my-3" key={index}>
                    <div>
                    <h1 className="md:text-4xl text-2xl font-medium ">{desc.score}+</h1>
                    <p className="md:text-sm text-[8px] text-grey">{desc.types}</p>
                    </div>
                    {index == description.length-1 ? '':<hr className="rotate-90 w-[60px]   text-border-100" />}
                </div>
                    )
                    )}

            </div>
        </div>

        <div className="md:h-screen h-[400px] md:w-1/2 w-full flex justify-center items-center">
            <div className="relative w-full h-full overflow-hidden z-0">
                <div className="diamond md:size-25 size-20 absolute z-100 md:translate-x-115 md:translate-y-20 translate-x-66"></div>
                <div className="diamond md:size-16 size-10 absolute z-100 md:translate-y-60 md:translate-x-0 translate-x-1/2 translate-y-30"></div>
                <img 
                src="src/assets/images/home-img/banner.jpg" 
                className="absolute h-full md:translate-x-22 md:translate-y-25 md:scale-140 translate-y-12 translate-x-10 scale-140  " 
                alt="" />
            </div>
        </div>

    </div>

    {/* brand logo */}
    <BrandLogo/>
</div>
  )
}

export default Banner