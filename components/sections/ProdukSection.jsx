import React from "react";
import ButtonPrimary from "../ui/ButtonPrimary";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductCard from "../ui/ProductCard";

const ProdukSection = ({ produkList }) => {
  return (
    <section id="produk" className="py-20 px-4 lg:px-16 bg-slate-100">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          Produk
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="produk-swiper"
        >
          {produkList.map((produk) => (
            <SwiperSlide key={produk.slug} className="pb-12">
              <ProductCard
                image={produk.image}
                productName={produk.name}
                isUnggulan={produk.unggulan}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center mt-8">
        <ButtonPrimary
          label={"Pesan Sekarang"}
          url="https://wa.me/6282314954133"
        ></ButtonPrimary>
      </div>
    </section>
  );
};

export default ProdukSection;
