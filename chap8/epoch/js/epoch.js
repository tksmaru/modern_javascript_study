function updateDuration() {
    'use strict'
    var now = new Date();
    var message = 'エポックから' + now.getTime();
    message += ' 秒、経過しています。（マウスを重ねると更新されます）';

    U.setText('output', message);
}

window.onload = function() {
    'use strict';
    U.addEvent(U.$('output'), 'mouseover', updateDuration);
    updateDuration();
}