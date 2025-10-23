import { Helmet } from "react-helmet";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import iconStar from '../../static/icon-star.svg';
import iconRestaurant from '../../static/icon-restauraunt-2.png';
import iconOffice from '../../static/icon-office-2.png';
import iconClinics from '../../static/icon-clinics-2.png';
import iconFactories from '../../static/icon-factories-2.png';
import iconDealer from '../../static/icon-dealer-2.png';
import iconHouse from '../../static/icon-house-2.png';
import './Services.scss';

function Services() {
  const tagDeepCleaning = [iconStar, 'Deep Cleaning']
  const tagFloorCleaning = [iconStar, 'Floor Cleaning']
  const tagKitchenCleaning = [iconStar, 'Kitchen Cleaning']
  const tagDetailedCleaning = [iconStar, 'Detailed Cleaning']
  const tagBarCleaning = [iconStar, 'Bar Cleaning']
  const tagMachineCleaning = [iconStar, 'Machine Cleaning']
  const tagCarpetCleaning = [iconStar, 'Carpet Cleaning']
  const tagEquipamentCleaning = [iconStar, 'Equipament Cleaning']
  const tagWindowCleaning = [iconStar, 'Window Cleaning']

  return (
    <div className="our-services">
      <Helmet>
        <title>Our services | SDS Detailing Cleaning</title>
        <meta name="keywords" content="Our work, Deep cleaning, Cleaning" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://sdsdetailingcleaning.com/" />
        <meta property="og:site_name" content="SDS Detailing Cleaning" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sdsdetailingcleaning.com/" />
        <meta property="og:title" content="Our services | SDS Detailing Cleaning" />
        <meta property="og:description" content="We offer high-quality deep and detailed cleaning for homes and businesses, ensuring hygiene, comfort, and excellence. We always strive to provide the best cleaning service to our customers." />
        <meta name="description" content="We offer high-quality deep and detailed cleaning for homes and businesses, ensuring hygiene, comfort, and excellence. We always strive to provide the best cleaning service to our customers." />
      </Helmet>

      <InternalHeader title={'Our services'} />

      <section className="our-services__content">
        <div className="container">
          <h2 className="our-services__content__title">See the <span>services we offer</span></h2>
          <p className="our-services__content__text">We provide a wide range of <span>cleaning services</span>, including <span>deep cleaning</span>, <span>detailed cleaning</span>, <span>window and floor care</span>, <span>carpet cleaning</span>, <span>kitchen cleaning</span>, and <span>equipment cleaning</span>. In addition, we offer customized packages designed to meet the specific needs of each client. Contact us for a quote, and let us create a cleaning solution tailored to you.</p>

          <div className="our-services__content__cards">
            <ServiceCard title={'Restaurants'} icon={iconRestaurant} description={'We provide a comprehensive restaurant cleaning package designed to ensure a spotless environment. Our service includes a detailed cleaning of the entire dining area, covering chairs, tables, windows, and light fixtures—as well as a deep and thorough cleaning of the kitchen and its equipment, among other essential tasks.'} tags={[tagDeepCleaning, tagFloorCleaning, tagKitchenCleaning, tagDetailedCleaning, tagBarCleaning]} />

            <ServiceCard title={'Offices'} icon={iconOffice} description={'We provide a complete office cleaning package, ensuring a spotless and organized workspace. Our service includes detailed cleaning of all rooms, windows, desks, and equipment. We also take care of kitchens, common areas, and any additional needs. Count on us to maintain a clean, healthy, and professional environment.'} tags={[tagDeepCleaning, tagCarpetCleaning, tagDetailedCleaning, tagEquipamentCleaning]}/>

            <ServiceCard title={'Clinics'} icon={iconClinics} description={'We provide comprehensive cleaning services for clinics, ensuring a spotless, hygienic, and sterile environment. Our work includes detailed cleaning of all areas, from tables, floors, and windows to every surface necessary, delivering the highest standards of cleanliness.'} tags={[tagDeepCleaning, tagDetailedCleaning, tagCarpetCleaning, tagEquipamentCleaning]}/>

            <ServiceCard title={'Factories'} icon={iconFactories} description={'We provide complete cleaning solutions for factories, ensuring a clean, safe, and organized production environment. Our services include detailed and thorough cleaning of machinery, factory floors, and all other necessary areas to maintain the highest standards of cleanliness and efficiency.'} tags={[tagDeepCleaning, tagDetailedCleaning, tagMachineCleaning, tagFloorCleaning]}/>

            <ServiceCard title={'Dealerships'} icon={iconDealer} description={'We provide complete cleaning services for dealerships, ensuring a spotless and well-organized environment. Our work includes detailed deep cleaning of all areas, from floors and windows to offices and any other spaces that require attention.'} tags={[tagDeepCleaning, tagDetailedCleaning, tagWindowCleaning, tagFloorCleaning]}/>

            <ServiceCard title={'Houses'} icon={iconHouse} description={'We provide comprehensive house cleaning services, creating a spotless and welcoming environment. Our work includes detailed deep cleaning of every room, thorough bathroom and window care, and overall house organization. We also address any additional cleaning needs to ensure complete satisfaction.'} tags={[tagDeepCleaning, tagWindowCleaning, tagCarpetCleaning, tagDetailedCleaning]}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services;