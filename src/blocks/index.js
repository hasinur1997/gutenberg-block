/**
 * Block Registration
 */

/**
 *  WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks'

/**
 * Internal dependencies
 */
import * as map from './map'

import * as accordion from './accordion'

import * as countdown from './countdown'

const registerBlocks = () => {
    registerBlockType(map.name, map.settings)
    registerBlockType(accordion.name, accordion.settings)
    registerBlockType(countdown.name, countdown.settings)
}

// Kick Off all block here
registerBlocks()
