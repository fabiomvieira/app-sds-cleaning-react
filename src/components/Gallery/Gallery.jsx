import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import close from '../../static/icon-close.svg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Gallery.scss';

function Gallery(props) {
  const [initialSlide, setinitialSlide] = useState(0);
  const [swiperKey, setSwiperKey] = useState(0);
  const [modal, setModal] = useState(false)

  function openModal(event) {
    setModal(!modal)

    props.photos.map((item, index) => {
      if (item === event.target.getAttribute("src")) {
        setSwiperKey(swiperKey + 1)
        setinitialSlide(index)
      }
    })
  }

  function closeModal(event) {
    if (event.target.tagName !== 'IMG' && event.target.className !== 'swiper-button-next' && event.target.className !== 'swiper-button-prev') {
      setModal(!modal)
    }
  }

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery__content">
          {props.photos.map((item) => (
            <div className="gallery__content__img" onClick={(e) => {openModal(e)}}>
              <img src={item} alt='Gallery' />
            </div>
          ))}
        </div>
      </div>

      <div className={modal ? "gallery__modal opened" : "gallery__modal"} onClick={(e) => {closeModal(e)}}>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={2}
          initialSlide={initialSlide}
          slidesPerView={1}
          pagination={true}
          navigation
          key={swiperKey}
          className="gallery__modal__swiper"
        >
          {props.photos.map((item) => (
            <SwiperSlide className="gallery__modal__swiper__item">
              <img src={item} alt='Gallery' />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="gallery__modal__close" onClick={(e) => {openModal(e)}}>
          <img src={close} alt="Close modal"/>
        </button>
      </div>
    </div>
  )
}

export default Gallery;