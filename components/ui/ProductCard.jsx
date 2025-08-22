import Image from "next/image";
import React from "react";

const ProductCard = ({ image, productName }) => {
  return (
    <div className="shadow rounded-2xl w-full h-[28rem] sm:h-[20rem] lg:h-[20rem] relative overflow-hidden">
      <div className="w-full h-[80%] sm:h-[80%] lg:h-[80%] overflow-hidden">
        <Image
          src={image}
          alt={productName || "Nama Produk"}
          className="w-full h-full bg-center bg-cover object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-white flex items-center justify-center p-4">
        <h4 className="text-black font-semibold text-xl text-center">
          {productName || "Nama Produk"}
        </h4>
      </div>
    </div>
  );
};

export default ProductCard;
