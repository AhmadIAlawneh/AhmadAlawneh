import React from 'react';
import s16video from '../../assets/video (2160p).mp4'
import './VideoSection.css'
class VideoSection extends React.Component {
  render() {
    return (
      <div className="video-section">
        <video autoPlay loop muted>
          <source src={s16video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default VideoSection;