import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import { Icon } from 'react-materialize';

class UploadImage extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            uploadedFileCloudinaryUrl: ''
        };
    }

    onImageDrop(files) { 
        this.setState({
            uploadedFile: files[0]
        });
      
        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        console.log(file);
    }

    render() {

        return(
            <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <div className="center">
                    <Icon large>file_upload</Icon>
                    <h5>Upload Your<br /> Dankest Meme</h5>
                </div>
            </Dropzone>
        );
    }
}

export default UploadImage;