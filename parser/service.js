/**
 * Copyright (c) 2023 by WisdomSky, All Rights Reserved.
 */

import ComposeBase from '../include/base.js';
import ComposeImage from './image.js'

export default class ComposeService extends ComposeBase {

    constructor(serviceObj, name) {
        return super(serviceObj, function() {
            this.__name = name;
        })
    }

    getName() {
        return this.__name;
    }

    getImage() {
        return new ComposeImage(this.__data)
    }

    setImage(image) {
        new ComposeImage(this.__data).setImage(image);
        return this;
    }

    getRestartPolicy() {
        return this.__data.restart;
    }

    setRestartPolicy(policy) {
        this.__data.restart = policy;
        return this;
    }

    getEnvironment() {

    }   

    toJSON() {
        return Object.assign({}, this.__data, { name: this.__name});
    }


}