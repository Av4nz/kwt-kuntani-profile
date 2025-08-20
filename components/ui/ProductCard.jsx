import Image from 'next/image'
import React from 'react'

const ProductCard = ( { image, productName } ) => {
  return (
    <div className="bg-primary-500 shadow rounded-2xl w-full h-[28rem] sm:h-[14rem] lg:h-[20rem] relative overflow-hidden">
      <div className="bg-primary-300 shadow rounded-2xl w-full h-[80%] sm:h-[80%] lg:h-[80%] relative overflow-hidden">
        <Image
          src={image}
          className="w-full h-full bg-center bg-cover object-cover object-center"
        />
      </div>

      <div>
        <h4 className="absolute w-full bottom-[5%] sm:bottom-[1%] lg:bottom-[4%] text-black font-semibold text-xl text-center mb-2">
          {productName || "Nama Produk"}
        </h4>
      </div>
    </div>
  );
}

export default ProductCard
