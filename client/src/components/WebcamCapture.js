import React, {Component} from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { sendEmotion } from '../actions';
import dataURItoBlob from '../middleware/dataURItoBlob';

class WebcamCapture extends Component {
    setRef = (webcam) => {
      this.webcam = webcam;
    }
    // Call this to capture image
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      {this.props.sendEmotion(2, imageSrc)};                                                                    
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
          <button onClick={this.capture}>Capture photo</button>
        </div>
      );
    }
}
export default connect(null, {sendEmotion})(WebcamCapture);