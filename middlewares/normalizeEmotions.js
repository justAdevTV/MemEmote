const _ = require('lodash');

module.exports = (emotions) => {

    let highest = 'neutral';

    let newObj = mapValues(emotions, x => evalToNumber(x));
    if (emotions.joy == emotions.surprise && emotions.joy == emotions.anger
         && emotions.joy == emotions.sorrow) {
            highest = 'neutral';
    } else {
        let maxKey = _.maxBy(_.keys(newObj), function (o) { return newObj[o]; });
        highest = maxKey;
    }
    return {newObj, highest};
}

// Retain object structure
function mapValues(myObj, transform) {
    let newObj = {};
    for (let key in myObj) {
        newObj[key] = transform(myObj[key]);
    }
    return newObj;
}

function evalToNumber(name) {
    switch (name){
        case 'VERY_UNLIKELY':
            return 12.42;
        case 'UNLIKELY':
            return 29.99;
        case 'POSSIBLE':
            return 59.99;
        case 'LIKELY':
            return 79.99;
        case 'VERY_LIKELY':
            return 99.99;
        default:
            return 0;
    }
}