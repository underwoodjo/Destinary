'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, EffectFade, EffectCube } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

// import function to register Swiper custom elements
import Features from '@/components/Features.tsx';
import Hero from '@/components/Hero';

SwiperCore.use([Mousewheel, Keyboard, EffectFade]);

export default function Home() {
  return (
    <main>
      {/* do not use bg-opacity-# when styling an image that is full wid/height, just use opacity-# */}
      <Swiper
        direction="vertical"
        className="h-screen w-screen"
        mousewheel={{ enabled: true, sensitivity: 1 }}
        keyboard={{ enabled: true, onlyInViewport: false }}
        effect="fade"
        speed={500}
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Features />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
