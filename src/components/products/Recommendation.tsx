
import Rating from "./Rating"


const Recommendation:React.FC = () => {

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
  <h1 className="font-extrabold text-3xl font-[Integral CF] text-center my-10 sm:text-5xl">
    YOU MIGHT ALSO LIKE
  </h1>

  <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
    {cards.map((card, index) => (
      <div key={index} className="shrink-0 snap-center">
        <ProductCard data={card} />
      </div>
    ))}
  </div>
</div>
  )
}

export default Recommendation


interface CardData {
  name: string;
  price: number;
  image: string;
  rating: number;
}

interface Props {
  data: CardData;
}

const ProductCard:React.FC<Props> = ({data}) => {


  return (
    <div className="w-54 sm:w-64 h-fit ">
        <img className="w-full h-50 sm:h-60  object-cover rounded-2xl" src={data.image} alt="" />
        <h2 className="my-1  font-medium">{data.name}</h2>
        {/* <h2 className="flex my-1 items-center"> {star}{star}{star}{star} {data.rating}</h2> */}
        <Rating rating={data.rating} size={16} />
        <h2 className="font-bold text-base sm:text-xl my-1">${data.price}</h2>

    </div>
  )
}

