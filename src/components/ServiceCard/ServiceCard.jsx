import './ServiceCard.scss';

function ServiceCard(props) {
  return (
    <div className="service-card">
      <div className="service-card__content">
        <div className="service-card__content__text">
          <p className="service-card__content__title">{props.title}</p>
          <p className="service-card__content__description">{props.description}</p>
        </div>
      </div>

      <div className="service-card__img">
        <img src={props.icon} alt="Icon" className="Icon Service" />
      </div>
      
      <div className="service-card__tags">
        {props.tags.map((item) => (
          <div className="service-card__tags__item">
            <img src={item[0]} alt="Icon Star" />      
            <p>{item[1]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard;