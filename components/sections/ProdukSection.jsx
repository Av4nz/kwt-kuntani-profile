import React from "react";
import ProductCard from "../ui/ProductCard";

const ProdukSection = () => {
  return (
    <section id="produk" className="py-20 px-4 lg:px-16 bg-slate-100">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Produk
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ProductCard />
      </div>
    </section>
  );
};

export default ProdukSection;
