
const BrandLogo = () => {

    type Brandname = {
        name:string
    }

    const BrandName :Brandname[]= [
        {name:'VERSACE'},
        {name:'ZARA'},
        {name:'GUCCI'},
        {name:'PRADA'},
        {name:'Calvin Klein'},
    ]
  return (
    <div className="w-full h-31 bg-black flex flex-wrap  justify-around items-center">

        {BrandName.map((Name,index)=>(
            <h1 key={index} className="md:text-4xl text-2xl px-3 text-white">
                {Name.name}
            </h1>
        ))}
    </div>
  ) 
}

export default BrandLogo