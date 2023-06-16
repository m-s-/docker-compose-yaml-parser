/**
 * Copyright (c) 2023 by WisdomSky, All Rights Reserved.
 */
import fs from 'fs'
import jsyaml from 'js-yaml'
import ComposeBase from '../include/base.js';
import ComposeService from './service.js'

export default class ComposeParser extends ComposeBase {

    constructor(dockerComposeObj) {
        return super(dockerComposeObj);
    }

    getService(service = null) {
        if (service === null && Object.keys(this.__data.services).length > 1) {
            throw Error('Services is ambiguous. Services contain more than 1 service. You need to specify which service to retrieve or use getServices()')
        } else if (service === null) {
            service = Object.keys(this.__data.services)[0];
        }
        return new ComposeService(this.__data.services[service], service);
    }

    getServices() {
        let services = [];

        for (const service in this.__data.services) {
            services.push(new ComposeService(this.__data.services[service], service));
        }

        return services;
    }

    json() {
        return this.__data;
    }

    text() {
        return  jsyaml.dump(this.json(), { lineWidth: -1});
    }

    toJSON() {
        return this.__data;
    }

    writeToFile(path) {
        try {
            fs.writeFileSync(path, this.text());
        } catch (e) {
            console.log(e);
        }
    }

}







