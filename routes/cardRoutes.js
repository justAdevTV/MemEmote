const requireAuth = require('../middlewares/requireAuth');
const passport = require('passport');
const cards = mongoose.model('cards');

module.exports = (app) => {
    
    // Get all cards
    app.get(
        '/api/cards',
        (req, res) => {
            cards.find(function(err, cards) {
                if (err)
                    res.send(err);
    
                res.json(cards);
            });
        }
    );

    // Get one card
    app.get('/api/card/:cardId', (req, res) => {
        cards.findById(req.params.cardId, function(err, card) {
            if (err)
                res.send(err);
            res.json(card);
        });
    });

    // Create Card
    app.post(
        '/api/cards',
        (req, res) => {
            const body = req.body;

            cards.create({
                date: new Date(),
                author: req.user.username,
                img: body.img,
                _user: req.user._id
            }, (err, list_instance) => {
                if (err) return handleError(err);
                
                // res.redirect('/lists/' + list_instance._id);
            });
        }
    );

    // Get users cards
    app.get('/api/userCards', requireAuth, (req, res) => {
        cards.find({ '_user': req.user._id }, (err, card) => {
            if (err) return handleError(err);
            res.send(card);
        });
    });

    // Get users reacted cards
    app.get('/api/userReactedCards', requireAuth, (req, res) => {
        let selectedCards = [];

        req.user.reactedCards.array.forEach(element => {
            cards.find({ '_id': element }, (err, card) => {
                if (err) return handleError(err);
                selectedCards.push(card);
            });
        });
        res.send(selectedCards);
    });

    // Deletes Card duh
    app.delete(
        '/api/card/:cardId',
        requireAuth, 
        (req, res) => {
            cards.remove({
                _id: req.params.cardId
            }, function(err, list) {
                if (err)
                    res.send(err);
    
                res.json({ message: 'Successfully deleted' });
            });
        }
    );
}