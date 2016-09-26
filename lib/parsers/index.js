module.exports = function(data) {
    var msgType = data.msgtype;
    var reContent;
condole.log(data);
    switch(msgType) {
        case 'text':
            reContent = require('./text-parser.js')(data.content);
        break;
        case 'voice':
            reContent = require('./voice-parser.js')(data.recognition);
        break;
        case 'event':
            reContent = require('./event-parser.js')(data);
        break;
        case 'video':
        case 'location':
        case 'shortvideo':
        default:
            reContent = 'I have no idea.\n' + JSON.stringify(data);
        break;
    }

    return reContent;
}
