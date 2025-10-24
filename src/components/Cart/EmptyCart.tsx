
const EmptyCart = () => {
  return (
    <div>
        <div className='w-full h-full flex justify-center items-center '>
            <img 
            src="src/assets/images/cart-img/EmptyCart.png" 
            alt=""
            className='size-60 md:size-80 ' />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-lg md:text-3xl tracking-wide'>Your Cart is <span className='text-red-500'>Empty!</span></h1>
            <p className='text-xs md:text-base text-[#0000004e]'>Looks like you haven't made your choice yet..</p>
        </div>
        <div className='flex justify-center items-center m-5 '>
            <button
            className={`w-fit h-fit p-3 rounded-[62px] bg-red-500 text-center text-xs md:text-sm cursor-pointer `}>
                Go to shopping
            </button>
        </div>

    </div>
  )
}

export default EmptyCart