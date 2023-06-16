/**
 * Copyright (c) 2023 by WisdomSky, All Rights Reserved.
 */

import ComposeNagivator from './src/compose-navigator.js'

export default function(dockerComposeObj) {
    return new ComposeNagivator(dockerComposeObj);
}