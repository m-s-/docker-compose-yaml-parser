/**
 * Copyright (c) 2023 by WisdomSky, All Rights Reserved.
 */
import fs from 'fs'
import jsyaml from 'js-yaml'
import ComposeParser from './parser/parser.js'

export default class Parser {
    constructor(dockerComposeFilePath) {
        return Parser.parse(jsyaml.load(fs.readFileSync(dockerComposeFilePath, 'utf8')));
    }

    static parse(dockerComposeObjOrString) {
        if (typeof dockerComposeObjOrString === 'string') {
            return new ComposeParser(jsyaml.load(dockerComposeObjOrString));
        }
        return new ComposeParser(dockerComposeObjOrString);
    }

}