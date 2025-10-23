import './InternalHeader.scss';

function InternalHeader(props) {
  return (
    <div className="internal-header">
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className="internal-header__video">
        <source src="https://videos.pexels.com/video-files/4145631/4145631-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="internal-header__content">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default InternalHeader;