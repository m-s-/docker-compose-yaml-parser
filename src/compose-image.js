/**
 * Copyright (c) 2023 by WisdomSky, All Rights Reserved.
 */
import ComposeBase from './compose-base.js';

export default class ComposeImage extends ComposeBase {

    __toPrimitiveProp = 'image';

    constructor(data) {
        return super(data, function() {
            this.__data.image = String(this.__data.image);
        });
    }

    getImage() {
        return this.__data.image;
    }

    setImage(image) {
        this.__data.image = image;
        return this;
    }


    getName() {
        return this.__data.image.replace(/^((?:[^\/\:\@]+?\.[^\/\:\@]+?\/)?(?:[^\/\:\@]+(?:\/[^\/\:\@]+)?))(?:(\:|\@)([^\/\:\@]+)?)?$/, '$1');
    }

    setName(name) {
        this.__data.image = this.__data.image.replace(/^((?:[^\/\:\@]+?\.[^\/\:\@]+?\/)?(?:[^\/\:\@]+(?:\/[^\/\:\@]+)?))(?:(\:|\@)([^\/\:\@]+)?)?$/, `${name}$2$3`);

        return this;
    }

    getTag() {
        return this.__data.image.replace(/^((?:[^\/\:\@]+?\.[^\/\:\@]+?\/)?(?:[^\/\:\@]+(?:\/[^\/\:\@]+)?))(?:\:([^\/\:\@]+)?)?$/, '$2');
    }

    setTag(tag) {
        this.__data.image = this.__data.image.replace(/^((?:[^\/\:\@]+?\.[^\/\:\@]+?\/)?(?:[^\/\:\@]+(?:\/[^\/\:\@]+)?))(?:(\:|\@)([^\/\:\@]+)?)?$/, `$1:${tag}`);

        return this;
    }

    getDigest() {
        return this.__data.image.replace(/^((?:[^\/\:\@]+?\.[^\/\:\@]+?\/)?(?:[^\/\:\@]+(?:\/[^\/\:\@]+)?))(?:\@([^\/\:\@]+)?)?$/, '$2');
    }

    setDigest(digest) {
        this.__data.image = this.__data.image.replace(/^((?:[^\/\:\@]+?\.[^\/\:\@]+?\/)?(?:[^\/\:\@]+(?:\/[^\/\:\@]+)?))(?:(\:|\@)([^\/\:\@]+)?)?$/, `$1@${digest}`);

        return this;
    }

    toJSON() {
        return this.__data.image;
    }


}