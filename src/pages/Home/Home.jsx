import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Gallery from "../../components/Gallery/Gallery";
import logoAmeliaBistro from '../../static/logo-amelia-bistro.png';
import logoMillersAleHouse from '../../static/logo-millers-house.png';
import logoNinetyNine from '../../static/logo-ninety-nine.png';
import logoPcPretzels from '../../static/logo-pc-pretzels.png';
import logoPfChangs from '../../static/logo-pf-changs.png';
import logoRoundabout from '../../static/logo-roundabout.png';
import iconRestaurant from '../../static/icon-restauraunt-1.png';
import iconOffice from '../../static/icon-office-1.png';
import iconClinics from '../../static/icon-clinics-1.png';
import iconFactories from '../../static/icon-factories-1.png';
import iconDealer from '../../static/icon-dealer-1.png';
import iconHouse from '../../static/icon-house-1.png';
import pfChangs1 from '../../static/pf-changs/pf-changs-1.jpg';
import pfChangs2 from '../../static/pf-changs/pf-changs-2.jpg';
import pfChangs3 from '../../static/pf-changs/pf-changs-3.jpg';
import pfChangs4 from '../../static/pf-changs/pf-changs-4.jpg';
import pfChangs5 from '../../static/pf-changs/pf-changs-5.jpg';
import pfChangs6 from '../../static/pf-changs/pf-changs-6.jpg';
import port1 from '../../static/port-city/port-1.jpg';
import port2 from '../../static/port-city/port-2.jpg';
import port3 from '../../static/port-city/port-3.jpg';
import port4 from '../../static/port-city/port-4.jpg';
import port5 from '../../static/port-city/port-5.jpg';
import port6 from '../../static/port-city/port-6.jpg';
import rounda1 from '../../static/rounda/roundabout-1.jpg';
import rounda2 from '../../static/rounda/roundabout-2.jpg';
import rounda3 from '../../static/rounda/roundabout-3.jpg';
import rounda4 from '../../static/rounda/roundabout-4.jpg';
import rounda5 from '../../static/rounda/roundabout-5.jpg';
import rounda6 from '../../static/rounda/roundabout-6.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Home.scss"


function Home() {
  let homePhotos = [pfChangs1, pfChangs2, pfChangs3, pfChangs4, pfChangs5, pfChangs6, port1, port2, port3, port4, port5, port6, rounda1, rounda2, rounda3, rounda4, rounda5, rounda6]

  return (
    <div className="homepage">
      <Helmet>
        <title>Specialized deep and detailed cleaning | SDS Detailing Cleaning</title>
        <meta name="keywords" content="Detailed cleaning, Deep cleaning, Cleaning" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sdsdetailingcleaning.com/" />
        <meta property="og:site_name" content="SDS Detailing Cleaning" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sdsdetailingcleaning.com/" />
        <meta property="og:title" content="Specialized deep and detailed cleaning | SDS Detailing Cleaning" />
        <meta property="og:description" content="We offer high-quality deep and detailed cleaning for homes and businesses, ensuring hygiene, comfort, and excellence. We always strive to provide the best cleaning service to our customers." />
        <meta name="description" content="We offer high-quality deep and detailed cleaning for homes and businesses, ensuring hygiene, comfort, and excellence. We always strive to provide the best cleaning service to our customers." />
      </Helmet>

      <div className="banner">
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className="banner__video">
          <source src="https://videos.pexels.com/video-files/4145631/4145631-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="banner__content">
            <h1 className="banner__content__h1">Specialized detailed cleaning</h1>
            <p className="banner__content__paragraph">We provide top-quality cleaning services tailored to your business needs, from routine maintenance to deep cleaning, always ensuring excellence and attention to detail.</p>
            <a href="sms:+15515548788?body=Hi,%20I%20would%20like%20to%20request%20a%20detailed%20cleaning%20service" className="banner__content__button">Request a quote</a>
          </div>
        </div>
      </div>

      <section className="services">
        <div className="container">
          <div className="services__content">
            <h2 className="services__content__title">The <span>difference we deliver</span></h2>
            <div className="services__content__text">
              <p>We deliver high-quality, detailed, and deep cleaning services with a strong focus on precision and excellence, ensuring spotless results that create a healthier and more welcoming environment for our customers.</p>
              <p>We specialize in detailed and deep cleaning, delivering excellence even in the most demanding environments. With solid experience in heavy-duty cleaning, such as restaurants, industrial facilities, and clinics, we also provide customized solutions for offices, commercial spaces, and more. Our commitment is to create spotless, safe, and welcoming environments for our clients.</p>
            </div>

            <h3 className="services__content__subtitle">What we clean?</h3>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={ window.innerWidth >= 992 ? 5 : 1} 
              navigation 
              pagination={{ clickable: true }} 
              className="services__content__swiper"
            >
              <SwiperSlide className="services__content__swiper__item">
                <img src={iconRestaurant} alt="Icon Restaurants" />
                <p>Restaurants</p>
              </SwiperSlide>

              <SwiperSlide className="services__content__swiper__item">
                <img src={iconOffice} alt="Icon Offices" />
                <p>Offices</p>
              </SwiperSlide>

              <SwiperSlide className="services__content__swiper__item">
                <img src={iconClinics} alt="Icon Clinics" />
                <p>Clinics</p>
              </SwiperSlide>

              <SwiperSlide className="services__content__swiper__item">
                <img src={iconFactories} alt="Icon Factories" />
                <p>Factories</p>
              </SwiperSlide>

              <SwiperSlide className="services__content__swiper__item">
                <img src={iconDealer} alt="Icon Dalersnhips" />
                <p>Dealerships</p>
              </SwiperSlide>

              <SwiperSlide className="services__content__swiper__item">
                <img src={iconHouse} alt="Icon Houses" />
                <p>Houses</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="customers">
        <div className="container">
          <div className="customers__content">
            <h4 className="customers__content__title">Meet those who <span>trust our work</span></h4>

            <div className="customers__content__images">
              <div className="customers__content__images__img">
                <img src={logoPfChangs} alt="Logo PF Chang's" />
              </div>
              <div className="customers__content__images__img">
                <img src={logoNinetyNine} alt="Logo Ninety Nine" />
              </div>
              
              <div className="customers__content__images__img">
                <img src={logoPcPretzels} alt="Logo Port City Pretzels" />
              </div>
              
              <div className="customers__content__images__img">
                <img src={logoMillersAleHouse} alt="Logo Millers Ale House" />
              </div>
              <div className="customers__content__images__img">
                <img src={logoRoundabout} alt="Logo Roundabout" />
              </div>
              <div className="customers__content__images__img">
                <img src={logoAmeliaBistro} alt="Logo Amelias Bistro" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-work">
        <div className="container">
          <div className="our-work__content">
            <h5 className="our-work__content__title">See some of <span>our work</span></h5>
            <p className="our-work__content__text">Take a look at some of the work we've done for our clients. On our website, you can see complete photos of all our clients.</p>
            <Gallery photos={homePhotos} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;