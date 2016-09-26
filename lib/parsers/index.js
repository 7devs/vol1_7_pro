module.exports = function(data) {
    var msgType = data.msgType;
    var reContent;

    switch(msgType) {
        case 'text':
            reContent = require('./text-parser.js')(data.content);
        break;
        case 'voice':
            reContent = require('./voice-parser.js')(data.recognition);
        break;
        break;
        case 'video':
        break;
        case 'location':
        break;
        case 'shortvideo':
        break;
        default:
        break;
    }

    return reContent;
}
