import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Icon, Preloader } from 'react-materialize';

import {connect} from 'react-redux'; 
import { createCard } from '../actions'; 

const CLOUDINARY_UPLOAD_PRESET = 'bpqajh69';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dscuecazs/image/upload';

class UploadImage extends Component {
    
    constructor(props) { 
        super(props);

        this.state = {
            uploadedFileCloudinaryUrl: '',
            loading: false
        };
    }

    onImageDrop(files) { 
        this.setState({
            uploadedFile: files[0],
            loading: true
        });
      
        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

        upload.end((err, response) => {
        if (err) {
            console.error(err);
        }

        if (response.body.secure_url !== '') {
            this.setState({
                uploadedFileCloudinaryUrl: response.body.secure_url,
                loading: false
            });


            const imgUrl = this.state.uploadedFileCloudinaryUrl; 

            this.props.createCard({img: imgUrl}); 

            window.Materialize.toast(`Your meme is now uploaded!`, 8000);
        }
        });
    }

    renderImage() {
        if (this.state.loading) {
            return <Preloader size='big'/>;
        }

        return (
            <div>
                {this.state.uploadedFileCloudinaryUrl === '' ? null :
                    <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <div>
                            <img width="50%" src={this.state.uploadedFileCloudinaryUrl} />
                        </div>
                    </div>
                }
            </div>  
        );        
    }

    render() {
        return(
            <form>
                <div className="FileUpload">
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>
                        <div className="center">
                            <Icon large>file_upload</Icon>
                            <h5>Upload Your<br /> Dankest Meme</h5>
                        </div>
                    </Dropzone>
                </div>
                {this.renderImage()}
            </form>
            
        );
    }
}

export default connect(null, {createCard})(UploadImage);