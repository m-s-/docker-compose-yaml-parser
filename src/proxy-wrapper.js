/**
 * Copyright (c) 2023 by WisdomSky, All Rights Reserved.
 */

export default function(instance) {
    return new Proxy(instance, {
        get(target, prop) {
            if (target.__data[prop] !== undefined) {
                return target.__data[prop];
            }
            return (...params) => {
                return target[prop](...params);
            }
        }
    });
}