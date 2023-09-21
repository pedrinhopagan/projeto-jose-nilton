import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export default function FeaturesSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      speed={500}
      loop={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper flex max-w-xs cursor-grab gap-12 rounded-md md:max-w-md lg:max-w-lg 2xl:max-w-2xl"
    >
      <SwiperSlide>
        <div className="flex-center h-[500px] border border-blue-600 bg-red-600">
          <h3>Exame 1</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex-center h-[500px] border border-blue-600 bg-orange-600">
          <h3>Exame 2</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex-center h-[500px] border border-blue-600 bg-green-600">
          <h3>Exame 3</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
