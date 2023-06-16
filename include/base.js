
import proxyWrapper from './proxy-wrapper.js';

export default class ComposeBase {
    
    __data = null;
    __toPrimitiveProp = null;

    constructor(data, callback = function() {}) {
        this.__data = data;
        callback.call(this);
        return proxyWrapper(this);
    }

    [Symbol.toPrimitive]() {
        if (this.__toPrimitiveProp !== null) {
            return this.__data[this.__toPrimitiveProp];
        }
        return JSON.stringify(this.__data);
    }
}