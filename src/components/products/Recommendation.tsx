
import Rating from "./Rating"

type topic = {
  heading : string
  slider? :boolean
}


const Recommendation:React.FC<topic>= (prop) => {

    const cards: CardData[] = [
  {
    name: "Polo with Contrast Trims",
    price: 212,
    image: "../src/assets/images/products_img/card1.png",
    rating: 4.5
  },
  {
    name: "Gradient Graphic T-shirt",
    price: 145,
    image: "../src/assets/images/products_img/card2.png",
    rating: 4.2
  },
  {
    name: "Polo with Tipping Details",
    price: 180,
    image: "../src/assets/images/products_img/card3.png",
    rating: 4.7
  },
  {
    name: "Black Striped T-shirt",
    price: 140,
    image: "../src/assets/images/products_img/card4.png",
    rating: 4.3
  },
  {
     name: "Polo with Contrast Trims",
    price: 212,
    image: "../src/assets/images/products_img/card1.png",
    rating: 4.5
  },
  {
    name: "Polo with Contrast Trims",
    price: 212,
    image: "../src/assets/images/products_img/card1.png",
    rating: 4.5
  }
]
  return (
    <div className="h-[80%] w-full ">
      
      <h1 className="font-extrabold text-3xl font-[Integral CF] text-center my-10 lg:text-5xl">
        {prop.heading}
      </h1>

      <div className={` ${prop.slider ? ' flex overflow-x-auto  scrollbar-hide snap-x snap-mandatory gap-4' :'grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-6'}  px-4`}>
          {cards.map((card, index) => (
              <div key={index} className={`${prop.slider ? "shrink-0 snap-center" : ''}`}>
                <ProductCard data={card} size={prop.slider ? " large" : 'small'} />
              </div>
          ))}
      </div>
          {!prop.slider  && (
              <div className=" w-full h-full  flex items-center justify-center my-6 ">
                      <button className="h-12 w-42 border-2 border-border-100 rounded-[62px] active:scale-95">
                      view all
                      </button>
              </div>
            )}
    </div>
  )
}

export default Recommendation


export interface CardData {
  name: string;
  price: number;
  image: string;
  rating: number;
}

export interface Props {
  data: CardData,
  size: 'small' |' large'
}

export const ProductCard:React.FC<Props> = ({data,size}) => {


  return (
    <div className={`${size=='small' ? 'lg:w-66 w-40' :'lg:w-64 w-54'}  h-fit`}>
        <img className="w-full h-50 lg:h-60  object-cover rounded-2xl" src={data.image} alt="product image" />
        <h2 className="my-1  font-medium">{data.name}</h2>
        <span className="flex items-center gap-4">
          <Rating rating={data.rating} size={16} />
          <p className="md:text-base text-sm">{data.rating}/<span className="text-grey">5</span></p>
        </span>
        <h2 className="font-bold text-base lg:text-xl my-1">${data.price}</h2>

    </div>
  )
}

