const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

// Keys
const keys = require('./config/keys');

// Models
require('./models/User');
require('./models/Card');
mongoose.connect(keys.mongoURI);

// require('./services/cloudVision');

// Just runs passport
require('./services/passport');

// Cookie Session
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

// Makes Data Neat
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Passport.js init
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app);
require('./routes/cardRoutes')(app); 
require('./routes/visionRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like out main.js file or main.css

    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);