module.exports = function(data) {
    var event = data.event.toLowerCase(),
        eventKey = data.eventkey;
    var reContent;
    switch (event) {
        case 'click':
            switch (eventKey) {
                case 'menu1':
                    reContent = 'menu1 clicked.';
                    break;
                case 'menu2':
                    reContent = 'menu2 clicked.';
                    break;
                default:
                    reContent = '...';
            }
            break;
        case 'scan_sysphoto';
            reContent = JSON.stringify(data);
        break;
        default:
            reContent = event;
            break;
    }
    return reContent;
}
