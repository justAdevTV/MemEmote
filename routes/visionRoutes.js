// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient(
    {
        projectId: 'mememote-dev',
        keyFilename: './MemeMote-dev-f83627f12b13.json'
    }
);

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = './car.png';

module.exports = (app) => {
    app.post(
        '/api/vision_test', 
        (req, res) => {
            let pic = req.body.picture;

            client
                .faceDetection(pic)
                .then(results => {
                    const faces = results[0].faceAnnotations;
                    const emotions = {
                        joy: faces[0].joyLikelihood,
                        anger: faces[0].angerLikelihood,
                        sorrow: faces[0].sorrowLikelihood,
                        surprise: faces[0].surpriseLikelihood
                    };

                    res.send(emotions);
                })
                .catch(err => {
                    console.error('ERROR:', err);                    
                    res.send(err);
            });
    });
}