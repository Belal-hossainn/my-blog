import React from 'react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cover from '../../Assets/cover1.jpg';
import './Header.css';



export default function Header() {
    return (
        <div className='header'>
           <div className="header-title">
                <span className="header-title-sm">Share your ideas!</span>
                <span className="header-title-lg">Read. Write. Connect</span>
            </div>
            {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://media.istockphoto.com/photos/top-view-of-a-blue-desktop-with-copy-space-picture-id1278436436?b=1&k=20&m=1278436436&s=170667a&w=0&h=QrFR5_k1AKgs-1ypGE0QhqHQlqZzBYbtVafn7rD8sUQ=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg" alt="" /></SwiperSlide>
        
      </Swiper> */}
            
           
            <img className='header-img' src={cover} alt="" />
        </div>
    )
}
