import { Helmet } from "react-helmet";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
import Gallery from "../../components/Gallery/Gallery";
import pfChangs1 from '../../static/pf-changs/pf-changs-1.jpg';
import pfChangs2 from '../../static/pf-changs/pf-changs-2.jpg';
import pfChangs3 from '../../static/pf-changs/pf-changs-3.jpg';
import pfChangs4 from '../../static/pf-changs/pf-changs-4.jpg';
import pfChangs5 from '../../static/pf-changs/pf-changs-5.jpg';
import pfChangs6 from '../../static/pf-changs/pf-changs-6.jpg';
import pfChangs7 from '../../static/pf-changs/pf-changs-7.jpg';
import pfChangs9 from '../../static/pf-changs/pf-changs-9.jpg';
import pfChangs10 from '../../static/pf-changs/pf-changs-10.jpg';
import pfChangs11 from '../../static/pf-changs/pf-changs-11.jpg';
import pfChangs12 from '../../static/pf-changs/pf-changs-12.jpg';
import pfChangs13 from '../../static/pf-changs/pf-changs-13.jpg';
import pfChangs14 from '../../static/pf-changs/pf-changs-14.jpg';
import pfChangs15 from '../../static/pf-changs/pf-changs-15.jpg';
import pfChangs16 from '../../static/pf-changs/pf-changs-16.jpg';
import pfChangs17 from '../../static/pf-changs/pf-changs-17.jpg';
import pfChangs18 from '../../static/pf-changs/pf-changs-18.jpg';
import pfChangs19 from '../../static/pf-changs/pf-changs-19.jpg';
import pfChangs20 from '../../static/pf-changs/pf-changs-20.jpg';
import portCity1 from '../../static/port-city/port-1.jpg';
import portCity2 from '../../static/port-city/port-2.jpg';
import portCity3 from '../../static/port-city/port-3.jpg';
import portCity4 from '../../static/port-city/port-4.jpg';
import portCity5 from '../../static/port-city/port-5.jpg';
import portCity6 from '../../static/port-city/port-6.jpg';
import portCity7 from '../../static/port-city/port-7.jpg';
import portCity8 from '../../static/port-city/port-8.jpg';
import portCity9 from '../../static/port-city/port-9.jpg';
import portCity10 from '../../static/port-city/port-10.jpg';
import portCity11 from '../../static/port-city/port-11.jpg';
import portCity14 from '../../static/port-city/port-14.jpg';
import roundabout1 from '../../static/rounda/roundabout-1.jpg';
import roundabout2 from '../../static/rounda/roundabout-2.jpg';
import roundabout3 from '../../static/rounda/roundabout-3.jpg';
import roundabout4 from '../../static/rounda/roundabout-4.jpg';
import roundabout5 from '../../static/rounda/roundabout-5.jpg';
import roundabout6 from '../../static/rounda/roundabout-6.jpg';
import roundabout7 from '../../static/rounda/roundabout-7.jpg';
import roundabout8 from '../../static/rounda/roundabout-8.jpg';
import roundabout9 from '../../static/rounda/roundabout-9.jpg';
import roundabout10 from '../../static/rounda/roundabout-10.jpg';
import roundabout11 from '../../static/rounda/roundabout-11.jpg';
import roundabout12 from '../../static/rounda/roundabout-12.jpg';
import roundabout13 from '../../static/rounda/roundabout-13.jpg';
import ninety3 from '../../static/ninety/ninety-nine-3.jpg';
import ninety4 from '../../static/ninety/ninety-nine-4.jpg';
import ninety5 from '../../static/ninety/ninety-nine-5.jpg';
import ninety6 from '../../static/ninety/ninety-nine-6.jpg';
import ninety7 from '../../static/ninety/ninety-nine-7.jpg';
import ninety8 from '../../static/ninety/ninety-nine-8.jpg';
import ninety9 from '../../static/ninety/ninety-nine-9.jpg';
import ninety10 from '../../static/ninety/ninety-nine-10.jpg';
import ninety11 from '../../static/ninety/ninety-nine-11.jpg';
import ninety12 from '../../static/ninety/ninety-nine-12.jpg';
import ninety13 from '../../static/ninety/ninety-nine-13.jpg';
import ninety14 from '../../static/ninety/ninety-nine-14.jpg';
import ninety15 from '../../static/ninety/ninety-nine-15.jpg';
import ninety16 from '../../static/ninety/ninety-nine-16.jpg';
import ninety17 from '../../static/ninety/ninety-nine-17.jpg';
import ninety18 from '../../static/ninety/ninety-nine-18.jpg';
import millersHouse1 from '../../static/miller/miller-1.jpg';
import millersHouse2 from '../../static/miller/miller-2.jpg';
import millersHouse3 from '../../static/miller/miller-3.jpg';
import millersHouse4 from '../../static/miller/miller-4.jpg';
import millersHouse5 from '../../static/miller/miller-5.jpg';
import millersHouse6 from '../../static/miller/miller-6.jpg';
import millersHouse7 from '../../static/miller/miller-7.jpg';
import ameliasBistro1 from '../../static/amelia/amelia-1.jpg';
import ameliasBistro2 from '../../static/amelia/amelia-2.jpg';
import ameliasBistro3 from '../../static/amelia/amelia-3.jpg';
import ameliasBistro4 from '../../static/amelia/amelia-4.jpg';
import ameliasBistro5 from '../../static/amelia/amelia-5.jpg';
import ameliasBistro6 from '../../static/amelia/amelia-6.jpg';
import ameliasBistro7 from '../../static/amelia/amelia-7.jpg';
import ameliasBistro8 from '../../static/amelia/amelia-8.jpg';
import ameliasBistro9 from '../../static/amelia/amelia-9.jpg';
import ameliasBistro10 from '../../static/amelia/amelia-10.jpg';
import ameliasBistro11 from '../../static/amelia/amelia-11.jpg';
import ameliasBistro12 from '../../static/amelia/amelia-12.jpg';
import ameliasBistro13 from '../../static/amelia/amelia-13.jpg';

import './Work.scss';

function Work() {
  const photosPfChangs = [pfChangs1, pfChangs2, pfChangs3, pfChangs4, pfChangs5, pfChangs6, pfChangs7, pfChangs9, pfChangs10, pfChangs11, pfChangs12, pfChangs13,pfChangs14, pfChangs15, pfChangs16, pfChangs17, pfChangs18, pfChangs19, pfChangs20]
  const photosPortCity = [portCity1, portCity2, portCity3, portCity4, portCity5, portCity6, portCity7, portCity8, portCity9, portCity10, portCity11, portCity14]
  const photosRoundabout = [roundabout1, roundabout2, roundabout3, roundabout4, roundabout5, roundabout6, roundabout7, roundabout8, roundabout9, roundabout10, roundabout11, roundabout12, roundabout13]
  const photosNinetyNine = [ninety3, ninety4, ninety5, ninety6, ninety7, ninety8, ninety9, ninety10, ninety11, ninety12, ninety13, ninety14, ninety15, ninety16, ninety17, ninety18]
  const photosMillersHouse = [millersHouse1, millersHouse2, millersHouse3, millersHouse4, millersHouse5, millersHouse6, millersHouse7]
  const photosAmeliasBistro = [ameliasBistro1, ameliasBistro2, ameliasBistro3, ameliasBistro4, ameliasBistro5, ameliasBistro6, ameliasBistro7, ameliasBistro8, ameliasBistro9, ameliasBistro10, ameliasBistro11, ameliasBistro12, ameliasBistro13]

  return (
    <div className="our-work-page">
      <Helmet>
        <title>See our work | SDS Detailing Cleaning</title>
        <meta name="keywords" content="Our work, Deep cleaning, Cleaning" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://sdsdetailingcleaning.com/" />
        <meta property="og:site_name" content="SDS Detailing Cleaning" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sdsdetailingcleaning.com/" />
        <meta property="og:title" content="See our work | SDS Detailing Cleaning" />
        <meta property="og:description" content="We offer high-quality deep and detailed cleaning for homes and businesses, ensuring hygiene, comfort, and excellence. We always strive to provide the best cleaning service to our customers." />
        <meta name="description" content="We offer high-quality deep and detailed cleaning for homes and businesses, ensuring hygiene, comfort, and excellence. We always strive to provide the best cleaning service to our customers." />
      </Helmet>

      <InternalHeader title={'See our work'} />

      <section className="our-work-page__content">
        <div className="container">
          <h2 className="our-work-page__content__title">See our work with <span>P.F. Chang's</span></h2>
          <p className="our-work-page__content__text">P.F. Chang’s is a renowned restaurant franchise where we provide regular cleaning services at approximately 30 locations. Our work includes the thorough cleaning of tables, chairs, floors, light fixtures, windows, and kitchen areas, as well as detailed deep cleaning of equipment and structures, ensuring spotless environments that meet the highest standards of quality.</p>
          <Gallery photos={photosPfChangs} />
        </div>
      </section>

      <section className="our-work-page__content our-work-page__content-2">
        <div className="container">
          <h2 className="our-work-page__content__title">See our work with <span>Port City Pretzels</span></h2>
          <p className="our-work-page__content__text">Port City Pretzels is a specialty pretzel manufacturer where we deliver deep and detailed cleaning services at the production facility. Our work includes the thorough cleaning of factory floors, machinery, and equipment, as well as office areas, ensuring a spotless, safe, and compliant environment for food production.</p>
          <Gallery photos={photosPortCity} />
        </div>
      </section>

      <section className="our-work-page__content">
        <div className="container">
          <h2 className="our-work-page__content__title">See our work with <span>Roundabout</span></h2>
          <p className="our-work-page__content__text">Roundabout is a classic restaurant where we provide deep and detailed cleaning services. Our work includes the thorough cleaning of tables, chairs, and floors, as well as meticulous sanitization of the kitchen and equipment, ensuring a pristine and welcoming environment.</p>
          <Gallery photos={photosRoundabout} />
        </div>
      </section>

      <section className="our-work-page__content our-work-page__content-2">
        <div className="container">
          <h2 className="our-work-page__content__title">See our work with <span>Ninety Nine</span></h2>
          <p className="our-work-page__content__text">Ninety Nine is a renowned restaurant franchise where we provide comprehensive cleaning services in one of its units. Our work includes complete floor care, thorough cleaning and organization of tables and chairs, detailed maintenance of decorative paintings, and deep cleaning of the kitchen and its equipment, including behind and around the machines to ensure a spotless and hygienic environment.</p>
          <Gallery photos={photosNinetyNine} />
        </div>
      </section>

      <section className="our-work-page__content">
        <div className="container">
          <h2 className="our-work-page__content__title">See our work with <span>Miller's Ale House</span></h2>
          <p className="our-work-page__content__text">Miller's Ale House is a popular sports-themed restaurant where we deliver a complete cleaning service. Our work includes thorough care of tables and chairs, detailed floor cleaning, and meticulous maintenance of the bar area, ensuring a spotless and welcoming environment for guests.</p>
          <Gallery photos={photosMillersHouse} />
        </div>
      </section>

      <section className="our-work-page__content our-work-page__content-2">
        <div className="container">
          <h2 className="our-work-page__content__title">See our work with <span>Amelia's Bistro</span></h2>
          <p className="our-work-page__content__text">Amelia’s Bistro is a distinguished restaurant where we provide deep and detailed cleaning services. Our work includes complete care of tables and chairs, thorough floor cleaning, and meticulous sanitation of the kitchen and its equipment, ensuring a spotless and hygienic environment.</p>
          <Gallery photos={photosAmeliasBistro} />
        </div>
      </section>
    </div>
  )
}

export default Work;