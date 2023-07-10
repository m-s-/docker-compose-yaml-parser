/**
 * Copyright (c) 2023 by WisdomSky, All Rights Reserved.
 */

import ComposeBase from '../include/base.js';
import ComposeImage from './image.js'
import _ from "lodash";

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

    getDeploy() {
        return new ComposeServiceDeploy(this.__data.deploy);
    }

    toJSON() {
        return Object.assign({}, this.__data, { name: this.__name});
    }
}

export class ComposeServiceDeploy extends ComposeBase {
    constructor(deployObj) {
        return super(deployObj ?? "");
    }

    getPlacementConstraints()
    {
        return this.__data.placement?.constraints;
    }

    setPlacementConstraints(constraints) {
        _.merge(this.__data, { placement: { constraints }});
    }

    getCPULimit() {
        return this.__data.resources?.limits?.cpus;
    }

    setCPULimit(limit) {
        _.merge(this.__data, { resources: { limits: { cpus: limit } }});
    }

    getMemoryLimit() {
        return this.__data.resources?.limits?.memory;
    }

    setMemoryLimit(limit) {
        _.merge(this.__data, { resources: { limits: { memory: limit } }});
    }

    getCPUReservation() {
        return this.__data.resources?.reservations?.cpus;
    }

    setCPUReservation(reservation) {
        _.merge(this.__data, { resources: { reservations: { cpus: reservation } }});
    }

    getMemoryReservation() {
        return this.__data.resources?.reservations?.memory;
    }

    setMemoryReservation(reservation) {
        _.merge(this.__data, { resources: { reservations: { memory: reservation } }});
    }
}