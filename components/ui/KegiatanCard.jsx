import React, { useState } from "react";
import Image from "next/image";
import Image1 from "../../public/images/static/kegiatan/kegiatan1.webp";

const KegiatanCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="shadow rounded-2xl w-full h-[30rem] sm:h-[26rem] lg:h-[28rem] relative overflow-hidden flex flex-col cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="w-full h-[60%]">
          <Image
            src={Image1}
            width={500}
            height={500}
            className="w-full h-full bg-center bg-cover object-cover object-center"
          />
        </div>
        <div className="bg-white w-full h-[40%] p-4 flex flex-col">
          <div className="flex justify-between gap-2">
            <h4 className="text-black font-semibold text-2xl mb-2 line-clamp-2">
              Judul Kegiatan ini adalah sebagai berikut ini
            </h4>
            <span className="text-slate-700 font-light items-end text-nowrap shrink-0">
              <p>17 Agustus 2025</p>
            </span>
          </div>

          <p className="text-slate-800 font-light text-lg line-clamp-3 sm:line-clamp-2">
            Deskripsi singkat mengenai kegiatan yang dilakukan. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Reprehenderit, aperiam! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Aliquam maiores
            esse neque saepe itaque delectus dolore quae pariatur harum
            blanditiis.
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-5">
              <h3 className="text-2xl font-semibold">
                Judul Kegiatan ini adalah sebagai berikut ini halo ini saya
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <div className="relative h-96 mb-4">
                <Image
                  src={Image1}
                  fill
                  className="object-cover object-center rounded-lg"
                  alt="Kegiatan"
                />
              </div>
              <div className="text-gray-600 mb-4">17 Agustus 2025</div>
              <div className="prose max-w-none">
                <p>
                  Deskripsi lengkap mengenai kegiatan yang dilakukan. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Reprehenderit,
                  aperiam! Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Aliquam maiores esse neque saepe itaque delectus dolore
                  quae pariatur harum blanditiis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, porro culpa? At repudiandae quisquam deleniti, ipsa laboriosam temporibus beatae eaque corrupti neque dolorum ab illum. Obcaecati, corrupti ratione, nam provident a debitis nesciunt voluptates autem, ad labore iste eius beatae impedit vero odit? Ipsam <br />fugit excepturi voluptates quia minima ab nulla ullam quam iure, fuga ipsum architecto eius. Velit, tempore vel ratione tempora atque deserunt sit enim, laudantium asperiores amet rem quaerat! Rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita impedit voluptatem quos ducimus cupiditate id tenetur, aperiam ad natus ut vel libero voluptate incidunt dolor totam veniam dolorem voluptatum. Nihil nam iure sequi praesentium facilis laudantium? Est, perferendis quasi accusamus quod ab voluptatum quae, magni quos, id eius repellat ea dolorum tempore fuga cumque earum. Deserunt dolor optio necessitatibus sunt vero, mollitia iure, quasi ea exercitationem saepe amet quibusdam odit officia voluptatum qui corrupti repellendus maiores soluta sed provident facilis accusamus. Alias, voluptas! Asperiores non molestias enim, mollitia eos dolor ab, totam quos quaerat eum et consequatur fugit explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KegiatanCard;
