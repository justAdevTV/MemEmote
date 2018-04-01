import React, {Component} from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import request from 'superagent';
import { sendEmotion } from '../actions';
import dataURItoBlob from '../middleware/dataURItoBlob';

const CLOUDINARY_UPLOAD_PRESET = 'bpqajh69';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dscuecazs/image/upload';

class WebcamCapture extends Component {

    setRef = (webcam) => {
      this.webcam = webcam;
    }
    // Call this to capture image
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      this.handleImageUpload(imageSrc);                                                                   
    };

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
        if (err) {
            console.error(err);
        }

        if (response.body.secure_url !== '') {
            {this.props.sendEmotion(2, response.body.secure_url)}; 
          }
        });
    }
   
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

function mapStateToProps({cloudImage}) {
  return {cloudImage};
}

export default connect(mapStateToProps, {sendEmotion})(WebcamCapture);