const normalizeEmotions = require('../middlewares/normalizeEmotions');
const mongoose = require('mongoose');
const cards = mongoose.model('cards');
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
            let id = req.body.postId;

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

                    const normalizedEmote = normalizeEmotions(emotions);
                    let whichEmote = 'neutral';

                    switch(normalizedEmote.highest) {
                        case 'neutral':
                            whichEmote = 'score.neutral';
                            break;
                        case 'joy':
                            whichEmote = 'score.joy';
                            break;
                        case 'anger':
                            whichEmote = 'score.anger';
                            break;
                        case 'surprise':
                            whichEmote = 'score.surprise';
                            break;
                        case 'sorrow':
                            whichEmote = 'score.sorrow';
                            break;
                        default:
                            break;
                    }

                    console.log(whichEmote);

                    if (id !== 2) {
                        cards.update({_id: id}, { 
                            $inc: { [whichEmote]: 1 } 
                        }, (err, card_instance) => {
                            console.log(card_instance);
                        });
                        
                        res.send(normalizedEmote);
                    } else {
                        res.send(normalizedEmote);
                    }

                    
                })
                .catch(err => {
                    console.error('ERROR:', err);                    
                    res.send(err);
            });
    });
}