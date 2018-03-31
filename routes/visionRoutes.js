// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = 'https://cloud.google.com/vision/docs/images/car.png';

module.exports = (app) => {
    app.get(
        '/api/vision_test', 
        (req, res) => {
            
            client
                .faceDetection(fileName)
                .then(results => {
                const faces = results[0].faceAnnotations;

                console.log('Faces:');
                faces.forEach((face, i) => {
                        console.log(`  Face #${i + 1}:`);
                        console.log(`    Joy: ${face.joyLikelihood}`);
                        console.log(`    Anger: ${face.angerLikelihood}`);
                        console.log(`    Sorrow: ${face.sorrowLikelihood}`);
                        console.log(`    Surprise: ${face.surpriseLikelihood}`);
                    });
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    });
}