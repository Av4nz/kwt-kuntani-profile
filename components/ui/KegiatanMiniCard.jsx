import React from 'react'

const KegiatanMiniCard = ({ image, title, date }) => {
  return (
    <div
      className={`bg-white shadow rounded-2xl w-full h-[5rem] sm:h-[5rem] lg:h-[5rem] relative overflow-hidden flex`}
    >
      <div className="bg-gray-100 shadow rounded-2xl w-[30%] h-full relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full bg-center bg-cover object-cover object-center"
          onError={(e) => {
            e.target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%2387ceeb'/%3E%3Cg fill='%23228b22'%3E%3Crect x='20' y='50' width='8' height='30'/%3E%3Crect x='35' y='40' width='8' height='40'/%3E%3Crect x='50' y='45' width='8' height='35'/%3E%3Crect x='65' y='35' width='8' height='45'/%3E%3Crect x='80' y='50' width='8' height='30'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ffd700'/%3E%3Cpath d='M10 65 Q30 55 50 65 Q70 75 90 65 Q100 60 110 65 v15 H10 z' fill='%23228b22'/%3E%3C/g%3E%3C/svg%3E";
          }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-4">
        <h4 className="text-black font-semibold text-sm sm:text-base lg:text-lg mb-1">
          {title || "Nama Kegiatan"}
        </h4>
        <p className="text-gray-600 text-xs sm:text-sm lg:text-sm">
          {date || "Tanggal Kegiatan"}
        </p>
      </div>
    </div>
  );
}

export default KegiatanMiniCard
