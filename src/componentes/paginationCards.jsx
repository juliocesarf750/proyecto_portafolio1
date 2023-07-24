import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import perfil1 from '../img/foto perfil1.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function SwiperCards() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlide"  > 
                      <div className="swiper_div_cards">
                         <div className="swiper_div_cards_mensaje">
                           <h3>Incredible Experience</h3>
                           <h6>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</h6>
                         </div>
                         
                         <div className="swiper_div_cards_perfil">
                             <div className="swiper_div_cards_perfil_foto">
                                <img src={perfil1} alt="" />
                                 
                             </div>
                             <div className="swiper_div_cards_perfil_informacion">
                                 <h6>Jane Cooper</h6>
                                 <h6>CEO , ABC Corporation</h6>
                             </div>

                         </div>
                      </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide"  > 
                      <div className="swiper_div_cards">
                         <div className="swiper_div_cards_mensaje">
                           <h3>Incredible Experience</h3>
                           <h6>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</h6>
                         </div>
                         
                         <div className="swiper_div_cards_perfil">
                             <div className="swiper_div_cards_perfil_foto">
                                <img src={perfil1} alt="" />
                                 
                             </div>
                             <div className="swiper_div_cards_perfil_informacion">
                                 <h6>Jane Cooper</h6>
                                 <h6>CEO , ABC Corporation</h6>
                             </div>

                         </div>
                      </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide"  > 
                      <div className="swiper_div_cards">
                         <div className="swiper_div_cards_mensaje">
                           <h3>Incredible Experience</h3>
                           <h6>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</h6>
                         </div>
                         
                         <div className="swiper_div_cards_perfil">
                             <div className="swiper_div_cards_perfil_foto">
                                <img src={perfil1} alt="" />
                                 
                             </div>
                             <div className="swiper_div_cards_perfil_informacion">
                                 <h6>Jane Cooper</h6>
                                 <h6>CEO , ABC Corporation</h6>
                             </div>

                         </div>
                      </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide"  > 
                      <div className="swiper_div_cards">
                         <div className="swiper_div_cards_mensaje">
                           <h3>Incredible Experience</h3>
                           <h6>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</h6>
                         </div>
                         
                         <div className="swiper_div_cards_perfil">
                             <div className="swiper_div_cards_perfil_foto">
                                <img src={perfil1} alt="" />
                                 
                             </div>
                             <div className="swiper_div_cards_perfil_informacion">
                                 <h6>Jane Cooper</h6>
                                 <h6>CEO , ABC Corporation</h6>
                             </div>

                         </div>
                      </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide"  > 
                      <div className="swiper_div_cards">
                         <div className="swiper_div_cards_mensaje">
                           <h3>Incredible Experience</h3>
                           <h6>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</h6>
                         </div>
                         
                         <div className="swiper_div_cards_perfil">
                             <div className="swiper_div_cards_perfil_foto">
                                <img src={perfil1} alt="" />
                                 
                             </div>
                             <div className="swiper_div_cards_perfil_informacion">
                                 <h6>Jane Cooper</h6>
                                 <h6>CEO , ABC Corporation</h6>
                             </div>

                         </div>
                      </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}