import { useState } from "react";
import ProView from "../components/products/ProView"
import Recommendation from "../components/products/Recommendation";
import ReviewTab from "../components/products/ReviewTab";
import ProDetailTab from "../components/products/ProDetailTab";
import FAQPage from "../components/products/FAQTab";

export type ProductDetailProps = {
  ProImage: string[];       // Product ke multiple images
  ProName: string;          // Product name
  ProDescription: string;   // Description
  ProPrice: number;         // Price
  ProSize: string[];        // Available sizes
  ProColor: string[];       // Available colors
  rating: number;           // Rating (1–5)
  ProQuantity: number;      // Stock quantity
};


export const  ProductDetail:ProductDetailProps = {
ProImage:["src/assets/images/products_img/pro_front.png","src/assets/images/products_img/pro_back.png","src/assets/images/products_img/pro_human.png"],
ProColor:["#4f4631","#314f4a","#31344f"],
ProSize:["Small","Medium","Large","X-Large"],
ProDescription:"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric,it offers superior comfort and style.",
ProName:"One Life Graphic T-shirt",
ProPrice:211,
ProQuantity:4,
rating:3 
} 

const Product = () => {



  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];
  const [activeTab, setActiveTab] = useState("Product Details");

  return (
    <div className="m-auto w-[90%] mb-8">

    {/* product view tab */}
      <div className="Product-view flex h-fit  m-4  gap-4">
        <ProView data={ProductDetail} />
      </div>
        
    {/* review and detail navigation tab */}
    <div className=" w-full   mx-auto p-4">
      {/* Tabs */}
        <div className="w-full overflow-x-auto sm:overflow-visible">
            <div className=" border-b w-full border-border-100 justify-around min-w-max sm:min-w-0 gap-10 sm:gap-1 snap-x snap-mandatory">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={` pb-3 w-1/3 whitespace-nowrap transition-colors text-base sm:text-xl snap-center ${
                    activeTab === tab
                      ? "border-b-2 border-black font-semibold  text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
        </div>
      </div>

      <div>
      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "Product Details" && (
          <ProDetailTab/>
        )}

        {activeTab === "Rating & Reviews" && (
        <ReviewTab  />
        )}

        {activeTab === "FAQs" && (
        <FAQPage />
        )}
      </div>
    </div>


  
        {/* recommendation tab */}
        <div className="h-fit my-10 overflow-hidden">
        <Recommendation heading = "You might also like" slider = {true} />
        </div>
    </div>
  )
}

export default Product