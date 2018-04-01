import React, {Component} from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import request from 'superagent';
import { sendEmotion } from '../actions';
import dataURItoBlob from '../middleware/dataURItoBlob';
import normalizeEmotions from '../middleware/normalizeEmotions';

import {Icon, Button} from 'react-materialize';

const CLOUDINARY_UPLOAD_PRESET = 'bpqajh69';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dscuecazs/image/upload';

class WebcamCapture extends Component {

    setRef = (webcam) => {
      this.webcam = webcam;
    }
    // Call this to capture image
    capture = () => {
      window.Materialize.toast('Scanning Facial MemeMotion...', 2500);
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
          // Updates the emotion
          if (this.props.postId !== undefined) {
            {this.props.sendEmotion(this.props.postId, response.body.secure_url)}; 
          } else {
            {this.props.sendEmotion(2, response.body.secure_url)}; 
          }
          }
        });
    }
   
    render() {

      if (this.props.cloudImage !== null) {
        let normVals = this.props.cloudImage.newObj;
        let highest = this.props.cloudImage.highest;
        
        const {joy, anger, surprise, sorrow} = normVals;

        if (highest === 'neutral') {
          window.Materialize.toast(`You're pretty neutral`, 4000);
        }
        else if (highest === 'joy') {
          window.Materialize.toast(`You look pretty happy!`, 4000);
        }
        else if (highest === 'anger') {
          window.Materialize.toast(`You look quite upset.`, 4000);
        }
        else if (highest === 'surprise') {
          window.Materialize.toast(`You look very surprised!`, 4000);
        } else if (highest === 'sorrow') {
          window.Materialize.toast(`Aww, sucks to see you sad.`, 4000);
        }   
      }

      return (
        <div className="center">
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
          />
          <Button onClick={this.capture} waves='light'>Capture MemeMotion<Icon right>camera_alt</Icon></Button>
        </div>
      );
    }
}

function mapStateToProps({cloudImage}) {
  return {cloudImage};
}

export default connect(mapStateToProps, {sendEmotion})(WebcamCapture);