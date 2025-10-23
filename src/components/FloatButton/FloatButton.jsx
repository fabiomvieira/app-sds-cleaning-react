import contactIcon from '../../static/icon-chat.png';
import "./FloatButton.scss";

function FloatButton() {
  return (
    <div className="float-button">
      <a href="sms:+15515548788?body=Hi,%20I%20would%20like%20to%20request%20a%20detailed%20cleaning%20service">
        <img src={contactIcon} alt="Contact icon" />
      </a>
    </div>
  )
}

export default FloatButton;