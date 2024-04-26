import React from 'react'
import { register } from 'swiper/element'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import css from '../../imagens/css.png'
import html from '../../imagens/html.png'
import javascript from '../../imagens/javascript.png'
import react from '../../imagens/react.png'
import vs from '../../imagens/vsc.png'
import git from '../../imagens/git.png'
import next from '../../imagens/next.png'

register()

export default function Carrossel() {
  return (
    <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 600 }}
  loop={true}
  slidesPerView={5}
  navigation={false}
  centeredSlides={true}
  pagination={true}
  scrollbar={true}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
  style={{ maxWidth: '100%', alignItems: 'center' }}
  
  // Add breakpoints here
  breakpoints={{
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }}
>
      <SwiperSlide><img src={html} alt="html" /></SwiperSlide>
      <SwiperSlide><img src={css} alt="css" /></SwiperSlide>
      <SwiperSlide><img src={javascript} alt="javascript" /></SwiperSlide>
      <SwiperSlide><img src={react} alt="react" /></SwiperSlide>
      <SwiperSlide><img src={vs} alt="visual studio" /></SwiperSlide>
      <SwiperSlide><img src={git} alt="github" /></SwiperSlide>
      <SwiperSlide><img src={next} alt="next" /></SwiperSlide>
    </Swiper>
  )
}
