import React, {Component} from 'react';
import Webcam from 'react-webcam';

class WebcamCapture extends Component {
    setRef = (webcam) => {
      this.webcam = webcam;
    }
   
    // Call this to capture image
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
    };
   
    render() {
      return (
        <div>
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
          />
        </div>
      );
    }
}

export default WebcamCapture;