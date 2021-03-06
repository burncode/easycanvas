import constants from 'constants';

import painter from './painter/index.js';
import tick from 'utils/tick.js';
import mirror from 'utils/mirror.js';
import utils from 'utils/utils.js';
import transition from 'utils/transition.js';
import imgLoader from 'utils/img-loader.js';
import imgPretreat from 'utils/img-pretreat.js';
import multlineText from 'utils/multline-text';
import sprite from './class/sprite.js';

import chromeDevtoolBridge from './bridge/chrome-devtool.js';

const Easycanvas = {
    painter,
    imgLoader,
    imgPretreat,
    multlineText,
    transition,
    tick,
    utils,
    mirror,
    // 这个class只是为了兼容老版本写法“new Easycanvas.class.sprite(opt);”
    class: {
        sprite: sprite
    },
    sprite,
    $version: constants.version,
    env: process.env.NODE_ENV,
};

Easycanvas.extend = function (pluginHook) {
    let $extendList = Easycanvas.sprite.prototype.$extendList;

    if ($extendList.indexOf(pluginHook) >= 0) return;

    $extendList.push(pluginHook);
};

Easycanvas.use = function (pluginHook) {
    let $extendList = Easycanvas.painter.prototype.$extendList;

    if ($extendList.indexOf(pluginHook) >= 0) return;

    if (pluginHook.onUse) {
        pluginHook.onUse(Easycanvas);
    }

    $extendList.push(pluginHook);
};

Easycanvas.component = function (componentInit, namespace) {
    componentInit(Easycanvas, namespace);
};

// if (process.env.NODE_ENV !== 'production') {
//     Easycanvas.$warn = (() => {
//         let lastConsoleTime = 0;
//         return function () {
//             let now = Date.now();
//             if (now - lastConsoleTime < 1000) {
//                 // 防止连续警告
//                 return;
//             }

//             let args = Array.prototype.slice.call(arguments);

//             lastConsoleTime = now;
//             console.warn.apply(this, args);
//         };
//     })();
// }

const inBrowser = typeof window !== 'undefined';

if (inBrowser) {
    if (window.Easycanvas) {
        console.warn('[Easycanvas] already loaded, it should be loaded only once.');
    } else {
        if (process.env.NODE_ENV !== 'production') {
            setTimeout(() => {
                console.log(`%c Easycanvas %c You are using the develop version ${constants.version} %c`,
                    "background:#4086f4; padding: 2px 0; border-radius: 2px 0 0 2px;  color: #fff",
                    "background:#41b883; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff",
                    "background:transparent");
            }, 500);
        }
        if (process.env.UMD === 'true') {
            window.Easycanvas = Easycanvas;
        }
    }
}

module.exports = Easycanvas;
