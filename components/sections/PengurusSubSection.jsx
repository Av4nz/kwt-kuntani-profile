import React from 'react'
import PengurusCard from '../ui/PengurusCard'

const PengurusSubSection = () => {
  return (
    <section className='py-10'>
      <div className="max-w-[1240px] mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
          Pengurus
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          <PengurusCard />
          <PengurusCard />
          <PengurusCard />
          <PengurusCard />
        </div>
      </div>
    </section>
  )
}

export default PengurusSubSection
