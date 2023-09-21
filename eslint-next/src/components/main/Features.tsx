'use client'

import { PiHandSwipeLeft } from 'react-icons/pi'
import FeaturesSwiper from './mainComponents/FeaturesSwiper'

export default function Features() {
  return (
    <div id="features" className="flex-center flex-col 2xl:py-36">
      <FeaturesSwiper />

      <div className="text-mainPalette flex w-full justify-center bg-transparent p-4 lg:hidden">
        <PiHandSwipeLeft size={25} />
        <p>Arraste para o lado</p>
      </div>
    </div>
  )
}
