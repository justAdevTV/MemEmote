// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
 
// Creates a client
const client = new vision.ImageAnnotatorClient();

module.exports = (app) => {
    app.get(
        '/api/vision_test', 
        (req, res) => {
            // Performs label detection on the image file
            client
            .labelDetection('https://codelabs.developers.google.com/codelabs/cloud-vision-intro/img/4bafc91d806a0425.png')
            .then(results => {
                const labels = results[0].labelAnnotations;

                console.log('Labels:');
                labels.forEach(label => console.log(label.description));
            })
            .catch(err => {
               console.error('ERROR:', err);
            });
    });
}