export default function normalizeEmotion(emotions) {

    let newObj = mapValues(emotions, x => evalToNumber(x));
    return newObj;
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