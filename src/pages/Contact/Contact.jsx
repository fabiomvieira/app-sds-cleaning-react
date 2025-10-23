import { Helmet } from "react-helmet";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
// import { Resend } from "resend";
import './Contact.scss';

function Contact() {

  function limitPhone(event) {
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.slice(0, -1)
    }
  }

  return (
    <div className="contact-us">
      <Helmet>
        <title>Contact Us | SDS Detailing Cleaning</title>
        <meta name="keywords" content="Our work, Deep cleaning, Cleaning" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://sdsdetailingcleaning.com/" />
        <meta property="og:site_name" content="SDS Detailing Cleaning" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sdsdetailingcleaning.com/" />
        <meta property="og:title" content="Contact Us | SDS Detailing Cleaning" />
        <meta property="og:description" content="We offer high-quality deep and detailed cleaning for homes and businesses, ensuring hygiene, comfort, and excellence. We always strive to provide the best cleaning service to our customers." />
        <meta name="description" content="We offer high-quality deep and detailed cleaning for homes and businesses, ensuring hygiene, comfort, and excellence. We always strive to provide the best cleaning service to our customers." />
      </Helmet>

      <InternalHeader title={'Contact Us'} />

      <section className="contact-us__content">
        <div className="container">
          <h2 className="contact-us__content__title">Send us <span>a message</span></h2>
          <p className="contact-us__content__text">Request a quote, ask a question, or send us a message about anything else. We'll respond as quickly as possible.</p>
          <p className="contact-us__content__text">Phone: (551) 554-8788<br/>Email: contact@sdsdetailingcleaning.com</p>
          
          {/* <form action="" className="contact-us__content__form">
            <div className="contact-us__content__form__group">
              <label htmlFor="formName">What is your name?</label>
              <input className="required" type="text" name="formName" id="formName" required />
            </div>

            <div className="contact-us__content__form__group">
              <label htmlFor="formEmail">What is your email?</label>
              <input className="required" type="email" name="formEmail" id="formEmail" required />
            </div>

            <div className="contact-us__content__form__group">
              <label htmlFor="formPhone">What is your phone?</label>
              <input className="required" type="number" name="formPhone" id="formPhone" required onChange={(e) => {limitPhone(e)}} />
            </div>

            <div className="contact-us__content__form__group">
              <label htmlFor="formNameCompany">What is company name?</label>
              <input className="required" type="text" name="formNameCompany" id="formNameCompany" />
            </div>

            <div className="contact-us__content__form__group">
              <label htmlFor="formLocationCompany">What is company location?</label>
              <input className="required" type="text" name="formLocationCompany" id="formLocationCompany" />
            </div>

            <div className="contact-us__content__form__group">
              <label htmlFor="formCompanyType">What is the type of your company?</label>
              <select name="formCompanyType" id="formCompanyType">
                <option>Select</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Office">Office</option>
                <option value="Clinic">Clinic</option>
                <option value="Factory">Factory</option>
                <option value="Dealership">Dealership</option>
                <option value="House">House</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="contact-us__content__form__group textarea">
              <label htmlFor="formDescription">Describe what you need</label>
              <textarea name="formDescription" id="formDescription"></textarea>
            </div>

            <div className="contact-us__content__form__btn">
              <button>Send</button>
            </div>
          </form> */}
        </div>
      </section>
    </div>
  )
}

export default Contact;